---
title: 'Configurar fluxo de autenticação 3DS 2'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2026-09-29T12:58:00.000Z
publishedAt: 2025-06-02T17:06:50.600Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: setting-up-3ds-2-authentication-flow
legacySlug: configurar-fluxo-de-autenticacao-3ds-2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O 3DS 2 (EMV 3-D Secure) é um protocolo em que o banco emissor autentica o comprador em pagamentos com cartões de crédito e débito. Neste tutorial, você vai ativar o 3DS 2 no provedor de pagamento e validar o fluxo de autenticação no checkout. Para entender como o protocolo funciona e quais versões estão em uso, consulte [3D Secure](/pt/docs/tutorials/o-que-e-3d-secure).

## Antes de começar

Na VTEX, o 3DS 2 é suportado somente por alguns provedores e só pode ser implementado via [Payment App](https://developers.vtex.com/docs/guides/payments-integration-payment-app#scenario-2-payment-app-and-3d-secure-2), que o próprio provedor desenvolve para exibir o desafio de autenticação no checkout. Antes de seguir os próximos passos, confirme estes pontos com o seu provedor de pagamento:

- **Suporte ao 3DS 2:** o provedor suporta 3DS 2 na VTEX e disponibiliza o Payment App.
- **Tipo de autenticação:** quais tipos de autenticação 3DS estão disponíveis no seu contrato.
- **Credenciais:** quais dados de acesso o provedor exige para autenticar as transações.

Você também precisa ter o provedor configurado em **Configurações da loja** > **Pagamentos** > **Provedores**.

## Ativar o 3DS 2 no provedor de pagamento

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Clique no provedor de pagamento.
3. Preencha os campos de autenticação conforme a documentação do provedor, já que os nomes dos campos variam. Por exemplo:
   - **Adyen V3:** no campo **3DS Authentication Type**, escolha o tipo de autenticação. A autenticação completa inclui a interação do comprador e transfere a responsabilidade por fraude para o banco emissor. Já a Data Only envia apenas dados de risco, sem interação do comprador, e por isso a responsabilidade por fraude pode continuar com o lojista. Esse tipo só é permitido para cartão de crédito em reais (BRL). Para mais detalhes, consulte [Adyen Connector V3](https://developers.vtex.com/docs/apps/adyen.payment-provider-v3#3ds-authentication-type-required).
   - **CieloEcommerce:** no campo **UseMpi**, selecione **True** e preencha os campos de credenciais Mpi. Consulte [Configurar pagamento com CieloEcommerce](/pt/docs/tutorials/configurar-pagamento-com-cieloecommerce).
4. Clique em `Salvar`.

## Validar o fluxo no checkout

> ℹ️ Se o provedor tiver modo de teste, como a opção **Ativar modo de teste** em **Controle de pagamento**, valide o fluxo nesse modo antes de processar transações reais.

1. Na loja, adicione um produto ao carrinho e siga para o checkout.
2. Selecione a condição de pagamento com cartão associada ao provedor configurado na etapa anterior.
3. Pague com um único cartão e conclua a compra.
4. Se o banco emissor solicitar a autenticação, confirme a identidade na janela exibida no checkout.
5. No Admin VTEX, acesse **Pedidos** > **Transações**, ou digite **Transações** na barra de busca no topo da página.
6. Clique na transação da compra de teste e confira no log de interações a resposta do provedor. Para saber mais sobre o log, consulte [Visualizar detalhes da transação em Pedidos](/pt/docs/tutorials/como-visualizar-detalhes-do-pedido).

Depois da autenticação, o resultado depende do status do pagamento:

- Se o pagamento for autorizado ou ainda estiver em processamento, o checkout exibe a confirmação do pedido.
- Se o pagamento for negado ou cancelado, o checkout exibe um aviso e volta para a seleção da forma de pagamento.

> ℹ️ Em transações de baixo risco, o banco emissor conclui a autenticação sem exibir o desafio, então a ausência da janela de autenticação em uma compra de teste não significa necessariamente que o 3DS 2 está inativo.

## Limitações

### Compras com dois cartões

Na VTEX, o 3DS 2 não permite compras com dois cartões: se um pedido for feito dessa forma, o pagamento será cancelado.
