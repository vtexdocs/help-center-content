---
title: 'Envio de produtos para o Google Shopping'
id: 5L5LnccDCj5lJk8H95GQ82
status: PUBLISHED
createdAt: 2021-04-15T14:10:45.645Z
updatedAt: 2025-04-30T18:26:28.314Z
publishedAt: 2025-04-30T18:26:28.314Z
firstPublishedAt: 2021-04-15T17:41:23.772Z
contentType: trackArticle
productTeam: Channels
slugEN: sending-products-to-google-shopping
locale: pt
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugEN: configurar-integracao-com-o-google-shopping
---

No Google Shopping somente [catálogos](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) são integrados. Ao contrário de outras integrações, **não é necessário mapear os produtos através de planilha**.

## Reindexar base

Após a configuração da integração e autenticação da sua conta, o envio de produtos para o marketplace não é automático, é necessário [reindexar a base](https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao). Esse processo prepara os dados dos SKUs e produtos e envia para o marketplace informações gerais sobre catálogo, preço e estoque. 

> ℹ️ Somente o [usuário Titular (owner)](https://help.vtex.com/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA) tem permissão para reindexar a base de uma loja VTEX. Durante o período de reindexação, que é variável, os produtos entram numa fila para atualização de dados, mas seguem disponíveis para venda no site da loja.

Para reindexar a base, copie o endereço abaixo no seu navegador, substituindo `{nomedaloja}` pelo nome da sua loja:

`{nomedaloja}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`

Ao acessar o endereço, clique no botão `Reindexar Base`. O processo pode ser acompanhado pelo Admin VTEX, em **PRODUTOS > Catálogo > Relatórios**.

### Checar indexação

É possível conferir se um SKU específico foi corretamente indexado à política comercial da integração. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **PRODUTOS > Produtos e SKUs**.
2. Clique na <i class="fas fa-angle-down"></i> seta para baixo, ao lado do botão **ALTERAR**.
3. Selecione a opção `Indexed Info`.
4. Verifique se nas informações do SKU aparece o número da política comercial usada na integração com o marketplace.

## Aprovação de produtos

A aprovação dos seus produtos pelo Google vai torná-los ativos, e isso imediatamente fará com que eles figurem como anúncios no Google Shopping.

É possível que um produto apresente o erro `Insertion error: Ineligible SKU`. Isso significa que aquele produto foi considerado inelegível para a integração. Produtos podem se tornar inelegíveis pelos seguintes motivos:
- O produto está sem preço.
- O produto não possui imagem.
- Não há estoque do produto e ele foi configurado para ser excluído quando sem estoque.

**Se um produto é reprovado, é necessário revisar seus dados e enviá-los novamente**. Você pode acompanhar o status dos seus produtos no Google Merchant Center.

> ℹ️ Verifique se os seus produtos atendem a [Especificação dos dados do produto](https://support.google.com/merchants/answer/7052112?visit_id=637492777706451215-3729304881&rd=1&hl=pt-BR) definida pelo Google. Caso algum produto esteja em desacordo com as exigências, o anúncio será reprovado.

Há situações nas quais a reprovação do produto acontece posteriormente a ele já ter sido considerado ativo. Isso é visto por vezes quando uma conta foi criada recentemente.

| **SAIBA MAIS** |
| ---------- |
|Confira outros motivos de reprovação de produtos no artigo do Google [Sobre reprovações por violação da qualidade de dados de produto.](https://support.google.com/merchants/answer/9227009?hl=pt-BR)|

## Atualização dos dados do produto

No Google Shopping, os produtos automaticamente expiram caso não sejam atualizados em até 30 dias. Isso inclui qualquer tipo de alteração, seja ela de preço, estoque ou especificação.

Entretanto, não é algo com o qual você precise se preocupar, pois na integração com o conector da Plataforma VTEX, **os produtos são automaticamente atualizados pelo sistema a cada 29 dias.**

> ℹ️ É possível haver um delay de até 30 minutos entre o processamento da alteração de dados de um produto e sua atualização no feed.

## Uso de custom labels 

Além das informações básicas dos produtos, você pode enviar rótulos personalizados para o Google Shopping. Esse recurso é chamado de *custom labels* e permite classificar ofertas com base em critérios definidos por você, como campanhas promocionais, sazonalidade, margens ou público-alvo.  

Essas *labels* são úteis para:  

- Organizar campanhas no Google Ads.  
- Criar filtros personalizados para relatórios.  
- Otimizar a segmentação e o desempenho dos anúncios.  

### Como configurar 

É necessário criar as *custom labels* no Google Merchant Center. Após criar as *custom labels* no Google Merchant Center, siga o tutorial [Cadastrar especificações ou campos de produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) para associá-las a uma oferta específica utilizando **especificações de produtos.**

Ao criar o novo campo de especificação de produto preencha-os com os seguintes valores:

| **Campo** | **Valor** |
|:---: | :---: |
| Nome do campo da especificação | `googleshopping-labels`|
|Tipo de campo | Radio |

Após criar o novo campo de especificação é necessário associar as labels à ofertas. Para esta etapa, siga as instruções abaixo:

1. No Admin VTEX, acesse **Catálogo > Todos os produtos** ou digite **Todos os produtos** na barra de busca no topo da página.  
2. Na linha do produto, clique em `Alterar`.  
3. Acesse a aba **Especificações.**  
4. Preencha o campo `googleshopping-labels` com valores desejados, separando-os por ponto e vírgula`;`.  
5. Clique em `Salvar`.  

> ⚠️ Cada oferta pode ter no máximo cinco labels associadas.

## Modificar categorização automática

Uma vez concluída a integração, a categorização dos seus produtos terá sido realizada de forma automática. Porém, há casos em que um produto é reprovado, porque o Google considera que **a categoria atribuída a ele está incorreta.**

> Exemplo: veiculação de anúncios de bebidas alcoólicas.

Antes de considerar um problema na categorização, porém, tenha a certeza de que seus produtos estão em conformidade com a política do Google para [bebidas alcoólicas](https://support.google.com/merchants/answer/6150139?hl=pt-BR#zippy=%2Cbebidas-alco%C3%B3licas).

Para substituir uma categoria incorreta e garantir que o produto seja aprovado, veja o passo-a-passo no artigo do Google [categoria Google do produto](https://support.google.com/merchants/answer/6324436?hl=pt-BR). 

> ⚠️ O Google aceitará uma modificação de categoria apenas nas situações previstas no artigo [categoria Google do produto.](https://support.google.com/merchants/answer/6324436?hl=pt-BR)
