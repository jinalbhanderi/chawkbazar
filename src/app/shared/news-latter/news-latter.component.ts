import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-latter',
  templateUrl: './news-latter.component.html',
  styleUrls: ['./news-latter.component.css'],
})
export class NewsLatterComponent {
  @Input() containerClass: string = '';
  @Input() backgroundImageUrl: string | null = null;
}
