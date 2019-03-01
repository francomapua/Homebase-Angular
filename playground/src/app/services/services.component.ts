import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements OnInit {
  constructor(private data : DataService) {
    // Use data to reference
  }

  ngOnInit() {}

  serviceCall() {
    this.data.secondClick();
  }
}
