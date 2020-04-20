import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Enumr } from './models/enumr';

@Component({
  selector: 'enumr',
  templateUrl: './enumr.component.html',
  styleUrls: ['./enumr.component.scss']
})
export class EnumrComponent implements OnInit {

  @Input() dataset: Array<Enumr>;
  @Input() model: any;
  
  constructor() { }

  ngOnInit() {
  }
}
