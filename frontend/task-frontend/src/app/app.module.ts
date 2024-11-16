import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component'; 
import { TaskService } from './task.service'; 

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
