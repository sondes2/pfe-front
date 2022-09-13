import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Tasks} from '../models/tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = environment.serverURL + 'Task/';

  optionRequete = { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*' }) };
  constructor(private http: HttpClient) {
  }

  findByUserId(login: string) {
    return this.http.get(this.url + 'findByUserId/' + login);
  }

  editTask(task: Tasks) {
    return this.http.put(this.url + 'UpdateTask', task);
  }
}
