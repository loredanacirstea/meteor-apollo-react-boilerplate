import { MongoConnector } from 'apollo-connector-mongodb');

const mongoURL = 'mongodb://localhost:3001/test';

const conn = new MongoConnector(mongoURL, () => {});

/*const conn = new MongoConnector(mongoURL, () => {

  //init express and apollo
  const context = initContext(conn);
  const config = {
    schema,
    pretty : true,
    context
  };

  // launches a new express instance
  startExpress(config);
});*/

class Model {
  constructor({connector}) {
    this.connector = connector;
  }
  findOne(id) {
    return this.connector.findOne(id);
  }
  find() {
    return this.connector.find();
  }
}



export const connectors = {
  couchDB: new CouchDBConnector(couchDB)
}

export const models = {
  List: new Model({ db: 'couchDB' }),
  Task: new Model({ db: 'couchDB' }),
}



/*
import { CouchDBConnector } from 'meteor/kuip:apollo-connector-couchdb';

const couchDB = new CouchDBConnector({
  host: ,
  port: ,
});


class Model {
  constructor({connector}) {
    this.connector = connector;
  }
  findOne(id) {
    return this.connector.findOne(id);
  }
  find() {
    return this.connector.find();
  }
}



export const connectors = {
  couchDB: new CouchDBConnector(couchDB)
}

export const models = {
  List: new Model({ db: 'couchDB' }),
  Task: new Model({ db: 'couchDB' }),
}
*/