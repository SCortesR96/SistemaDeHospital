import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  title: string;

  constructor(
    private router: Router,
    private titlePage: Title,
    private meta: Meta
  ) {

    this.getDataRoute().subscribe( data => {
      console.log(data);
      this.title = data.title;
      this.titlePage.setTitle( this.title );

      const metaTag: MetaDefinition = {
        name: 'Description',
        content: this.title
      };

      this.meta.updateTag( metaTag );

    });
  }

  ngOnInit(): void {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.routeConfig.path !== '' ),
      map( (event: ActivationEnd) => event.snapshot.data )
    );
  }

}
