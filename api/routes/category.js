import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Category from '../entities/category';

const router = Router();
router.route('/categories')
  .all(isAuthenticated)
  .get((req, res) => {
    res.send(req.user.categories);
  })
  .post((req, res) => {
    const { name } = req.body;
    const manager = getManager();
    const category = manager.create(Category, { name });
    category.user = req.user;
    manager.save(category).then((savedCategory) => {
      res.send(savedCategory);
    });
  });
router.route('/categories/:id')
  .all(isAuthenticated)
  .all((req, res, next) => {
    getRepository(Category).findOneOrFail(
      { where: { categoryId: req.user.id, id: req.params.id } },
    ).then((_foundCategory) => {
      req.category = _foundCategory;
      next();
    }, () => {
      res.send(404);
    });
  })
  .put((req, res) => {
    const foundCategory = req.category;
    const { name } = req.body;
    foundCategory.name = name;
    getManager().save(foundCategory).then((updatedCategory) => {
      res.send(updatedCategory);
    });
  })
  .get((req, res) => {
    res.send(req.category);
  })
  .delete((req, res) => {
    getManager().delete(ToDo, req.category.id).then(() => {
      res.send(200);
    });
  });

export default router;
