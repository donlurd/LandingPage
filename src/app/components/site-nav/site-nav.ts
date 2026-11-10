import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-site-nav',
  imports: [],
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.scss',
  host: {
    '(window:scroll)': 'updateCompactMode()', '(document:keydown.escape)': 'closeMenu()',
  },
})
export class SiteNav {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly isMenuOpen = signal(false);
  protected readonly isCompact = signal(false);
  protected readonly activeSection = signal('developer');

  

  constructor() {
    afterNextRender(() => this.observeSections());
  }
  
  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected updateCompactMode(): void {
    this.isCompact.set(window.scrollY > 24);
  }

  private observeSections(): void {
    const sections = document.querySelectorAll<HTMLElement>('main section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (activeEntry) {
          this.activeSection.set(activeEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}

