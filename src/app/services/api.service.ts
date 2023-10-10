import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Range} from "../models/ranges";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getRanges(): Observable<Range[]> {
    // access has been blocked by CORS
    // return this.http.get<Range[]>('https://global.lakmus.org/Dictionaries/icpc2?IsPublic=true');

    return of(
      [
        {
          "id": 1865,
          "chapterNumber": null,
          "chapterName": "",
          "blockNumber": "",
          "blockName": "",
          "code": "P99",
          "name": "Психологічні розлади, інші ",
          "shortName": "",
          "isPublic": true
        },
        {
          "id": 1904,
          "chapterNumber": null,
          "chapterName": "",
          "blockNumber": "",
          "blockName": "",
          "code": "R95",
          "name": "ХОЗЛ ",
          "shortName": "",
          "isPublic": true
        },
        {
          "id": 2096,
          "chapterNumber": null,
          "chapterName": "",
          "blockNumber": "",
          "blockName": "",
          "code": "X73",
          "name": "Генітальний трихомоніаз у жінок",
          "shortName": "",
          "isPublic": true
        },
        {
          "id": 2161,
          "chapterNumber": null,
          "chapterName": "",
          "blockNumber": "",
          "blockName": "",
          "code": "Z10",
          "name": "Проблема з системою охорони здоров`я",
          "shortName": "",
          "isPublic": true
        }
      ]
    )
  }
}
