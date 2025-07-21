---
title: 'Controle de estoque mínimo para integrações'
id: 5hvUNIiSeJ5QCaZQYpYf1D
status: PUBLISHED
createdAt: 2020-10-16T15:25:46.901Z
updatedAt: 2024-09-13T19:35:42.177Z
publishedAt: 2024-09-13T19:35:42.177Z
firstPublishedAt: 2020-10-16T17:29:32.622Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: minimum-stock-control-for-integrations
locale: pt
legacySlug: controle-de-estoque-minimo-para-integracoes
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Controle de estoque mínimo é uma medida de segurança criada para impedir a venda de produtos com estoque menor ou igual ao definido pelo lojista na configuração da integração.

Essa configuração está disponível nas seguintes integrações:

- [Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan)
- [B2W/SkyHub](/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk/40eYElt1qwIqGeIeum2W4M)
- [Carrefour](/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/2AhqcmRN1mseCsGuGIe6GK)
- [Centauro](/pt/tracks/integracao-com-a-centauro--D8Qnjbr5lfLkUfMRhsfbj/4EqL0hADU1AWvP0gTr4nyq)
- [Dafiti](/pt/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i/5lAIj7OCqizD5EisLJvatx)
- [Magazine Luiza](/pt/tracks/configurar-integracao-com-a-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y/4QWLcDhsh2GSSamouyu6M0)
- [Mercado Livre](/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi)
- [Netshoes](/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/7o8Vt25LJmAUuMmSWSmWes)
- [Casas Bahia](/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/3rymwJDuc5Z6lQtsyTINim)

## Como funciona

Quando o estoque mínimo é atingido, a integração envia para o marketplace uma atualização de estoque igual a zero, isso garante que não sejam vendidos mais produtos até que seja atualizado o estoque novamente. Para que o lojista fique ciente quando isso ocorre, um aviso é registrado na página de estoque que pode ser acessado em **Marketplace > Conexões > Inventário**.

## Configuração

Para configurar o estoque mínimo da sua integração, siga os passos abaixo:  

- No Admin VTEX acesse **Marketplace > Conexões > Marketplaces e integrações.**  
1. Selecione a integração desejada.  
2. Clique no botão `Editar`.  
3. No campo **Estoque mínimo,** digite o valor desejado.  
4. Clique em `Salvar`.  

Feito isso, o **estoque mínimo** estará ativo para todas as categorias cadastradas na integração que você escolheu. Para checar o estoque dos seus produtos, acesse o painel de estoque em **Marketplace > Conexões > Inventário.**  

