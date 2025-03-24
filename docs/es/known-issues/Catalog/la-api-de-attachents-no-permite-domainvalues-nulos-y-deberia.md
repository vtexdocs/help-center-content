---
title: "La API de Attachents no permite 'domainValues' nulos (y debería)"
id: 7KMb6nh0ulcWdEfz7USbPg
status: PUBLISHED
createdAt: 2023-09-11T19:02:51.514Z
updatedAt: 2023-09-11T19:02:52.164Z
publishedAt: 2023-09-11T19:02:52.164Z
firstPublishedAt: 2023-09-11T19:02:52.164Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: attachents-api-doesnt-allow-null-domainvalues-and-it-should
locale: es
kiStatus: Backlog
internalReference: 897480
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las solicitudes de actualización para la API /api/catalog/pvt/attachment/ no están permitiendo actualizaciones para el campo Valor del dominio como valor nulo.

Este campo es nullable, por lo que esta respuesta de la API está respondiendo incorrectamente con:

`{`
` "Mensaje": "DomainValues in Domain at position 1 can not be null or empty value"`
`}`


##

## Simulación


1 - Crear un archivo adjunto mediante la interfaz de usuario o la API: https://help.vtex.com/pt/tutorial/cadastrar-um-anexo--7zHMUpuoQE4cAskqEUWScU

2 - intente actualizarlo enviando el campo domainValue como null, por ejemplo:

`{`
` "Id": 123,`
` "Nombre": "payload con dominio nulo",`
` "IsRequired": true,`
` "IsActive": true,`
` "Domains": [`
` {`
` "FieldName": "Basic test",`
` "MaxCaracters": "354534",`
` "DomainValues": ""`
` }`
` ]`
`}`

3 - se le mostrará un tipo de respuesta "Solicitud incorrecta", cuando en realidad debería aceptar valores nulos para este campo.



## Workaround


Actualice los valores permitidos manualmente, vía UI o créelos ya nulos (el método POST funciona, el PUT no).





