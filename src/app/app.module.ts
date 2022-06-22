import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@core/core.module';

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<b>App root</b>',
})
class AppComponent {}

@NgModule({
    declarations: [],
    imports: [BrowserModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
