---
title: 'Configurar o conector Promissórias'
id: 7Gy0SJRVS0Qi2CuWMAqQc0
status: PUBLISHED
createdAt: 2018-06-22T15:15:02.946Z
updatedAt: 2024-01-19T19:28:16.938Z
publishedAt: 2023-10-18T17:29:11.714Z
firstPublishedAt: 2018-06-22T19:10:55.195Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-the-notes-payable-conector
legacySlug: configurar-o-conector-promissorias
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O conector __Promissórias__, como o próprio nome já sugere, permite que sua loja passe a aceitar promissórias como forma de pagamento.

Para configurar o Promissórias, siga os passos abaixo:

## Configurar afiliação de gateway Promissórias
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão `+`.
3. Clique no conector __Promissórias__.
4. No campo __Validade da promissória em dias (máx. de 180)__, defina quantos dias seu cliente terá para pagar a promissória antes que ela perca a validade.
5. Em __Autorizar automaticamente__, informe se deseja aprovar o pagamento de imediato. Só recomendamos a escolha dessa opção para casos em que o pagamento é feito na entrega ou na retirada do pedido na loja. Ao escolher _Sim_, o pedido passa automaticamente para o status _Preparando Entrega_, sem passar por nenhuma verificação de pagamento.
6. Clique em `Salvar`.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o conector Promissórias vai estar configurado na sua loja. Assim, quando você for cadastrar uma Promissória (na aba __Pagamentos customizados__ da página de __Configurações__ do Pagamentos), ele vai estar disponível no campo __Processar com a afiliação__. Para saber como cadastrar pagamentos customizados, acesse [este artigo](/pt/docs/tutorials/como-configurar-pagamento-customizado).
