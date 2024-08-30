---
title: 'Integración con WhatsApp'
id: 33sM0SVrwffWhAhAgiGrZb
status: DRAFT
createdAt: 2022-08-23T15:11:28.551Z
updatedAt: 2024-01-05T17:14:09.083Z
publishedAt: 
firstPublishedAt: 2022-08-23T17:47:05.529Z
contentType: trackArticle
productTeam: Shopping
slug: integracion-de-whatsapp
locale: es
trackId: 5UZ9BdvwwtZm2t9QTXcbZs
trackSlugES: conversational-commerce
---

Actualmente, el comercio conversacional de VTEX se integra solo con la aplicación de mensajería WhatsApp. Para empezar a utilizarlo, deberás crear una integración con la aplicación de mensajería. La tienda necesita un número de teléfono centralizado para interactuar con tus clientes. Dicho número solo está disponible para las cuentas _Business_. También deberás crear una cuenta de [WhatsApp Business](https://business.whatsapp.com/). 

Te recomendamos que tu tienda tenga un número de teléfono de WhatsApp Business dedicado exclusivamente a las ventas, ya que puedes tener más de un número asociado a una cuenta y ese otro número puede estar dedicado a la relación con el cliente, por ejemplo. Si tu tienda aún no tiene una cuenta de WhatsApp Business o si la tiene pero la administra otro _partner_, deberás crear una cuenta nueva, lo cual puede hacerlo [el propio VTEX en nombre de la tienda (OBO)](#creacion-por-parte-de-vtex) o [por parte del cliente en el Admin VTEX](#creacion-por-parte-del-cliente-en-el-admin-vtex). 

Para crear una cuenta de WhatsApp Business deberás:

* Tener una cuenta en el [Administrador comercial](https://es-la.facebook.com/business/tools/business-manager), la plataforma que gestiona todas las actividades de publicidad y marketing en Facebook. Esta información es obligatoria.
* Crear un número de teléfono que estará asociado a WhatsApp Business y usarán los clientes que quieran contactarse a través de WhatsApp. Esta información es obligatoria. Dicho número deberá cumplir con los criterios a continuación: 
    * Tener código de país y de área, por ejemplo, un teléfono fijo o celular.
    * Pertenecer a la empresa.
    * Estar habilitado para recibir llamadas de voz o SMS.
    * No ser un código corto, como los números usados para contacto por SMS con pocos números.
    * Que no se haya usado anteriormente en la plataforma de WhatsApp Business.

## Creación por parte de VTEX

Para que VTEX haga la integración con WhatsApp Business en nombre de la tienda, además de la información descripta anteriormente, es necesario enviar los siguientes datos [en un ticket de soporte](https://support.vtex.com/hc/es-419/requests):

* Identificación de tu empresa en el [Administrador comercial](https://es-la.facebook.com/business/tools/business-manager) que estará asociada a la cuenta de WhatsApp Business. Para encontrar la identificación, sigue los pasos que se describen en este [artículo](https://www.facebook.com/business/help/1181250022022158?id=180505742745347). El administrador del perfil deberá estar disponible para aprobar la creación de WhatsApp Business que llegará a través del Administrador comercial. Este proceso suele demorar, en promedio, 3 días laborales. 
* Nombre de WhatsApp Business y del perfil que verán los clientes, y del logo a utilizar.
* Número de teléfono que se usará.

Además de enviar esta información, el administrador debe autorizar los siguientes datos a través del [Administrador comercial](https://es-la.facebook.com/business/tools/business-manager):

* Permiso para que VTEX envíe mensajes en nombre de la empresa.
* Nombre que se usará para la cuenta y que aparecerá en la conversación con el cliente.
* Número de teléfono.

También recomendamos [verificar tu tienda con Meta](https://www.facebook.com/business/help/1095661473946872?id=180505742745347). Esta etapa es opcional para la integración, pero es obligatoria si:

* Deseas iniciar conversaciones, como avisar a los clientes del seguimiento de sus productos a través de WhatsApp.
* Deseas que tu cuenta comercial sea [oficial](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=BR&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Foverview%2Fbusiness-accounts%2F%3Ftranslation%23official-business-account&event_type=click&last_nav_impression_id=0txQ0CoZfJfxi7cez&max_percent_page_viewed=44&max_viewport_height_px=869&max_viewport_width_px=1794&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Foverview%2Fbusiness-accounts%2F%3Ftranslation&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Ftranslation%26path1%3Dwhatsapp%26path2%3Doverview%26path3%3Dbusiness-accounts&region=latam&scrolled=true&session_id=2nAsnwfEzmFrzLZoM&site=developers), es decir, que permita mostrar el nombre de tu tienda en vez del número de teléfono en la lista junto con el sello <img src="//images.ctfassets.net/alneenqid6w5/4DNjQiVYTI24Wjt3t9CRfG/8e1ec0ab6bb167b4ff0de2547243354f/101835379_284952909300321_643050663994982400_n.png" alt="selo oficial whatsapp" width="25"/>.

## Creación por parte del cliente en el Admin VTEX

Para crear WhatsApp Business a través del Admin VTEX, ponte en contacto con el soporte de VTEX para instalar la app VTEX Conversational commerce en la cuenta de tu tienda. Para ello, debes:

* Confirmar la cuenta que se utilizará para el canal.
* Autorizar la instalación de la aplicación.

Una vez instalada la aplicación, VTEX compartirá la URL del Admin de VTEX Conversational commerce para configurar WhatsApp Business. Para realizar la configuración, es importante disponer de la siguiente información:

* Cuenta en [Gerenciador de Negócios](https://es-la.facebook.com/business/tools/business-manager) asociada a WhatsApp Business.
* Número de teléfono creado para Conversational commerce VTEX. El número debe estar en un teléfono móvil para su validación.

Con esta información, sigue los pasos a continuación.

1. Accede al VTEX Admin a través de la URL que te ha enviado el equipo de soporte. Verás la siguiente pantalla:
![Track 101 - Conversational Commerce 1 - PT](https://images.ctfassets.net/alneenqid6w5/Zg2VTR41pSMleFi6bpcLT/cf9fb66691f9ec8f18a184099c70f3bf/Screenshot_2022-10-04_at_18-05-46_Track_101_-_Conversational_Commerce.png)
2. Haz clic en el botón `Configurar la cuenta de WhatsApp Business`.
3. Se abrirá una ventana de Facebook para la configuración. Inicia sesión con el perfil de administrador deseado de Business Manager.
4. Selecciona la opción `Crear una cuenta de WhatsApp Business`.
5. Introduce el nombre de la cuenta que se mostrará como nombre de perfil en WhatsApp.
6. Selecciona la categoría y introduce la descripción de la cuenta. 
![Track 101 - Conversational Commerce 2 - PT](https://images.ctfassets.net/alneenqid6w5/1DbUwuYgXSleNYBzDnS72n/e935883f195905d78f9c2209b1cc324b/Screenshot_2022-10-04_at_18-07-00_Track_101_-_Conversational_Commerce.png)
7. Verifica el número de teléfono que se asociará a la cuenta mediante el código enviado al teléfono.
8. Comunica al equipo de soporte de VTEX para que finalice la configuración.

Una vez completada la configuración, se mostrará la alerta de abajo en el Admin. 

![Track 101 - Conversational Commerce 3 - PT](https://images.ctfassets.net/alneenqid6w5/3RkQDfGaL3r5KV7j8uTXRH/6f32bb6973f7762a6eb06f12cd596e32/Screenshot_2022-10-04_at_18-07-47_Track_101_-_Conversational_Commerce.png)

