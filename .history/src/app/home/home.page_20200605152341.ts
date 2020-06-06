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
      icon: 'airplane'
    },
    {
      nombre: 'Alert',
      path: '/alert',
      icon: 'american-football'
    },
    {
      nombre: 'Avatar',
      path: '/buttons',
      icon: 'archive'
    },
    {
      nombre: 'Grid',
      path: '/grid',
      icon: 'bandage'
    }
  ];
  constructor() { }

}
