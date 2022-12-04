import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from './Model/Gender';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private baseApiUrl = 'https://localhost:7248/Gender';

  constructor(private httpclient : HttpClient) { }

  getGenderList(): Observable <Gender[]> {

    return this.httpclient.get<Gender[]>(this.baseApiUrl);

  }


}
