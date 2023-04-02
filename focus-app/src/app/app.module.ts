import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootLayoutComponent } from './root-layout/root-layout.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/shared/shared.module';
import { ItemsComponent } from './items/items.component';
import { ActionsComponent } from './actions/actions.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    RootLayoutComponent,
    MeetingsComponent,
    HomeComponent,
    CardComponent,
    ItemsComponent,
    ActionsComponent,
    BoardComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
