import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input('labelChart') doughnutChartLabels: string[] = [];
  @Input('dataChart') doughnutChartData: number[] = [];
  @Input('typeChart') doughnutChartType: string;
  @Input('leyendaChart') leyendaChart: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
