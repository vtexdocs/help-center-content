---
title: 'Regionalização do Google Shopping disponível'
createdAt: 2026-09-23T12:00:00.000Z
updatedAt: 2026-09-23T12:00:00.000Z
contentType: updates
productTeam: Channels
slugEN: 2026-09-23-google-shopping-regionalization
locale: pt
announcementSynopsisPT: 'A integração Google Shopping passa a enviar frete, preço e disponibilidade por região a partir das zonas de logística da loja.'
tags:
  - Nova funcionalidade
  - Marketplace
---

A regionalização do Google Shopping está disponível para lojas com a [integração Google Shopping](/pt/docs/tracks/google-shopping-marketplace). Em **Preferências**, a loja escolhe quais zonas da [Logística](/pt/docs/tutorials/politica-de-envio) o Google recebe e pode ativar o envio de frete e de preço e disponibilidade por região.

## O que mudou?

A integração passa a ter a página **Preferências**, com a seção **Regionalização**. As regiões são as zonas já sincronizadas da Logística. A loja ativa ou desativa cada zona e pode testar a disponibilidade de um produto em cada uma delas.

Com as regiões configuradas, duas opções podem ser ligadas, nesta ordem:

- **Google Shipping:** envia ao Google o custo e o prazo da tabela de frete da VTEX, por região, sem cadastro manual no Merchant Center. As ofertas passam a exibir o valor do frete e o prazo para cada CEP de destino.
- **RAAP** (Regional Availability & Pricing): envia preço e disponibilidade por região. Depende do Google Shipping ativo e de a loja ter variação real de preço ou estoque por região.

## O que precisa ser feito?

No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências**. Configure as regiões e ative **Google Shipping** e **RAAP** na ordem indicada na página. Lojas em CMS Portal (Legado) ou headless que ativarem o RAAP precisam adaptar a página de produto. O passo a passo está no artigo [Regionalização do Google Shopping](/pt/docs/tutorials/regionalizacao-do-google-shopping).
