---
title: 'El botón giratorio de MyCards no funciona correctamente'
id: 2Y1IHSesmqAKYsep1JzIND
status: PUBLISHED
createdAt: 2023-03-29T19:18:47.318Z
updatedAt: 2023-11-06T13:02:14.964Z
publishedAt: 2023-11-06T13:02:14.964Z
firstPublishedAt: 2023-03-29T19:18:47.732Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: el-boton-giratorio-de-mycards-no-funciona-correctamente
locale: es
kiStatus: Backlog
internalReference: 780667
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Después de hacer clic en el botón "Guardar nueva tarjeta", los usuarios esperan ver alguna respuesta indicando que algo se está procesando. Desafortunadamente, la experiencia actual es deficiente, ya que el botón no muestra la esperada animación "spinner". Esto puede ser frustrante para los usuarios y perjudica la experiencia general del usuario.

Este componente utiliza actualmente vtex/styleguide@9.145.1, pero nuestra última versión es la 9.146.3. Es posible que el problema que está experimentando sea un error de la versión utilizada.


##

## Simulación


Intente guardar una nueva tarjeta en la página MyCard sin personalizaciones.



## Workaround


N/A





