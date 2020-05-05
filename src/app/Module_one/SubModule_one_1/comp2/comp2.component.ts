import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../../../appservice.service'

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private titleservice: AppserviceService) { }

  ngOnInit(): void {
    this.titleservice.Settitle('Comp2');
  }

}
