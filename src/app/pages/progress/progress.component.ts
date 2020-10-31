import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  progress1: number = 50;
  progress2: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  update(event: number) {
    console.log('Evento: ', event);
  }

  // changeVal (val: number) {
  //   if (this.progress >= 100 && val > 0) {
  //     this.progress = 100;
  //     return;
  //   }

  //   if (this.progress <= 0 && val < 100) {
  //     this.progress = 0;
  //     return;
  //   }
  //   this.progress += val;
  // }

}
