import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { HttpService, Pokemon, PokemonResponse } from './http-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, MatTableModule, HttpClientModule],
    providers: [HttpService]
})

export class AppComponent implements OnInit {
  dataSource: Pokemon[] = [];
  displayedColumns: string[] = ['name', 'url'];

  constructor(private httpService: HttpService ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.httpService.getPokemonResponse().subscribe((respuesta) => {
      console.log(respuesta)
      this.dataSource = respuesta.results
    })
  }
}
