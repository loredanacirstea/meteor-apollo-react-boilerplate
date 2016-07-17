import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Tasks = new Mongo.Collection('Tasks');

Tasks.schema = new SimpleSchema({
  _id: {
    type: String
  },
  title: { 
    type: String 
  },
  description: { 
    type: String 
  },
  ordering: {
    type: Number,
    optional: true,
  },
  status: {
    type: Number,
    label: 'Status',
    allowedValues: [0, 1, 2]
  },
  creator: {
    type: String,
    label: 'Creator'
  },
  list: {
    type: String
  },
});
Tasks.attachSchema(Tasks.schema);

export default Tasks;