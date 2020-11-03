import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default-dark'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.loadSettings();
  }

  saveSettings() {
    console.log('Saved in Local Storage');
    localStorage.setItem('settings', JSON.stringify( this.settings ));
  }

  loadSettings() {
    if ( localStorage.getItem('settings') ) {
      this.settings = JSON.parse( localStorage.getItem('settings') );
      console.log('Cargado del Local Storage');

      this.applyTheme( this.settings.theme );

    } else {
      console.log('Valores por defecto.');
      this.applyTheme( this.settings.theme );
    }
  }

  applyTheme ( theme: string ) {
    const url = `assets/css/colors/${ theme }.css`;

    this._document.getElementById('TemplateTheme').setAttribute('href', url);

    this.settings.theme = theme;
    this.settings.themeUrl = url;

    this.saveSettings();
  }

}

interface Settings {
  themeUrl: string;
  theme: string;
}
