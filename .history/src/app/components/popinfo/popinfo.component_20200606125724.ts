import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items = Array(40);


  constructor() { }

  ngOnInit() { }

  onClick(valor: number) {

  }
}
