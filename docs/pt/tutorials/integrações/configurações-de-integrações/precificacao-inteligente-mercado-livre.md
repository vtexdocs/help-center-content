---
title: 'Precificação inteligente do Mercado Livre'
id: 3J8t9EFFaaxmOloOqzU5Hz
status: PUBLISHED
createdAt: 2025-09-29T19:04:19.374Z
updatedAt: 2025-10-17T20:20:24.067Z
publishedAt: 2025-10-17T20:20:24.067Z
firstPublishedAt: 2025-09-29T19:25:29.346Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: smart-pricing-mercado-libre
legacySlug: precificacao-inteligente-mercado-livre
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

A **Precificação inteligente** na [integração do Mercado Livre](xxxxx) disponibiliza duas funcionalidades, a **Sugestões de preços** e o **Ajuste automático de preços.** Veja a seguir o que é cada uma dessas funcionalidades e como utilizá-las.

Ambas as funcionalidades estão disponíveis apenas para clientes que utilizam a integração **Mercado Livre Premium.**

## Sugestões de preços

A funcionalidade **Sugestões de preços** envia alertas para o seller com sugestões de ajustes de valor em seus anúncios publicados. Essas sugestões são realizadas com base em uma análise de produtos semelhantes de outros sellers.

Para ativar as **Sugestões de preços,** siga os passos abaixo:

1. Acesse **Admin VTEX > Marketplace > Mercado Livre > Preferências > Precificação inteligente** ou digite na barra de busca **Precificação inteligente.**
2. Na seção **Sugestões de preços,** clique no botão <i class="ph ph-play-circle"></i>, um pop-up de confirmação aparecerá.
3. Clique no botão `Confirmar`.  

Após ativar a funcionalidade, o seller deve acompanhar as sugestões geradas, no [módulo de preços](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) que pode ser acessado no Admin VTEX clicando em **Marketplace > Conexões > Preços**.

Todas as sugestões de preços podem ser identificadas no módulo Preços através do **ID** que segue a seguinte estrutura, `186-Automation`, conforme imagem abaixo:

![Precificação inteligente do Mercado Livre](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/precificacao-inteligente-mercado-livre_1.png)

## Ajuste automático de preços

O **Ajuste automático de preços** permite que o seller configure regras para que os preços dos anúncios publicados sejam atualizados de forma dinâmica, sempre em relação ao menor valor encontrado em anúncios similares no Mercado Livre e em outros sites.

Para ativar o **Ajuste automático de preços** siga os passos abaixo:

1. Acesse **Admin VTEX > Marketplace > Mercado Livre > Preferências > Precificação inteligente** ou digite na barra de busca **Precificação inteligente.**
2. Na seção **Ajuste automático de preços,** clique no botão `<i class="ph ph-plus"></i> Criar regra`, uma nova aba será aberta.
3. Preencha os campos `Informações gerais` e `Comparar com preços`.   
4. Clique no botão `Próximo`.
5. Selecione uma categoria a qual deseja associar a essa regra.
6. Clique no botão `<i class="ph ph-arrow-line-down"></i> Baixar SKUs para configuração` e preencha os campos de **preço mínimo** e **preço máximo** para cada SKU.
7. Faça upload da planilha.
8. Clique no botão `Confirmar`.
9. Clique no botão `Ativar regra` para criar e aplicar a nova regra.

### Gerenciar regras

Todas as regras existentes podem ser **alteradas, pausadas** e **excluídas.**

#### Alterar regra

Para alterar alguma regra, siga os passos abaixo:

1. Na regra desejada, clique no botão <i class="ph ph-pencil-simple"></i>.  
2. Clique no botão <i class="ph ph-arrow-line-down"></i> para baixar a planilha.  
3. Altere os preços desejados na planilha.  
4. Faça upload da planilha alterada.  
5. Clique em `Confirmar alterações`. 

#### Pausar regra

Para pausar uma regra, siga os passos abaixo:

1. Na regra desejada, clique no botão <i class="ph ph-pencil-simple"></i>.
2. Clique no botão<i class="ph ph-pause-circle"></i>.
3. Clique no botão `Desativar`. 

#### Excluir regra

Para excluir uma regra, siga os passos abaixo:

1. Na regra desejada, clique no botão <i class="ph ph-pencil-simple"></i>.    
2. Clique no botão <i class="ph ph-trash"></i>.    
3. Clique no botão `Excluir`. 

