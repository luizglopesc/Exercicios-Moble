import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../pessoas.model';
import { PessoasService } from '../pessoas.service'

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  pessoasArray: Pessoas[] = [];
  pessoas: Pessoas;
  detalhesPessoa: boolean = false;

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas();
    console.log(this.pessoasArray)
  }
  alterarPessoa(pessoas) {
    this.pessoasArray.forEach(pessoas => {
      if (pessoas.id == pessoas.id)
        pessoas.name = pessoas.name
    })
  }

  detalheDaPessoa(pessoa) {
    console.log(pessoa)
    this.detalhesPessoa = true
    this.pessoas = pessoa


  }
}