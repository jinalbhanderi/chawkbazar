import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
})
export class TermsComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  activeSection: string = '';

  // Scroll to a section smoothly
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId; // Set active section on click
    }
  }

  // Update 'active' class based on scroll position
  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('div[id]');
    const scrollPosition =
      window.pageYOffset +
      (this.scrollContainer?.nativeElement?.offsetTop || 0);

    sections.forEach((section: any) => {
      const offsetTop = section.offsetTop - 100;
      const offsetBottom = offsetTop + section.clientHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        this.activeSection = section.id;
      }
    });
  }
}
