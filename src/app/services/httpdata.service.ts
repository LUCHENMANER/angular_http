import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'util';
import { Observable} from 'rxjs/Observable';
import { AppError } from 'app/common/app-error';
import { NotFoundError } from 'app/common/not-found-error';
import { Response } from '@angular/http/src/static_response';
import { BadInput } from 'app/common/bad-input';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable()
export class HttpdataService {

  constructor(private url:any, private http:Http) { }

  getAll(){
    return this.http.get(this.url)
      .map(response=> response.json())
      .catch(this.handleError);
  }

  create(resource){
  

    return this.http.post(this.url,JSON.stringify(resource))
              .map(response=>response.json())
              .catch(this.handleError);
                     
  }

  update(resource){

    return this.http.patch(this.url+'/'+resource.id, JSON.stringify({isRead:true}))
                    .map(response=>response.json())
  }

  delete(id){
    //return Observable.throw(new AppError());
    return  this.http.delete(this.url+'/'+id)
                  .map(response=>response.json())
                  .catch(this.handleError);
  }

  private handleError(error:Response){
    if(error.status===400)
        return Observable.throw(new BadInput());
    if(error.status===404) 
        return Observable.throw(new NotFoundError()); 
    
        return Observable.throw(new AppError(error));
  }


}
