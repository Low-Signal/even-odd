import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameDemoComponent } from './game-demo/game-demo.component';
import { GameControlComponent } from './game-demo/game-control/game-control.component';
import { EvenComponent } from './game-demo/even/even.component';
import { OddComponent } from './game-demo/odd/odd.component';
import { OverviewComponent } from './overview/overview.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    HeaderComponent,
    GameDemoComponent,
    OverviewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
