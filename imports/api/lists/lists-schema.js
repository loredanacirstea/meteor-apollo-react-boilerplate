import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Lists from './lists';

import taskSchema from '../tasks/tasks-schema';

let listSchema = SchemaBridge.schema(Lists.schema, 'List', {wrap: false});

listSchema = `
  ${listSchema.objects}
  type List {
    ${listSchema.fields}
    tasks: [Task]
 }`;

export default listSchema;