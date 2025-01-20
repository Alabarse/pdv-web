import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {

  formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initFormLogin();
  }

  initFormLogin() {
    this.formLogin = this.formBuilder.group({
      usuario: [''],
      senha: ['']
    });
  }

  auth() {
    if (this.formLogin.valid) {
      this.authService.autenticaUsuario(this.formLogin.value).subscribe({
        next: (ret: any) => {
          console.log(ret);
        },
        error: (erro: any) => {
          console.error(erro);
        }
      });
    }
  }
}
