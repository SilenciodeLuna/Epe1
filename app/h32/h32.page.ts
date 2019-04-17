import { Component, OnInit } from '@angular/core';
import { ToastController} from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-h32',
  templateUrl: './h32.page.html',
  styleUrls: ['./h32.page.scss'],
})
export class H32Page implements OnInit{

  constructor(public toastCtrl : ToastController,
    public navCtrl : NavController,
    public activatedRoute : ActivatedRoute){}

    epe1:any;
    epe2:any;
    epe3:any;
    eva1:any;
    eva2:any; 
    displayString: string;
    exam:any;
    txt:any;

    ngOnInit() {

      this.txt = this.activatedRoute.snapshot.paramMap.get('txt');
    }

    async calcularPromedio(){
    let ep1 = parseInt(this.epe1);
    let ep2 = parseInt(this.epe2);
    let ep3 = parseInt(this.epe3);
    let ev1 = parseInt(this.eva1);
    let ev2 = parseInt(this.eva2);
    let totalevas = (ev1 + ev2) / 2;
    let pr = (ep1 * 0.1) + (ep2 * 0.2) + (ep3 * 0.3) + (totalevas * 0.4);
    let prom = pr / 10;

    const toast = await this.toastCtrl.create({
      message : 'Su promedio es un:' + ' ' + '"' +prom+ '"',
      duration : 9000,
      showCloseButton : true,
      position : 'top'
    });
    toast.present();

    if(prom >= 5.5){
      this.displayString ='EXIMIDO';
    }else {
      this.displayString ='DEBE DAR EXÁMEN';
    }
  }

  async calcularNotaPresentacion(){
    let ep1 = parseInt(this.epe1);
    let ep2 = parseInt(this.epe2);
    let ep3 = parseInt(this.epe3);
    let ev1 = parseInt(this.eva1);
    let ev2 = parseInt(this.eva2);
    let totaleva = (ev1 + ev2) / 2;
    let suma = (ep1 * 0.1) + (ep2 * 0.2) + (ep3 * 0.3) + (totaleva * 0.4);
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
    let ev1 = parseInt(this.eva1);
    let ev2 = parseInt(this.eva2);
    let totalev = (ev1 + ev2) / 2;
    let total = (ep1 * 0.1) + (ep2 * 0.2) + (ep3 * 0.3) + (totalev * 0.4);
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
    let ev1 = parseInt(this.eva1);
    let ev2 = parseInt(this.eva2);
    let ex = parseInt(this.exam);
    let totale = (ev1 + ev2) / 2;
    let promF = (ep1 * 0.07) + (ep2 * 0.14) + (ep3 * 0.21) + 
    (totale * 0.28) + (ex * 0.3);
    let promFinal = promF /10;

    const toast = await this.toastCtrl.create({
      message : 'Su promedio final es un:' + ' ' + '"' +promFinal+ '"',
      duration : 9000,
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

