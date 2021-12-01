import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    mail: [''],
    message: [''],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.contactForm.get('aliases') as FormArray;
  }


  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

  }


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

  test() {
    console.log(this.contactForm.value['name']);

  }
}
