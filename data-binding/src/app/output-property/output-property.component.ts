import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef | any;

  incrementa(){
    //direto da variavel do html component
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    //pegando pela variavel local
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  constructor() { }

  ngOnInit(): void {
  }

}
