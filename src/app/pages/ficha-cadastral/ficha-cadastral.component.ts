import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-ficha-cadastral',
  template: `
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc9x_gY5O61_09eSZadHF1pDZPWrKCibpA9GaCqH17GnV5-hg/viewform"></iframe>
  `,
  styles: `
    iframe {
      position: fixed;
      top: var(--header-height);
      left: 0;
      width: 100%;
      height: calc(100% - var(--header-height));
      border: none;
    }
  `,
})
export class FichaCadastralComponent {}
