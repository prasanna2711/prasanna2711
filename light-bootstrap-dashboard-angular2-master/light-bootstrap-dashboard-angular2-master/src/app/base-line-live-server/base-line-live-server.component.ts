import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { TestServerService } from 'app/test-server.service';
@Component({
  selector: 'app-base-line-live-server',
  templateUrl: './base-line-live-server.component.html',
  styleUrls: ['./base-line-live-server.component.css']
})
export class BaseLineLiveServerComponent implements OnInit {
  BaseLineLiveServerForm: FormGroup
  server: any;
  status: any;
  liveServerList: any;
  constructor(public formbuilder: FormBuilder, public router: Router, public service: TestServerService) { }

  ngOnInit() {
    this.BaseLineLiveServerForm = this.formbuilder.group({
     
    })
    this.getTestServer()
  }
  getTestServer() {
    this.service.getBaseLineLiveServer().subscribe(data => {
      this.liveServerList = data;
      if (this.liveServerList.length == 0) {

      } else {
      }


    }, error => {

    })
  }
}


