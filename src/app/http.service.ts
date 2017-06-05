import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {FioQuery} from "app/query-fio";
import {FioResponse} from "./fio-response";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService {
  private dadataService = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio';
  private fioQuery: FioQuery;

  constructor(private http: Http) {
  }

  getFioSuggestions(pattern: string): Observable<FioResponse[]> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json', 'Authorization': 'Token 6cb3e77f96456594b423c6e2b7781ad43aef6b7e'
    });
    const options = new RequestOptions({headers: headers});
    this.fioQuery = new FioQuery(pattern, 10);

    return this.http.post(this.dadataService, this.fioQuery, options).map(res => { return res.json().suggestions; });
  }

}
