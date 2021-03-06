import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.returnObservable().subscribe(
      numero => console.log('Subs: ', numero),
      error => console.log('Error en el obs, ', error),
      () => console.log('El Observador terminó!')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Cambio de página');
  }

  returnObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {

      let counter = 0;

      const interval = setInterval( () => {
        counter ++;

        const salida = {
          valor: counter
        };

        observer.next(salida);

        // if (counter === 3 ) {
        //   clearInterval(interval);
        //   observer.complete();
        // }

        // if (counter === 2 ) {
        //   clearInterval(interval);
        //   observer.error('Auxilio!');
        // }

      }, 1000 );
    }).pipe(
      map( resp => resp.valor ),
      filter( ( valor, index ) => {
        if ( (valor % 2 === 1) ){
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }

}
