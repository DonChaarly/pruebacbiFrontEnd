import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personas } from '../model/personas';
import { catchError, map, Observable, throwError} from 'rxjs';
import { Usuarios } from '../model/usuarios';
import { Roles } from '../model/roles';
import { Pokemons } from '../model/pokemons';

@Injectable({
  providedIn: 'root'
})
export class UsueriosService {

  private urlBase: string = "http://localhost:8082/api"
  private httpHeaders = new HttpHeaders({"Content-type": "application/json"});

  mandarError(e: any): Observable<any>{
    if (e.status == 400 || e.status == 401) {
      return throwError(() => e);
    }
    if (e.error.message) {
      console.error(e.error.mensaje);
    }
    return throwError(() => e);
  }

  constructor(private http: HttpClient) { }

  /*---------------------------------  PERSONAS  ----------------------------------------------- */

  getPersonas():Observable<any> {
    return this.http.get<Personas[]>(this.urlBase + '/personas/list/').pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  getPersona(id: number):Observable<any> {
    return this.http.get<Personas>(this.urlBase + '/persona/' + id).pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  createPersona(persona: Personas):Observable<any> {
    return this.http.post<Personas>(this.urlBase + '/persona/create', persona, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  updatePersona(persona: Personas): Observable<any>{
    return this.http.put<Personas>(`${this.urlBase}/persona/${persona.idPersonas}`, persona, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return this.mandarError(e)
      })
    );
  }

  deletePersona(id: number): Observable<any>{
    return this.http.delete<Personas>(`${this.urlBase}/persona/${id}`).pipe(
      catchError(e => {
        return this.mandarError(e)
      })
    );
  }

  /*---------------------------------  USUARIOS  ----------------------------------------------- */

  getUsuarios():Observable<any> {
    return this.http.get<Usuarios[]>(this.urlBase + '/usuarios/list/').pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  getUsuario(id: number):Observable<any> {
    return this.http.get<Usuarios>(this.urlBase + '/usuario/' + id).pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }
  getUsuarioByUsername(username: string):Observable<any> {
    return this.http.get<Usuarios>(this.urlBase + '/usuario/' + username).pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  createUsuario(usuario: Usuarios):Observable<any> {
    return this.http.post<Usuarios>(this.urlBase + '/usuario/create', usuario, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  updateUsuario(usuario: Usuarios): Observable<any>{
    return this.http.put<Usuarios>(`${this.urlBase}/usuario/${usuario.idUsuarios}`, usuario, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return this.mandarError(e)
      })
    );
  }

  deleteUsuario(id: number): Observable<any>{
    return this.http.delete<Usuarios>(`${this.urlBase}/usuario/${id}`).pipe(
      catchError(e => {
        return this.mandarError(e)
      })
    );
  }

  /*---------------------------------  ROLES  ----------------------------------------------- */

  getRoles():Observable<any> {
    return this.http.get<Roles[]>(this.urlBase + '/roles/list/').pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  getRol(id: number):Observable<any> {
    return this.http.get<Roles>(this.urlBase + '/rol/' + id).pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  createRol(rol: Roles):Observable<any> {
    return this.http.post<Roles>(this.urlBase + '/rol/create', rol, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  updateRol(rol: Roles): Observable<any>{
    return this.http.put<Roles>(`${this.urlBase}/rol/${rol.idRoles}`, rol, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return this.mandarError(e)
      })
    );
  }

  deleteRol(id: number): Observable<any>{
    return this.http.delete<Roles>(`${this.urlBase}/rol/${id}`).pipe(
      catchError(e => {
        return this.mandarError(e)
      })
    );
  }

  /*---------------------------------  POKEMONS  ----------------------------------------------- */

  getPokemons():Observable<any> {
    return this.http.get<Pokemons[]>(this.urlBase + '/pokemons/list/').pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  getPokemon(id: number):Observable<any> {
    return this.http.get<Pokemons>(this.urlBase + '/pokemon/' + id).pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  createPokemon(pokemon: Pokemons):Observable<any> {
    return this.http.post<Pokemons>(this.urlBase + '/pokemon/create', pokemon, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        return this.mandarError(e);
      })

    );
  }

  updatePokemon(pokemon: Pokemons): Observable<any>{
    return this.http.put<Pokemons>(`${this.urlBase}/pokemon/${pokemon.idPokemons}`, pokemon, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        return this.mandarError(e)
      })
    );
  }

  deletePokemon(id: number): Observable<any>{
    return this.http.delete<Pokemons>(`${this.urlBase}/pokemon/${id}`).pipe(
      catchError(e => {
        return this.mandarError(e)
      })
    );
  }

}
