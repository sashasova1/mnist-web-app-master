import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {


  @Input() data;

  barChartLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  barChartType = 'bar';
  barChartLegend = false;
  barChartData: any;
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: '#0da8e0',
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontSize: 15
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: true
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 1
        }
      }]
    }

  };

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.barChartData = [
      {
        data: this.data,
        label: 'Predictions',
        backgroundColor: '#3e4344',
      }];
  }

}
