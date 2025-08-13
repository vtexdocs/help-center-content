---
title: 'Configurações na Casas Bahia Marketplace'
id: 2oxPVeYpVgA8IrhaDqKon6
status: PUBLISHED
createdAt: 2022-01-18T21:39:29.664Z
updatedAt: 2024-09-13T19:17:16.659Z
publishedAt: 2024-09-13T19:17:16.659Z
firstPublishedAt: 2022-01-18T22:32:05.415Z
contentType: trackArticle
productTeam: Channels
slugEN: settings-on-via-marketplace
locale: pt
trackId: 3E9XylGaJ2wqwISGyw4GuY
trackSlugEN: integracao-com-a-casas-bahia-marketplace
---

Os primeiros passos para integrar sua loja VTEX com a Casas Bahia Marketplace  são:

1. [Criar conta de seller na Casas Bahia Marketplace](#criar-conta-de-seller-na-casas-bahia-marketplace)
2. [Solicitar token na Casas Bahia Marketplace](#solicitar-token-na-casas-bahia-marketplace)
3. [Cadastrar Integradora de Frete](#cadastrar-integradora-de-frete)
4. [Cadastrar Integradora de Pedidos](#cadastrar-integradora-de-pedidos)

## Criar conta de seller na Casas Bahia Marketplace

O primeiro passo para configurar sua loja é [criar uma conta de seller na Casas Bahia Marketplace](https://so.via.com.br/). Depois de  realizar o cadastro e criar a conta, você deverá aguardar o contato da Casas Bahia Marketplace para orientá-lo sobre os próximos passos para cadastro da sua conta de seller.

## Solicitar token na Casas Bahia Marketplace

Depois que receber o contato da Casas Bahia Marketplace, você deverá solicitar ao marketplace a chave de acesso (token) para começar a configurar a integração VTEX. Essa chave dá permissão para a VTEX alterar ou atualizar informações relacionadas à sua loja diretamente no marketplace.

A chave de acesso será utilizada na etapa de [Cadastro do conector da Casas Bahia Marketplace](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/1okse2MybWk04AQoueu88O). Sem esse token não será possível concluir a integração com a Casas Bahia Marketplace.

Existem três fluxos diferentes para configurar sua conta na Casas Bahia Marketplace. Veja abaixo em qual deles você se encaixa e faça download da documentação da Casas Bahia Marketplace:

- [Onboarding](https://marketplace.via.com.br/): a solicitação do token da Casas Bahia Marketplace é feita no Onboarding para lojistas que estão integrando pela primeira vez.
- [Chamado para lojistas não integrados](https://suportemarketplace.viavarejo.com.br/pt-BR/lojista/artigo/?kbid=KA-01835): para lojistas que estavam cadastrados anteriormente na Casas Bahia Marketplace e não integraram suas lojas. A solicitação do token é feita por uma abertura de chamado no [Portal do lojista da Casas Bahia Marketplace](https://pas.viavarejo.com.br/login?returnUrl=%2F).
- [Chamado para lojistas integrados](https://suportemarketplace.viavarejo.com.br/pt-BR/lojista/artigo/?kbid=KA-01974): o lojista deverá se enquadrar em uma das circunstâncias abaixo:
   * Utilizava uma outra integração antes de utilizar a integração da VTEX.
   * Quando o lojista deseja modificar de integrador para integração própria.

## Cadastrar Integradora de Frete

A Casas Bahia Marketplace exige que você informe uma rota de API para a consulta de valores de frete, preço e prazo em tempo real, de acordo com o CEP. Você precisa cadastrar essa URL pelo [Portal do lojista da Casas Bahia Marketplace](https://plataformamarketplaceprd.b2clogin.com/plataformamarketplaceprd.onmicrosoft.com/b2c_1a_signup_signin_pas/oauth2/v2.0/authorize?client_id=07d16b2e-55be-4c02-93c3-6d859ed6ff12&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fpas.viavarejo.com.br&client-request-id=bc66a8e0-a543-478b-bd97-3b6d0373156f&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.30.0&client_info=1&code_challenge=DxEQ1KVtlEA0IVlteU9fNjmV9GdMHXB_aSIDJq-bLKk&code_challenge_method=S256&nonce=fe1482bd-316e-4973-844c-7992ef741abc&state=eyJpZCI6IjlmMDQ1ZTIyLWY2ZDgtNGY3MS1iNzU3LWQ0OWVlN2NkZWY3OSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&_ga=2.230922463.1371461897.1701380473-1690674604.1698180870), na seção **Configurações > Integradora de frete**.

No campo Endereço URL, informe a seguinte rota de API, substituindo `{AccountName}` pelo [nome da sua loja](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) na plataforma VTEX:

`http://cnovaintegration.vtexcommercestable.com.br/api/viavarejointegration/pub/{{AccountName}}/freight?skuId={{skuId}},{{quantidade}}&zipcode={{cep}}`

> ℹ️ Se o seller utiliza a solução logística <a href= "https://suportemarketplace.viavarejo.com.br/pt-BR/lojista/artigo/?kbid=KA-01543&title=O%20que%20%C3%A9%20Envvias?#:~:text=O%20Envvias%20%C3%A9%20a%20plataforma,ele%20passa%20a%20ser%20automatizado!">Envvias</a>, deverá <a href= "https://suportemarketplace.viavarejo.com.br/pt-BR/lojista/artigo/?kbid=KA-01538&title=Como%20cadastro%20minha%20Tabela%20de%20Conting%C3%AAncia?&cat=Gest%C3%A3o%20de%20Fretes">cadastrar</a> a URL de frete como <a href= "https://suportemarketplace.viavarejo.com.br/pt-BR/lojista/artigo/?kbid=KA-01071&title=O%20que%20%C3%A9%20uma%20Tabela%20de%20Conting%C3%AAncia?&cat=Gest%C3%A3o%20de%20Fretes">tabela de contingência</a> ou abrir um chamado na Casas Bahia Marketplace para remover o Envvias e cadastrar a URL de Frete.

## Cadastrar Integradora de Pedidos

Para ativar a importação de pedidos da Casas Bahia Marketplace para a VTEX, é recomendável informar a rota de API abaixo, substituindo `{accountName}` pelo nome da sua conta na VTEX. Você precisa cadastrar essa URL pelo [Portal do Lojista da Casas Bahia Marketplace](https://pas.viavarejo.com.br/), na seção **Configurações > Integradora de pedidos**.

`https://{accountName}.vtexcommercestable.com.br/api/viavarejointegration/pub/order/notification`

Para mais informações sobre esse processo, leia a documentação da Casas Bahia Marketplace [Integradora de pedidos - Como cadastrar URL de pedidos?](https://suportemarketplace.viavarejo.com.br/pt-BR/lojista/artigo/?kbid=KA-01735&title=Integradora%20de%20pedidos%20-%20Como%20cadastrar%20URL%20de%20pedidos?&cat=Configura%C3%A7%C3%B5es).
