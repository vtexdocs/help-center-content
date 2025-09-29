---
title: 'Antes del go live'
id: 7sM5IMx02zaHvAFTm0OxiJ
status: PUBLISHED
createdAt: 2022-12-09T20:00:23.023Z
updatedAt: 2023-05-25T17:29:40.880Z
publishedAt: 2023-05-25T17:29:40.880Z
firstPublishedAt: 2022-12-09T22:07:50.195Z
contentType: trackArticle
productTeam: Reliability
slugEN: pre-go-live
locale: es
trackId: 4Ns5FxIiksmjsdX2yOTduM
trackSlugEN: go-live
order: 3
---

Esta etapa inicia el _go live_, ya que estos pasos deben programarse cuidadosamente de acuerdo con la fecha prevista para el go live.

## Registrar el dominio en VTEX

Debes [registrar el dominio en Configuración de la cuenta](/es/tutorial/configurando-dominios-no-license-manager). Eso es lo que conecta la dirección a la tienda.

> ⚠️ Después de registrar tu dominio, tienes siete días para completar el _go live_. En caso contrario, deberás acceder al registro realizado y volver a guardar.

## Solicitar el apuntamiento IO

Si tu storefront se creó con [CMS IO](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), solicita el apuntamiento interno de DNS a CMS IO mediante un ticket con el [equipo de soporte de VTEX](https://help.vtex.com/es/support), indicando la URL que deseas que se apunte. Este proceso puede tomar hasta tres días laborables.

Después de recibir la confirmación del apuntamiento interno, debes realizar el [apuntamiento de DNS común](/es/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-el-apuntamiento-de-dns) dentro de cinco días. De lo contrario, se eliminará el apuntamiento interno y tendrás que volver a solicitarlo.

> ℹ️ Aprende más sobre el [go-live con Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-go-live) o la [Migración del CMS heredado a Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-migrating-storefront-from-legacy-to-io).

## Solicitar el apuntamiento especial

Si el acceso a tu tienda está restringido por una [política comercial](/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) con regla condicional y tu storefront se construyó con [CMS Portal Legacy](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), debes solicitar un apuntamiento interno especial.

Un ejemplo común son las [tiendas B2B](/es/tutorial/b2b-visao-geral--5vb9SNXhX2bZnkpAh7ADdC), que [restringen el acceso](/es/tutorial/configurando-b2b-na-vtex--tutorials_238#1-incluir-regra-condicional-na-politica-comercial-do-b2b) a empresas previamente aprobadas.

Para solicitar un apuntamiento especial, abre un ticket con el [soporte de VTEX](https://help.vtex.com/es/support) indicando cuál es la política comercial y la regla condicional configurada. Este proceso puede tomar hasta tres días laborables.

Después de recibir la confirmación del apuntamiento interno, debes realizar el [apuntamiento de DNS común](/es/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-el-apuntamiento-de-dns) dentro de cinco días. De lo contrario, se eliminará el apuntamiento especial y tendrás que volver a solicitarlo.

