---
title: 'A API do Checkout agora suporta reCAPTCHA v3'
id: 1buRTScMhlis0LESr7g8Rt
status: PUBLISHED
createdAt: 2023-06-28T19:52:18.268Z
updatedAt: 2023-08-25T23:36:39.909Z
publishedAt: 2023-08-25T23:36:39.909Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: checkout-api-now-supports-recaptcha-v3
locale: pt
legacySlug: a-api-do-checkout-agora-suporta-recaptcha-v3
announcementImageID: ''
announcementSynopsisPT: 'Esta solução utilizada para prevenção de usuários falsos pode ser usada para apps mobile nativos e outras integrações'
---

O [reCAPTCHA](https://help.vtex.com/pt/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP) é uma solução utilizada para validação de usuário real disponibilizada pela VTEX para todas as lojas. Ele prevê cenários em que programas maliciosos são utilizados para fraudes, evitando acesso de falsos usuários.

Além da funcionalidade nas frentes de loja nativas da plataforma VTEX, lojas implementando frentes de loja proprietárias, podem [integrar o reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) pela API do Checkout, afim de aumentar a segurança da sua loja.

## O que mudou?

Agora, a API do Checkout suporta também reCATPCHA com validação baseada em pontuação (equivalente à v3), adequada para apps mobile nativos.

>ℹ️ A VTEX está integrada com o reCAPTCHA enterprise, que oferece duas abordagens de validação: checkbox (equivalente ao reCAPTCHA v2) e baseada em pontuação (equivalente ao reCAPTCHA v3). Confira este artigo sobre o [reCAPTCHA no Checkout da VTEX](https://help.vtex.com/pt/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP#versoes-do-recaptcha) para aprender qual versão você deve usar dependendo das características da sua loja. Você também pode aprender mais sobre cada método: [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display) ou [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3) com a documentação fornecida pelo Google.

Entretanto, a opção de integração com reCAPTCHA checkbox (equivalente à v2) continua disponível, sendo a opção recomendada caso deseje implementar uma [integração de reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) que não seja em um app mobile nativo.

Atualmente, a validação baseada em pontuação não está disponível para frentes de loja nativas da VTEX – a previsão é que esteja nos próximos meses. Essa solução está disponível apenas para integrações baseadas na Checkout API.

## O que precisa ser feito?

Se você usa uma solução de frente de loja nativa da VTEX ou se usa integração com o reCAPTCHA checkbox pela API do Checkout, nenhuma ação é necessária. O reCAPTCHA continuará funcionando de acordo com a sua configuração.

Caso deseje implementar o reCAPTCHA em uma frente de loja de app mobile nativo, você deve usar o reCAPTCHA baseado em pontuação. Entre em contato com seu time de desenvolvimento e confira o [guia de integração com reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha).

