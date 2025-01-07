import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
})
export class HeaderComponent {

  private router = inject(Router);
  private document = inject(DOCUMENT);
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe((event: NavigationEnd) => {
        const isHome = event.urlAfterRedirects === '/' || event.urlAfterRedirects.startsWith('/#');

        const metaRobots = this.document.querySelector('meta[name="robots"]')!;
        metaRobots.setAttribute('content', isHome ? ROBOTS_WITHOUT_INDEX : ROBOTS_WITHOUT_INDEX);
      });
  }

}

// const ROBOTS_WITH_INDEX = 'index, follow, notranslate, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const ROBOTS_WITHOUT_INDEX = 'noindex, nofollow';
