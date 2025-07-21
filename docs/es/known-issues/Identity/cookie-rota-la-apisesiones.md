---
title: "Cookie rota la API/Sesiones"
id: 5knDMVZabZRYaEtITjkDbE
status: PUBLISHED
createdAt: 2023-03-27T19:54:42.696Z
updatedAt: 2024-03-20T20:34:36.743Z
publishedAt: 2024-03-20T20:34:36.743Z
firstPublishedAt: 2023-03-27T19:54:43.232Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: cookie-rota-la-apisesiones
locale: es
kiStatus: Backlog
internalReference: 779014
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando hay un script que genera una cookie para rastrear a los usuarios y su cookie rompe la llamada a /api/sessions, por ejemplo porque tiene una carta especial en el valor cookie. Entonces necesitamos descartar esa cookie malformada de nuestro lado y mantener todas las demás, para que no afecte el comportamiento.


##

## Simulación



El escenario fue mapeado en Facebook:

Al entrar en la página desde un anuncio de Facebook, automáticamente se carga la página en el navegador nativo META y al llegar a la página de pago no se carga correctamente, por lo que no es posible finalizar la compra.

Facebook solía redirigir a los navegadores pero ya no lo hace porque ha integrado el navegador en su aplicación.



## Workaround


N/A





