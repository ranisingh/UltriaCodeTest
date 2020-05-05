import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../../../appservice.service'


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
title:string = "Rani";
constructor(private titleservice: AppserviceService) { }

  ngOnInit(): void {
    this.titleservice.Settitle('Comp1');
  }

 

}
