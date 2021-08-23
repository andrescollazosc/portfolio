import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VisitModel } from '../models/visit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }

  public getIPAddress(): Observable<VisitModel> {  
    return this.http.get<VisitModel>("https://api.ipify.org/?format=json");  
  }  

}
