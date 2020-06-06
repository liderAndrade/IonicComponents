import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinitescrool',
  templateUrl: './infinitescrool.page.html',
  styleUrls: ['./infinitescrool.page.scss'],
})
export class InfinitescroolPage implements OnInit {

  data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {


    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      event.target.complete();

    }, 1000);
  }
}
