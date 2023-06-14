---
title: Como funciona a promoção Compre e ganhe
id: tutorials_322
status: PUBLISHED
createdAt: 2017-04-27T22:08:41.148Z
updatedAt: 2021-12-13T17:23:17.182Z
publishedAt: 2021-12-13T17:23:17.182Z
firstPublishedAt: 2017-04-27T23:03:14.992Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: compre-e-ganhe
legacySlug: compre-e-ganhe
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

Esse tipo de promoção é utilizado para oferecer frete grátis ou um brinde caso determinado produto seja comprado. Por exemplo, “compre uma televisão e não pague o frete”, ou ainda “compre um video game e ganhe um jogo”.

## Quais são os dados gerais desta promoção?

- __Nome__
- __Nome da promoção__
- __Status__
- __Ativa ou Inativa a promoção__
- __Descrição interna da promoção__: o objetivo desse campo é que seja usado para comunicação interna na sua loja, a fim de deixar claro se a promoção é devido à alguma campanha, queima de estoque etc.
- __Validade__: data e hora de início e de fim da promoção. (Pode ser usada uma data e/ou horário futuros, para que a promoção comece a ser aplicada no site. Caso seja configurada dessa forma, a promoção terá o status de agendada até que a data e horário sejam atingidos. Enquanto a promoção estiver válida, esta terá o status de ativa e ao término da data e hora definidos, o status será alterado para inativo automaticamente.)
- __Especificar dias da semana para ativação__: essa opção é do tipo caixa de seleção, que quando marcado disponibiliza sete outras caixas de seleção, para que sejam selecionados os dias da semana em que a promoção será aplicada. Se deseja que a promoção seja aplicada em qualquer dia da semana, não selecione essa opção.
- __Qual tipo é o valor do desconto?__:

  1. __Preço Máximo por Item__: define o preço máximo para cada item da compra.
  2. __Frete grátis__: desconto total sobre o valor do frete.
  3. __Brinde__: desconto total sobre o valor do produto definido como brinde. Ao selecionar essa opção abrem os campos para inserir um SKU, a caixa para ativar o multiplicador de brindes e a quantidade de produtos diferentes que serão dados de brinde. O SKU pode ser inserido pelo nome ou Id, podendo ser incluído mais de um. Para aprender a configurar esse tipo de desconto, leia o artigo [Configurar promoção Compre e ganhe para um SKU específico](/pt/tutorial/configurar-promocao-compre-e-ganhe-para-um-sku-especifico).
- __Destaque nos produtos__: insere uma tag com o nome da promoção. Utilizado na vitrine e na página de produto. Essa flag só será inserida caso use o controle correto de exibição de promoção no template. <vtex.cmc:discountHightLight>;
- __Seller__: selecione o seller que oferecerá o desconto. Se possui multiloja, aparecerão aqui todos os sellers que tiver cadastrado em sua conta. Essa opção possibilita criar condicionar um desconto diferente para cada seller.
- __Política Comercial__: selecione as Políticas Comerciais que oferecerão o desconto. Serão listadas aqui todas as políticas que tiver cadastrada em: `E-Commerce > Marketplace > Políticas Comercias`. Essa opção disponibiliza criar uma promoção específica para uma, ou mais de uma, política comercial.

## Compre e Ganhe

- __Coleções__: digite o nome da coleção de produtos que deseja oferecer esse tipo de desconto. Pode ser inserida mais de uma. A promoção será aplicada somente aos produtos que estejam nas coleções cadastradas nesse campo.
- __SKUs__: pode inserir o nome ou Id dos SKUs que deseja que o desconto seja aplicado. Pode fazer a importação de uma lista de SKUs, que deve estar salvo em um arquivo de texto (.txt) com cada Id em uma linha diferente. 

__OBS__: se não forem limitados produtos por coleção ou SKU, a plataforma não permitirá a criação da promoção.

__Atenção__: só é possível cadastrar, no máximo, 100 SKUs na promoção Compre e Ganhe. 

- __Quantidade de produtos para o Benefício__: permite definir a quantidade de produtos que devem ser inseridos no carrinho, para que o desconto seja concedido. Esse campo é de preenchimento obrigatório.

## Quais condições para a promoção ser válida?

- __Restrição por BIN__: define para quais cartões de crédito a promoção estará ativa.
- __Cluster de Clientes__: pode usar um campo existente na Entidade de Dados __CL__ para criar uma restrição. Exemplo: `idade=25`
- __Tipo de frete__: o desconto será concedido caso o tipo de frete for o mesmo que o cadastrado.
- __Utm\_source__: o desconto será concedido caso a navegação seja realizada com a utm\_source com o valor cadastrado.
- __Utm\_campaign__: o desconto será concedido caso a navegação seja realizada com a utm\_campaign com o valor cadastrado.
- Restrições e limitações de uso

## Restrições e Limitações de uso

- __Somente para itens iguais__: o desconto somente será aplicado por SKU, desde que cada um tenha a quantidade mínima cadastrada. Se não marcar essa opção, o desconto será aplicado aos produtos da coleção ou lista de SKU, sem que cada um deles tenha no carrinho necessariamente a quantidade cadastrada, sendo considerado o somatório das unidades desses produtos.
- __Permitir acumular promoções__: permite que mais de uma promoção com o mesmo tipo de desconto seja concedida ao mesmo tempo.
