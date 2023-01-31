import { Component } from '@angular/core';

@Component({
  selector: 'app-game-demo',
  templateUrl: './game-demo.component.html',
  styleUrls: ['./game-demo.component.scss']
})
export class GameDemoComponent {
  public curInterval: number = 0;

  onGameStarted(currentInterval: number) {
    this.curInterval = currentInterval;
  }

  onGameStopped(currentInterval: number) {
    this.curInterval = currentInterval;
  }
}
