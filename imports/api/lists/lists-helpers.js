/*
  List helpers
*/

import Lists from 'lists'

Lists.helpers({
  // A list is considered to be private if it has a userId set
  isPrivate() {
    return !!this.userId;
  }
});