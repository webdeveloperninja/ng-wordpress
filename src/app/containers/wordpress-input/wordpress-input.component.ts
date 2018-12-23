import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wp-wordpress-input',
  templateUrl: './wordpress-input.component.html'
})
export class WordpressInputComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.form = this._formBuilder.group({
      wordpressUrl: ['', Validators.required]
    });
  }

  ngOnInit() {}
}
