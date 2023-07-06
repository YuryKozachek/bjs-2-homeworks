function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  const marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
 
  this.marks = marksToAdd;
   if(!this.marks){
   console.log("Студент отчислен");
   return;
  }
}

Student.prototype.getAverage = function () {
  if(!this.marks || !this.marks.length){
    return 0;
  }
  const sum = this.marks.reduce((acc, i) => acc + i);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
}
