import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataSaveService } from 'src/app/data-save.service';
import { PaymentComponent } from 'src/app/pages/tabs/payment/payment.component';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage  {
  restaurantName: string = '';
  restaurantCuisine: string = '';
  restaurantPrice: number = 0;
  quantity: number = 1;
  deliveryRate: number = 50;
  deliveryInstructions: string = '';
  officeAddress: string = '45 Cali Street , Los Angeles';
  currentOrder: any;
  totalPrice =0;
  deliveryAddress='';
  restaurantImage:string='';


  constructor(private modalController: ModalController,private DataSave: DataSaveService) {}
  
  
  ionViewWillEnter() {
    
    const restaurantString = localStorage.getItem('restaurant');
    if (restaurantString !== null) {
      const restaurant = JSON.parse(restaurantString);
      this.restaurantName = restaurant.name || '';
      this.restaurantCuisine = restaurant.cuisine || '';
      this.restaurantPrice = restaurant.price || 0;
      this.quantity = restaurant.quantity || 1; 
      this.deliveryRate = restaurant.deliveryRate || 50;
      this.totalPrice = restaurant.totalPrice || 0;
      this.deliveryInstructions = restaurant.deliveryInstructions || '';
      this.deliveryAddress = restaurant.deliveryAddress || '';
      this.restaurantImage=restaurant.image|| '';
    } 
    
  }


  async showPaymentButton() {
    const currentDate = new Date(); 
  
    const modal = await this.modalController.create({
      component: PaymentComponent,
      cssClass: 'payment'
    });
    modal.onDidDismiss().then((data) => {
      const order = {
        restaurantName: this.restaurantName,
        restaurantCuisine: this.restaurantCuisine,
        restaurantPrice: this.restaurantPrice.toString(),
        quantity: this.quantity.toString(),
        deliveryRate: this.deliveryRate.toString(),
        deliveryInstructions: this.deliveryInstructions,
        totalPrice: this.getTotalPrice().toString(),
        officeAddress: this.officeAddress,
        dateTimePlaced: currentDate ,
        restaurantImage:this.restaurantImage
      };
  
      
      this.DataSave.addOrderToCart(order);
  
      
      this.restaurantName = '';
      this.restaurantCuisine = '';
      this.restaurantPrice = 0;
      this.quantity = 1;
      this.deliveryRate = 50;
      this.deliveryInstructions = '';
      this.restaurantImage='';
      this.emptyCart(); 
    });
    await modal.present();
  }
  
  addQuantity() {
    this.quantity++;
  }

  
  emptyCart() {
    localStorage.clear(); 
  }
  
  getTotalPrice(): number {
    return (this.restaurantPrice * this.quantity) + this.deliveryRate;
  }



  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }




  
}