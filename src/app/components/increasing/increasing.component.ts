import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styles: [
  ]
})
export class IncreasingComponent implements OnInit {

  @ViewChild('txtProguess') txtProguess: ElementRef;

  @Input() legend: string = 'Leyenda';
  @Input() progress: number = 50;

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Leyenda: ', this.legend);
    console.log('Progreso: ', this.progress);
  }

  ngOnInit(): void {
    console.log('========================');
    console.log('Leyenda: ', this.legend);
    console.log('Progreso: ', this.progress);
    console.log('========================');
  }

  onChanges(newValue: number) {

    // let elemHTML: any = document.getElementsByName('proguess')[0];

    // console.log(this.txtProguess);

    if ( newValue >= 100 ) {
      this.progress = 100;
    } else if ( newValue <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    // elemHTML.value = Number( this.progress );
    this.txtProguess.nativeElement.value  = this.progress;
    this.valueChanged.emit(this.progress);

    this.txtProguess.nativeElement.focus();
  }

  changeVal(val: number) {
    if (this.progress >= 100 && val > 0) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && val < 100) {
      this.progress = 0;
      return;
    }
    this.progress += val;
    this.valueChanged.emit(this.progress);
  }

}
