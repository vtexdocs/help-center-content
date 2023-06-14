---
title: 'Boas práticas contra ataques virtuais'
id: 191rpbF7UgrKapVCi1PCDE
status: PUBLISHED
createdAt: 2022-04-06T19:04:13.387Z
updatedAt: 2022-06-10T14:24:42.121Z
publishedAt: 2022-06-10T14:24:42.121Z
firstPublishedAt: 2022-04-06T19:23:22.326Z
contentType: tutorial
productTeam: Reliability
author: 2Gy429C47ie3tL9XUEjeFL
slug: boas-praticas-contra-ataques-virtuais
legacySlug: boas-praticas-contra-ataques-virtuais
subcategory: 6uJgdHqWf1Mo0rUfgxseTn
---

A VTEX dispõe de diversas proteções contra possíveis ataques a lojas. Ainda sim, há configurações e produtos terceiros que podem maximizar a segurança da sua operação. Este artigo descreve alguns destes recursos:

- [Antifraude](#antifraude)
- [Proteção contra ataques de transações](#protecao-contra-ataques-de-transacoes)
- [reCAPTCHA no checkout](#recaptcha-no-checkout)
- [Desabilitar login por senha](#desabilitar-login-por-senha)

<div class = "alert alert-info">
As medidas citadas aqui não eliminam por completo a possibilidade de ataques, mas podem reduzir bastante a probabilidade, caso empregadas adequadamente.
</div>

## Antifraude

Antifraude é um sistema especializado em analisar compras de ecommerces, com o intuito de identificar operações fraudulentas. Este sistema analisa dados comportamentais dos compradores de um ecommerce e impede que compras suspeitas sejam realizadas.

Saiba mais sobre [sistemas antifraude](https://help.vtex.com/pt/tutorial/what-is-anti-fraud#) e como integrar à plataforma VTEX.

<div class="alert alert-warning"> 
Para aumentar a segurança, configure seu antifraude para todos os métodos de pagamento disponíveis na sua loja.
</div>

## Proteção contra ataques de transações

Para acessar a documentação sobre este assunto, insira abaixo seu [nome de conta](https://help.vtex.com/pt/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC#) VTEX, clique no botão e faça login no Admin.
<iframe src="https://help.vtex.com/insertaccountname?id=62oQBmi7UZlYlgb0Ha1hZ3" title="Insira seu nome de conta e clique no botão." frameBorder="0" width="400" height="50"></iframe>

## reCAPTCHA no checkout

O reCAPTCHA é uma solução utilizada para validação de usuário real em pedidos que serão pagos com cartão de crédito ou débito. Ele previne cenários em que programas maliciosos são utilizados para fraudes.

Saiba mais sobre como configurar esta validação no Checkout da sua loja em [reCAPTCHA no Checkout](https://help.vtex.com/pt/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP#).

<div class = "alert alert-info">
A validação por reCAPTCHA também está ativa por padrão no fluxo de <a href=tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh#cartoes>cadastro de cartões</a> dos clientes da loja, sem a necessidade de configuração por parte da loja.
</div>

## Desabilitar login por senha

Se sua loja está sofre ataques mesmo com a aplicação dos recursos citados acima, recomendamos desabilitar o login por senha. Essa medida pode ser aplicada temporariamente ou não, com o intuito de quebrar o fluxo da automação do ataque.

Para realizar esta configuração:
1. Acesse *Configurações da conta* > *Autenticação*.
2. Desabilite o campo *senha*.

Saiba mais sobre como [gerenciar as formas de autenticação](https://help.vtex.com/pt/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs#) da sua loja.

