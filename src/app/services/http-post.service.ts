import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpdataService  } from './httpdata.service'

 
@Injectable()
export class HttpPostService extends HttpdataService {

  constructor(http:Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }

}
