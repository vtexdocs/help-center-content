---
title: 'Skus recibidos: La función de exportación no funciona para los administradores en otros idiomas (sólo PT, EN, ES)'
id: 2fV4YP1dpdQRBYqT9S7Lzi
status: PUBLISHED
createdAt: 2022-09-29T14:23:38.774Z
updatedAt: 2023-05-08T18:23:20.798Z
publishedAt: 2023-05-08T18:23:20.798Z
firstPublishedAt: 2022-09-29T14:23:46.858Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: received-skus-export-function-not-working-for-admins-in-other-languages-only-pt-en-es
locale: es
kiStatus: Fixed
internalReference: 668122
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La función de exportación para recuperar una hoja de cálculo con los skus pendientes, aprobados o rechazados por vendedor no funciona cuando el admin está configurado en cualquier otro idioma que no sea PT, EN, ES.

El mensaje de error que aparece es genérico. Un ejemplo de mensaje en francés es
`Une erreur s'est produite lors de l'exportation de la feuille, veuillez réessayer.`


##

## Simulación



1. Configure el admin en un idioma distinto de PT, EN o ES;
2. Vaya al módulo Skus recibidos;
3. Seleccione un vendedor y exporte los skus en el área pendiente, aprobado o rechazado;
4. Compruebe que aparece un error genérico.



## Workaround


Cambie el idioma de administración a PT, EN o ES y exporte la hoja de cálculo.






