import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface ContactForm {
  fname: string;
  lname: string;
  email: string;
  textarea: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: ContactForm = {
    fname: '',
    lname: '',
    email: '',
    textarea: ''
  };

  onSubmit(formDirective: NgForm) {
    // Odoslanie emailu cez EmailJS
    emailjs.send(
      'service_h7qvxjl',       // Tvoj service ID
      'template_b1wwf9g',      // Tvoj template ID
      {
        from_name: `${this.form.fname} ${this.form.lname}`,
        from_email: this.form.email,
        message: this.form.textarea
      },
      'TZCa9PONEY57GrIQT'      // Tvoj public key
    )
    .then(() => {
      console.log('Email sent!');
      alert('Email sent!');
      // Vyčistenie formulára po odoslaní
      this.form = { fname: '', lname: '', email: '', textarea: '' };
      formDirective.resetForm();
    })
    .catch((err) => {
      console.error('Error - email not sent:', err);
      alert('Email not sent. Try later again');
    });
  }
}
