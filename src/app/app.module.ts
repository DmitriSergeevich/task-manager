import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './pages/todo/todo.module';
import { MainComponent } from './pages/main/main.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
@NgModule({
  declarations: [AppComponent, MainComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
