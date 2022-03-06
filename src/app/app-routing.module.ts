import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

// Routes are defined here. Based on the path the user navigates to,
// the related component will display on-screen where the <router-outlet> is placed.
// See Defining a Basic Route - https://angular.io/api/router/RouterOutlet#description
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pokemon',
    component: PokemonComponent,
  },
  {
    path: 'experiment',
    component: ExperimentComponent,
  },
  {
    // Wildcard routes, indicated by "**" gracefully handle situations where
    // users attempt to navigate to a part of an application that does not
    // exist.
    // This can be used to redirect to a known component (home in our example)
    // a 404 page / component (which is common), or anyplace else that is appropriate
    // - See Setting Up Wilcard Routes - https://angular.io/api/router/RouterOutlet#description
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
