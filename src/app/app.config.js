import { provideHttpClient } from '@angular/common/http';
import { provideBrowserGlobalErrorListeners, } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
export const appConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideClientHydration(),
        provideHttpClient(),
    ],
};
