# Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

# Milestone 1 e Milestone 2:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
- Dichiariamo una variabile images dove inizializzeremo l'array di immagini, che saranno degli oggetti, quindi ognuna di esse avrà delle proprietà al suo interno: image, title, text.
  - Console.log(images) per controllare.
- Cicliamo l'array images con FOR.
- Tramite template literal dichiariamo una variabile html.
- Recupero dal DOM il carosello.
- Concateniamo l'innerHTML del carosello ogni volta al valore della variabile html.
  - Facciamo un console.log(carouselElement) come controllo.
- Recuperiamo tutti i carousel__item dal DOM tramite query.selector.all.
  - Facciamo un console.log() come controllo.
- Recuperiamo dal DOM anche i due div con classe button__right e button__left, tramite query.selector.
  - Facciamo un console.log() come controllo.
- Dichiariamo ed inizializziamo la variabile currentIndex, che inizialmente appunto sarà 0.
- Dichiariamo una variabile activeItem = itemElements[currentIndex];
- Dichiariamo una variabile activeImgInfo = imgInfoElements[currentIndex];
- Ad entrambi le variabili poi aggiungiamo la classe active tramite la funzione classList.add.
- Facciamo un consol.log(activeItem, activeImgInfo) di controllo.
- Aggiungiamo un eventListener di tipo click al bottone di desta.
  - Richiamo activeItem e activeImgInfo e ad entrambe rimuovo la classe active con la funzione classList.remove.
    - SE (currentIndex === itemElements.length - 1) avrò un ritorno di currentIndex = 0;
    - ALTRIMENTI avrò currentIndex ++;
- A questo punto dopo il controllo dichiaro due nuove variabili dove memorizzerò la slide successiva e aggiungerò la classe active.
- Processo inverso per l'eventListener di tipo click al bottone di sinistra.