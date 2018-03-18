import { Component } from '@angular/core';
@Component({//组件装饰器
  selector: 'app-root',
  templateUrl: './app.component.html',//引入外部HTML文件 一个模板只有一个HTML
  styleUrls: ['./app.component.css'] //
})//声明组件的元数据
export class AppComponent {

  hello=[1,2,3,4];
  idx:number=1;
  getI(ww){
    this.idx = ww;
  }
/*
  // 插值表达式
  title = 'Hello world';
  imgUrl = 'assets/imgs/m1.png';
  // 绑定属性
  id = 'box';
  // 循环
  arr = [1,2,3,4];

  fn(){
    console.log(123);
  }



  // ngSwitch
  fruit:any;
  changeFruit(v){
    console.log(v);
    this.fruit = v;
  }

  // 双向数据绑定
  txt = '新年快乐';

  // todolist
  tolist = [];
  comlist = [];
  content = '';
  addData(){
    this.tolist.push(this.content);
    this.content = '';
  }
  keyData(e){
    if(e.keyCode==13){
      this.tolist.push(this.content);
      this.content = '';
    }
  }
  delData(i){
  	this.tolist.splice(i,1);
  }
  change(i){
    this.comlist.push(this.tolist[i])
    this.tolist.splice(i,1);
  }
  delData2(i){
  	this.comlist.splice(i,1);
  }
  change2(i){
    this.tolist.push(this.comlist[i])
    this.comlist.splice(i,1);
  }
  // 组件交互
  arr1 = [1,2,3,4];
  goodslist = ['a','b','c','d','e','f'];

  agreed = 0;
  disagreed = 0;
  voters = ['张三', '李四', '王五'];
 
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }


  //TODOlist 练习
  data:string;
  dataArr=[];
  dataA=[];
  
  add(){
    this.dataArr.push(this.data);//数组里加入一个元素
    this.data='';//加入后 输入框清空
  }
  changeDate(i){
    //由【正在进行】列表 移到 【已完成】列表
    this.dataA.push(this.dataArr[i]);//添加【正在进行中】 的第i个
    this.dataArr.splice(i,1);//删除【正在进行】列表中的 第i个
  }
  changeDate2(i){
    //由【已完成】列表 移到 【正在进行】列表
    this.dataArr.push(this.dataA[i]);//添加【正在进行中】 的第i个
    this.dataA.splice(i,1);//删除【正在进行】列表中的 第i个
  }
  delete1(i){
    //【正在进行】列表 删除
    this.dataArr.splice(i,1);
  }
  delete2(i){
    this.dataA.splice(i,1);
  }

  */
}
