import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostcomponent } from './allposters/allposters.component';
import { CurrentUserPostcomponent } from './currentuserpost/currentuserpost.component';
import { Homecomponent } from './homescreen/home.component';
import { LoginComponent } from './loginscreen/login.component';
import { Postcomponent } from './postscreen/post.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'home', component:Homecomponent},
{ path: 'posts', component:Postcomponent,
  children: [
    { path: '', component: CurrentUserPostcomponent },
    { path: 'allpost', component: AllPostcomponent }
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
