const students = [
    {id: 21, name: "Sakib Khan"}, 
    {id: 22, name: "Rubel Hossen"}, 
    {id: 25, name: "Purnima "}, 
    {id: 40, name: "Omar Sanny"}, 
    {id: 55, name: "Sakil Khan"}
]; 

// const stNew = []; 

// for(let i = 0; i<students.length; i++){
//     const newSt = students[i];
//     stNew.push(newSt);
// }
// console.log(stNew);

const name = students.map( n => n.name); 
const ids = students.map(id => id.id);
const bigger = students.filter(s => s.id<40);

console.log(bigger); 