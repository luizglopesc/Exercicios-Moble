import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  viagens = [
    {
      Local: 'Vitoria',
      Descricao: "a trabalho",
      data: "2019"
    },

    {
      Local: 'Aracaju',
      descricao: "Ferias",
      data: "2001"
    },
  ]

}
