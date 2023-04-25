import {Injectable} from '@angular/core';
import {catchError, EMPTY, finalize, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient, private ngxService: NgxUiLoaderService) {
  }

  blockUI() {
    this.ngxService.start();
  }

  unblockUI() {
    this.ngxService.stop();
  }

  executeGet(params: any): Observable<any> {
    this.blockUI();
    return this.http.get('/publicacion/dinamics/divulgacion.ajax.php', {params: params}).pipe(
      catchError((e) => {
        console.log(e);
        return EMPTY;
      }),
      finalize(() => {
        this.unblockUI();
      })
    );
  }

}
