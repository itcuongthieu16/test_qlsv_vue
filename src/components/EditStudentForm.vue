<template>
  <div>
    <h2>Edit Student</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" v-model="selectedStudent.name">
      <br>
      <label for="age">Age:</label>
      <input type="number" v-model="selectedStudent.age">
      <br>
      <button v-on:click.prevent="saveStudent">Save</button>
      <button v-on:click.prevent="cancelEdit">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['selectedStudent'],
  methods: {
    saveStudent() {
      this.$emit('save', this.selectedStudent)
    },
    cancelEdit() {
      this.$emit('cancel')
    }
  }
}
</script>