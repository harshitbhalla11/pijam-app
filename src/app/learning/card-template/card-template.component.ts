import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss'],
})
export class CardTemplateComponent  implements OnInit {
 @Input() data;
 getUrl(url:string) {
  if(url.length<=11){
    console.log(`https://www.youtube.com/embed/${url} | safe`)
    return `https://www.youtube.com/embed/${url}`
    
  }
  else{
    return url
  }
}
checkType(type:string){
const parts = type.split(".");
return parts[1]==="VIDEO"
}
  constructor() { 
    
  }

  ngOnInit() {}

}
