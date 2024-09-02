import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShposComponent } from './pages/shpos/shpos.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { CollectionComponent } from './pages/collection/collection.component';
// import { NewsLatterComponent } from './pages/news-latter/news-latter.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, ShposComponent, CollectionsComponent, CollectionComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
