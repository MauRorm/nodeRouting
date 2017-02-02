# Objectivo
Desarrollar una REST API que consuma y exponga la data de una base de datos no relacional (mongoDB).

# Descripción
Desarrollar una REST API que consuma y exponga la data de una base de datos no relacional (mongoDB). La base cuenta con dos colecciones, búsquedas y tweets (información detallada de la colecciones mas abajo). La API debe tener 4 endpoint los cuales deben devolver una respuesta en formato JSON.

Para cada endpoint, los valores a recibir son:

- **searchId:** Id de la búsqueda
- **initialDate:** Fecha inicial del rango de tweets solicitado (UTC)
- **finalDate:** Fecha final del rango de tweets solicitado (UTC)

Los valores initialDate y finalDate delimitan el rango de la data sobre la que se realizaran los cálculos.

# Información a devolver
- **Endpoint 1:** Devolver el número de tweets, numero total de usuarios únicos, menciones únicas y hashtags únicos de toda la búsqueda.
- **Endpoint 2:** Usuario con mayor número de tweets en la búsqueda.
- **Endpoint 3:** Top 10 de los hashtags con mayores apariciones en la búsqueda.
- **Endpoint 4:** Porcentaje de retweets y tweets originales.

# Validaciones
- Cada endpoint debe de validar que la búsqueda solicitada exista.
- Validar que los 3 campos requeridos vengan en la petición.
- Validar que la fecha inicial sea menor que la final.

# Acerca de las colecciones

### Búsquedas
La colección de búsquedas contiene información acerca de recolecciones de data (tweets) realizada sobre twitter. Los campos que la conforman son los siguientes:

- **identificador:** Campo de tipo String el cual establece el identificador de la búsqueda.
- **tipo:** Campo de tipo String el cual establece el tipo de búsqueda (Programada, Search o Replay).
- **inicio:** Campo tipo Date el cual almacena la fecha en la que  inicio la recolección de data.
- **termino:** Campo tipo Date el cual almacena la fecha en la que finalizo la recolección de data.
- **estado:** Campo de tipo String el cual indica el estado de la búsqueda (Pendiente, Corriendo o Finalizada)


### Tweets
La colección tweets almacena los tweets recolectados por las búsquedas. Los campos que la conforman son los siguientes:

- **tweetId:** Campo tipo String, almacena el id del tweet asignado por twitter.
- **busquedaId:** Campo tipo String, almacena el id de la búsqueda a la que corresponde el tweet.
- **body:** Campo tipo String, almacena el texto del tweet.
- **link:** Campo tipo String, almacena la url que lleva al detalle del tweet.
- **postedTime:** Campo tipo Date, almacena la fecha y hora que fue realizado el tweet.
- **verb:** Campo tipo String, indica si el tweet es original (post) o retweet (share).
- **usuario:**
    - **displayName:** Campo tipo String, almacena el nombre de la cuenta.
    - **image:** Campo tipo String, almacena la url del avatar del usuario.
    - **link:** Campo tipo String, almacena la url que lleva al perfil del usuario.
    - **friendsCount:** Campo tipo Number, indica el número de cuentas que sigue el usuario.
    - **followersCount:** Campo tipo Number, indica el número de followers con los que cuenta el usuario.
    - **statusesCount:** Campo tipo Number, indica el número de tweets realizados por el usuario.
    - **verified:** Campo tipo Boolean, indica si la cuenta esta verificada.
    - **preferredUsername:** Campo tipo String, almacena el nombre de usuario.
- **interpretaciones:** Campo tipo Arreglo, almacena los resultados de la interpretación del tweet.
- **hashtags:** Campo tipo Arreglo, almacena los hashtags que aparecen en el tweet.
- **menciones:** Campo tipo Arreglo, almacena las cuentas mencionadas en el tweet.
- **urls:** Campo tipo Arreglo, almacena las urls que aparecen en el tweet.
- **imagenes:** Campo tipo Arreglo, almacena la url de las imágenes que aparecen en el tweet.
- **aplicacion:** Campo tipo String, almacena el nombre de la aplicación desde la que fue emitido el tweet.
- **locacion:**
    - **lat:** Campo tipo String, almacena la latitud de la ubicación donde fue realizado el tweet.
    - **lng:** Campo tipo String, almacena la longitud de la ubicación donde fue realizado el tweet.


# Reglas
- El lenguaje y/o framework a utilizar quedan a libre elección.
- La entrega de la prueba deberá ser realizada via un repositorio en github, dicho repositorio deberá contener el código e instrucciones de su ejecución.
