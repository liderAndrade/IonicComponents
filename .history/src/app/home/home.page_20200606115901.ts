import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente[];
  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {

  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
} 
