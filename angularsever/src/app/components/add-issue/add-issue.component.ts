import { Component, OnInit, NgZone } from '@angular/core';
import { BugService } from '../../shared/bug.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})

export class AddIssueComponent implements OnInit {
  issueForm: FormGroup;
  IssueArr: any = [];

  ngOnInit() {
    this.addIssue()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public bugService: BugService
  ){ }

  addIssue() {
    this.issueForm = this.fb.group({
      issue_name: [''],
      issue_message: ['']
    })
  }

  submitForm() {
    console.log("Hello world")
    console.log(this.issueForm.value)
    this.bugService.CreateBug(this.issueForm.value).subscribe(res => {
      console.log('Issue added!')
      console.log(this.issueForm.value)
      this.ngZone.run(() => this.router.navigateByUrl('/issues-list'))
    });
  }

}