---
title: 'Como funciona a integração do Mercado Livre'
id: 3cKjnItfjyqauWWcMkOqC0
status: PUBLISHED
createdAt: 2018-09-06T15:36:57.140Z
updatedAt: 2022-06-07T22:58:01.177Z
publishedAt: 2022-06-07T22:58:01.177Z
firstPublishedAt: 2018-09-17T15:45:39.870Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: como-funciona-a-integracao-do-mercado-livre
legacySlug: como-funciona-a-integracao-do-mercado-livre
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

O [Mercado Livre](https://www.mercadolivre.com.br/) é um dos líderes do e-commerce na América Latina, oferecendo soluções de comércio eletrônico para que pessoas e empresas possam comprar, vender, pagar, anunciar e enviar produtos por meio da internet.

Sua operação está presente nos seguintes países: Argentina, Brasil, Chile, Colômbia, México, Uruguai e Venezuela.

Depois de concluir a [integração](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/51oWBHvVxSs8eAwLQhSbSd) da sua loja VTEX com o Mercado Livre, explicaremos como funciona o fluxo da integração para manter as informações atualizadas no Mercado Livre. O artigo foi dividido em:

1. [Pedidos](#1-pedidos)
2. [Produtos](#2-produtos)
3. [Preços](#3-precos)
4. [Estoque](#4-estoque)
5. [Pontos de Retirada](#5-pontos-de-retirada)

## 1. Pedidos

Todos os [pedidos](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE) realizados no Mercado Livre serão enviados para a plataforma VTEX, cada pedido com um status próprio conforme tabela abaixo. Para saber mais sobre os status dos pedidos na VTEX, leia o artigo [Fluxo e status de pedido](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196).

| Status na plataforma VTEX | Resposta do Mercado Livre | Descrição da resposta do Mercado Livre |
| ---------- | ---------- | ---------- |
| Pronto para manuseio | Ready-for-handing | Status que indica que é preciso iniciar o manuseio, preparar a nota fiscal e rastreamento do pedido. Nesse status é esperada a confirmação baixa na reserva do item. Em geral, é nesse momento que a integração com o [ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) é feita, mas é possível realizar a ação manualmente pelo gerenciamento de pedidos. O pedido só seguirá o fluxo quando essa confirmação for realizada |
| Preparando entrega | Handling | Itens são reservados para evitar vendas de itens indisponíveis. O pedido ficar em manuseio, aguardando notificações de fatura (invoice ou nota fiscal), geralmente vindas do ERP |
| Faturado | Invoiced | Fluxo do pedido finalizado com sucesso e o pedido foi enviado |
| Enviado | Shipped | Pedidos que já foram despachados para entrega |
| Entregue | Delivered | Pedidos entregues ao seu destinatário final |
| Cancelado | Cancelled | Pedidos que foram cancelados |
| Carência para cancelamento | Window-to-cancel | Status do tempo de cancelamento do cliente. Após a aprovação do pagamento, o cliente tem 30 minutos (definido como padrão nas [Configurações Gerais](https://help.vtex.com/pt/tutorial/configuracoes-gerais/) do módulo de Gerenciamento de Pedidos) para realizar seu cancelamento. Nesse período, o estorno do pedido é realizado automaticamente |

Você deve possuir um [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) *OMS - Full Access* para poder realizar ações no fluxo dos pedidos. Em cada status do fluxo de pedidos na VTEX, você receberá uma resposta diferente do Mercado Livre. Só quando os pedidos com o status `Paid` são identificados no Mercado Livre, eles são integrados na VTEX.

O ID do pedido usado no Mercado Livre é diferente do que você vai encontrar na VTEX. Para entender a lógica por trás da correspondência desses IDs, leia o artigo [Como funciona o carrinho com múltiplos itens no Mercado Livre](https://help.vtex.com/pt/tutorial/como-funciona-o-carrinho-com-multiplos-itens-no-mercado-livre).

### Faturando o pedido

De acordo com a  [configuração logística](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy), você poderá emitir a nota diretamente no marketplace, ou através do seu [ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) integrado com a VTEX. Existem dois tipos de configurações logísticas:

- [Pedidos ME1](#pedidos-me1)
- [Pedidos ME2](#pedidos-me2)

#### Pedidos ME1

Nos pedidos da [modalidade ME1](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-1-me1), quando um pedido novo chega à plataforma VTEX, o seller precisa cuidar de todas as mudanças de status na plataforma VTEX para que sejam refletidas automaticamente no Mercado Livre. Para isso, deve utilizar a rota de API [POST Order Invoice Notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification), a VTEX carregará a nota fiscal do Mercado Livre e enviará para o ERP.

Os pedidos na modalidade ME1 não passam pelo status de `Invoiced`. O status do pedido será alterado para `Shipped` quando o seller informar o `trackingNumber`, atualizando no OMS.

Para isso, utilize a rota de API [POST Order invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoice#invoicenotification) e preencha todos os campos obrigatórios e o campo `embeddedInvoice`.

A única ação na interação que não se reflete na plataforma do Mercado Livre é o cancelamento de pedido na VTEX, dado que porque a integração não consegue cancelar no Mercado Livre.

#### Pedidos ME2

Nos pedidos na [modalidade ME2](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-2-me2), o ERP enviará as informações do pedido para a VTEX, que por sua vez enviará para o Mercado Livre. Porém, há diferença na emissão de nota entre os tipos logísticos do ME2, são eles:

- Nos tipos logísticos [Coletas](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#crossdocking-coletas) ou [Places](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#places), você precisará emitir a nota obrigatoriamente ou no Mercado Livre, ou no seu ERP.
- No tipo logístico [Mercado Envios Full](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-full), você deverá emitir a nota no faturador do Mercado Livre.
- No tipo logístico [Flex](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#flex) ou [Drop Off](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#drop-off), você poderá emitir a nota no faturador do ML ou no seu ERP. A nota não é obrigatória.

Nos pedidos da modalidade ME2, a plataforma do Mercado Livre é responsável por alterar o status do pedido para `Shipped` e `Delivered`.

Se o seller utilizar o [faturador do Mercado Livre](https://www.mercadolivre.com.br/emitir-nota-fiscal/) configurado para emitir notas fiscais dos anúncios, quando ocorrer uma venda, a integração irá importar o pedido junto com a nota fiscal emitida no Mercado Livre para a VTEX. Nesses casos, será possível também imprimir a etiqueta de envio na VTEX.

No tipo logístico Mercado Envios Full, sempre será necessário configurar o faturador no Mercado Livre porque é o próprio [marketplace quem fatura o pedido](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#consultar-as-notas-fiscais-do-mercado-livre-por-api). Para os demais tipos logísticos do modo ME2, é opcional.

Caso o seller não tenha o faturador configurado no Mercado Livre para imprimir a etiqueta, será necessário [faturar no ERP](https://developers.vtex.com/docs/erp-integration-set-up-order-processing) e enviar a nota fiscal para VTEX para que a integração a envie para Mercado Livre. Utilize a rota de API [POST Order invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoice#invoicenotification) e preencha o campo `embeddedInvoice`, dessa forma o Mercado Livre liberará a etiqueta de envio.

Entretanto, para alterar o status dos pedidos para `Invoiced`, você deve preencher os campos obrigatórios dos ERPs e o campo `embeddedInvoice` levando em consideração o tipo de logística configurada.

Em pedidos com o tipo logístico Coleta e Places, você deve preencher os campos os campos `invoiceKey` e `cfop`.

## 2. Produtos

Os [produtos](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru) são os itens vendidos na sua loja, que fazem parte de uma [categoria](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf) cadastrada no seu [Catálogo VTEX](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR). Para enviar os produtos cadastrados no seu catálogo para o Mercado Livre, você precisará fazer o [mapeamento de categorias, atributos e variações](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA).

Qualquer mudança feita em seus produtos pelo admin VTEX em *PRODUTO > Catálogo > Produtos e SKUs* ou pela integração com o [ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-import-products) da sua loja será atualizada automaticamente no Mercado Livre.

Cada categoria de produtos anunciados no Mercado Livre possui atributos que podem ser obrigatórios ou não. Quanto mais atributos preenchidos no Mercado Livre seu produto tiver, melhor rankeado ele será no marketplace.

Os produtos precisam ter os seguintes campos na plataforma VTEX marcados para serem integrados:

- **Exibir no site**
- **Mostrar produto esgotado**
- **Política comercial**

No campo **Política comercial**, você deverá marcar a opção correspondente à [política comercial](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/15NZiQstCET8zyQUIa7nhw) vinculada ao Mercado Livre.

<div class = "alert alert-info">
Para acrescentar novas imagens em um anúncio que já existe no Mercado Livre, você precisará fazer todas as mudanças direto no painel do próprio marketplace. O Mercado Livre só aceita 12 imagens por produto sem variação, e até 10 imagens por variação.
</div>

## 3. Preços

Os preços são enviados pela primeira vez junto com o primeiro envio de produtos durante a integração. A partir disso, os preços dos anúncios no Mercado Livre são atualizados automaticamente, sempre que há alguma alteração de preço na plataforma VTEX.

Para cada SKU, a integração envia o [preço fixo](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy) que foi configurado na [política comercial](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/15NZiQstCET8zyQUIa7nhw) associada à integração. 

### Promoções

O Mercado Livre não permite promoções customizadas e a VTEX não repassa promoções customizadas. Para acessar uma promoção disponível, acessar a [Promoções do Mercado Livre](https://help.vtex.com/pt/tutorial/promocoes-do-mercado-livre-beta--3pEqEnru6H2JcZzYVioT5f).

Diminuir o preço não vai aparecer como promoção no Mercado Livre e não vai trazer o valor de uma promoção.

## 4. Estoque

O nível de  estoque de um produto é enviado pela primeira vez junto com o primeiro envio de produtos durante a integração. A partir disso, os estoques dos anúncios no Mercado Livre são atualizados automaticamente, sempre que há alguma alteração de estoque na plataforma VTEX. 

Para visualizar o estoque dos produtos enviados, acesse no Admin *MARKETPLACE > Integrações > Estoque*. Utilize o campo de busca e procure pelo código do SKU, caso queira encontrar por um produto específico. 

Em caso de dúvida, veja nossa documentação sobre [Erros de falta de estoque na integração com o Mercado Livre](https://help.vtex.com/pt/tutorial/erros-de-integracao-de-estoque-com-o-mercado-livre--3pWA3vRePuGmJ5tquY4fva) caso tenha alguma dúvida.

## 5. Pontos de Retirada

A etapa de Pontos de Retirada está disponível somente para clientes que [ativaram e configuraram seus pontos de retirada com a integração do Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/52C1lm8gMovN8v68s6v89d). No Mercado Livre, o cliente terá a opção de selecionar os pontos de retirada cadastrados para retirar o pedido.
