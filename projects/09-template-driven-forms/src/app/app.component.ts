import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  standalone: true,
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->
         <input type="text" id="title" name="title" [(ngModel)]="title"/>

        <label for="body">Post Body</label>
        <!-- add the textarea -->
        <textarea id="body" name="body" [(ngModel)]="body"></textarea>
      </section>
      <section>
        <p>{{ title }}</p>
        <p>{{ body }}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '';
  body = '';
}
