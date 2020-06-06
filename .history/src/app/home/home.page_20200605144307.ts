import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any = [
    {
      nombre: 'Action Sheet',
      path: ''
    },
    {
      nombre: '',
      path: ''
    }
    {
      nombre: '',
      path: ''
    }
    {
      nombre: '',
      path: ''
    }
  ];
  constructor() { }

}
