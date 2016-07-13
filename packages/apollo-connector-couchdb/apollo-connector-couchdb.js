// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See apollo-couchdb-tests.js for an example of importing.

import rp from 'request-promise';
import DataLoader from 'dataloader';
import {HTTP} from 'meteor/http';

import { DBConnector } from './dbconnector';

const eTagCache = {};

export const CouchDBConnector = class {
  constructor({host, port}) {
    this._host = host;
    this._port = port;
    this._connection = null;
  }

  get url() {
    return `${this._host}:${this._port}`;
  }

  get connection() {
    return this._connection
  }

  db(name) {
    return new CouchDatabase({name, url: this.url})
  }
}

class CouchDatabase {
  constructor({name, url}) {
    console.log('CouchDatabase: ', name, url)
    this._name = name;
    this._url = url;
    //this._singleloader = new DataLoader(this.fetchOne.bind(this));
    this._queryloader = new DataLoader(this.fetchQuery.bind(this));
    this._options = {
      json: true,
      resolveWithFullResponse: true,
    };
  }

  get url() {
    return `${this._url}/${this._name}` ;
  }

  //fetchOne(url) {}

  fetchQuery(urls) {
    return Promise.all(urls.map((url) => {
      const cachedRes = eTagCache[url];

      if (cachedRes && cachedRes.eTag) {
        options.headers['If-None-Match'] = cachedRes.eTag;
      }
      return new Promise((resolve, reject) => {
        console.log('DataLoader')
        //const url = keys[0];
        let options = this._options;
        console.log(url);
        rp ({
          uri: url,
          ...options,
        }).then((response) => {
          const body = response.body;
          console.log('response');
          console.log(body);
          eTagCache[url] = {
            result: body,
            eTag: response.headers.etag,
          };
          if(!body.rows)
            resolve([body]);
          else
            resolve(body.rows.map(row => row.error ? new Error(row.error) : row.doc));
        }).catch((err) => {
          console.log(err);
        });
      });
    }));
  }

  find(query={}) {
    return this._queryloader.load(`${this.url}/_all_docs?include_docs=true`);
  }

  findOne(id) {
    return this._queryloader.load(`${this.url}/${id}`);
  }

  insert(doc, callback) {
    if(!doc._id)
      doc._id = Random.id();
  }

  update(query, modifier) {

  }

  remove(ids) {

  }
}


/*
  fetch(urls) {
    return Promise.all(urls.map((url) => {
      const cachedRes = eTagCache[url];

      if (cachedRes && cachedRes.eTag) {
        options.headers['If-None-Match'] = cachedRes.eTag;
      }
      return new Promise((resolve) => {
        this.rp({
          uri: url,
          ...options,
        }).then((response) => {
          const body = response.body;
          eTagCache[url] = {
            result: body,
            eTag: response.headers.etag,
          };
          resolve(body);
        }).catch((err) => {
          if (err.statusCode === 304) {
            resolve(cachedRes.result);
          }
        });
      });
    }));
  }

  get(path) {
    return this.loader.load(GITHUB_API_ROOT + path);
  }
}
*/