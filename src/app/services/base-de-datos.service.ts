import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Tiempo } from '../interfaces/tiempo';
import { Firestore, collection, collectionData, query, limit, orderBy, where, addDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

  public usuario?: Usuario;
  constructor(private firestore: Firestore) {}

  obtenerUsuarios(): Observable<Usuario[]>{
    const coleccion = collection(this.firestore, "usuarios");
    return collectionData(coleccion, {idField: 'id'}) as Observable<Usuario[]>;
  }

  obtenerTiemposFacil(): Observable<Tiempo[]>{
    const coleccion = collection(this.firestore, "memoria_facil");
    const q = query(coleccion, orderBy("tiempo", "asc"), limit(5));
    return collectionData(q) as Observable<Tiempo[]>;
  }

  obtenerTiemposMedio(): Observable<Tiempo[]>{
    const coleccion = collection(this.firestore, "memoria_medio");
    const q = query(coleccion, orderBy("tiempo", "asc"), limit(5));
    return collectionData(q) as Observable<Tiempo[]>;
  }

  obtenerTiemposDificil(): Observable<Tiempo[]>{
    const coleccion = collection(this.firestore, "memoria_dificil");
    const q = query(coleccion, orderBy("tiempo", "asc"), limit(5));
    return collectionData(q) as Observable<Tiempo[]>;
  }

  agregarTiempoFacil(tiempo: Tiempo){
    const coleccion = collection(this.firestore, "memoria_facil");
    return addDoc(coleccion, tiempo);
  }

  agregarTiempoMedio(tiempo: Tiempo){
    const coleccion = collection(this.firestore, "memoria_medio");
    return addDoc(coleccion, tiempo);
  }

  agregarTiempoDificil(tiempo: Tiempo){
    const coleccion = collection(this.firestore, "memoria_dificil");
    return addDoc(coleccion, tiempo);
  }

  login(datos: Usuario){
    this.usuario = datos;
  }
}
