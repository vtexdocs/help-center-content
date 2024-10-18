---
title: 'Configurar fluxo de autenticação 3DS 2'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2024-10-11T18:26:03.785Z
publishedAt: 2024-10-11T18:26:03.785Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: setting-up-3ds-2-authentication-flow
locale: pt
legacySlug: configurar-fluxo-de-autenticacao-3ds-2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O 3D Secure 2.0 (3DS 2) é um fluxo de autenticação que aumenta a segurança nos pagamentos realizados com cartões de crédito e débito, por meio da análise interna de uma grande quantidade de dados presentes em cada transação.

>⚠️ O 3DS 2 é suportado somente para algumas afiliações na VTEX. Verifique junto ao seu provedor de pagamentos e no Admin VTEX se esta funcionalidade está disponível.

Antes de iniciar a configuração, entre em contato com o provedor de pagamento com o qual possui contrato para verificar se o serviço de 3DS 2 já está disponível e habilitado na VTEX.

>⚠️ Na VTEX, o 3DS 2 não efetua compras realizadas em dois cartões. Caso um pedido seja realizado nessas condições, o pagamento será cancelado.

## Configurando o 3DS 2 

Para configurar a autenticação 3DS 2 nos provedores, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome o provedor que deseja configurar.
4. No campo __Suporte 3DS 2.0__, selecione a opção __"Yes"__.
5. Preencha os demais campos de configuração com os dados fornecidos pelo provedor escolhido.
6. Clique em `Salvar`. 

>⚠️ A descrição do campo do 3DS 2 (**"Suporte 3DS 2.0"**, informado no Passo 4) pode sofrer variações de acordo com o tipo de provedor de pagamento a ser configurado. Consulte o suporte técnico do provedor de pagamento escolhido para identificar o campo correto a ser selecionado para habilitar a autenticação 3DS 2.

