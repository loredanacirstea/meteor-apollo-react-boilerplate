import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';
import schema from '/imports/api/schema';
import resolvers from '/imports/api/resolvers';
import { connectors, models, context } from '/imports/api/connectors';

createApolloServer({
    graphiql: true,
    pretty: true,
    schema,
    resolvers,
    //connectors,
    //models,
    //context
});

