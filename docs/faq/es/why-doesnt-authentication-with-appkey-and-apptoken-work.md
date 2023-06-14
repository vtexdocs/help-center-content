---
title: '¿Por qué  no funciona la autentificación con appkey y apptoken?'
id: 3oReWVLDgLjXoKsMrUSy4m
status: PUBLISHED
createdAt: 2019-03-12T21:06:30.165Z
updatedAt: 2023-03-28T20:26:16.769Z
publishedAt: 2023-03-28T20:26:16.769Z
firstPublishedAt: 2019-03-12T21:13:49.769Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: TAUXpa4XWCsIaUOoksGIE
slug: por-que-no-funciona-la-autentificacion-con-appkey-y-apptoken
legacySlug: untitled-entry-2019-03-12-at-09-06-30
---

En VTEX, la autenticación de las [APIs](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-list-of-rest-apis) para integraciones con su tienda se lleva a cabo por medio de [appKey y appToken](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication). Sin embargo, hay algunos casos en los que una integración puede fallar debido a errores relacionados con estas claves de autenticación. A continuación se muestra cómo solucionar algunos problemas comunes relacionados con la autenticación por appKey y appToken: 

## Asociación de appkey y apptoken

Al acceder a __Perfiles de acceso__, dentro del módulo de __[Configuraciones de la cuenta]( https://help.vtex.com/es/tutorial/visao-geral-configuracoes-da-conta--6USYxLuzNt4uAkvjdPF7I8)__, es posible configurar [perfiles de acceso](https://help.vtex.com/es/tutorial/perfiles-de-acceso--7HKK5Uau2H6wxE1rH5oRbc) con niveles de acceso diferentes a la plataforma.

Cada par de appKey y appToken, cuando se crea, no está vinculado a un perfil de acceso. De esta forma, __es necesario vincular ambas claves a un perfil de acceso deseado__.

Uno de los motivos de error en la autenticación puede ser la falta de asociación de las claves creadas a un perfil de acceso. Otro posible error es la vinculación del appKey y appToken a un perfil que, aunque esté registrado, no tiene acceso para ejercer determinada acción en la plataforma.

<div class="alert alert-info">
Apenas el <a href="https://help.vtex.com/es/tutorial/que-es-el-usuario-master--3oPr7YuIkEYqUGmEqIMSEy">usuario Titular</a> tiene permiso para manipular las claves; es decir, crear la appKey y el appToken usados en integraciones con la tienda.
</div>

## Error de digitación

Ambas claves deben ser rellenadas en sus respectivos campos, sin espacio y manteniendo la diferenciación de letras de mayúsculas y minúsculas– __case sentitive__. Un pequeño error en el rellenado puede impedir el funcionamiento de la integración.

Puede verificar posibles errores de digitación en los campos en el módulo __Gestión de cuenta__, en __[Usuarios__](https://help.vtex.com/es/tutorial/administrar-usuarios--tutorials_512)__. 

<div class="alert alert-warning">
El appToken se muestra al usuario apenas en el momento de su creación, no pudiendo recuperarse posteriormente.
</div>

