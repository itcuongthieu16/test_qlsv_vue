<template>
    <div>
        <h1>Student Management</h1>
        <add-student-form v-on:add="addStudent"></add-student-form>
        <student-list :students="students" v-on:edit="editStudent" v-on:delete="deleteStudent"></student-list>
        <edit-student-form v-if="selectedStudent !== null" :selected-student="selectedStudent" v-on:save="saveStudent"
            v-on:cancel="cancelEdit"></edit-student-form>
    </div>
</template>

<script>
import StudentList from './StudentList.vue'
import AddStudentForm from './AddStudentForm.vue'
import EditStudentForm from './EditStudentForm.vue'

export default {
    data() {
        return {
            students: JSON.parse(localStorage.getItem('students') || '[]'),
            selectedStudent: null
        }
    },
    methods: {
        addStudent(newStudent) {
            this.students.push(newStudent)
            localStorage.setItem('students', JSON.stringify(this.students))
        },
        editStudent(index) {
            this.selectedStudent = { ...this.students[index] }
        },
        saveStudent(updatedStudent) {
            const index = this.students.findIndex(student => student.name === updatedStudent.name && student.age === updatedStudent.age)
            if (index !== -1) {
                this.students[index] = updatedStudent
                localStorage.setItem('students', JSON.stringify(this.students))
                this.selectedStudent = null
            }
        },
        cancelEdit() {
            this.selectedStudent = null
        },
        deleteStudent(index) {
            if (confirm('Are you sure you want to delete this student?')) {
                this.students.splice(index, 1)
                localStorage.setItem('students', JSON.stringify(this.students))
            }
        }
    },
    components: {
        StudentList,
        AddStudentForm,
        EditStudentForm
    }
}
</script>