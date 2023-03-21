<template>
  <form>
    <label for="name">Name:</label>
    <input type="text" v-model="newStudent.name">
    <br>
    <label for="age">Age:</label>
    <input type="number" v-model="newStudent.age">
    <br>
    <button v-on:click.prevent="addStudent">Add Student</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newStudent: { name: '', age: '' },
    }
  },
  methods: {
    addStudent() {
      this.$emit('add', this.newStudent)
      this.newStudent = { name: '', age: '' }
    }
  }
}
</script>