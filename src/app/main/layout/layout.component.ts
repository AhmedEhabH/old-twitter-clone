import { Component } from '@angular/core';
import { ModalService } from '../shared/services/modal.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(public modalService: ModalService) { }
}
 