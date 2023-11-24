/*------------------
#Channel --> Full Stack Niraj
#Youtube Video --> https://www.youtube.com/watch?v=IpQJtgoxs2w
#Name of Video --> TypeScript For Beginners - A Crash Course
*/
/*--------------------
#Part Of the Video --> Types for Objects and Arrays
--------------------*/
/*

const user: {
  name: string;
  age: number;
  isMarried: boolean;
  hubbies: string[];
} = {
  name: "Dario Jose",
  age: 28,
  isMarried: false,
  hubbies: ["Playing", "Football", "Watching Movies"],
};

const users: {
  name: string;
  age: number;
  isMarried: boolean;
  hubbies: string[];
}[] = [user];

*/

/*--------------------
#Part Of the Video --> Type Keyword & Optional Type
#Command -> tsc --noEmitOnError app.ts
--------------------*/

type user = {
  name: string;
  age: number;
  isMarried: boolean;
  hubbies: string[];
  gender?: string; //Gender is optional because of this --> ?
};

const user: user = {
  name: "Dario Jose",
  age: 28,
  isMarried: false,
  hubbies: ["Playing", "Football", "Watching Movies"],
};

const userTwo: user = {
  name: "Dario Jose",
  age: 28,
  isMarried: false,
  hubbies: ["Playing", "Football", "Watching Movies"],
  gender: "male",
};

const users: user[] = [user];
