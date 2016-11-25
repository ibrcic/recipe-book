import { Recipe } from '../recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []
  recipe = new Recipe('Dummy', 'Dummy', 'http://i.imgur.com/GrHfsO8.jpg');

  constructor() { }

  ngOnInit() {
  }

}
