import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'data-binding';

 deletarCiclo: boolean = false;

  valor: number = 5;

  mudarValorSoma(){
     this.valor++
  }

  mudarValorSubtracao(){
    this.valor--
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }

}
