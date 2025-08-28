---
title: 'A validação do reCAPTCHA agora seguirá a configuração do orderForm para todas as solicitações'
id: 3SLXk0n8neXgWxaLaIgAC7
status: PUBLISHED
createdAt: 2023-07-04T21:20:42.330Z
updatedAt: 2023-07-05T18:40:32.146Z
publishedAt: 2023-07-05T18:40:32.146Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-07-04-recaptcha-validation-will-now-follow-orderform-configuration-for-all-requests
locale: pt
legacySlug: a-validacao-do-recaptcha-agora-seguira-a-configuracao-do-orderform-para
announcementImageID: 'undefined'
announcementSynopsisPT: 'Lojas que usam a API de Checkout para fazer pedidos precisam revisar suas integrações'
---

O [reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) é um serviço de segurança usado para verificar se uma determinada ação é realizada por um usuário real ou por uma automação mal-intencionada, protegendo os sites contra fraudes e abusos. Ao ativar o [reCAPTCHA no checkout](https://help.vtex.com/pt/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP), além de seguir as melhores práticas contra ataques virtuais, você reduz o risco de sua loja ser explorada para fins fraudulentos.

Para proteger ainda mais nossos clientes, a VTEX agora aplicará a configuração de reCAPTCHA do orderForm definida em cada conta a todas as solicitações da API de Checkout, independentemente dos perfis de acesso associados ao usuário ou à chave de aplicação.

Os lojistas que usam a API de Checkout para fazer pedidos de aplicativos móveis, ambientes de loja headless e aplicativos semelhantes devem [revisar](#revise-suas-integracoes) e [ajustar](#ajuste-suas-integracoes) suas integrações antes de __1 de setembro de 2023__.

## O que muda?

Antes, a verificação reCAPTCHA não era necessária para pedidos feitos por usuários e chaves de aplicação com o [recurso](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) `Shopping Cart Full Access` no License Manager. Isso inclui [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy) como `Owner (Admin Super)` e `User Admin - RESTRICTED`, bem como o [usuário Titular](https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy).

Agora, a verificação do reCAPTCHA seguirá a configuração do orderForm definida em cada conta para todas as solicitações da API de Checkout, independentemente dos perfis de acesso associados ao usuário ou à chave de aplicação.

## Por que estamos realizando esta mudança?

Esta ação foi necessária para reduzir os riscos de fraude e abuso, como testes de cartões, em nossas lojas. Apesar de as boas práticas para o uso de chaves de aplicação recomendarem que as lojas criem chaves individuais para cada integração e apliquem perfis de acesso restritivos a elas, alguns lojistas estavam se expondo a riscos ao usar chaves de aplicação com perfis de acesso administrativos. 

Como entendemos que pode haver um motivo legítimo para que algumas integrações tenham acesso a mais recursos e informações, nossa decisão foi exigir que os lojistas implementem o reCAPTCHA nessas integrações. Se isso não for possível, existe a alternativa de desativar a validação do reCAPTCHA em sua conta (`recaptchaValidation="never"`) e implementar medidas de proteção alternativas contra ataques automatizados por conta própria.

Sabemos que essas mudanças terão um impacto nas operações de nossos clientes, mas aderir às melhores práticas de segurança é sempre necessário e benéfico para todo o nosso ecossistema.

## O que precisa ser feito?

### Revise suas integrações

Peça à sua equipe de desenvolvimento para revisar as integrações que usam a API de Checkout para fazer pedidos em sua loja VTEX, usando os seguintes endpoints:

- [Place order from an existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction)
- [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders)

Ela poderá seguir o diagrama abaixo para avaliar se uma integração precisa ser ajustada, de acordo com a [configuração de reCAPTCHA do orderForm](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) da sua loja e como as solicitações feitas a esses endpoints são [autenticadas](https://developers.vtex.com/docs/guides/authentication-overview):

![reCAPTCHA diagram](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2023/2023-07-04-validacao-recaptcha-agora-seguira-a-configuracao-do-orderform-para-todas-as-solicitacoes_1.png)

- __Caso 1__: *não são necessárias alterações na integração, mas sua loja pode estar em risco.*

  Sua loja não usa o reCAPTCHA no Checkout e, portanto, está vulnerável a ataques automatizados, a menos que outras medidas de proteção sejam implementadas na sua integração.

- __Caso 2__: *sua integração precisa ser ajustada, caso contrário, ela poderá parar de funcionar.*

  Sua loja usa o reCAPTCHA no Checkout, mas não está pronta para exibi-lo corretamente na interface do usuário. Sua equipe de desenvolvimento deve [ajustar suas integrações](#ajuste-suas-integracoes).

- __Caso 3__: *não são necessárias alterações na integração.*

  Sua loja usa o reCAPTCHA no Checkout e está pronta para exibi-lo corretamente na interface do usuário. Parabéns por seguir as melhores práticas de segurança!

### Ajuste suas integrações

Se sua equipe de desenvolvimento identificou que sua integração requer atenção, ela deve seguir as instruções fornecidas no guia para desenvolvedores [Implementing reCAPTCHA in integrations](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations) (em inglês).

> ⚠️ Para implementar o reCAPTCHA em um aplicativo mobile nativo, use reCAPTCHA v3. Para outros casos de integração, use reCAPTCHA v2.

Ao usar a chave do reCAPTCHA (`recaptchaKey`) retornada pelo Checkout, o widget reCAPTCHA deve ser renderizado na interface do usuário do seu aplicativo móvel/storefront headless (ou similar), conforme descrito na documentação do [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display?hl=pt-br) ou [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3?hl=pt-br) fornecida pelo Google.

Depois que o comprador tiver concluído o desafio do reCAPTCHA, sua resposta (`recaptchaToken`) deverá ser enviada para a API de Checkout para finalizar a compra, conforme descrito na seção *Final validation* do guia [Implementing reCAPTCHA in integrations](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations#final-validation) (em inglês). Em seguida, a API de Checkout [verificará a resposta do usuário](https://developers.google.com/recaptcha/docs/verify?hl=pt-br) usando o token fornecido.

> ❗ Todas as integrações que usam a API de Checkout para fazer pedidos devem ser revisadas e ajustadas antes de 1 de setembro de 2023. Os aplicativos que não conseguirem renderizar o widget reCAPTCHA e verificar a resposta do usuário não poderão fazer pedidos após essa data.

## Saiba mais

Consulte a documentação a seguir para saber mais sobre o reCAPTCHA e as melhores práticas para garantir que sua loja esteja protegida:

- [reCAPTCHA no Checkout](https://help.vtex.com/pt/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP)
- [Boas práticas contra ataques virtuais](https://help.vtex.com/pt/tutorial/boas-praticas-contra-ataques-virtuais--191rpbF7UgrKapVCi1PCDE)
- [Boas práticas na utilização de chaves de aplicação](https://help.vtex.com/pt/tutorial/boas-praticas-chaves-de-aplicacao--7b6nD1VMHa49aI5brlOvJm)
- [Recursos do License Manager](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3)

