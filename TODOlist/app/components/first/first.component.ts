import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

constructor() { }
@Input() arrData:Array<any>; 
@Output() getIndex = new EventEmitter();
  ngOnInit() {//进行数据的初始化
    //console.log(123);
  }
  //ngDoCheck(){
   // console.log(123);
  //}


  fn(i){
    this.getIndex.emit(i);
  }
}
