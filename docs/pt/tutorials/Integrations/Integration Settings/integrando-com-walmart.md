---
title: 'Integrar com Walmart'
id: tutorials_420
status: ARCHIVED
createdAt: 2017-04-27T22:05:57.794Z
updatedAt: 2023-03-29T16:30:37.304Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:24.177Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: integrating-with-walmart
locale: pt
legacySlug: integrando-com-walmart
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

## Primeiros passos

Alguns passos são essenciais para iniciarmos as configurações.

1. [Contrate o channel](/pt/tutorial/integrando-com-marketplace/).
2. Configure a [política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/).
3. Configure a [logística](/pt/tutorial/configurando-logistica-para-marketplace/) para essa política comercial.
4. Entre em contato com o Walmart e obtenha o __usuário__, __senha__ e __ID do seller__ para acesso a API: [https://marketplace.walmart.com.br/prospection](https://marketplace.walmart.com.br/prospection).

## Como configurar

1. Na seção __Marketplace__ do menu lateral do Admin, clique em __Integrações__.
2. Uma lista de opções vai se abrir. Clique em __Configurações__.
3. No box do Walmart, clique no botão __Integrar__.
4. Preencha os campos detalhados abaixo.
5. Clique no botão __Salvar configuração__. O botão estará ativo somente se todos os campos estiverem preenchidos.

## Campos

- __Integração ativada:__ Quando “Sim” ativa a exportação de produtos, preços e estoque. Quando “Não” inativa a integração apagando o afiliado e permissão de acesso no Walmart.
- __Id do Afiliado:__ Preencha o campo com três letras para identificar o afiliado. Vale destacar que neste campo apenas consoantes são aceitas. Recomendamos preencher com `WMT`.
- __Email para notificação:__ Email que recebe notificações quando houver alertas na integração de pedidos.
- __Usuário Walmart:__ Usuário para autenticação das importações de produtos, preços e estoque.
- __Senha Walmart:__ Senha para autenticação das importações de produtos, preços e estoque.
- __SellerId do Walmart:__ ID da loja no Walmart.
- __Endereço do site:__ Endereço da loja principal (insira `http://` ou `https://`). Ex.: `http://www.{AccountName}.com.br`.
- __Política Comercial:__ ID da política comercial que será utilizada para o parceiro Walmart.

Após as configurações, a integração envia todos os produtos associados à política comercial determinada para o Walmart.

>⚠️ **Importante:** o Walmart não aceita código HTML nos campos de descrição do produto e campos de especificação.

## Fluxo da integração

A VTEX envia __produtos__, __preço__ e __estoque__ para o Walmart, e a última atualização de envio fica registrada no admin, no módulo de Integrações.

O __fluxo de pedidos__ e __consulta de frete__ são feitos pelo Walmart, que consulta a API da VTEX para simular o frete em tempo real. Dessa forma, a responsabilidade de integração dos pedidos é do Walmart. Para que eles possam fazer isto, será necessário fornecer a __API de Pedidos__ e __autenticar a integração__.

1 - API de Pedidos
`http://{AccountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orders?affiliateid={xxx}&sc={y}`

- Note que o termo __{AccountName}__ deve ser substituído pelo nome do ambiente de sua loja.
- O valor para o parâmetro __affiliateid__ deve ser substituído pelo ID do afiliado configurado no passo anterior. O valor para o parâmetro __sc__, deve ser substituído pelo ID da [política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/) usada para o marketplace do Walmart.

2 - [Autenticar a integração](/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes)
Depois de realizar todos esses passos, você vai precisar autenticar a integração com Walmart. Para isso, você só precisa enviar o appKey para eles (veja como [gerar o appKey para autenticação de integrações](/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes)). Se tiver alguma dúvida sobre o processo, entre em contato com a equipe do Walmart.

>⚠️ Lembre-se de que o appKey precisa estar associado ao perfil de acesso **IntegrationProfile - Fulfillment**. Ele é o que possui as permissões necessárias para a realizar o processo de integração com o marketplace.
