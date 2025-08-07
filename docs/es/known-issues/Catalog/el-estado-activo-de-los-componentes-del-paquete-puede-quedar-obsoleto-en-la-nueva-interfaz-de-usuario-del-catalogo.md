---
title: 'El estado "activo" de los componentes del paquete puede quedar obsoleto en la nueva interfaz de usuario del catálogo.'
id: cqjuO2Qjz20VHFjof3gOk
status: PUBLISHED
createdAt: 2025-03-11T15:13:09.422Z
updatedAt: 2025-03-12T16:42:43.207Z
publishedAt: 2025-03-12T16:42:43.207Z
firstPublishedAt: 2025-03-11T15:13:10.170Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: el-estado-activo-de-los-componentes-del-paquete-puede-quedar-obsoleto-en-la-nueva-interfaz-de-usuario-del-catalogo
locale: es
kiStatus: Backlog
internalReference: 1191983
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, en la nueva versión de la interfaz de usuario del catálogo, cuando una SKU se crea como un paquete y tiene componentes, hay un listado de estado de cada componente para mostrar si está activo o no

 ![](https://vtexhelp.zendesk.com/attachments/token/VFHwd92eJuxyRAtfRJeQmscou/?name=image.png)

Sin embargo, si después de crear el kit dicho artículo se desactiva, la UI no lo actualiza en consecuencia.


##

## Simulación


1 - crear un nuevo elemento de paquete en la tienda
2 - asociarlo a 2+ componentes, en los que 2+ de ellos están activos.
3 - desactivar uno de los componentes
4 - compruebe, en la interfaz de usuario del paquete, que los componentes desactivados siguen apareciendo como activos.



## Workaround


Utilice la interfaz de usuario del paquete anterior https://myaccountname.vtexcommercestable.com.br/admin/Site/SkuKit.aspx?IdProduto=&IdSku=





