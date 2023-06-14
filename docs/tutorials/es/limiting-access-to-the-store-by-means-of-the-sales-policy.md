---
title: 'Limitar acceso a la tienda por política comercial'
id: tutorials_3063
status: PUBLISHED
createdAt: 2017-04-27T21:52:28.228Z
updatedAt: 2023-03-28T23:21:55.016Z
publishedAt: 2023-03-28T23:21:55.016Z
firstPublishedAt: 2017-04-27T23:03:54.732Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: limitar-acceso-la-politica-comercial-la-tienda
locale: es
legacySlug: limitar-acceso-la-politica-comercial-la-tienda
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

La limitación en el acceso a una tienda puede ser implementado por diversas razones, como por ejemplo cuando la tienda tiene un sitio B2B que sólo permite a las empresas registradas y autorizadas llevar a cabo la exploración del sitio o cuando es un ambiente para clientes exclusivos, por ejemplo.

Este escenario se puede cumplir mediante el uso de Master Data v1 y la política comercial utilizada en la tienda.

<div class="alert alert-warning">
Este artículo describe el funcionamiento de Master Data v1. Es importante evaluar cuál versión de Master Data satisface las necesidades de tu operación o ya está en uso.
 <ul>
<li>
<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
Características de las versiones de Master Data
 </a>
</li>
<li>
<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
Master Data v2
 </a>
</li>
</ul>
</div>

## Creación de cluster de clientes

El primer paso es crear un clúster que la identificación de los clientes que pueden acceder a la tienda. [Para aprender cómo crear un grupo de clientes, visite nuestro manual.](/es/faq/como-crear-un-cluster-de-cliente/)

## Cambio de Política Comercial

Después de crear el clúster, debe crear la regla en la política comercial de manera que sólo los clientes dentro de ese grupo puedan acceder al sitio.

1. En el menú lateral del Admin, haz clic en **Configuración de la tienda** > **Canales** > **Políticas Comerciales**.
2. En la política comercial utilizada, haga clic en __Cambiar__.
3. En el campo de la **Regla condicional**, rellene el valor **NombreDelCluster=”true”**. Tenga en cuenta que el valor **NombreDelCluster** debe de ser cambiado por el nombre del campo en la entidad de datos.
4. Haga click en el botón **Guardar**.

![Cluster ES](https://images.ctfassets.net/alneenqid6w5/6HrVnG5C8MgU0MkKSSAQCG/c273901469be8b3b4edeecd3863d4ef4/Cluster_ES.png)

En la configuración anterior, sólo los clientes con el valor verdadero (utilizando un campo booleano - cuando los datos son verdaderos o falsos) tendrán acceso al sitio.

Sin embargo, hay otras opciones de configuración. Se puede configurar, por ejemplo, __NombreDelCluster="false"__ - donde sólo los clientes con valor __false__ en el campo tendrán acceso al sitio o __NombreDelCluster="smith"__ - donde solamente los clientes con un valor Silva en el campo utilizado para el clúster, tendrá acceso al sitio.

## Registrar los clientes que pueden acceder

Para el caso de B2B, donde la tienda no sabe qué clientes pueden acceder, se debe crear una forma en que las empresas registren sus datos. A través del Master Data se comprobará la verificación de datos y se dará acceso o no a la tienda. [Para realizar este ajuste, visite nuestro manual para las tiendas B2B.](/es/tutorial/configurando-b2b-na-vtex/)

#### **SEPA MÁS**

- [Estrategias de marketplace en VTEX](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402?&utm_source=autocomplete)
- [Como funciona una Política Comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)
- [Crear una política comercial](https://help.vtex.com/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)
- [Configurar política comercial para marketplace](https://help.vtex.com/es/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404)
