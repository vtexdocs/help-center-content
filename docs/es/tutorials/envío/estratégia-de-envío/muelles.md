---
title: 'Muelles'
id: 5DY8xHEjOLYDVL41Urd5qj
status: PUBLISHED
createdAt: 2021-09-23T20:48:21.165Z
updatedAt: 2024-11-05T18:08:12.885Z
publishedAt: 2024-11-05T18:08:12.885Z
firstPublishedAt: 2021-09-23T21:20:17.177Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: loading-dock
legacySlug: muelles
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

El muelle forma parte del sistema logístico y representa un punto intermedio entre el almacén y la transportadora. En el muelle, las transportadoras recogen los ítems para entregarlos a sus destinatarios. 

En VTEX, el muelle es un intermediario entre el almacenamiento de ítems y la entrega de los pedidos de tu negocio. Es a través del muelle que se produce la integración de las partes necesarias para la logística de tu tienda, a saber: el [almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb), la [política comercial](https://help.vtex.com/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV) y la [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140).

![Doca ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/estrat%C3%A9gia-de-env%C3%ADo/muelles_1.svg)

> ℹ️ El almacén es el espacio físico de almacenamiento de los productos vendidos por la tienda; la política comercial es la configuración de las estrategias de venta de la tienda; y la política de envío es un conjunto de reglas que definen las opciones y condiciones de envío. El orden de registro sugerido en la plataforma VTEX para el funcionamiento previsto del sistema logístico es: <ul><li>[Política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140)</li><li>Muelle</li><li>[Almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)</li></ul>

## Casos de uso

La creación y configuración de muelles en la plataforma se ajustan a diferentes escenarios logísticos. La forma de configurar los muelles dependerá de la estrategia logística de tu tienda.

Una misma tienda puede tener diferentes casos de uso de los muelles, y diferentes tiendas pueden utilizar este recurso de diferentes maneras.

Por ejemplo, si una granja produce frutas y verduras y vende a diferentes tipos de tiendas, se pueden configurar diferentes muelles para atender al almacén de la granja y distribuir la producción. Se puede definir, por ejemplo, un muelle específico para las frutas y otro para las verduras.

Los principales casos de uso de los muelles son:

* Cuando una tienda tiene diferentes puntos de salida para un mismo almacén. Puedes registrar un almacén y varios muelles en la plataforma, añadir el almacén que alimenta cada muelle y la transportadora (política de envío) que realizará la entrega.
* Cuando los muelles funcionan como centros de distribución. En este caso, el muelle no es solo el lugar por donde pasan los ítems antes de ser entregados, sino que también cumple la función de almacén temporal.
* Cuando el muelle y el almacén coinciden físicamente. Estos son los casos en los que no hay distinción entre el lugar de almacenamiento y el lugar de salida de los ítems para ser transportados.
* Cuando el muelle no existe físicamente y el concepto se utiliza solo para delimitar los horarios de recogida de ítems en el almacén por parte de la transportadora. Incluso en este caso, es necesario registrar el muelle en la plataforma VTEX, ya que las rutas de entrega solo son posibles con los muelles configurados.
* Cuando necesitas calcular el coste del servicio de manejo de los ítems desde el almacén hasta la transportadora.

Para saber cómo gestionar un muelle a través del Admin VTEX, consulta el artículo [Gestionar muelles](https://help.vtex.com/es/tutorial/gestionar-el-muelle--7K3FultD8I2cuuA6iyGEiW).

