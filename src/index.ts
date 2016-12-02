import { NgModule } from '@angular/core';

import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';

import { HighchartsService } from './HighchartsService';

const CHART_DIRECTIVES: any[] = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent
];

@NgModule({
  providers: [HighchartsService],
  declarations: [CHART_DIRECTIVES],
  exports: [CHART_DIRECTIVES]
})
export class ChartModule { };

export {
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent
};
