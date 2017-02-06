import { Component, OnInit } from '@angular/core';
import { Logger } from '../service/logger.service';

@Component({
  selector: 'app-testlog',
  templateUrl: './testlog.component.html',
  styleUrls: ['./testlog.component.css'],
  providers: [
    Logger
  ]
})
export class Testlog implements OnInit {

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log('log from TestLog component');
  }
}
