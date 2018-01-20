import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JobService {

  constructor(private httpClient: HttpClient) {
  }

  getJobs() {
    return this.httpClient.get('data/jobs.json')
      .map(res => res);
  }

}
