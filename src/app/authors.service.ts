import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  getAuthors(){
    return ["John","Grisham","Forsyth"];
  }
}
