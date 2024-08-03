---
title: 'Lista de pedidos'
id: tutorials_200
status: DRAFT
createdAt: 2017-04-27T22:13:59.387Z
updatedAt: 2023-03-23T15:40:06.912Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:48.509Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: lista-de-pedidos
locale: pt
legacySlug: lista-de-pedidos
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

É através da lista de pedidos do Gerenciamento de Pedidos que o lojista pode acompanhar as compras concretizadas em sua loja. A listagem está disponível na primeira tela do módulo Gerenciamento de Pedidos.

![todosospedidos.pt](https://images.ctfassets.net/alneenqid6w5/RIjd55ovorcC4L2gZ4aFQ/c1f8a9043d1da0e979348951bbbba1e7/todosospedidos.pt.png)

Na visualização padrão são listados todos os pedidos da loja a partir do mais recente. É possível alterar a ordenação clicando no nome das colunas, assim como buscar ou filtrar os pedidos por dados específicos, e também exportar estes dados.

- [Como buscar pedidos](/pt/tutorial/como-buscar-o-pedido/)
- [Como filtrar pedidos](/pt/tutorial/como-filtrar-pedidos/)

Ao clicar em qualquer pedido, o usuário é direcionado para a página de detalhes do pedido.

- [Informações dentro do pedido](/pt/tutorial/informacoes-dentro-do-pedido/)

Sempre que o Gerenciamento de Pedidos estiver aberto e novos pedidos forem realizados, uma indicação será exibida, permitindo que se clique para atualizar a lista de pedidos.

![oms novospedidos](https://images.contentful.com/alneenqid6w5/764uQcLH1YiGiusQEec8Uc/80cbd9c180ad0c65143ae753b833f8a8/oms-novospedidos.png)

Veja a seguir mais detalhes sobre as colunas da lista:

## Nº (Sequencial)

Nada mais é do que o número do pedido (exibido ao cliente), o sufixo e o código sequencial da transação (para uso interno).

![oms formato do pedido](https://images.contentful.com/alneenqid6w5/60zd69MLTyOk8SW080Mo8o/ebef05cf26d82b3b15aaed852567fe5c/oms-formato-do-pedido.png)

### Número do pedido

O número do pedido é o que o cliente recebe na tela de confirmação de compra e nos e-mails transacionais. É ele quem deve ser usado nas comunicações entre loja e comprador.

Este número pode ter dois formatos:

- 12 dígitos numéricos.
- Ordem alfanumérica. Por padrão, geralmente segue a letra "v" (padrão VTEX), seguida de 6 dígitos numéricos e até 4 letras (normalmente consoantes, derivadas do nome da loja). Mas a letra pode ser escolhida de acordo com a preferência da loja.

Independente do formato, os números seguem um padrão crescente, mas a diferença entre um número e outro (incremento) é aleatória. Isso garante que ninguém fora da loja consiga estimar quantos pedidos foram concretizados em determinado período.

_O lojista tem a opção de mudar esse valor. Para isso, entre em contato com o suporte VTEX. Contudo, o número é único por AccountName. Não sendo possível ter uma sequência para cada domínio._

### Sufixo

O sufixo está sempre presente após o número do pedido, separado por hífen. Ele tem função de discernir quando o pedido foi aberto para mais de um seller através de um mesmo marketplace. Isso acontece quando um mesmo pedido no marketplace tem produtos de sellers diferentes, de forma que cada seller receberá um pedido com sufixo diferente.

Ex.: no marketplace o pedido v511223vtx é composto pelos produtos A, B e C. Cada produto pertence a um seller. O seller do produto A receberá o número do pedido como v511223vtx-01, o seller do produto B receberá o número v511223vtx-02 e o do produto C, o número v511223vtx-03.

### Código sequencial

O código sequencial é uma identificação interna da transação, e é usada para a comunicação entre módulos e outros recursos da plataforma.

O primeiro pedido da loja normalmente começa em 500001, e seu incremento é aleatório, assim como o número do pedido. Quando o número do pedido segue o segundo padrão (iniciado em &#8220;v&#8221;), os dígitos numéricos são os mesmos entre os campos.

## Data

É a data e hora em que o pedido foi realizado pelo cliente.

## Cliente

Traz sempre o nome e o sobrenome do cliente que efetuou a compra, mesmo que o pedido tenha sido feito por pessoa jurídica. Também exibe uma pré visualização do último e-mail que passou no [Conversation Tracker](/pt/tutorial/conversation-tracker) daquele pedido.

## Produtos

Expõe quantos produtos diferentes existem no pedido (sem considerar a quantidade comprada de cada item). Ao passar o mouse é possível ver quais foram os produtos comprados.

![oms produtos do pedido](https://images.contentful.com/alneenqid6w5/4fTIEf2ywwc2U2IuwSkg8U/82b81b00387db8959cf18ae392e5e1f0/oms-produtos-do-pedido.png)

## Valor

Valor total do pedido, já considerando descontos, impostos e frete.

## Origem

Distingue o pedido em duas possíveis origens:

- **Marketplace**: se o pedido foi feito no site da sua loja, sempre aparecerá como marketplace, pois foi através de onde o cliente visualizou e comprou o produto de fato.
- **Fulfillment**: significa que o produto é seu, mas a compra foi realizada pelo site de outra loja que está expondo e vendendo seus produtos.

## Pagamento

Representação da forma de pagamento que foi utilizada na compra.

## Status

Identifica em que fase do fluxo o pedido se encontra.
