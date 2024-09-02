---
title: 'Solicitar la eliminación de los datos personales de los clientes según las leyes internacionales sobre la privacidad de datos'
id: 34Sd4DN6fOk5odkjIAedpE
status: DRAFT
createdAt: 2022-04-11T21:00:56.085Z
updatedAt: 2022-04-27T13:02:50.770Z
publishedAt: 
firstPublishedAt: 2022-04-11T22:24:38.940Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: solicitar-la-eliminacion-de-los-datos-personales-del-cliente-segun-las-leyes
locale: es
legacySlug: solicitar-la-eliminacion-de-los-datos-personales-del-cliente-segun-las-leyes
subcategory: 6uJgdHqWf1Mo0rUfgxseTn
---

Nuestra plataforma posee herramientas que se actualizan constantemente para hacer más fácil y transparente el cumplimiento de las leyes de protección de datos personales de los clientes por parte de las empresas. 

En la comunidad internacional, existen leyes sobre la protección de datos. Una de estas leyes es el [Reglamento general de protección de datos (RGPD)](https://rgpd.es/) de la Unión Europea, vigente desde 2018. En Brasil, la [Ley general de protección de datos personales (LGPD)](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) está vigente desde 2020.

En general, las leyes de los distintos países otorgan derechos sobre sus propios datos a los titulares, ya que se los considera los propietarios de dichos datos. Uno de esos derechos es que sus datos se eliminen de sistemas como VTEX.

Existen dos etapas para la eliminación de datos:

1. [Configurar datos en el Master Data](#configurar-datos-en-el-master-data)
2. [Abrir un ticket en Soporte VTEX](#abrir-un-ticket-en-soporte-vtex)

## Configurar datos en el Master Data

Configurar los datos en el Master Data es la primera etapa para eliminar los datos confidenciales. Allí, se almacenan los datos de los usuarios finales, como la identificación personal, la información confidencial y el domicilio.

Las leyes de privacidad determinan que los datos personales de los titulares no se deben compartir o exponer de forma indebida. Por ende, se necesitan ciertas configuraciones para garantizar la protección de esos datos.

>⚠️ Las configuraciones guardadas no se podrán modificar.

Para activar esta configuración, sigue los pasos a continuación:

1. Accede a la URL `https://<account>.ds.vtexcrm.com.br/` y reemplaza `<account>` por el nombre de tu tienda.
2. Selecciona la opción **Data Entity**.
3. En la columna *Acronyms*, selecciona los ítems con las siglas **CL** (cliente) y **AD** (dirección) que deseas configurar.
4. En la columna *Actions*, haz clic en la opción `Edit`.
5. Elige el dato de la pestaña Fields que desees editar y haz clic en el `ícono de engranaje` <i class="fas fa-cog"></i>.
6. En General Settings, selecciona las opciones que desees.
   * **Is nullable?:** indica que el campo es nulo.
   * **Make readable without credentials:** permite que cualquier persona lea ese campo sin registrarse. Te sugerimos que no marques este campo en el caso de datos personales o confidenciales.
   * **Allow editing without credentials:** permite que cualquier persona modifique el valor del campo sin registrarse.
   * **Allow filter without credentials:** permite que cualquier persona busque usuarios mediante el valor del campo sin registrarse.
7. Haz clic en `Guardar`.

## Abrir un ticket en Soporte VTEX

Después de configurar los datos en el Master Data, deberás solicitar la extensión de la eliminación de los datos personales de tus clientes también en los sistemas de VTEX mediante la apertura de un ticket en nuestro [Soporte VTEX](https://help.vtex.com/es/support).

>⚠️ Solicita la eliminación de los datos de una sola cuenta, es decir, se podrá eliminar el email de un solo comprador por ticket. Si incluyes más de un email, el ticket se rechazará.

Para solicitar la eliminación de los datos personales de clientes, sigue los pasos a continuación:

1. Accede a [Soporte VTEX](https://help.vtex.com/es/support).
2. Ingresa tu nombre completo en el campo **Nombre** y selecciona en el campo **Tienda** el nombre de la tienda para la cual deseas abrir el ticket.
3. Haz clic en la opción `Continuar`.
4. Selecciona la opción `Técnico`.
5. En el campo **Tipo de problema**, selecciona la opción `Quiero solicitar una configuración`.
6. En el campo **Asunto de la solicitud**, deberás rellenar la siguiente información:
   * Solicitud de Data Subject Request
   * Cuentas VTEX
   * Email vinculado a las cuentas VTEX cuyos datos deben eliminarse
7. En el campo **Tu experiencia con la plataforma**, selecciona la opción correspondiente a tu experiencia como usuario de la plataforma VTEX.
8. Rellena el campo **Describe en detalle lo sucedido** con los detalles de tu solicitud.
9. Haz clic en `Enviar`.

La solicitud se enviará a nuestro equipo de soporte. Al cerrar el ticket, se emitirá un certificado que se enviará al email relacionado con la cuenta por la cual se abrió el ticket para comprobar que realmente se eliminaron los datos.
