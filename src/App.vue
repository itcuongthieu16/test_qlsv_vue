<template>
    <div>
        <h1>Student Management</h1>
        <form>
            <label for="name">Tên sinh viên:</label>
            <input type="text" v-model="newStudent.name">
            <br>
            <label for="age">Age:</label>
            <input type="number" v-model="newStudent.age">
            <br>
            <button v-on:click.prevent="addStudent">Add Student</button>
        </form>
        <ul>
            <li v-for="(student, index) in students" :key="index">
                {{ student.name }} ({{ student.age }})
                <button v-on:click.prevent="editStudent(index)">Edit</button>
                <button v-on:click.prevent="deleteStudent(index)">Delete</button>
            </li>
        </ul>
        <div v-if="selectedStudent !== null">
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
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            students: JSON.parse(localStorage.getItem('students') || '[]'),
            newStudent: { name: '', age: '' },
            selectedStudent: null
        }
    },
    methods: {
        addStudent() {
            this.students.push(this.newStudent)
            this.newStudent = { name: '', age: '' }
            localStorage.setItem('students', JSON.stringify(this.students))
        },
        editStudent(index) {
            this.selectedStudent = Object.assign({}, this.students[index])
        },
        saveStudent() {
            this.students.splice(this.students.indexOf(this.selectedStudent), 1, this.selectedStudent)
            this.selectedStudent = null
            localStorage.setItem('students', JSON.stringify(this.students))
        },
        cancelEdit() {
            this.selectedStudent = null
        },
        deleteStudent(index) {
            this.students.splice(index, 1)
            localStorage.setItem('students', JSON.stringify(this.students))
        }
    }
}
</script>