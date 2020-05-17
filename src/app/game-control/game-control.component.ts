import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  timer;
  count = 0;

  @Output() event: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onStartClicked() {
    console.log("onStartClicked");
    this.timer = setInterval(() => {
      console.log("interval");
      this.event.emit(++this.count);
    }, 1000);
  }

  onStopClicked() {
    console.log("onStopClicked");
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
