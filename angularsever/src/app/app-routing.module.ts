import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIssueComponent } from './components/add-issue/add-issue.component'
import { IssueListComponent } from './components/issue-list/issue-list.component'

const routes: Routes = [
  {
    path: 'home', 
    component: AddIssueComponent 
  },
  {
    path: 'issues-list', 
    component: IssueListComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
