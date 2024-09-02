---
title: 'Configurar fluxo de autenticação 3DS 2'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2023-03-26T21:53:00.302Z
publishedAt: 2023-03-26T21:53:00.302Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-fluxo-de-autenticacao-3ds-2
locale: pt
legacySlug: configurar-fluxo-de-autenticacao-3ds-2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

O 3D Secure 2.0 (3DS 2) é um fluxo de autenticação que aumenta a segurança nos pagamentos realizados com cartões de crédito e débito, por meio da análise interna de uma grande quantidade de dados presentes em cada transação.

<div class="alert alert-warning">
O 3DS 2 é suportado somente para algumas afiliações na VTEX. Verifique junto ao seu provedor de pagamentos e no Admin VTEX se esta funcionalidade está disponível.
</div>

Antes de iniciar a configuração, é necessário abrir um chamado com o time de suporte da VTEX solicitando a habilitação do 3DS 2 na sua loja. Para maiores informações, acesse [como abrir um ticket](https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM).

<div class = "alert alert-warning">
<p>Na VTEX, o 3DS 2 não efetua compras realizadas em dois cartões. Caso um pedido seja realizado nessas condições, o pagamento será cancelado.</p>
</div>

## Configurando o 3DS 2 

Para configurar a autenticação 3DS 2 nas afiliações, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateway__, clique no botão __+__.
3. Selecione o provedor que deseja configurar.
4. Clique no botão para ativar o __modo Live/Produção__.
5. Preencha os demais campos de configuração com os dados fornecidos pelo provedor escolhido.
6. No campo __Suporte 3DS 2.0__, selecione a opção __“Yes”__.
7. Clique em __"Salvar"__. 

<div class="alert alert-warning">
  A descrição do campo do 3DS 2 (<b>"Suporte 3DS 2.0"</b>, informado no Passo 8) pode sofrer variações de acordo com o tipo de provedor de pagamento a ser configurado. Consulte o suporte técnico do provedor de pagamento escolhido para identificar o campo correto a ser selecionado para habilitar a autenticação 3DS 2.
</div>

