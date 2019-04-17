import { Component } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl : NavController,
    public alertCtrl:AlertController){}

    txt:any;

  async IrH32(){
    const alert = await this.alertCtrl.create({
      header: 'MENSAJE',
      message: 'Ha seleccionado la opción de 32 horas académicas',
      buttons: ['Aceptar']
    });
    alert.present();  
    this.navCtrl.navigateForward(`/h32/${this.txt}`);
  }

  async IrH64(){
    const alert = await this.alertCtrl.create({
      header: 'MENSAJE',
      message: 'Ha seleccionado la opción de 64 horas académicas',
      buttons: ['Aceptar']
    });
    alert.present();
    this.navCtrl.navigateForward(`/h64/${this.txt}`);
  }

  async IrH96(){
    const alert = await this.alertCtrl.create({
      header: 'MENSAJE',
      message: 'Ha seleccionado la opción de 96 horas académicas',
      buttons: ['Aceptar']
    });
    alert.present();
    this.navCtrl.navigateForward(`/h96/${this.txt}`);
  }

  async IrH128(){
    const alert = await this.alertCtrl.create({
      header: 'MENSAJE',
      message: 'Ha seleccionado la opción de 128 horas académicas',
      buttons: ['Aceptar']
    });
    alert.present();
    this.navCtrl.navigateForward(`/h128/${this.txt}`);
  }

   AcercaDe(){
    this.navCtrl.navigateForward('acerca-de');
  }

}