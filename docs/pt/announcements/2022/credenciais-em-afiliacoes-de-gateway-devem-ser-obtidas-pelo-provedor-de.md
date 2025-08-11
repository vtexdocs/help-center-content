---
title: 'Credenciais em afiliações de gateway devem ser obtidas pelo provedor de pagamentos'
id: 6RsAtRDmehojI076vYBpog
status: PUBLISHED
createdAt: 2022-10-13T20:36:50.162Z
updatedAt: 2023-04-03T14:13:18.199Z
publishedAt: 2023-04-03T14:13:18.199Z
contentType: updates
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slugEN: credentials-in-gateway-affiliations-must-be-provided-by-the-payment-provider
locale: pt
legacySlug: credenciais-em-afiliacoes-de-gateway-devem-ser-obtidas-pelo-provedor-de
announcementImageID: ''
announcementSynopsisPT: 'Credenciais em afiliações de gateway criadas pelo Admin devem ser substituídas até 31/10 por questões de segurança'
---

Ao realizar a [configuração de afiliações de gateway](https://help.vtex.com/pt/tutorial/afiliacoes-de-gateway--tutorials_444) no Admin para tornar pagamentos disponíveis na loja, lojistas devem inserir as credenciais para se identificarem ao provedor de pagamentos: **Application Key** e **Application Token**. Essas credenciais funcionam como usuário e senha e devem ser fornecidas pelo provedor de pagamentos.

## O que mudou?

Essas credenciais não devem ser confundidas com as credenciais [Application Key e Application Token utilizadas nas APIs da VTEX para integrações](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet). Neste caso, as credenciais são geradas no Admin e utilizadas para identificar sistemas externos que acessam os serviços das lojas VTEX. Uma **Application Key** gerada no Admin pode ser identificada se houver em seu início `vtexappkey-`.

Caso a sua loja possua alguma afiliação de gateway configurada com um par de **Application Key** e **Application Token** gerados no Admin, eles devem ser substituídos até o dia 30 de Abril de 2023.

## Por que fizemos essa mudança?

A utilização de **Application Key** e **Application Token** gerados no Admin em afiliações de gateway pode representar um risco de segurança, já que estão sendo compartilhadas chaves para acessar serviços de uma loja VTEX. O [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) atribuído a uma credencial define quais [recursos da loja](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) podem ser acessados. Dependendo do perfil de acesso utilizado, qualquer pessoa que tiver acesso às credenciais poderá acessar os recursos permitidos indevidamente. Caso seja necessário, você pode verificar as instruções no artigo [Chaves de aplicação](https://help.vtex.com/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet#ativar-ou-desativar-chaves-de-aplicacao) para desabilitar uma **Application Key**.

## O que precisa ser feito?

As credenciais devem ser fornecidas pelo provedor de pagamentos correspondente à afiliação que está sendo configurada. A substituição deve ser feita até o dia 30 de Abril de 2023. As instruções para fazer a configuração podem ser encontradas no artigo [Cadastrar afiliações de gateway](https://help.vtex.com/pt/tutorial/afiliacoes-de-gateway--tutorials_444).
