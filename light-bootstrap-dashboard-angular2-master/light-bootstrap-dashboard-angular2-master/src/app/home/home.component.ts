import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { TestServerService } from 'app/test-server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public activityChartType: ChartType;
  public activityChartData: any;
  public activityChartData1: any;
  public activityChartOptions: any;
  public activityChartType1: ChartType;
  public activityChartOptions1: any;
  date: string[] = [];
  ml: string[] = [];
  total: string[] = [];
  date1: string[] = [];
  ml1: string[] = [];
  total1: string[] = [];
  dailyTestDataList: any;
  dailyLiveDataList: any;
  public activityChartResponsive: any[];
  public activityChartLegendItems: LegendItem[];
  public activityChartResponsive1: any[];
  public activityChartLegendItems1: LegendItem[];
  constructor(public formbuilder: FormBuilder, public router: Router, public service: TestServerService) { }

  ngOnInit() {
    this.getServerData();
    this.showGraph();   
  }
  
  showGraph(){
    this.activityChartType = ChartType.Bar;
    this.activityChartData = {
      labels: this.date,
      series: [
        this.ml,
        this.total
      ]
    };
    
    this.activityChartOptions = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: '245px'
    };
    this.activityChartResponsive = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.activityChartLegendItems = [
      { title: 'Ml', imageClass: 'fa fa-circle text-info' },
      { title: 'Total', imageClass: 'fa fa-circle text-danger' }
    ];

    this.activityChartType1 = ChartType.Bar;
    this.activityChartData1 = {
      labels: this.date1,
      series: [
        this.ml1,
        this.total1
      ]
    };
    
    this.activityChartOptions1 = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: '245px'
    };
    this.activityChartResponsive1 = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.activityChartLegendItems1 = [
      { title: 'Ml', imageClass: 'fa fa-circle text-info' },
      { title: 'Total', imageClass: 'fa fa-circle text-danger' }
    ];
  }

  getServerData() {

    this.service.getDailyServerData("test").subscribe(data => {
      this.dailyTestDataList = data;
      if (this.dailyTestDataList.length == 0) {

      } else {
        for (let result of this.dailyTestDataList) {
          this.date.push(result.date);
        }

        for (let result of this.dailyTestDataList) {
          this.ml.push(result.ml);
        }
        for (let result of this.dailyTestDataList) {
          this.total.push(result.total);
        }
      
      }


    }, error => {

    })

    
    this.service.getDailyServerData("live").subscribe(data => {
      this.dailyLiveDataList = data;
      if (this.dailyLiveDataList.length == 0) {

      } else {
        for (let result of this.dailyLiveDataList) {
          this.date1.push(result.date);
        }

        for (let result of this.dailyLiveDataList) {
          this.ml1.push(result.ml);
        }
        for (let result of this.dailyLiveDataList) {
          this.total1.push(result.total);
        }
      
      }


    }, error => {

    })

  }

}
