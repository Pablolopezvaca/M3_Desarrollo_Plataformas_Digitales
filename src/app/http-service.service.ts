import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

@Injectable({
  providedIn: 'root',
})

export class HttpService {
  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonResponse(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(this.pokemonUrl);
  }
}
