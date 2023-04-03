import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootLayoutComponent } from './root-layout/root-layout.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/shared/shared.module';
import { ItemsComponent } from './items/items.component';
import { ActionsComponent } from './actions/actions.component';
import { BoardComponent } from './components/board/board.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RootLayoutComponent,
    MeetingsComponent,
    HomeComponent,
    CardComponent,
    ItemsComponent,
    ActionsComponent,
    BoardComponent,
    DialogComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
