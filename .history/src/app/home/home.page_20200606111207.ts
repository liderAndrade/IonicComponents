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
      path: '/avatar',
      icon: 'archive'
    },
    {
      nombre: 'Buttons',
      path: '/buttons',
      icon: 'bandage'
    },
    {
      nombre: 'Cards',
      path: '/cards',
      icon: 'card'
    },
    {
      nombre: 'CheckBox',
      path: '/checkbox',
      icon: 'checkmark-circle-outline'
    },
    {
      nombre: 'DateTime',
      path: '/datetime',
      icon: 'calendar'
    },
    {
      nombre: 'Fab',
      path: '/fab',
      icon: 'car'
    },
    {
      nombre: 'Grid',
      path: '/grid',
      icon: 'grid'
    },
    {
      nombre: 'Infinite Scrool',
      path: '/infinitescrool',
      icon: 'infinite'
    },
    {
      nombre: 'Inputs',
      path: '/inputs',
      icon: 'hammer'
    },
    {
      nombre: 'Lista',
      path: '/list',
      icon: 'list'
    },
    {
      nombre: 'Lista Reorder',
      path: '/list-reorder',
      icon: 'reorder'
    },
    {
      nombre: 'Loading',
      path: '/loading',
      icon: 'load'
    }
  ];


  constructor() { }

}
