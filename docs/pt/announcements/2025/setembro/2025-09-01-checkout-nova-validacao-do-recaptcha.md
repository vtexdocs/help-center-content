---
title: 'Checkout: nova validação do reCAPTCHA'
id: 1npERT6lyshKPOJlFUeC7y
status: PUBLISHED
createdAt: 2025-09-01T18:57:56.689Z
updatedAt: 2025-09-08T13:00:09.650Z
publishedAt: 2025-09-08T13:00:09.650Z
contentType: updates
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2025-09-01-checkout-new-recaptcha-validation
locale: pt
legacySlug: checkout-nova-validacao-do-recaptcha
announcementImageID: 'undefined'
announcementSynopsisPT: 'Nova camada de segurança no Checkout valida hosts via License Manager ao usar o reCAPTCHA.'
---

Para reforçar a segurança durante a finalização de compras, adicionamos uma nova camada de proteção na validação do [reCAPTCHA](https://help.vtex.com/pt/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP) da loja. A partir de agora, os [hosts](https://help.vtex.com/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450#estrutura-do-endereco-da-loja) da loja são validados pelo [License Manager](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc), sistema responsável por verificar se um usuário possui as permissões adequadas para realizar ações na plataforma.

## O que mudou?

O sistema do Checkout agora verifica se o host no qual o desafio de validação do reCAPTCHA foi resolvido, como `www.mystore.com`, está cadastrado no License Manager daquela conta. Essa verificação ajuda a evitar acessos maliciosos e tentativas de fraude. 

Para consultar os hosts configurados na sua conta, use o endpoint [Get stores](https://developers.vtex.com/docs/api-reference/license-manager-api#get-/api/vlm/account/stores). Caso deseje cadastrar um novo host na sua loja, leia o artigo [Configurar o domínio da loja](https://help.vtex.com/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450#cadastrar-um-novo-host).

## O que precisa ser feito?

Após o cadastro dos hosts na conta, [configure o reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) na sua loja. Se sua loja utiliza integrações personalizadas no processo de finalização de pedidos, é importante garantir que o [reCAPTCHA esteja integrado](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations) corretamente nessas soluções.

Lojas que já utilizam as [chaves reCAPTCHA](https://cloud.google.com/recaptcha/docs/create-key-website?hl=pt-br) próprias em integrações como forma de verificação não precisam realizar nenhuma ação.

