import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { FilmsService } from './films/films.service';
import { PeopleService } from './people/people.service';
import { ShipsService } from './ships/ships.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Swapi';
  searchForm: FormGroup;
  sw: Object;

  constructor(
    private formBuilder: FormBuilder,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private shipsService: ShipsService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      menu: new FormControl(),
      getInfo: new FormControl(),
    })
  }
  submit() {
    if (this.searchForm.value.menu === 'people') {
      this.peopleService.getPeople(this.searchForm.value.getInfo)
        .subscribe(info => {
          this.sw = info;
          console.log(info);
        })
    }else if (this.searchForm.value.menu === 'ships') {
      this.shipsService.getShips(this.searchForm.value.getInfo)
        .subscribe(info => {
          this.sw = info
        })
    }else if (this.searchForm.value.menu === "films"){
      this.filmsService.getFilms(this.searchForm.value.getInfo)
        .subscribe(info =>{
          this.sw = info
        })
    } else{
      console.log('Nothing found');
    }
    
  }
}
