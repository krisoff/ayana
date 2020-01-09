import {Injectable, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CostTableComponent} from './cost-table/cost-table.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BookComponent} from './book/book.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: AboutComponent
  },
  {
    path: 'costs',
    component: CostTableComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'booking',
    component: BookComponent
  }
];

@Injectable()
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {

}
