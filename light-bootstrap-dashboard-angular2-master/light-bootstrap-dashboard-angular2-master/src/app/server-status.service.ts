import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServerStatusService {

  constructor(public httpService:HttpClient) { }

  getServerStatus():Observable<any>{
    
    return this.httpService.get("http://localhost:8080/spring-mvc-example/getServerStatus").pipe(map((res:Response)=>{
    return res;
    }));
     
  }
}
