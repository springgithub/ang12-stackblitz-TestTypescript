import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})


export class Test1Component implements OnInit {

  msg0: string = 'xxxx';
  msg1: string;
  msg2: string;
  msg3: string;
  constructor() { }

  ngOnInit() {
   // this.msg0 = 'wwww';
    //this.msg1 = this.f1();
    this.f1();
  }

  f1(): string {
    let v1 = [1,2,3];

    let a, b, c = [...v1];

    this.msg0 = a;
    this.msg1 = b;
 //   this.msg2 = c;
    
    return 'mmmm';
  }


}