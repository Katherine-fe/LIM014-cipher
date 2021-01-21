# Cifrado César

## Índice

* [1. Preámbulo](#1-Preámbulo)
* [2. Introducion a la aplicacion](#2-Introduccion-a-la-aplicación)
* [3. Funcionalidad](#3-Funcionalidad)
* [4. Decisiones del diseño que se tomaron](#4-Decisiones-del-diseño-que-se-tomaron)
* [5. Descarga, Instalacion y Ejecucion](#5-Descarga)


***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Introducion a la aplicacion

En la actualidad, las redes sociales son los mecanismos utilizados por excelencia, tanto a nivel personal como empresarial. Día tras día publicamos una gran cantidad de información en la nube la cual puede ser atacada de distintas formas: hackers, apps maliciosas, redes de wifi públicas, etc. Así pues, una de las mejores formas de proteger la información publicada en las redes sociales es a través de la elaboración de contraseñas seguras. Es decir, claves que dificultan la tarea de los hackers para descifrarlas.

## 3. Funcionalidad

Para poder interacturar con la aplicacion solo debemos introducir un mensaje que contenga el alfabeto simple sin la Ñ , podremos intrudicir el texto en mayusculas y minisculas sin problema alguno ya que el resultado siempre sera devuelto en mayusculas.

## 4. Decisiones del diseño que se tomaron

Para el diseño de los prototipos de mediana calidad se utilizo Balsamiq ([click aquí](https://balsamiq.cloud/sq88wie/putglol/r2278"click aquí" ))
![mediana-calidad](https://i.ibb.co/3YSkPtn/b.jpg)

Para el diseño de los prototipos de alta calidad se utilizo Figma ([click aquí](https://www.figma.com/proto/PoulLsgAfsuQADgXsowWwS/ProyectoCifradoCesar?node-id=1%3A2&scaling=min-zoom"click aquí" ))
![alta-calidad](https://i.ibb.co/rpV7XKB/a.jpg)

## 5.Descarga, Instalacion y Ejecucion

1. Antes que nada, asegúrate de tener un 📝 editor de texto en condiciones, algo como Atom o Code.
2. Para ejecutar los comandos a continuación necesitarás una 🐚 UNIX Shell, que es un programita que interpreta líneas de comando (command-line interpreter) así como tener git instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar la versión completa de Cmder que incluye Git bash y si tienes Windows 10 o superior puedes usar Windows Subsystem for Linux.
3. Deberas realizar un 🍴 fork del repositorio y configurar un remote hacia el mismo.
4. ⬇️ Clona tu fork a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando npm install. Esto asume que has instalado Node.js (que incluye npm).
6. Si todo ha ido bien, deberías poder ejecutar las 🚥 pruebas unitarias (unit tests) con el comando npm test.
7. Para ver la interfaz de tu programa en el navegador, usa el comando npm start para arrancar el servidor web y dirígete a http://localhost:5000 en tu navegador.





