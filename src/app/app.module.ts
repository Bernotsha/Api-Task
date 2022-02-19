import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AllPostcomponent } from './allposters/allposters.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentUserPostcomponent } from './currentuserpost/currentuserpost.component';
import { Homecomponent } from './homescreen/home.component';
import { LoginComponent } from './loginscreen/login.component';
import { Postcomponent } from './postscreen/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Homecomponent,
    Postcomponent,
    CurrentUserPostcomponent,
    AllPostcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
