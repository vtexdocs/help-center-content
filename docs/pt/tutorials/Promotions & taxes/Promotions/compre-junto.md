---
title: 'Criar promoção Compre Junto'
id: tutorials_323
status: PUBLISHED
createdAt: 2017-04-27T22:08:34.791Z
updatedAt: 2019-12-31T15:24:16.500Z
publishedAt: 2019-12-31T15:24:16.500Z
firstPublishedAt: 2017-04-27T23:03:15.238Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: buy-together
locale: pt
legacySlug: compre-junto
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

__Compre Junto__ é uma promoção utilizada para conceder desconto para produtos quando colocados ao mesmo tempo no carrinho.

O desconto pode ser aplicado em ambos os produtos. Ainda há a opção de o desconto ser aplicado apenas se for inserida no carrinho uma determinada quantidade de um dos produtos. 

Um exemplo para esse tipo de promoção seria *"compre uma calça e ganhe 10% na compra de um cinto"*. Outro exemplo possível seria a promoção *"compre um par de tênis + um par de meias e ganhe 15% de desconto"*.

## Dados gerais da promoção

- __Nome__: Nome da promoção
- __Status__: Ativa ou Inativa a promoção
- __Descrição__: Descrição interna da promoção. O objetivo desse campo é que ele seja usado para informação interna. Utilize a decrição para incluir detalhes sobre a promoção.
- __Validade__: Data e hora de início e de fim da promoção. Pode ser usada uma data e/ou horário futuros para que a promoção comece a ser aplicada no site. Caso seja configurada dessa forma, a promoção terá o status de agendada até que data e horário sejam atingidos. Enquanto a promoção estiver válida, ela terá o status de ativa. Ao término da data e hora definidos, o status será alterado para inativo automaticamente. É importante ressaltar que o sistema usa como referência a data e hora do usuário que realizou o agendamento.
- __Especificar dias da semana para ativação__: Essa opção é do tipo caixa de seleção. Quando marcada, disponibiliza sete outras caixas de seleção, para que sejam selecionados os dias da semana em que a promoção será aplicada. Se deseja que a promoção seja aplicada em qualquer dia da semana, não selecione essa opção.
- __Destaque nos produtos__: Insere uma tag com o nome da promoção. Utilizado na vitrine e na página de produto. Essa flag só será inserida caso se utilize o controle `<vtex.cmc:discountHightLight/>` no template. Este controle exibe a flag da promoção na pagina desejada.
- __Restringir esse benefício a produtos dos seguintes Sellers__: No lado direito da tela, preencha o nome dos sellers cujos produtos receberão o desconto. Essa opção possibilita condicionar um desconto diferente para cada seller.
- __Política Comercial__: Selecione as Políticas Comerciais que oferecerão o desconto. Você pode oferecer descontos para políticas comerciais onde [sua loja é o marketplace](/pt/faq/o-que-e-um-marketplace) (*Fornecido por mim (Minha loja)*) ou o [seller](/pt/faq/o-que-e-um-seller) (*Entregue por mim (Lojas de terceiros)*).

## Listas de itens que você quer combinar e seus descontos

**Lista 1 de 2**

- __SKUs__: Insira aqui o nome ou ID dos SKUs a serem incluídos na primeira lista. Considerando o exemplo do início do artigo, este campo seria onde se deveria cadastrar a calça ou o tênis. Um outro exemplo seria oferecer uma promoção com um produto de dois tamanhos diferentes. Para isso, seria necessário inserir na lista 1 o SKU de tamanho P e na lista 2 o de tamanho G, por exemplo. Também é possível inserir manualmente cada SKU ou fazer a importação de uma lista de SKUs. A planilha modelo pode ser exportada pelo link __Download da lista de SKUs__. Esse campo é de preenchimento obrigatório.
- __Desconto__: Insira o desconto que será aplicado aos SKUs da primeira lista. Considerando o exemplo do início do artigo, neste campo deve ser cadastrado o valor de 15% de desconto a ser concedido ao tênis. Esse campo é de preenchimento obrigatório. Caso seu objetivo seja aplicar o desconto somente para a segunda lista, preencha este campo com __0__.
- __Quantidade mínima de produtos no pedido__: Quantidade necessária de SKUs a ser incluída no carrinho para que o desconto seja aplicado. Esse campo é de preenchimento obrigatório, sendo necessário, no mínimo, uma unidade.

**Lista 2 de 2**

- __SKUs__: Insira aqui o nome ou Id dos SKUs a serem incluídos na segunda lista. Considerando o exemplo do início do artigo, este campo seria onde se deveria cadastrar o cinto ou a meia. Também é possível inserir manualmente cada SKU ou fazer a importação de uma lista de SKUs. A planilha modelo pode ser exportada pelo link __Download da lista de SKUs__. Esse campo é de preenchimento obrigatório. _Tanto na lista 1 quanto na lista 2, o número máximo de SKUs aceito é **100**._
- __Desconto__: Insira o desconto que será aplicado aos SKUs da segunda lista. Considerando o exemplo do início do artigo, neste campo deve ser cadastrado o valor de 10% de desconto a ser concedido ao cinto ou os 15% de desconto para a meia. Caso seu objetivo seja aplicar o desconto somente para a primeira lista, preencha este campo com __0__.

## Condições para a promoção ser válida

- __Valor mínimo do pedido__: Escolha um valor mínimo do pedido para a promoção ser ativada. Você ainda pode especificar qual o total a ser considerado: *Somente os itens que fazem parte da promoção*, *Somente os itens que não fazem parte da promoção* ou *Todos os itens*.
- __Valor máximo do pedido__: Escolha um valor máximo do pedido para a promoção ser ativada. Você ainda pode especificar qual o total a ser considerado: *Somente os itens que fazem parte da promoção*, *Somente os itens que não fazem parte da promoção* ou *Todos os itens*.
- __Restrição de Promoção por BIN__: Preencha com o número do BIN desejado e clique no botão __+__.
- __Cluster de clientes__: Preencha com o identificador de um [cluster de clientes criado no Master Data](/pt/faq/como-criar-um-cluster-de-clientes).  
- __Utm\_source:__ O desconto será concedido caso a navegação seja realizada com a utm\_source com o valor cadastrado.
- __Utm\_campaign__: O desconto será concedido caso a navegação seja realizada com a utm\_campaign com o valor cadastrado.

## Restrições e limitações de uso

- __Quantas vezes essa promoção será aplicada em sua loja__: Preencha com o valor máximo desejado ou clique em *ilimitado*.
- __Quantas vezes essa promoção será aplicada em sua loja por cliente__: Preencha com o valor máximo desejado ou clique em *ilimitado*.
- __Permitir acumular promoções__: Permite que mais de uma promoção com o mesmo tipo seja concedida ao mesmo tempo.
- **Permitir acumular com preços manuais:** Permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas. Para a correta usabilidade dessa flag, é necessária uma configuração prévia da loja para permitir a inserção dos preços manuais. 

## Sobre o funcionamento da promoção

- A promoção será aplicada a __todos__ os itens das listas se a condição de quantidade mínima de produtos for atendida. Se o campo __quantidade mínima__ tiver valor igual __1__, basta que __pelo menos um SKU de cada lista__ esteja no carrinho para que a promoção seja aplicada.
- Se o cliente colocar 2 unidades do mesmo SKU, o desconto será aplicado apenas em 1 unidade caso a quantidade mínima seja __1__.
- Se o cliente colocar 2 SKUs que estão na lista 2, o desconto será aplicado a apenas 1 SKU, sempre no SKU mais barato (por exemplo, caso a quantidade mínima seja 1).
- 3 itens na lista 1 e a quantidade mínima igual a 1: Neste cenário, basta que 1 produto da lista seja colocado no carrinho para validar o contexto da promoção e aplicar o desconto nos itens da lista 2 (e/ou da lista 1, se houver desconto).
