---
title: 'Dominio final diferente de myvtex debido a la versión antigua del componente en el Editor de Sitios'
id: 7bf2mMbpcxUd6Q32DYP6vz
status: PUBLISHED
createdAt: 2023-12-05T18:07:50.089Z
updatedAt: 2024-01-26T17:52:03.169Z
publishedAt: 2024-01-26T17:52:03.169Z
firstPublishedAt: 2023-12-05T18:07:50.675Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: final-domain-different-from-myvtex-due-to-old-component-version-on-site-editor
locale: es
kiStatus: Backlog
internalReference: 948071
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


A veces puedes hacer cambios en el Editor de Sitios y esos cambios se reflejan en el entorno myvtex, pero cuando intentas actualizar el dominio final, esos cambios no se reflejan. Esto ocurre normalmente cuando el componente que intentas cambiar tiene más de una versión. El front sigue utilizando la versión inactiva del componente mientras que el myvtex está utilizando la versión activa. La única forma de solucionar esto es borrando la versión inactiva del componente.


##

## Simulación



- Intenta cambiar algo en el editor del sitio en una nueva versión de un componente
- Comprueba si tus cambios se reflejan en el dominio final y en el entorno myvtex



## Workaround


Elimine la versión antigua, esto hará que el dominio final utilice la versión correcta del componente





