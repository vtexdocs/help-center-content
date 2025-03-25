---
title: 'Cadastro de SKUs (beta)'
id: 4ryZ6J45kwn3jDiQBxGiiN
status: PUBLISHED
createdAt: 2024-08-29T19:24:29.305Z
updatedAt: 2024-08-29T19:37:14.566Z
publishedAt: 2024-08-29T19:37:14.566Z
firstPublishedAt: 2024-08-29T19:28:11.129Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: adding-skus-beta
locale: pt
legacySlug: cadastro-de-skus-beta
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

>ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Se quiser migrar a sua loja para a nova página, entre em contato com o <a href = "[https://support.vtex.com/hc/pt-br/requests](https://support.vtex.com/hc/pt-br/requests)">suporte VTEX</a>.

Após cadastrar um produto no Admin VTEX, você deve preencher informações sobre os SKUs relacionados. Com a nova experiência de cadastro de produtos e SKUs, você pode fazer isso seguindo os passos abaixo:

1. No Admin VTEX, acesse **Catálogo >** **Produtos e SKUs**.
2. Clique no produto em que deseja adicionar um SKU.
3. Clique na aba `SKUs`.
4. Clique no ícone de adicionar <i class="fas fa-plus" aria-hidden="true"></i>.
5. Preencha o formulário com as [Informações do SKU](#informacoes-do-sku).

# Informações do SKU

Veja abaixo as informações que devem ser preenchidas para cada seção do formulário de SKUs.

- **Nome:** insira o nome do SKU, ou seja, a variação do produto, que já foi cadastrado anteriormente. Exemplo: Produto - Geladeira, SKU - 110 volts. O nome do SKU é limitado a 200 caracteres.
- **Ativo:** defina se o SKU está ativo ou não.

## Informações gerais

- **Código de referência:** código de referência único criado para ajudar na organização.
- **EAN/UPC:**  código de identificação único do SKU (código de barras), aceita até 13 caracteres numéricos**.**
- **Código do fabricante:** fornecido pelo fabricante para identificar seu produto. Caso algum produto tenha um código específico, esse campo deve ser preenchido.
- **Condição comercial:** utilizado para definir promoções/regras de parcelamento específicas para SKUs. Caso não exista uma condição específica, usar o valor padrão. Saiba mais no artigo [Cadastrar condição comercial](https://help.vtex.com/pt/tutorial/como-cadastrar-condicao-comercial--tutorials_445#).
- **Modal:** relaciona um produto não usual a uma transportadora especializada na entrega desse tipo de produto. Para saber mais sobre essa funcionalidade, leia nossos artigos [Como funciona o modal](https://help.vtex.com/pt/tutorial/como-funciona-o-modal--tutorials_125) e [Configurar modal para transportadoras](https://help.vtex.com/pt/tutorial/configurar-modal-para-transportadoras--3jhLqxuPhuiq24UoykCcqy#).

## Imagens

Nesta seção, você pode adicionar imagens ao SKU. Ao clicar em **Adicionar imagens,** você poderá selecionar imagens do seu computador ou adicionar links.

>ℹ️ Considere o limite de 3.200 x 3.200 pixels para as imagens do seu SKU.

## Pesos e dimensões

### Peso e dimensões para frete

- **Peso do pacote:** utilizado para calcular o fator cúbico de peso. A unidade de medida é a definida pela sua loja. Deve ser cadastrado com valor maior do que zero para o funcionamento correto do [rateio de frete](https://help.vtex.com/pt/tutorial/como-e-feito-o-rateio-de-frete--frequentlyAskedQuestions_155).
- **Largura do pacote:**  utilizada para calcular o fator cúbico de peso. A unidade de medida é a definida pela sua loja. 
- **Altura do pacote:** utilizada para calcular o fator cúbico de peso. A unidade de medida é a definida pela sua loja. 
- **Comprimento do pacote:** utilizado para calcular o fator cúbico de peso. A unidade de medida é definida pela sua loja.

### Peso e dimensões reais

- **Peso real:**  peso real do produto. Exibido na página de produto.
- **Largura real:** largura real do produto. Exibida na página de produto.
- **Altura real:**altura real do produto. Exibida na página de produto.
- **Comprimento real:** comprimento real do produto. Exibido na página de produto.

### Medidas de estoque

- **Unidade de medida:**  define como o item será contado no estoque.
- **Multiplicador de unidade:** unidade numérica que multiplica a quantidade selecionada do produto ao ser inserido no carrinho. Caso o Multiplicador seja 5, o produto será adicionado em quantidades múltiplas de 5 - 5, 10, 15, 20, em diante. 

## Customizações

Na seção **Customizações**, você pode adicionar anexos e serviços. Saiba mais nos artigos [O que é um anexo](https://help.vtex.com/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm#) e [O que é um serviço](https://help.vtex.com/pt/tutorial/o-que-e-um-servico#).

## Vitrine

Nesta seção, você pode configurar as seguintes funcionalidades:
- Acessórios
- Sugestões
- Produtos similares
- Mostrar junto

Saiba mais sobre estas opções no artigo [Configurar produto similar, sugestões, acessórios e genéricos](https://help.vtex.com/pt/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos--tutorials_280).

## Configurações avançadas

- **Gerar crédito em vale-presente:** define que o SKU em questão, quando comprado, irá gerar crédito em um Vale. Também é utilizado na definição de listas que gerem um valor em Vale Compras para o dono.

## Especificações

Dependendo da categoria do produto associado, podem aparecer campos para você preencher na seção **Especificações**. Esses campos são propriedades de especificações que você pode adicionar aos seus SKUs para atribuir características específicas aos produtos da sua loja.

Saiba mais sobre [especificações de SKUs](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119).
