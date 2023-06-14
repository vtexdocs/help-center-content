---
title: 'Corrigir erro de redirecionamento no PagSeguro'
id: 5b1lVDQ9HUKQs4Wy24uWq2
status: PUBLISHED
createdAt: 2018-02-15T16:07:47.669Z
updatedAt: 2019-12-31T14:23:59.281Z
publishedAt: 2019-12-31T14:23:59.281Z
firstPublishedAt: 2018-02-15T17:26:16.189Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: corrigir-erro-de-redirecionamento-no-pagseguro
locale: pt
legacySlug: corrigir-erro-de-redirecionamento-no-pagseguro
---

Caso você esteja encontrando __problemas de redirecionamento__ utilizando o Pagseguro, é provável que o *redirect* do PagSeguro esteja configurado de forma errada.

Para corrigir o problema, há duas opções: Configurar o PagSeguro *com redirect* da forma correta ou configurar o PagSeguro *sem redirect*. 

## Configurar o PagSeguro *com redirect*

### Configurar Afiliação de Gateway PagSeguro

1. Acesse a seção de __Pagamentos__.
2. Clique no botão __Configurações__.
3. Clique na aba __Afiliações de Gateways__.
4. Clique no botão __+__ no canto superior direito da tela.
5. Clique na afiliação __PagSeguro__.
6. Preencha os campos __email__ e __token__ com as informações fornecidas pelo PagSeguro.
7. Siga a orientação __Configuração do redirecionamento__ descrita no painel de configuração.
8. Clique em __Salvar__.

### Configurar Condição de Pagamento PagSeguro

1. Depois de configurar corretamente a Afiliação de Gateway no passo anterior, clique na aba __Condições de Pagamento__.
2. Clique no botão __+__ no canto superior direito da tela.
3. Clique na condição __PagSeguro__.
4. Na flag __Status__, selecione a opção __Ativa__.
5. Em __Processar com a afiliação__, selecione a afiliação de __PagSeguro__ cadastrada no passo anterior.
6. Preencha os outros campos desejados para a [configuração da condição de pagamento](/pt/tutorial/condicoes-de-pagamento).
7. Clique em __Salvar__.

## Configurar o PagSeguro *sem redirect*

### Configurar afiliação de gateway PagSeguro sem redirect

1. Acesse a seção de __Pagamentos__.
2. Clique no botão __Configurações__.
3. Clique na aba __Afiliações de Gateways__.
4. Clique no botão __+__ no canto superior direito da tela.
5. Clique na afiliação __PagSeguro sem redirect__.
6. Siga nosso [tutorial de configuração do PagSeguro sem redirect](/pt/tutorial/como-configurar-o-pagseguro-sem-redirect-transparente).

### Configurar Condição de Pagamento

1. Depois de configurar corretamente a Afiliação de Gateway no passo anterior, clique na aba __Condições de Pagamento__.
2. Clique no botão __+__ no canto superior direito da tela.
3. Clique na condição de pagamento desejada. No caso da Afiliação PagSeguro sem redirect, esta pode ser um [cartão de crédito](/pt/tutorial/condicoes-de-pagamento) ou [boleto bancário](/pt/tutorial/como-configurar-boleto-bancario), por exemplo.
4. Na flag __Status__, selecione a opção __Ativa__.
5. Em __Processar com a afiliação__, selecione a afiliação de __PagSeguro sem redirect__ cadastrada no passo anterior.
6. Clique em __Salvar__.
