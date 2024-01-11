import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

const appRoutes: Routes = [
  { path: 'daynamic-table', component: DynamicTableComponent },
];

export default appRoutes;

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [],
})
export class AppRoutingModule {}
