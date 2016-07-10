/*
  Method and publication names should be camelCased, and namespaced to the module they are in:

  // in imports/api/todos/methods.js
  export const updateText = new ValidatedMethod({
    name: 'todos.updateText',
    validate: new SimpleSchema({
      todoId: { type: String },
      newText: { type: String }
    }).validator(),
    run({ todoId, newText }) {
      const todo = Todos.findOne(todoId);

      if (!todo.editableBy(this.userId)) {
        throw new Meteor.Error('todos.updateText.unauthorized',
          'Cannot edit todos in a private list that is not yours');
      }

      Todos.update(todoId, {
        $set: { text: newText }
      });
    }
  });
*/