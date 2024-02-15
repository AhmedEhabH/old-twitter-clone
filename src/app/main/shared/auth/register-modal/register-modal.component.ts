import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css'
})
export class RegisterModalComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, public modalService: ModalService) { }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
    });
  }

  getInputClasses(fieldName: string) {
    return {
      'w-full': true,
      'p-4': true,
      'text-lg': true,
      'bg-black': true,
      'border-2': true,
      'border-neutral-800': true,
      'rounded-md': true,
      'outline-none': true,
      'text-white': true,
      'focus:border-sky-500': true,
      'focus:border-red-500': this.registerForm.get(fieldName)?.invalid && this.registerForm.get(fieldName)?.touched,
      'focus:border-2': true,
      'transition': true,
      'disabled:bg-neutral-900': true,
      'disabled:opacity-70': true,
      'disabled:cursor-not-allowed': true
    }
  }

  login(): void {
    this.modalService.isLoginModalOpen.set(true);
    this.modalService.isRegisterModalOpen.set(false);
  }

  handleSubmit(): void {
    const value = this.registerForm.value;
    // this.authService.login(value.email, value.password).then(() => this.modalService.isLoginModelOpen.set(false))
  }
}
