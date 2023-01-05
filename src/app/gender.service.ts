import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from './Model/Gender';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private baseApiUrl = environment.baseApiUrl;

  constructor(private httpclient : HttpClient) { }

  getGenderList(): Observable <Gender[]> {

    return this.httpclient.get<Gender[]>(this.baseApiUrl + '/Gender');

  }


}
