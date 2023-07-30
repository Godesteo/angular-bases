import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi Primera  APP de Angular';

  public counter : number = 10;

  increaseBy(value: number):void{
    this.counter +=1;
 }

 decriseBy(value: number):void{
  this.counter -= 1;
 }

 resetValue():void{
    this.counter = 0;
 }


}
