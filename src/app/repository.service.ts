import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {FioResponse} from "./fio-response";
@Injectable()
export class RepositoryService {
  private suggestions: FioResponse[];

  constructor(private httpService: HttpService) {
  }

  getFioSuggestions(param: string): string[] {
    const fios: string[] = [];
    this.httpService.getFioSuggestions(param).subscribe(data => {this.suggestions = data; } );
    for (let fioSuggestion in this.suggestions) {
      fios.push(this.suggestions[fioSuggestion].value);
    }
    return fios;
  }
}
