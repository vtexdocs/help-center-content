---
title: 'Informações compartilhadas entre marketplace e seller na VTEX'
id: 3o7WGiBtfnKKZ3Ddug26k3
status: PUBLISHED
createdAt: 2022-04-07T13:32:06.199Z
updatedAt: 2023-04-17T21:51:10.740Z
publishedAt: 2023-04-17T21:51:10.740Z
firstPublishedAt: 2022-04-07T14:23:25.578Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex
legacySlug: informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex
subcategory: 5tlIjp0ZkAU4EIk4OgyEmm
---

A venda em marketplaces é um modelo de comércio colaborativo que oferece vantagens mútuas a sellers e marketplaces. A arquitetura das lojas VTEX permite que elas atuem tanto como seller, quanto como marketplace. Saiba mais em [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402).

Um marketplace hospedado na plataforma VTEX e um seller, seja um seller VTEX ou externo, precisam compartilhar informações entre si para colaborarem. Este artigo apresenta quais são os principais dados compartilhados e está dividido em:

- [Conectar marketplace e seller](#conectar-marketplace-e-seller)
- [Marketplace e seller conectados](#marketplace-e-seller-conectados)
- [Compartilhamento de emails de clientes](#compartilhamento-de-emails-de-clientes)

<div class = "alert alert-info">
Se quiser começar a vender seus produtos em outros marketplaces, utilize o <a href="https://help.vtex.com/pt/tutorial/encontre-marketplaces-e-sellers-no-ecossistema-vtex--2bzC7tXlVgLEEjxo4ixcAM">Marketplaces e integrações</a>. Essa funcionalidade facilita a identificação e o contato entre marketplaces e sellers que operam no ecossistema VTEX.
</div>

## Conectar marketplace e seller

Para um marketplace VTEX se conectar a um seller, seja um seller VTEX ou externo, as seguintes informações precisam ser acordadas entre as duas partes:

- **Trocas e Devoluções:** qual será a política de trocas e devoluções a ser adotada na venda dos produtos do seller no marketplace.
- **Política de Entrega:** qual será a política de entrega da venda dos produtos do seller no marketplace.
- **Política de Privacidade de Segurança:** qual será a política de segurança aplicável na venda dos produtos do seller no marketplace.
- **Comissionamentos:** quais serão os valores percentuais das vendas no marketplace que o seller deverá repassar ao marketplace. Existem duas comissões diferentes, a _Comissão sobre os Produtos_ e a _Comissão sobre o Frete_.

Além disso, para [adicionar o seller](https://help.vtex.com/pt/tutorial/configurando-seller) às suas operações, o marketplace precisa de outras informações, que vão depender do tipo de seller com o qual ele vai se conectar:

- [Conectar marketplace VTEX a seller VTEX](#conectar-marketplace-vtex-a-seller-vtex)
- [Conectar marketplace VTEX a seller externo](#conectar-marketplace-vtex-a-seller-externo)

É possível integrar o marketplace VTEX a seller VTEX, ou seller externo, tanto pelo Admin VTEX quanto por API. Nos dois casos, os dados compartilhados entre marketplace e seller serão os mesmos.

<div class = "alert alert-info">
Para mais informações sobre como conectar marketplace VTEX a seller VTEX, ou seller externo, pelo Admin VTEX, veja o artigo <a href="https://help.vtex.com/pt/tutorial/configurando-seller">Adicionar seller</a>. Para integração por API, utilize a chamada <a href="https://developers.vtex.com/vtex-rest-api/reference/upsertsellerrequest">Configure Seller Account</a>. Em caso de seller externo, confira o <a href="https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-guide">guia de integração com seller externo</a>.
</div>

### Conectar marketplace VTEX a seller VTEX

Para que o marketplace VTEX possa se conectar ao seller VTEX, é necessário acesso às seguinte informações:

- **ID do Seller (Account Name):** [account name](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) é o código de identificação do seller na VTEX.
- **Email do administrador:** endereço eletrônico do administrador responsável pelo seller.
- **Meu ID de afiliado no seller:** código com três consoantes que identifica o [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0), criado pelo seller no seu próprio Admin VTEX.
- **Descrição:** texto em tom comercial que caracteriza o seller. O texto pode aparecer na vitrine do marketplace ao [customizar o CMS](https://help.vtex.com/pt/tutorial/list-of-controls-for-templates--tutorials_563).
- **Política comercial:** código identificador da [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que o seller deseja utilizar na venda no marketplace.
- **Fulfillment SellerId:** código identificador do seller responsável pelo fulfillment do pedido. Este é um dado opcional, necessário quando o seller vende SKUs de outro seller, e não deve ser preenchido quando o seller vende seus próprios SKUs.
- **Catalog EndPoint:** URL do endpoint do catálogo do seller.
- **TaxCode:** número do Cadastro Nacional da Pessoa Jurídica (CNPJ) do seller ou o código correspondente em outros países.

### Conectar marketplace VTEX a seller externo

Quando o seller é do tipo externo, não hospedado no ambiente VTEX, ele precisa informar ao marketplace VTEX:

- **Descrição:** texto em tom comercial que caracteriza o seller. O texto pode aparecer na vitrine do marketplace ao [customizar o CMS](https://help.vtex.com/pt/tutorial/list-of-controls-for-templates--tutorials_563).
- **Email do administrador:** endereço eletrônico do administrador responsável pela operação do seller.
- **Fulfillment EndPoint:** URL do endpoint para fulfillment de pedidos do seller, por meio do qual o marketplace vai se comunicar com o seller.
- **TaxCode:** número do Cadastro Nacional da Pessoa Jurídica (CNPJ) ou o código correspondente em outros países.
- **User:** username de quando se utiliza um hub para integrar com o seller externo.
- **Password:** senha de quando se utiliza um hub para integrar com o seller externo.

## Marketplace e seller conectados

Uma vez que o marketplace VTEX e o seller VTEX, ou externo, estejam conectados, o marketplace pode acessar essas informações sobre o seller pelo Admin VTEX, em **MARKETPLACE > Gerenciamento**.

Também é possível consultar as informações fornecidas pelo seller por API, tanto para seller VTEX quanto externo, pela chamada [Get Seller data by ID](https://developers.vtex.com/vtex-rest-api/reference/getretrieveseller).

## Compartilhamento de emails de clientes

O marketplace pode conceder ao seller acesso parcial aos emails da sua base de clientes, de forma que esses emails sejam utilizados nas requisições de consulta às condições comerciais de itens e na criação de pedidos. Esta não é uma configuração padrão e o gerenciamento dessas informações é feito por API, por meio do campo `TrustPolicy`, utilizando as seguintes chamadas:

- [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/upsertsellerrequest): permite configurar a conta do seller, seja ele seller VTEX ou externo.
- [Update Seller by Seller ID](https://developers.vtex.com/vtex-rest-api/reference/updateseller): permite atualizar os dados do seller, seja ele seller VTEX ou externo.

<div class = "alert alert-info">
Em pedidos realizados no marketplace, o email do cliente não é exibido para o seller. A relação do cliente é estabelecida com o marketplace e seria necessário o consentimento do cliente para o compartilhamento de seus dados.
</div>

### Saiba mais

- [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
- [Ações para a operação de marketplaces VTEX](https://help.vtex.com/pt/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev)
- [Adicionar seller](https://help.vtex.com/pt/tutorial/configurando-seller)
