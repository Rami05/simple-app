import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b>Rami Benslimen</b> 
    </span>
    <div class="socials">
      <a href="https://github.com/Rami05" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/rami-ben-s/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
