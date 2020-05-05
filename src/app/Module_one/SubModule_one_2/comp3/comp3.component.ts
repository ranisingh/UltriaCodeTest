import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../../../appservice.service'

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private titleservice: AppserviceService) { }

  ngOnInit(): void {
    this.titleservice.Settitle('Comp3');
  }

}
