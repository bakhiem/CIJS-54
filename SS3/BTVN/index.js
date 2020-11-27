import { Student } from './student.js'
import { StudentCollection } from './studentCollection.js'
const studentCollection = new StudentCollection()
studentCollection.addStudent(new Student('12A', 'Nguyen A', 18, 'Ha Noi'))
studentCollection.addStudent(new Student('11A', 'Nguyen Van', 21, 'Ha Noi'))
studentCollection.addStudent(new Student('10A', 'Nguyen C', 22, 'Hai Duong'))

console.log(studentCollection)