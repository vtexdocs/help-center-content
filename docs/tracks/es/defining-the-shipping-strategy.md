---
title: 'Definir la Estrategia de Envío'
id: 6T5EBd0pXLftDqGvWxarR8
status: PUBLISHED
createdAt: 2021-08-10T20:43:41.794Z
updatedAt: 2021-09-04T11:15:32.103Z
publishedAt: 2021-09-04T11:15:32.103Z
firstPublishedAt: 2021-08-10T20:55:40.994Z
contentType: trackArticle
productTeam: Channels
slug: definir-la-estrategia-de-envio
locale: es
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugES: configurar-integracion-con-mercado-libre
---

Para vender sus productos en Mercado Libre necesita determinar una [Estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3), es decir, informar cuál será la operación de entrega de sus productos. La Estrategia de Envío se compone de tres etapas logísticas: [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140), [almacén](https://help.vtex.com/es/tutorial/o-que-e-um-estoque--23kq5gUdY0QOymOu8QSGcA) y [muelle](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj?&utm_source=autocomplete).

La Política de envío (transportadora) se asocia al Almacén de su tienda a través del Muelle. El muelle es el punto intermedio y donde se establecen las condiciones entre la transportadora y el almacenaje de su tienda.

Si desea utilizar la misma Estrategia de envío definida para su tienda VTEX en la integración con Mercado Libre, no es necesario crear nuevas configuraciones logísticas. Sin embargo, si desea crear una Estrategia de envío específica para el marketplace, deberá realizar los siguientes pasos:

- [Registrar la política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio) asociada a la política comercial utilizada en la integración.
- [Registrar el muelle](https://help.vtex.com/es/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW) asociado a la política comercial utilizada en la integración.
- [Registrar el almacén](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137) asociado al muelle creado en el paso anterior.
- Asociar la política comercial de Mercado Libre con el muelle.

Si desea comprobar si la configuración se ha realizado correctamente, puede realizar una [Simulación de envío](https://help.vtex.com/es/tutorial/simulacao-de-frete--tutorials_144). El simulador de envío es una herramienta que permite consultar las condiciones de entrega del producto sin necesidad de crear un pedido.
