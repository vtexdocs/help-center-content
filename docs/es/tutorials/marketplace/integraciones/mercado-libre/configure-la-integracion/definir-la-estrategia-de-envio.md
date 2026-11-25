---
title: 'Definir la Estrategia de Envío'
id: 6T5EBd0pXLftDqGvWxarR8
status: PUBLISHED
createdAt: 2021-08-10T20:43:41.794Z
updatedAt: 2024-12-18T02:05:19.046Z
publishedAt: 2024-12-18T02:05:19.046Z
firstPublishedAt: 2021-08-10T20:55:40.994Z
contentType: trackArticle
productTeam: Channels
slugEN: defining-the-shipping-strategy
locale: es
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugEN: configurar-integracion-con-mercado-libre
order: 4
---

Para vender sus productos en Mercado Libre necesita determinar una [Estrategia de envío](/es/docs/tutorials/estrategia-de-envio), es decir, informar cuál será la operación de entrega de sus productos. La Estrategia de Envío se compone de tres etapas logísticas: [política de envío](/es/docs/tutorials/politica-de-envio), [almacén](/es/docs/tutorials/almacen) y [muelle](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj?&utm_source=autocomplete).

La Política de envío (transportadora) se asocia al Almacén de su tienda a través del Muelle. El muelle es el punto intermedio y donde se establecen las condiciones entre la transportadora y el almacenaje de su tienda.

Si desea utilizar la misma Estrategia de envío definida para su tienda VTEX en la integración con Mercado Libre, no es necesario crear nuevas configuraciones logísticas. Sin embargo, si desea crear una Estrategia de envío específica para el marketplace, deberá realizar los siguientes pasos:

> ⚠️ La Política comercial que se utilizará en la integración con Mercado Libre debe estar asociada a un único muelle. Si la Política comercial está asociada a más de un muelle, los pedidos recibidos pueden no integrarse con el sistema VTEX.

- [Registrar la política de envío](/es/docs/tutorials/politica-de-envio#cadastrar-uma-politica-de-envio) asociada a la política comercial utilizada en la integración.
- [Registrar el muelle](/es/docs/tutorials/gestionar-el-muelle) asociado a la política comercial utilizada en la integración.
- [Registrar el almacén](/es/docs/tutorials/gestionar-almacenes) asociado al muelle creado en el paso anterior.
- Asociar la política comercial de Mercado Libre con el muelle.

Si desea comprobar si la configuración se ha realizado correctamente, puede realizar una [Simulación de envío](/es/docs/tutorials/simulador-de-envio). El simulador de envío es una herramienta que permite consultar las condiciones de entrega del producto sin necesidad de crear un pedido.
