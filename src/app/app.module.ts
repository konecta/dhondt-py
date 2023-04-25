import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxUiLoaderConfig, NgxUiLoaderModule} from "ngx-ui-loader";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "red",
  "bgsOpacity": 0.1,
  "bgsPosition": "bottom-right",
  "bgsSize": 20,
  "bgsType": "ball-spin-clockwise",
  "blur": 8,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#2e547b",
  "fgsPosition": "center-center",
  "fgsSize": 30,
  "fgsType": "circle",
  "gap": 10,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(255,255,255,0.8)",
  "pbColor": "#2e547b",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgSelectModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
