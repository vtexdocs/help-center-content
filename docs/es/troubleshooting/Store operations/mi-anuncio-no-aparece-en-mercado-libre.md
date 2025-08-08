---
title: 'Mi anuncio no aparece en Mercado Libre'
id: 2UpudfowEvG97e2lstj4qc
status: PUBLISHED
createdAt: 2024-06-13T16:38:00.931Z
updatedAt: 2024-11-08T15:28:30.286Z
publishedAt: 2024-11-08T15:28:30.286Z
firstPublishedAt: 2024-06-13T18:01:04.982Z
contentType: tutorial
productTeam: Channels
author: YRJ73j8mt38D5TUleocQB
slugEN: my-ad-is-not-displayed-on-mercado-livre
locale: es
legacySlug: mi-anuncio-no-aparece-en-mercado-libre
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: Marketplace, Catálogo, Integración, Mercado Libre, Anuncio pausado
---

Cuando se remueve o desactiva un producto de la política comercial utilizada en la integración de Mercado Libre, la actualización de esos detalles se envía automáticamente al marketplace, que a su vez deja de mostrar el producto.

Otro caso es cuando la cantidad del producto cae por debajo del [stock mínimo](/es/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D) establecido en la configuración de la integración con el marketplace. Si el stock de un producto es menor que el valor configurado, se pausa el anuncio para evitar la venta de productos sin stock.

## Solución

Hay dos posibles soluciones para resolver este problema: [verificar la política comercial del producto](#verificar-la-politica-comercial-del-producto) y [verificar la configuración del stock mínimo](#verificar-el-stock-minimo).
### Verificar la política comercial

La [política comercial](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/15NZiQstCET8zyQUIa7nhw) establece la configuración que se aplica a los productos enviados a Mercado Libre.

Para comprobar que la política comercial esté configurada correctamente en el producto, accede a Catálogo > Todos los productos en el Admin VTEX o escribe Todos los productos en la barra de búsqueda en la parte superior de la página. Luego sigue los pasos a continuación:

1. Haz clic en Filtrar resultados o realizar una búsqueda y [busca el producto](/es/tutorial/produtos-e-skus-beta--2ig7TmROlirWirZjFWZ3By#buscar-productos) cuyo anuncio no está disponible en Mercado Libre.
2. En la fila del producto deseado, haz clic en `Modificar`.
3. En la página de registro del producto, comprueba que la política comercial que se utiliza para Mercado Libre esté seleccionada.
4. Si no lo está, marca la casilla de la política comercial.

  ![politicas-comerciales-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/Store%20operations/mi-anuncio-no-aparece-en-mercado-libre_1.png)

 5. Haz clic en el botón `Guardar`.

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Si tu tienda utiliza el <a href="https://help.vtex.com/es/announcements/bem-vindo-ao-novo-admin-vtex--5tLPBodp6Xu03vYdyBTGTa">nuevo Admin VTEX</a>, consulta el artículo <a href="https://help.vtex.com/es/tutorial/produtos-e-skus-beta--2ig7TmROlirWirZjFWZ3By">Productos y SKUs</a> para más información sobre cómo ver y gestionar el catálogo, incluyendo la configuración de las políticas comerciales.
</div>

### Verificar stock mínimo

Para comprobar la configuración del stock mínimo, accede a Marketplace > Conexiones > Marketplace e integraciones en el Admin VTEX o escribe Marketplaces e integraciones en la barra de búsqueda en el parte superior de la página. Luego sigue los pasos a continuación:

1. [Busca la integración](/es/tutorial/marketplaces-e-integracoes--5AcBO1t29nhq7rBHas9b6V#buscar-e-filtrar) de Mercado Libre.
2. En la fila de la integración deseada, haz clic en `Editar`.
3. En `Configuración`, comprueba que el campo Stock mínimo tenga un valor.

  ![inventario-minimo-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/Store%20operations/mi-anuncio-no-aparece-en-mercado-libre_2.png)

 4. Asegúrate de que este campo esté configurado correctamente según se explica en el artículo [Control de stock mínimo para integraciones](/es/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D).

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Si las soluciones propuestas no resuelven el problema, abre un ticket con el <a href="https://help.vtex.com/es/support">soporte VTEX</a>.
</div>