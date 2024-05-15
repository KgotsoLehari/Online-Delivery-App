import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router'; // Import Router

import { CartPage } from '../cart/cart.page';
import { HelpsComponent } from '../helps/helps.component';
import { DataSaveService } from 'src/app/data-save.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage  {
  pastOrders: any[] = [];
  selectedOrder: any;
  customerName: string='Dr Time Ade';
  customerEmail: string='timothy.adeliyi@up.ac.za';
  customerPhone: string='0314023352';
  editMode: boolean = false;
  isPanelExpanded: boolean = false;

  constructor(private DataSaveService: DataSaveService,private modalController: ModalController,private router: Router) {} 

  
 
  saveOrderDetails(order: any) {
    // This is done to ensure order details are saved via the local storage


    const restaurant = {
      name: order.restaurantName,
      cuisine: order.restaurantCuisine,
      price: order.restaurantPrice,
      quantity:order.quantity,
      DeliveryRate:order.deliveryRate,
      TotalPrice:order.TotalPrice,
      DeliveryInstruction:order.deliveryInstructions,
      DeliveryAddress:order.DeliveryAddress,
      image:order.restaurantImage
    };
    localStorage.setItem('restaurant', JSON.stringify(restaurant));
    
  
    this.router.navigate(['/tabs/cart']);
  }

  clearOrderHistory() {
    this.DataSaveService.clearAccount();
    this.pastOrders = [];
  }

expansionPanel() {
  this.isPanelExpanded = !this.isPanelExpanded;
  this.editMode = !this.editMode;
  
}

ionViewWillEnter() {
  this.pastOrders = this.DataSaveService.retrievePastOrders();
}
 



stringifyOrder(order: any): string {
  return JSON.stringify(order);
    }
              
  async openHelpModal() {
    const modal = await this.modalController.create({
      component: HelpsComponent,
      cssClass: 'help-modal',
    });
    return await modal.present();
  }

 

 
  

  

}
