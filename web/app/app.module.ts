import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppComponent} from './main/component/app-component';
import {routes} from './app.routes';
import {MainWebsiteComponent} from './main/component/main-website-component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [

    ],
    declarations: [
        AppComponent,
        MainWebsiteComponent,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class BaseAppModule
{

}
