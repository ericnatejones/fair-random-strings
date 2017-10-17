const fs = require('fs');
const path = require('path');

const students = JSON.parse(fs.readFileSync(path.join(__dirname, 'weighted-students.json'), 'utf8'));

const studentsArray = []

for (student in students){
  students[student] ++
  for (let i = 0; i < students[student]; i++){
    studentsArray.push(student)
  }
}

const selectedStudent = studentsArray[Math.floor(Math.random()*studentsArray.length)]

students[selectedStudent] = 0

fs.writeFile(path.join(__dirname, 'weighted-students.json'), JSON.stringify(students), ()=>{console.log(selectedStudent)});
