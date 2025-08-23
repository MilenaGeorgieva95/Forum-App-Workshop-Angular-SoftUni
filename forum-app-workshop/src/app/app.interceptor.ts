import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GlobalErrorService } from './core/global-error/global-error.service';
import { Router } from '@angular/router';

const { apiUrl } = environment;

@Injectable()
class AppInterceptor implements HttpInterceptor {
  constructor(private globalErrorService: GlobalErrorService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', apiUrl),
        withCredentials: true,
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/auth/login'])
        } else {
          this.globalErrorService.setError(err);
          this.router.navigate(['/error'])
        }
        return [err];
      })
    );
  }
}

export const appInterceptorPtovider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
