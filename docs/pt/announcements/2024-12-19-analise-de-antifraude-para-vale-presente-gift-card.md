---
title: 'Análise de antifraude para vale-presente (gift card)'
id: 1dgEyQ3n4CVTSPIbEQmnUE
status: PUBLISHED
createdAt: 2024-12-19T12:22:16.387Z
updatedAt: 2024-12-19T15:46:11.116Z
publishedAt: 2024-12-19T15:46:11.116Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2024-12-19-anti-fraud-analysis-for-gift-cards
locale: pt
legacySlug: analise-de-antifraude-para-vale-presente-gift-card
announcementImageID: ''
announcementSynopsisPT: 'Habilite a análise de antifraude em transações com vale-presente em sua loja'
---

Visando aprimorar as operações de pagamento realizadas na plataforma, a VTEX implementou a funcionalidade de análise de fraude em compras realizadas por meio de [vale-presente](/pt/tutorial/gift-card--tutorials_995) (gift card).

## O que mudou?

A partir de agora, além de realizar análises em transações de pagamento por cartão de crédito e débito, o [Anti-fraud Provider Protocol](https://developers.vtex.com/docs/guides/how-the-integration-protocol-between-vtex-and-antifraud-companies-works) permite que [provedores de antifraude](/pt/tutorial/como-configurar-antifraude) ofereçam o serviço de análise de fraudes para vales-presente, aumentando o nível de segurança nas transações da sua loja realizadas por este meio de pagamento.

## O que precisa ser feito?

A opção de análise de antifraude para vale-presente já está disponível em todas as contas VTEX. Para habilitá-la em sua loja, é necessário realizar as seguintes ações:

1. Associar o provedor de antifraude ao meio de pagamento vale-presente no Admin VTEX. Saiba mais em [Configurar o antifraude](/pt/tutorial/como-configurar-antifraude--tutorials_446).
2. Entrar em contato com o provedor de antifraude com o qual possui contrato para verificar se este serviço de análise de antifraude já está disponível. Saiba mais sobre as configurações necessárias para o provedor de antifraude em [New feature available for anti-fraud providers: Gift card transaction analysis](https://developers.vtex.com/updates/release-notes/2024-12-19-new-feature-available-for-anti-fraud-providers-gift-card-transaction-analysis).

<div class = "alert alert-info">
  As informações analisadas pelo provedor de antifraude em cada transação podem ser verificadas na página de <a href="https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy">Transações</a> do Admin VTEX.
</div>
