import { Meteor } from 'meteor/meteor';
import Lists from '../lists';

Meteor.publish('lists.public', function listsPublic(query) {
  Lists.schema.validate(query);
  /*if (!this.userId) {
    return this.ready();
  }*/
});
