import './vendor/polyfills';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from '../environments/environment';

if (environment.production) {
    enableProdMode();
}

import {BaseAppModule} from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(BaseAppModule);
