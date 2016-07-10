# Meteor - Apollo - React boilerplate

For Meteor >=1.3

Created after https://guide.meteor.com + personal preference.

## Folder structure

```
imports/
  startup/
    client/
      index.js                 # import client startup through a single index entry point
      routes.js                # set up all routes in the app
      useraccounts-configuration.js # configure login templates
    server/
      fixtures.js              # fill the DB with example data on startup
      index.js                 # import server startup through a single index entry point

  api/
    lists/                     # a unit of domain logic
      server/
        publications.js        # all list-related publications
        publications.tests.js  # tests for the list publications
      lists.js                 # definition of the Lists collection
      lists.tests.js           # tests for the behavior of that collection
      methods.js               # methods related to lists
      methods.tests.js         # tests for those methods
    api.js

  ui/
    components/                # all reusable components in the application
                               # can be split by domain if there are many
    layouts/                   # wrapper components for behaviour and visuals
    pages/                     # entry points for rendering used by the router

client/
  main.js                      # client entry point, imports all client code

server/
  main.js                      # server entry point, imports all server code

```

## Load order

1. HTML template files are always loaded before everything else
2. Files beginning with main. are loaded last
3. Files inside any lib/ directory are loaded next
4. Files with deeper paths are loaded next
5. Files are then loaded in alphabetical order of the entire path


## Steps


### Linting

```
meteor npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-meteor eslint-plugin-react eslint-plugin-jsx-a11y eslint-import-resolver-meteor eslint
```

### NPM

```

meteor npm install --save react-mounter react react-dom react-addons-transition-group \
 react-addons-css-transition-group react-addons-linked-state-mixin \
 react-addons-create-fragment react-addons-update react-addons-pure-render-mixin \
 react-addons-test-utils react-addons-perf
 
meteor npm install --save meteor-node-stubs

```
- when using Meteor <1.3 packages with React dependencies:

```



```

### Testing

```
meteor test --driver-package <driver-package>
meteor test --full-app --driver-package <driver-package>

```
