import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null,
  };
  userSettings: UserSettings = { ...this.originalUserSettings };
  singleModel: string = "On";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(`submitting form, valid: ${form.valid}`);
    this.dataService.postUserSettingsForm(this.userSettings)
      .subscribe(
        result => console.log('success: ', result),
        error => console.log('error: ', error),
      );
  }
}
