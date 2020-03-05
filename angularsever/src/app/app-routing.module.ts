import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIssueComponent } from './components/add-issue/add-issue.component'
import { IssueListComponent } from './components/issue-list/issue-list.component'
import { EditIssueComponent } from './components/edit-issue/edit-issue.component'
const routes: Routes = [
  {
    path: 'home', 
    component: AddIssueComponent 
  },
  {
    path: 'issues-list', 
    component: IssueListComponent 
  },
  { 
    path: 'edit-issue/:id', 
    component: EditIssueComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
