import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MiniforfaitComponent } from './miniforfait/miniforfait.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { VoyagesService } from './voyages.service';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AdministrationComponent } from './administration/administration.component';
import { MatTableModule } from '@angular/material/table';
import { AproposComponent } from './apropos/apropos.component';
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MexiqueComponent } from './mexique/mexique.component';
import { FooterComponent } from './footer/footer.component';
import { CostaricaComponent } from './costarica/costarica.component';
import { GraphsComponent } from './graphs/graphs.component';
import { ChartsModule } from 'ng2-charts';
import { TablevoyagesComponent } from './tablevoyages/tablevoyages.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    FormulaireComponent,
    MiniforfaitComponent,
    ForfaitComponent,
    EtoilesComponent,
    AdministrationComponent,
    AproposComponent,
    AccueilComponent,
    MexiqueComponent,
    FooterComponent,
    CostaricaComponent,
    GraphsComponent,
    TablevoyagesComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatDatepickerModule,
    FormsModule, 
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatDatepickerModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: "accueil",  component: SidenavComponent},
      { path: "apropos",  component: AproposComponent},
      { path: "administration",  component: AdministrationComponent},
      { path: "mexique",  component: MexiqueComponent},
      { path: "costarica",  component: CostaricaComponent},
  ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [VoyagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
