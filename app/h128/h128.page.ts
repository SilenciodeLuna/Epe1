import { Component, OnInit } from '@angular/core';
import { ToastController} from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-h128',
  templateUrl: './h128.page.html',
  styleUrls: ['./h128.page.scss'],
})
export class H128Page {

  constructor(public toastCtrl : ToastController,
    public navCtrl : NavController,
    public activatedRoute : ActivatedRoute){}

  epe1:any;
  epe2:any;
  epe3:any;
  epe4:any;
  eva1:any;
  eva2:any;
  eva3:any;
  eva4:any;
  displayString: string;
  exam:any;
  txt:any;

  ngOnInit() {

    this.txt = this.activatedRoute.snapshot.paramMap.get('txt');
  }

  async calcularPromedio(){
    let epe1 = parseInt(this.epe1);
    let epe2 = parseInt(this.epe2);
    let epe3 = parseInt(this.epe3);
    let epe4 = parseInt(this.epe4);
    let eva1 = parseInt(this.eva1);
    let eva2 = parseInt(this.eva2);
    let eva3 = parseInt(this.eva3);
    let eva4 = parseInt(this.eva4);
    let totalevas = (eva1 + eva2 + eva3 + eva4) / 4;
    let pr = (epe1 * 0.1 + epe2 * 0.15 + epe3 * 0.25 + epe4 * 0.25 + totalevas * 0.25);
    let prom = pr / 10;

    const toast = await this.toastCtrl.create({
      message : 'Su promedio es un' + ' ' + '"' +prom+ '"',
      duration : 9000,
      showCloseButton : true,
      position : 'top'
    });
    toast.present();

    if(prom >= 5.5) {
      this.displayString ='EXIMIDO';
    }else {
      this.displayString ='DEBE DAR EXÁMEN';
    }
  }

  async calcularNotaPresentacion(){
    let ep1 = parseInt(this.epe1);
    let ep2 = parseInt(this.epe2);
    let ep3 = parseInt(this.epe3);
    let ep4 = parseInt(this.epe4);
    let ev1 = parseInt(this.eva1);
    let ev2 = parseInt(this.eva2);
    let ev3 = parseInt(this.eva3);
    let ev4 = parseInt(this.eva4);
    let totaleva = (ev1 + ev2 + ev3 + ev4) / 4;
    let suma = (ep1 * 0.1) + (ep2 * 0.15) + (ep3 * 0.25) + (ep4 * 0.25) + (totaleva * 0.25);
    let notaPr = suma * 0.07;

    const toast = await this.toastCtrl.create({
      message : 'Usted se presenta al exámen con un:' + ' ' + '"' +notaPr+ '"',
      duration : 5000,
      showCloseButton : true,
      position : 'middle'
    });
    toast.present();
  }

  async calcularNotaExamen(){
    let ep1 = parseInt(this.epe1);
    let ep2 = parseInt(this.epe2);
    let ep3 = parseInt(this.epe3);
    let ep4 = parseInt(this.epe4);
    let ev1 = parseInt(this.eva1);
    let ev2 = parseInt(this.eva2);
    let ev3 = parseInt(this.eva3);
    let ev4 = parseInt(this.eva4);
    let totalev = (ev1 + ev2 + ev3 + ev4) / 4;
    let total = (ep1 * 0.1) + (ep2 * 0.15) + (ep3 * 0.25) + (ep4 * 0.25) + (totalev * 0.25);
    let notaPresent = total * 0.07;
    let notaEx = notaPresent - 4;
    let notaExamenF = (notaEx * 100)/30;

    const toast = await this.toastCtrl.create({
      message : 'Usted debe sacar en el exámen un:' + ' ' + '"' +notaExamenF+ ', ' +
      'para aprobar el ramo',
      duration : 5000,
      showCloseButton : true,
      position : 'middle'
    });
    toast.present();
  }

  async calcularPromedioFinal(){
    let ep1 = parseInt(this.epe1);
    let ep2 = parseInt(this.epe2);
    let ep3 = parseInt(this.epe3);
    let ep4 = parseInt(this.epe4);
    let ev1 = parseInt(this.eva1);
    let ev2 = parseInt(this.eva2);
    let ev3 = parseInt(this.eva3);
    let ev4 = parseInt(this.eva3);
    let ex = parseInt(this.exam);
    let totale = (ev1 + ev2 + ev3 + ev4) / 4;
    let promF = (ep1 * 0.07) + (ep2 * 0.105) + (ep3 * 0.175) + (ep4 * 0.175) +
    (totale * 0.175) + (ex * 0.3);
    let promFinal = promF /10;

    const toast = await this.toastCtrl.create({
      message : 'Su promedio final es un:' + ' ' + '"' +promFinal+ '"',
      duration : 10000,
      showCloseButton : true,
      position : 'bottom'
    });
    toast.present();

    if(promFinal >= 4){
      this.displayString ='APROBADO';
    }else {
      this.displayString ='REPROBADO';
    }
  }
  
  Volver(){
  
    this.navCtrl.navigateForward('home');

  }

}