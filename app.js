/* La Serie de Fibonacci es una secuencia numérica donde cada número es la suma de los dos anteriores. La secuencia comienza así:
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
Ejemplos:
•	Fibonacci(0) = 0
•	Fibonacci(1) = 1
•	Fibonacci(2) = 1 (0 + 1)
•	Fibonacci(3) = 2 (1 + 1)
•	Fibonacci(4) = 3 (1 + 2)
 */
function fibonacci(n) {
  /*Si n es menor o igual a 1, la función simplemente devuelve n.
Esto funciona porque en la secuencia de Fibonacci: Fibonacci(0) es 0, Fibonacci(1) es 1, Fibonacci(2) es 1, y así sucesivamente.
Entonces, si n es 0 o 1, la función no necesita hacer más cálculos, simplemente devuelve el valor de n. */
  if (n <= 1) return n;

  /*Si n es mayor que 1, la función llama a sí misma dos veces: una con n - 2 y otra con n - 1. Esto sigue la definición de Fibonacci, donde:
Fibonacci(n) = Fibonacci(n - 1) + Fibonacci(n - 2)
La función suma los resultados de estos dos llamados recursivos. */
  return fibonacci(n - 2) + fibonacci(n - 1);
}
console.log(fibonacci(3));

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------
¿Qué es el Factorial?
El factorial de un número es el producto de todos los números enteros positivos desde 1 hasta ese número.
Ejemplos:
•	Factorial(3) = 3 × 2 × 1 = 6
•	Factorial(5) = 5 × 4 × 3 × 2 × 1 = 120
*/

function factorial(n) {
  /*Si n es menor o igual a 1, la función devuelve 1. Esto se debe a que:
0! (factorial de 0) es 1 (por definición).
1! (factorial de 1) también es 1.
Entonces, cuando n es 0 o 1, no es necesario hacer más cálculos, simplemente devolvemos 1 */

  if (n <= 1) return 1;
  /*Si n es mayor que 1, la función llama a sí misma con n - 1 y multiplica el resultado por n.
Esto sigue la fórmula del factorial:
n! = n × (n - 1)!
La función multiplica n por el resultado de factorial(n - 1) hasta que llega al caso base (cuando n <= 1) */

  return n * factorial(n - 1);
}

console.log(factorial(5));

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------
¿Qué es un Número Primo?
Un número primo es un número mayor que 1 que solo se puede dividir por 1 y por sí mismo.
Ejemplos:
•	Números primos: 2, 3, 5, 7
•	No son primos: 4 (2 × 2), 9 (3 × 3)

*/
function esPrimo(n) {
  //Si n es menor o igual a 1, el número no es primo, así que devolvemos false (porque los números primos son mayores que 1)
  if (n <= 1) return n + " no es primo";
  //Si n es 2 o 3, devolvemos true, ya que 2 y 3 son números primos.
  if (n <= 3) return n + "es primo";
  //Si n es divisible por 2 o por 3, entonces no es primo y devolvemos false.
  //Esto es porque un número primo no puede ser divisible por ningún número que no sea 1 o él mismo,
  //y si es divisible por 2 o 3 (que no sean ellos mismos), no será primo.
  if (n % 2 == 0 || n % 3 == 0) return n + " no es primo";

  /*Este ciclo empieza revisando posibles divisores desde 5 y salta de 6 en 6, verificando siempre si n es divisible por i y por i + 2, y continúa mientras i * i sea menor o igual a n.
  Por ejemplo, si n = 29, el ciclo hará lo siguiente:
  i = 5: verifica si 29 % 5 == 0 o 29 % 7 == 0.
  Luego, i se incrementa en 6 (i = 11), y verifica si 29 % 11 == 0 o 29 % 13 == 0.
  Como 11 * 11 > 29, el ciclo se detendría aquí. */
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return n + " no es primo";
  }
  return n + " es primo";
}

console.log(esPrimo(29));
