const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 12);
    setTimeout(
                   () => number > 4
                                   ? resolve(number)
                                   : reject(new Error('Menor a 4')),
                   2000
    );
});

promise
    .then(number => console.log(number))
    .catch(error => console.error(error));


new Promise ((resolver, rechazar) => {
        console.log('Hola');
    
        resolver();
    })
    .then(() => {
        throw new Error('¿cómo estás?');
    
        console.log('Bien');
    })
    .catch(() => {
        console.log('¿qué haces aquí?');
    })
    .finally(() => {
        console.log('Te daré instrucciones para aprender promesas');
    });

    fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));