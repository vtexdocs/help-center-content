---
title: 'Glosario de Variables'
id: MOTwhIJlY251TLzK3UUPl
status: PUBLISHED
createdAt: 2025-09-16T16:20:16.591Z
updatedAt: 2025-10-03T14:20:04.252Z
publishedAt: 2025-10-03T14:20:04.252Z
firstPublishedAt: 2025-10-03T14:20:04.252Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: variables-glossary
legacySlug: glosario-de-variables
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

### Visión general

Las variables son espacios creados para almacenar valores en la plataforma, lo que permite que los datos persistan incluso después de la finalización de un flujo.

Para utilizar una variable, se debe colocar el símbolo @, y la expresión escrita será sustituida por el valor real de la variable, siempre que se haya creado de manera adecuada.

A continuación, haremos una lista de cómo referirse a todos los tipos de variables existentes en la Plataforma Weni, que son:
  * Contactos y campos de contacto
  * Resultados y flujos
  * Globals

#### Contactos y campos de contacto

`@contact`: variables para guardar valores directamente relacionados con el contacto. A continuación, se muestra una lista de las subvariables más utilizadas:
  * `@contact.name`: Nombre completo del contacto;
  * `@contact.first_name`: Primer nombre del contacto;
  * `@contact.urns`: Lista de URNs del contacto. También se puede acceder mediante @urns;
  * `@contact.uuid`: ID único del contacto;
  * `@contact.created_on`: Fecha en la que se creó el contacto;
  * `@contact.language`: Idioma preferido del contacto;
  * `@contact.channel`: Nombre del canal preferido del contacto;
  * `@contact.groups`: Nombre de los grupos a los que pertenece el contacto;
  * `@contact.fields`: Campos de contacto personalizados del contacto. Para acceder, basta usar `@contact.fields.nombre_del_campo` o `@fields.nombre_del_campo`.

#### Resultados y flujos

**`@results`** : variables para guardar valores directamente relacionados con los resultados del flujo. Para acceder a un resultado, basta usar @results.nombre_del_resultado. A continuación, se muestra una lista de las subvariables más utilizadas:
  * `@results.nombre_del_resultado.category`: categoría/ruta a la que pertenece ese resultado;
  * `@results.nombre_del_resultado.value`: valor exacto de texto del resultado;
  * `@results.nombre_del_resultado.extra`: valores adicionales al texto que un resultado puede tener, como archivos adjuntos o información de la solicitud.

**`@input`** : variables que contienen el valor de entrada del contacto. A continuación, se muestra una lista de las subvariables más utilizadas:
  * `@input.text`: Valor de texto ingresado por el contacto en su última interacción con la plataforma;
  * `@input.attachments`: Archivos adjuntos ingresados por el contacto en su última interacción con la plataforma.

**`@child`** : permite hacer referencia a todas las variables del flujo hijo, es decir, el flujo que fue llamado por la carta de acción ""Enter a flow"", dentro del flujo padre. Si deseas acceder a un resultado del flujo hijo después de su finalización, por ejemplo, solo debes usar @child.results.nombre_del_resultado. Al usar otra carta de ""Enter a flow"", el valor de @child se sobrescribe.

**`@parent`** : permite hacer referencia a todas las variables del flujo padre, es decir, el flujo que llamó la carta de acción ""Enter a flow"", dentro del flujo hijo. Si deseas acceder a un resultado del flujo padre durante la ejecución del flujo hijo, por ejemplo, solo debes usar @parent.results.nombre_del_resultado.

#### Globals

Las variables globales, o **globals** , son variables creadas que pueden ser accedidas desde cualquier flujo en cualquier momento, pero no pueden modificarse durante la ejecución de un flujo. Son muy útiles cuando necesitamos enviar la misma información a varios flujos diferentes y, posteriormente, modificar ese valor de manera práctica para todos los flujos en los que está presente.

Para crear una global, simplemente ve a la configuración general de tu organización y desplázate hasta el final de la página, donde encontrarás la pestaña para las **globals**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/glosario-de-variables_1.png)

Después de eso, solo tienes que hacer clic en ""**Crear Global** "", escribir el nombre de la global que deseas junto con su valor.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/flujos/glosario-de-variables_2.png)

De esta manera, se volverá accesible en cualquier flujo a través de la variable `@globals.nombre_de_la_global`.
