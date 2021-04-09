import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Personas} from '../models/personas';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  key = 'Q6IM-XDV6-YX56-XBXA'
  API_URL='https://randomapi.com/api/9no658q7?key='+this.key;

  constructor( private http: HttpClient) { }

  getPersons(){
    let i=0;
    let records = []
    while (i<10) {
      let petition = this.http.get(`${this.API_URL}`)
      console.log(petition)
      console.log(i)
      i = i+1;
    }
    return records
  }
  saveInStorage(Persona:Personas){
    let current_saved_data = JSON.parse( localStorage.getItem('localData'));
    let flag = false;
    current_saved_data.forEach(item => {
      if (Persona == item){
        flag == true;
      }
    });
    localStorage.setItem('localData',JSON.stringify(current_saved_data));
  }
}
