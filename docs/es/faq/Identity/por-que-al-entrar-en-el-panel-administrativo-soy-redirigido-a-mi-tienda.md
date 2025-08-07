---
title: '¿Por qué al entrar en el panel administrativo soy redirigido a mi tienda?'
id: 3JOlJmgmacAqCQEe0kwGwg
status: PUBLISHED
createdAt: 2017-10-01T03:35:33.165Z
updatedAt: 2021-04-06T20:20:56.407Z
publishedAt: 2021-04-06T20:20:56.407Z
firstPublishedAt: 2017-10-01T03:43:27.490Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_4
slugEN: why-after-signing-in-to-the-administrative-panel-i-am-redirected-to-my-store
locale: es
legacySlug: por-que-al-entrar-en-el-panel-administrativo-soy-redirigido-a-mi-tienda
---

Este escenario ocurre cuando el email utilizado para entrar en el panel administrativo tiene acceso a algún recurso de Televentas, configuración realizada a través de [perfiles de acceso](/es/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc), en __Gestión de la cuenta__.

Los perfiles de televenta bloquean el acceso al __Catálogo__, es decir, el usuario no puede acceder al registro de productos, por ejemplo. Si es necesario acceder a este módulo, el usuario debe trabajar con dos logins diferentes.

Si el perfil de acceso tiene permiso para televenta y otros módulos, el acceso debe ser hecho directamente por la URL del módulo, por ejemplo, para Gestión de pedidos: `https://{AccountName}.myvtex.com/admin/checkout`
