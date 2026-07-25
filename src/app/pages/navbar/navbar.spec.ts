import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Navbar } from './navbar';

describe('Navbar', () => {
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the navigation defined by the design', () => {
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('.desktop-navigation__links a'),
    ) as HTMLAnchorElement[];

    expect(links.map((link) => link.textContent?.trim())).toEqual(['Inicio', 'Contacto', 'Panel']);
    expect(fixture.nativeElement.querySelector('.write-button')?.textContent?.trim()).toBe(
      'Escribime',
    );
  });

  it('should expose and close the mobile menu accessibly', () => {
    const toggle = fixture.nativeElement.querySelector('.menu-toggle') as HTMLButtonElement;
    const menu = fixture.nativeElement.querySelector('#mobile-navigation') as HTMLElement;

    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(menu.getAttribute('aria-hidden')).toBe('true');

    toggle.click();
    fixture.detectChanges();

    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(menu.getAttribute('aria-hidden')).toBe('false');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(menu.getAttribute('aria-hidden')).toBe('true');
  });
});
