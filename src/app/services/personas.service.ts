import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personas } from '../models/personas';
import { isImportEqualsDeclaration, isVariableDeclarationList } from 'typescript';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  key = 'Q6IM-XDV6-YX56-XBXA'
  API_URL='https://randomapi.com/api/9no658q7?key='+this.key;

  constructor( private http: HttpClient) { }

  getPersons(){
    let records = []
    for (let index = 0; index < 10; index++) {
      let petition = this.http.get(`${this.API_URL}`)
      petition.subscribe(
        res => {
          records.push(res['results'][0])
        },
       // err => console.log(err)
      )
    }
    let local_storage_data = JSON.parse(localStorage.getItem('localData'))
    if(local_storage_data){
      local_storage_data.forEach(element => {
        records.push(element)
      });
    }
    return records;
  }
  saveInStorage(Persona:Personas){
    let current_saved_data = JSON.parse( localStorage.getItem('localData'));
    if (current_saved_data != null)
    {
      if (!current_saved_data.some( item => item.name === Persona.name && Persona.age === item.age && Persona.doc_url === item.doc_url)){
        current_saved_data.push(Persona);
        console.log(Persona)
        console.log(current_saved_data)
      }
      else console.log('Registro Repetido')
    }else{
      current_saved_data = []
      current_saved_data.push(Persona);
    }
    localStorage.setItem('localData',JSON.stringify(current_saved_data));
  }
}
