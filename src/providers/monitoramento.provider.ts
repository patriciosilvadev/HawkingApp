import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { AuthHttp } from 'angular2-jwt';

import { Monitoramento } from './../models';

import API_URL from '../app/api';


@Injectable()
export class MonitoramentoProvider {

  private url = `${API_URL}/api/monitoramentos`;

  constructor(private http: AuthHttp) {  }

  newMonitoramento(monitoramento: Monitoramento): Observable<Monitoramento> {
    return this.http.post(this.url, monitoramento).map( res => res.json());
  }

}