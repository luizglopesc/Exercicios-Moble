import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  amigos = [
    {
      nome: 'Mateus',
      idade: 22,
      nivelAmizade: 5
    },
    {
      nome: 'Gustavo',
      idade: 25,
      nivelAmizade: 3
    },
    {
      nome: 'Amanda',
      idade: 23,
      nivelAmizade: 4
    },
    {
      nome: 'Brenda',
      idade: 23,
      nivelAmizade: 4
    },
    {
      nome: 'Luan',
      idade: 26,
      nivelAmizade: 5
    }]

  constructor() { }

  ngOnInit() {
  }


}
