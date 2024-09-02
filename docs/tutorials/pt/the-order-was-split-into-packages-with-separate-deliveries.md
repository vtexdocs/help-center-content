---
title: 'O pedido foi dividido em pacotes com entregas distintas'
id: 3OCOC82543vOsc3Ex32XTY
status: PUBLISHED
createdAt: 2024-06-19T15:03:37.373Z
updatedAt: 2024-06-19T15:13:11.172Z
publishedAt: 2024-06-19T15:13:11.172Z
firstPublishedAt: 2024-06-19T15:13:11.172Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: o-pedido-foi-dividido-em-pacotes-com-entregas-distintas
locale: pt
legacySlug: o-pedido-foi-dividido-em-pacotes-com-entregas-distintas
subcategory: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags / Palavras-chave:** entregas distintas, split de pedido, pacotes, remessa, produtos de pré-venda.

Na VTEX, há situações em que o cliente recebe seu pedido dividido em vários pacotes, independentemente de haver ou não uma [divisão do pedido](https://help.vtex.com/pt/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV) na plataforma. O cliente pode receber os itens do pedido em pacotes distintos nos seguintes casos:

* **Pedido com diferentes sellers:** é gerado um pedido para cada seller e haverá pelo menos um pacote correspondendo à entrega de cada seller.
* **Seleção de sellers white label:** quando envolve [sellers white label](https://help.vtex.com/pt/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa), a entrega do pedido pode ser feita em pacotes diferentes.
* **Seller com diferentes SLAs para envio dos itens:** mesmo se o pedido for atendido por um único seller, se os itens tiverem diferentes SLAs, o pedido poderá ser dividido em pacotes distintos.
* **Produtos de pré-venda:** quando o pedido inclui tanto [produtos de pré-venda](https://help.vtex.com/pt/tutorial/cadastrar-um-produto-para-pre-venda--4o6cUJ4gIg0MQWW8WfN34K) quanto produtos normais, a entrega será feita em pacotes diferentes.

No caso de produtos de pré-venda, quando o pedido é gerado, tanto os produtos pré-venda quanto os produtos normais têm a mesma data de entrega no checkout, mas isto é apenas uma estimativa da entrega. Após a aprovação do pagamento, o pedido é dividido em pacotes diferentes, sendo um pacote para os produtos de pré-venda e outro para os produtos normais. 

A data de entrega de cada pacote é alterada de acordo com o valor do `shippingEstimateDate` de cada produto, e esse campo pode ser verificado através do endpoint [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-).

## Solução

Para evitar uma divisão de pacotes em pedidos que incluam produtos de pré-venda, você pode configurar o [agrupamento de produtos por remessa](https://help.vtex.com/pt/tutorial/como-funciona-a-remessa). Desta forma, é possível agrupar em um único conjunto todos os pacotes a serem entregues pela mesma transportadora e provenientes da mesma [doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).

>❗ Ao configurar o agrupamento da remessa, esse comportamento será aplicado a todos os pedidos com datas de entrega distintas e não somente aos casos envolvendo produtos de pré-venda.

### Configurando a remessa

Para configurar a remessa na sua loja, siga os passos abaixo: 

1. No Admin VTEX, acesse **Configurações da loja > Envio > Configurações**, ou digite **Envio** na barra de busca no topo da página e selecione **Configurações da loja / Envio**.
2. Na página **Configurações gerais**, na seção **Agrupar produtos na mesma remessa**, preencha o campo _Criar grupos de remessa com intervalos de {X} dia(s)_ com o número de dias que deseja definir para a [remessa](https://help.vtex.com/pt/tutorial/como-funciona-a-remessa).
3. Clique em **Salvar**.

