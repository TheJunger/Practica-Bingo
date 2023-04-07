# Practica de bingo simple con HTML CSS y JS


Lo primero que se hace es declarar variables que apuntan a diferentes elementos HTML dentro de la página del juego. 

Estos elementos incluyen los contenedores para los números del jugador y de la CPU, el botón central del juego, los contenedores para los jugadores y el tablero de juego.

Después, se declaran tres arrays vacíos: **numerosplayer, numeroscpu y numerosball.** Estos arrays se utilizan para almacenar los números que el jugador, la CPU y el juego en general, utilizan durante el juego.

A continuación, se definen dos funciones: **numeroRandom y numerosBall.** 

La **primera** función genera un número aleatorio entre 1 y 90. 

La **segunda** función utiliza la función **numeroRandom** para generar 90 números aleatorios únicos y los almacena en el array numerosball. Si se genera un número que ya existe en el array **numerosball**, la función genera otro número.

Luego, se define la función **createNumbersCarton**, que se utiliza para crear los cartones de números del jugador y de la CPU. 

La función genera 15 números únicos para cada cartón, utilizando la función numeroRandom. 

Si se genera un número que ya está en el array, la función genera otro número. 

Luego, crea un elemento p para cada número y lo agrega al contenedor correspondiente. El número también se almacena en el array correspondiente.

A continuación, se define la función **numerosTablero.** Esta función se utiliza para mostrar los números que han salido en el juego en el tablero. 

La función crea un elemento p y lo agrega al contenedor correspondiente en el tablero. 

La función también llama a la función **comprobacion**, que se encarga de verificar si el número que ha salido en el juego aparece en el cartón del jugador o de la CPU.

Luego, se define la función **checkwinner**, que se utiliza para verificar si el jugador o la CPU han ganado el juego. 

Si el jugador o la CPU han encontrado todos los números en su cartón, la función **detiene** el juego y muestra un mensaje en el botón central. 

Si nadie ha ganado todavía, la función llama a la función **numerosTablero** para mostrar el siguiente número en el tablero.

La función **comprobacion** se utiliza para verificar si el número que ha salido en el juego aparece en el cartón del jugador o de la CPU. 

Si el número aparece en el cartón, la función cambia el color de fondo del número en el cartón correspondiente y en el tablero. 

El número también se reemplaza en el array correspondiente por la cadena de texto "Número encontrado". 

Además, la función aumenta el contador correspondiente (pw [ Player wins ] para el jugador y cw para la CPU [ CPU wins ]) **para llevar un registro del progreso de cada jugador.**

Por último, se define un evento de clic para el botón central del juego. Si el botón dice **"Empezar partida"**, el evento llama a la función **createNumbersCarton** para generar los cartones del jugador y de la CPU y llama a la función numerosBall para generar los números aleatorios del juego.