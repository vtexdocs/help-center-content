---
title: 'Introducción a los flujos'
id: 5XxzVEJtDzXXEOS0SXANeS
status: PUBLISHED
createdAt: 2025-09-16T16:38:04.873Z
updatedAt: 2025-10-03T14:20:03.960Z
publishedAt: 2025-10-03T14:20:03.960Z
firstPublishedAt: 2025-10-03T14:20:03.960Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: flows-introduction
legacySlug: introduccion-a-los-flujos
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Un flujo es un conjunto de pasos organizados en formato de flujograma. Esos pasos son aplicados a sus contactos cuando ellos entran al flujo, osea, cuando comienzan una conversación.

En los flujos, esos pasos pueden ser acciones o decisiones, que permiten la creación o desarrollar conversaciones a partir de eso. En este artículo, hablaremos un poco más sobre la anatomía y estructura de esos flujos.

![Flow Anatomy](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/introduccion-a-los-flujos_1.png)

### Anatomía de los flujos
En la imagen de encima, tenemos un ejemplo de un flujo para una búsqueda simple. En el, podemos ver cartas cartas de decisión, cartas de acción y cartas de comentario que juntas forman la estructura para la siguiente conversación: manda una pregunta, que precisa ser respondida con sí o con no, y a partir de eso tendremos una respuesta para cada opción.
#### Cartas de acción
Las cartas de acción representan algunas operaciones/acciones que conseguimos hacer dentro de una conversación. Algunos de esos comandos son:
  * Enviar un mensaje para el contacto;
  * Marcar un mensaje de contacto;
  * Dirigir contactos en grupos;
  * Comenzar otros flujos;
  * Editar información de contacto;

Osea, las cartas de acción disparan comandos que son ejecutados inmediatamente, siguiendo un orden de pila*
_* El primero en el orden de las cartas, siempre ser á el primero a ser ejecutado_

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/introduccion-a-los-flujos_2.png)

#### Cartas de Decisión
Las cartas de decisión son las responsables de las más diversas conexiones durante el flujo. Ellas son las responsables por crear las condiciones de decisión que permiten a nuestras conversaciones crear caminos diferentes, dependiendo de los datos informados por el contacto.
  * La respuesta del contacto a una pregunta;
  * Un grupo al que el contacto pertenece;
  * Alguna información del contacto;
  * Algún resultado creado en el flujo;

Esas decisiones son tomadas en cima de las reglas de decisión existentes en su carta, que pueden ser:
  * Verificar la existencia de palabras específicas en una respuesta/valor;
  * Verificar la existencia de frases específicas en una respuesta/valor;
  * Verificar la existencia de números específicos o reglas numéricas en una respuesta/valor;
  * Verificar la existencia de un formato específico (como datos, e-mails, teléfono) en una respuesta/valor;

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/introduccion-a-los-flujos_3.png)

#### Cartas para comentario
Las cartas para comentario permiten la creación de notas, semejantes a posts-its, en nuestros flujos. Pueden ser utilizadas como forma de comunicación entre usted y un colega que también esté trabajando en el mismo proyecto, sea para explicar sobre cómo una parte del flujo funciona, o para alertar de que tal vez sea mejor no alterar esa etapa.

Para crear una carta de comentario, basta con clickear dos veces en un lugar vacío del flujo. Después de eso, usted consigue mover libremente sus notas y posicionarlas en el lugar que guste.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/introduccion-a-los-flujos_4.png)

###  Y ahora?
Ahora que conocemos mejor el concepto de flujo y entendemos cómo esta formado, podemos profundizar en cada una de las cartas que existen, además de algunas otras configuraciones dentro de nuestra edición."
