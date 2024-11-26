---
title: 'Visualizar detalhes da transação em Pedidos'
id: tutorials_452
status: PUBLISHED
createdAt: 2017-04-27T22:04:24.036Z
updatedAt: 2023-03-30T14:56:10.230Z
publishedAt: 2023-03-30T14:56:10.230Z
firstPublishedAt: 2017-04-27T23:03:26.583Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-view-the-orders-details
locale: pt
legacySlug: como-visualizar-detalhes-do-pedido
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

O objetivo deste artigo é indicar o caminho para visualizar e analisar uma transação no módulo **Pedidos**.

Pedidos mostra todo o caminho percorrido por uma transação na sua loja. Com isso, nas interações, são exibidas as aprovações, os cancelamentos, o retorno do antifraude etc. Ou seja, todos os retornos dos sistemas de pagamento e antifraude estão logados no detalhe do pedido.

Para acessar essas informações, siga os passos abaixo.

1. No Admin VTEX, acesse **Pedidos > Transações**, ou digite **Transações** na barra de busca no topo da página.
2. Realize uma busca ou clique sobre a transação desejada.

Ao entrar na transação, você encontra duas caixas que contêm as principais informações referentes ao pagamento do pedido. Essas informações são atualizadas à medida que a transação avança no fluxo de pagamento do Pagamentos.

No lado direito há uma caixa que contém o valor total do pedido, os dados do cliente, o ID desse pedido e o número de identificação do Antifraude (caso exista na operação).

O ID é referente à transação no gateway da plataforma VTEX, e é inclusive parte da URL.

![pci](https://images.contentful.com/alneenqid6w5/65oy7tCoAoCMgGIi4CYau6/69e8caa34812349a09014157d0d27e33/pci.png)

Acima dessa caixa, há um link para o pedido no módulo **Pedidos**.

Na caixa da esquerda, estão concentradas as informações relacionadas ao meio de pagamento.

Para tansações com cartão de crédito, cada pagamento (podem ser dois cartões) possui um ID gerado pela VTEX. A adquirente também cria uma, chamada Transaction ID (TID). A TID é específica para cada cartão, ou seja, se um pedido é pago com dois cartões, haverá duas transações e, logo, duas TIDs.

>⚠️ Em transações que não possuem TID, pode ser interpretado que a adquirente não processou o pagamento, isto é, que não possui TID. Ocasionalmente isso pode gerar um erro, e uma forma rápida de identificá-lo é verificar se existe uma TID.

A parte mais importante dessa tela é o log de interações da transação. Aqui fica registrada toda a comunicação da VTEX com os afiliados cadastrados – antifraude, gateways e adquirentes –, inclusive mensagens de sucesso e erro, com seus respectivos códigos.

Seguem abaixo exemplos de como visualizar os cenários mais comuns que necessitam análise no Pagamentos.

## Exemplos

*Cada caixa corresponde ao log contendo a resposta da interação entre a VTEX e o sistema parceiro. No topo da caixa aparece o nome do parceiro que gerou a mensagem.*

### Evento de aprovação

![](//images.contentful.com/alneenqid6w5/2P90PVqJl6qOWGkc6icoss/fba44bb1bd12c7e42d1658d91d6edd73/2.jpg)

Nesse exemplo, vemos a aprovação de um pagamento. Ou seja, vemos que a operadora autorizou o fechamento da compra com estes dados de pagamento.

### Evento de aprovação de antifraude

![](//images.contentful.com/alneenqid6w5/2kCKR8mx3KUGW60cSs0wmo/d4cb6c1271069fd4f85e8ccb0813ef27/3.jpg)

Neste exemplo, vemos o retorno do antifraude recebendo a transação e posteriormente o retorno com a análise de risco realizada, aprovando a mesma. Em casos de reprovação, o log exibirá a informação `RiskRejected`.

### Evento de fatura

![](//images.contentful.com/alneenqid6w5/5v6fzCwSCkeqO8g24kSkqS/5e8d39795949ce428153a0e18bcdf558/4.jpg)

Neste exemplo, a operadora retorna o evento de liquidação do valor, ou seja, informa que realizou a fatura do pedido.

### Erro de processamento

O exemplo abaixo mostra uma transação de cartão de crédito que gerou erro ao ser processada pela adquirente Redecard. Os afiliados costumam retornar um código (`ConnectorCode`) junto a uma mensagem. Para encontrar informações detalhadas do erro, recomendamos consultar a documentação do adquirente. Por meio de uma rápida busca no Google é possível encontrar a lista de códigos e mensagens de cada afiliado.

![2017-01-26 20_23_37-634883 _ VTEX PCI Gateway](//images.contentful.com/alneenqid6w5/4CR2xqOZMkEEKoq0Q4008W/0088088b1a2167314ee31ab1078435b6/2017-01-26-20_23_37-634883-_-VTEX-PCI-Gateway.png)

## Liquidação automática agendada

A liquidação automática é uma funcionalidade que agenda a liquidação mesmo que a nota fiscal não tenha sido emitida. Portanto, é uma garantia da liquidação do valor, mesmo se não houve a fatura do pedido.

Caso o pedido seja cancelado, o estorno ocorrerá normalmente.

Veja como visualizar a data do agendamento da liquidação automática:

![](//images.contentful.com/alneenqid6w5/3cUrT8OgtiiiKGiaySoO4Q/5abbea075f47b3c3334954a3fa53f006/5.jpg)

## TID de pagamento

TID de pagamento é o código que identifica a compra. Esse código não é gerado na VTEX, e sim enviado pela operadora no momento da autorização. Ou seja, a VTEX envia os dados do pedido e o gateway ou a operadora retorna o TID.

Essa informação é importante sempre que for necessário confirmar algo com a operadora, pois será necessário informar esse código a fim de identificar a transação.

Para encontrar esse código na transação, veja a ilustração abaixo.

![](//images.contentful.com/alneenqid6w5/4UGw2BvqvewicmA4sYq64a/488e64d672529ed30b56e364efd4e89f/6.jpg)

## IP do cliente

O IP do cliente é coletado no momento da compra e pode ser visto no campo superior da tela da transação, conforme imagem abaixo.

![](//images.contentful.com/alneenqid6w5/3luCOyDKZ2a22y2q26S6E/1b77e158a83d51f43a4e9bb74981a512/7.jpg)

## ID do antifraude

É o ID da transação para o antifraude. Para buscas no antifraude, deve-se consultar esse valor no PCI Gateway.

![IDAntifraude](//images.contentful.com/alneenqid6w5/6KrRXQocKWy6kQosaOgiyU/77e8ae4f52c586280a17a08373675301/IDAntifraude-1.gif)

## Mais informações

Além das informações acima, existem outros dados retirados das interações com a operadora, com o gateway e/ou com o antifraude que são identificados e disponibilizados de forma mais clara no box **+ informações** logo abaixo do topo de informações. Veja na imagem abaixo como visualizá-las:

![](//images.contentful.com/alneenqid6w5/2fHaJACApyyUsIGueGkckU/edade2f60187dc9aed87942e8030d938/8.jpg)
