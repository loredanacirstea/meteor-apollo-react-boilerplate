import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Tasks from './tasks';

let taskSchema = SchemaBridge.schema(Tasks.schema, 'Task', {wrap: false});

taskSchema = `
  ${taskSchema.objects}
  type Task {
    ${taskSchema.fields}
    taskList: List
  }`;

export default taskSchema;

