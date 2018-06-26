import { Component, OnInit } from '@angular/core';
import { ShintoService } from './shinto.service';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _this = this;
  latest = {
    amount: 0,
    value: 0
  }  
  constructor(private _shinto: ShintoService){ }
  ngOnInit() {
    //Update account based on new info from service. Not ideal solution but see if it works?

    setInterval(() =>{
      var update = this._shinto.shareLastTransaction();
      if(update) {
        this.latest = update;
        console.log("update~~~~~~~")
        console.log(update)
      }
    }, 5000)




  }
}