import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';

import '/imports/startup/server/index';

import schema from '/imports/api/schema';
import resolvers from '/imports/api/resolvers';
import mocks from '/imports/api/mocks';

createApolloServer({
    graphiql: true,
    pretty: true,
    schema,
    resolvers,
    //mocks
    //connectors,
    //models,
    //context
});

