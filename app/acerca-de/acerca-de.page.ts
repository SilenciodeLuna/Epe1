import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage {

  constructor(public navCtrl : NavController){}

  Volver(){
    
    this.navCtrl.navigateForward('home');

  }

}
