---
title: "El dominio del cliente no aparece en la pantalla del IdP"
id: 4o0Iwoaw04BRirMYtueV57
status: PUBLISHED
createdAt: 2025-06-26T14:36:26.444Z
updatedAt: 2025-06-26T21:58:42.187Z
publishedAt: 2025-06-26T21:58:42.187Z
firstPublishedAt: 2025-06-26T19:28:06.890Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: el-dominio-del-cliente-no-aparece-en-la-pantalla-del-idp
locale: es
kiStatus: Backlog
internalReference: 1250421
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En la autenticación OAuth, el usuario es redirigido a una URL por el IdP después de iniciar sesión. Algunos proveedores muestran el dominio de esa URL en la página de login, y a veces los clientes prefieren mostrar su propio dominio en esta página (especialmente el mensaje de Google "para continuar a {dominio}"). Si el dominio tiene una ruta raíz, como "dominio.com/es" por ejemplo, debido a que esta ruta raíz es diferente de `/` el dominio del cliente no se muestra, mostrándose en su lugar un dominio VTEX como vtexcommercestable.com.br, por ejemplo.


##

## Simulación


A continuación los pasos para simular el problema:

- Elige una cuenta con una ruta raíz de dominio diferente de `/` (`/en`, `/es`, `/pt` son buenos ejemplos);
- Establece el atributo `usesOwnDomain` a true para la cuenta;
- El dominio debe estar incluido en las URI de confianza del proveedor;
- Accede a la tienda web y elige iniciar sesión con este proveedor (Google por ejemplo), verás que el dominio no se mostrará en la página de inicio de sesión del proveedor.



## Workaround


No hay ninguna solución disponible.





