import { Component, inject } from '@angular/core';
import { Recipe } from './type/recipe';
import { RecipeService } from './services/recipe-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recette';

  private recipeService= inject(RecipeService);
  recipe: Recipe[] = [];

  ngOnInit() {
    this.recipe = this.recipeService.serviceRecipe;
  }

}
