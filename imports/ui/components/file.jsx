/*
export var a = ...;
export class F {...}
export {g, h};
export {g as x};
export default incompleteCountDenormalizer;
export default new Collection('lists');

import Value from "./exporter";
import {default as Value, a=null, F} from "./exporter";
import '../imports/startup/client/routes.js';

if (Meteor.isClient) {
  require('./client-only-file.js'); // cannot import in if
}
require("package").default

containers components vs. presentational components (reusable)

export default ListContainer = createContainer(({ params }) => {
  const { id } = params;
  const todosHandle = Meteor.subscribe('todos.inList', id);
  const loading = !todosHandle.ready();
  const list = Lists.findOne(id);
  const listExists = !loading && !!list;
  return {
    loading,
    list,
    listExists,
    todos: listExists ? list.todos().fetch() : [],
  };
}, ListPage);

*/

import { Meteor } from 'meteor/meteor'; //{} for atmosphere
import React from 'react'; // for npm
import ReactDOM from 'react-dom';