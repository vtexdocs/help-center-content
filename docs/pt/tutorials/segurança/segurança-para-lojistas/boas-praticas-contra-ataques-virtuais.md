---
title: 'Boas práticas contra ataques virtuais'
id: 191rpbF7UgrKapVCi1PCDE
status: PUBLISHED
createdAt: 2022-04-06T19:04:13.387Z
updatedAt: 2024-06-18T20:41:01.987Z
publishedAt: 2024-06-18T20:41:01.987Z
firstPublishedAt: 2022-04-06T19:23:22.326Z
contentType: tutorial
productTeam: Reliability
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: best-practices-against-virtual-attacks
legacySlug: boas-praticas-contra-ataques-virtuais
locale: pt
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

A VTEX dispõe de diversas proteções contra possíveis ataques a lojas. Ainda sim, há configurações e produtos terceiros que podem maximizar a segurança da sua operação. Este artigo descreve alguns destes recursos:

* [Antifraude](#antifraude)
* [Proteção contra ataques de transações](#protecao-contra-ataques-de-transacoes)
* [reCAPTCHA v3 no Checkout](#recaptcha-v3-no-checkout)
* [Configurações do orderForm](#configuracoes-do-orderform)
* [Desabilitar login por senha](#desabilitar-login-por-senha)

> ℹ️ As medidas citadas neste guia não eliminam por completo a possibilidade de ataques, mas podem reduzir bastante a probabilidade deles acontecerem, caso empregadas adequadamente.

## Antifraude

Sistemas antifraude são especializados em analisar compras de ecommerces com o intuito de identificar operações fraudulentas. Eles analisam dados comportamentais dos compradores e impedem que compras suspeitas sejam realizadas.

Saiba mais sobre [sistemas antifraude](https://help.vtex.com/pt/tutorial/what-is-anti-fraud) e como utilizá-los na VTEX.

> ⚠️ Para aumentar a segurança, configure seu antifraude para todos os métodos de pagamento disponíveis na sua loja.

## Proteção contra ataques de transações

Para acessar a documentação sobre este assunto, insira abaixo seu [nome de conta](https://help.vtex.com/pt/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC) VTEX, clique no botão e faça login no Admin.

<iframe src="https://help.vtex.com/insertaccountname?id=62oQBmi7UZlYlgb0Ha1hZ3" title="Insira seu nome de conta e clique no botão." frameBorder="0" width="400" height="50"></iframe>

## reCAPTCHA v3 no Checkout

O reCAPTCHA é uma solução utilizada para validação de usuário real em pedidos que serão pagos com cartão de crédito ou débito. Ele previne cenários em que programas maliciosos são utilizados para fraudes.

Recomendamos o uso do [reCAPTCHA v3](https://help.vtex.com/en/tutorial/using-recaptcha-at-checkout--18Te3oDd7f4qcjKu9jhNzP#recaptcha-v3), que utiliza uma pontuação de qualidade em vez de uma validação via pop-up e, portanto, é mais difícil de ser burlado em tais cenários.

Saiba mais sobre como configurar esta validação no Checkout da sua loja em [reCAPTCHA no Checkout](https://help.vtex.com/pt/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP#). Para a implementação do reCAPTCHA V3 em uma loja VTEX, consulte o guia para desenvolvedores [reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha#recaptcha-v3-score).

> ℹ️ No fluxo de [cadastro de cartões](https://help.vtex.com/pt/tutorial/tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh#cartoes) dos clientes da loja na página [Minha Conta](https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh), a validação por reCAPTCHA está ativa por padrão, sem a necessidade de configuração por parte dos lojistas.

## Configurações do orderForm

Para acessar a documentação sobre este assunto, insira abaixo seu [nome de conta](https://help.vtex.com/pt/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC) VTEX, clique no botão e faça login no Admin.

<iframe src="https://help.vtex.com/insertaccountname?id=7EAqNk48KP2QHnCxu856jT" title="Insira seu nome de conta e clique no botão." frameBorder="0" width="400" height="50"></iframe>

## Desabilitar login por senha

Se sua loja está sofre ataques mesmo com a aplicação dos recursos citados acima, recomendamos desabilitar o login por senha. Essa medida pode ser aplicada temporariamente ou não, com o intuito de quebrar o fluxo da automação do ataque.

Para realizar esta configuração:

1. Acesse *Configurações da conta* > *Autenticação*.
2. Desabilite o campo *senha*.

Saiba mais sobre como [gerenciar as formas de autenticação](https://help.vtex.com/pt/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs#) da sua loja.

