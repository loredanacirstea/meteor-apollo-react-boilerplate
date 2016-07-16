import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Lists from './lists';

const listResolvers = SchemaBridge.resolvers({schema: Lists.schema, name: 'List'});

export default listResolvers;