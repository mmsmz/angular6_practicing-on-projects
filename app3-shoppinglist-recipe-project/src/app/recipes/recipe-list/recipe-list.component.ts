import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply the desciption', 'https://i.ytimg.com/vi/Vv5Iq-kU1Y4/maxresdefault.jpg'),
    new Recipe('A Test Recipe', 'This is simply the desciption', 'https://i.ytimg.com/vi/Vv5Iq-kU1Y4/maxresdefault.jpg') 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
