---
title: '¿Por qué un cliente logró registrar un CPF en un campo de CNPJ?'
id: 6FBJ2envYAI82eQQGMKQcm
status: ARCHIVED
createdAt: 2018-07-25T17:42:33.984Z
updatedAt: 2022-10-17T20:09:26.554Z
publishedAt: 
firstPublishedAt: 2018-07-25T18:21:00.959Z
contentType: frequentlyAskedQuestion
productTeam: Master Data
author: authors_59
slugEN: why-was-a-customer-able-to-register-a-cpf-in-a-cnpj-field
locale: es
legacySlug: por-que-un-cliente-logro-registrar-un-cpf-en-un-campo-de-cnpj
---

Este escenario suele ocurrir debido a una inconsistencia en los campos de registro del usuario. Para verificar el escenario, necesitamos acceder a los datos de este cliente en el __Profile System__ de su tienda.

Siga estos pasos para validar la información:

1. Acceda al Admin de su tienda: `https://{AccountName}.myvtex.com/admin`.
2. En el menú lateral del Admin, haga clic en __Master Data__.
3. En el cuadro __Profile System__, haga clic en __Clientes__.
4. Seleccione la opción __E-mail__ y busque el correo electrónico del cliente.![e-mail - Master Data](//images.ctfassets.net/alneenqid6w5/cjpYKSZ1i8USYqs8Yga4E/df2c4793391483458ffcf8209a222f69/e-mail_-_Master_Data.png)
5. Haga clic en el registro del cliente para acceder a los detalles del perfil.

En la sección __Contato__, usted verá que la opción `Es Empresa?` Se llena con el valor `No`. Al mismo tiempo, en la sección __Datos de la empresa__, usted verá que el campo `Tipo documento` tiene el valor `cnpj`.

Esto significa que se cargan los datos de cliente para persona física, por cuenta del campo `Es Empresa ?: No`. Sin embargo, el `Tipo documento` tiene valor `cnpj`, creando la inconsistencia.

Para solucionar el problema, usted debe cambiar el campo `Tipo documento` a `cpf`.
