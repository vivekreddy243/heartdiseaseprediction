import { Injectable } from '@angular/core';


import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  url:any = "http://54.90.100.195/predicttarget";

  predicttarget(data:any): Observable<any> {
    //console.log(data);

   // console.log(this.url+ "?age=" + data.age + "&sex=" + data.sex + "&cp=" + data.cp +"&chol="+data.chol+ "&trestbps=" + data.trestbps + "&fbs=" + data.fbs + "&restecg=" + data.restecg + "&thalach=" + data.thalach + "&exang=" + data.exang + "&oldpeak=" + data.oldpeak + "&slope=" + data.slope + "&ca=" + data.ca + "&thal=" + data.thal)
    return this.http
      .get<any>(this.url+ "?age=" + data.age + "&sex=" + data.sex + "&cp=" + data.cp +"&chol="+data.chol+ "&trestbps=" + data.trestbps + "&fbs=" + data.fbs + "&restecg=" + data.restecg + "&thalach=" + data.thalach + "&exang=" + data.exang + "&oldpeak=" + data.oldpeak + "&slope=" + data.slope + "&ca=" + data.ca + "&thal=" + data.thal)
  }

}

