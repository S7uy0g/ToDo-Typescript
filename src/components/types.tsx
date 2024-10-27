
let name:string|number;/*Union*/
let age:number;
let isStudent:boolean;
let hobbies:string[];
let role:[number,string];

/*Objects*/
type Person={
    name:string;
    age:number;
    number?:number;/*optional field*/
}
let person:Person={  /*Class*/
    name:"Suyog Rai",
    age:21,
}
let lotsOfPeople:Person[];  /*Object*/
lotsOfPeople=[
    { name: "Prapti", age: 21 },  
    { name: "John Doe", age: 30 }, 
    { name: "Jane Doe", age: 25 },
  ];


interface Guy extends Person{
  position:string;
}

let guy:Guy={
  position: "Engineer",
  name: "John Doe",
  age: 0
}

const types = () => {
  return (
    <div>
      Hello World
      {person.name}
      {lotsOfPeople.map((person, index) => (
          <p key={index}>{`${person.name} is ${person.age} years old`}</p>
        ))}
      <div>{guy.name} is a {guy.position} who is {guy.age}</div>
    </div>
  )
}

export default types