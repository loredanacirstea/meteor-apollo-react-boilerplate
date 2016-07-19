import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Tasks from './tasks';

const taskMocks = SchemaBridge.mocks(Tasks.schema, 'Task');

export default taskMocks;