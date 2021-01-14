import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=9be60f82306b7054f5f39fc40751babe&language=en-US&page=1');
  }

  postData(username, password){
    const sendData = {
      'service_type' : 'login',
      'username' : username,
      'password' : password
  };
    return this.http.post('http://www.bidiziyorum.com/webservices/loginService.php', sendData);
  }

}
