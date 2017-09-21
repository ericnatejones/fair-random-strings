const fs = require('fs');
const path = require('path');
const stringList = ["Jamie", "Phat", "John", "Arlus", "Osha", "Nonnie", "Adam", "Kit", "Dallin", "Dylan", "Mac", "Ammon", "Calvin", "Dylgar"];

let students = JSON.parse(fs.readFileSync(path.join(__dirname, 'students.json'), 'utf8'));

let randomNumber = Math.floor(Math.random() * students.length);

let finalString = `+++\n++\n+\n++\n+++\n+++++          ${students.splice(randomNumber, 1).join()}\n+++\n++\n+\n++\n+++`;

if (students.length === 0){
  students = stringList;
}

fs.writeFile(path.join(__dirname, 'students.json'), JSON.stringify(students), ()=>{console.log(finalString)});
