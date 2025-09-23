---
title: 'Configurar B2B en VTEX'
id: tutorials_238
status: PUBLISHED
createdAt: 2017-04-27T22:13:02.487Z
updatedAt: 2022-10-24T12:34:22.858Z
publishedAt: 2022-10-24T12:34:22.858Z
firstPublishedAt: 2017-04-27T23:03:10.539Z
contentType: tutorial
productTeam: Others
author: authors_3
slugEN: setting-up-b2b-on-vtex
legacySlug: configurando-b2b-na-vtex
locale: es
subcategoryId: 2LrbEY7MFeKqmdfYLBCnfi
---

B2B (Business to Business) es la sigla usada en el comercio electrónico para definir transacciones comerciales entre empresas. En otras palabras, es un ambiente en el que una empresa comercializa sus productos a otras empresas.

En VTEX, ambientes B2B normalmente son completamente o parcialmente bloqueados para usuarios anónimos, siendo obligatoria una autenticación para visualizar información comercial de los produtos.

Consulte a continuación los ajustes necesarios para transformar una cuenta en una cuenta B2B en VTEX.

<div class="alert-info">
Todas las tiendas B2B que se preparen para entrar en producción y hacer la configuración final del dominio deben ponerse en contacto con [nuestro Soporte](https://support.vtex.com/hc/pt-br/requests) con antelación y solicitar que se haga la configuración interna.
</div>

## Prerrequisito

Si ya tienes una tienda B2C (Business to Consumer) en VTEX, antes de seguir los pasos descritos a continuación, debes crear una multitienda para tu operación B2B. Consulte el artículo [Crear multitienda / multidominio](/es/tutorial/como-crear-multitienda-multidominio--tutorials_510) para obtener más información.

## 1. Incluir regla condicional en la Política Comercial del B2B

Este es el paso más importante para activar el B2B. Al configurar la Política Comercial del B2B, debe rellenar el campo __Regra Condicional__ para definir a los usuarios que podrán navegar en su sitio.

Normalmente, en los B2Bs convencionales, este campo se rellena con el valor `approved="true"` (`approved` es el nombre de un campo en la entidad __Cliente__, en el Master Data). Con esa regla, el sistema sólo dejará que usuarios autenticados y aprobados naveguen en el sitio.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/b2b/gu%C3%ADas-pr%C3%A1ticas/configurando-b2b-na-vtex_1.png)

## 2. Personalizar layout de directorios B2B

El B2B convencional exige navegación autenticada y aprobada, o sea, usuarios anónimos o no aprobados no tendrán acceso a la información comercial de los productos mientras no cumplan esas exigencias.

Vea las características básicas de cada tipo de usuario:

- **Usuario Anónimo**: es aquel que no se ha logado, o sea, no se autenticó en el sitio. Ese tipo de usuario no podrá visualizar información del producto. Éste será dirigido al directorio **/sistema/401** (No autorizado).
- **Usuario no aprobado**: es aquel que ya tiene registro y está logado, pero su registro no cumple la regla condicional definida en la política comercial. En líneas generales, su registro en el CRM no cumple la regla condicional. Este tipo de usuario no podrá visualizar información del producto. Éste será dirigido al directorio **/sistema/403** (Prohibido).
 - **Usuario aprobado**: es aquel que ya tiene registro y su registro cumple la regla condicional definida en la política comercial. Este tipo de usuario podrá visualizar información de los produtos.

Así, para tener un ambiente B2B, será necesario personalizar las carpetas **401** y **403**, hijas de la carpeta **sistema**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/b2b/gu%C3%ADas-pr%C3%A1ticas/configurando-b2b-na-vtex_2.png)

Navegación por un usuario Anónimo (al intentar acceder cualquier página, será dirigido al 401):

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/b2b/gu%C3%ADas-pr%C3%A1ticas/configurando-b2b-na-vtex_3.png)

Navegación por un usuario no aprobado (al intentar acceder cualquier página, será dirigido al 403):

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/b2b/gu%C3%ADas-pr%C3%A1ticas/configurando-b2b-na-vtex_4.png)

## 3. Definir campos de registro previo

El usuario que aún no está registrado en el sitio necesita tener una interface para realizar el registro previo. El registro previo es un formulario con informaciones básicas del usuario. A pesar de básica, esa información debe ser suficiente para que el dueño de la tienda lo apruebe y lo libere para navegar en el sitio.

Así, es necesario definir los campos de este registro previo. Normalmente, los B2Bs usan información de cliente (nombre, e-mail, teléfono, etc.) y dirección (calle, barrio, ciudad, etc.) para este registro previo. Consulte el artículo [Importar datos de clientes](/es/tutorial/importando-dados-de-clientes-brasil--2zWYVOyj0sISYQmeUwCsI0 "Importar datos de clientes - Brasil") para obtener más información sobre los datos necesarios.

> ⚠️ El campo utilizado como regla condicional en la política comercial nunca podrá hacer parte de este formulario, una vez que el propio usuario no puede realizar su propia aprobación. Esta responsabilidad es de la tienda.

## 4. Crear formulario de registro prévio

Luego de definir los campos, deberá crear el formulario de registro previo en la carpeta **/sistema/401**, que es la única carpeta adonde el usuario anónimo siempre será dirigido.

La información colocada en el formulario deberá ser enviada al CRM a través de las APIs del Master Data ([vea documentación](https://developers.vtex.com/reference/master-data-api-v2-overview)), o sea, será necesario desarrollar un JavaScript para aplicar esta función. Para ello, consulte un [ejemplo de plantilla HTML y JavaScript](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/es/tutorials/b2b/guías-práticas/ExemploTemplateB2B.rar).

## 5. Operación

Con todo configurado y, finalmente, el B2B en producción, la rutina del dueño de la tienda dependerá de las reglas y necesidades de su negocio. Básicamente, a cada nuevo registro, el dueño de la tienda deberá evaluar al usuario, aprobándolo o no, en la interface del CRM, al que se puede acceder a través de la URL `http://{nombre_de_cuenta}.vtexcrm.com.br/`.

> ℹ️ Este artículo describe las configuraciones básicas de un B2B, pero, es posible personalizar el sistema para esa necesidad de varias formas, incluso enviando emails (triggers) a partir de eventos predefinidos.
