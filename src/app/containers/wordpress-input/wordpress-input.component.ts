import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'wp-wordpress-input',
  templateUrl: './wordpress-input.component.html'
})
export class WordpressInputComponent {
  form: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _wordpressService: WordpressService) {
    this.createForm();
  }

  private createForm(): void {
    this.form = this._formBuilder.group({
      wordpressUrl: ['', Validators.required]
    });
  }

  submit(): void {
    const url = this.form.value.wordpressUrl;

    this._wordpressService.updateSite(url);
  }
}
