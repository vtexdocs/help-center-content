---
title: 'Registro del conector de Mercado Libre'
id: 4YvYdgICMosaEgISOYogsi
status: PUBLISHED
createdAt: 2018-08-13T12:33:55.818Z
updatedAt: 2023-07-06T20:21:00.334Z
publishedAt: 2023-07-06T20:21:00.334Z
firstPublishedAt: 2018-08-13T14:28:06.574Z
contentType: trackArticle
productTeam: Channels
slugEN: register-mercado-livre-integration
locale: es
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugEN: configurar-integracion-con-mercado-libre
---

1.	Vaya al Admin.
2.	En el módulo *MARKETPLACE*,  haga clic en **Integraciones**.
3.	Seleccione la opción `Configuración`.
4.	Busque la integración __Mercado Livre Classic__ o __Mercado Livre Premium__ y haga clic en `Integrar`.
5.	Rellene los campos indicados a continuación. El asterisco significa que es obligatorio completarlos. A continuación, haga clic en el botón `Guardar configuración`.

<div class="alert alert-info">
Cada cuenta VTEX debe estar vinculada a una sola cuenta en Mercado Libre, aunque se utilicen ambos conectores (Classic y Premium). Actualmente no es posible autenticarse con dos cuentas simultáneamente.
</div>

- **Integración (si elige desactivar la integración, se eliminará toda la configuración, incluyendo la autenticación y la afiliación)* :**  seleccione *Activada* para que se inicie la integración.
- **ID del afiliado*:** código de identificación para crear un [afiliado](https://help.vtex.com/es/tutorial/o-que-e-afiliado) que aún no está registrado en tu sistema. El código debe estar compuesto por tres consonantes, repetidas o no. No se aceptan vocales. Sugerencia: `MLC` (Classic) o `MLP` (Premium). La configuración del conector crea el afiliado automáticamente.
- **ID de la política comercial*:**  ID de la [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que se utilizará para la integración con Mercado Libre. Los productos de esta política comercial se enviarán al marketplace.
- **Formato del título del anuncio*:** regla para el formato del título del anuncio que se publicará en Mercado Libre. Este título puede combinar diferentes atributos del Catálogo, como la *Marca*, el *Nombre del Producto* y el *Nombre del SKU*. Los títulos de los anuncios en Mercado Libre pueden tener un máximo de 60 caracteres. Para personalizar el *Formato del título del anuncio* de un producto, puede [crear un campo](https://help.vtex.com/es/tutorial/criando-um-campo-de-produto--tutorials_106) de producto con el nombre `meli_title`, del tipo `Texto Grande` y la opción `Mostrar Especificación` desactivada.
- **Actualizar la descripción del anuncio*:** cuando está activado, actualiza automáticamente la descripción del anuncio en Mercado Libre cada vez que se realiza un cambio en la descripción del producto en VTEX. En caso contrario, se mantendrá la descripción original.
- **ID de la tienda oficial en Mercado Libre:** identificador numérico que proporciona Mercado Libre en su contrato comercial cuando un usuario alcanza el status de [Tienda Oficial](https://www.mercadolibre.com.ar/tiendas-oficiales). Debe rellenarse si su tienda tiene este status para que la integración funcione correctamente.
- **Stock mínimo*:** Si la cantidad de ítems de un producto en stock está por debajo del valor introducido, su anuncio se pone en pausa para evitar que se realicen ventas sin stock durante el tiempo de actualización de Mercado Libre por parte de VTEX.
- **Formato de archivo de las etiquetas de envío*:** elija entre los formatos PDF o JSON (que es compatible con las impresoras Zebra) para imprimir las etiquetas de los productos.
- **Atributos omitidos en la plantilla del producto:** rellene el campo con los atributos del producto que están registrados en VTEX pero que no desea incluir en Mercado Libre.
- **Almacén Mercado Full:** ID de stock para el tipo de envío [Mercado Envíos Full](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-full).
