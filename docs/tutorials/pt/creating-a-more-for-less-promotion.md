---
title: 'Criar promoção Leve Mais por Menos'
id: tutorials_325
status: PUBLISHED
createdAt: 2017-04-27T22:08:17.186Z
updatedAt: 2023-03-31T19:57:42.646Z
publishedAt: 2023-03-31T19:57:42.646Z
firstPublishedAt: 2017-04-27T23:03:15.551Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: leve-mais-por-menos
locale: pt
legacySlug: leve-mais-por-menos
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

A promoção do tipo Leve Mais por Menos é usada para conceder desconto quando o cliente adiciona várias unidades do mesmo produto ao carrinho. Um exemplo clássico dessa promoção seria "Leve 3 e pague 2".

Neste artigo, detalhamos o funcionamento de cada campo durante as etapas de configuração de uma promoção **Leve Mais por Menos** listadas abaixo.

1. [Quais os dados gerais desta promoção?](#1-quais-os-dados-gerais-desta-promocao)
    - [Restringir esta promoção a produtos dos sellers](#restringir-esta-promocao-a-produtos-dos-sellers)
    - [Política Comercial](#politica-comercial)
2. [Leve mais por menos](#2-leve-mais-por-menos)
3. [Quais as condições para a promoção ser válida?](#3-quais-as-condicoes-para-a-promocao-ser-valida)
4. [Restrições e limitações de uso](#4-restricoes-e-limitacoes-de-uso)

Para entender como funciona a implementação das promoções, leia nosso artigo de [Exemplos de Promoção](https://help.vtex.com/pt/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD).

## Criar a promoção

1. No Admin VTEX, acesse *Promoções > Promoções*, ou digite *Promoções* na barra de busca no topo da página.
2. Clique no botão `Criar Promoção`.
3. Selecione a opção **Leve Mais Por Menos**.
4. Preencha os campos da promoção.
5. Clique em `Salvar`.

## 1. Quais os dados gerais desta promoção?

- **Nome:** nome da promoção. Campo de preenchimento obrigatório.
- **Status:** opção que define se a promoção está ativa ou inativa. Campo de preenchimento obrigatório.
- **Descrição:** descrição interna da promoção. O objetivo desse campo é que seja usado para comunicação interna na sua loja, a fim de deixar claro se a promoção é devido à alguma campanha, queima de estoque.
- **Validade:** data e hora de início e de fim da promoção. Pode ser usada uma data e horário futuros, para que a promoção comece a ser aplicada no site. Caso seja configurada dessa forma, a promoção terá o status de agendada até que a data e horário sejam atingidos. Enquanto a promoção estiver válida, esta terá o status de ativa, e ao término da data e hora definidos o status será alterado para inativo automaticamente. Campo de preenchimento obrigatório.
- **Usar configurações de recorrência:** opção é do tipo caixa de seleção, que quando marcada disponibiliza sete outras caixas de seleção, para que sejam selecionados os dias da semana e as horas do dia em que a promoção será aplicada. Se deseja que a promoção seja aplicada em qualquer dia da semana, não selecione essa opção.
- **Destaque nos produtos:** insere uma flag com o nome da promoção, utilizada na vitrine e na página de produto. Essa flag só será inserida caso use o controle correto de exibição de promoção no template: `<vtex.cmc:discountHightLight/>`. Campo de preenchimento obrigatório.

### Restringir esta promoção a produtos dos sellers

Nesta seção, é possível definir para quais sellers a promoção será aplicada. Você pode determinar quais sellers serão incluídos ou excluídos do desconto. 

- **Iguais a:** selecione os nomes dos sellers desejados para inclui-los.
- **Diferentes de:** selecione os nomes dos sellers desejados para exclui-los.

Para que a promoção seja válida para todos os sellers, deixe a seleção vazia.

<div class = "alert alert-warning">
  <p>Não é possível selecionar diretamente um seller white label. Para incluir um seller white na promoção, existem duas opções:</p><ol>1. Restringir os sellers à loja principal. Essa restrição adiciona todos os sellers white label da sua loja à promoção.</ol><ol>2. Deixar a seleção vazia, incluindo todos os sellers. Aqui, todos os tipos de sellers - white label ou não - serão adicionados à promoção.</ol>
</div>

### Política Comercial

Esta seção estabelece as políticas comerciais válidas para a promoção. Você pode incluir ou excluir políticas comerciais do desconto.

- **Iguais a:** selecione as políticas comerciais desejadas inclui-las.
- **Diferentes de:** selecione as políticas comerciais desejadas exclui-las.
- **Fornecido por mim (Minha loja):** seleção de políticas comerciais com produtos da sua loja. Pode ser selecionada mais de uma política comercial.
- **Entregue por mim (Lojas de terceiros):** seleção de políticas comerciais em que seus produtos estão de lojas de terceiros. Pode ser selecionada mais de uma política comercial.

Para que a promoção seja válida para todas as políticas comerciais, deixe a seleção vazia.

## 2. Leve mais por menos

Esta seção define os produtos, a quantidade e o desconto que serão afetados pela promoção.

- **O cliente compra** `quantidade` **dos seguintes produtos:** quantidade de unidades do mesmo produto que deve ser inserida no carrinho para a promoção ser aplicada. Campo de preenchimento obrigatório.
- - **SKUs:** nomes ou IDs dos SKUs que terão o desconto aplicado. Você pode fazer a importação de uma lista de SKUs clicando no botão `Selecione um arquivo .txt`. O arquivo de texto (.txt) deve ter cada SKU ID em uma linha diferente. Você também pode baixar a lista de SKUs adicionada no campo clicando no botão `Download da lista de SKUs`.
- **Coleções:** seleção de coleções que serão incluídas na promoção. A promoção será aplicada somente aos produtos que estejam nas coleções cadastradas neste campo. Para isso, digite o nome da coleção de produtos que deseja oferecer esse tipo de desconto. É possível selecionar mais de uma coleção.

<div class = "alert alert-info">
  <p>Se não forem informados produtos por coleção ou por SKU, a plataforma não permitirá a criação da promoção.</p>
</div>

- **E leva** `quantidade` **desses produtos:** quantidade de unidades do produto que receberá o desconto configurado. Campo de preenchimento obrigatório.
   - **Com desconto de:** o cliente levará a quantidade selecionada de produtos com um desconto percentual definido no campo. 
   - **Preço Máximo por Item:** o cliente levará a quantidade selecionada de produtos com um preço máximo por item definido no campo. 

|![Leve mais por menos 1 -PT](//images.contentful.com/alneenqid6w5/4LBVcysY2Fwkcp7yossEYg/bbdb2096b0dd90293e7b8bbbb99d5daf/image__37_.png)|
|:--:|
| _Exemplo de uma promoção Compre 3 e Pague 2_|

### Configurações avançadas
Nesta seção, é possível especificar a aplicação do desconto.

#### O desconto deve ser aplicado

- **Considerando:** 
  - **Qualquer produto:** o desconto será aplicado aos produtos da coleção ou lista de SKUs, sem que o carrinho tenha necessariamente a quantidade cadastrada anteriormente. Assim, é considerado o somatório das unidades desses produtos.
  - **Somente produtos iguais:** o desconto somente será aplicado ao SKU. Para a aplicação ser válida é preciso ter a quantidade mínima cadastrada anteriormente. 

- **Aos produtos de valor:**
  - **Mais barato:**  o desconto será aplicado aos itens mais baratos da promoção.
  - **Mais caro:** o desconto será aplicado aos itens mais caros da promoção.

![Leve mais por menos 2 - PT](//images.contentful.com/alneenqid6w5/6t9FwhVBSzxkvcz0jFZIrN/7f52bc1849fa228884af45a785703fce/image__38_.png)

#### Como o desconto deve ser distribuído?

- **Apenas entre os** `Quantidade` **produtos que recebem desconto:** o desconto será aplicado integralmente à quantidade de produtos selecionada.
- **Proporcionalmente entre os** `Quantidade` **produtos:** o desconto será distribuído igualmente entre a quantidade de produtos selecionada.

## 3. Quais as condições para a promoção ser válida?

- **Valor mínimo e máximo do pedido:** a promoção será aplicada levando em conta o valor "bruto" do carrinho, sem considerar demais promoções ou frete.
- **Preço "de" e "por" são iguais ou Preço "de" e "por" são diferentes**: Somente uma opção pode ser selecionada. Refere-se aos preços do cadastro do produto.
- **Restrição de Promoção por BIN:** o desconto será concedido caso o BIN do cartão esteja entre os números preenchidos.
- **Cluster de clientes:** o desconto será concedido caso o cliente esteja cadastrado no cluster selecionado. É importante destacar que o nome do cluster deve ser exatamente como cadastrado, qualquer erro de grafia impedirá o funcionamento correto da configuração.
- **Utm_source:** o desconto será concedido caso a navegação seja realizada com as utm_source correspondente a qualquer um dos valores cadastrados. É importante destacar que o cliente pode inserir apenas um utm_source no checkout.
- **Utm_campaign:** o desconto será concedido caso a navegação seja realizada com a utm_campaign com o valor cadastrado.
- **Criar cupom a partir das UTMs acima:** cria um cupom a partir das UTMs cadastradas para dar ao cliente acesso à essa promoção apenas com o código do cupom.
- **Meio de pagamento:** o desconto será concedido caso a forma de pagamento selecionada pelo cliente seja a mesma cadastrada na promoção. Esse desconto somente será aplicado na finalização da compra, quando o cliente selecionar a mesma forma de pagamento cadastrada.

  <div class = "alert alert-info">
  <p> Por padrão, você pode cadastrar até 20 meios de pagamento por promoção. Além disso, existe a possibilidade de customização para incluir até 100 meios de pagamento. Caso precise utilizar mais de 20, entre em contato com o <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
 </div>

## 4. Restrições e limitações de uso

- **Quantas vezes essa promoção será aplicada em sua loja:** limita a quantidade de vezes  em que a promoção será aplicada. Quando a opção **ilimitada** é desmarcada, é disponibilizado um campo para cadastrar a quantidade de vezes que deseja limitar. Uma vez que a promoção já foi criada, essa condição só será aplicada a partir do dia em que foi configurada, não afetando os pedidos realizados anteriormente.
- **Quantas vezes essa promoção será aplicada em sua loja por cliente:** habilita a quantidade cadastrada acima não mais para quantidade de uso total da promoção, e sim para a quantidade de vezes que cada cliente poderá receber a promoção. Caso o campo acima também esteja selecionado, ele terá uma prioridade maior de atuação que este limite.
- **Definir quantidade máxima de itens afetados por carrinho**: define quantos itens do carrinho serão afetados pela promoção. Leia [esse artigo](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-itens-com-promocao-no-carrinho) para saber como configurar o campo.
- **Permitir acumular promoções:** permite que mais de uma promoção, independente do tipo de desconto, seja concedida ao mesmo tempo. Saiba mais sobre [como funciona a concorrência de promoções](https://help.vtex.com/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#).
- **Permitir acumular com preços manuais:**  permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas. Para habilitar a funcionalidade de preços manuais, use o endpoint [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).
