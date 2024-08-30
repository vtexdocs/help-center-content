---
title: 'Cupons promocionais: tipos e grupos'
id: 1aAEN3ADpz19ss5JCIEBdL
status: PUBLISHED
createdAt: 2022-04-28T20:08:46.916Z
updatedAt: 2024-08-15T11:27:28.984Z
publishedAt: 2024-08-15T11:27:28.984Z
firstPublishedAt: 2022-04-28T20:24:24.046Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: cupons-beta
locale: pt
legacySlug: cupons-beta
subcategory: 1TXh7VjDSIGA2eSI0CmUsi
---

Um cupom consiste em um código promocional, composto de uma sequência de letras e números. Você pode disponibilizar cupons para aplicar promoções sobre o valor do carrinho. Assim, ao informar o código de um cupom válido no momento da compra, os seus clientes podem obter descontos sobre o valor do pedido.

## Como criar cupons

É possível criar e editar cupons pelo Admin VTEX, em **Promoções** > [Cupons](https://help.vtex.com/pt/tutorial/lista-de-cupons-beta--5z5ya3IonsC2W4B5h4JrsZ), ou pela [Promotions & Taxes API v2](https://developers.vtex.com/vtex-rest-api/reference/promotions-taxes-api-v2).

>⚠️ Para ser utilizado, o cupom precisa estar vinculado a pelo menos uma promoção. É possível associar um cupom a qualquer tipo de promoção, exceto a [Promoção de campanha](https://help.vtex.com/pt/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume). Saiba mais em [Criar cupom (Beta)](https://help.vtex.com/pt/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU).

## Tipos de cupons

Na VTEX, existem cupons únicos e grupos de cupons. Veja a seguir a descrição e o uso indicado para cada tipo de cupom.

### Cupons únicos

Cupons únicos são cupons que disponibilizam apenas um código promocional.

O cupom único não é obrigatoriamente limitado a apenas uma utilização. Ser “único” significa que ele disponibiliza um só código promocional. A quantidade de vezes que cada cupom poderá ser utilizado é configurável em **Restrições**, durante a criação do cupom.

O cupom único é útil em cenários como:

* Promoções relacionadas a datas comemorativas, em que um mesmo código promocional pode ser utilizado por vários clientes, com ou sem restrições de uso. Exemplo: `NATAL22`.
* Promoções que se aplicam à primeira compra de um cliente na loja, em que um mesmo código promocional pode ser utilizado por vários clientes, com a restrição de que cada cliente só pode usá-lo uma vez. Exemplo: `BOASVINDAS10`.

### Grupos de cupons

Grupos de cupons  são agrupadores de códigos, ou seja, disponibilizam mais de um código promocional com o mesmo efeito.

Um grupo de cupom é útil em cenários como:

* Promoções com influenciadores digitais, em que cada influenciador pode compartilhar um código diferente – atrelado ao mesmo cupom – com sua rede de seguidores. 
* Programas de fidelidade, que disponibilizam vários códigos para cada cliente participante, atrelados ao mesmo cupom.
* Divulgação em massa de códigos de cupom, que podem ser configurados para utilização uma só vez.

A plataforma gera códigos automaticamente a partir do prefixo, adicionando um hífen e um código aleatório de 15 caracteres, incluindo letras e números. Exemplo: ao criar um grupo de cupons com o código `PROMO`, a plataforma vai gerar códigos no formato `PROMO-99n0xjzfum1o6tk`.

Você pode gerar até 1000 códigos associados a um grupo. Para gerar mais de um código atrelado a um cupom, é necessário ativar a opção **Gerar cupons em grupo** ao criá-lo e informar a quantidade de cupons desejada. Veja [Criar cupom](https://help.vtex.com/pt/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU) para mais informações sobre essa configuração.

A quantidade de vezes que cada código do grupo poderá ser utilizado é configurável em **Restrições**, durante a criação do cupom.

## Saiba mais

* [Lista de Cupons](https://help.vtex.com/pt/tutorial/lista-de-cupons-beta--5z5ya3IonsC2W4B5h4JrsZ)
* [Criar cupom](https://help.vtex.com/pt/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU)
