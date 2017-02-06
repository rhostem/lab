import { Component, OnInit } from '@angular/core';
import { Logger } from './service/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Logger
  ],
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private logger: Logger) {

  }

  ngOnInit() {
    console.log(this.logger);
    this.logger.log('log from App component');
  }
}
