/* 
  //Collections should be named as a plural noun
  //Fields in the database should be camelCased
*/
//import listHook from 'lists-hooks'

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Lists = new Mongo.Collection('Lists');

const subList = new SimpleSchema({
  field1: {
    type: String
  },
  field2: {
    type: Number
  },
  field3: {
    type: Object
  },
  'field3.attr': {
    type: String
  }
});
  
Lists.schema = new SimpleSchema({
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
  noOfTasks: { 
    type: Number 
  },
  locked: {
    type: Boolean,
    label: 'Locked',
    optional: true,
  },
  creator: {
    type: String,
    label: 'Creator'
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert)
        return new Date();
      if (this.isUpsert)
        return {$setOnInsert: new Date()};
    }
  },
  sublist: {
    type: subList
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