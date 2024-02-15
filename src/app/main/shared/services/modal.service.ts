import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  isOpen = signal<boolean>(false);
  isClose = signal<boolean>(false);

  isRegisterModalOpen = signal<boolean>(false);
  isLoginModalOpen = signal<boolean>(false);
  

}
