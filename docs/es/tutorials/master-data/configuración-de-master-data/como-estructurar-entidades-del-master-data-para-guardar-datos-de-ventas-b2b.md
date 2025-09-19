---
title: 'Cómo estructurar entidades del Master Data para guardar datos de ventas B2B'
id: 7vHtMxXLc9oYnEfajjtTqL
status: PUBLISHED
createdAt: 2020-05-29T12:32:31.968Z
updatedAt: 2021-11-24T13:35:52.020Z
publishedAt: 2021-11-24T13:35:52.020Z
firstPublishedAt: 2020-05-29T12:50:42.308Z
contentType: tutorial
productTeam: Master Data
author: 127RQ7SUoFfyTh5gbXUpdM
slugEN: how-to-structure-master-data-entities-to-store-b2b-sales-data
legacySlug: como-estructurar-entidades-del-master-data-para-guardar-datos-de-ventas-b2b
locale: es
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

Por medio del [Master Data](/es/tutorial/what-is-master-data--4otjBnR27u4WUIciQsmkAw) — el módulo de VTEX que permite la creación de arquitecturas de bases de datos— es posible recoger, almacenar y poner a disposición datos en los más diversos formatos para los clientes y usuarios administrativos de una tienda. Este es un módulo de la plataforma VTEX que puede ser configurado de dos maneras:
- Utilizando un Sistema de Gestión de Contenido (CMS) interno al panel administrativo de la tienda.
- Por medio del envío de requests a la [API del Master Data](https://developers.vtex.com/reference/master-data-api-v2-overview).

Los datos almacenados se describen mediante [Entidades de Datos](/es/tutorial/creating-data-entities--tutorials_1265), que son modelos representativos que permiten al Master Data validar la información recibida y crear formularios. El sistema permite crear [conexiones entre los datos](/es/tutorial/creating-relationships-between-data-entities--6TdIa6Q2IgWYUu2wsYIG48) de diferentes entidades, además de ofrecer una serie de posibilidades de automatización. 

Un ejemplo son los [Triggers](/es/tutorial/criando-trigger-no-master-data--tutorials_1270) que pueden activarse por cambios en los datos almacenados y pueden generar efectos como el envío de correos electrónicos y otras alteraciones en esos datos. Comprenda más sobre todas las diferentes configuraciones posibles de este módulo en la [documentación oficial del Master Data](/es/subcategory/configuracoes-de-master-data--5tSNDlvmik8gGuKw2goW4q).

## Modelando estructuras de ventas y metas

Una de las aplicaciones recurrentes del Master Data es la __representación de las estructuras de ventas de una operación B2B__. Las tiendas pueden contar con varios representantes comerciales con funciones diferentes, y es de gran valor conseguir rastrear sus ventas, además de establecer y acompañar sus metas. A continuación, veamos algunos ejemplos de Entidades de Datos que pueden crearse o personalizarse para aplicaciones B2B.

### Representante o RCA

Una tabla de representantes o de Representantes Comerciales Autónomos puede ser útil para controlar a todos aquellos que realizan ventas en nombre de una operación B2B, además de permitir la generación de informes mejor filtrados.

Algunos campos importantes en las tablas con este objetivo son:
- Nombre y correo electrónico del representante
- Nombre e ID del supervisor
- Marcas representadas
- Región de actuación
- ¿Es usuario administrativo?
  - ID de usuario administrativo

### Supervisor

Una tabla de supervisores permite asociar a cada representante comercial o RCA con un supervisor que gestionará su trabajo, además de dar control sobre los datos de este supervisor.

Algunos campos importantes en las tablas con este objetivo son:
- Nombre del supervisor
- Correo electrónico del supervisor
- Teléfono
- ID de usuario administrativo

### Clientes

Toda tienda tiene una Entidad de Datos que configura la tabla de clientes. Es posible añadir campos a esta entidad siguiendo los pasos del artículo [Crear un campo en el Master Data](/es/tutorial/how-can-i-create-field-in-master-data--frequentlyAskedQuestions_1829). De esta manera, cuando un cliente visita una tienda, el front-end tiene acceso a información relevante sobre su posición en la estructura de ventas y puede presentar una experiencia personalizada. Además, se puede limitar el acceso a la tienda apenas para los clientes aprobados, como se explica en el artículo [Configurar B2B en VTEX](/es/tutorial/configurando-b2b-na-vtex).

Algunos campos importantes que pueden ser añadidos a la tabla de Clientes son:
- ID del representante/RCA
- ¿Es Empresa?
- Datos de la Empresa
  - CNPJ (Registro Nacional de Persona Jurídica) 
  - Razón Social
  - Nombre de Fantasía
  - Teléfono Comercial
  - Inscripción Estadual
- ¿Registro aprobado?
- Canal de compras

### Metas

Una tabla de metas permite controlar las metas de ventas de los representantes y los RCA, se pueden definir políticas como el ciclo de validez de tales metas, así como detalles específicos como regiones geográficas de acción y metas por marcas y productos. 

Algunos campos importantes en las tablas con este objetivo son:
- ID del representante/RCA
- Región del ciclo
- Fecha de inicio del ciclo
- Fecha final del ciclo
 - Valor de la meta
  - Por producto
  - Por Marca
- Valor alcanzando 
- Valor de retorno

## Ingreso de datos en el Master Data

Además de presentar una poderosa herramienta para modelar estructuras de datos, el sistema de gestión de contenido del Master Data, al que se accede a través del panel administrativo de VTEX, ofrece varias formas de rellenar las tablas que estructuran el contenido.

### Formularios

El CMS del Master Data permite configurar formularios para rellenar las tablas modeladas. Es útil para la información que será ingresada y editada por usuarios administrativos, ya que es posible limitar su uso utilizando [perfiles de acceso](/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc). 

Puede aprender a configurar estos formularios accediendo al artículo [Crear Formulario en el Master Data](/es/tutorial/creating-form-in-master-data--tutorials_1047). También puede crear una Aplicación, que es un agrupador de formularios, siguiendo los pasos del artículo [Crear Aplicación en el Master Data](/es/tutorial/creating-an-application-in-master-data--tutorials_1115).

### Front-end o API

Los formularios también pueden presentarse a través del front-end para que los clientes los rellenen, como se describe en el artículo [Crear formulario de contáctenos utilizando el Master Data](/es/tutorial/criar-formulario-de-fale-conosco-usando-master-data--frequentlyAskedQuestions_614). Otra forma de acceder a los datos en el front-end o en diferentes integraciones es a través de la [API del Master Data](https://developers.vtex.com/reference/master-data-api-v1-overview).

### Triggers

Los eventos en una entidad de datos del Master Data pueden disparar alteraciones en los datos. Para entender mejor, acceda al artículo [Crear trigger en el Master Data v1](/es/tutorial/criando-trigger-no-master-data--tutorials_1270).

### Envío masivo 

También es posible rellenar tablas de forma masiva enviando plantillas, como se explica en el artículo [Importar datos en el Master Data](/es/tutorial/importing-data-into-master-data--tutorials_1135).

## Más información

- [Qué es el Master Data](/es/tutorial/what-is-master-data--4otjBnR27u4WUIciQsmkAw)
- [API del Master Data](https://developers.vtex.com/reference/master-data-api-v2-overview)
- [Crear entidades de datos](/es/tutorial/creating-data-entities--tutorials_1265)
- [Crear relacionamentos entre entidades de datos](/es/tutorial/creating-relationships-between-data-entities--6TdIa6Q2IgWYUu2wsYIG48)
- [Como crear un trigger en el Master Data](/es/tutorial/criando-trigger-no-master-data--tutorials_1270)
- [Crear un campo en el Master Data](/es/tutorial/how-can-i-create-field-in-master-data--frequentlyAskedQuestions_1829)
- [Configurar B2B en VTEX](/es/tutorial/configurando-b2b-na-vtex)
- [Crear formulario en el Master Data](/es/tutorial/creating-form-in-master-data--tutorials_1047)
- [Crear aplicación en el Master Data](/es/tutorial/creating-an-application-in-master-data--tutorials_1115)
- [Crear formulario de Contáctenos utilizando el Master Data](/es/tutorial/criar-formulario-de-fale-conosco-usando-master-data--frequentlyAskedQuestions_614)
- [Importar datos en el Master Data](/es/tutorial/importing-data-into-master-data--tutorials_1135)
