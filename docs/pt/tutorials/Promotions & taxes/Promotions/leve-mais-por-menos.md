---
title: 'Criar promoção Leve Mais por Menos'
id: tutorials_325
status: PUBLISHED
createdAt: 2017-04-27T22:08:17.186Z
updatedAt: 2024-03-28T15:36:24.222Z
publishedAt: 2024-03-28T15:36:24.222Z
firstPublishedAt: 2017-04-27T23:03:15.551Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: creating-a-more-for-less-promotion
locale: pt
legacySlug: leve-mais-por-menos
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

A promoção do tipo Leve Mais por Menos é usada para conceder desconto quando o cliente adiciona várias unidades do mesmo produto ao carrinho. Um exemplo clássico dessa promoção seria "Leve 3 e pague 2".

Neste artigo, detalharemos os passos necessários para configurar uma promoção Leve Mais por Menos:

1. [Quais os dados gerais desta promoção?](#1-quais-os-dados-gerais-desta-promocao)
    - [Restringir esta promoção a produtos dos sellers](#restringir-esta-promocao-a-produtos-dos-sellers)
    - [Política Comercial](#politica-comercial)
2. [Leve mais por menos](#2-leve-mais-por-menos)
3. [Quais as condições para a promoção ser válida?](#3-quais-as-condicoes-para-a-promocao-ser-valida)
4. [Restrições e limitações de uso](#4-restricoes-e-limitacoes-de-uso)

Para entender como funciona a implementação das promoções, leia nosso artigo de [Exemplos de Promoção](https://help.vtex.com/pt/tutorial/promotion-examples--5A8UTc7knvAscxo7e7rMFD).

## Criar a promoção

1. No Admin VTEX, acesse **Promoções** > **Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2. Clique no botão `Criar promoção`.
3. Selecione a opção **Leve Mais Por Menos**.
4. Preencha os campos da promoção.
5. Clique em `Salvar`.

## 1. Quais os dados gerais desta promoção?

Nesta seção, fornecemos informações detalhadas sobre os dados gerais desta promoção.
- **Nome:** nome da promoção. Campo obrigatório.
- **Status:** Ativa ou inativa a promoção.
- **Descrição:** descrição interna da promoção. O objetivo desse campo é que seja usado para comunicação interna na sua loja, a fim de deixar claro se a promoção é devido à alguma campanha, queima de estoque.
- **Data de expiração:** data e hora de início e de fim da promoção. Pode ser usada uma data e/ou horário futuros, para que a promoção comece a ser aplicada no site. Caso seja configurada desta forma, o status da promoção será exibido das seguintes formas:
    - **Agendada:** antes da data e horário de início selecionados.
    - **Ativa:** durante o período programado para a promoção.
    - **Inativa:** após a data e horário de término selecionados.
- **Usar configurações de recorrência:** ao selecionar esta opção, é permitido realizar configurações de recorrência, por exemplo, dia da semana e horário.
- **Informações adicionais (opcional):** permite  incluir informações adicionais a promoção composto de um nome e valor.
- **Destaque nos produtos:** insere uma tag com o nome da promoção, utilizada na vitrine e na página do produto. Essa flag só será inserida caso use o controle correto de exibição de promoção no template: `<vtex.cmc:discountHightLight/>`. Campo de preenchimento obrigatório.

![Dados gerais 1 - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

### Restringir esta promoção a produtos dos sellers

Nesta seção, é possível definir para quais sellers a promoção será aplicada. Você pode determinar quais sellers serão incluídos ou excluídos do desconto.
- **Iguais a:** selecione os nomes dos sellers desejados para incluí-los.
- **Diferentes de:** selecione os nomes dos sellers desejados para excluí-los.

Para que a promoção seja válida para todos os sellers, deixe a seleção vazia.

>⚠️ Não é possível selecionar diretamente um seller white label. Para incluir um seller white na promoção, existem duas opções:1. Restringir os sellers à loja principal. Essa restrição adiciona todos os sellers white label da sua loja à promoção.2. Deixar a seleção vazia, incluindo todos os sellers. Aqui, todos os tipos de sellers - white label ou não - serão adicionados à promoção.

![Restringir - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

### Política comercial

Esta seção estabelece as políticas comerciais válidas para a promoção. Você pode incluir ou excluir políticas comerciais do desconto.

- **Iguais a:** selecione as políticas comerciais desejadas incluí-las.
- **Diferentes de:** selecione as políticas comerciais desejadas excluí-las.
- **Fornecido por mim (Minha loja):** seleção de políticas comerciais com produtos da sua loja. Pode ser selecionada mais de uma política comercial.
- **Entregue por mim (Lojas de terceiros):** seleção de políticas comerciais em que seus produtos estão em lojas de terceiros. Pode ser selecionada mais de uma política comercial.

Para que a promoção seja válida para todas as políticas comerciais, deixe a seleção vazia.

![Politica - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

## 2. Leve mais por menos

Esta seção define os produtos, a quantidade e o desconto que serão afetados pela promoção.

- **O cliente compra `quantidade` dos seguintes produtos:** quantidade de unidades do mesmo produto que deve ser inserida no carrinho para a promoção ser aplicada. Campo de preenchimento obrigatório.
    - **SKUs:** nomes ou IDs dos SKUs que terão o desconto aplicado. Você pode fazer a importação de uma lista de SKUs clicando no botão `Selecione um arquivo .txt`. O arquivo de texto (.txt) deve ter cada SKU ID em uma linha diferente. Você também pode baixar a lista de SKUs adicionada no campo clicando no botão `Download da lista de SKUs`.
- **Coleções:** seleção de coleções que serão incluídas na promoção. A promoção será aplicada somente aos produtos que estejam nas coleções cadastradas neste campo. Para isso, digite o nome da coleção de produtos que deseja oferecer esse tipo de desconto. É possível selecionar mais de uma coleção.

>ℹ️ Se não forem informados produtos por coleção ou por SKU, a plataforma não permitirá a criação da promoção.

- **E leva `quantidade` desses produtos:** quantidade de unidades do produto que receberá o desconto configurado. Campo de preenchimento obrigatório.
    - **Com desconto de:** o cliente levará a quantidade selecionada de produtos com um desconto percentual definido no campo.
    - **Preço Máximo por Item:** o cliente levará a quantidade selecionada de produtos com um preço máximo por item definido no campo.

 ![Leve Mais - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

### Configurações avançadas

Nesta seção, é possível especificar a aplicação do desconto.
O desconto deve ser aplicado:

- **Considerando:**
    - **Qualquer produto:** o desconto será aplicado aos produtos da coleção ou lista de SKUs, sem que o carrinho tenha necessariamente a quantidade cadastrada anteriormente. Assim, é considerado o somatório das unidades desses produtos.
    - **Somente produtos iguais:** o desconto somente será aplicado ao SKU. Para a aplicação ser válida é preciso ter a quantidade mínima cadastrada anteriormente.
    - **Aos produtos:**
        - **Mais baratos:** o desconto será aplicado aos itens mais baratos da promoção.
        - **Mais caros:** o desconto será aplicado aos itens mais caros da promoção.

![Leve Mais por menos - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

#### Como o desconto deve ser distribuído?
- **Apenas entre as `quantidade` produtos que recebem desconto:** o desconto será aplicado integralmente à quantidade de produtos selecionada.
- **Proporcionalmente entre os `quantidade` produtos:** o desconto será distribuído igualmente entre a quantidade de produtos selecionada.

## 3. Quais as condições para a promoção ser válida?

Nesta seção, detalharemos as condições em que você deve aplicar para que uma promoção seja considerada válida.

- **Valor mínimo e máximo do pedido:** a promoção será aplicada levando em conta o valor "bruto" do carrinho, sem considerar demais promoções ou frete.
- **Preço "de" e "por" são iguais ou Preço "de" e "por" são diferentes:** Somente uma opção pode ser selecionada. Refere-se aos preços do cadastro do produto.
- **Usar BIN de restrição:** o desconto será concedido caso o BIN do cartão esteja entre os números preenchidos.
- **Cluster de clientes:** o desconto será concedido caso o cliente esteja cadastrado no cluster selecionado. É importante destacar que o nome do cluster deve ser exatamente como cadastrado, qualquer erro de grafia impedirá o funcionamento correto da configuração.
- **Utm_source:** o desconto será concedido caso a navegação seja realizada com as utm_source correspondente a qualquer um dos valores cadastrados. É importante destacar que o cliente pode inserir apenas um utm_source no checkout.
- **Utm_campaign:** o desconto será concedido caso a navegação seja realizada com a utm_campaign com o valor cadastrado.
- **Criar cupom a partir das UTMs acima:** cria um cupom a partir das UTMs cadastradas para dar ao cliente acesso à essa promoção apenas com o código do cupom.
- **Meio de pagamento:** permite escolher se a promoção será aplicada em um ou mais tipos de meios de pagamento selecionados.

 >ℹ️ Por padrão, você pode cadastrar até 20 meios de pagamento por promoção. Além disso, existe a possibilidade de customização para incluir até 100 meios de pagamento. Caso precise utilizar mais de 20, entre em contato com o [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

![Condições de promoção - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

 ## 4. Restrições e limitações de uso

 - **Quantas vezes essa promoção será aplicada em sua loja:** limita a quantidade de vezes em que a promoção será aplicada. Quando a opção **ilimitada** é desmarcada, é disponibilizado um campo para cadastrar a quantidade de vezes que deseja limitar. Uma vez que a promoção já foi criada, essa condição só será aplicada a partir do dia em que foi configurada, não afetando os pedidos realizados anteriormente.
 - **Quantas vezes essa promoção será aplicada em sua loja por cliente:** o valor incluído neste campo determina o número máximo de vezes que cada cliente pode se beneficiar da promoção. Consideremos, por exemplo, um limite estabelecido de três utilizações. Caso a promoção seja aplicada três vezes em um único pedido, isso será considerado como uma única utilização em relação ao limite total. Assim, o cliente ainda terá a oportunidade de utilizar a promoção em mais dois pedidos diferentes. É importante destacar que este cálculo é independente da quantidade de vezes que a promoção é utilizada em cada pedido individualmente.
 - **Definir o número máximo de itens elegíveis por carrinho:** define quantos itens do carrinho serão afetados pela promoção. [Leia esse artigo](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-itens-com-promocao-no-carrinho) para saber como configurar o campo.
 - **Permitir acumular promoções:** permite que mais de uma promoção, independente do tipo de desconto, seja concedida ao mesmo tempo. Saiba mais sobre [como funciona a concorrência de promoções](https://help.vtex.com/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270).
- **Permitir acumular com preços manuais:** permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas. Para habilitar a funcionalidade de preços manuais, use o endpoint [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

![Restrições e limitações - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)
