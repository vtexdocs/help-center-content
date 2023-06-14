---
title: 'Integrar com YOP'
id: tutorials_4206
status: PUBLISHED
createdAt: 2017-04-27T21:51:42.320Z
updatedAt: 2023-03-29T16:28:29.290Z
publishedAt: 2023-03-29T16:28:29.290Z
firstPublishedAt: 2017-04-27T23:11:14.915Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: integrando-com-yop
legacySlug: integrando-com-yop
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

## Primeiros passos

Alguns passos são essenciais para iniciarmos as configurações da integração com o marketplace YOP.  
1. Configure a [política comercial](http://help.vtex.com/tutorial/configurando-a-politica-comercial-para-marketplace/ "política comercial");  
2. Configure a [logística](/tutorial/configurando-logistica-para-marketplace/ "logística") para essa política comercial;  
3. Entre em contato com a YOP;  

## Como configurar

### Configure o perfil de acesso

1. No avatar do seu perfil, clique em **Configurações da conta**;
2. Clique na aba **Usuários**;
3. Clique no botão **Novo usuário**;
4. Preencha o **e-mail** e **nome completo**;
5. Busque e selecione os perfis de acesso **IntegrationProfile-Fulfillment\_Oms **(para adicionar as novas ordens);
6. Clique no botão **Adicionar;**
7. Clique no botão **Salvar**.

### Configure o afiliado

[Siga as instruções de nosso manual e preencha os campos conforme indicação abaixo](http://help.vtex.com/tutorial/como-configurar-afiliado/ "Siga as instruções de nosso manual e preencha os campos conforme indicação abaixo").

- **Nome:** YOP
- **ID:** YPP
- **Política Comercial:** ID da política comercial que será assumida pelo marketplace.
- **E-mail de FollowUp:** Endereço de e-mail que receberá qualquer notificação de conflito nas integrações de pedidos.
- **Endpoint de Search:** https://yop.land/vtex/notifications
- **Versão do Endpoint de Search:** Hoje existe apenas 1, não alterável – Padrão: 1.x.x;
- **Usar meu meio de pagamento:** Não utilizar.

### Crie uma promoção de frete grátis 

[Siga nosso manual de como criar promoção para o marketplace](https://help.vtex.com/pt/tutorial/configurar-promocao-para-marketplace--tutorials_406).

## Para saber mais

[Entenda como funciona a integração com os marketplaces](http://help.vtex.com/tutorial/integrando-com-marketplace/ "Entenda como funciona a integração com os marketplaces").

