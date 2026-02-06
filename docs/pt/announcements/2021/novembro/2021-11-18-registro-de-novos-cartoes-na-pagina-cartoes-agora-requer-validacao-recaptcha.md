---
title: 'Registro de novos cartões na página Cartões agora requer validação reCAPTCHA'
id: 67gG1eZGUBHQXqEBwTfLk9
status: PUBLISHED
createdAt: 2021-11-18T13:23:24.255Z
updatedAt: 2021-11-18T14:05:02.683Z
publishedAt: 2021-11-18T14:05:02.683Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2021-11-18-adding-new-cards-to-the-my-cards-page-now-requires-recaptcha-validation
locale: pt
legacySlug: registro-de-novos-cartoes-na-pagina-cartoes-agora-requer-validacao-recaptcha
announcementImageID: 'undefined'
announcementSynopsisPT: 'A VTEX exigirá validação por reCAPTCHA se um cliente registra um novo cartão manualmente na página Cartões da sua loja.'
---

A partir do dia 18 de novembro de 2021, a plataforma VTEX exigirá validação por [reCAPTCHA](https://developers.google.com/recaptcha/docs/display) sempre que um cliente registra um novo cartão manualmente na [página Cartões](/pt/docs/tutorials/como-funciona-a-minha-conta#cartoes) da sua loja.

Isso também significa que há [melhorias na rota de API My Cards](https://developers.vtex.com/vtex-developer-docs/changelog/improvements-my-cards-api-endpoint).

Esta mudança é importante, pois reduz dramaticamente a probabilidade de ataques no fluxo da [página Cartões](/pt/docs/tutorials/como-funciona-a-minha-conta#cartoes). Entretanto, não há nenhum impacto na experiência de compra dos seus clientes, já que não afeta em nada o fluxo do Checkout.

## O que precisa ser feito?

Se a sua loja usa nossa UI nativa na [página Cartões](/pt/docs/tutorials/como-funciona-a-minha-conta#cartoes), a mudança deve acontecer automaticamente. Nesse caso, não é esperado que nenhuma ação seja necessária, mas recomendamos que revise o layout da página para garantir que funciona corretamente.

Note que, para testar esta validação na sua loja, você deve acessá-la pelo endereço público (sem o ambiente `myvtex`), usando um perfil comum, sem privilégios de lojista nem de desenvolvedor.

Se a sua loja possui qualquer implementação de UI ou customização que se comunica diretamente com esta [rota de API](https://developers.vtex.com/vtex-developer-docs/changelog/improvements-my-cards-api-endpoint), entre em contato com o nosso [suporte](https://supporticket.vtex.com/support) de modo a atualizar sua implementação de forma adequada.

