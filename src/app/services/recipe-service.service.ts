import { Injectable } from '@angular/core';
import { Recipe } from '../type/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  serviceRecipe: Recipe[] = [
    {
      id: 1,
      name: '4 formages',
      description: 'Pizza avec 4 fromages',
      ingredients: [
        {
          id: 1,
          name: 'Bleu',
          quantity: 2,
          unit: 'g'
        },
        {
          id: 2,
          name: 'Mozzarella',
          quantity: 200,
          unit: 'g'
        },
        {
          id: 3,
          name: 'Chévre',
          quantity: 100,
          unit: 'g'
        },
        {
          id: 4,
          name: 'Cantal',
          quantity: 150,
          unit: 'g'
        }
      ]
    },
    {
      id: 2,
      name: 'Marguerita',
      description: 'Pizza a la tomate et mozzrella',
      ingredients: [
        {
          id: 3,
          name: 'Mozzarella',
          quantity: 200,
          unit: 'g'
        },
        {
          id: 4,
          name: 'Sauce tomate',
          quantity: 200,
          unit: 'g'
        }
      ]
    }
  ];


}
