import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() location;
  @Output() atualizarEndereco = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  atualizaEndereco() {
    let name = "Villa Mix"
    let location = { address: 'Mineirinho ', city: 'Belo Horizonte', country: 'Brasil' }
    this.atualizarEndereco.emit({ name, location })
  }

}
