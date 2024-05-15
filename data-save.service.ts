import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})




export class DataSaveService {
  private readonly STORAGE_KEY = 'pastOrders';
  pastOrders: any[] = [];
  customerName: string = '';
  constructor() {
    const storedOrders = localStorage.getItem(this.STORAGE_KEY);
    this.pastOrders = storedOrders ? JSON.parse(storedOrders) : [];
  }

  clearAccount() {
    this.pastOrders = [];
    this.saveOrdersToLocalStorage();
  }


  retrievePastOrders(): any[] {
    
    const sortedOrders = this.pastOrders.sort((a, b) => {
     
      const dateA = new Date(a.dateTimePlaced);
      const dateB = new Date(b.dateTimePlaced);
      
   
      return dateB.getTime() - dateA.getTime();
    });
  
    
    return sortedOrders;
  }
  

  private saveOrdersToLocalStorage() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.pastOrders));

    
  }

  addOrderToCart(order: any) {
    this.pastOrders.push(order);
    this.saveOrdersToLocalStorage();
  }

}