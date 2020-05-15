import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PessoasService } from '../pessoas.service'
import { Input } from '@angular/core'
import { Pessoas } from '../pessoas.model';

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {


  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
  }
  @Input() pessoa: Pessoas

  @Output() novaPessoa = new EventEmitter()
  pessoaNova: Pessoas

  atualizarDados() {
    document.querySelector(".style").classList.toggle("none")
  }

  confirmarDados(name, idade, corOlhos, sexo, email) {
    this.pessoaNova = { id: this.pessoa.id, name: name, idade: idade, corOlhos: corOlhos, sexo: sexo, email: email }
    this.novaPessoa.emit(this.pessoaNova)
  }

}

