import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: [
  ]
})
export class GraficodonaComponent implements OnInit {

  // Doughnut
  @Input() ChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() ChartData: number[] = [350, 450, 100];
  @Input() ChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
