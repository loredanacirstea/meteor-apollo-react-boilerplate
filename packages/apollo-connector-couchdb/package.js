Package.describe({
  name: 'kuip:apollo-connector-couchdb',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'dataloader': '1.2.0', 
  'nano': '6.2.0', 
  'request-promise': '3.0.0',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use([
    'ecmascript', 
    'random', 
    'http'
  ]);
  api.mainModule('apollo-connector-couchdb.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kuip:apollo-connector-couchdb');
  api.mainModule('apollo-connector-couchdb-tests.js');
});
