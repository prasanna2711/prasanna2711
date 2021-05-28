import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TestServerService {
  constructor(public httpService: HttpClient) { }

  getTestServer(): Observable<any> {

    return this.httpService.get("http://localhost:8080/spring-mvc-example/getTestServerSummary").pipe(map((res: Response) => {
      return res;
    }));

  }

  getLiveServer(): Observable<any> {

    return this.httpService.get("http://localhost:8080/spring-mvc-example/getLiveServerSummary").pipe(map((res: Response) => {
      return res;
    }));

  }

  getBaseLineTestServer(): Observable<any> {

    return this.httpService.get("http://localhost:8080/spring-mvc-example/getBaseLineVersionTestServer").pipe(map((res: Response) => {
      return res;
    }));

  }


  getBaseLineLiveServer(): Observable<any> {

    return this.httpService.get("http://localhost:8080/spring-mvc-example/getBaseLineVersionLiveServer").pipe(map((res: Response) => {
      return res;
    }));

  }

  getDailyData(): Observable<any> {

    return this.httpService.get("http://localhost:8080/spring-mvc-example/getDailyData").pipe(map((res: Response) => {
      return res;
    }));

  }
  getDailyServerData(type): Observable<any> {
    let value = new HttpParams();
    value = value.set('type', type)
    const httpOptions = {
      params: value

    };

    return this.httpService.get("http://localhost:8080/spring-mvc-example/getDailyServerData", { params: value }).pipe(map((res: Response) => {
      return res;
    }));

  }
}
