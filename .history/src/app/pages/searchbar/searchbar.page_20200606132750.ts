import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.albumes = this.dataService.getAlbums();
  }

  buscar(event) {
    console.log(event);
  }
}
