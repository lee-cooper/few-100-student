import { Component } from '@angular/core';

/*
  Components

  Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.

  Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.

  A component must belong to an NgModule in order for it to be available to another component or application. To make it a member of an NgModule, list it in the declarations field of the NgModule metadata.

  Note that, in addition to these options for configuring a directive, you can control a component's runtime behavior by implementing life-cycle hooks. For more information, see the Lifecycle Hooks guide.

  See Components - https://angular.io/api/core/Component#description

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
