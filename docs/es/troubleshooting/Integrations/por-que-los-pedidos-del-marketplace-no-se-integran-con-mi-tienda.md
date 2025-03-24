---
title: '¿Por qué los pedidos del marketplace no se integran con mi tienda?'
id: 275YvF8dyry5KmfY9epoET
status: PUBLISHED
createdAt: 2024-06-21T14:24:48.621Z
updatedAt: 2024-11-08T18:32:01.935Z
publishedAt: 2024-11-08T18:32:01.935Z
firstPublishedAt: 2024-06-21T14:48:49.434Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: why-dont-marketplace-orders-integrate-with-my-store
locale: es
legacySlug: por-que-los-pedidos-del-marketplace-no-se-integran-con-mi-tienda
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
tags: Pedidos, Marketplace, Integración, SKU, Stock
---

Cuando se producen errores de integración de pedidos entre un marketplace y tu tienda, se muestran mensajes en la página de cada pedido, informando el error ocurrido. Los posibles errores de integración de pedido son los siguientes:  

- Información de envío incompleta.  
- Divergencia de precios.  
- ID de SKU no válido.  
- Indisponibilidad de stock.  
- Status de indisponibilidad.  
- Transportadora no registrada en el ERP (Enterprise Resource Planning).  

Comprueba tanto el status de la integración de pedidos como los mensajes accediendo al Admin VTEX. **Marketplace > Conexiones > Pedidos** o ingresa **Pedidos** en la barra de búsqueda.   

## Solución

Consulta la tabla a continuación para comprender el significado del error y corregirlo:  

| **Tipo de error** | **Significado** | **Acción requerida** |
|:---:|:---:|:---:|
| **Información de envío incompleta** | Los datos de envío están incompletos o rellenados incorrectamente. | Corregir o rellenar los datos solicitados como se indica en [Flujo y status de pedidos.](https://help.vtex.com/es/tutorial/fluxo-e-status-de-pedidos--tutorials_196) |
| <br>**Divergencia de precios** | <br>El valor total del pedido pagado en el marketplace difiere del valor esperado por la tienda VTEX, y esta diferencia de precios supera el porcentaje aceptado por la tienda VTEX o la regla de divergencia de precios no está configurada.<br>**Ejemplo**<br>El valor total pagado por el pedido en el marketplace es de 311.77 USD, el valor esperado por la tienda es de 313.61 USD. Es decir, hay una diferencia de 1.84 USD. | [Reprocesar pedido](https://help.vtex.com/es/tutorial/verificando-integracao-no-bridge#pedidos) o Configurar la [Regla de divergencia de precios](https://help.vtex.com/es/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW). |
| **ID de SKU no válido** | Los ID de los productos registrados en la política comercial son diferentes de los ID registrados en el marketplace. | Cambiar los ID de los SKU en el marketplace para que tengan los mismos códigos que los productos en la política comercial. |
| **Indisponibilidad de stock** | El SKU no se muestra en el marketplace.<br>Consulta la lista completa de [Errores de integración de stock con marketplaces.](https://help.vtex.com/es/tutorial/erros-de-integracao-de-estoque-com-marketplaces--32bcsv9Dx1Dtl0YQOwWDpc) | Aplicar la corrección requerida según el error identificado en [Errores de integración de stock con marketplaces.](https://help.vtex.com/es/tutorial/erros-de-integracao-de-estoque-com-marketplaces--32bcsv9Dx1Dtl0YQOwWDpc)<br>  |
| **Status de Indisponibilidad** | El producto está disponible en tu tienda, pero el marketplace ha bloqueado el ítem en tu storefront. El status del pedido será **Unavailable.** | Ponte en contacto con el marketplace para liberar el pedido. |
| **Transportadora no registrada en el ERP (Enterprise Resource Planning)** | La transportadora seleccionada para el envío del producto no está registrada en el ERP.<br>**Ejemplo**<br>Se registró una nueva transportadora en VTEX, pero no en el ERP. | Actualizar el registro de transportadoras en el ERP de acuerdo con las registradas en VTEX. |

