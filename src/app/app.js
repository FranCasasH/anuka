import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/navbar/navbar';
let App = class App {
    title = signal('anukapah');
};
App = __decorate([
    Component({
        selector: 'app-root',
        imports: [Navbar, RouterOutlet],
        templateUrl: './app.html',
        styleUrl: './app.css',
    })
], App);
export { App };
