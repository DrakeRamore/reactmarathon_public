//const Checker = require('./Checker.js');

class Student {
    
    constructor(fullName, direction) {
      this._fullName = fullName;
      this._direction = direction;
    }

    showFullName() {
        return this._fullName;
    }

    nameIncludes(data) {
        return this.showFullName().includes(data);
    }

    static studentBuilder() {
        /*this._fullName = "Ihor Kohut";
        this._direction = "qc";*/
        return new Student("Ihor Kohut", "qc");
    }

    get direction() {
        return this._direction;
    }

    set direction(value) {
        this._direction = value;
    }
}

let stud1 = new Student("Ivan Petrenko", "web");
let stud2 = new Student("Serhiy Koval", "python");
let stud3 = Student.studentBuilder();