---
title: 'Seller Portal: Criar uma promoção'
id: kzNPEaiJE8EWkDzO9dbBI
status: PUBLISHED
createdAt: 2023-09-01T15:28:13.875Z
updatedAt: 2025-09-02T17:56:58.391Z
publishedAt: 2025-09-02T17:56:58.391Z
firstPublishedAt: 2023-09-01T16:58:54.457Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: seller-portal-creating-a-promotion
legacySlug: seller-portal-criar-uma-promocao
locale: pt
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

Para criar uma nova promoção como seller no Seller Portal, siga o passo a passo abaixo.

1. No Admin VTEX, acesse **Produtos > Promoções > Promoções** ou digite **Promoções** na barra de busca no topo da página.
2. Clique em `Criar promoção`.
3. Preencha as informações descritas em [Campos de cadastro da promoção](#campos-de-cadastro-da-promocao).
4. Clique em `Salvar.`
5. Revise as configurações da sua promoção antes de publicá-la.
![seller-portal-promo-revisao-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/sellers/seller-portal/seller-portal-criar-uma-promocao_1.png)
6. Depois de revisar as informações, clique em `Confirmar`.

Feito isso, a promoção será ativada e aplicada na sua loja.

> ℹ️ As promoções que afetam os mesmos itens inseridos no carrinho são comparadas pelo seu valor de desconto. Nesse caso, o módulo de Promoções procura sempre aplicar a promoção mais vantajosa para o comprador.

## Campos de cadastro da promoção

### Geral

Nesta seção, você deve configurar as informações gerais da sua promoção.

![seller-portal-promo-geral-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/sellers/seller-portal/seller-portal-criar-uma-promocao_2.png)

* **Nome:** nome da promoção.
* **Status:** opção que define se a promoção está ativa <i class="fas-toggle-on"></i> ou inativa <i class="fas-toggle-off"></i>.
* **Descrição:** descrição interna da promoção. O objetivo desse campo é que seja usado para comunicação interna na sua loja, a fim de deixar claro se a promoção é devido à alguma campanha, queima de estoque, etc.
* **Data de início:** data de início da promoção. Pode ser usada uma data futura para que a promoção comece a ser aplicada no site. Caso seja configurada dessa forma, a promoção terá o status de **agendada** até que a data seja atingida. 
* **Data de término:** data de término da promoção. Enquanto a data de término estiver válida, a promoção terá o status de ativa, e ao término da data definida o desconto será inativado automaticamente.
* **Horário de início:** hora de início da promoção.
* **Horário de término:** hora de término da promoção.

### Tipo de desconto

Seção que define o tipo e valor do desconto que será aplicado na promoção. Veja as opções de desconto a seguir:

![seller-portal-promo-tipo-desconto-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/sellers/seller-portal/seller-portal-criar-uma-promocao_3.png)

#### Preço

* **Percentual:** percentual de desconto que será concedido ao valor do produto.
* **Preço máximo por item:** o preço máximo para cada item elegível da compra será o preço configurado acima. Essa opção só será aplicada nos produtos com preço maior do que o valor configurado nesta opção.

#### Frete

* **Frete grátis:** desconto do valor total do frete dos itens elegíveis para a promoção.
* **Percentual:** percentual de desconto que será concedido ao valor do frete. 
* **Frete máximo:** valor máximo que o frete poderá assumir. Caso exista um frete mais barato que o valor máximo configurado, será cobrado o frete de menor preço.

### Produtos elegíveis

Nesta seção, você precisa escolher se a promoção será aplicada a todos os produtos cadastrados na sua loja ou apenas a produtos específicos, conforme ilustrado abaixo.

![seller-portal-promo-produtos-elegiveis-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/sellers/seller-portal/seller-portal-criar-uma-promocao_4.png)

* **Todos os produtos:** aplica a promoção a todo o seu catálogo.
* **Produtos que atendam a todas as seguintes regras:** limita a sua promoção a produtos específicos a partir das regras de seleção a seguir:
  * **Produto, Categoria, Marca, SKU:** opção que define o critério de seleção de produtos.
      * `É uma das`: inclui o critério de seleção de produtos.
      * `Não é uma das`: exclui o critério de seleção de produtos.

Após definir os critérios de seleção, digite o nome dos itens a serem incluidos ou excluidos.

Para adicionar mais de uma regra de seleção, clique em `+ Adicionar regra`. Se mais de uma regra for configurada, apenas os itens que atendem às duas regras receberão o desconto.

Para deletar uma regra, clique em <i class="fas-trash-can"></i> `Remover regra`.

### Condições

O pedido do cliente deve atender a todas as condições cadastradas nesta seção para ser válido na promoção.

![seller-portal-promo-condicoes-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/sellers/seller-portal/seller-portal-criar-uma-promocao_5.png)

* **Preço do item:** o desconto será concedido apenas aos itens que estão dentro do intervalo de preço preenchidos. 
* **Tipo de envio:** o desconto será concedido caso o tipo de frete escolhido pelo cliente seja o mesmo que o cadastrado na promoção. 
* **País de entrega:** o desconto será concedido aos itens que são entregues aos países selecionados neste campo.
* **CEP de entrega:** o desconto será concedido caso o CEP de entrega esteja atendendo à regra configurada. É possível adicionar mais de um intervalo de CEP para incluir ou excluir mais áreas.

### Restrições

A atuação da promoção será limitada pelo seguinte critério:

![seller-portal-promo-restricoes-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/sellers/seller-portal/seller-portal-criar-uma-promocao_6.png)

* **Limitar a quantidade de itens elegíveis por carrinho:** define o número máximo de itens do carrinho serão afetados pela promoção. Caso o carrinho apresente uma quantidade de itens maior que o limite, o desconto será aplicado a apenas a quantidade configurada neste campo.
