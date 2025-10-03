---
title: 'Grupos dinámicos'
id: 51C5xzAp6Y00sK42SAGCSL
status: PUBLISHED
createdAt: 2025-09-12T17:30:05.020Z
updatedAt: 2025-10-03T14:21:49.200Z
publishedAt: 2025-10-03T14:21:49.200Z
firstPublishedAt: 2025-10-03T14:21:49.200Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: dynamic-groups
legacySlug: grupos-dinamicos
locale: es
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

### Grupo dinámico y búsquedas de contacto

En la pestaña de contactos, existe una barra de búsqueda. Esta barra puede utilizarse para encontrar y filtrar contactos que cumplan con las reglas definidas en dicha barra. Normalmente, usamos campos de contacto y algunos operadores para crear la expresión de búsqueda, es dec
ir:

Si en mi grupo existe el campo de contacto ""Edad"" y el campo de contacto ""Sexo"", y quiero saber cuántos contactos del sexo masculino son mayores de 18 años, puedo utilizar la siguiente expresión en la búsqueda:

`edad > 18 AND (género = ""M"" OR género = ""Masculino"")`

A continuación, se muestran algunos de los operadores que podemos utilizar en estas búsquedas:

-    AND (-y

-  cumple ambas reglas al mismo tiempo)

-    OR (-o

-  cumple una de las reglas)

-    > , >= (Mayor que, mayor o igual a)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/grupos-dinamicos_1.png)

Es decir, un grupo dinámico es un tipo de grupo en el que no podemos añadir y/o eliminar usuarios manualmente. Todos los usuarios que se añaden entran al grupo si cumplen con la regla de la búsqueda realizada.

Si haces clic en el botón para guardar tu grupo dinámico, aparecerá un pop-up para que elijas el nombre de tu nuevo grupo.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/grupos-dinamicos_2.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/est%C3%BAdio/grupos-dinamicos_3.png)

Si deseas editar el nombre del grupo, exportar los contactos participantes, eliminar el grupo o incluso modificar la regla de participación, el proceso es el mismo que para los grupos estáticos.
