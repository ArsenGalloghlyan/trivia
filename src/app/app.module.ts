import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterOutlet, AppRoutingModule, MatProgressSpinner],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync(), provideHttpClient()],
})
export class AppModule {}
