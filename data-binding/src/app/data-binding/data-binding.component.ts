import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
       .highlight{
        background-color: yellow;
        font-weight: bold;
       }

    `
  ]
})
export class DataBindingComponent implements OnInit {

  url : string = 'http://metallica.com';
  urlImagem = 'https://whiplash.net/imagens_promo/metallica_promo2.jpg';

  valorAtual: string = '';
  valorSalvo: any;
  isMouseOver: boolean = false;
  cursoAngula: boolean = true;
  nomeDoCurso: string = 'angular';

  getValor(){
    return 1;
  }

  botaoClicado(){
    alert('botão clicado!');
  }

  onKeyOn(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
     this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
