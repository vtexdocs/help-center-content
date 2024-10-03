---
title: 'Criar promoção Preço máximo por item'
id: tutorials_3221
status: ARCHIVED
createdAt: 2017-04-27T21:52:05.359Z
updatedAt: 2019-12-31T15:21:04.382Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:14.883Z
contentType: tutorial
productTeam: Others
author: authors_24
slugEN: maximum-price-per-item
locale: pt
legacySlug: preco-maximo-por-item
subcategoryId: unknown-subcategory
---

A promoção __Preço máximo por item__ é utilizada para definir um preço máximo para um produto ou conjunto de produtos.

É possível criar até __10 promoções__ deste tipo, com um __limite de 100 SKUs__ em cada uma delas, onde cada SKU terá seu preço máximo individual e exclusivo.

Por se tratar de uma promoção, os preços cadastrados como máximo não poderão ser maiores do que o preço do produto.

>⚠️ **Atenção:** Para que a promoção Preço máximo por item funcione é **obrigatório escolher um meio de pagamento**.

## Dados gerais da promoção

- __Nome__: Nome da promoção
- __Status__: Ativa ou Inativa a promoção
- __Descrição__: Descrição interna da promoção. O objetivo desse campo é que seja usado para comunicação interna na sua loja, a fim de deixar claro se a promoção é devido à alguma campanha, queima de estoque etc.
- __Validade__: Data e hora de início e de fim da promoção. Pode ser usada uma data e/ou horário futuros para que a promoção comece a ser aplicada no site. Caso seja configurada dessa forma, a promoção terá o status de agendada até que data e horário sejam atingidos. Enquanto a promoção estiver válida, ela terá o status de ativa. Ao término da data e hora definidos, o status será alterado para inativo automaticamente. É importante ressaltar que o sistema usa como referência a data e hora do usuário que realizou o agendamento. 
- __Especificar dias da semana para ativação__: Essa opção é do tipo caixa de seleção. Quando marcada, disponibiliza sete outras caixas de seleção, para que sejam selecionados os dias da semana em que a promoção será aplicada. Se deseja que a promoção seja aplicada em qualquer dia da semana, não selecione essa opção.
- __Destaque nos produtos__: Insere uma tag com o nome da promoção. Utilizado na vitrine e na página de produto. Essa flag só será inserida caso se utilize o controle `<vtex.cmc:discountHightLight/>` no template. Este controle exibe a flag da promoção na pagina desejada.
- __Restringir esse benefício a produtos dos seguintes Sellers__: No lado direito da tela, preencha o nome dos sellers cujos produtos receberão o desconto. Essa opção possibilita condicionar um desconto diferente para cada seller.
- __Política Comercial__: Selecione as Políticas Comerciais que oferecerão o desconto. Você pode oferecer descontos para políticas comerciais onde sua loja é o [marketplace](/pt/faq/o-que-e-um-marketplace) (*Fornecido por mim (Minha loja)*) ou o [seller](/pt/faq/o-que-e-um-seller) (*Entregue por mim (Lojas de terceiros)*). 

## Preço máximo por item

- __Item__: Neste campo deve ser inserido o nome ou o ID do SKU que você deseja incluir na promoção.
- __Preço:__ Neste campo deve ser definido o preço máximo pelo qual será vendido o produto. Só é possível definir o preço máximo de um item por vez. Para adicionar produtos à promoção, clique no botão __+__.
- __Meio de  pagamento__: Selecione os meios de pagamento desejados para ativar a promoção.

>ℹ️ É possível fazer a importação de uma lista de SKUs, que deve estar salva em um arquivo .xls, com cada ID em uma linha diferente, seguido pelo preço máximo correspondente. Para ver um modelo, clique no link **download de planilha exemplo**.

## Condições para a promoção ser válida

- __Restrição de Promoção por BIN__: Preencha com o número do BIN desejado e clique no botão __+__.
- __Afiliados__: A promoção será aplicada aos afiliados preenchidos neste campo. Este filtro funciona apenas quando a opção __Entregue por mim (Loja de terceiros)__ está ativa na seção __Política Comercial__.
- __Cluster de clientes__: Preencha com o identificador de um [cluster de clientes criado no Master Data](/pt/faq/como-criar-um-cluster-de-clientes).
- __Número máximo de parcelas__: Se desejar, você pode definir um número máximo de parcelas de pagamento como condição para que a promoção seja válida. Caso deseje que ela seja válida para qualquer número de parcelas, basta deixar marcada a caixa de seleção __ilimitado__.
- __Utm\_source__: O desconto será concedido caso a navegação seja realizada com a utm\_source com o valor cadastrado.
- __Utm\_campaign__: O desconto será concedido caso a navegação seja realizada com a utm\_campaign com o valor cadastrado..

## Restrições e limitações de uso

- __Quantas vezes essa promoção será aplicada em sua loja__: Preencha com o valor máximo desejado ou clique em *ilimitado*.
- __Quantas vezes essa promoção será aplicada em sua loja por cliente__: Preencha com o valor máximo desejado ou clique em *ilimitado*.
- **Permitir acumular com preços manuais:** Permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas. Para a correta usabilidade dessa flag, é necessária uma configuração prévia da loja para permitir a inserção dos preços manuais. 
