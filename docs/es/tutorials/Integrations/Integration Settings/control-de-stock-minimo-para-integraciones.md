---
title: 'Control de stock mínimo para integraciones'
id: 5hvUNIiSeJ5QCaZQYpYf1D
status: PUBLISHED
createdAt: 2020-10-16T15:25:46.901Z
updatedAt: 2024-09-13T19:35:42.177Z
publishedAt: 2024-09-13T19:35:42.177Z
firstPublishedAt: 2020-10-16T17:29:32.622Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: minimum-stock-control-for-integrations
locale: es
legacySlug: control-de-stock-minimo-para-integraciones
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

El control de stock mínimo es una medida de seguridad creada para evitar la venta de productos que cuentan con un stock menor o igual al que el retailer definió en la configuración de la integración.  

Esa configuración está disponible en las siguientes integraciones:

- [Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan)
- [B2W/SkyHub](https://help.vtex.com/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/40eYElt1qwIqGeIeum2W4M)
- [Carrefour](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/2AhqcmRN1mseCsGuGIe6GK)
- [Centauro](https://help.vtex.com/pt/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj/4EqL0hADU1AWvP0gTr4nyq)
- [Dafiti](https://help.vtex.com/es/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i/5lAIj7OCqizD5EisLJvatx)
- [Magazine Luiza](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y/4QWLcDhsh2GSSamouyu6M0)
- [Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi)
- [Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/7o8Vt25LJmAUuMmSWSmWes)
- [Casas Bahia](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/3rymwJDuc5Z6lQtsyTINim)    

## Cómo funciona

Cuando se alcanza el stock mínimo, la integración envía al marketplace una actualización de stock igual a cero, eso garantiza que no se vendan más productos hasta que se actualice el stock nuevamente. Para que el retailer esté al tanto cuando esto suceda, se muestra un aviso en la página de stock, a la que puedes acceder desde **Marketplace > Conexiones > Stock**.  

## Configuración

Para configurar el stock mínimo en su integración, realice los siguientes pasos:

1. En el Admin VTEX accede a **Marketplace > Conexiones > Marketplaces e integraciones.**  
2. Selecciona la integración deseada.  
3. Haz clic en el botón `Editar`.  
4. En el campo **Stock mínimo,** ingresa el valor deseado.  
5. Haz clic en `Guardar`.  

Después de completar los pasos, el stock mínimo estará disponible para todas las categorías registradas en la integración que elegiste. Para verificar el stock de tus productos, accede al dashboard del stock en  **Marketplace > Conexiones > Stock.**

