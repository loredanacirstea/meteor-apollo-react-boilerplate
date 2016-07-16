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