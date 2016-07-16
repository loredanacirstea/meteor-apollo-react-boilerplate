import listResolvers from './lists/lists-resolvers';
import listMocks from './lists/lists-mocks';

const resolvers = {
  Query: {
    list(root, args, context) {
      return listMocks.List
    }
  },
  //List: listResolvers.List
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