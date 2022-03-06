import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonDetailComponent } from './components/pokemon/components/pokemon-detail/pokemon-detail.component';
import { PokemonHeaderComponent } from './components/pokemon/components/pokemon-header/pokemon-header.component';
import { PokemonListComponent } from './components/pokemon/components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonService } from './components/pokemon/services/pokemon.service';
import { PokemonTeamComponent } from './components/pokemon/components/pokemon-team/pokemon-team.component';
import { PokemonTeamMemberComponent } from './components/pokemon/components/pokemon-team-member/pokemon-team-member.component';

/*
  An NgModule is defined by a class decorated with @NgModule(). The @NgModule() decorator is a function that takes a single metadata object, whose properties describe the module. The most important properties are as follows.

    declarations: The components, directives, and pipes that belong to this NgModule.

    exports: The subset of declarations that should be visible and usable in the component templates of other NgModules.

    imports: Other modules whose exported classes are needed by component templates declared in this NgModule.

    providers: Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the application. (You can also specify providers at the component level.)

    bootstrap: The main application view, called the root component, which hosts all other application views. Only the root NgModule should set the bootstrap property.

    See NgModules - https://angular.io/guide/architecture-modules
*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemonComponent,
    ExperimentComponent,
    PokemonHeaderComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    FooterComponent,
    PokemonTeamComponent,
    PokemonTeamMemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
