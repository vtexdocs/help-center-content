---
title: "Los caracteres especiales no pueden utilizarse para la búsqueda CNPJ en MasterData"
id: 4sgob00QXkGYPC3TjSpQeN
status: PUBLISHED
createdAt: 2022-06-21T15:35:26.675Z
updatedAt: 2024-12-12T19:59:49.961Z
publishedAt: 2024-12-12T19:59:49.961Z
firstPublishedAt: 2022-06-21T15:35:27.341Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: los-caracteres-especiales-no-pueden-utilizarse-para-la-busqueda-cnpj-en-masterdata
locale: es
kiStatus: Backlog
internalReference: 602054
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los tipos de campo CNPJ y CPF se utilizan entre varias partes de VTEX y son campos esenciales presentes también en la entidad MasterData CL.

Estos campos deben formatearse de una manera muy específica y sus caracteres especiales (como "." y "/") no son compatibles actualmente con la búsqueda presente tanto en la API ( ) como en la UI.


##

## Simulación


Vaya al masterdata de su cuenta myaccount.vtexcrm.com.br
En el listado de aplicaciones acceda a su formulario para "Cleintes"
En los filtros, busque "CNPJ"
Digite un carácter especial en su búsqueda, como "/"
Aparecerá una ventana "Erro Inesperado



## Workaround


Busque utilizando el campo "Todos" o utilizando comillas dobles ("00.000.000/0000-00") para que el sistema interprete la cadena o utilice campos alternativos para la búsqueda o sólo caracteres aplanuméricos cuando busque con cpf y cnpf.





