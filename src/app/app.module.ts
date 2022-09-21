import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { AllBooksPageComponent } from './pages/all-books-page/all-books-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    AllBooksPageComponent,
    AddPageComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
