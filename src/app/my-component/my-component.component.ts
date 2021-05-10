import { Component, OnInit } from '@angular/core';
import { Pokemon,PokeDetail } from '../pokemon';
import { ThrowStmt } from '@angular/compiler';
import { PokeAPIServiceService } from './../poke-apiservice.service';
import { PokeShareInfoService } from './../poke-share-info.service';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {
  id: string;
  selectedPokeId: string;
  searchPokeName: '';
  pokes: Pokemon[] = [];
  pokeDetail: PokeDetail;
  myDate: Date;
  checked = true;
  constructor(private pokeService: PokeAPIServiceService,
              // tslint:disable-next-line: no-shadowed-variable
              private pokeShareInfoService: PokeShareInfoService
              )  {

  }
  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon('' + index , e.name , e.url));
      });
    });

  }
  go(){
    if(this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data => this.pokeDetail = data );
      this.pokeShareInfoService.setValue(this.selectedPokeId);
    }
  }

}
