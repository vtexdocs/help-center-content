---
title: 'Customizar a toolbar de Televendas'
id: 1XEz1zqO3KyIuwC4asUsOg
status: PUBLISHED
createdAt: 2017-10-06T15:54:18.649Z
updatedAt: 2021-11-30T18:20:26.153Z
publishedAt: 2021-11-30T18:20:26.153Z
firstPublishedAt: 2017-10-06T15:55:58.368Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slugEN: customizar-a-toolbar-de-televendas
legacySlug: customizar-a-toolbar-de-televendas
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div class="alert alert-warning">Não é recomendável alterar a altura do elemento da toolbar. Caso sua loja tenha um header ou outro elemento fixo no topo da tela, ele deve receber a propriedade <code>top</code> com a altura necessária para compensar presença da toolbar de televendas.</div>

A nova toolbar de televendas pode ser customizada com os estilos da sua loja ou com javascript. Para sobrescrever os estilos originais da toolbar, faça a customização em um arquivo **.css **ou **.js** e carregue-o no template da página.

Para customizar os estilos da toolbar, use as seguintes classes:

```
.cc-toolbar //Elemento mais externo da toolbar  
.cc-user //Seção com email do usuário (operador)  
.cc-customer //Seção com email do cliente personificado  
.cc-btn-login //Botão de login para personificar cliente  
.cc-impersonate //Pop-up com form para input do email do cliente  
.cc-btn-change //Botão de login para trocar de cliente personificado  
```

Para interagir com a barra via javascript, use os IDs abaixo como hooks para acessar seus diferentes elementos no DOM:

```
#vtex-callcenter //Elemento mais externo da toolbar  
#vtex-callcenter__user-email //Elemento do email de usuário (operador)  
#vtex-callcenter__customer-email //Elemento do email do cliente  
#vtex-callcenter__customer-email-input //Elemento de input do email do cliente  
#vtex-callcenter__customer-login-submit //Elemento de submit do input do email do cliente  
``` 

Você também pode interagir com a barra usando métodos de Javascript públicos:

```
//Login do impersonar cliente
window.cc.impersonate(customer_email)
```
(Onde `customer_email` é uma string com o email do cliente)


```
//Logout do impersonar cliente
window.cc.customerLogout()
```
(Retorna `true` se fez logout, retorna `false` se não havia cliente impersonado)

