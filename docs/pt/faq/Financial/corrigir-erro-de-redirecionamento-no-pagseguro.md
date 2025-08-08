---
title: 'Corrigir erro de redirecionamento no PagSeguro'
id: 5b1lVDQ9HUKQs4Wy24uWq2
status: PUBLISHED
createdAt: 2018-02-15T16:07:47.669Z
updatedAt: 2024-02-16T12:41:04.461Z
publishedAt: 2024-02-16T12:41:04.461Z
firstPublishedAt: 2018-02-15T17:26:16.189Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slugEN: fix-redirect-error-in-pagseguro
locale: pt
legacySlug: corrigir-erro-de-redirecionamento-no-pagseguro
---

> ❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

Caso você esteja encontrando __problemas de redirecionamento__ utilizando o Pagseguro, é provável que o *redirect* do PagSeguro esteja configurado de forma errada.

Para corrigir o problema, há duas opções: Configurar o PagSeguro *com redirect* da forma correta ou configurar o PagSeguro *sem redirect*. 

## Configurar o PagSeguro *com redirect*

### Configurar Gateway PagSeguro

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PagSeguro__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __email__ e __token__ com as informações fornecidas pelo PagSeguro.
5. Siga a orientação __Configuração do redirecionamento__ descrita no painel de configuração.
6. Clique em `Salvar`.

### Configurar condição de pagamento PagSeguro

1. Depois de configurar corretamente a Afiliação de Gateway no passo anterior, clique na aba __Condições de Pagamento__.
2. Clique no botão __+__ no canto superior direito da tela.
3. Clique na condição __PagSeguro__.
4. Na flag __Status__, selecione a opção __Ativa__.
5. Em __Processar com a afiliação__, selecione a afiliação de __PagSeguro__ cadastrada no passo anterior.
6. Preencha os outros campos desejados para a [configuração da condição de pagamento](/pt/tutorial/condicoes-de-pagamento).
7. Clique em __Salvar__.

## Configurar o PagSeguro *sem redirect*

### Configurar gateway PagSeguro sem redirect

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
