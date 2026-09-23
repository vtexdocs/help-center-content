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

A regionalização do Google Shopping define quais regiões da logística da loja a integração envia ao Google. Com essas regiões, a loja pode ativar o **Google Shipping**, que informa frete e prazo por região, e o **RAAP** (Regional Availability & Pricing), que informa preço e disponibilidade por região. Para usar a regionalização, a [integração com o Google Shopping](/pt/docs/tracks/google-shopping-marketplace) precisa estar configurada e a loja precisa ter zonas de envio cadastradas na [política de envio](/pt/docs/tutorials/politica-de-envio). 

A página **Configurar regiões** sincroniza essas zonas e não cria regiões novas. Na página de **Preferências** do Google Shopping, a loja escolhe quais zonas permanecem ativas para a integração com o Google.

![Preferências do Google Shopping](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/regionalizacao-do-google-shopping_1.png)

## Configurar a regionalização

Para acessar as configurações de regionalização do Google, no Admin VTEX acesse **Marketplace > Conexões > Google > Preferências**.

Na página **Preferências**, a seção **Regionalização** reúne as seguintes opções:

- **Configurar regiões** que é a lista sas zonas sincronizadas da [Logística](/pt/docs/tutorials/politica-de-envio) e define quais delas o Google recebe, com o status `Configurado` ou `Não configurado`. 
- **Google Shipping** que envia o custo e a velocidade do envio por região, para que as ofertas exibam prazos para cada CEP de destino. 
- **RAAP** que envia preço e disponibilidade por região. O Google Shipping só pode ser ligado quando **Configurar regiões** está `Configurado`, e o RAAP só pode ser ligado com o Google Shipping ativo. Até lá, o controle permanece desligado e a página exibe **Requer regiões configuradas** ou **Requer Google Shipping ativo**.

> Para usar o RAAP, a loja precisa ter variação real de preço ou estoque por região. Sem essa variação, o Google pode registrar inconsistências no catálogo. Lojas em VTEX IO e FastStore recebem a localidade do comprador na vitrine. Lojas em CMS Portal (Legado) ou headless precisam adaptar a página de produto para ler o parâmetro `region_id` que o Google acrescenta na URL. Siga o guia [Adapting headless storefronts to Google RAAP](https://developers.vtex.com/docs/guides/adapting-headless-storefronts-to-google-raap).

### Revisar e ativar as regiões

1. Em **Regionalização**, clique em **Configurar regiões**.
2. Use o filtro **País** e a busca por nome ou CEP para localizar as zonas.
3. Marque as zonas que devem ser enviadas ao Google e clique em `Ativar regiões`. O número no botão indica quantas zonas selecionadas estão inativas.
4. Para interromper o envio de uma zona, marque-a e clique em `Desativar regiões`.

Zonas podem aparecer agrupadas. Expanda o grupo para ver e alterar cada zona. O status `Ativo` ou `Inativo` vale para a zona, e a coluna **Cobertura** mostra o intervalo de CEP.

Para conferir se um produto está disponível em cada região, use a opção **Escolha um produto para testar a disponibilidade em cada região** e busque o produto. A coluna **Disponibilidade** passa a indicar `Disponível` ou `Indisponível` em cada zona.

![Regiões sincronizadas da Logística](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/regionalizacao-do-google-shopping_2.png)

> Quando houver ao menos uma região ativa, o card **Configurar regiões** em **Preferências** exibe o status `Configurado` e as regiões em uso.

### Ativar o Google Shipping

O **Google Shipping** envia ao Google Shopping o custo e o prazo de entrega já calculados pela tabela de frete da VTEX, por região. Com isso, os anúncios e as listagens podem exibir o valor do frete e o prazo estimado, inclusive frete grátis ou entrega rápida, quando a [política de envio](/pt/docs/tutorials/politica-de-envio) da loja estiver configurada deste modo. A integração usa as zonas ativas em **Configurar regiões** e as regras de envio já existentes na VTEX para a simulação de frete.

Para ativar o Google Shipping, siga os passos abaixo:

1. Volte à página **Preferências**. Na seção **Regionalização**, confira se o card **Configurar regiões** está com o status `Configurado`. Enquanto o status for `Não configurado`, o controle de **Google Shipping** permanece desligado e a página exibe **Requer regiões configuradas**.
2. No card **Google Shipping**, ligue o controle ao lado de `Saiba mais`.
3. No modal **Ativar Shipping?**, leia o efeito da ativação: o Google passa a receber frete e SLA por região, e as ofertas exibem prazos para cada CEP de destino.
4. Se precisar revisar as zonas antes de continuar, clique em `Ver regiões configuradas`. Para confirmar, clique em `Continuar`.

Saiba mais sobre o atributo de frete no artigo do Google [Frete (shipping)](https://support.google.com/merchants/answer/6324484?hl=pt-BR).

### Ativar o RAAP

1. Em **Preferências**, ligue **RAAP**.
2. No modal **Ativar RAAP?**, confirme que as regiões estão atualizadas e que a conta usa variação real de preço ou estoque por região.
3. Clique em `Continuar`.

> ⚠️ Ativar o RAAP sem variação real de preço ou estoque por região pode causar inconsistências no catálogo enviado ao Google.

Saiba mais no artigo do Google [Disponibilidade e preços regionais](https://support.google.com/merchants/answer/16782229?hl=pt-BR).

## Desativar o Google Shipping ou o RAAP

Em **Preferências**, desligue a opção desejada e confirme no modal.

| Ação | Efeito |
| --- | --- |
| **Desativar Shipping** | O Google deixa de receber frete e SLA por região. As ofertas voltam a usar os prazos padrão da conta. |
| **Desativar RAAP** | O Google deixa de receber preço e disponibilidade por região. As ofertas voltam a usar os valores padrão da conta, o que pode afetar variações regionais já indexadas. |

O RAAP exige o Google Shipping ativo. Para interromper os dois envios, desative o RAAP e, em seguida, o Google Shipping.
