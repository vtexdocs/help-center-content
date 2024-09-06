---
title: 'Configurar a captação de newsletter pelo Master Data'
id: frequentlyAskedQuestions_1816
status: ARCHIVED
createdAt: 2019-01-24T20:45:58.651Z
updatedAt: 2022-10-20T19:13:32.914Z
publishedAt: 
firstPublishedAt: 2019-01-24T21:59:16.064Z
contentType: tutorial
productTeam: Master Data
author: authors_84
slug: como-configuro-a-captacao-de-newsletter-pelo-master-data
locale: pt
legacySlug: como-configuro-a-captacao-de-newsletter-pelo-master-data
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

Captação de newsletter é um formulário que pode ser inserido em qualquer página do seu site (exceto Checkout, que já possui o recurso nativamente) para obter e-mails de clientes interessados em receber as novidades da loja. Geralmente, esse cadastro está associado a uma promoção da loja.

Esse artigo tem com objetivo auxiliar na configuração para a captação dos e-mails de clientes interessados em receber newsletter pelo Master Data.

>⚠️ O controle vtex.cmc:newsletterOptIn está descontinuado e não deve mais ser usado.

Esta opção de configuração pelo Master Data oferece a comodidade de tratar os dados de todos os clientes pelo mesmo local, visto que todos os clientes cadastrado na loja já estão no Master Data. Ou seja, é o local próprio para a manutenção e ações relacionadas aos clientes e manter todos os cadastros em um só lugar é facilitar o dia a dia.

Portanto, seguem os passos necessários para tal configuração.

1. Crie os campos necessários no CRM. Esse passo somente é valido caso você queira um campo extra, que já não exista atualmente em seu CRM. Se for esse seu caso, [acesse nosso manual de manutenção de entidades de dados](/pt/faq/como-crio-um-campo-no-master-data/).
2. Crie esses campos no HTML da página que a loja desejar. A grande mudança nesse aspecto é que não é mais usado um controle para isso, e sim um código em HTML criado pela loja ou sua agência.
3. Envie as informações por [API do MasterData](https://developers.vtex.com/reference/master-data-api-v1-overview). Para isso, é necessário utilizar a API `https://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents`, com verbo PATCH, passando os dados em JSON. Ex.:

```
{ 
  "firstName" : "Jonh",
  "lastName" : "Lennon", 
  "email" : "jonh.lennon@lennon.com.br"
}
```

Lembre-se de enviar também o campo **isNewsletterOptIn** como `true`, para marcar o cliente como alguém que aceitou receber newsletter.

Após essas configurações, você já pode verificar em seu CRM os e-mails que optaram por receber newsletter.
