import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsLatterComponent } from './news-latter/news-latter.component';



@NgModule({
  declarations: [NewsLatterComponent],
  imports: [CommonModule],
  exports: [NewsLatterComponent],
})
export class SharedModule {}
