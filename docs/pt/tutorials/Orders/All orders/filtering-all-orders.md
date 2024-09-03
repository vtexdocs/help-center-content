---
title: 'Filtrar pedidos em Todos os pedidos'
id: tutorials_192
status: PUBLISHED
createdAt: 2017-04-27T22:15:05.494Z
updatedAt: 2023-12-21T14:06:54.896Z
publishedAt: 2023-12-21T14:06:54.896Z
firstPublishedAt: 2017-04-27T23:00:47.449Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: filtrar-todos-pedidos
locale: pt
legacySlug: como-filtrar-pedidos
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

>ℹ️ É possível acessar informações somente de pedidos criados nos últimos dois anos, sendo o mesmo período válido para clientes acessarem pedidos pelo [Minha Conta](https://help.vtex.com/pt/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).

No módulo **Pedidos**, a página **Todos os pedidos** permite a você acessar os pedidos da sua loja e pesquisar usando a barra de busca e filtros, como na imagem abaixo:

![search_bar_PT](https://images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/ebb51c0719e6c1db7e9af1ec1b53ab2d/search_bar_PT.png)

Este artigo explica como utilizar estes recursos e se divide em:

- [Barra de busca](#barra-de-busca)
- [Filtros](#filtros)
- [Filtrar por status](#filtrar-por-status)
- [Criado](#criado)

Além de pesquisar pedidos em **Pedidos > Todos os pedidos**, você pode buscar pedidos a partir de qualquer página no Admin VTEX usando a barra de busca global no topo da página. Por padrão, a busca está configurada para `Páginas`. Para buscar um pedido, clique sobre a barra, selecione a opção `Pedidos` e utilize algum dos seguintes critérios:

- ID do pedido
- Nome do cliente
- Email do cliente
- Documento do cliente 

## Barra de busca

Para realizar a pesquisa na barra de busca, digite o termo desejado e aperte a tecla `enter`. Você pode buscar utilizando os seguintes critérios:

- Nome do cliente
- Documento do cliente
- Email do cliente
- ID do pedido
- Sequence

O [sequence](https://help.vtex.com/pt/tutorial/cuidados-ao-definir-a-numeracao-de-pedido--VAKKptfcaOxFxM8gfPobu) é uma sequência de seis dígitos que aparece no seu Admin VTEX logo após o ID do pedido. Por exemplo, no pedido `1268540501456-01 (501456)`, o ID do pedido é `1268540501456`, o `-01` indica que o fulfillment será realizado por um seller e o sequence é `501456`.

>ℹ️ Além dos critérios listados acima, é possível ativar outros critérios de busca, como será visto na seção [Outros](https://help.vtex.com/pt/tutorial/filtrar-todos-pedidos--tutorials_192#filtros-outros).

Por padrão, a página **Todos os pedidos** vem com o filtro de pedidos criados **Hoje** ativado. Para buscar em outras datas, use os filtros descritos em [Filtros: Datas](#filtros-datas) e em [Criado](#criado).

É possível [buscar em todos os pedidos](#buscar-em-todos-os-pedidos) ou [buscar associando filtros](#buscar-associando-filtros).

### Buscar em todos os pedidos

Buscar em todos os pedidos retorna a totalidade de pedidos relacionados ao critério utilizado, independente da data de criação do pedido. É possível, por exemplo, acessar o histórico completo de compras de um cliente, utilizando o nome, email ou documento do cliente.

Para buscar em todos os pedidos, digite o termo desejado na caixa de busca. Isso fará com que a opção <i class="fas fa-toggle-on"></i> `Remover limite de datas` se torne visível. Depois basta ativá-la e isso dará início à busca.

![search_bar_without_time_limit_PT](https://images.ctfassets.net/alneenqid6w5/2ii9VFh5uRpG4Ad0nwIIN0/c87949487d1e9ad947ea437c3f368431/search_bar_without_time_limit_PT.png)

>❗ A busca em todos os pedidos não pode ser associada a outros filtros. Ou seja, ao remover o limite de datas da busca, qualquer filtro ativo se torna inativo. Se o termo da busca é removido ou o switch <i class="fas fa-toggle-off"></i> de busca em todos os pedidos é desativado, os filtros anteriormente configurados se tornam ativos novamente.

### Buscar associando filtros

Realizar uma busca associada a filtros permite que você combine diferentes filtros e eles estão descritos em:

- [Filtros](#filtros)
- [Filtrar por status](#filtrar-por-status)
- [Criado](#criado)

## Filtros

Na página **Pedidos > Todos os pedidos**, existe a opção `Filtros`, conforme a imagem abaixo:

![search_bar_PT](https://images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/ebb51c0719e6c1db7e9af1ec1b53ab2d/search_bar_PT.png)

Ao clicar em `Filtros`, um modal é aberto e apresenta as seguintes opções:

- [Datas](#filtros-datas)
- [Canais](#filtros-canais)
- [Status](#filtros-status)
- [Outros](#filtros-outros)

Para que um filtro seja aplicado à busca, selecione a opção desejadas e clique em **Aplicar**. Para remover filtros aplicados, clique em **Limpar filtros > Aplicar**.

>ℹ️ Por padrão, a opção <i class="fas fa-toggle-on"></i> **Usar meu fuso horário: GMT-3** aparece ativada para todos os filtros. Ao ser desativada, a referência de fuso horário muda para GMT-0 e, se reativada, passa a ser o fuso horário adotado no navegador do usuário.

Caso não exista uma correspondência para a combinação de filtros utilizada na busca, a pesquisa retorna sem pedidos na tela.

A seguir, veja a descrição dos filtros existentes em `Filtros`.

### Filtros: Datas

Os filtros em **Datas** tratam de critérios de datas e períodos, como quando um pedido será entregue ou autorizado. Ao clicar em `Filtros`, por padrão, **Datas** já é a opção disponível. 

Você pode encontrar a opção desejada usando a barra de busca ou clicando no dropdown <i class="fas fa-angle-down"></i> ao lado das opções abaixo:

- **Data de entrega:** período previsto para entrega do pedido:
    - Próximos 7 dias
    - Amanhã
    - Hoje
    - Em atraso
- **Data de faturamento:** data em que o pedido foi faturado:
    - Hoje
    - Ontem
    - Últimos 7 dias
    - Mês atual
    - Últimos 30 dias
    - Personalizada
- **Data do pedido:** data que o pedido foi realizado:
    - Hoje
    - Ontem
    - Últimos 7 dias
    - Mês atual
    - Últimos 30 dias
    - Personalizada
- **Data de autorização:** data em que o pedido foi autorizado pela operadora/gateway de pagamento:
    - Hoje
    - Ontem
    - Últimos 7 dias
    - Mês atual
    - Últimos 30 dias
    - Personalizada

Após selecionar os filtros desejados, clique em `Aplicar`.

### Filtros: Canais

Os filtros em **Canais** selecionam por canais de venda e outros aspectos do pedido. Para utilizá-los, clique em `Filtros` e selecione **Canais**. Algumas das opções listadas podem não aparecer no seu Admin VTEX, a depender das configurações da sua loja.

Você pode encontrar a opção de filtro desejada usando a barra de busca ou clicando no dropdown &lt;icone_seta_baixo> ao lado das seguintes opções:

- **Seller:** apresenta o [ID dos sellers](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392) da sua loja e filtra pelo seller encarregado do fulfillment do pedido.
- **Política comercial:** mostra as [políticas comerciais](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) da sua loja e filtra pela política comercial utilizada no pedido.
- **Campanha:** apresenta as [audiências de campanha](https://help.vtex.com/pt/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m) da sua loja e filtra pelo público-alvo de uma promoção.
- **Operador televendas: **exibe operadores de [televendas](https://help.vtex.com/pt/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS) da sua loja.
- **UTM source:** apresenta opções de [UTM source](https://help.vtex.com/pt/tutorial/o-que-sao-utm-source-utm-campaign-e-utm-medium--2wTz7QJ8KUG6skGAoAQuii) configuradas na sua loja. UTM (_Urchin Tracking Modules_) são parâmetros de URL normalmente usados em contextos de marketing e promoções para rastrear o tráfego de acessos a um site.

Após selecionar os filtros desejados, clique em `Aplicar`.

### Filtros: Status

Os filtros em **Status** tratam da situação do pedido no momento da busca com relação ao [fluxo do pedido](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196) ou erros. Para utilizá-los, clique em `Filtros` e selecione **Status**. Você pode encontrar a opção desejada usando a barra de busca ou clicando no dropdown <i class="fas fa-angle-down"></i> ao lado das opções abaixo:

- **Status do pedido:** etapa do pedido no [fluxo do pedido](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196). As opções que aparecem correspondem ao status de pedidos que existem na sua loja. Por exemplo, se entre os seus pedidos não houver pedidos cancelados, esta opção não estará visível. Alguns exemplos de filtros de status de pedido são:
    - Pagamento aprovado
    - Pagamento pendente
    - Preparando entrega
    - Pronto para manuseio
    - Aguardando para alterar seller
- **Status de conclusão:** se um pedido tem informações completas para ser finalizado na plataforma ou se é um [pedido incompleto](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294):
    - Incompleto
- **Status de erro:** apresenta tipos de erro:
    - Erro permanente
    - Erro temporário
    - Qualquer erro

Após selecionar os filtros desejados, clique em `Aplicar`.

### Filtros: Outros

Os filtros em **Outros **são de assuntos diversos, alguns dos quais variam em função das configurações de cada loja. Portanto, algumas das opções listadas abaixo podem não estar disponíveis no seu Admin VTEX. 

Para utilizar esses filtros, clique em `Filtros` e selecione **Outros**. Você pode encontrar a opção desejada usando a barra de busca ou clicando no dropdown <i class="fas fa-angle-down"></i> ao lado das opções a seguir:

- **Campo buscado:** campos que podem ser utilizados para filtrar resultados. Após selecionar o campo, é necessário digitar o valor na barra de busca <i class="fas fa-search"></i> `Buscar em Outros`.
    - ID do pedido
    - ID do SKU
    - ID da lista de presentes
    - ID da transação (TID)
    - ID da transação (TID) no conector PCI
    - ID do pagamento (PID)
    - NSU do Conector
- **Meios de pagamento:** apresenta os [meios de pagamento](https://help.vtex.com/pt/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) configurados na sua loja.
- **Promoções:** apresenta as promoções cadastradas na sua loja.
- **Moeda:** exibe as moedas cadastradas na [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) e que foram utilizadas em pedidos.
- **Nome do host:** exibe o seu [account name](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) (nome da conta), que é a identificação da sua empresa no sistema da VTEX.
- **B2B:** selecione `true` para filtrar por pedidos feitos em lojas [B2B](https://help.vtex.com/pt/tutorial/b2b-visao-geral--5vb9SNXhX2bZnkpAh7ADdC) ou `false` para pedidos feitos em outro modelo de negócio.
- **inStore:** selecione `true` para filtrar por pedidos feitos utilizando [inStore](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) ou `false` para pedidos que não utilizaram inStore.
- **Canal de entrega:** exibe qual o tipo de envio do pedido, se é uma entrega (delivery) ou uma retirada em [ponto de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) (pick-up-point). A opção de retirada aparece somente para lojas que configuraram esta funcionalidade.
- **País:** exibe o país no qual o pedido foi realizado.
- **Tem nota de devolução:** identifica se os pedidos apresentam nota de devolução - `true` - ou não - `false`.
- **Tem fatura:** identifica se os pedidos apresentam fatura - `true` - ou não - `false`.

## Filtrar por status

Na página **Pedidos > Todos os pedidos**, existe a opção `Filtrar por status` <i class="fas fa-angle-down"></i>, conforme imagem abaixo:

![search_bar_PT](https://images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/ebb51c0719e6c1db7e9af1ec1b53ab2d/search_bar_PT.png)

Ao clicar em `Filtrar por status` <i class="fas fa-angle-down"></i>, aparecem as opções de [status de pedidos](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196) da sua loja. Por exemplo, se entre todos os seus pedidos não houver pedidos cancelados, esta opção não estará visível.

>ℹ️ Para mais opções de filtros de status, veja a seção [Filtros: Status](https://help.vtex.com/pt/tutorial/filtrar-todos-pedidos--tutorials_192#filtros-status). Se você quiser conferir todos os status de pedidos existentes, veja o artigo [Fluxo e status de pedidos](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196).

## Criado

Na página **Pedidos > Todos os pedidos**, existe a opção `Criado: Hoje` <i class="fas fa-angle-down"></i>, conforme imagem abaixo:

![search_bar_PT](https://images.ctfassets.net/alneenqid6w5/1aPXtEWSmO3isVQ5k1GF3z/ebb51c0719e6c1db7e9af1ec1b53ab2d/search_bar_PT.png)

Este filtro tem a data **Hoje** ativada de forma padrão, mas ao clicar nele aparecem as seguintes opções:

- Hoje
- Ontem
- Últimos 7 dias
- Mês atual
- Últimos 30 dias

>ℹ️ Por padrão, a opção <i class="fas fa-toggle-on"></i> **Usar meu fuso horário: GMT-3** aparece ativada. Ao ser desativada, a referência de fuso horário muda para GMT-0 e, se reativada, passa a ser o fuso horário usado no navegador do usuário.

Para mais opções de filtros de datas e períodos, veja a seção [Filtros: Datas](#filtros-datas).
