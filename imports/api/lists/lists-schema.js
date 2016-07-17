import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Lists from './lists';

import taskSchema from '../tasks/tasks-schema';

let listSchema = SchemaBridge.schema(Lists.schema);

listSchema = `
  type List {
    _id: String!
    ${listSchema}

   tasks: [Task]
 }
`;

export default listSchema;