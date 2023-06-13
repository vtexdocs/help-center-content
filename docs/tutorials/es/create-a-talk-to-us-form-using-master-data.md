---
title: Crear formulario de Contáctenos usando Master Data
id: frequentlyAskedQuestions_614
status: DRAFT
createdAt: 2019-01-24T20:45:56.562Z
updatedAt: 2021-06-10T20:28:29.450Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:13:16.176Z
contentType: tutorial
productTeam: Master Data
author: authors_31
slug: crear-formulario-de-contactenos-usando-master-data
legacySlug: crear-formulario-de-contactenos-usando-master-data
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

Este artículo tiene como objetivo puntuar todos los detalles necesario para la creación de formulario de Contáctenos (“Fale Conosco”) utilizando Master Data.

**Ajustes necesarios en el Master Data (Dynamic Storage)**

**Crear entidad de datos CONTATO**

Cada contacto será almacenado en una nueva entidad (relacionada al Cliente) en el Master Data. Vea abajo, las definiciones de esa entidad.

Sigla: _CO_
Nombre: _Contato_
Tipo de clave primaria: _Gerar um sequencial numérico (Default)_
Campos:

- _client | Cliente | Relationship | &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221; / &#8220;É filtro&#8221; / &#8220;Entidade de Dados para relacionar = Cliente&#8221; / &#8220;Campo relacionado para visualização = email&#8221;_
- _description | Descrição | Text | &#8220;Público Para Escrita&#8221;_
- _type | Tipo | Varchar 100 | &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221; / &#8220;É filtro&#8221;_

Después de crearlo, no se olvide de publicar la entidad en el listado.

**Cambiar entidad de datos CLIENTE**

Como el formulario de Contáctenos también maneja información del Cliente, algunos campos deben ser modificados en esa entidad. Vea abajo las modificaciones necesarias.

Campos:

- firstName | Nome | Varchar 50 | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221;
- lastName | Sobrenome | Varchar 100 | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221;
- email | Email | Email | &#8220;Publico Para Leitura&#8221; / &#8220;Público Para Escrita&#8221; / &#8220;Público Para Filtrar&#8221; / &#8220;É buscável&#8221;
- homePhone | Telefone Residencial | Telephone | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221;
- phone | Telefone | Telephone | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221;

Después de crearlo, no se olvide de publicar la entidad en el listado.

**Crear trigger CONTÁCTENOS**

Cuando un cliente entra en contacto con la tienda a través del formulario de Contáctenos, el sistema debe disparar e-mails a través de trigger. Sigue, abajo, la definición de la trigger para esa función.

Nombre: _Fale Conosco_
Entidade de dados: _Contacto_
Condición de trigger: _Un registro sea insertado_
Agenda: _Ejecutar lo más rápido posible_
Acciones en caso positivo: _Enviar e-mail (Sugiero enviar uno al cliente y otro al dueño de la tienda)_

**Sugerencia de template de e-mail para dueño de la tienda:**

_Hola Dueño de la tienda,&lt;br /&gt;&lt;br /&gt;_

_La Tienda de Soporte acaba de recibir un nuevo contacto por el formulario de Contáctenos.&lt;br /&gt;&lt;br /&gt;_

_&lt;b&gt;Información del Contacto:&lt;/b&gt;&lt;br /&gt;_
_Nombre: {!client.CL.firstName}&lt;br /&gt;_
_Apellido: {!client.CL.lastName}&lt;br /&gt;_
_Email: {!client.CL.email}&lt;br /&gt;_
_Teléfono: {!client.CL.homePhone}&lt;br /&gt;_
_Celular: {!client.CL.phone}&lt;br /&gt;_
_Tipo: {!type}&lt;br /&gt;_
_Descripción: &lt;br /&gt;{!description}&lt;br /&gt;&lt;br /&gt;_

_Para responder al cliente, basta con responder este e-mail.&lt;br /&gt;&lt;br /&gt;_

_&lt;b&gt;Equipo Tienda de Soporte&lt;/b&gt;_

**Sugerencia de template de e-mail para cliente:**

_Hola, {!client.CL.firstName},&lt;br /&gt;&lt;br /&gt;_

_Gracias por entrar en contacto con nosotros. En breve nuestro equipo entrará en contacto con usted.&lt;br /&gt;&lt;br /&gt;_

_&lt;b&gt;Información del Contacto:&lt;/b&gt;&lt;br /&gt;_
_Nombre: {!client.CL.firstName}&lt;br /&gt;_
_Apellido: {!client.CL.lastName}&lt;br /&gt;_
_Email: {!client.CL.email}&lt;br /&gt;_
_Teléfono: {!client.CL.homePhone}&lt;br /&gt;_
_Celular: {!client.CL.phone}&lt;br /&gt;_
_Tipo: {!type}&lt;br /&gt;_
_Descripción: &lt;br /&gt;{!description}&lt;br /&gt;&lt;br /&gt;_

_&lt;b&gt;Equipo Tienda de Soporte&lt;/b&gt;_

**Creación de template de Contáctenos en el Administrador de Portal**

Después de concluir las configuraciones indicadas arriba, será necesario crear un template en el Administrador de Portal con el formulario, que será responsable de someter la información para la API del Master Data. Sugerimos crear una landing-page para esa función (ex.: /contáctenos).

Para cargar el formulario en el template creado, use el plugin anexado a este artículo y siga las instrucciones abajo.

El plugin fue desarrollado para facilitar la instalación del formulario en el template. Para usarlo, no es necesario definir ninguna estructura HTML, sólo el elemento que recibirá el formulario. Además, será necesario indicar en las configuraciones el nombre de la tienda y la sigla de la entidad de datos, información esencial para la integración por API con el Master Data.

**Atributos de Configuración:**

- storeName: _Indica el nombre de la cuenta utilizada en la API del MasterData_
- dataEntity: _Indica la sigla de la entidad de datos utilizada en la API del MasterData_
- htmlElementId: _Indica el ID del elemento HTML que recibirá el formulario_
- messageLoading: _Mensaje para cargar el formulario (al grabar)_
- messageValidation: _Mensaje de validación de formulario_
- messageSuccess: _Mensaje de éxito_
- messageError: _Mensaje de error_

**Dependencias del Plugin:**

- jQuery
- Bootstrap

[Para más detalles, acceda al ejemplo en anexo](//assets.contentful.com/alneenqid6w5/4rfOv1xQoEuwWYS0sq24QM/3099aa480d85a9ca4d2ce50dfef64a68/contactMasterData.zip "Para más detalles, acceda al ejemplo en anexo").

__Importante__: Este plugin fue desarrollado para ayudar a desarrollar el formulario de Contáctenos usando Master Data. VTEX **NO** ofrece soporte a esa extensión y su código es abierto, pudendo sufrir modificaciones y adaptaciones.
