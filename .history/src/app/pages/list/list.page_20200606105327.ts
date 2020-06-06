import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild('lista') lista: IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(user) {
    console.log(user, 'favorite');
    this.lista.closeSlidingItems();
  }

  share(user) {
    console.log(user, 'share');
    this.lista.closeSlidingItems();
  }

  borrar(user) {
    console.log(user, 'borrar');
    this.lista.closeSlidingItems();
  }
}
