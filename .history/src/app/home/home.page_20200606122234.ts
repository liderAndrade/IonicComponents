import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Componente[] = [];

  constructor(private menuCtrl: MenuController,
    private dataService: DataService) { }

  ngOnInit() {

  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
