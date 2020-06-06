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
      path: '/actionsheet',
      icon: ''
    },
    {
      nombre: 'Alert',
      path: '/alert',
      icon: ''
    },
    {
      nombre: 'Button',
      path: '/buttons',
      icon: ''
    },
    {
      nombre: 'Grid',
      path: '/grid',
      icon: ''
    }
  ];
  constructor() { }

}
