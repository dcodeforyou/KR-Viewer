import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KrViewPageComponent } from './containers/kr-view-page/kr-view-page.component';
import { StateFilterComponent } from './containers/state-filter/state-filter.component';
import { FilterComponent } from './containers/filter/filter.component';
import { KrListComponent } from './containers/kr-list/kr-list.component';
import { KrDetailComponent } from './components/kr-detail/kr-detail.component';
import { StoreModule } from '@ngrx/store';
import * as fromKR from './state/kr.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { KREffects } from './state/kr.effects';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { KrCardComponent } from './components/kr-card/kr-card.component';
import { CommonModule } from '@angular/common';
import { LinkedCardComponent } from './components/linked-card/linked-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { DatePipe } from './pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KrViewPageComponent,
    StateFilterComponent,
    FilterComponent,
    KrListComponent,
    KrDetailComponent,
    KrCardComponent,
    LinkedCardComponent,
    MarkdownPipe,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({krs: fromKR.reducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 15,
      logOnly: environment.production,
      autoPause: true
    }),
    EffectsModule.forRoot([KREffects]),
    NgSelectModule,
    FormsModule,
    MatButtonToggleModule,
    NoopAnimationsModule,
    CommonModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
