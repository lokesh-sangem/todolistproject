import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAnimationComponent } from './todo-animation/todo-animation.component';
import { FormsModule } from '@angular/forms';
import { PracticetodoComponent } from './practicetodo/practicetodo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAnimationComponent,
    PracticetodoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
