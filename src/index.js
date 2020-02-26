// import groupBy from "lodash-es"
import { sortBy, groupBy } from "lodash-es"
import people from './people'

// const managerGroups = groupBy(people, "manager");
const managersSorted = sortBy(people, function (item) {
  return item.id;
});

const root = document.createElement("div");
// root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;
root.innerHTML = `<pre>${JSON.stringify(managersSorted, null, 2)}</pre>`;
document.body.appendChild(root);
// console.log(managerGroups);

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
 key === 'name' ? Object.defineProperty(user, "name", { writable: false }) : null ;
 // console.log( key + ' - descriptior: ', Object.getOwnPropertyDescriptor(user, key));
}

let clone = {
  'first field': 'one'
};

for (let key in user) {
  clone[key] = user[key];      
}

clone.name = 'empty';

// console.log(clone, user);