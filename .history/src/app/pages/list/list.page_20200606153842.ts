import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild('lista') lista: IonList;

  constructor(private dataService: DataService,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(user) {

    this.lista.closeSlidingItems();

    this.presentToast('favorite');
  }

  share(user) {

    this.lista.closeSlidingItems();
    this.presentToast('share');

  }

  borrar(user) {

    this.lista.closeSlidingItems();
    this.presentToast('borrar');
  }

  async presentToast(mensaje) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
