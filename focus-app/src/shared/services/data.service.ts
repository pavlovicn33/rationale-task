import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableData } from '../models/tableData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTableData():Observable<TableData>{
    return this.http.get<TableData>('/assets/json/data.json')
  }

}
