import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { PortfolioContants } from '../constants/url.constant';
import { Observable } from 'rxjs';
import { VisitModel } from '../models/visit.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private API_MESSAGE = `${ environment.urlBase }${ PortfolioContants.RESOURCES.MESSAGE.CONTROLLER }`;
  private API_VISIT = `${ environment.urlBase }${ PortfolioContants.RESOURCES.VISIT.CONTROLLER }`;

  constructor(private http: HttpClient) { }

  public addVisit(visit: VisitModel): Observable<VisitModel> {
    return this.http.post(`${ this.API_VISIT }${ PortfolioContants.RESOURCES.MESSAGE.END_POINTS.ADD }`, visit);
  }

}
