import { Component,EventEmitter,Input,Output} from '@angular/core';
import { MyserviceService } from './services/myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public getlocaldata:MyserviceService) { }
  input_data = [];
  getData(event){
    this.input_data.push(event);
    this.getlocaldata.addData('d1',this.input_data);
  }
  data;
  ngOnInit(){
    this.data=(this.getlocaldata.showData('d1')).split(',');
    if(this.data!=""){
      this.input_data=this.data;
    }
  }
}
