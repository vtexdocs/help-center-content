---
title: 'Análisis antifraude para tarjetas de regalo'
id: 1dgEyQ3n4CVTSPIbEQmnUE
status: PUBLISHED
createdAt: 2024-12-19T12:22:16.387Z
updatedAt: 2024-12-19T15:46:11.116Z
publishedAt: 2024-12-19T15:46:11.116Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2024-12-19-anti-fraud-analysis-for-gift-cards
locale: es
legacySlug: analisis-antifraude-para-tarjetas-de-regalo
announcementImageID: 'undefined'
announcementSynopsisES: 'Habilite el análisis antifraude en transacciones con tarjetas de regalo en su tienda'
---

Con el objetivo de optimizar las operaciones de pago en la plataforma, VTEX ha implementado la funcionalidad de análisis antifraude para compras realizadas con [tarjetas de regalo](/es/docs/tutorials/gift-card) (gift card).

## ¿Qué cambió?

A partir de ahora, además de analizar transacciones de pago con tarjeta de crédito y débito, el [Anti-fraud Provider Protocol](https://developers.vtex.com/docs/guides/how-the-integration-protocol-between-vtex-and-antifraud-companies-works) permite que los [proveedores antifraude](/es/docs/tutorials/como-configurar-antifraude) ofrezcan el servicio de análisis antifraude para tarjetas de regalo, aumentando la seguridad en las transacciones realizadas con este medio de pago en tu tienda.

## ¿Qué se necesita hacer?

El análisis antifraude para tarjetas de regalo ya está disponible en todas las cuentas VTEX. Si deseas activarlo en tu tienda debes:

1. Ponerte en contacto con el proveedor de servicios antifraude con el que tienes contrato para verificar si este servicio de análisis antifraude ya está disponible. Más información sobre la configuración necesaria para el proveedor antifraude en [New feature available for anti-fraud providers: Gift card transaction analysis](https://developers.vtex.com/updates/release-notes/2024-12-19-new-feature-available-for-anti-fraud-providers-gift-card-transaction-analysis).
2. Asociar el proveedor antifraude con el medio de pago tarjeta de regalo en el Admin VTEX. Más información en [Configurar antifraude](/es/docs/tutorials/como-configurar-antifraude).

> ℹ️ La información analizada por el proveedor antifraude para cada transacción puede consultarse en la página [Transacciones](/es/tracks/pagos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy) del Admin VTEX.

