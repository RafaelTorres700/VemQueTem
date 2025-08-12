import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
<<<<<<< HEAD
import { provideHttpClient, withFetch } from '@angular/common/http';
=======
>>>>>>> d3d215014e0210a7f93e5436da8a567faa7c8af1

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
<<<<<<< HEAD
    provideClientHydration(withEventReplay()),
    provideHttpClient( withFetch()),
=======
    provideClientHydration(withEventReplay())
>>>>>>> d3d215014e0210a7f93e5436da8a567faa7c8af1
  ]
};
