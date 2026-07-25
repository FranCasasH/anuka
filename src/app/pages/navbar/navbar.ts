import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavigationItem {
  readonly label: string;
  readonly path: string;
  readonly exact: boolean;
  readonly icon?: 'panel';
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly menuOpen = signal(false);

  protected readonly navigationItems: readonly NavigationItem[] = [
    { label: 'Inicio', path: '/', exact: true },
    { label: 'Contacto', path: '/contacto', exact: false },
    { label: 'Panel', path: '/login', exact: false, icon: 'panel' },
  ];

  @ViewChild('menuToggle')
  private menuToggle?: ElementRef<HTMLButtonElement>;

  @ViewChildren('mobileMenuLink')
  private mobileMenuLinks?: QueryList<ElementRef<HTMLAnchorElement>>;

  protected toggleMenu(): void {
    const shouldOpen = !this.menuOpen();
    this.menuOpen.set(shouldOpen);

    if (shouldOpen) {
      window.setTimeout(() => this.mobileMenuLinks?.first?.nativeElement.focus());
    }
  }

  protected closeMenu(restoreFocus = false): void {
    if (!this.menuOpen()) {
      return;
    }

    this.menuOpen.set(false);

    if (restoreFocus) {
      window.setTimeout(() => this.menuToggle?.nativeElement.focus());
    }
  }

  @HostListener('document:keydown.escape')
  protected handleEscape(): void {
    this.closeMenu(true);
  }

  @HostListener('window:resize', ['$event'])
  protected handleResize(event: Event): void {
    const viewport = event.target as Window;

    if (viewport.innerWidth >= 1100) {
      this.closeMenu();
    }
  }
}
