import { Observable, fromEvent, of, from} from 'rxjs';


const observable = new Observable(subscriber => {
    subscriber.next('hi');
    subscriber.next('how are you');
    subscriber.complete()
})

observable.subscribe(
    
    value => console.log(value),
    null,
    () => console.log('complete')
    
);

// CREATION OPERATORS

    //  fromEvent = create an obs from a dom event

    const source$ = fromEvent(document.getElementById('div'), 'click');
    source$.subscribe(data=>console.log('a click'))

    // of = receive a collection of data and executes a loop to show all

    let array = [{nome:'joao',idade:23},{nome:'jonas',idade:13},{nome:'juca',idade:32}]
    const sourceOf$ = of(array)
    sourceOf$.subscribe(data => console.log(data))

    // from = emit cada valor de um iterator

    const sourceFrom$ = from([1,2,3,4,5])
    sourceFrom$.subscribe(data=>console.log(data))