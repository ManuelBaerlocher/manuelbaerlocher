import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent {

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ], []),
    mail: new FormControl('', [
      Validators.required,
      Validators.email
    ], []),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ], []),
  });

  constructor() { }

  async sendMail() {
    let formData = new FormData();
    formData.append('name', this.contactForm.value['name'])
    formData.append('mail', this.contactForm.value['mail'])
    formData.append('message', this.contactForm.value['message'])
    await fetch("http://manuel-baerlocher.developerakademie.com/Kontaktformular/send_mail.php", {
      method: "POST",
      body: formData
    });

    /*changeHTML();*/
  }
}
