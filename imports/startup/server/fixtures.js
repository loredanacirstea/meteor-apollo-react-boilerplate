// fill the DB with example data on startup
import Lists from '../../api/lists/lists';
import Tasks from '../../api/tasks/tasks';

let listdata = [
  {
    "_id" : "578ac00dc77bd3835daa0589",
    "title" : "To Dos",
    "description" : "Things that I have to do",
    "ordering" : 1,
    "noOfTasks" : 4,
    "creator" : "Lore",
    "sublist" : {
        "field1" : "sublist field1",
        "field2" : 2
    },
    "locked" : false
  }
];

let taskdata = [
  {
    "_id" : "578ac0b7c77bd3835daa058a",
    "list" : "578ac00dc77bd3835daa0589",
    "title" : "Do a video",
    "description" : "Do a video demo of schema-graphql-bridge",
    "ordering" : 1,
    "creator" : "Lore",
    "status" : 0
  },
  {
    "_id" : "578ac0e8c77bd3835daa058b",
    "list" : "578ac00dc77bd3835daa0589",
    "title" : "Write a README.md file",
    "description" : "Write a README.md file for schema-graphql-bridge",
    "ordering" : 2,
    "creator" : "Lore",
    "status" : 0
  }
];

if(!Lists.findOne()) {
  listdata.forEach(d => {
    Lists.insert(d);
  });
  taskdata.forEach(d => {
    Tasks.insert(d);
  });
}