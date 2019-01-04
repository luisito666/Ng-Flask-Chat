import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  url:string = 'http://127.0.0.1:5000/api/v1';

  constructor(private http: HttpClient) { }

  getConversaciones(username: string) {
    const newUrl = `${this.url}/conversations/${username}`;
    return this.http.get(newUrl);
  }


}
