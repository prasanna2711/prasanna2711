import { Component, OnInit } from '@angular/core';
import { ServerStatusService } from 'app/server-status.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css']
})
export class ServerStatusComponent implements OnInit {
  ServerStatusForm: FormGroup
  server: any;
  status: any;
  serverStatusList: any;
  constructor(public formbuilder: FormBuilder, public router: Router, public service: ServerStatusService) { }

  ngOnInit() {
    this.ServerStatusForm = this.formbuilder.group({
      server: ['', Validators.required],
      status: ['', Validators.required],
    })
    this.getServerStatus()
  }
  getServerStatus() {
    this.service.getServerStatus().subscribe(data => {
      this.serverStatusList = data;
      if (this.serverStatusList.length == 0) {

      } else {
      }


    }, error => {

    })
  }
}

