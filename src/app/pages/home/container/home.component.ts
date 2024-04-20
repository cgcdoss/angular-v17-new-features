import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatListModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public usedFeatures = [
    {
      name: 'Material 3',
      link: 'https://blog.angular.io/material-3-experimental-support-in-angular-17-2-8e681dde650e',
    },
    {
      name: 'Signals',
      link: 'https://angular.io/guide/signals',
    },
    {
      name: 'Signal Inputs',
      link: 'https://blog.angular.io/signal-inputs-available-in-developer-preview-6a7ff1941823',
    },
    {
      name: 'Signal Output',
      link: 'https://blog.angular.io/meet-angulars-new-output-api-253a41ffa13c',
    },
    {
      name: 'Signal queries',
      link: 'https://angular.io/guide/signal-queries',
    },
    {
      name: 'Built-in control flow',
      link: 'https://angular.io/guide/control_flow',
    },
    {
      name: '@defer',
      link: 'https://blog.angular.io/use-angulars-new-deferrable-views-now-20ca9f64f1e5',
    },
    {
      name: 'Angular View Transitions API',
      link: 'https://blog.angular.io/check-out-angulars-support-for-the-view-transitions-api-3937376cfc19',
    },
  ];

}
