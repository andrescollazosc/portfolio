import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { PortfolioContants } from '../constants/url.constant';
import { Observable } from 'rxjs';
import { VisitModel } from '../models/visit.model';
import { MessageModel } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private API_MESSAGE = `${ environment.urlBase }${ PortfolioContants.RESOURCES.MESSAGE.CONTROLLER }`;
  private API_VISIT = `${ environment.urlBase }${ PortfolioContants.RESOURCES.VISIT.CONTROLLER }`;

  constructor(private http: HttpClient) { }

  public addVisit(visit: VisitModel): Observable<VisitModel> {
    return this.http.post(`${ this.API_VISIT }${ PortfolioContants.RESOURCES.VISIT.END_POINTS.ADD }`, visit);
  }

  public addMessage(message: MessageModel): Observable<MessageModel> {
    return this.http.post(`${ this.API_MESSAGE }${ PortfolioContants.RESOURCES.MESSAGE.END_POINTS.ADD }`, message);
  }

}
