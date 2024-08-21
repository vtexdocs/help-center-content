---
title: "La plantilla 'relatorio-de-importacao-de-estoque' no admite el multilingüismo"
id: 5R8b0jnibOQdXupo0hIyts
status: PUBLISHED
createdAt: 2022-05-25T18:25:43.394Z
updatedAt: 2024-02-16T20:24:28.851Z
publishedAt: 2024-02-16T20:24:28.851Z
firstPublishedAt: 2022-05-25T18:25:43.976Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: la-plantilla-relatoriodeimportacaodeestoque-no-admite-el-multilinguismo
locale: es
kiStatus: No Fix
internalReference: 585906
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, el mensaje de retorno del informe de importación de inventario está en _pt-BR_. Por lo tanto, cuando la importación está terminada, el correo electrónico lanzado a través de la plantilla "`relatorio-de-importacao-de-estoque`" tiene la información en _pt-BR_, sin considerar la configuración regional de la tienda.



## Simulación



1. Acceda a la importación de inventario (Pedidos > Inventario y envío > Estrategia de envío > Almacenes > Importar artículos);
2. Adjunte el archivo a importar;
3. Al final del proceso de importación, se enviará el correo electrónico con el resultado de la importación. Podemos ver que el mensaje no respeta el idioma de la cuenta:

![](https://vtexhelp.zendesk.com/attachments/token/ir6cFOIA64r7ZAC7GEdbw6pww/?name=image.png)

"¡Importación concluida! Total de itens importados: 6. Total de itens não importados: 0.`"




## Workaround


No hay ninguna solución.

