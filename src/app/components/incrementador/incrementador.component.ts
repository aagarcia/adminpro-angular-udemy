import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() porcentaje: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtporcentaje') txtPorcentaje: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onChanges( evento: number ) {

    // let elementHTML: any = document.getElementsByName('porcentaje')[0];

    if ( evento >= 100 ) {
      this.porcentaje = 100;
    } else if ( evento <= 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = evento;
    }

    // elementHTML.value = Number( this.porcentaje );
    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );
  }

  cambiarValor( valor: number ) {
    if ( this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }

    if ( this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit( this.porcentaje );

    this.txtPorcentaje.nativeElement.focus();
  }

}
