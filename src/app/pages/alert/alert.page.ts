import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Boton Cancelar');
        }},
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton Ok');
          }}
      ]
    });

    await alert.present();
  }


  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Input',
      subHeader:"Ingrese su nombre",
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Name'
        },

      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: ( data) => {
            console.log("ok", data);
            this.titulo= data.name1;
          }
        }
      ]
    });

    await alert.present();
  }
}
