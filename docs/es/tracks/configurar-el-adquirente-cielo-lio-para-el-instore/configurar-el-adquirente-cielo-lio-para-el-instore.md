---
title: 'Configurar el adquirente Cielo LIO para el inStore'
id: 2X8bWpsWGOLOCToLZSbUkA
status: DRAFT
createdAt: 2020-06-28T15:28:38.682Z
updatedAt: 2021-02-23T15:47:34.391Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:30:26.705Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-the-cielo-lio-acquirer-for-instore
locale: es
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: configurar-el-adquirente-cielo-lio-para-el-instore
---

Para permitir transacciones a través de máquinas de tarjetas usando inStore, usted necesita un adquiriente o un subadquirente para procesar sus pagos.

__Cielo LIO__ es un adquirente homologado por inStore en Brasil.

<div class="alert alert-warning">
Si desea utilizar Cielo LIO en un país diferente o si desea utilizar otro adquiriente que no está homologado actualmente, usted deberá crear la integración con la aplicación de ese adquiriente. Para hacerlo, consulte el artículo <a href="https://help.vtex.com/es/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod"> Integrar inStore con un nuevo adquiriente de pagos</a>.
</div>

<div class="alert alert-info">
Actualmente, Cielo LIO solo es compatible con sistemas Android. Es posible usar CieloLio V2 o CieloLio+.
</div>

Antes de instalar la aplicación Cielo LIO, asegúrese de haber completado el paso anterior de configuración del módulo de Pagos. Si lo ha terminado, siga los pasos a continuación para instalar y configurar el adquirente Cielo LIO para inStore.

Para obtener más información sobre Cielo LIO, visite el [sitio web de Cielo](https://www.cielo.com.br/comprar-maquina-de-cartao).

## Detalles de la configuración

Para que el inStore esté disponible en Cielo LIO, es necesario abrir un ticket para que Cielo solicite la asociación de su máquina a su tienda VTEX, así como el envío de la aplicación `UriAppClient`, pasando el número de su establecimiento comercial (EC, en portugués) y el número de LIO.

Durante el flujo de configuración en el módulo de pagos VTEX, tenga en cuenta los siguientes detalles:

1. Los campos `Access Token` y `Client ID` deben completarse con los datos que obtiene directamente de VTEX.
2. Preste atención al "Tipo de instalación" seleccionado. Debe estar de acuerdo con su Cielo LIO. Si no está seguro de qué opción se contrató, simule una venta en LIO (utilizando el sistema estándar de la máquina, fuera de inStore) y seleccione la opción Crédito, que enumerará las opciones de instalación disponibles (Administrador, Comerciante o Banco) en su máquina. Asegúrese de que la opción activa en la máquina sea la misma que la configurada en el módulo de Pagos de VTEX.
