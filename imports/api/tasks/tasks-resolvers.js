import SchemaBridge from 'meteor/kuip:schema-graphql-bridge';
import Tasks from './tasks';
import Lists from '../lists/lists';

let taskResolvers = SchemaBridge.resolvers(Tasks.schema, 'Task');

taskResolvers.Task.taskList = (root, args, context) => {
  return Lists.findOne(root.list || args.list);
};

export default taskResolvers;