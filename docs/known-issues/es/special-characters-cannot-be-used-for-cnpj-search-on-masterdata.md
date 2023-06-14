---
title: 'Los caracteres especiales no pueden utilizarse para la búsqueda de CNPJ en MasterData'
id: 4sgob00QXkGYPC3TjSpQeN
status: PUBLISHED
createdAt: 2022-06-21T15:35:26.675Z
updatedAt: 2022-11-25T22:13:02.870Z
publishedAt: 2022-11-25T22:13:02.870Z
firstPublishedAt: 2022-06-21T15:35:27.341Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: los-caracteres-especiales-no-pueden-utilizarse-para-la-busqueda-de-cnpj-en-masterdata
locale: es
kiStatus: Backlog
internalReference: 602054
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los tipos de campo CNPJ y CPF se utilizan entre varias partes de VTEX y son campos esenciales presentes también en la entidad MasterData CL.

Estos campos deben tener un formato muy específico y sus caracteres especiales (como "." y "/") no son actualmente compatibles con la búsqueda presente tanto en la API ( ) como en la UI.





## Simulación



1. Vaya a los datos maestros de su cuenta myaccount.vtexcrm.com.br
2. En el listado de aplicaciones accede a tu formulario de "Cleintes"
3. En los filtros, busque "CNPJ"
4. Escribe un carácter especial en tu búsqueda, como por ejemplo "/"
5. Aparecerá una ventana de "Erro Inesperado".




## Workaround


Utilizar campos alternativos para la búsqueda o sólo caracteres aplanuméricos al buscar con cpf y cnpf

