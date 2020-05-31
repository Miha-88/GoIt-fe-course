import users from "../script/users.js";

("use strict");

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((allSkills, { skills }) => [...allSkills, ...skills], [])
    .filter((skill, index, skillsAll) => skillsAll.indexOf(skill) === index)
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
