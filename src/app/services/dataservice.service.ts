import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IstateDistrict } from "./statedistrict";


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private jsonUrl = 'api/statedistrict.json';

  constructor(private http: HttpClient) { }
  getData() : Observable<IstateDistrict[]>{
    return(
      this.http.get<IstateDistrict[]>(this.jsonUrl).pipe(
        tap( data =>console.log("data loaded")),
        catchError(this.handleError)
      )
    );
  };
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
