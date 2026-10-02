---
title: '3D Secure'
id: 1eWPdop8mECuaEomQgkAIa
status: PUBLISHED
createdAt: 2018-03-02T13:13:14.436Z
updatedAt: 2026-09-29T13:20:00.000Z
publishedAt: 2021-03-30T14:56:15.059Z
firstPublishedAt: 2018-03-02T14:22:05.892Z
contentType: tutorial
productTeam: Identity
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-3d-secure
legacySlug: o-que-e-3d-secure
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

O __3D Secure__ (3DS) é um protocolo de segurança que adiciona uma camada de proteção às transações com cartões de crédito e débito feitas na internet. A geração atual, o EMV 3-D Secure (EMV 3DS), também é chamada de 3DS 2.

No 3DS 2, o [banco emissor](/pt/docs/tutorials/o-que-e-banco-emissor) analisa os dados da transação e decide como autenticar o comprador:

- **Autenticação sem fricção:** o banco considera a transação de baixo risco e conclui a autenticação sem pedir nenhuma ação ao comprador.
- **Desafio:** o banco pede que o comprador confirme a identidade, por exemplo com senha, biometria ou código enviado por SMS ou e-mail.

O protocolo exige a autenticação, mas não define o método: cada banco usa o próprio sistema de verificação.

Chargeback é o cancelamento de uma compra online feita com cartão de crédito ou débito. Quando a autenticação é concluída, a responsabilidade pelos chargebacks por fraude passa do lojista para o banco emissor, conforme critérios das bandeiras e dos bancos emissores. Em modos que só enviam dados de risco ao banco emissor, sem autenticar o comprador, como o Data Only da Adyen, a responsabilidade por fraude pode continuar com o lojista. A transferência também não vale para chargebacks por outros motivos.

## Versões do 3D Secure

O 3DS 2 é mantido pela [EMVCo](https://www.emvco.com/) e tem mais de uma versão de especificação:

- **2.1.0:** as bandeiras deixaram de processar transações autenticadas nessa versão em setembro de 2024.
- **2.2.0 e 2.3.1:** versões em uso.

A versão usada em cada transação depende do provedor de pagamento e do banco emissor.

A primeira geração, o 3D Secure 1.0, era baseada em XML e redirecionava o comprador para o ambiente do banco depois que ele informava os dados do cartão. As bandeiras descontinuaram essa versão a partir de outubro de 2022.

## 3D Secure na VTEX

Na VTEX, o provedor de pagamento implementa o 3DS 2 via [Payment App](https://developers.vtex.com/docs/guides/payments-integration-payment-app#scenario-2-payment-app-and-3d-secure-2). Assim, o comprador permanece no checkout e se autentica em uma janela modal, sem ser redirecionado para o site do banco. Para ativar o 3DS 2 e conhecer as limitações, consulte [Configurar fluxo de autenticação 3DS 2](/pt/docs/tutorials/configurar-fluxo-de-autenticacao-3ds-2).

O 3D Secure e o [antifraude](/pt/docs/tutorials/o-que-e-antifraude) têm funções diferentes: o 3DS confirma a identidade do comprador junto ao banco emissor, e o antifraude avalia o risco do pedido. Para configurar o antifraude, consulte [Configurar o antifraude](/pt/docs/tutorials/como-configurar-antifraude). Para entender o fluxo de autorização com cartão de crédito, consulte [Cartão de crédito - Fluxo básico de um pagamento](/pt/docs/tutorials/cartao-de-credito-fluxo-basico-de-um-pagamento).

### Artigos relacionados

- [Configurar fluxo de autenticação 3DS 2](/pt/docs/tutorials/configurar-fluxo-de-autenticacao-3ds-2)
- [Cartão de crédito - Fluxo básico de um pagamento](/pt/docs/tutorials/cartao-de-credito-fluxo-basico-de-um-pagamento)
- [O que é antifraude?](/pt/docs/tutorials/o-que-e-antifraude)
- [Configurar o antifraude](/pt/docs/tutorials/como-configurar-antifraude)
