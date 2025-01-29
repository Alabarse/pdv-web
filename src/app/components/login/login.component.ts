import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
    private authService: AuthService,
    private router: Router
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
          this.router.navigate(['/home']);
        },
        error: (erro: any) => {
          console.error(erro);
        }
      });
    }
  }
}
