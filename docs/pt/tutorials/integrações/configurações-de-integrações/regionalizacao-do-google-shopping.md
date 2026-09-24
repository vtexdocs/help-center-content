---
title: 'Regionalização do Google Shopping'
createdAt: 2026-09-23T12:00:00.000Z
updatedAt: 2026-09-23T12:00:00.000Z
contentType: tutorial
productTeam: Channels
slugEN: google-shopping-regionalization
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
hidden: false
---

A regionalização do Google Shopping define quais regiões da logística da loja a integração envia ao Google. Com essas regiões, é possível utilizar duas funcionalidades para disponibilizar preço, disponibilidade, frete e SLA por região. As funcionalidades de regionalização são **Google Shipping**, que informa frete e SLA por região, e **RAAP** (Regional Availability & Pricing), que informa preço e disponibilidade também por região. 
Para usar a regionalização, a [integração com o Google Shopping](/pt/docs/tracks/google-shopping-marketplace) precisa estar configurada e a loja precisa ter zonas de envio cadastradas na [política de envio](/pt/docs/tutorials/politica-de-envio), pois a página **Configurar regiões** apenas sincroniza essas zonas. 

![Preferências do Google Shopping](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/regionalizacao-do-google-shopping_1.png)

Para enviar preço, disponibilidade, frete e SLA regionalizados, é necessário configurar e ativar a funcionalidade na seguinte ordem:

1. [Cadastrar zonas de envio na Plítica de envio.](/pt/docs/tutorials/politica-de-envio)
2. [Ativar regiões na integração do Google Shopping](#ativar-regioes)
3. [Ativar Google Shipping](#ativar-google-shipping)
4. [Ativar RAAP](#ativar-raap) 
Na página de **Preferências** do Google Shopping, a loja escolhe quais zonas permanecem ativas para a integração com o Google.

## Regionalização

A página **Configurar regiões** mostra as zonas sincronizadas da Logística. O aviso no topo informa quantas zonas foram sincronizadas e que o Google recebe frete, preço, disponibilidade e SLA conforme essas regiões. Nessa página, também é possível [buscar um produto e conferir se ele está disponível](#testar-disponibilidade-de-produto) em cada zona.

Os dados da página são apresentados em uma tabela com os seguintes dados:

- **Zonas comum** que mostram o nome da zona. Algumas linhas agrupam outras zonas e podem ser expandidas <i class="fas fa-angle-right" aria-hidden="true"></i> .
- **Cobertura** que apresenta o intervalo de CEP da respectiva zona.
- **Status** que mostra quando a zona está `ativa`e enviando informações ao Google.
- **Disponibilidade** que mostra quando um produto está ou não disponível nas regiões da tabela.

Cada linha da tabela tem uma checkbox <a class="far fa-check-square" aria-hidden="true"></a> para ativar ou desativar a zona.

Ao configurar regiões, o seller escolhe quais zonas de envio da loja o Google utilizará. A lista é a das zonas previamente cadastradas na Política de envio. As zonas ativas passam a definir o frete, o SLA, o preço e a disponibilidade enviados ao Google pelo **Google Shipping** e pelo **RAAP**. As zonas inativas ficam de fora das ofertas regionalizadas.

> Para usar o RAAP, a loja precisa ter variação real de preço ou estoque por região. Sem essa variação, o Google pode registrar inconsistências no catálogo. Lojas em CMS Portal (Legado) ou headless precisam adaptar a página de produto para ler o parâmetro `region_id` que o Google acrescenta na URL. Siga o guia [Adapting headless storefronts to Google RAAP](https://developers.vtex.com/docs/guides/adapting-headless-storefronts-to-google-raap).

### Ativar regiões

Para ativar as regiões siga os passos abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências > Confiigurar regiões**.
2. Marque as zonas que devem ser enviadas ao Google.
3. Clique em `Ativar regiões`. O número no botão indica quantas zonas estão selecionadas.

Após ativar as regiões, a seção **Configurar regiões apresentará o status `Configurado`.

### Testar disponibilidade de produto

Na página **Configurar regiões**, é possível testar a disponibilidade de um produto de acordo com as regiões ativas. Para realizar o teste, siga as seguintes instruções:

1. No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências > Confiigurar regiões**.
2. Na barra de busca acima da tabela de dados busque e selecione um produto do catálogo da sua loja.
3. Aguarde a coluna **Disponibilidade** ser recarregada.

Na coluna **Disponibilidade** será mostrado o status de Disponível <i class="far fa-check-circle" aria-hidden="true"></i> ou Indisponível <> em cada região ativa. Para ver o resultado de uma zona específica, use o filtro País e a busca por nome ou CEP.

![Configurar regiões com Ativar regiões](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/regionalizacao-do-google-shopping_3.png)

## Ativar o Google Shipping

O [**Google Shipping**](https://support.google.com/merchants/answer/6324484?hl=pt-BR) envia ao Google o custo e o SLA de entrega já calculados pela tabela de frete da VTEX, por região. Com isso, os anúncios e as listagens podem exibir o valor do frete e o SLA estimado, inclusive frete grátis ou entrega rápida, quando a [política de envio](/pt/docs/tutorials/politica-de-envio) da loja estiver configurada deste modo. A integração usa as [zonas ativas](#ativar-regiões) e as regras de envio já existentes na VTEX para a simulação de frete.

Para ativar o Google Shipping, siga os passos abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências**.
2. Na seção **Google Shipping**, clique no botão<i class="fas fa-toggle-on" aria-hidden="true"></i>.
3. No modal **Ativar Shipping?**, clique no botão `Ver regiões configuradas` para ver quais regiões estão ativas ou clique no botão `Continuar` para confirmar a ativação.

> ⚠️ A ativação do Google Shipping é obrigatória para a utilização do RAAP.

## Ativar o RAAP

O [**RAAP (Regional Availability & Pricing)**](https://support.google.com/merchants/answer/16782229?hl=pt-BR) envia ao Google o preço e a disponibilidade do produto por região. Com isso, os anúncios e as listagens podem mostrar  valor e estoque válidos para a região do comprador, em vez do preço e da disponibilidade padrão da conta. A integração usa as [zonas ativas](#ativar-regiões) e a variação de preço e estoque já existente na VTEX.

> ⚠️ Ativar o RAAP sem variação real de preço ou estoque por região pode causar inconsistências no catálogo enviado ao Google.

Para ativar o RAAP, siga os passos abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências**.
2. Na seção **RAAP**, clique no botão<i class="fas fa-toggle-on" aria-hidden="true"></i>.
3. No modal **Ativar RAAP?**, clique no botão `Ver regiões configuradas` para ver quais regiões estão ativas ou clique no botão `Continuar` para confirmar a ativação.

## Desativar o Google Shipping ou o RAAP

Ao desativar o **Shipping**, o Google deixa de receber frete e SLA por região. E ao desativar o **RAAP**, o Google deixa de receber preço e disponibilidade por região. Em ambos os casos, as ofertas voltam a usar os valores padrão da conta, o que pode afetar variações regionais já indexadas.

> Caso o Google Shipping seja desativado, a funcionalidade do RAAP para de funcionar.

Para desativar o Google Shipping ou o RAAP, siga os passos abaixo:

1. No Admin VTEX, acesse **Marketplace > Conexões > Google > Preferências**.
2. Na seção **Google Shipping** ou **RAAP**, clique no botão <i class="fas fa-toggle-off" aria-hidden="true"></i> .
3. Clique em `Desativar`.