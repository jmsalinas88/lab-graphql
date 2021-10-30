# ¿Qué es GraphQL?

Es un **nuevo paradigma** aplicado a la necesidad que siempre han tenido los desarrolladores de realizar intercambios de información entre diferentes aplicaciones. 

Podemos pensar en GraphQL como **un nuevo eslabón en esta cadena evolutiva** de tecnologías para intercambiar información. 

Fue creado por Facebook en el 20015 **para resolver ciertas limitaciones que en algunos casos presenta REST**.

Su principal ventaja es la **flexibilidad al momento de requerir información**, lo que con REST podría tomar varias consultas y peticiones, con una API de GraphQL bien diseñada sólo tomará **una única llamada**

## Ventajas 

- Lenguaje agnóstico que permite definir de una forma clara y simple los objetos y acciones de la API
- Una validación automática de la información a ingresar. 
- Control de errores de una manera uniforme y precedible. 
- Cuenta con una documentación mínima autogenerada que permite saber exactamente cómo debe ser usado la API tanto a la hora de pedir y enviar información 

El sitio donde está registrada toda la especificación de GraphQL: https://graphql.org/

**Documental de GraphQL** : https://www.youtube.com/watch?v=783ccP__No8

En el video aparecen los 3 co-creadores de la especificación: Lee Byron, Nick Schrock y Dan Schafer.


## Schema y types 

El Schema es la base de una API GraphQL, es el encargado de describir todos los tipos de información que va a contener. 

Dentro de GraphQL contamos con distintos tipos de escalares: 
- String
- Int
- Float
- Boolean
- ID

## Queries y Resolvers 

Una query permite ejecutar una petición a la API, dentro de una query se debe indicar la consulta que queres ejecutar y los campos que desees obtener. GraphQL te va a devolver la información que solicitaste dentro del objeto *data* 

El resultado de la petición se ejecuta con un objeto llamado **resolvers**, éste objeto va a contener una propiedad del mismo nombre que la query que va a resolver o ejecutar. 

## Custom Types
GraphQL nos permite configurar nuestros propios tipos de datos, estos deben tener la siguiente sintaxis: 

~~~
type <Nombre del tipo> {
  propiedad: Tipo de dato
}
~~~

Dentro de nuestros tipos de datos podemos configurar un campo de un tipo como obligatorio con el signo “!, quedando por ejemplo:

~~~
type Course {
  title: String!
}
~~~

## Argumentos
Podemos pasar argumentos con distintos tipos de información dentro de las peticiones que hagamos en GraphQL, su sintaxis quedaría de la siguiente manera: 

~~~
nombreQuery(campo: tipo): tipo
~~~

## Mutations
Básicamente es una operación que me permite ingresar información en la API

## Nested Types
Es un mecanismo que permite tener un tipo incrustado dentro de otro

## Alias y fragmentos 
Dentro de GraphQL podemos correr más de una petición a la vez y nombrarlas de distinta manera para poder indentificarlas, esto es posible gracias a los **Alias** 

La sintaxis de un Alias es bastante simple: 
~~~
nombreDelAlias: tipoDeDato(argumento: tipo) {
  datos
}
~~~

Además de los Alias, podemos agrupar campos para ser reutilizados en distintas peticiones gracias a los **Fragments** 

## Directivas
Las directivas son una instrucción que permite agregar condicionales a nuestras peticiones. Podemos modificar de manera dinámica nuestra query simplemente añadiendo: 

~~~
@include(if: Boolean) {
  datos
}
~~~

## Unions
Permite agrupar varios custom types sin importar si tienen algo en común, si sintaxis es la siguiente: 
~~~
union SearchResult = CustomType1 | CustomType2 | CustomType3
~~~


## Herramientas utilizadas

<p align="left"> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://graphql.org" target="_blank"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>







