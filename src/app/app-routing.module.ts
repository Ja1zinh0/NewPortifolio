import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaismixComponent } from './view/maismix/maismix.component';
import { MainComponent } from './view/main/main.component';

const routes: Routes = [
  { path: 'maismix', component: MaismixComponent },
  { path: 'main', component: MainComponent },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
