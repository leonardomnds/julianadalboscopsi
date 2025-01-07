import { Component, inject, OnInit } from '@angular/core';
import { environment } from "@env";
import { WINDOW } from "@shared/injection-tokens";

@Component({
  standalone: true,
  selector: 'app-home',
  template: '',
})
export class HomeComponent implements OnInit {

  private window = inject(WINDOW);

  ngOnInit() {
    this.window.location.href = environment.siteUrl;
  }

}
