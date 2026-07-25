import { __decorate } from "tslib";
import { Component, HostListener, ViewChild, ViewChildren, signal, } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
let Navbar = class Navbar {
    menuOpen = signal(false);
    navigationItems = [
        { label: 'Inicio', path: '/', exact: true },
        { label: 'Contacto', path: '/contacto', exact: false },
        {
            label: 'Iniciar sesión',
            path: '/login',
            exact: false,
            emphasis: true,
        },
    ];
    menuToggle;
    mobileMenuLinks;
    toggleMenu() {
        const shouldOpen = !this.menuOpen();
        this.menuOpen.set(shouldOpen);
        if (shouldOpen) {
            window.setTimeout(() => this.mobileMenuLinks?.first?.nativeElement.focus());
        }
    }
    closeMenu(restoreFocus = false) {
        if (!this.menuOpen()) {
            return;
        }
        this.menuOpen.set(false);
        if (restoreFocus) {
            window.setTimeout(() => this.menuToggle?.nativeElement.focus());
        }
    }
    handleEscape() {
        this.closeMenu(true);
    }
    handleResize(event) {
        const viewport = event.target;
        if (viewport.innerWidth >= 1200) {
            this.closeMenu();
        }
    }
};
__decorate([
    ViewChild('menuToggle')
], Navbar.prototype, "menuToggle", void 0);
__decorate([
    ViewChildren('mobileMenuLink')
], Navbar.prototype, "mobileMenuLinks", void 0);
__decorate([
    HostListener('document:keydown.escape')
], Navbar.prototype, "handleEscape", null);
__decorate([
    HostListener('window:resize', ['$event'])
], Navbar.prototype, "handleResize", null);
Navbar = __decorate([
    Component({
        selector: 'app-navbar',
        imports: [RouterLink, RouterLinkActive],
        templateUrl: './navbar.html',
        styleUrl: './navbar.css',
    })
], Navbar);
export { Navbar };
