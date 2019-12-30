import {Injectable, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CostTableComponent} from './cost-table/cost-table.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
  {path: 'home',
  component: AboutComponent},
  {path: 'costs',
  component: CostTableComponent}
];

@Injectable()
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {

}
