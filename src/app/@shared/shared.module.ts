import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const modules: any = [CommonModule];
const components: any = [];

@NgModule({
    declarations: [...components],
    imports: [...modules],
    exports: [...modules, ...components],
})
export class SharedModule {
    constructor() {}

    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [],
        };
    }
}
