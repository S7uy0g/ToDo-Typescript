
let name:string|number;/*Union*/
let age:number;
let isStudent:boolean;
let hobbies:string[];
let role:[number,string];

/*Objects*/
type Person={
    name:string;
    age:number;
    number?:number;
}
let person:Person={
    name:"Suyog Rai",
    age:21,
}
let lotsOfPeople:Person[];
lotsOfPeople=[
    { name: "Prapti", age: 21 },  
    { name: "John Doe", age: 30 }, 
    { name: "Jane Doe", age: 25 },
  ];


const types = () => {
  return (
    <div>
      Hello World
      {person.name}
      {lotsOfPeople.map((person, index) => (
          <p key={index}>{`${person.name} is ${person.age} years old`}</p>
        ))}
    </div>
  )
}

export default types