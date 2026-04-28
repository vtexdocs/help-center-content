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
legacySlug: controle-de-estoque-minimo-para-integracoes
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Controle de estoque mínimo é uma medida de segurança criada para impedir a venda de produtos com estoque menor ou igual ao definido pelo lojista na configuração da integração.

Essa configuração está disponível nas seguintes integrações:

- [Amazon](/pt/docs/tracks/configurar-a-integracao-da-amazon)
- [B2W/SkyHub](/pt/docs/tracks/configurar-conector-b2w)
- [Carrefour](/pt/docs/tracks/configurar-cadastro-da-integracao-do-carrefour)
- [Centauro](/pt/docs/tracks/cadastro-da-integracao-da-centauro)
- [Dafiti](/pt/docs/tracks/dafiti-marketplace)
- [Magazine Luiza](/pt/docs/tracks/cadastro-da-integracao-da-magazine-luiza)
- [Mercado Livre](/pt/docs/tracks/cadastro-da-integracao-do-mercado-livre)
- [Netshoes](/pt/docs/tracks/cadastro-da-integracao-da-netshoes)
- [Casas Bahia](/pt/docs/tracks/casas-bahia-marketplace)

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

