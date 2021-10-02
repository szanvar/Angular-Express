import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAdmin, IBatch } from './Users';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }

  // getData() {  return this.http.get('/api/getData'); }

  getData() : Observable<IAdmin[]>
  {
    return this.http.get<IAdmin[]>('/api/getData');
  }

  getBatch() : Observable<IBatch[]>
  {
    return this.http.get<IBatch[]>('/api/getBatches');
  }

}


// getUsers() {
//   return this.httpClient.get(`https://reqres.in/api/users`).
//       pipe(
//          map((data: Users[]) => {
//            return data;
//          }), catchError( error => {
//            return throwError( 'Something went wrong!' );
//          })
//       )
//   }

 