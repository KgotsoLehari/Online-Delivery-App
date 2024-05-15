import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payment-success-modal',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  
})
export class PaymentComponent {
  constructor(private modalController: ModalController ,private router:Router) {}

closeModalAndNavigate() {
    // Close the modal 
    this.closeModal();

    // Navigate to the account page
    this.router.navigateByUrl('/account');
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
