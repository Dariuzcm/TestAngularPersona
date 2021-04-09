import { Component, OnInit } from '@angular/core';
import { Personas } from '../models/personas';
import { PersonasService } from '../services/personas.service';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  title = 'Personas';
  personas:any = []
  constructor( private PersonasService : PersonasService) { 
  }
  p: Personas = {
    id: 0,
    name: '',
    age: 0,
    sex: '',
    doc_url: '',
  };

  ngOnInit(): void {
    this.personas = this.PersonasService.getPersons()
  }

  saveInStorage(){
    this.PersonasService.saveInStorage(this.p);
    this.personas = this.PersonasService.getPersons()
  }
  CleanLocalStorage(){
    localStorage.setItem('localData', null)
    this.personas = this.PersonasService.getPersons()
  }
} 
