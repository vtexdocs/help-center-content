---
title: 'Controle de estoque mínimo para integrações'
id: 5hvUNIiSeJ5QCaZQYpYf1D
status: CHANGED
createdAt: 2020-10-16T15:25:46.901Z
updatedAt: 2024-09-04T14:27:54.489Z
publishedAt: 2023-03-29T16:15:17.491Z
firstPublishedAt: 2020-10-16T17:29:32.622Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: controle-de-estoque-minimo-para-integracoes
locale: pt
legacySlug: controle-de-estoque-minimo-para-integracoes
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Controle de estoque mínimo é uma medida de segurança criada para impedir a venda de produtos com estoque menor ou igual ao definido pelo lojista na configuração da integração.

Essa configuração está disponível nas seguintes integrações:

- [Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan)
- [B2W/SkyHub](https://help.vtex.com/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/40eYElt1qwIqGeIeum2W4M)
- [Carrefour](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/2AhqcmRN1mseCsGuGIe6GK)
- [Centauro](https://help.vtex.com/pt/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj/4EqL0hADU1AWvP0gTr4nyq)
- [Dafiti](https://help.vtex.com/pt/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i/5lAIj7OCqizD5EisLJvatx)
- [Magazine Luiza](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y/4QWLcDhsh2GSSamouyu6M0)
- [Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi)
- [Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/7o8Vt25LJmAUuMmSWSmWes)
- [Via Varejo](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/1okse2MybWk04AQoueu88O)

## Como funciona

Quando o estoque mínimo é atingido, a integração envia para o marketplace uma atualização de estoque igual a zero, isso garante que não sejam vendidos mais produtos até que seja atualizado o estoque novamente. Para que o lojista fique ciente quando isso ocorre, é colocado um aviso em **Marketplace > Conexões > Inventário**.

## Configuração

Para configurar o estoque mínimo da sua integração, siga os passos abaixo:

1. Acesse o Admin.
2. No menu Marketplace > Conexões, clique em **Integrações**.
3. Selecione a opção **Configurações**.
4. Escolha a integração que seja configurar.
5. Ao escolher a integração, clique na engrenagem<img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/pt/controle-de-estoque-minimo-para-integracoes-0.JPG" />.
6. Selecione a opção **Editar Configurações**.
7. No campo **Estoque mínimo**, digite o valor desejado.
8. Clique em **Salvar**.

Feito isso, o estoque mínimo estará ativo para todas as categorias cadastradas na integração que você escolheu. Para checar o estoque dos seus produtos, acesse o painel de estoque em *Marketplace > Integrações > Estoque*.
