import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { TestServerService } from 'app/test-server.service';
@Component({
  selector: 'app-daily-data',
  templateUrl: './daily-data.component.html',
  styleUrls: ['./daily-data.component.css']
})
export class DailyDataComponent implements OnInit {
  DailyDataForm: FormGroup
  server: any;
  status: any;
  dailyDataList: any;
  constructor(public formbuilder: FormBuilder, public router: Router, public service: TestServerService) { }

  ngOnInit() {
    this.DailyDataForm = this.formbuilder.group({
     
    })
    this.getDailyData()
  }
  getDailyData() {
    this.service.getDailyData().subscribe(data => {
      this.dailyDataList = data;
      if (this.dailyDataList.length == 0) {

      } else {
      }


    }, error => {

    })
  }
}


