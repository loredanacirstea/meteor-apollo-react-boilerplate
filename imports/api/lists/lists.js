/* 
  //Collections should be named as a plural noun
  //Fields in the database should be camelCased
*/
//import listHook from 'lists-hooks'

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Lists = new Mongo.Collection('Lists');
  
Lists.schema = new SimpleSchema({
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
  noOfTasks: { 
    type: Number 
  },
  locked: {
      type: String,
      label: 'Locked',
      optional: true,
  },
  creator: {
      type: String,
      label: 'Creator'
  },
});
Lists.attachSchema(Lists.schema);

export default Lists;


/*

  // Overriding

  class ListsCollection extends Mongo.Collection {
    insert(doc, callback) {
      // Do your work
      // Call the original `insert` method, which will validate
      // against the schema
      //return super.insert(doc, callback);
      const result = super.insert(doc, callback);
      hook.afterInsertList(doc);
      return result;
    }
  }
  Lists = new ListsCollection('Lists');

*/