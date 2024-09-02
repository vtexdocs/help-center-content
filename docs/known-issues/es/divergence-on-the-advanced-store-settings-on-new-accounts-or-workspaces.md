---
title: 'Divergencia en la configuración avanzada de la tienda en cuentas o espacios de trabajo nuevos'
id: 1Jt8McqXjYAxfJNkBZHt4j
status: PUBLISHED
createdAt: 2024-07-11T18:16:01.106Z
updatedAt: 2024-07-11T18:16:02.006Z
publishedAt: 2024-07-11T18:16:02.006Z
firstPublishedAt: 2024-07-11T18:16:02.006Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: divergencia-en-la-configuracion-avanzada-de-la-tienda-en-cuentas-o-espacios-de-trabajo-nuevos
locale: es
kiStatus: Backlog
internalReference: 1064235
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En nuevos espacios de trabajo o cuentas que nunca cambiaron las configuraciones avanzadas de la Configuración de la Tienda se puede verificar una inconsistencia entre la información en la UI y la bandera aplicada a la cuenta.


##

## Simulación



- Crear un nuevo espacio de trabajo
- Vaya a la Configuración de la tienda en la pestaña Avanzado
- Ver que algunas banderas se establecen en la interfaz de usuario
- Verifique las configuraciones usando el plugin settings con el siguiente comando `vtex settings get vtex.store`.
- Compruebe que los indicadores no están aplicados.



## Workaround


Haga clic en el botón "Guardar" de la interfaz de usuario




