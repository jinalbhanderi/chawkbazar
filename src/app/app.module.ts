import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShposComponent } from './pages/shpos/shpos.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DemosModule } from "./pages/demos/demos.module";
import { HttpClientModule } from '@angular/common/http';
// import { NewsLatterComponent } from './pages/news-latter/news-latter.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ShposComponent,
    CollectionsComponent,
    CategoriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DemosModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
