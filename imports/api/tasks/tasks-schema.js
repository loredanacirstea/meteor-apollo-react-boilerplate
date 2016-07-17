import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Tasks from './tasks';

let taskSchema = SchemaBridge.schema(Tasks.schema);

//let taskSchema = SchemaBridge.schema(Tasks.schema, {except: ['list']});

taskSchema = `
  type Task {
    _id: String!
    ${taskSchema}

   taskList: List
 }
`;


export default taskSchema;