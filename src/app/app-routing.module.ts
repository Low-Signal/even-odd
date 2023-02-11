import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDemoComponent } from './game-demo/game-demo.component';
import { OverviewComponent } from './overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '',  component: OverviewComponent, pathMatch: 'full'},
    {path: 'demo', component: GameDemoComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
