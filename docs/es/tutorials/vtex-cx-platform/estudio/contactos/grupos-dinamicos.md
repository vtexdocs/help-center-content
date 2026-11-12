---
title: "Grupos dinámicos"
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

Los grupos dinámicos permiten segmentar contactos según los criterios definidos en una búsqueda. Por ejemplo, puedes utilizarlos para reunir contactos con determinada edad, ubicación o cualquier otra información almacenada en los campos de contacto.

A diferencia de los grupos estáticos, los grupos dinámicos no permiten añadir ni eliminar contactos manualmente. La participación en el grupo se determina mediante la regla de búsqueda: solo se incluyen los contactos que cumplen con los criterios definidos.

## Crear un grupo dinámico

Para crear un grupo dinámico:

1. Accede a la página **Contactos**.
2. En la barra de búsqueda, introduce una expresión con campos de contacto y operadores.
3. Comprueba los contactos que devuelve la búsqueda.
4. Haz clic en el botón para guardar el grupo dinámico.
5. En la ventana que aparece, introduce un nombre para el grupo y confirma.

## Definir una regla de búsqueda

Las reglas combinan campos de contacto, valores y operadores. Entre los operadores disponibles se encuentran:

- `AND`: exige que se cumplan ambas condiciones.
- `OR`: exige que se cumpla al menos una de las condiciones.
- `>`: mayor que.
- `>=`: mayor o igual que.

Por ejemplo, considera que los contactos tienen los campos `edad` y `sexo`. Para crear un grupo con contactos de sexo masculino mayores de 18 años, puedes utilizar la siguiente expresión:

`edad > 18 AND (sexo = "M" OR sexo = "Masculino")`

En este ejemplo:

- `edad > 18` selecciona contactos mayores de 18 años.
- `(sexo = "M" OR sexo = "Masculino")` acepta cualquiera de los valores indicados para el campo `sexo`.
- `AND` determina que deben cumplirse ambas condiciones.

Los nombres de los campos y los valores de la expresión deben coincidir con la información registrada en los contactos.

## Gestionar un grupo dinámico

Después de crear el grupo, puedes:

- Editar el nombre.
- Exportar los contactos participantes.
- Eliminar el grupo.
- Cambiar la regla de participación.

Estas opciones de gestión siguen el mismo proceso utilizado para los grupos estáticos.
