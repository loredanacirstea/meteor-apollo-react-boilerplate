import rp from 'request-promise';
import DataLoader from 'dataloader';

export class DBConnector {
  constructor({host, port}) {
    this._host = host;
    this._port = port;
    this._connection = null;
  }

  get url() {
    return `${this.host}:${this.port}`;
  }

  get connection() {
    return this._connection
  }
  
  /*find(query) {
    let loader = new DataLoader(keys => genData())
  }*/
}