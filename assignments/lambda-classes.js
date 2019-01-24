// CODE here for your Lambda Classes


// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor({name, location, gender}) {
        this.name = name;
        this.location = location;
        this.gender = gender;
    }
    speak () {
        return `Hello my name is ${this.name} I am from ${this.location}`;
    }
};


// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'


class Instructor extends Person {
    constructor({name, location, gender, specialty, favLanguage, catchPhrase}) {
        super({name, location, gender});
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
    evaluate() {
        return student.grade + (Math.random()*10);
    }
};

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`


class Student extends Person {
    constructor({name, location, gender, previousBackground, className, favSubjects, grade = 78}) {
        super({name, location, gender});
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = grade;
    }
    listsSubjects() {
        // `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
        this.favSubjects.forEach(function(e) {
            return `${e}`
        });
    }
    PRAssignement(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`
    }
    graduate(){
        if(this.grade >= 70) {
            return `${this.name} is ready to graduate!`
        } else return `${this.name} is not ready yet to graduate!`
    }
};

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`


class ProjectManager extends Instructor {
    constructor({name, location, gender, specialty, favLanguage, catchPhrase, gradClassName, favInstructor}) {
        super({name, location, gender, specialty, favLanguage, catchPhrase});
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​`;
    };
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
};


// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.


const gabe = new Instructor({
    name: 'Gabe',
    location: 'Bedrock',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });

  const max = new Student({
    name: 'Maxime',
    location: 'Paris',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Alright, alright, alright`,
  });

  console.log(gabe.demo("Javascript IV"));
  console.log(gabe.grade(max, "Javascript IV"));



