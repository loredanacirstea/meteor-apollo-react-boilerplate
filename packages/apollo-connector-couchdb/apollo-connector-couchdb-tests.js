// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by apollo-couchdb.js.
import { name as packageName } from "meteor/kuip:apollo-connector-couchdb";

// Write your tests here!
// Here is an example.
Tinytest.add('apollo-connector-couchdb - example', function (test) {
  test.equal(packageName, "apollo-connector-couchdb");
});
