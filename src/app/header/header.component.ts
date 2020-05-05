import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../appservice.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title:string;
  constructor(private titleService: AppserviceService) { }

  ngOnInit(): void {
    this.titleService.Gettitle().subscribe(compTitle => this.title = compTitle);
  }

}
