import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personas = ['aguaman', 'superman', 'batman', 'flash', 'mujer maravilla'];
  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    console.log(event);

    const itemMover = this.personas.splice(event.detail.from, 1)[0];
    this.personas.splice(event.detail.to, 0, itemMover);

    event.detail.complete();
  }

  onClick() {
    console.log(this.personas);
  }
}
