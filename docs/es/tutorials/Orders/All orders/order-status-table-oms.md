---
title: 'Tabla de estados de pedidos'
id: frequentlyAskedQuestions_773
status: ARCHIVED
createdAt: 2019-01-24T20:45:58.288Z
updatedAt: 2022-03-16T21:40:33.812Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:04:13.713Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: tabla-de-estados-de-pedidos-oms
locale: es
legacySlug: de-para-el-estado-de-las-solicitudes
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Este artículo tiene como objetivo enumerar los valores de estado compatibles en los diversos sistemas internos y externos a VTEX.

>⚠️ Caso válido para cuando el pedido tiene solo una transacción.

<table style="width: 619px;" border="1" cellspacing="0" cellpadding="0"><tbody><tr style="height: 56px;"><td style="width: 113px; height: 56px;" valign="top"><p align="center"><b>Gestión de Pedidos</b>
</td><td style="width: 113px; height: 56px;" valign="top"><p align="center"><b>Mis Ordenes</b>
</td><td style="width: 126px; height: 56px;" valign="top"><p align="center"><b>Pagos</b>
</td><td style="width: 79px; height: 56px;" valign="top"><p align="center"><b>API Rest</b>
</td><td style="width: 113px; height: 56px;" valign="top"><p align="center"><b>WebService</b>
</td></tr><tr style="height: 82px;"><td style="width: 113px; height: 82px;" valign="top"><p align="center">Procesando
</td><td style="width: 113px; height: 82px;" valign="top"><p align="center">Procesando 
</td><td style="width: 126px; height: 82px;" valign="top"><p align="center">Procesando
</td><td style="width: 79px; height: 82px;" valign="top"><p align="center">order-created
</td><td style="width: 113px; height: 82px;" valign="top"><p align="center">AAP
</td></tr><tr style="height: 82px;"><td style="width: 113px; height: 82px;" valign="top"><p align="center">Procesando
</td><td style="width: 113px; height: 82px;" valign="top"><p align="center">Procesando 
</td><td style="width: 126px; height: 82px;" valign="top"><p align="center">Procesando
</td><td style="width: 79px; height: 82px;" valign="top"><p align="center">on-order-completed
</td><td style="width: 113px; height: 82px;" valign="top"><p align="center">AAP
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Pago pendiente
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Procesando Pago
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Autorización
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">payment-pending
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">_NEAS
</td></tr><tr style="height: 82px;"><td style="width: 113px; height: 82px;" valign="top"><p align="center">Esperando autorización del pedido
</td><td style="width: 113px; height: 82px;" valign="top"><p align="center">Esperando autorización del pedido 
</td><td style="width: 126px; height: 82px;" valign="top"><p align="center">Aprobado / Autorizado
</td><td style="width: 79px; height: 82px;" valign="top"><p align="center">waiting-for-order-authorization
</td><td style="width: 113px; height: 82px;" valign="top"><p align="center">_NEAS
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Preparando entrega
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Preparando entrega
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Aprobado
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">approve-payment
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">_NEAS
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Pago Aprobado
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Pago Aprobado
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Pago Aprobado
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">payment-approved
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">AAP
</td></tr><tr style="height: 140px;"><td style="width: 113px; height: 140px;" valign="top"><p align="center">Solicitar cancelamento
</td><td style="width: 113px; height: 140px;" valign="top"><p align="center">Cancelación Solicitada
</td><td style="width: 126px; height: 140px;" valign="top"><p align="center">Cancelación Solicitada
</td><td style="width: 79px; height: 140px;" valign="top"><p align="center">request-cancel
</td><td style="width: 113px; height: 140px;" valign="top"><p align="center">CAN
</td></tr><tr style="height: 140px;"><td style="width: 113px; height: 140px;" valign="top"><p align="center">Aguardando decisión del Seller
</td><td style="width: 113px; height: 140px;" valign="top"><p align="center">Cancelación Solicitada
</td><td style="width: 126px; height: 140px;" valign="top"><p align="center">Aprobado
</td><td style="width: 79px; height: 140px;" valign="top"><p align="center">waiting-for-seller-decision
</td><td style="width: 113px; height: 140px;" valign="top"><p align="center">AAP
</td></tr><tr style="height: 168px;"><td style="width: 113px; height: 168px;" valign="top"><p align="center">Esperando autorización para despachar
</td><td style="width: 113px; height: 168px;" valign="top"><p align="center">Procesando Pago
</td><td style="width: 126px; height: 168px;" valign="top"><p align="center">Aprobado
</td><td style="width: 79px; height: 168px;" valign="top"><p align="center">authorize-fulfillment
</td><td style="width: 113px; height: 168px;" valign="top"><p align="center">ERP
</td></tr><tr style="height: 168px;"><td style="width: 113px; height: 168px;" valign="top"><p align="center">Error al crear el pedido
</td><td style="width: 113px; height: 168px;" valign="top"><p align="center">Error al crear el pedido
</td><td style="width: 126px; height: 168px;" valign="top"><p align="center">No depende del PCI Gateway
</td><td style="width: 79px; height: 168px;" valign="top"><p align="center">order-create-error
</td><td style="width: 113px; height: 168px;" valign="top"><p align="center">_NEAS
</td><tr style="height: 168px;"><td style="width: 113px; height: 168px;" valign="top"><p align="center">Error al crear el pedido
</td><td style="width: 113px; height: 168px;" valign="top"><p align="center">Error al crear el pedido
</td><td style="width: 126px; height: 168px;" valign="top"><p align="center">No depende del PCI Gateway
</td><td style="width: 79px; height: 168px;" valign="top"><p align="center">order-creation-error
</td><td style="width: 113px; height: 168px;" valign="top"><p align="center">_NEAS
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Carencia para la cancelación
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Preparando entrega
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">No depende del PCI Gateway
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">window-to-cancel
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">ERP
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Preparado para manejo
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Preparando entrega
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Aprobado
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">ready-for-handling
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">CAP
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Iniciar manejo
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Preparando entrega
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Aprobado
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">start-handling
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">CAP
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Preparando entrega
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Preparando Entrega
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Aprobado
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">handling
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">ERP
</td></tr><tr style="height: 168px;"><td style="width: 113px; height: 168px;" valign="top"><p align="center">Factura después de la cancelación denegada
</td><td style="width: 113px; height: 168px;" valign="top"><p align="center">Factura después de la cancelación denegada
</td><td style="width: 126px; height: 168px;" valign="top"><p align="center">Aprobado
</td><td style="width: 79px; height: 168px;" valign="top"><p align="center">invoice-after-cancellation-deny
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">ERP</td><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Verificando envío
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Procesando Pedido
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Aprobado
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">order-accepted
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">ERP
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Enviando
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Enviando
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Finalizado
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">invoice
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">ETR
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Facturado
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Enviado
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Finalizado
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">invoiced
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">ETR
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Substituido
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Substituido
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Cancelado ou Substituido
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">rreplaced
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">ETR
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Cancelación solicitada
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Cancelación solicitada
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Aprobado
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">cancellation-requested
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">CAN
</td></tr><tr style="height: 84px;"><td style="width: 113px; height: 84px;" valign="top"><p align="center">Cancelar
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">Procesando Cancelación
</td><td style="width: 126px; height: 84px;" valign="top"><p align="center">Cancelado
</td><td style="width: 79px; height: 84px;" valign="top"><p align="center">cancel
</td><td style="width: 113px; height: 84px;" valign="top"><p align="center">CAN
</td></tr><tr style="height: 56px;"><td style="width: 113px; height: 56px;" valign="top"><p align="center">Cancelado
</td><td style="width: 113px; height: 56px;" valign="top"><p align="center">Cancelado
</td><td style="width: 126px; height: 56px;" valign="top"><p align="center">Cancelado
</td><td style="width: 79px; height: 56px;" valign="top"><p align="center">canceled
</td><td style="width: 113px; height: 56px;" valign="top"><p align="center">CAN
</td></tr></tbody></table>
