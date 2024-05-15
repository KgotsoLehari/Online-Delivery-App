import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-help-modal',
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.scss'],
})




export class HelpsComponent {

  constructor(private modalController: ModalController) { }




  closeTheScreen() {
    this.modalController.dismiss();
  }
}