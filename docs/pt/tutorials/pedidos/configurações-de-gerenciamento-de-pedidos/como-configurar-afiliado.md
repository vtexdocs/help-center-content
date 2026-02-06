---
title: 'Configurar afiliado'
id: tutorials_187
status: PUBLISHED
createdAt: 2017-04-27T22:15:31.422Z
updatedAt: 2024-01-08T18:13:15.897Z
publishedAt: 2024-01-08T18:13:15.897Z
firstPublishedAt: 2017-04-27T23:00:46.992Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: configuring-affiliates
legacySlug: como-configurar-afiliado
locale: pt
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

Na VTEX, o [afiliado](/pt/docs/tutorials/o-que-e-afiliado) é um código que identifica o marketplace para o seller. O [seller VTEX](/pt/tutorial/integrating-with-marketplace/#sendo-seller-vtex) precisa configurar um código de afiliado para poder integrar com um [marketplace VTEX](/pt/tutorial/integrating-with-marketplace/#ser-um-marketplace-vtex), e essa configuração só é necessária quando o marketplace e o seller integrados são ambos lojas VTEX. 

Quando o marketplace não é uma loja VTEX (como em [integrações externas](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#integrado-a-marketplace-externo)), ou quando a loja integra com um [marketplace certificado](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#integrado-a-marketplaces-certificados) (como Amazon ou Mercado Livre), o código do afiliado é criado automaticamente pela plataforma.

## Como configurar

Para criar um novo ID do afiliado, siga os passos abaixo: 

1. No Admin VTEX, acesse **Configurações da loja > Pedidos > Configurações**, ou digite *Pedidos* na barra de busca no topo da página e e selecione *Configurações da loja / Pedidos*.
2. Na aba **Afiliados**, Clique em `+ Novo afiliado`.
3. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar`.
    - __Nome:__ designação do novo afiliado.
    - __ID:__ código identificador do afiliado, deve ser composto de três consoantes, sejam elas repetidas ou não. Vogais não são aceitas.
    - __Política comercial:__ número da política comercial que definirá o sortimento de catálogo, preço e estratégia de envio dos itens utilizados na integração com o marketplace.
    - __Email para notificações:__ endereço eletrônico que receberá notificações sobre a integração.
    - __Endpoint de busca:__ URL da aplicação que receberá notificações sobre produtos, preço, estoque, entre outras. O Endpoint de Search pode ser preenchido com o valor: 

`http://productnotification.vtexcommerce.com.br/api/notification/{NomeDoMarketplace}/{IdDoSeller}`

> Perceba que o valor __{NomeDoMarketplace}__ deve ser alterado pelo nome da conta do marketplace e o valor __{IdDoSeller}__ deve ser alterado para o ID do seller cadastrado pelo marketplace.

> > ❗ O valor **{IdDoSeller}** é *case sensitive*. Dessa forma, ele deverá ser escrito na URL exatamente da mesma maneira que estiver cadastrado no marketplace.

> Para casos de [marketplaces externos à VTEX](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#integrado-a-marketplace-externo), preencha com o valor: `https://{endpointDoAfiliado}/api/notification/`.   

> Saiba mais em nosso artigo no Developer Portal [How to confugure the affiliate endpoint](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-price-update#how-to-configure-the-affiliate-endpoint).

- __Versão do endpoint de busca:__ insira a opção padrão 1.x.x. 
- __Usar meu meio de pagamento__: é o split de pagamento, voltado para que ele seja transacionado pelo seller. Isto é, o Marketplace fecha o pedido, mas envia o pagamento para o dono do produto realizar. Recomendado utilizar apenas em integrações de VTEX com VTEX por compatibilidade de meios de pagamento.

Para esta modalidade, não é necessário que o seller possua as mesmas formas de pagamento que o marketplace.
