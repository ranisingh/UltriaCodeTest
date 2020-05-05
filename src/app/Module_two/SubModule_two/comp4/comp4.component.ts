import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Output } from '@angular/core';
import {AppserviceService} from '../../../appservice.service'
//import {Comp1Component} from '../../../Module_one/SubModule_one_1/comp1/comp1.component'

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit{

  constructor(private titleservice: AppserviceService) { }

  //@ViewChild('chld4') child4:ElementRef; 
 
 //@ViewChild(Comp1Component) compOneRef:Comp1Component; 

  ngOnInit(): void {
    this.titleservice.Settitle('Comp4');
  }

  //ngAfterViewInit(){
    //console.log(this.compOneRef.title);
  //}
  


}
