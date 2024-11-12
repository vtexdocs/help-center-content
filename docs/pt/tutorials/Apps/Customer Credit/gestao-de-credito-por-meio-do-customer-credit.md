---
title: 'Gestão de crédito por meio do Customer Credit'
id: 5lihi3WBsV5mSIDqNvnoK0
status: CHANGED
createdAt: 2020-05-29T12:51:08.993Z
updatedAt: 2020-11-27T19:40:26.828Z
publishedAt: 2020-06-01T23:34:10.710Z
firstPublishedAt: 2020-05-29T13:00:01.098Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: managing-credit-with-customer-credit
locale: pt
legacySlug: gestao-de-credito-por-meio-do-customer-credit
subcategoryId: 7EWKfPIGfmI0G8iMYK8Aiy
---

Conceder crédito para terceiros é uma estratégia utilizada em diversos modelos de negócio. No modelo B2B (Business to Business), em que até quatro empresas fazem acordos entre si, não é diferente.

Mas, antes de vermos mais a fundo a aplicação dessa estratégia, vamos fazer uma definição mais precisa do termo “crédito”. Toda empresa que aceita receber pagamentos parcelados precisa estabelecer um valor máximo por mês para arcar com essas pequenas “dívidas”. Esse valor é o __limite de crédito__.

Na VTEX, o lojista conta com o [Customer Credit](https://help.vtex.com/pt/tutorial/customer-credit-visao-geral--1uIqTjWxIIIEW0COMg4uE0) para auxiliar na gestão desse tema. Trata-se de uma app que permite ao usuário conceder crédito para clientes - sejam pessoas físicas ou lojas parceiras - que podem usar esse crédito como meio de pagamento.

Neste artigo abordamos uma sugestão de fluxo de implementação do Customer Credit em estratégias B2B.

## Selecione seus clientes

Antes de qualquer coisa, é necessário fazer o download do Customer Credit na [VTEX App Store](https://apps.vtex.com/) e [configurá-lo](https://help.vtex.com/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/21ok0GBwmcIeaY2IukYMOg) na sua loja.

Como o intuito da sua estratégia é conceder crédito a algum parceiro, o próximo passo é selecionar os clientes a quem você deseja oferecer esse crédito. 

É importante observar que o Customer Credit não tem limite de contas que podem ser cadastradas na plataforma. Alguns clientes VTEX, por exemplo, trabalham com milhares de contas no Customer Credit. Em um contexto B2B, esse é um diferencial relevante, pois permite que o cliente VTEX faça negócios com empresas de qualquer porte. 

Logo, os cenários em que a app pode ser utilizada também são diversos. Por exemplo, uma distribuidora pode fornecer e gerenciar uma base de mil contas simultaneamente, possibilitando a gestão e concessão de crédito na medida para cada cliente. 

### Ebitda

O processo de selecionar os clientes, entretanto, deve ser criterioso. Afinal, é imprescindível que as empresas escolhidas tenham condições de arcar com os custos dos títulos. 

Uma das formas de fazer essa análise é conferir a saúde financeira de cada potencial cliente por meio de indicadores financeiros, como o __Ebitda__ (Earning Before Interest, Taxes, Depreciation and Amortization) ou __LAJIDA__ (Lucros Antes de Juros, Impostos, Depreciação e Amortização), sigla usada no Brasil.

Em cenários B2B, esse indicador calcula o lucro de uma empresa antes de juros, impostos, depreciação e amortização. Ou seja, o faturamento líquido desconsiderando fatores externos ao negócio. 

Caso você não tenha acesso ao Ebitda, existem outros fatores que, se analisados em conjunto, também podem indicar a saúde financeira de uma empresa. São eles:
- Cadastro no Serasa
- Cadastro no Sintegra
- Referências bancárias e comerciais
- Contrato social
- Extrato bancário (em casos de crédito muito alto)

Este processo pode ser realizado tanto por um departamento de crédito quanto por empresas de software que fazem essa análise automaticamente em diversas fontes. 

## Cadastre contas na app

Agora que os clientes foram selecionados, é possível [criar as respectivas contas no Customer Credit](https://help.vtex.com/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).

Atualmente, contamos com três formas de o lojista realizar essa operação:
- Cadastro da base por meio da [API do Customer Credit](https://developers.vtex.com/reference/customer-credit-api-overview).
- Cadastro individual pelo painel administrativo da VTEX.
- Cadastro em massa por importação de planilha, com os dados de várias contas, também via painel administrativo. 

A loja deve utilizar a forma que achar mais conveniente para o seu negócio. Entretanto, o número de contas pode ser um fator importante para a escolha do método de cadastro.

### Pequenas e médias bases

Para um número reduzido de cadastros, o cliente pode criar as contas uma a uma pelo Admin. É um processo simples: basta acessar a seção de Contas do Customer Credit, clicar no botão __Novo__ e preencher o formulário com:
- Tipo de documento
- Documento
- E-mail
- Limite de crédito

![CustomerCredit1](https://images.ctfassets.net/alneenqid6w5/4qFEtQ96Ylr6isBrULX16Z/30921e212931852bc69c66e6d2cef62c/CustomerCredit1.png)

Se, por outro lado, a base tem um número grande de contas, o mais indicado é importar uma planilha em formato CSV. Você pode baixar um modelo desse documento na seção Contas e preenchê-lo com as informações necessárias. Para isso, clique no botão __Importar__.

![CustomerCredit2](//images.ctfassets.net/alneenqid6w5/3Gjxyu2UOkyg7T31tpEKcW/3387e9b15b3fe91842ea4db1a714c17a/CustomerCredit2.png)

### Grandes bases

Nos casos em que a loja trabalha com gestão externa de crédito em seu ERP, recomendamos que a operação seja realizada por meio da [API do Customer Credit](https://developers.vtex.com/reference/account-1#openanaccount). Neste caso, use o endpoint __Open an Account__.

Outro diferencial da API é que a operação cadastra a conta e ao mesmo tempo concede limite para ela.

Você pode conferir o tutorial de como cadastrar uma conta por cada um desses métodos na [trilha de introdução ao Customer Credit](https://help.vtex.com/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).

Após a configuração inicial, o passo seguinte é o [gerenciamento das contas](https://help.vtex.com/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/4eknoeqaj6EGC20amsm6Gc), com o objetivo de garantir um fluxo de crédito saudável.
