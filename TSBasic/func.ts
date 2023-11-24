/*------------------
#Channel --> Full Stack Niraj
#Youtube Video --> https://www.youtube.com/watch?v=IpQJtgoxs2w
#Name of Video --> TypeScript For Beginners - A Crash Course
*/
/*--------------------
#Part Of the Video --> Functions
#Command -> tsc --noEmitOnError func.ts
--------------------*/
const calculateMyAge = (birthYear: number): number => {
  return new Date(Date.now()).getFullYear() - birthYear; // the age according to the birthYear
};

const myAge: number = calculateMyAge(1995);

console.log(myAge);

function greetMe(userInfo: { name: string; age: number }): string {
  return (
    userInfo.name +
    ". It's nice to know you are " +
    userInfo.age +
    " years old."
  );
}

console.log(greetMe({ name: "Dario", age: 27 }));
