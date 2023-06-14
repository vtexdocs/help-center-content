---
title: 'Como adicionar e-mail de televendas personificado via Session Manager'
id: 4tT90hWRChUy84UClF8pC
status: DRAFT
createdAt: 2020-05-29T13:00:15.053Z
updatedAt: 2022-08-04T22:34:08.245Z
publishedAt: 
firstPublishedAt: 2020-05-29T13:11:22.057Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: como-adicionar-e-mail-de-televendas-personificado-via-session-manager
locale: pt
legacySlug: como-adicionar-e-mail-de-televendas-personificado-via-session-manager
subcategory: dajK0sARX2c0MISKKoGoc
---

Para operações B2B, é fundamental que operadores de televenda sejam capazes de fechar pedidos em nome de clientes, ou seja, “personificando” esses clientes. Isto porque, nesse cenário, é uma prática comum que as vendas sejam realizadas na plataforma, mas não executadas diretamente pelo cliente.

Para permitir esse tipo de venda, a VTEX oferece a feature de televendas, por meio da qual um operador "toma o lugar" do cliente final durante o processo de escolha dos produtos e o checkout. O operador assume o usuário do cliente, com permissões limitadas, e consegue realizar compras.

## Toolbar de televendas

O modo mais simples de usar a feature de televendas é por meio da __toolbar de televendas__. Ela é uma barra superior que aparece no front-end da loja uma vez que o operador cadastrado faça o login no ambiente dessa loja. É exibida em todas as áreas do site, exceto na tela de Meus Pedidos.

Estes são os passos necessários para usar a toolbar de televendas:
- [Criar um usuário com permissão de televendas.](https://help.vtex.com/pt/tutorial/como-criar-um-usuario-de-televendas--frequentlyAskedQuestions_4227)
- [Realizar a compra via televendas.](https://help.vtex.com/pt/tutorial/comprar-em-nome-do-cliente-pelo-televendas--4gsnClNy1iUCkSK6y0GI2O)
- [Customizar a toolbar de televendas.](https://help.vtex.com/pt/tutorial/usando-e-customizando-toolbar-de-televendas--tutorials_5500)

## API de Session

Embora a toolbar de televendas seja a opção mais simples para permitir compras “personificadas”, é possível valer-se da API de Session Manager para atingir o mesmo efeito, porém com maior controle por parte da loja.

O [Session Manager](https://help.vtex.com/pt/tutorial/using-session-manager-to-track-browsing-sessions-in-vtex-stores--1pA0tqsD4BFnJYhQ7ORQBd) é um sistema que rastreia a sessão de navegação atual de todos os clientes finais em lojas VTEX. Sua API permite à loja obter informações de sessão relevantes, que são capturadas automaticamente e armazenadas em um local seguro e facilmente acessível.

Para operações B2B mais complexas, pode ser interessante construir uma integração diretamente com a API de Session Manager. Neste caso, em vez de fazer a personificação do cliente via toolbar de televendas, a loja insere o e-mail do cliente a ser personificado nas informações do Session Manager. 

Se o administrador da sessão tiver permissão para personificar clientes, o ID e o email do usuário personificado serão carregados na sessão, e o operador poderá fazer compras em nome deste usuário.

### Instalando a app vtex.impersonate-session

O Session é composto de objetos JSON, que são alimentados com informações de uma série de apps instaladas na loja. Uma dessas apps é a `vtex.impersonate-session`. É ela que permite a personificação de clientes.

Essa app não vem instalada por padrão nas lojas VTEX, então, antes de mais nada, é necessário instalá-la. Para isso, você deve usar a CLI da VTEX. Se ela ainda não está instalada no seu computador, faça a instalação usando o comando abaixo no seu terminal:

`yarn global add vtex`

Se quiser saber mais detalhes sobre a CLI da VTEX, veja a [documentação do VTEX IO Toolbelt](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-toolbelt).

Com a CLI instalada, faça login na sua loja usando o seguinte comando:

`vtex login`

Agora, vamos instalar a app `vtex.impersonate-session`. Para isso, digite o seguinte comando:

`vtex install vtex.impersonate-session`

Pronto, a app está instalada na sua loja, e com isso o recurso de personificação de clientes foi habilitado.

### Usando o Session Manager para personificar clientes

A app `vtex.impersonate-session`, assim como todas as apps que têm dependências de sessão, monitoram mudanças nas suas entradas e modificam parâmetros de sessão através das suas saídas.

Ela recebe o parâmetro `vtex-impersonated-customer-email` por meio de um POST direto ou um cookie e tenta personificar o usuário dono desse e-mail usando as credenciais de administrador na sessão. Se essas credenciais tiverem permissão para personificar clientes (ou seja, se o usuário do operador tiver o perfil de acesso de televendas), o ID e o e-mail do usuário personificado são carregados na sessão.

Estes são os inputs que vão na chamada:

- __public__: `vtex-impersonated-customer-email`
- __cookie__: `vtex-impersonated-customer-email`
- __authentication__: `adminUserEmail`

E estes são os outputs que a app devolve:

- __impersonate__: `storeUserId`, `storeUserEmail`, `canImpersonate`, `account`

Vamos ver um exemplo de objeto enviado no request:

```json
{
    "public": {
        "vtex-impersonated-customer-email": {
            "value": "client@gmail.com"
        },
        "authentication": {
            "value": "operator@gmail.com"
        }
    }
}
```

E agora, um exemplo de body da resposta:

```json
"public": {
            "vtex-impersonated-customer-email": {
                "value": "client@gmail.com"
            },
            "authentication": {
                "value": "operator@gmail.com"
            }
        },
        "impersonate": {
            "canImpersonate": {
                "value": "true"
            },
            "account" : {
                "value": "myStore"
            }
        }
```
