import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter : {{counter}}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetValue()">Reset</button>
  <button (click)="decriseBy(-1)">-1</button>
  `
})

export  class CounterComponent {

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

