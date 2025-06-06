
import countries from "./countries_data"
// Destructure the countries object print name, capital, population and languages of all countries



// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
    //const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    //Destructure Here 



    console.log(name, skills, jsScore, reactScore)
    //This is the intended outcome =>  David (4) ["HTM", "CSS", "JS", "React"] 90 95

// Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
    //Desturcture Here 





    console.log(convertArrayToObject(students))
    //This is the intended Outcome 
        // [
        //   {
        //     name: 'David',
        //     skills: ['HTM','CSS','JS','React'],
        //     scores: [98,85,90,95]
        //   },
        //   {
        //     name: 'John',
        //     skills: ['HTM','CSS','JS','React'],
        //     scores: [85, 80,85,80]
        //   }
        // ]
// Copy the student object to newStudent without mutating the original object. In the new object add the following ?



// Add Bootstrap with level 8 to the front end skill sets



// Add Express with level 9 to the back end skill sets



// Add SQL with level 8 to the data base skill sets



// Add SQL without level to the data science skill sets
    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
    //The copied object output should look like this:
    //This is the intended Outcome 
        //     {
        //     name: 'David',
        //     age: 25,
        //     skills: {
        //       frontEnd: [
        //         {skill: 'HTML',level: 10},
        //         {skill: 'CSS',level: 8},
        //         {skill: 'JS',level: 8},
        //         {skill: 'React',level: 9},
        //         {skill: 'BootStrap',level: 8}
        //       ],
        //       backEnd: [
        //         {skill: 'Node',level: 7},
        //         {skill: 'GraphQL',level: 8},
        //         {skill: 'Express',level: 9}
        //       ],
        //       dataBase: [
        //         { skill: 'MongoDB',level: 7.5},
        //         { skill: 'SQL',level: 8}
        //       ],
        //       dataScience: ['Python','R','D3.js','SQL']
        //     }
        //   }