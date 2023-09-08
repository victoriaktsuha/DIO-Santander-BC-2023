import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  pokemon: PokemonData | any;
  attributesTypes: string[] = ['FIRE', 'ROCK'];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemon('charizard').subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        };
        console.log(res);
        console.log(this.pokemon);
      },
      error: (err) => console.log(err),
    });
  }
}
