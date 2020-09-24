import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filler',
  templateUrl: './filler.page.html',
  styleUrls: ['./filler.page.scss'],
})
export class FillerPage implements OnInit, OnDestroy {
  id: number;
  private sub: Subscription;
  public time: number;
  public timeWaited: number;
  public foundChar: any;
  public mathOperation: number;

  constructor(private route: ActivatedRoute, public navCtrl: NavController) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params.id + 1;
    });

    this.time = 600000;
    this.timeWaited = 0;

    this.loadData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addFiller() {
    this.navCtrl.navigateForward(`filler/${this.id}`);
  }

  goToThrottle() {
    this.navCtrl.navigateForward('throttle/1000');
  }

  loadData() {
    const interval = 10;
    if (this.timeWaited < this.time - interval) {
      setTimeout(() => {
        this.doHardStuff(this.timeWaited);
        this.loadData();
        this.timeWaited += interval;
      }, interval);
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
}
