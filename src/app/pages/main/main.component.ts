import { Component, OnInit } from '@angular/core';
import { opacityTrigger } from 'src/app/animations/opacity.animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../../app.component.less', './main.component.less'],
  animations: [opacityTrigger],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
