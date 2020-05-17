import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  onEventEmitted(count: any) {
    console.log("event received: " + count);
    if (count % 2 === 0) {
      this.evenNumbers.push(count);
      console.log(this.evenNumbers);
    } else {
      this.oddNumbers.push(count);
      console.log(this.oddNumbers);
    }
  }
}
