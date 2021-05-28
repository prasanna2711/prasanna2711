import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { TestServerService } from 'app/test-server.service';
@Component({
  selector: 'app-live-server',
  templateUrl: './live-server.component.html',
  styleUrls: ['./live-server.component.css']
})
export class LiveServerComponent implements OnInit {
  liveServerList:any;
  LiveServerForm: FormGroup
  server: any;
  status: any;
  constructor(public formbuilder: FormBuilder, public router: Router, public service: TestServerService) { }

  ngOnInit() {
    this.LiveServerForm = this.formbuilder.group({
     
    })
    this.getTestServer()
  }
  getTestServer() {
    this.service.getLiveServer().subscribe(data => {
      this.liveServerList = data;
      if (this.liveServerList.length == 0) {

      } else {
      }


    }, error => {

    })
  }
}
