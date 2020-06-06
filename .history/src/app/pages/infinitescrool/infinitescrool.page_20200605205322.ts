import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinitescrool',
  templateUrl: './infinitescrool.page.html',
  styleUrls: ['./infinitescrool.page.scss'],
})
export class InfinitescroolPage implements OnInit {

  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


  constructor() { }

  ngOnInit() {
  }

  loadData(event) {

    if (this.data.length > 50) {
      event.target.complete();
      return;
    }

    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      event.target.complete();

    }, 1000);
  }
}
