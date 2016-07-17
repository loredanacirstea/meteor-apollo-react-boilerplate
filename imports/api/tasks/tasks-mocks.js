import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Tasks from './tasks';

const taskMocks = SchemaBridge.mocks(Tasks.schema, {name: 'Task'});

export default taskMocks;