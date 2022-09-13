import { Injectable } from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupServiceService {

  url = environment.serverURL + 'Group';

  constructor(private http: HttpClient) { }
}
