import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Enquiry } from "../interface_collection";
import { FormsModule } from "@angular/forms";
import { DatabaseService } from "./database.service";

@Component({
  selector: "app-contact-us",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact-us.component.html",
  styleUrl: "./contact-us.component.scss",
})
export class ContactUsComponent {
  enquiry: Enquiry = {} as Enquiry;
  email = "swayambhu@swayambhustrategies.com";
  showMessage = false;

  constructor(private firebaseService: DatabaseService) {}

  submitEnquiry() {
    this.showMessage = true;
    // Write data to Firebase Realtime Database
    let date = new Date();
    this.firebaseService.writeData(`enquiry/${this.enquiry.fullName}-${date}`, this.enquiry);
    this.enquiry = {} as Enquiry;
  }
}
