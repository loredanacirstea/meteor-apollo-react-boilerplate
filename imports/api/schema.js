import listSchema from './lists/lists-schema';
import taskSchema from './tasks/tasks-schema';

const schema = [`
  ${listSchema}

  ${taskSchema}

  type Query {
    list(id: String): List
    task(id: String!): Task
  }

  schema {
    query: Query
  }

`];

export default schema;


/*
const schema = [`
  type List {
    id: String!
    title: String
    description: String
    tasks: [Task]
  }

  type Task {
    id: String!
    title: String
    description: String
    list: List
  }

  type Query {
    list(id: String!): List
    task(id: String!): Task
  }

  schema {
    query: Query
  }
`];*/