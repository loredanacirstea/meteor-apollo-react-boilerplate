import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Tasks from './tasks';

let taskSchema = SchemaBridge.schema(Tasks.schema);

taskSchema = `
  type Task {
    ${taskSchema}
    taskList: List
  }
`

export default taskSchema;

