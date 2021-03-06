import { Recipe } from './../recipe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
