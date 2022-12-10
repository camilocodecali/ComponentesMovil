import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


import { ModalInfoPage } from './modal-info.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ModalInfoPage]

})
export class ModalInfoPageRoutingModule {}
