import { CouchDBConnector } from 'meteor/kuip:apollo-connector-couchdb';

const couchDB = new CouchDBConnector({
  host: 'http://orobo.go.ro',
  port: 5984,
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

//export default connectors;

export const models = {
  List: new Model({ connector: couchDB.db('lists') }),
  Task: new Model({ connector: couchDB.db('tasks') }),
  //List: new List({db: 'couchDB'})
  //Post: new Post({ postDb: 'sql', viewsDb: 'mongo' })
}

//export default models;


export const context = {
  List: new Model( { connector: CouchDBConnector })
}

//export default context;