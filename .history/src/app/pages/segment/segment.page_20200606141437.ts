import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segmento: IonSegment;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event) {

    const segmento = event.detail.value;

    console.log(segmento);
  }
}
