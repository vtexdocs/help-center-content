---
title: 'Como funciona o desconto progressivo'
id: tutorials_324
status: PUBLISHED
createdAt: 2017-04-27T22:08:26.447Z
updatedAt: 2019-12-31T15:22:29.353Z
publishedAt: 2019-12-31T15:22:29.353Z
firstPublishedAt: 2017-04-27T23:03:15.195Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: desconto-progressivo
locale: pt
legacySlug: desconto-progressivo
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

Esse tipo de promoção é utilizado quando se deseja oferecer um percentual de desconto para determinada quantidade de produtos inseridos no carrinho. Por exemplo, “na compra de 5kg de ração, receba 5% de desconto. Adicione mais 5kg e receba mais 10%”.

## Campos

### Quais são os dados gerais desta promoção?

- **Nome:** Nome da promoção
- **Status:** Ativa ou Inativa a promoção
- **Descrição:** Descrição interna da promoção. O objetivo desse campo é que seja usado para comunicação interna na sua loja, a fim de deixar claro se a promoção é devido à alguma campanha, queima de estoque etc.
- **Validade:** Data e hora de início e de fim da promoção. Pode ser usada uma data e/ou horário futuros, para que a promoção comece a ser aplicada no site. Caso seja configurada dessa forma, a promoção terá o status de agendada até que a data e horário sejam atingidos. Enquanto a promoção estiver válida, esta terá o status de ativa e ao término da data e hora definidos, o status será alterado para inativo automaticamente.
- **Especificar dias da semana para ativação:** Essa opção é do tipo caixa de seleção, que quando marcado disponibiliza sete outras caixas de seleção, para que sejam selecionados os dias da semana em que a promoção será aplicada. Se deseja que a promoção seja aplicada em qualquer dia da semana, não selecione essa opção.
- **Destaque nos produtos:** Insere uma tag com o nome da promoção. Utilizado na vitrine e na página de produto. Essa flag só será inserida caso use o controle correto de exibição de promoção no template. `<vtex.cmc:discountHightLight/>`
- **Seller:** Selecione o seller que oferecerá o desconto. Se possui multiloja, aparecerão aqui todos os sellers que tiver cadastrado em sua conta. Essa opção possibilita criar condicionar um desconto diferente para cada seller.

### Política Comercial

Selecione as Políticas Comerciais que oferecerão o desconto. Serão listadas aqui todas as políticas que tiver cadastrada na seção **Política comercial**. Essa opção disponibiliza oferecer descontos diferentes para cada uma delas.

### Desconto progressivo

- **Coleções:** Digite o nome da coleção de produtos que deseja oferecer esse tipo de desconto. Pode ser inserida mais de uma. A promoção será aplicada somente aos produtos que estejam nas coleções cadastradas nesse campo.
- **SKUs:** Pode inserir o nome ou Id dos SKUs que deseja que o desconto seja aplicado. Pode fazer a importação de uma lista de SKUs, que deve estar salvo em um arquivo de texto (.txt) com cada Id em uma linha diferente. (OBS: Se não forem limitados produtos por coleção ou SKU, a plataforma não permitirá a criação da promoção.)
- **Quantidade:** Número de itens para que a promoção seja aplicada. Este campo é de preenchimento obrigatório. Considerando o exemplo do início do artigo, aqui você precisaria cadastrar **5**.
- **Desconto:** Desconto a ser aplicado se a quantidade definida acima for incluída no carrinho.
- **Botão de inclusão “+”:** Serve para incluir mais linhas para fazer a progressão do desconto, sendo possível incluir no máximo 10 linhas com quantidades e descontos diferentes. Considerando o exemplo do início do artigo, seria necessário incluir mais uma linha e inserir 10 em quantidade e 15 em desconto.

### Quais as condições para a promoção ser válida?

- **Utm\_source:** O desconto será concedido caso a navegação seja realizada com a utm\_source com o valor cadastrado.
- **Utm\_campaign:** O desconto será concedido caso a navegação seja realizada com a utm\_campaign com o valor cadastrado.

### Restrições e limitações de uso

- **Somente para itens iguais:** O desconto somente será aplicado por SKU, desde que cada um tenha a quantidade mínima cadastrada. Se não marcar essa opção, o desconto será aplicado aos produtos da coleção ou lista de SKU, sem que cada um deles tenha no carrinho necessariamente a quantidade cadastrada, sendo considerado o somatório das unidades desses produtos.
- **Permitir acumular com preços manuais:** Permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas. Para a correta usabilidade dessa flag, é necessária uma configuração prévia da loja para permitir a inserção dos preços manuais. 
