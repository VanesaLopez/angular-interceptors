# Modules

Se añade el interceptor en la lista de providers

```typescript

import { TimeoutInterceptor } from 'angular-interceptors';

@NgModule({
    providers: [
        ...,
        [{ provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }]
    ],
})
```