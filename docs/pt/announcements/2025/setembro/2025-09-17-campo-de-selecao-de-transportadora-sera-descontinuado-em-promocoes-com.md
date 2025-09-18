---
title: 'Campo de seleção de transportadora será descontinuado em promoções com método de envio'
id: 2jA6SUpunQlVwHoru1OnCZ
status: PUBLISHED
createdAt: 2025-09-17T10:41:12.993Z
updatedAt: 2025-09-17T10:53:14.410Z
publishedAt: 2025-09-17T10:53:14.410Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-09-17-carrier-selection-field-will-be-discontinued-in-promotions-with-shipping
locale: pt
legacySlug: campo-de-selecao-de-transportadora-sera-descontinuado-em-promocoes-com
announcementImageID: 'undefined'
announcementSynopsisPT: 'Campo de transportadora desativado em promoções com método de envio a partir de julho/2025.'
---

Com o objetivo de facilitar a configuração de métodos de envio, o time de desenvolvimento da VTEX desativou/deprecou o campo `isSlaSelected`. A configuração manual desse campo foi desativada para garantir um comportamento previsível.

## O que mudou?
Antes, a aplicação de promoções baseadas em métodos de envio podia ser controlada manualmente, marcando ou desmarcando o campo de seleção de transportadora. Agora, esse comportamento é determinado automaticamente, com base no tipo de benefício configurado. A mudança visa padronizar o uso do campo e evitar inconsistências na experiência do cliente no checkout.

## O que precisa ser feito?
Desde 23 de julho de 2025, esse campo é configurado automaticamente pelo sistema, com base no tipo de benefício da promoção.

Nenhuma ação é necessária para promoções já ativas. As promoções que já tinham o campo configurado permanecerão como estão até serem salvas novamente, quando o sistema passará a controlar o valor. No entanto, não será mais possível criar novas promoções com essa configuração.

