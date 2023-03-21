<template>
  <ul>
    <li v-for="(student, index) in students" :key="index">
      {{ student.name }} ({{ student.age }})
      <button v-on:click.prevent="editStudent(index)">Edit</button>
      <button v-on:click.prevent="deleteStudent(index)">Delete</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['students'],
  methods: {
    editStudent(index) {
      this.$emit('edit', index)
    },
    deleteStudent(index) {
      this.$emit('delete', index)
    }
  }
}
</script>