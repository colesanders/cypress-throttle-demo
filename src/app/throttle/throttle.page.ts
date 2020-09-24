import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.page.html',
  styleUrls: ['./throttle.page.scss'],
})
export class ThrottlePage implements OnInit {
  public startTime: number;
  public endTime: number;
  public timeOnPage: number;

  public time: number;
  public timeWaited: number;
  public foundChar: any;
  public mathOperation: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.time = +this.activatedRoute.snapshot.paramMap.get('time');
    this.timeWaited = 0;

    this.startTime = Date.now();

    this.loadData();
  }

  loadData() {
    const interval = 1;
    if (this.timeWaited < this.time - interval) {
      setTimeout(() => {
        this.doHardStuff(this.timeWaited);
        this.loadData();
        this.timeWaited += interval;
      }, interval);
    }else {
      this.endTime = Date.now();
      this.timeOnPage = this.endTime - this.startTime;

      console.log('Start', this.startTime);
      console.log('End', this.endTime);
    }
  }

  doHardStuff(time) {
    const testString = 'Test This String For Inclusion';

    for (let i = 0; i < testString.length; i++) {
      this.foundChar = testString.includes(testString.charAt(i));
      this.foundChar = 'Reset';
    }

    this.mathOperation = Math.pow(Math.random(), time);
  }

  reset() {
    this.timeWaited = 0;
    this.startTime = Date.now();
    this.loadData();
  }
}
