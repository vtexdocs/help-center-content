---
title: 'Configurações de Checkout no B2B'
id: u7wG1SjmeCqXCSF2UsVok
status: PUBLISHED
createdAt: 2024-07-26T14:09:31.973Z
updatedAt: 2024-07-26T19:06:26.485Z
publishedAt: 2024-07-26T19:06:26.485Z
firstPublishedAt: 2024-07-26T18:46:07.935Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: b2b-checkout-settings
legacySlug: configuracoes-de-checkout-no-b2b
locale: pt
subcategoryId: 6sgdAY3pCuZ7qNws6gnzDX
---

O aplicativo Configurações de Checkout no B2B faz parte da solução [B2B Suite](/pt/tutorial/b2b-suite-visao-geral--5eG6UfveWrai7looK0kVG3) da VTEX, uma coleção de aplicativos que permitem às lojas gerenciar organizações, papéis e permissões de storefront, além das configurações de checkout para relações comerciais B2B.

As transações B2B (business-to-business) são mais complexas do que as transações B2C (business-to-consumer). Empresas B2B lidam frequentemente com:

- Pedidos de grande volume.
- Contratos personalizados.
- Condições de pagamento específicos.
- Uma gama diversificada de clientes.

No comércio B2B, é necessário fornecer opções personalizadas durante o checkout, essas personalizações incluem:

- Disponibilizar meios de pagamento para cada organização ou centro de custo.
- Predefinir endereços.
- Adicionar um campo para inserção do número de pedido de compra.
- Oferecer a opção de criar uma cotação de pedido antes de fazer uma compra real.

O aplicativo Configurações de Checkout no B2B funciona em conjunto com outros aplicativos da [B2B Suite](/pt/tutorial/b2b-suite-visao-geral--5eG6UfveWrai7looK0kVG3) para estender a experiência de checkout para usuários que são membros de uma organização.

## Perfis de acesso ao Checkout
Este aplicativo verifica automaticamente os perfis dos usuários que fazem parte da organização e se comunica com o aplicativo [Organizações B2B](/pt/tutorial/b2b-suite-overview--5eG6UfveWrai7looK0kVG3#aplicativo-organizacoes-b2b). Ele também confirma se os usuários possuem as [permissões](/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) necessárias para acessar o checkout ao interagir com o aplicativo [*Storefront Permissions*](/pt/tutorial/gerenciamento-de-permissoes-no-b2b-suite--2PLR7mIFxgbmsGq84paLeA).

Por padrão, qualquer usuário com perfil que permite acesso ao storefront pode acessar o checkout, exceto aqueles com o perfil de Comprador da Organização. Se um usuário tentar prosseguir para o checkout sem a permissão necessária, ele receberá uma notificação com a mensagem: *Você não tem acesso ao checkout*.

## Endereços do centro de custos
O aplicativo Configurações de Checkout no B2B se comunica com o aplicativo [Organizações B2B](/pt/tutorial/b2b-suite-visao-geral--5eG6UfveWrai7looK0kVG3#aplicativo-organizacoes-b2b) e lista automaticamente os endereços do centro de custos associados ao usuário durante a etapa do checkout.

## Campo de número de ordem de compra
Uma ordem de compra (PO) é um acordo comercial entre uma empresa compradora e uma loja B2B autorizando o pagamento por produtos ou serviços a serem entregues no futuro, dentro de um prazo específico.

Ter um número de ordem de compra permite que os clientes B2B paguem por compras autorizadas referenciando esse número. A ordem de compra é autorizada e emitida antecipadamente pela empresa que está fazendo a compra.

Usando as **Configurações de Checkout no B2B**, é possível habilitar um campo opcional de Número de Referência ou ordem de compra para que os clientes insiram essa informação durante a etapa do checkout.

## Configurações de Checkout personalizadas para B2B
As lojas B2B exigem personalizações específicas no processo de checkout. Por isso, as Configurações de Checkout no B2B oferecem uma página de checkout personalizada, ideal para esses cenários. Esse recurso permite que você personalize sua página de checkout conforme as necessidades da sua loja.

Na seção abaixo, veremos como configurar o aplicativo Checkout B2B.

### Configurando o aplicativo Checkout B2B
Siga as instruções abaixo para personalizar o processo de checkout B2B na sua loja:

<ol start="1">
<li>No Admin VTEX, acesse **Configurações da loja > Storefront > Configurações de checkout B2B**, ou digite **Configurações de checkout B2B** na barra de busca no topo da página.</li>
<li>Ao habilitar `Mostrar campo do número da ordem de compra (OC)`, será incluído à página de compra na etapa do checkout, um campo para preenchimento do número da ordem de compra.</li>
<li>Ao habilitar `Mostrar botão Criar uma cotação`, será adicionado o botão `Criar uma cotação` no checkout, que permite criar um orçamento usando o conteúdo atual do carrinho.</li>
</ol>

> ℹ️ Você deve habilitar o botão `Criar uma Cotação` somente se sua loja tiver o aplicativo Cotações B2B instalado. Para mais informações acesse [B2B Quotes & Carts](https://developers.vtex.com/docs/apps/vtex.b2b-quotes).

<ol start="4">
<li>Clique em `Salvar`.</li>
</ol>
