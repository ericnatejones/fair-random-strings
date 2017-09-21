const fs = require('fs');
const path = require('path');
const stringList = ["Jamie", "Phat", "John", "Arlus", "Osha", "Nonnie", "Adam", "Kit", "Dallin", "Dylan", "Mac", "Ammon", "Calvin", "Dylgar"]

let students = fs.readFileSync(path.join(__dirname, 'students.json'), 'utf8');

students = students.split(',')
let lastStudent = students[students.length-1]
students[students.length - 1] = lastStudent.slice(0, lastStudent.length);

let randomNumber = Math.floor(Math.random() * students.length)

let finalString = `+++\n++\n+\n++\n+++\n+++++       ${students.splice(randomNumber, 1).join()}\n+++\n++\n+\n++\n+++`

console.log(finalString);

if (students.length <= 0){
  students = stringList;
}

fs.writeFile(path.join(__dirname, 'students.json'), students, ()=>"Success");
