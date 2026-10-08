---
title: 'Regionalização do Google Shopping'
createdAt: 2026-10-02T12:00:00.000Z
updatedAt: 2026-10-02T12:00:00.000Z
contentType: tutorial
productTeam: Channels
slugEN: google-shopping-regionalization
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
hidden: false
---

A regionalização do Google Shopping define em quais regiões do país a integração envia dados ao Google. As zonas, inclusive as **Zonas comuns**, são fixas, elas recortam o país para o Google e já vêm sincronizadas da Logística. Sem regionalização, o envio da integração é nacional, cada SKU tem um preço e uma disponibilidade para todo o país. Com as regiões ativas, é possível usar duas funcionalidades:

- **Google Shipping:** acrescenta frete e SLA por região, dados que o envio básico não inclui. O preço e a disponibilidade continuam nacionais.
- **RAAP** (Regional Availability & Pricing): regionaliza o preço e a disponibilidade que a integração já envia. 

Com o Google Shipping e o RAAP ativos, cada região pode ter preço, disponibilidade, frete e SLA próprios, ou ficar sem esses dados. Esses valores são obtidos de uma simulação, por isso promoções de preço e de frete também alteram o que é enviado ao Google.

Para usar as funcionalidades de regionalização é necessário configurar a [integração com o Google Shopping](/pt/docs/tracks/google-shopping-marketplace) e ter [políticas de envio](/pt/docs/tutorials/politica-de-envio) com [tabela de frete](/pt/docs/tutorials/planilha-de-frete) configurada e ativa para a [política comercial](/pt/docs/tracks/definicao-da-politica-comercial-google-shopping) da integração. 

Para enviar preço, disponibilidade, frete e SLA regionalizados, configure as funcionalidades na página **Preferências** nesta ordem:

1. Confirme que a política comercial da integração tem políticas de envio ativas, com tabela de frete configurada.
2. [Ativar regiões na integração do Google Shopping](#ativar-regioes)
3. [Ativar Google Shipping](#ativar-o-google-shipping)
4. [Ativar RAAP](#ativar-o-raap)

![Preferências do Google Shopping](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/regionalizacao-do-google-shopping_1.png)

## Regionalização

A página **Configurar regiões** lista as zonas fixas já sincronizadas da Logística. O aviso no topo informa quantas zonas foram sincronizadas e que o Google recebe frete, preço, disponibilidade e SLA conforme essas regiões. Nesta página, a loja só liga ou desliga cada zona. Também é possível [buscar um produto e conferir se ele está disponível](#testar-disponibilidade-de-produto) em cada zona.

Os dados da página são apresentados em uma tabela com as seguintes colunas:

- **Zonas comum:** nome da zona. Algumas linhas agrupam outras zonas e podem ser expandidas <i class="fas fa-angle-right" aria-hidden="true"></i>.
- **Cobertura:** intervalo de CEP da zona.
- **Status:** indica quando a zona está `ativa` e enviando informações ao Google.
- **Disponibilidade:** indica quando um produto está ou não disponível nas regiões da tabela.

Cada linha da tabela tem uma checkbox <a class="far fa-check-square" aria-hidden="true"></a> para ativar ou desativar a zona.

As zonas ativas definem o recorte regional em que o **Google Shipping** e o **RAAP** enviam dados ao Google. Preço, disponibilidade, frete e SLA de cada SKU vêm das políticas de envio ativas ligadas à política comercial da integração. As zonas inativas ficam de fora das ofertas regionalizadas.

> ⚠️ Lojas em CMS Portal (Legado) ou headless precisam adaptar a página de produto para ler o parâmetro `region_id` que o Google acrescenta na URL. Sem essa leitura, o RAAP não se reflete no storefront. Siga o guia [Adapting headless storefronts to Google RAAP](https://developers.vtex.com/docs/guides/adapting-headless-storefronts-to-google-raap).

### Ativar regiões

Para ativar as regiões, siga os passos abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências > Configurar regiões**.
2. Marque as zonas que devem ser enviadas ao Google.
3. Clique em `Ativar regiões`. O número no botão indica quantas zonas estão selecionadas.

Após ativar as regiões, a seção **Configurar regiões** apresentará o status `Configurado`.

### Testar disponibilidade de produto

Na página **Configurar regiões**, é possível testar a disponibilidade de um produto de acordo com as regiões ativas. Para realizar o teste, siga as seguintes instruções:

1. No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências > Configurar regiões**.
2. Na barra de busca acima da tabela de dados, busque e selecione um produto do catálogo da sua loja.
3. Aguarde a coluna **Disponibilidade** ser recarregada.

Na coluna **Disponibilidade** será mostrado o status de Disponível <i class="far fa-check-circle" aria-hidden="true"></i> ou Indisponível <i class="far fa-minus-circle" aria-hidden="true"></i> em cada região ativa. Para ver o resultado de uma zona específica, use o filtro País e a busca por nome ou CEP.

![Configurar regiões com Ativar regiões](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/regionalizacao-do-google-shopping_3.png)

## Ativar o Google Shipping

O [**Google Shipping**](https://support.google.com/merchants/answer/6324484?hl=pt-BR) envia ao Google o custo e o SLA de entrega já calculados pela tabela de frete da VTEX, por região. Com isso, os anúncios e as listagens podem exibir o valor do frete e o SLA estimado, inclusive frete grátis ou entrega rápida. A integração usa as [zonas ativas](#ativar-regioes) como recorte regional e as regras das políticas de envio já existentes na VTEX.

Para ativar o Google Shipping, siga os passos abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências**.
2. Na seção **Google Shipping**, clique no botão <i class="fas fa-toggle-on" aria-hidden="true"></i>.
3. No modal **Ativar Shipping?**, clique no botão `Ver regiões configuradas` para ver quais regiões estão ativas ou clique no botão `Continuar` para confirmar a ativação.

> ⚠️ A ativação do Google Shipping é obrigatória para a utilização do RAAP.

## Ativar o RAAP

O [**RAAP (Regional Availability & Pricing)**](https://support.google.com/merchants/answer/16782229?hl=pt-BR) regionaliza o preço e a disponibilidade que a integração já envia ao Google. Com isso, os anúncios e as listagens podem mostrar o valor e o estoque válidos para a região do comprador. A integração usa as [zonas ativas](#ativar-regioes) como recorte regional e a variação de preço e estoque já existente na VTEX.

> ⚠️ Ativar o RAAP sem variação real de preço ou estoque por região pode causar inconsistências no catálogo enviado ao Google.

Para ativar o RAAP, siga os passos abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências**.
2. Na seção **RAAP**, clique no botão <i class="fas fa-toggle-on" aria-hidden="true"></i>.
3. No modal **Ativar RAAP?**, clique no botão `Ver regiões configuradas` para ver quais regiões estão ativas ou clique no botão `Continuar` para confirmar a ativação.

## Desativar o Google Shipping ou o RAAP

Ao desativar o **Google Shipping**, o Google deixa de receber frete e SLA por região. O RAAP também para de funcionar, porque depende do Google Shipping.

Ao desativar o **RAAP**, preço e disponibilidade continuam sendo enviados, de novo em escopo nacional, que é o comportamento básico da integração. Se o Google Shipping permanecer ativo, frete e SLA por região continuam sendo enviados.

> ⚠️ Caso o Google Shipping seja desativado, a funcionalidade do RAAP para de funcionar.

Para desativar o Google Shipping ou o RAAP, siga os passos abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências**.
2. Na seção **Google Shipping** ou **RAAP**, clique no botão <i class="fas fa-toggle-off" aria-hidden="true"></i>.
3. Clique em `Desativar`.
