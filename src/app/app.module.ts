import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MaterialModule } from './material/material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskDialogComponent } from './todo-list/task-dialog/task-dialog.component';
import { TaskComponent } from './todo-list/task/task.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './dashboard/weather/weather.component';
import { NewsComponent } from './dashboard/news/news.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ToolbarComponent,
    DashboardComponent,
    TaskDialogComponent,
    TaskComponent,
    WeatherComponent,
    NewsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
