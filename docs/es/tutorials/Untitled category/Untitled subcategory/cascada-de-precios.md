---
title: 'Cascada de precios'
id: 2USbESztvGi80WMUEawMGq
status: ARCHIVED
createdAt: 2018-06-20T21:23:23.445Z
updatedAt: 2019-12-31T15:28:12.188Z
publishedAt: 
firstPublishedAt: 2018-06-20T22:08:14.680Z
contentType: tutorial
productTeam: Others
author: 7kumplNTMIsWYGeeegCqO8
slugEN: price-waterfall
locale: es
legacySlug: cascada-de-precios
subcategoryId: unknown-subcategory
---

Recientemente, la feature de **Precios Condicionales** fue agregada al módulo de precios. (Vea el artículo [Cómo crear precios condicionales](/es/tutorial/como-crear-precios-condicionales).)

Con esta nueva feature, tenemos ahora una nueva entidad de precio llamada *Precios Condicionales*, además de las ya existentes *Precio fijo* y *Precio base*.

El siguiente gráfico explica cómo funciona la cascada de precios:

![tabelapreco.es](https://images.ctfassets.net/alneenqid6w5/2rzzOs9CVogu74GM8Sih9s/9d095bddd449170787604aa602c9bb64/tabelapreco.es.png)

Cuando un precio para un SKU se solicita al módulo de precios:
1. Un *Precio fijo* se selecciona segun sus criterios como **programación** y **cantidad mínima**.
2. Se comprueba si hay algún *Precio Condicional* definido y si esta condición se aplica al usuario que está realizando la compra. En caso de existir, el *Precio Condicional* se utiliza.
3. Si no se ha definido ningún *Precio condicional*, o no se aplica al usuario, se utiliza el *Precio fijo*.
4. Si no hay ningún *Precio fijo* activo, el precio entregado será el *Precio base*.
5. Si no existe un *Precio base* definido, el SKU se mostrará como **inactivo** en la vitrina.

**Notas:**
* Si más de un *Precio Condicional* se aplica a un usuario, el precio aplicado será el de menor valor.
* Un * Precio fijo * puede contener como máximo **3 precios condicionales**.
