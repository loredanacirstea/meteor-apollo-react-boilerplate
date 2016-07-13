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
  #  searchLists(titleContains: String): [List]
  }

  schema {
    query: Query
  }
`];

export default schema;