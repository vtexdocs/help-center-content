---
title: 'Otimização das opções de entrega no Checkout'
id: 6DeGO9eBSFWe4XkoS0SxAB
status: PUBLISHED
createdAt: 2022-05-25T19:12:15.339Z
updatedAt: 2023-03-23T17:31:59.995Z
publishedAt: 2023-03-23T17:31:59.995Z
firstPublishedAt: 2022-05-27T12:33:12.618Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slug: otimizacao-das-opcoes-de-entrega-no-checkout
locale: pt
legacySlug: otimizacao-das-opcoes-de-entrega-no-checkout
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Quando o cliente realiza um pedido, o carrinho pode conter produtos que se encontram em uma das seguintes configurações:
- Armazenamento em múltiplos locais ([estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) ou [docas](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)).
- Vendedores específicos para cada produto selecionado, incluindo [sellers white label](https://help.vtex.com/pt/tutorial/white-label-seller--5orlGHyDHGAYciQ64oEgKa).
- Entregas realizadas por diferentes [transportadoras](https://help.vtex.com/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE).

Neste contexto, o Checkout v6 da VTEX permite processar diferentes opções de entrega e combinar os produtos selecionados em pacotes. Esta otimização das opções de entrega (também conhecida como **Lean Shipping**), melhora a experiência de compra do cliente por meio das seguintes ações:
- **Redução de informações no Checkout**:
  - Opções de envios mais caros e demorados não são mostrados para o cliente.
  - Produtos com diferentes opções de entrega são organizados automaticamente em [múltiplos pacotes](https://help.vtex.com/pt/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV), sem a necessidade de análise do cliente.   

- **Checkout mais rápido**: processamento interno das opções disponíveis de entrega, reduzindo a quantidade de opções que possuem custos e prazo de entrega similares.

## Opções de entrega otimizadas

O Checkout v6 da VTEX combina informações como CEP do cliente, localização dos produtos, transportadoras disponíveis na região, e disponibiliza na tela do Checkout as seguintes opções de entrega **Mais econômica** e **Mais rápida**.

- **Mais econômica**: opção com o menor custo para o cliente.
- **Mais rápida**: opção com o menor tempo de entrega.

>⚠️ Quando somente um tipo de opção de entrega estiver disponível para um determinado pedido, as opções **Mais econômica** e **Mais rápida** não serão mostradas no Checkout.

## Desabilitar a função Opções de entrega otimizadas

A funcionalidade de **Opções de entrega otimizadas** está ativada por padrão no Checkout v6. Entretanto, em algumas regiões podem ocorrer cenários que contribuam para que esta função não seja utilizada. Em países como Espanha ou Estados Unidos, onde as opções disponíveis de entrega são similares, os consumidores preferem escolher a transportadora baseados no seu nível de confiança na empresa.

>⚠️ Ao desabilitar esta função no Admin VTEX, todas as opções disponíveis de entrega serão exibidas no processo do Checkout. Entretanto, caso a funcionalidade de [múltiplas entregas](https://help.vtex.com/pt/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV#) esteja habilitada na loja e existam opções de entrega diferentes entre os itens selecionados no carrinho, as **Opções de entrega otimizadas** continuarão a ser exibidas. Ou seja, a otimização de entrega será necessária para lidar com os múltiplos pacotes (itens com diferentes opções de entrega).

Para desabilitar a função __Opções de entrega otimizadas__, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Checkout__.
4. Em __Opções de entrega otimizadas__, clique no botão <i class="fas fa-toggle-off"></i> para desabilitar a opção __Otimizar exibição das opções de entrega__.

![Opções de entrega otimizadas](https://images.ctfassets.net/alneenqid6w5/4NfLhi5ao5JyVs4mNTwaRu/1101fc69a729d79465192bca2b331bfe/Op____es_de_entrega_otimizadas.PNG)

<ul>
  5. Clique em <b>Salvar</b>.
</ul>  

