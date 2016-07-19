import Lists from './lists/lists';
import Tasks from './tasks/tasks';

import listResolvers from './lists/lists-resolvers';
import taskResolvers from './tasks/tasks-resolvers';

const resolvers = Object.assign({}, 
  {
    Query: {
      list(root, args, context) {
        return Lists.findOne(args.id);
      },
      task(root, args, context) {
        return Tasks.findOne(args.id);
      },
    }
  },
  listResolvers,
  taskResolvers
);

export default resolvers;