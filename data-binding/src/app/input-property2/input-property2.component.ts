import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property2.component.html',
  styleUrls: ['./input-property2.component.css']
})
export class InputProperty2Component implements OnInit {

 @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
