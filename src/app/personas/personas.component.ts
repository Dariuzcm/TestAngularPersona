import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  title = 'Personas';
  personas;
  constructor( private PersonasService : PersonasService) { 
  }

  ngOnInit(): void {}
}
