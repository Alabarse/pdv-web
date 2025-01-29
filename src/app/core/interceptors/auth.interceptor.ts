import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';
import { response } from '../../models/response';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap(event => {
      if(event instanceof HttpResponse && (event.body as response)?.message == 'Usuario autenticado, token gerado com sucesso!') {
        sessionStorage.setItem('authToken', (event.body as response).data);
      }
    })
  );
};
