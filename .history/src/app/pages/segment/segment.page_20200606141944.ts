import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit, AfterViewInit {

  @ViewChild(IonSegment) segment: IonSegment;

  constructor() { }

  ngOnInit() {
    if (this.segment) {
      this.segment.value = 'todos';
    }
  }

  ngAfterViewInit() {


  }

  segmentChanged(event) {

    const segmento = event.detail.value;

    console.log(segmento);
  }
}
