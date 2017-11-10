import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private API_ROOT = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: Http
  ) { }

  public getPosts(): Observable<any[]> {
    return this.http.get(`${this.API_ROOT}/posts`)
    .map(res => res.json() as any[]);
  }

}
