/* 
  //Collections should be named as a plural noun
  //Fields in the database should be camelCased

  Lists = new Mongo.Collection('Lists');
  
  Lists.schema = new SimpleSchema({
    name: {type: String},
    incompleteCount: {type: Number, defaultValue: 0},
    userId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true}
  });
  Lists.attachSchema(Lists.schema);

  const list = {
    name: 'My list',
    incompleteCount: 3
  };

  Lists.schema.validate(list);
*/

import listHook from 'lists-hooks'

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