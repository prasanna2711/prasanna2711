import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { TestServerService } from 'app/test-server.service';
@Component({
  selector: 'app-test-server',
  templateUrl: './test-server.component.html',
  styleUrls: ['./test-server.component.css']
})
export class TestServerComponent implements OnInit {
  TestServerForm: FormGroup
  server: any;
  status: any;
  testServerList: any;
  constructor(public formbuilder: FormBuilder, public router: Router, public service: TestServerService) { }

  ngOnInit() {
    this.TestServerForm = this.formbuilder.group({
     
    })
    this.getTestServer()
  }
  getTestServer() {
    this.service.getTestServer().subscribe(data => {
      this.testServerList = data;
      if (this.testServerList.length == 0) {

      } else {
      }


    }, error => {

    })
  }
}
