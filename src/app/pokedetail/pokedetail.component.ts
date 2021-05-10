import { Component, OnInit, Input } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeDetail } from '../pokemon';
@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
  providers: []
})
export class PokedetailComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('detail')
  detail: PokeDetail;

  constructor(private pokeShareInfoService: PokeShareInfoService) {
    this.pokeShareInfoService.getObservable().subscribe(e => console.log('e ' + e));
  }


  ngOnInit(): void {
  }


}
