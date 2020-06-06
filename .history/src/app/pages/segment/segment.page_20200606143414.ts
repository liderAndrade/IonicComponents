import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit, AfterViewInit {

  @ViewChild(IonSegment) segment: IonSegment;
  superHeroes: Observable<any>;
  publisher = '';

  constructor(private dataServcie: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataServcie.getSuperheroes();
  }

  ngAfterViewInit() {
    this.segment.value = 'todos';

  }

  segmentChanged(event) {

    const segmento = event.detail.value;
    this.publisher = segmento;

  }
}
