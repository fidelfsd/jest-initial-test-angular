import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
  }

  getData2(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').pipe(
      tap((data: any) => console.log('Data: ', data)),
      catchError(this.handleError('Failed to fetch data'))
    )
  }

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);

      const message = `server return code ${error.status} with body "${error.error}"`

      throw new Error(`${operation} failed: ${message}`)
    };
  }

}
