import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from "rxjs";
import { Carta } from 'src/app/interfaces/carta';
import { Tiempo } from 'src/app/interfaces/tiempo';
import { BaseDeDatosService } from 'src/app/services/base-de-datos.service';

@Component({
  selector: 'app-facil',
  templateUrl: './facil.component.html',
  styleUrls: ['./facil.component.scss'],
})
export class FacilComponent {

  public tiempo:number = 0;
  public bloqueado = false;
  public correctas = 0;
  public jugando:boolean = false;
  public ganaste = false;
  public cartas: Carta[] = [
    {estado: false, nombre:"gato"},
    {estado: false, nombre:"gato"},
    {estado: false, nombre:"perro"},
    {estado: false, nombre:"perro"},
    {estado: false, nombre:"conejo"},
    {estado: false, nombre:"conejo"},
  ];
  public cartaElejida = -1;

  constructor(private router: Router, private db: BaseDeDatosService) { 
  }
  
  volver(){
    this.jugando = false;
    this.ganaste = false;
    this.router.navigate(['selector']);
  }

  iniciarJuego(){
    this.mezclarMazo();
    this.cartaElejida = -1;
    this.correctas = 0;
    this.tiempo = 0;
    this.jugando = true;
    this.ganaste = false;
    this.iniciarTiempo();
  }
  iniciarTiempo(){
    let activo = timer(0, 10).subscribe(ellapsedCycles => {
      if(this.jugando) {
        this.tiempo+=0.01;
      }
      else{
        activo.unsubscribe();
      }
    });
  }

  seleccionarCarta(i:number){
    if(!this.bloqueado){
      this.cartas[i].estado = true;
      if(this.cartaElejida != -1){
        if(this.cartas[i].nombre == this.cartas[this.cartaElejida].nombre){
          this.correctas++;
          this.cartaElejida = -1;
          if(this.correctas == 3){
            this.ganaste = true;
            this.jugando = false;
            let registro: Tiempo = {
              correo: this.db.usuario?.correo || "",
              fecha: Date().toString(),
              tiempo: this.tiempo
            }
            this.db.agregarTiempoFacil(registro);
          }
        }
        else{
          this.bloqueado = true;
          setTimeout(()=>{
            this.cartas[this.cartaElejida].estado = false;
            this.cartas[i].estado = false;
            this.cartaElejida = -1;
            this.bloqueado = false;
          },500);
        }
      }
      else{
        this.cartaElejida = i;
      }
    }
  }

  mezclarMazo(){
    for (const item of this.cartas) {
      item.estado = false;
    }
    this.cartas = this.shuffle(this.cartas);
  }

  shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  obtenerImagen(carta:Carta){
    return "../../../assets/"+carta.nombre+".png";
  }
}
