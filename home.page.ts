import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  customerName:any;
  swiperModules = [IonicSlides];
  constructor(private router: Router) {}



  addMenuItems(name: string, cuisine: string, price: number,image:string) {
    // Save restaurant details to local storage
    
    const restaurant = { name: name, cuisine: cuisine, price: price,image:image };
    localStorage.setItem('restaurant', JSON.stringify(restaurant));
    this.router.navigate(['/tabs/cart']);
    
  }


  ngOnInit() {
   
    console.log('Retrieved Customer Name:', this.customerName);
  }

}