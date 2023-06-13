---
title: Configurar afiliado
id: tutorials_187
status: PUBLISHED
createdAt: 2017-04-27T22:15:31.422Z
updatedAt: 2023-03-29T18:05:11.905Z
publishedAt: 2023-03-29T18:05:11.905Z
firstPublishedAt: 2017-04-27T23:00:46.992Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: como-configurar-afiliado
legacySlug: como-configurar-afiliado
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

Só é necessário fazer o cadastro de um [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) se ele estiver atuando como seller de um marketplace, pois o seller cria um afiliado para identificar o marketplace.

Essa configuração só deve ser feita para integrações onde o marketplace e o seller são lojas VTEX ou [quando o marketplace não é loja VTEX e não possui configuração pelo módulo de Integrações](/pt/tutorial/integrando-com-marketplace/). Nesses casos, o afiliado é criado automaticamente.

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

> <div class="alert alert-danger">
  O valor <strong>{IdDoSeller}</strong> é <em>case sensitive</em>. Dessa forma, ele deverá ser escrito na URL exatamente da mesma maneira que estiver cadastrado no marketplace.  
</div>

> Para casos de [marketplaces externos à VTEX](https://help.vtex.com/pt/tutorial/marketplace-strategies-at-vtex--tutorials_402#integrado-a-marketplace-externo), preencha com o valor: `https://{endpointDoAfiliado}/api/notification/`.   

> Saiba mais em nosso artigo no Developer Portal [How to confugure the affiliate endpoint](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-price-update#how-to-configure-the-affiliate-endpoint).

- __Versão do endpoint de busca:__ insira a opção padrão 1.x.x. 
- __Usar meu meio de pagamento__: é o split de pagamento, voltado para que ele seja transacionado pelo seller. Isto é, o Marketplace fecha o pedido, mas envia o pagamento para o dono do produto realizar. Recomendado utilizar apenas em integrações de VTEX com VTEX por compatibilidade de meios de pagamento.

Para esta modalidade, não é necessário que o seller possua as mesmas formas de pagamento que o marketplace.
