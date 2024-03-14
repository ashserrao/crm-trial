import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProjectScreenComponent } from './components/project-screen/project-screen.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'user-list',
        component: UserListComponent,
      },
    ],
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [{ path: 'project-screen', component: ProjectScreenComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
