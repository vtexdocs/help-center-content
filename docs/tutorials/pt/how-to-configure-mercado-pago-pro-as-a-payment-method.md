---
title: 'Como configurar Mercado Pago Pro como meio de pagamento '
id: 520AthtalgojtTUKw0La9S
status: PUBLISHED
createdAt: 2020-11-17T17:45:31.552Z
updatedAt: 2023-03-26T21:46:46.072Z
publishedAt: 2023-03-26T21:46:46.072Z
firstPublishedAt: 2020-11-17T19:19:23.749Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: como-configurar-mercado-pago-pro-como-meio-de-pagamento
locale: pt
legacySlug: como-configurar-mercado-pago-pro-como-meio-de-pagamento
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

O Mercado Pago Pro é uma solução de pagamento da [carteira digital](https://help.vtex.com/pt/tutorial/o-que-e-uma-carteira-digital-e-wallet "carteira digital") Mercado Pago.

Para oferecê-lo como meio de pagamento no SmartCheckout para os seus consumidores, você deve primeiro cadastrar uma afiliação de gateway e, posteriormente, configurar o Mercado Pago Pro como meio de pagamento em si.  

Antes de configurar a condição de pagamento, você deve certificar-se que os subadquirentes MercadoPagoV1 ou MercadoPagoV2 já estejam cadastrados na sua loja. 

Caso necessário, acesse os links abaixo para cadastrar os subadquirentes:

- [MercadoPagoV1](https://help.vtex.com/pt/tutorial/configurar-o-subadquirente-mercadopagov1)
- [MercadoPagoV2](https://help.vtex.com/pt/tutorial/configurar-o-subadquirente-mercadopagov2)

## Configuração do meio de pagamento Mercado Pago Pro

Para configurar o Mercado Pago Pro, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Certifique-se que você está na aba __Condições de pagamento__.
3. Ao lado da barra de busca, clique no __botão verde “+”__.
4. Na seção “Outro”, clique na opção __MercadoPagoPro__.
5. No topo da página, preencha o campo __Nome da Regra__.
6. Logo abaixo, clique no botão __Status__ para __ativar a regra__.
7. Em __Processar com afiliação__, selecione uma das opções: __MercadoPagoV1__ ou __MercadoPagoV2__.
8. Caso seja necessário, clique na caixa de seleção __“Usar Antifraude”__.

Do lado direito da tela, é possível configurar as [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456 "condições especiais de pagamento").

Entretanto, essa etapa é opcional. Você pode simplesmente clicar diretamente no __botão azul “Salvar”__ para finalizar a configuração do meio de pagamento. 

>ℹ️ Para processar pagamentos feitos com o Pix, basta [cadastrar uma chave Pix no Mercado Pago](https://www.mercadopago.com.br/pix/) após concluir a configuração do meio de pagamento.

>⚠️ **Lembre-se:** novas condições de pagamento podem levar até 10 minutos para ser exibidas no SmartCheckout.
