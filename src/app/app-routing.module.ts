import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDemoComponent } from './game-demo/game-demo.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
    {path: 'overview', component: OverviewComponent},
    {path: 'demo', component: GameDemoComponent},
    {path: '', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
