import { Component, OnInit } from '@angular/core';
let inp = document.getElementById("textInp");
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  number : Number = 1;


  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
    console.log("buttons was cklicked");
  }

}
