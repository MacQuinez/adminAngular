import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  progressOne: number = 50;
  progressTwo: number = 70;

  constructor() {}

  ngOnInit() {}

  update(event: number) {
    return event;
  }
}
