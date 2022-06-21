import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { InputComponent } from './input/input.component';
import { DrawableDirective } from './_core/directives/drawable.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    InputComponent,
    DrawableDirective,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
