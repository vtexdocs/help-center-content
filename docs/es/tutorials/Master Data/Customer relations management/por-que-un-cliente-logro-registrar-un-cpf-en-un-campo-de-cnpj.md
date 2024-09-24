---
title: '¿Por qué un cliente logró registrar un CPF en un campo de CNPJ?'
id: K6zJn8JFOKk5ON1XFB6ZJ
status: ARCHIVED
createdAt: 2022-10-17T19:22:31.749Z
updatedAt: 2024-07-11T19:21:58.380Z
publishedAt: 
firstPublishedAt: 2022-10-17T19:43:17.176Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: why-was-a-customer-able-to-register-a-cpf-in-a-cnpj-field
locale: es
legacySlug: por-que-un-cliente-logro-registrar-un-cpf-en-un-campo-de-cnpj
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

Este escenario suele ocurrir debido a una inconsistencia en los campos de registro del usuario. Para verificar el escenario, necesitamos acceder a los datos de este cliente en el __Profile System__ de su tienda.

>⚠️ Este artículo describe el funcionamiento de Master Data v1. Es importante evaluar cuál versión de Master Data satisface las necesidades de tu operación o ya está en uso.
>
> *<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
> Características de las versiones de Master Data
>  </a>
>
> *<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
> Master Data v2
>  </a>
> 

Siga estos pasos para validar la información:

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data**.
2. En el cuadro __Profile System__, haga clic en __Clientes__.
3. Seleccione la opción __E-mail__ y busque el correo electrónico del cliente.![e-mail - Master Data](//images.ctfassets.net/alneenqid6w5/cjpYKSZ1i8USYqs8Yga4E/df2c4793391483458ffcf8209a222f69/e-mail_-_Master_Data.png)
4. Haga clic en el registro del cliente para acceder a los detalles del perfil.

En la sección __Contato__, usted verá que la opción `Es Empresa?` Se llena con el valor `No`. Al mismo tiempo, en la sección __Datos de la empresa__, usted verá que el campo `Tipo documento` tiene el valor `cnpj`.

Esto significa que se cargan los datos de cliente para persona física, por cuenta del campo `Es Empresa ?: No`. Sin embargo, el `Tipo documento` tiene valor `cnpj`, creando la inconsistencia.

Para solucionar el problema, usted debe cambiar el campo `Tipo documento` a `cpf`.
