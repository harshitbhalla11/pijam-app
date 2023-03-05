import { Component, OnInit } from '@angular/core';
import Learningdata from '../../assets/learing.json';

interface Learnings {  
  type: string;  
  url: string;  
  title: string;  
  order: Number;  
}  

@Component({
  selector: 'app-learning',
  templateUrl: './learning.page.html',
  styleUrls: ['./learning.page.scss'],
})
export class LearningPage implements OnInit {
  learn: Learnings[] = Learningdata; 

  
  constructor() {
   
   }

  ngOnInit() {
  }

}
