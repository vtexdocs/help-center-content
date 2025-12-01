---
title: 'Promoções para cenários específicos'
id: jOu9b69mKbrTDfSJYAawy
status: PUBLISHED
createdAt: 2020-01-22T13:55:51.326Z
updatedAt: 2025-12-01T17:08:04.859Z
publishedAt: 2023-10-23T17:08:04.859Z
firstPublishedAt: 2020-01-22T15:01:20.187Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: promotions-for-specific-scenarios
locale: pt
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugEN: promocoes
order: 5
---

Na VTEX existem diversos tipos de promoções. A **Promoção Regular** é a promoção padrão configurada nas contas VTEX.  
Quando a loja precisa aplicar regras mais específicas, é possível configurar outros tipos de promoções que atenda diferentes cenários. Veja a seguir quais promoções estão disponíveis:

-  [Compre junto](#compre-junto)  
-  [Leve mais por menos](#leve-mais-por-menos)  
-  [Desconto progressivo](#desconto-progressivo)  
-  [Compre e ganhe](#compre-e-ganhe)  
-  [Restrições de uso](#restricoes-de-uso)

##  Compre Junto

A promoção **Compre Junto** oferece descontos quando o cliente adiciona dois ou mais produtos ao carrinho.  
Essa promoção aplica o desconto a ambos os produtos ou a apenas um deles, conforme as condições configuradas.

A tela de configuração apresenta duas listas de SKUs, que podem ser adicionadas manualmente ou importadas por planilha. Cada lista possui campos próprios para configurar o **percentual de desconto** e a **quantidade mínima** exigida.


![Compre Junto - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/promocoes/compre-junto_1.gif)

- **Lista 1:** inclua os produtos principais e defina o percentual de desconto. 
- **Lista 2:** adicione produtos complementares e configure o desconto aplicado a eles.

> ℹ️ Adicione SKUs diferentes na Lista 1 e na Lista 2. 

**Exemplos:**

- Compre uma calça e ganhe **10% de desconto** em um cinto.
- Compre um par de tênis e um par de meias e ganhe **15% de desconto**.

Para mais informações, acesse [Criar promoção Compre Junto](https://help.vtex.com/pt/tutorial/compre-junto--tutorials_323).

## Leve Mais por Menos

A promoção **Leve Mais por Menos** concede descontos quando o cliente adiciona várias unidades do mesmo produto ao carrinho. 
**Exemplo:** “Leve 3 e pague 2”.

Na configuração dessa promoção, defina os **SKUs** ou **coleções** participantes, o número de produtos que o cliente precisa comprar e o número de produtos que receberão o desconto.

A tela exibe os seguintes campos:

- **O cliente compra [X] dos seguintes produtos:** quantidade mínima exigida.
- **SKUs:** adicione até 100 SKUs manualmente ou por planilha.
- **Coleções:** selecione uma coleção de produtos para simplificar a aplicação da promoção.
- **O cliente leva [Y] produtos com desconto:** defina quantos produtos entre os adicionados terão desconto.
- **Desconto de:** selecione o tipo de desconto **percentual** ou **valor fixo** e insira o valor.

### Configurações avançadas

As configurações avançadas são utilizadas para definir como o desconto será aplicado aos produtos selecionados. Veja como preencher os campos e escolha as opções adequadas às regras da promoção:

- **Como o desconto deve ser aplicado**
    - **Qualquer item:** aplica o desconto a qualquer produto dentro dos critérios configurados, sem necessidade de serem idênticos.
    - **Somente itens iguais:** o desconto será aplicado apenas quando os itens forem idênticos (mesmo SKU).
- **Produtos mais baratos:** o desconto será concedido aos produtos de menor valor.
- **Produtos mais caros:** o desconto será concedido aos produtos de maior valor.

Para mais informações, acesse [Criar promoção Leve Mais por Menos](https://help.vtex.com/pt/tutorial/leve-mais-por-menos--tutorials_325).

## Desconto Progressivo

A promoção **Desconto Progressivo** concede percentuais de desconto que aumentam conforme o cliente adiciona produtos elegíveis ao carrinho.

**Exemplo:** Na compra de 5kg de ração, receba **5%** de desconto. Adicione mais 5kg e receba **10%**.

Na configuração, defina os **SKUs** ou **coleções** participantes e estabeleça intervalos de quantidade com seus respectivos percentuais de desconto.

- **SKUs:** selecione os produtos específicos que receberão o desconto progressivo
- **Coleções:** escolha coleções de produtos para aplicar a regra em grupo.
- **Considerar somente itens iguais:** essa opção limita o desconto a produtos idênticos, considerando apenas a quantidade de um mesmo SKU no carrinho  SKUs diferentes, mesmo da mesma coleção, não são elegíveis.
- **Adicionar intervalo:** clique em `+` para criar novos níveis de quantidade e desconto (até 10 intervalos possíveis).

![Desconto Progressivo – PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/promocoes/desconto-progressivo_1.gif)

Para mais informações, acesse [Como funciona o Desconto Progressivo](https://help.vtex.com/pt/tutorial/desconto-progressivo--tutorials_324).

## Compre e Ganhe

A promoção **Compre e Ganhe** oferece frete grátis, um brinde ou a definição de um **preço máximo por item** sempre que o cliente adicionar os produtos elegíveis ao carrinho, conforme as regras configuradas.

**Exemplos:**
-  Compre uma televisão e receba frete grátis. 
-  Compre um videogame e ganhe um jogo.

![Compre e Ganhe – PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/promocoes/compre-e-ganhe_1.gif)

A tela de configuração permite definir as condições da compra e o benefício concedido.

- **Na compra de:**

    - **SKUs:** insira o nome ou ID dos produtos participantes. 
    - **Coleções:** adicione as coleções elegíveis.
    - **Quantidade mínima:** defina a quantidade de itens necessários.
    - **Considerar apenas itens iguais:** se ativada, a promoção só será aplicada quando os produtos forem idênticos.

- **Escolha qual benefício o cliente ganha:**

    - **Frete grátis:**
        - Todos os fretes.
        - Somente o frete mais barato.
        - Tipo específico de frete.
    -  **Brinde:** 
        - Selecione os SKUs do brinde.
        - Defina a quantidade máxima de brindes.
        - Escolha entre **um brinde por pedido** ou **um por item elegível.**
        - **Preço máximo por item:** limite de valor dos produtos que podem ativar a promoção.

> ⚠️ Uma promoção Compre e Ganhe permite configurar até 100 SKUs diferentes simultaneamente.

Para mais informações, acesse [Como funciona a promoção Compre e Ganhe](https://help.vtex.com/pt/tutorial/compre-e-ganhe--tutorials_322).

## Promoção de campanha

A **Promoção de Campanha** permite criar promoções voltadas a audiências específicas, oferecendo benefícios como **frete grátis**, **brindes** e **tabelas de preços promocionais**.

Esse tipo de promoção é vinculado a uma [audiência de campanha](https://help.vtex.com/pt/tutorial/criar-audiencia-de-campanhas--6cnuDZJzIkIeocewAQQK4K), que define o público-alvo impactado pela oferta.

> ❗Audiências de campanha e suas promoções são válidas apenas para a conta principal da loja. Contas de sellers não oferecem essa funcionalidade.

Para mais informações, acesse [Criar promoção de campanha](https://help.vtex.com/pt/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume).

## Restrições de uso

A seção Restrições de uso está presente em todos os tipos de promoções. Veja a seguir quais são essas restrições e o que cada uma significa.

- **Limitar o uso da promoção na loja:** ative esta opção para definir um número máximo de utilizações da promoção em toda a loja.  

- **Limitar o uso da promoção por cliente:** ative esta opção para restringir quantas vezes cada cliente pode aproveitar a promoção.  

- **Limitar a quantidade de itens elegíveis:** permite restringir o número máximo de itens por pedido que podem receber o desconto. O comportamento dessa configuração varia de acordo com a opção selecionada na promoção [Compre e Ganhe](#compre-e-ganhe).  

  - Para as condições **Desconto nominal**, **Desconto nominal: fórmula** e **Preço máximo por item**, o limite é aplicado ao total de itens no carrinho.

 - Para a condição **Desconto percentual**, é permitido escolher se o limite será aplicado por carrinho, por produto ou por SKU. Para mais informações sobre descontos nessas  condições , acesse a [Promoção Regular](https://help.vtex.com/pt/tutorial/regular-promotion--tutorials_327).

 A tabela a seguir mostra em quais tipos de promoção cada restrição pode ser aplicada:

 | Tipo de promoção | Limitar uso na loja | Limitar uso por cliente | Limitar itens elegíveis |
| :---- | :---: | :---: | :---: |
| **Regular** | sim | sim | não |
| **Compre Junto** | sim | sim | não |
| **Mais por Menos** | sim | sim | sim |
| **Desconto Progressivo** | sim | sim | sim |
| **Compre e Ganhe** | sim | sim | não |
| **Campanha** | sim | sim | não |