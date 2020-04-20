import { Component, OnInit } from '@angular/core';
import { dataset } from './dataset';
import { Enumr } from 'ngx-enumr-dev';
import { Status } from 'demo/models/status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public enums: Array<Enumr>;
  public status: Status;

  constructor() {
  }

  ngOnInit() {
    this.enums = dataset;   
    this.status = Status.Waiting;
  }
}
