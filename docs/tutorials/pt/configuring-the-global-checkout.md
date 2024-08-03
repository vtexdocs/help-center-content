---
title: 'Configurar o checkout global'
id: tutorials_1929
status: DRAFT
createdAt: 2017-04-27T21:55:50.812Z
updatedAt: 2022-07-22T18:55:28.876Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:50.616Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slug: configurando-o-checkout-global
locale: pt
legacySlug: configurando-o-checkout-global
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

O checkout global é uma configuração em sua loja que permite a venda para vários países diferentes independente do país de origem de sua conta VTEX.

Para ter uma experiência completa de Checkout global, é importante também que a sua loja possa ser exibida em outros idiomas. Para mais informações sobre essa configuração, acesse o artigo sobre [exibir loja em outro idioma](https://help.vtex.com/pt/tutorial/exibir-a-loja-em-outro-idioma). 

## Exibindo novos campos de documento e telefone

Para exibir opções de digitação de documento e telefone diferentes dos usados pelo país da loja, siga aos passos abaixo:

1. No menu do Admin, clique em __Checkout__.
2. Clique no botão de engrenagem do site que deseja editar.
3. Clique na aba __Código__.
4. Em Arquivos, clique na opção `checkout5-custom.css`.
5. Acrescente o código abaixo.
6. Clique em __Salvar__.

```css
/* /files/checkout5-custom.css */

/* Exibe a opção de digitar um documento estrangeiro */
.document-box { display: block; }

/* Exibe a opção de digitar um telefone internacional */
.phone-box { display: block; }
```

`.document-box { display: block; }` exibe a opção de digitar um documento estrangeiro.

`.phone-box { display: block; }` exibe a opção de digitar um telefone internacional.

Dois novos botões devem ser exibidos em seu Checkout:

- "Não tenho CPF".
- "Não tenho telefone brasileiro".

![checkoutuniversal1](https://images.contentful.com/alneenqid6w5/5M3l0zai5ii4KiayKG4ooI/9a9d27ea50bb97fd248093a6972748e3/checkoutuniversal1.png)

## Exibindo novos endereços de entrega e fatura

### Entregas

Suponha que você queira que a sua loja entregue para clientes na Inglaterra. Para isso, crie uma nova transportadora para lidar com as entregas deste país. Em seguida, adicione uma nova planilha de frete com a coluna "Country" e com o valor "GBR".

1. [Crie uma nova transportadora](/pt/tutorial/gerenciar-transportadora/);
2. Crie, para a nova transportadora, uma planilha de frete com a coluna "Country" com o código ISO de 3 dígitos do país.

<div class="alert alert-info">
O valor da coluna "Country" deve ser o código ISO de 3 dígitos para países. Para consultar os códigos, recomendamos usar o site <a href="https://countrycode.org/">https://countrycode.org/</a>.
</div>

Após ter configurado as entregas para os países que deseja, um novo campo aparecerá no formulário de entrega no seu checkout permitindo a escolha de entegra internacional. 

### Faturas

Ao desmarcar o checkbox "Meu endereço de fatura é o mesmo da entrega" durante o checkout, o usuário pode inserir um novo endereço de fatura entre os países disponíveis pela loja para entrega. Entretanto, nada impede que esse usuário possua um cartão internacional de outros países não disponíveis em sua loja.  

Para permitir o faturamento de um cartão cujo endereço de fatura é em outro país, é necessário tornar visível na página da sua loja um campo de seleção de país em "Endereço de fatura". 

A exibição de todos os países no campo de *Endereço de faturamento* pode ser ativada no layout (CSS) da sua loja com o código abaixo:


```css
/* Show all countries */
.CountrySelector--all-countries { display: block; }
/* Hide delivery countries */
.CountrySelector { display: none; } 
```

