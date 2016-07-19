import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Lists from './lists';
import Tasks from '../tasks/tasks';

let listResolvers = SchemaBridge.resolvers(Lists.schema, 'List');

listResolvers.List.tasks = (root, args, context) => {
  return Tasks.find({list: root._id}).fetch();
};

export default listResolvers;