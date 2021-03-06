import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {

    this.presentLoading();
  }

  async presentLoading(mensaje: string) {
    const loading = await this.loadingController.create({
      cssClass: mensaje,
      message: 'Please wait...'
      //duration: 2000
    });

    return await loading.present();
  }


}
