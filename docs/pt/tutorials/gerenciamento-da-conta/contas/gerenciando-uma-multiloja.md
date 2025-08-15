---
title: 'Gerenciando uma multiloja'
id: 4S0lFVBPylRS5KpVgdyDhJ
status: CHANGED
createdAt: 2024-09-06T12:35:51.501Z
updatedAt: 2025-02-07T13:40:57.764Z
publishedAt: 2025-02-07T13:30:06.894Z
firstPublishedAt: 2024-09-06T13:11:49.620Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: managing-a-multistore
legacySlug: como-criar-multiloja-multidominio
locale: pt
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Multiloja, também conhecida como subconta ou multidomínio, é uma segunda loja administrada dentro de um mesmo painel administrativo da VTEX. Esse recurso geralmente é utilizado quando a loja tem outras marcas com similaridade em logística e métodos de pagamento, ou quando a loja precisa de outro ambiente, como para vendas B2B.

Neste guia, confira como criar, configurar e excluir uma multiloja.

## Criar uma multiloja

A criação de multiloja é sem custos para o lojista. Porém, caso seja necessário [contratar uma política comercial adicional](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), custos extras serão aplicados.

Para criar uma nova loja, siga as instruções da seção **Criar loja** do guia [Gerenciamento de conta](https://help.vtex.com/pt/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq#criar-loja).

É preciso especificar qual é o domínio da sua nova loja. Saiba mais com o guia [Configurando o domínio da sua loja](https://help.vtex.com/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450).

Após criada a multiloja, defina o layout para cada loja dependendo da tecnologia de frontend utilizada. Para mais detalhes, veja [Definir layouts para cada loja](#definir-layouts-para-cada-loja).

### Definir layouts para cada loja

Em um ambiente multidomínio é possível definir layouts distintos para cada loja, variando de acordo com o domínio acessado. 

- Para lojas CMS Portal Legado, veja [Layout](https://help.vtex.com/pt/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW).
- Para lojas desenvolvidas com Store Framework, veja [Gerenciando conteúdo de página e template](https://help.vtex.com/pt/tutorial/gerenciando-conteudo-de-pagina-e-template--3tMbx6HXy4Fy5r9EhboG37).

### Definir politícias comerciais

Para diferenciar produtos e/ou preços em cada loja, é necessária a utilização de políticas comerciais. Para saber mais, veja [Como funciona uma Política Comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) e [Criar uma política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE).

## Configurar website

Para que os clientes possam acessar a nova loja, siga as instruções abaixo para criar um website copiando a estrutura de pastas do seu website principal. Esse processo facilita a criação do layout, mas também é possível criar um website novo.

> ❗ Lojas desenvolvidas com Store Framework também devem seguir estas instruções. Caso contrário, a nova loja não ficará disponível.

1. No Admin VTEX, acesse o módulo **Storefront > Layout**.
2. Clique em **CMS > Sites and channels**.
3. Clique em seu website principal.
4. Clique em `Copy Website`.
5. Clique novamente em **Sites and channels**, na coluna lateral.
6. Clique sobre o website criado e altere o nome.
7. Clique em `Save Website`.
8. No campo **Links**, clique em `Add`.

    ![cms-layout](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/contas/gerenciando-uma-multiloja_1.png)

9. Preencha o campo **Store name from License Manager** com o valor da subconta criada anteriormente no módulo de [Gerenciamento de conta](#configurar-nova-loja).
10. Preencha o campo **Available sales channel** selecionando as políticas comerciais que serão associadas a esta loja.

    > ⚠️ Caso a loja utilize mais de uma 1 política comercial, atente-se para a ordenação dessas políticas em **Configurações da loja > Canais > Políticas comerciais**. Para saber mais, veja [Como funciona a relação entre websites e políticas comerciais](https://help.vtex.com/pt/tutorial/como-funciona-a-relacao-entre-websites-e-politicas-comerciais--1VuakBcyNOgg4AM4cUeeQg).

11. Clique em `Save Binding` e depois em `Save Website`.

### Configurar domínio do XML

Para gerar o arquivo XML da nova loja automaticamente, siga as instruções do guia [Configurar domínio do XML](https://help.vtex.com/pt/tutorial/configurar-dominio-do-xml--2RkGK4vHS0c6sYuUw0cUWC).

## Excluir multiloja

Para excluir uma multiloja existente, siga as instruções da seção **Excluir loja** do guia [Gerenciamento de conta](https://help.vtex.com/pt/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq#excluir-loja).

> ⚠️ O nome da subconta removida não poderá ser utilizado novamente.

## Saiba mais

- [Escolhendo entre arquitetura multiloja ou ambiente adicional](https://help.vtex.com/pt/tutorial/escolhendo-entre-arquitetura-multi-loja-ou-ambiente-adicional--4HRNpa1OCKZ5YzP8yiilBL)
