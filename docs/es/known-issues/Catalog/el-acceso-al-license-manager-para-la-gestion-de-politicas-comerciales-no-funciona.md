---
title: "El acceso al License Manager para la gestión de políticas comerciales no funciona."
id: 3WDPBnMmivNPhalJwC8ZmA
status: PUBLISHED
createdAt: 2022-01-25T20:47:12.501Z
updatedAt: 2022-11-25T21:43:55.539Z
publishedAt: 2022-11-25T21:43:55.539Z
firstPublishedAt: 2022-08-09T12:12:16.389Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: el-acceso-al-license-manager-para-la-gestion-de-politicas-comerciales-no-funciona
locale: es
kiStatus: Backlog
internalReference: 380904
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En la configuración del Gestor de Licencias, podemos seleccionar a qué recurso puede acceder el usuario. La gestión de los Canales de Venta no está dando acceso a la página de configuración de los Canales de Venta: `account.myvtex.com/admin/Site/Store.aspx`.



## Simulación


- Cambie el rol de un usuario para que sólo acceda a la gestión de los canales de venta:

 ![](https://vtexhelp.zendesk.com/attachments/token/QdfNIgaeWKO0TQNp7JHBXuhtW/?name=inline-650484840.png)

- Intente acceder a esta página: `account.myvtex.com/admin/Site/Store.aspx`.

La página no estará disponible en el menú:

 ![](https://vtexhelp.zendesk.com/attachments/token/uomLWmfD9EIbUO6HnbljCA7e3/?name=inline671843796.png)



## Workaround


Utiliza un rol que dé acceso a todo el catálogo.

