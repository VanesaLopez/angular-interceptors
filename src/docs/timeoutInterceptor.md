# TimeoutInterceptor

##### Importamos

Añadidoms al [`app.modules`](./modules.md)

##### Uso

```javasccript
    this.http.get(URL, { headers: new HttpHeaders({ 'Content-Type': 'application/json', timeout: `${300000}` }), withCredentials: true });
```