import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})





export class SearchPage {
  restaurants = [
    { name: 'Subway', cuisine: 'Fast Food', price: 60.99, image: 'assets/subwayLogo.png', rating: 4.4, deliveryTime: 25, distance: '2.50 kms away' },
  { name: 'Wingstop', cuisine: 'Fast Food', price: 99.99, image: 'assets/wingstopLogo.jpeg', rating: 4.1, deliveryTime: 30, distance: '5.00 kms away' },
  { name: 'Wendys', cuisine: 'Fast Food', price: 84.99, image: 'assets/wendysLogo.png', rating: 4.1, deliveryTime: 10, distance: '1.20 km away' },
  { name: 'Starbucks', cuisine: 'Beverages', price: 54.99, image: 'assets/starbucksLogo.png', rating: 3.9, deliveryTime: 15, distance: '0.59 kms away' },
  { name: 'Hana Sushi', cuisine: 'Asian Cuisine', price: 50.00, image: 'assets/HanaLogo.png', rating: 4.0, deliveryTime: 8, distance: '0.20 kms away' }
  ];
  filteredRestaurants = [...this.restaurants]; 
  searchTerm: string = '';

  constructor(private router: Router) {} 

  insertToCart(name: string, cuisine: string, price: number,image:string) {
    
    
    const restaurant = { name: name, cuisine: cuisine, price: price ,image:image};
    localStorage.setItem('restaurant', JSON.stringify(restaurant));
    this.router.navigate(['/tabs/cart']);
    
  }

  filterRestaurants() {
    this.filteredRestaurants = this.restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      ||restaurant.cuisine.toLowerCase().includes(this.searchTerm.toLowerCase())
      ||restaurant.rating.toString().includes(this.searchTerm.toLowerCase())
      ||restaurant.distance.toString().includes(this.searchTerm.toLowerCase())
      ||restaurant.price.toString().includes(this.searchTerm.toLowerCase())
    );
  }

 
}