import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Lists from './lists';

const listMocks = SchemaBridge.mocks(Lists.schema, {name: 'List'});

export default listMocks;