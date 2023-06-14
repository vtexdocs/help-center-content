---
title: 'Configurações no Via Marketplace'
id: 2oxPVeYpVgA8IrhaDqKon6
status: PUBLISHED
createdAt: 2022-01-18T21:39:29.664Z
updatedAt: 2023-02-08T14:50:54.438Z
publishedAt: 2023-02-08T14:50:54.438Z
firstPublishedAt: 2022-01-18T22:32:05.415Z
contentType: trackArticle
productTeam: Channels
slug: configuracoes-na-via-marketplace
trackId: 3E9XylGaJ2wqwISGyw4GuY
trackSlugPT: configurar-integracao-da-via-varejo
---

Os primeiros passos para integrar sua loja VTEX com o Via Marketplace são:

1. [Criar conta de seller no Via Marketplace](#criar-conta-de-seller-no-via-marketplace)
2. [Solicitar token no Via Marketplace](#solicitar-token-no-via-marketplace)
3. [Cadastrar Integradora de Frete](#cadastrar-integradora-de-frete)
4. [Cadastrar Integradora de Pedidos](#cadastrar-integradora-de-pedidos)

## Criar conta de seller no Via Marketplace

O primeiro passo para configurar sua loja é [criar uma conta de seller no Via Marketplace](https://so.via.com.br/). Depois de  realizar o cadastro e criar a conta, você deverá aguardar o contato da Via para orientá-lo sobre os próximos passos para cadastro da sua conta de seller.

## Solicitar token no Via Marketplace

Depois que receber o contato do Via Marketplace, você deverá solicitar ao marketplace a chave de acesso (token) para começar a configurar a integração VTEX. Essa chave dá permissão para a VTEX alterar ou atualizar informações relacionadas à sua loja diretamente no marketplace.

A chave de acesso será utilizada na etapa de [Cadastro do conector do Via](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/1okse2MybWk04AQoueu88O). Sem esse token não será possível concluir a integração com o Via Marketplace.

Existem três fluxos diferentes para configurar sua conta no Via. Veja abaixo em qual deles você se encaixa e faça download da documentação do Via Marketplace:

- [Onboarding](https://drive.google.com/uc?export=download&id=1g6Swi8HoSkIRyZGeab4AYoQh4GMxC1wy): a solicitação do token do Via Marketplace é feita no Onboarding para lojistas que estão integrando pela primeira vez.
- [Chamado para lojistas não integrados](https://drive.google.com/uc?export=download&id=1Ty_KwFH5k0QI5pAyzt_bBdy7OfjMODY5): para lojistas que estavam cadastrados anteriormente no Via e não integraram suas lojas. A solicitação do token é feita por uma abertura de chamado no [Portal do lojista do Via Marketplace](https://pas.viavarejo.com.br/login?returnUrl=%2F).
- [Chamado para lojistas integrados](https://drive.google.com/uc?export=download&id=1KK0z5CFlA1pPH0QoFq2trrZWcVbkjqQC): o lojista deverá se enquadrar em uma das circunstâncias abaixo:
   * Utilizava uma outra integração antes de utilizar a integração da VTEX.
   * Quando o lojista deseja modificar de integrador para integração própria.

## Cadastrar Integradora de Frete

O Via Marketplace exige que você informe uma rota de API para a consulta de valores de frete, preço e prazo em tempo real, de acordo com o CEP. Você precisa cadastrar essa URL pelo [Portal do lojista do Via Marketplace](https://orbviavarejo.nccserver.com.br/ViaVarejoWeb), na seção **Configurações > Integradora de frete**.

No campo Endereço URL, informe a seguinte rota de API, substituindo `{AccountName}` pelo [nome da sua loja](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) na plataforma VTEX:

`http://cnovaintegration.vtexcommercestable.com.br/api/viavarejointegration/pub/{{AccountName}}/freight?skuId={{skuId}},{{quantidade}}&zipcode={{cep}}`

<div class="alert alert-info">
Se o seller utiliza a solução logística <a href= "https://suportemarketplace.viavarejo.com.br/pt-BR/lojista/artigo/?kbid=KA-01543&title=O%20que%20%C3%A9%20Envvias?#:~:text=O%20Envvias%20%C3%A9%20a%20plataforma,ele%20passa%20a%20ser%20automatizado!">Envvias</a>, deverá <a href= "https://suportemarketplace.viavarejo.com.br/pt-BR/lojista/artigo/?kbid=KA-01538&title=Como%20cadastro%20minha%20Tabela%20de%20Conting%C3%AAncia?&cat=Gest%C3%A3o%20de%20Fretes">cadastrar</a> a URL de frete como <a href= "https://suportemarketplace.viavarejo.com.br/pt-BR/lojista/artigo/?kbid=KA-01071&title=O%20que%20%C3%A9%20uma%20Tabela%20de%20Conting%C3%AAncia?&cat=Gest%C3%A3o%20de%20Fretes">tabela de contingência</a> ou abrir um chamado no Via Marketplace para remover o Envvias e cadastrar a URL de Frete.
</div>

## Cadastrar Integradora de Pedidos

Para ativar a importação de pedidos do Via Marketplace para a VTEX, é recomendável informar a rota de API abaixo, substituindo `{accountName}` pelo nome da sua conta na VTEX. Você precisa cadastrar essa URL pelo [Portal do Lojista da Via Marketplace](https://pas.viavarejo.com.br/), na seção **Configurações > Integradora de pedidos**.

`https://{accountName}.vtexcommercestable.com.br/api/viavarejointegration/pub/order/notification`

Para mais informações sobre esse processo, leia a documentação do Via Marketplace [Integradora de pedidos - Como cadastrar URL de pedidos?](https://suportemarketplace.viavarejo.com.br/pt-BR/lojista/artigo/?kbid=KA-01735&title=Integradora%20de%20pedidos%20-%20Como%20cadastrar%20URL%20de%20pedidos?&cat=Configura%C3%A7%C3%B5es).
