---
title: 'reCAPTCHA no Checkout'
id: 18Te3oDd7f4qcjKu9jhNzP
status: PUBLISHED
createdAt: 2021-08-03T12:53:12.155Z
updatedAt: 2023-12-11T22:07:06.233Z
publishedAt: 2023-12-11T22:07:06.233Z
firstPublishedAt: 2021-08-03T13:51:19.441Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: using-recaptcha-at-checkout
legacySlug: recaptcha-no-checkout
locale: pt
subcategoryId: 3shmvletqbB206RqbY2vYQ
---


O reCAPTCHA é uma solução utilizada para validação de usuário real em pedidos que serão pagos com cartão de crédito ou débito. Ele prevê cenários em que programas maliciosos são utilizados para fraudes, evitando acesso de falsos usuários. 

Recomendamos que o habilite para proteger a criação e o pagamento de pedidos na sua loja.

A exigência do reCAPTCHA vai seguir a opção configurada pela loja através da [API de configuração do checkout](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm). Para saber mais sobre a ativação confira este artigo sobre o [uso de reCAPTCHA para integrações](https://developers.vtex.com/vtex-rest-api/docs/recaptcha).

Antes da ativação, é importante atentar-se à:

* **Adequação da interface:** ao ativar a funcionalidade é necessário adequar a interface (web  e mobile) que cria pedidos na conta da sua loja (caso esse passo não seja realizado, a criação dos pedidos será prejudicada). Saiba mais sobre como adequar a interface com o[ guia de reCAPTCHA para integrações.](https://developers.vtex.com/vtex-rest-api/docs/recaptcha)
* **Consequência para a conta**: a habilitação da funcionalidade implica o seu uso em toda conta, incluindo o uso em todas as lojas e subcontas.
* **Realização de testes:** para realizar testes da funcionalidade sem impacto na loja em produção use o [ambiente Beta](https://help.vtex.com/pt/tutorial/acessar-o-ambiente-beta-pelo-dominio-myvtex-com--3BHM289568gcSwk2O80Asu) com [Checkout V6](https://help.vtex.com/pt/tutorial/ativar-o-checkout-v6--7qVqv3ptRvpVVplrvg8ruH). 

## Regra de aplicação

A regra de aplicação do reCAPTCHA em compras com cartão pode ter [diferentes configurações](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

A opção recomendada pela VTEX é a [VTEX criteria](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm). Dessa forma,  será aplicado um algoritmo próprio para decidir a necessidade do desafio de reCAPTCHA. Ele é mantido e evoluído pela VTEX, sendo mais ou menos abrangente conforme os padrões de comportamento observados.

Sua intenção é buscar o menor volume de uso necessário (focando na experiência do usuário), mas sem deixar de aplicar a proteção necessária. As sessões tidas como confiáveis ficam isentas de reCAPTCHA. Assim, o reCAPTCHA só é ativado para sessões potencialmente maliciosas.

## Versões do reCAPTCHA

A VTEX está integrada com o reCAPTCHA enterprise, que oferece duas abordagens de validação: checkbox (equivalente ao [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display)) e baseada em pontuação (equivalente ao [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)). Confira a tabela abaixo para saber qual versão se aplica a sua operação.

| **Características da loja**                        | **Versão do reCAPTCHA** |
|----------------------------------------------------|-------------------------|
| Frente de loja nativa VTEX                         | Checkbox (v2)                      |
| Frente de loja próprietária para web               | Checkbox (v2) ou Baseada em pontuação (v3)                |
| Frente de loja próprietária para aplicativo mobile | Baseada em pontuação (v3)                      |

## reCAPTCHA v2

Você pode utilizar reCAPTCHA checkbox (v2). Ou seja, quando aplicável, o usuário deverá apenas clicar no <i class="far fa-check-square"></i> _(checkbox),_ e só será apresentado o desafio de validação caso o Google desconfie do usuário. Veja abaixo mais detalhes sobre a experiência de compra.

### Experiência de compra com VTEX Criteria e reCAPTCHA v2

Levando em consideração os fatores mencionados acima, a experiência de compra com cartão de débito ou crédito tende a seguir o fluxo abaixo. Isso minimiza a incidência de alguns tipos de fraudes e ataques com o mínimo de fricção para o usuário.

![reCAPTCHA scenariosPT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/recaptcha/recaptcha-no-checkout_1.jpg)
Como mostrado na imagem acima, existem diferentes possibilidades de resultado neste fluxo:

1. Se o algoritmo do VTEX Criteria não considerar a sessão suspeita, a plataforma prossegue normalmente com a compra.

2. Caso contrário, a interface deverá exibir o reCAPTCHA Checkbox, a qual deverá ser marcada pelo cliente. Se o reCAPTCHA não considerar o comportamento suspeito ao marcar a Checkbox, a compra prossegue normalmente.
![newCaptchaAnchor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/recaptcha/recaptcha-no-checkout_2.gif)
3. Se o reCAPTCHA ainda considera o comportamento suspeito, a interface exibirá o desafio.
![desafio recaptcha](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/recaptcha/recaptcha-no-checkout_3.png)
4. Se o desafio for resolvido com sucesso, a plataforma prossegue com a compra. Caso contrário, o comportamento é considerado compatível com o de um bot e a plataforma não finaliza a compra.

## reCAPTCHA v3

O reCAPTCHA baseado em pontuação ([v3](https://developers.google.com/recaptcha/docs/v3)) não interrompe a experiência do usuário na sua loja. Ele analisa as interações no site e retorna uma pontuação entre `1.0` (muito provavelmente uma interação normal) e `0.0` (muito provavelmente um bot).

Ao configurar reCAPTCHA v3 para sua loja VTEX, você tem a opção de definir uma pontuação mínima para [cada chave cadastrada](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations#getting-the-recaptcha-key-for-mobile-implementations) e uma [pontuação mínima para a sua loja](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations#recaptcha-v3-score). Valores possíveis são `0.1`, `0.3`, `0.7` and `0.9`. 

A prioridade de aplicação da pontuação mínima para uma dada compra é:

```
Pontuação da chave > Pontuação da conta > Pontuação padrão da VTEX (0.7)
```

Isso significa que se você definir pontuação mínima para a sua chave e para a sua conta, a pontuação da chave será aplicada. Entretanto, caso você não defina nenhuma pontuação, a VTEX aplicará o valor padrão de `0.7`.

Interações que retornem um valor menor que o mínimo aplicável não serão capazes de finalizar a compra.

Para configurar o reCAPTCHA e definir pontuações mínimas de chaves ou contas, entre em contato com seu time de desenvolvimento e confira o guia de [integração com reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha#recaptcha-v3-score).
