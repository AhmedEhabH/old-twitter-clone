import { Component } from '@angular/core';

@Component({
  selector: 'sidebar-items',
  template: `
    <div class="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-opacity-10 hover:bg-blue-300 cursor-pointer transition">
      <img src="/assets/images/logo.svg" class="h-14 w-14" alt="Logo">
    </div>
  `,
  styles: ``
})
export class SidebarItemsComponent {

}
