import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit(): void {
    this.colorcarCheck();
  }

  cambiarColor( tema: string, elemento: any ) {
    this.aplicarCheck( elemento );

    this._ajustes.aplicarTema( tema );
  }

  aplicarCheck( elemento: any ) {
    let selectores : any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      ref.classList.remove('working');
    }

    elemento.classList.add('working');
  }

  colorcarCheck() {
    let selectores : any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
