---
title: "La búsqueda de televentas no acepta caracteres especiales aparte de '@'."
id: 5eTb6KlR07dOP06BGhovoL
status: PUBLISHED
createdAt: 2024-07-29T17:21:34.828Z
updatedAt: 2024-07-29T17:21:35.918Z
publishedAt: 2024-07-29T17:21:35.918Z
firstPublishedAt: 2024-07-29T17:21:35.918Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-busqueda-de-televentas-no-acepta-caracteres-especiales-aparte-de
locale: es
kiStatus: Backlog
internalReference: 1072418
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, al utilizar el buscador de televentas, un usuario puede suplantar la identidad de compradores para ayudar en las compras y, para ello, es necesario introducir, en el buscador nativo, el email de quien se va a suplantar.

Sin embargo, al utilizar esta herramienta, los emails que contengan caracteres especiales, como "+", "$", "#", etc... no son identificados por la herramienta de búsqueda, haciendo que devuelva una respuesta de "no encontrado".


##

## Simulación


1 - en una tienda que tenga implementada la televenta (https://help.vtex.com/en/tutorial/telesales-features--UqhiccIRIK2KD0OqkzJaS), acceder a través de un usuario con la autenticación requerida.

2 - crear un correo electrónico, en el masterdata de la tienda, que utiliza un carácter especial como "+".

3 - intente utilizar la barra de herramientas de suplantación de televentas para buscar el correo electrónico dado - devolverá una respuesta "no encontrado".

4 - ajustar este mismo correo electrónico para eliminar el carácter especial y luego buscar de nuevo normalizará la situación.



## Workaround


Adapte las direcciones de correo electrónico de los usuarios para que no utilicen caracteres especiales.




