import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipe } from '../pipe/safe.pipe';
import { IonicModule } from '@ionic/angular';
import { LearningPageRoutingModule } from './learning-routing.module';
import { LearningPage } from './learning.page';
import { CardTemplateComponent } from './card-template/card-template.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningPageRoutingModule
  ],
  declarations: [LearningPage,CardTemplateComponent,SafePipe]
})
export class LearningPageModule {}
