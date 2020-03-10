import { NgModule } from '@angular/core';
import { Page1Component } from './pages';
import { FeatureRoutingModule } from './feature-routing.module';

import { MyPipe } from '@shared/pipes/mypipe.pipe';

@NgModule({
    declarations: [
        Page1Component
    ],
    imports: [
      FeatureRoutingModule,
      MyPipe
    ],
    providers: [],
})
export class FeatureModule { }