---
title: 'Marcações de pedidos pelo módulo de cobranças'
id: 4v33NVnAEe6HTgbF6sOBF2
status: PUBLISHED
createdAt: 2024-10-04T20:18:55.246Z
updatedAt: 2024-10-31T18:40:41.214Z
publishedAt: 2024-10-31T18:40:41.214Z
firstPublishedAt: 2024-10-04T21:40:07.736Z
contentType: tutorial
productTeam: Billing
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: consumption-tags-used-in-the-billing-module
legacySlug: marcacoes-de-pedidos-pelo-modulo-de-cobrancas
locale: pt
subcategoryId: 22TaEgFhwE6a6CG2KASYkC
---

A VTEX considera como [receita da loja](https://help.vtex.com/pt/tutorial/o-que-a-vtex-considera-como-receita-para-apuracao--58j4cfoXfisWyemASACwSq) o valor total dos pedidos aprovados no [fluxo da transação de pagamentos](https://help.vtex.com/pt/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ) e a partir disso realiza o cálculo da fatura. No entanto, é possível que taxas diferentes incidam sobre pedidos de mesmo valor, pois o módulo de cobranças atua com base em marcações.

Marcações são categorias que definem as características do pedido e sinalizam as regras de negócio aplicadas na venda. O pedido é analisado segundo determinados critérios e recebe as marcações que definem qual o _take rate_ a ser cobrado.

Este artigo apresenta quais são as marcações existentes no módulo de cobranças. Ao disponibilizarmos este conteúdo, o nosso objetivo é aumentar a transparência da sua relação comercial com a VTEX.

> ⚠️ O sistema de marcações de pedidos não realiza qualquer tipo de cobrança aos clientes da loja. Ele é somente uma fonte de dados que o módulo de cobranças consulta para realizar o cálculo da fatura.

## Etapa inicial para marcação de pedidos

Para que um pedido seja passível de marcação, ele deve atender às seguintes condições:

* Ter todas as [informações que constituem o pedido](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa) (pedidos [incompletos](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294) não recebem marcações).
* Possuir informação de pagamento com data de autorização da transação financeira.

> ℹ️ Pedidos gerados pelo [Multilevel Omnichannel Inventory (MOI)](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4), chamados de pedidos *chain*, não possuem informação de pagamento. Portanto, eles não recebem marcações e não são passíveis de cobrança.

## Alteração de pedidos e marcações

O pedido é marcado somente após finalizado. No entanto, quando um pedido é [alterado](https://help.vtex.com/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw#status-do-pedido-a-ser-alterado), ele é submetido a uma nova marcação, pois a alteração pode ter impactado as condições do *take rate* a ser cobrado.

> ❗ O pedido pode ser alterado diversas vezes e isso resultar em mudanças nas marcações feitas pelo módulo de cobranças. Enquanto estiver no status `preparando entrega`, o pedido pode continuar este processo de ser alterado e ter as marcações atualizadas.

## Grupos de marcações

Na VTEX, as marcações são categorizadas em três grupos principais: 

* [Marcações por canal de venda:](#marcacoes-por-canal-de-venda) relativo ao canal no qual o pedido é gerado.
* [Marcações por origem do pedido:](#marcacoes-por-origem-do-pedido) referente ao contexto de [marketplace e seller](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402).
* [Marcações por tipo de cliente:](#marcacoes-por-tipo-de-cliente) diz respeito à natureza jurídica do cliente, se pessoa física ou jurídica.

As próximas seções apresentam detalhes sobre cada um desses grupos.

## Marcações por canal de venda

Veja a seguir quais marcações existem relacionadas ao canal no qual o pedido é gerado:

* **IsInStore:** solução [VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc).
* **IsInfiniteShelf:** funcionalidade [Prateleira Infinita](https://help.vtex.com/pt/tracks/unified-commerce-strategies--3WGDRRhc3vf1MJb9zGncnv/40KMlmGI5tN0r0KPCDWgGn) do **VTEX Sales App** quando o item do [inventário](https://help.vtex.com/pt/tutorial/gerenciar-inventario--tutorials_139) não estava armazenado localmente.
* **IsSalesAppDeliveredByMainAccount:** solução [VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc) quando o item vendido pertencia à [conta principal](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex) e a venda foi realizada no ambiente da conta principal.
* **IsSocialSelling:** funcionalidade [Carrinho Compartilhável (Social Selling)](https://help.vtex.com/pt/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN).

  > ℹ️ A marcação `IsSocialSelling` é válida somente para os pedidos de [Carrinho Compartilhável (Social Selling)](https://help.vtex.com/pt/tutorial/como-usar-o-app-carrinho-compartilhavel--3ePPpkmeZ96GXbeIoGZbTN) que foram iniciados pelo **VTEX Sales App**.

* **IsCallCenter:** solução **VTEX Sales App** quando a venda foi promovida por um vendedor, atendente ou consultor, como ocorre com [televendas](https://help.vtex.com/pt/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R).
* **IsOnHands:** solução **VTEX Sales App** quando o pedido foi realizado na loja física e o item do inventário estava armazenado localmente. Esta marcação é feita no ambiente do marketplace.
* **IsOnHandsFulfillment:** solução **VTEX Sales App** quando o item vendido pertencia ao seller. Esta marcação é feita no ambiente do seller.

> ℹ️ Quando a loja atua tanto como marketplace quanto seller, o pedido recebe a marcação `IsOnHandsFulfillment`.

## Marcações por origem do pedido

A imagem abaixo apresenta como é feita a marcação do pedido com relação à origem do pedido para o marketplace e para o seller:

![marcacao_pedidos_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Billing/Contracts/marcacoes-de-pedidos-pelo-modulo-de-cobrancas_1.png)

> ⚠️ Mediante acordos comerciais, a VTEX concede um tipo de certificação a determinados canais de venda. Quando o pedido foi gerado em um canal de venda que não possui esse nível de certificação, não há uma marcação por origem e o pedido é marcado como `IsB2C`. Ou seja, somente canais de venda certificados possuem marcação por origem.

O fluxo a partir de `IsMarketplace` existe para marcar os pedidos no ambiente do seller e o fluxo de `IsSeller` para marcar os pedidos no ambiente do marketplace. Cada uma das marcações está descrita adiante.

### Marketplace

Veja a seguir quais marcações existem para os pedidos no ambiente do seller com relação ao marketplace no qual o pedido foi criado:

* **IsMarketplace:** pedido gerado em um [marketplace](https://help.vtex.com/pt/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8), seja ele [marketplace certificado](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-certificados), [marketplace parceiro](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-parceiros), [marketplace VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex) (loja atuou como marketplace) ou [marketplace externo](https://developers.vtex.com/docs/guides/external-marketplace-integration-guide). Todo pedido `IsMarketplace` é `IsCertifiedMarketplace` ou um marketplace externo, e esta primeira marcação existe apenas para fins de sistema.
* **IsCertifiedMarketplace:** pedido gerado em [marketplace certificado](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-certificados), [marketplace parceiro](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-parceiros) ou [marketplace VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex) (loja atuou como marketplace). Após receber esta marcação, o pedido necessariamente receberá a marcação `IsInternalCertifiedMarketplace` ou `IsExternalCertifiedMarketplace`.
    * **IsExternalCertifiedMarketplace:** pedido gerado em [marketplace certificado](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-certificados) (Amazon, Mercado Livre, entre outros), ou [marketplace parceiro](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-parceiros) (Shopee, Facebook, entre outros).
    * **IsInternalCertifiedMarketplace:** pedido gerado em [marketplace VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex), ou seja, a loja atuou como marketplace para um seller. Esta marcação pode ou não incluir um outro nível de marcação.
        * **IsInternalCertifiedMarketplaceAndIsParentAccount:** pedido gerado em marketplace VTEX quando o marketplace é conta principal e o seller sua [subconta](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#ambiente-adicional), ou seja, seu ambiente adicional.

### Seller

Veja a seguir quais marcações existem para os pedidos no ambiente do marketplace com relação ao seller que possui o item vendido:

* **IsSeller:** pedido gerado em marketplace quanto o item vendido pertence ao [seller](https://help.vtex.com/tutorial/o-que-e-um-seller). Todo pedido `IsSeller` é necessariamente `IsExternalSeller` ou `IsCertifiedSeller`, e esta primeira marcação existe apenas para fins de sistema.
* **IsExternalSeller:** pedido gerado em um [marketplace VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex) (loja atuou como marketplace) no qual o seller que possui o item vendido é um [seller externo](https://developers.vtex.com/docs/guides/external-seller-integration-guide).
* **IsCertifiedSeller:** pedido gerado em [marketplace certificado, marketplace parceiro](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-marketplaces-certificados) ou marketplace VTEX (loja atuou como marketplace) no qual o seller que possui o item vendido é [seller VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-seller-vtex). Todo pedido `IsCertifiedSeller` é necessariamente também `IsInternalCertifiedSeller`.
    * **IsInternalCertifiedSeller:** esta marcação existe apenas para fins de sistema, sendo que todo pedido `IsInternalCertifiedSeller` necessariamente receberá a marcação `IsInternalCertifiedSellerAndIsChildAccount` ou `IsSellerPortal`.
        * **IsInternalCertifiedSellerAndIsChildAccount:** pedido gerado em marketplace VTEX no qual o marketplace é uma conta principal e o seller que possui o item vendido é sua [conta franquia](https://help.vtex.com/pt/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa#relacao-entre-seller-white-label-e-conta-franquia).
        * **IsSellerPortal:** pedido gerado em marketplace VTEX no qual o marketplace é uma conta principal e o seller que possui o item vendido é sua [conta Seller Portal](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex).

## Marcações por tipo de cliente

Veja a seguir quais marcações existem relacionadas ao tipo de cliente do pedido:

* **IsB2B:** o cliente é pessoa jurídica e o pedido foi gerado no [contexto B2B](https://help.vtex.com/pt/tutorial/configurando-b2b-na-vtex--tutorials_238) (*Business to Business*).
* **IsB2C:** o cliente é pessoa física e o pedido foi gerado no contexto B2C (*Business to Customer*).

