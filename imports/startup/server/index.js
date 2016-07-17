/*
 import server startup through a single index entry point
*/

// This defines a starting set of data to be loaded if the app is loaded with an empty db.
import './fixtures.js';

// This file configures the Accounts package to define the UI of the reset password email.
//import '../imports/startup/server/reset-password-email.js';

// Set up some rate limiting and other important security settings.
//import '../imports/startup/server/security.js';

// This defines all the collections, publications and methods that the application provides
// as an API to the client.
import Lists from '../../api/lists/lists';
import Tasks from '../../api/tasks/tasks';

// This code updates the database when a field name is changed in the Simple Schema
// Constraints: only 1 field changed, no additions, no deletions
const getModifier = (keys1, keys2) => {
  let idi = keys1.indexOf('_id');
  if(idi != -1)
    keys1.splice(idi, 1);

  if(keys1.length != keys2.length)
    return;

  let changed1 = [], changed2 = [];
  for(k1 in keys1)
    if(keys2.indexOf(keys1[k1]) == -1)
      changed1.push(keys1[k1]);
  for(k2 in keys2)
    if(keys1.indexOf(keys2[k2]) == -1)
      changed2.push(keys2[k2]);
  let modifier = {};
  for(i in changed1)
    modifier[changed1[i]] = changed2[i];

  if(!Object.keys(modifier).length)
    return;
  return {$rename: modifier};
}

const updateAll = (Collection, modifier) => {
  Collection.update({}, modifier, {multi: true, validate: false, filter: false});
}

Meteor.startup(() => {
  let l = Lists.findOne();
  let t = Tasks.findOne();

  let updl = getModifier(Object.keys(l), Lists.schema._firstLevelSchemaKeys);
  let updt = getModifier(Object.keys(t), Tasks.schema._firstLevelSchemaKeys);

  console.log('updl: ')
  console.log(updl)
  console.log(updt)

  if(updl)
    updateAll(Lists, updl);
  if(updt)
    updateAll(Tasks, updt);

});
