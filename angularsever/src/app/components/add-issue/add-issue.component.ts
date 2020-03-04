import { Component, OnInit, NgZone} from '@angular/core';
import { BugService } from '../../shared/bug.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})


export class AddIssueComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}