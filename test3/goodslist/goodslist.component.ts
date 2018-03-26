import { Component, OnInit, Input } from '@angular/core';
//import { RouterModule,ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Http,Jsonp, Headers} from '@angular/http';  

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public router:Router,public http:Http ,public jsonp:Jsonp) { }
  //@Input() list:Array<any>;
  list=[];
  ngOnInit() {
    //console.log(this.router.snapshot.params.goodsId); 
    this.jsonp.get( 'http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK' ).subscribe( data=>{ 
    console.log('111');
        this.list=data['_body'];
      } );
  }
  //idx=[];
  //goDetail(idx){
    //this.router.navigate(['/goodslist/gooddetail',idx]);

}
