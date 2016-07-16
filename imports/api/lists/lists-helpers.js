import Lists from 'lists';
import Tasks from '../tasks/tasks';


Lists.helpers({
  // A list is considered to be private if it has a userId set
  /*isPrivate() {
    return !!this.userId;
  }*/
  getTasks() {
    return Tasks.find({list: this._id});
  }
});