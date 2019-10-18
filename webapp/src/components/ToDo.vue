<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="updateTodo"/>
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <button v-on:click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  props: {
    todo: {
      type: Object,
      default: () => {
        return {title: "defaultTitle", done: false};
      }
    }
  },
  methods: {
    updateTodo(value) {
      console.log("clicked")
      console.log(value);
      this.$store.commit('updateTodo', {...this.todo, done:value})
    },
    deleteTodo() {
      console.log("clicked")
      this.$store.commit('deleteTodo', {...this.todo})
    }
  }
};
</script>