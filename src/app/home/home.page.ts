import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private alerta: AlertController) {}

  nome:string = "";
  telefone:string = "" ;
  curso: string = "";
  horario:string = "";

  Nome:String = "";
  Telefone:String = "";
  Curso:String = "";
  Horario:String = "";

  mostrarLinhas:boolean = false;


  Apresentar(){
    this.mostrarLinhas = true;
    this.Nome = " Nome: "+this.nome;
    this.Telefone = " Telefone: " +this.telefone;
    this.Curso = " Curso: " + this.curso;
    this.Horario = " Horáio da aula: " +this.horario;

  //   this.mensagem = '<ion-list lines="full"><ion-item><ion-label><ion-icon name="person"></ion-icon> Nome: '+this.nome+' </ion-label></ion-item><ion-item><ion-label><ion-icon name="call"></ion-icon> Telefone: '+this.telefone+' </ion-label></ion-item><ion-item><ion-label><ion-icon name="newspaper"></ion-icon> Curso: '+this.curso+'</ion-label></ion-item><ion-item><ion-label><ion-icon name="time"></ion-icon> Horário: '+this.aulas+'</ion-label></ion-item></ion-list>';
}


}