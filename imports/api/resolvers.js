import Lists from './lists/lists';
import Tasks from './tasks/tasks';

import listResolvers from './lists/lists-resolvers';
import taskResolvers from './tasks/tasks-resolvers';

const resolvers = {
  Query: {
    list(root, args, context) {
      return Lists.findOne(args.id);
    },
    task(root, args, context) {
      return Tasks.findOne(args.id);
    },
    taskss(root, args, context) {
      return Tasks.find({list: args.id}).fetch;
    }
  },
  List: listResolvers,
  Task: taskResolvers
}

export default resolvers;

/*import { connectormodels as models } from '/imports/api/connectors';

const resolvers = {
  Query: {
    list(root, args, context) {
      return models.List.findOne(args.id);

    },
    lists(root, args, context) {
      return models.List.find();
    },
    task(root, args, context) {
      console.log(context);
      return models.Task.findOne(args.id);
    },
  },
  List: {
    title: ({ title }) => title,
    description: ({ description }) => description,
    tasks(root, args, context) {
      console.log('listTasks')
      console.log(root);
      console.log(args);
      console.log(context);
      return models.Task.find({list: args.id});
    }
  },
  Task: {
    title: ({ title }) => title,
    description: ({ description }) => description,
    list(root, args, context) {
      return models.List.findOne(args.list);
    }
  },
}

export default resolvers;*/