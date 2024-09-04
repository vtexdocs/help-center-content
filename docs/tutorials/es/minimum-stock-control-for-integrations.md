---
title: 'Control de stock mínimo para integraciones'
id: 5hvUNIiSeJ5QCaZQYpYf1D
status: CHANGED
createdAt: 2020-10-16T15:25:46.901Z
updatedAt: 2024-09-04T14:27:54.489Z
publishedAt: 2023-03-29T16:15:17.491Z
firstPublishedAt: 2020-10-16T17:29:32.622Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: control-de-stock-minimo-para-integraciones
locale: es
legacySlug: control-de-stock-minimo-para-integraciones
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

El control de stock mínimo es una medida de seguridad creada para evitar la venta de productos que cuentan con un stock menor o igual al que el administrador de la tienda definió en la configuración de la integración.  

Esa configuración está disponible en las siguientes integraciones:

- [Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan)
- [B2W/SkyHub](https://help.vtex.com/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/40eYElt1qwIqGeIeum2W4M)
- [Carrefour](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/2AhqcmRN1mseCsGuGIe6GK)
- [Centauro](https://help.vtex.com/pt/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj/4EqL0hADU1AWvP0gTr4nyq)
- [Magazine Luiza](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y/4QWLcDhsh2GSSamouyu6M0)
- [Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi)
- [Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/7o8Vt25LJmAUuMmSWSmWes)
- [Via Varejo](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/1okse2MybWk04AQoueu88O)    

## Cómo funciona

Cuando se alcanza el stock mínimo, la integración envía al marketplace una actualización de stock igual a cero, eso garantiza que no se vendan más productos hasta que se actualice el stock nuevamente. Para que el administrador de la tienda esté al tanto cuando esto suceda, se coloca un aviso en *Marketplace > Integraciones > Valores*.

## Configuración

Para configurar el stock mínimo en su integración, realice los siguientes pasos:

1. Acceda al Admin.
2. En el menú Marketplace > Conexiones, haga clic en **Integraciones**.
3. Seleccione la opción **Configuración**.
4. Elija la integración que desea configurar.
5. Cuando elija la integración, haga clic en el engranaje<img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
6. Seleccione la opción **Editar configuración**.
7. En el campo **Stock mínimo**, ingrese en valor deseado.
8. Finalmente, haga clic en el botón **Guardar configuración**.

Después de realizar lo anterior, el stock mínimo estará disponible para todas las categorías registradas en la integración que eligió. Para verificar el stock de sus productos, acceda al panel del stock en *Marketplace > Integraciones > Valores*.

