import { FilmService } from './../../services/film.service';
import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import Film from '../../models/film.model';
import Album from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  films: Film[] = [];

  albums: Album[] = [];

  constructor(
    private filmService: FilmService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.filmService
      .getFilms()
      .subscribe((reponseFilm) => (this.films = reponseFilm));
    this.albumService
      .getAlbums()
      .subscribe((reponseAlbums) => (this.albums = reponseAlbums));
  }
}
