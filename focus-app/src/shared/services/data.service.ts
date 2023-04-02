import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableData } from '../models/tableData';
import { Observable } from 'rxjs';
import { Actions, Tasks } from '../models/tasks';
import { Calendars } from '../models/calendar';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getTableData(): Observable<TableData> {
    return this.http.get<TableData>('/assets/json/data.json');
  }
  getTasks(): Observable<Tasks> {
    return this.http.get<Tasks>('/assets/json/tasks.json');
  }
  getActions(): Observable<Actions> {
    return this.http.get<Actions>('/assets/json/actions.json');
  }
  getCalendars(): Observable<Calendars> {
    return this.http.get<Calendars>('/assets/json/calendar.json');
  }
}
