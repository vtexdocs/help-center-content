---
title: 'Trocar seller de um pedido do VTEX Sales App - (Beta)'
id: 6kJrNcroPbBpId9aCQTK1
status: PUBLISHED
createdAt: 2022-08-30T15:51:49.324Z
updatedAt: 2023-05-31T15:41:02.447Z
publishedAt: 2023-05-31T15:41:02.447Z
firstPublishedAt: 2022-08-30T17:47:24.530Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: change-seller-of-an-vtex-sales-app-order-beta
locale: pt
legacySlug: trocar-seller-de-um-pedido-do-instore-beta
subcategoryId: 5SE2asHiQtHKfbnFru8RWH
---

>ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

Durante o processamento de um pedido no VTEX Sales App, é possível que ele seja recusado por motivos diversos, como falta de estoque de um produto no seller que atenderia o pedido. Como solução para este problema, o sistema pode escolher um seller que apresenta estoque disponível dos itens do pedido.

>⚠️ Um pedido recusado no VTEX Sales App não significa que ele foi cancelado. O status recusado indica apenas que o seller indicado não será capaz de finalizar o pedido.

Existem duas possibilidades de troca de seller:

* [Automática](#troca-automatica-de-seller)
* [Manual](#troca-manual-de-seller) 

É possível desabilitar a funcionalidade da troca de seller. Com isso, o pedido feito pelo VTEX Sales App não terá a opção de recusa, apenas de cancelamento do pedido.

| **Ativo** | **Desativo** |
|----|
| ![Recusar](https://images.ctfassets.net/alneenqid6w5/3ko5d7jnhUZh4HDxx3hr6d/3acaa50706a0938f0cbd30446cfebff1/Recusar.png) | ![Cancelar](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png) |

## Troca automática de seller

Após a recusa de um pedido no VTEX Sales App, o sistema irá procurar automaticamente um novo seller que atenda esse pedido com mesmos ou menores preços e prazo de entrega.  Caso o sistema não encontre uma loja ou centro de distribuição que tenha essas condições,o pedido será cancelado e esta ação não poderá ser desfeita.

Recomendamos que, caso um seller não seja encontrado automaticamente, seja realizada a [troca de seller manualmente](#troca-manual-de-seller). Para habilitar essa funcionalidade, entre em contato com o [Suporte da VTEX](https://support.vtex.com/hc/pt-br/requests). 

![pedidos recusados PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

## Troca manual de seller

Para trocar manualmente o seller de um pedido no VTEX Sales App, siga os passos abaixo.

1. No Admin VTEX, acesse **Pedidos** > **Fulfillment da Loja** > **Dashboard**, ou digite **Dashboard** na barra de busca no topo da página. No Admin, clique em .
2. Na seção **Pedidos recusados**, clique no pedido que deseja trocar o seller. Caso a sua loja não tenha nenhum pedido recusado, essa seção ficará oculta.
3. Na página do pedido, clique em `Trocar seller`.
4. Selecione o seller desejado para o pedido. Na janela será apresentado o prazo de entrega e preço do frete de cada seller, além de indicar qual seller apresenta menor prazo.
![trocar seller PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)
5. Após selecionar o seller, clique em `Continuar`.
6. Confira as informações da troca de seller e clique em `Confirmar` para finalizar.
![trocar seller 2 PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

>ℹ️ O cliente só será notificado da troca de seller por email caso o prazo de entrega seja diferente do que o original.

