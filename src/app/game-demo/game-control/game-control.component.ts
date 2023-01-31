import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {

  @Output('gameStarted') gameCreated = new EventEmitter <any> ();
  @Output('gameStopped') gameEnded = new EventEmitter <any> ();
  incrementNumber: number = 0;
  interval;

  // Checks inputs and starts the count
  startGame(startNum: number, endNum: number) {
    // Checks for valid inputs
    if(!startNum || !endNum || startNum >= endNum) {
      console.log("error");
    }
    else {
      this.incrementNumber = startNum;
      this.interval = setInterval(() => {
        this.playGame(endNum);
        }, 1000);
    }
  }

  // Loops through each number until the end number is reached
  playGame(endNum: number) {
    if(this.incrementNumber <= endNum) {
      this.gameCreated.emit(this.incrementNumber++)
    }
    else {
      this.stopGame();
    }
  }

  // Stops the count
  stopGame() {
    clearInterval(this.interval);
    this.incrementNumber = 0;
    this.gameEnded.emit(this.incrementNumber);
  }
}
