import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/usuarios';
import { UsueriosService } from '../service/usuerios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuarios = new Usuarios();

  constructor(private usuariosService: UsueriosService) { }

  ngOnInit(): void {

  }

  validarUsuario(){
    this.usuariosService.getUsuarioByUsername(this.usuario.username).subscribe(response =>{
      if(this.usuario.password == response.password){

      }
    })






  }

}
