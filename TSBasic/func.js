/*------------------
#Channel --> Full Stack Niraj
#Youtube Video --> https://www.youtube.com/watch?v=IpQJtgoxs2w
#Name of Video --> TypeScript For Beginners - A Crash Course
*/
/*--------------------
#Part Of the Video --> Functions
#Command -> tsc --noEmitOnError func.ts
--------------------*/
var calculateMyAge = function (birthYear) {
    return new Date(Date.now()).getFullYear() - birthYear; // the age according to the birthYear
};
var myAge = calculateMyAge(1995);
console.log(myAge);
function greetMe(userInfo) {
    return (userInfo.name +
        ". It's nice to know you are " +
        userInfo.age +
        " years old.");
}
console.log(greetMe({ name: "Dario", age: 27 }));
