import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Lists from './lists';

const listSchema = SchemaBridge.schema({schema: Lists.schema, name: 'List'});

export default listSchema;