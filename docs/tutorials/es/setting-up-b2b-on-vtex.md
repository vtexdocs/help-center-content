---
title: Configurar B2B en VTEX
id: tutorials_238
status: PUBLISHED
createdAt: 2017-04-27T22:13:02.487Z
updatedAt: 2022-10-24T12:34:22.858Z
publishedAt: 2022-10-24T12:34:22.858Z
firstPublishedAt: 2017-04-27T23:03:10.539Z
contentType: tutorial
productTeam: Others
author: authors_3
slug: configurando-b2b-na-vtex
legacySlug: configurando-b2b-na-vtex
subcategory: 2LrbEY7MFeKqmdfYLBCnfi
---

B2B (Business to Business) es la sigla usada en el comercio electrónico para definir transacciones comerciales entre empresas. En otras palabras, es un ambiente en el que una empresa comercializa sus productos a otras empresas.

En VTEX, ambientes B2B normalmente son completamente o parcialmente bloqueados para usuarios anónimos, siendo obligatoria una autenticación para visualizar información comercial de los produtos.

Consulte a continuación los ajustes necesarios para transformar una cuenta en una cuenta B2B en VTEX.

<div class="alert-info">
<p>Todas las tiendas B2B que se preparen para entrar en producción y hacer la configuración final del dominio deben ponerse en contacto con <a href="https://support.vtex.com/hc/pt-br/requests">nuestro Soporte</a> con antelación y solicitar que se haga la configuración interna.</p>
</div>

## Prerrequisito

Si ya tienes una tienda B2C (Business to Consumer) en VTEX, antes de seguir los pasos descritos a continuación, debes crear una multitienda para tu operación B2B. Consulte el artículo [Crear multitienda / multidominio](https://help.vtex.com/es/tutorial/como-crear-multitienda-multidominio--tutorials_510) para obtener más información.

## 1. Incluir regla condicional en la Política Comercial del B2B

Este es el paso más importante para activar el B2B. Al configurar la Política Comercial del B2B, debe rellenar el campo __Regra Condicional__ para definir a los usuarios que podrán navegar en su sitio.

Normalmente, en los B2Bs convencionales, este campo se rellena con el valor `approved="true"` (`approved` es el nombre de un campo en la entidad __Cliente__, en el Master Data). Con esa regla, el sistema sólo dejará que usuarios autenticados y aprobados naveguen en el sitio.

![](//images.contentful.com/alneenqid6w5/34rM0gmlgQOoqwwEG2c0ck/a506984d2e7c23381e05a6ad16306d9f/1.png)

## 2. Personalizar layout de directorios B2B

El B2B convencional exige navegación autenticada y aprobada, o sea, usuarios anónimos o no aprobados no tendrán acceso a la información comercial de los productos mientras no cumplan esas exigencias.

Vea las características básicas de cada tipo de usuario:

- **Usuario Anónimo**: es aquel que no se ha logado, o sea, no se autenticó en el sitio. Ese tipo de usuario no podrá visualizar información del producto. Éste será dirigido al directorio **/sistema/401** (No autorizado).
- **Usuario no aprobado**: es aquel que ya tiene registro y está logado, pero su registro no cumple la regla condicional definida en la política comercial. En líneas generales, su registro en el CRM no cumple la regla condicional. Este tipo de usuario no podrá visualizar información del producto. Éste será dirigido al directorio **/sistema/403** (Prohibido).
 - **Usuario aprobado**: es aquel que ya tiene registro y su registro cumple la regla condicional definida en la política comercial. Este tipo de usuario podrá visualizar información de los produtos.

Así, para tener un ambiente B2B, será necesario personalizar las carpetas **401** y **403**, hijas de la carpeta **sistema**.

![](//images.contentful.com/alneenqid6w5/4eOGUWH7nWqyQGCmIou6WO/1910b62f54515007e85aa3a82d04fb9e/2.png)

Navegación por un usuario Anónimo (al intentar acceder cualquier página, será dirigido al 401):

![](//images.contentful.com/alneenqid6w5/1bxTbhKatws2mgGiOGSUYW/8bf8e626bf53a8e785ffdcc5f2ffc813/3.png)

Navegación por un usuario no aprobado (al intentar acceder cualquier página, será dirigido al 403):

![](//images.contentful.com/alneenqid6w5/1Ep24Fgl1SIG6Uw8Wmkq42/2a995f8d9c2be0e92629447c1e6d3948/4.png)

## 3. Definir campos de registro previo

El usuario que aún no está registrado en el sitio necesita tener una interface para realizar el registro previo. El registro previo es un formulario con informaciones básicas del usuario. A pesar de básica, esa información debe ser suficiente para que el dueño de la tienda lo apruebe y lo libere para navegar en el sitio.

Así, es necesario definir los campos de este registro previo. Normalmente, los B2Bs usan información de cliente (nombre, e-mail, teléfono, etc.) y dirección (calle, barrio, ciudad, etc.) para este registro previo. Consulte el artículo [Importar datos de clientes](https://help.vtex.com/es/tutorial/importando-dados-de-clientes-brasil--2zWYVOyj0sISYQmeUwCsI0 "Importar datos de clientes - Brasil") para obtener más información sobre los datos necesarios.

<div class="alert alert-warning">
  <p>El campo utilizado como regla condicional en la política comercial nunca podrá hacer parte de este formulario, una vez que el propio usuario no puede realizar su propia aprobación. Esta responsabilidad es de la tienda.</p>
</div>

## 4. Crear formulario de registro prévio

Luego de definir los campos, deberá crear el formulario de registro previo en la carpeta **/sistema/401**, que es la única carpeta adonde el usuario anónimo siempre será dirigido.

La información colocada en el formulario deberá ser enviada al CRM a través de las APIs del Master Data ([vea documentación](https://developers.vtex.com/reference/master-data-api-v2-overview)), o sea, será necesario desarrollar un JavaScript para aplicar esta función. Para ello, consulte un [ejemplo de plantilla HTML y JavaScript](//assets.contentful.com/alneenqid6w5/5PJaFVGdOwomgCYG66g2M4/ac29ba69fdd11cb8c87b88a0a6a62795/ExemploTemplateB2B.rar "Ejemplo de plantilla HTML y JavaScript").

## 5. Operación

Con todo configurado y, finalmente, el B2B en producción, la rutina del dueño de la tienda dependerá de las reglas y necesidades de su negocio. Básicamente, a cada nuevo registro, el dueño de la tienda deberá evaluar al usuario, aprobándolo o no, en la interface del CRM, al que se puede acceder a través de la URL `http://{nombre_de_cuenta}.vtexcrm.com.br/`.

<div class="alert alert-info">
  <p>Este artículo describe las configuraciones básicas de un B2B, pero, es posible personalizar el sistema para esa necesidad de varias formas, incluso enviando emails (triggers) a partir de eventos predefinidos.</p>
</div>
