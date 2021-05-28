import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { TestServerService } from 'app/test-server.service';
@Component({
  selector: 'app-base-line-test-server',
  templateUrl: './base-line-test-server.component.html',
  styleUrls: ['./base-line-test-server.component.css']
})
export class BaseLineTestServerComponent implements OnInit {
  BaseLineTestServerForm: FormGroup
  server: any;
  status: any;
  testServerList: any;
  constructor(public formbuilder: FormBuilder, public router: Router, public service: TestServerService) { }

  ngOnInit() {
    this.BaseLineTestServerForm = this.formbuilder.group({
     
    })
    this.getTestServer()
  }
  getTestServer() {
    this.service.getBaseLineTestServer().subscribe(data => {
      this.testServerList = data;
      if (this.testServerList.length == 0) {

      } else {
      }


    }, error => {

    })
  }
}

