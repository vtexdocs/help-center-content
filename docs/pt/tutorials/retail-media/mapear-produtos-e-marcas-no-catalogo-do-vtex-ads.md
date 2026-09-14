---
title: 'Mapear produtos e marcas no catálogo do VTEX Ads'
createdAt: 2026-09-10T00:00:00.000Z
updatedAt: 2026-09-10T00:00:00.000Z
contentType: tutorial
productTeam: Ads
slugEN: map-products-and-brands-in-vtex-ads-catalog
locale: pt
---

No [VTEX Ads](/pt/docs/tracks/retail-media), o **Catálogo de produtos** é onde a conta de anunciante informa quais SKUs dos publishers pertencem a cada uma das suas marcas. Esse mapeamento é feito uma única vez e é o que permite à plataforma calcular as [métricas de Novos Compradores da Marca (NCM)](/pt/docs/tutorials/metricas-de-novos-compradores-da-marca-no-vtex-ads).

Este artigo explica como selecionar seus produtos na tela **Meus produtos**, criar marcas na seção **Marcas** e vincular os produtos a elas, manualmente ou por importação de arquivo CSV.

> ℹ️ O mapeamento de produtos e marcas e as métricas de NCM estão em fase beta, disponíveis apenas para contas de anunciante.

## Por que o mapeamento é necessário

O campo de marca no catálogo é preenchido livremente por cada publisher, sem padronização. Na prática, o mesmo produto pode aparecer como `Novalgina`, `Sanofi` ou `dipirona sódica` dependendo do publisher, o que torna impossível identificar automaticamente e com confiabilidade quais produtos pertencem a qual marca.

Por isso, o próprio anunciante precisa fazer esse mapeamento: só ele conhece seu portfólio e sabe quais SKUs são de cada marca, independentemente de como cada publisher cadastrou o produto. A partir do mapeamento, a plataforma sabe exatamente quais produtos considerar no histórico de compras de cada comprador e consegue calcular o NCM com precisão.

O esforço é pontual. Depois de feito, o catálogo fica salvo e o cálculo passa a rodar automaticamente.

## Antes de começar

Para mapear produtos e marcas, é necessário:

- Ter acesso ao VTEX Ads em uma conta de anunciante com o **Catálogo de produtos** habilitado. Se a opção não aparecer no menu lateral, a funcionalidade ainda não está habilitada para a sua conta.
- Ter em mãos a relação entre os seus SKUs e as suas marcas, principalmente se você pretende usar a importação de CSV.

## Selecionar produtos em Meus produtos

A tela **Meus produtos** exibe o catálogo de SKUs dos publishers aos quais a sua conta de anunciante está vinculada. Para indicar quais produtos desse catálogo são seus, siga estes passos:

1. No VTEX Ads, acesse **Catálogo de produtos** no menu lateral.
2. Abra a tela **Meus produtos**.
3. Localize no catálogo os produtos que pertencem às suas marcas.
4. Selecione os produtos que devem compor o seu catálogo.
5. Salve a seleção.

<!-- TODO (imagem): captura da tela Meus produtos, com a listagem do catálogo de SKUs dos publishers vinculados e a seleção de produtos. Bloqueada: as imagens da especificação estão marcadas como "Print a ser atualizado". -->

Os produtos salvos passam a formar o catálogo da conta de anunciante e ficam disponíveis para serem vinculados a marcas na etapa seguinte.

## Criar uma marca

Depois de salvar os produtos, crie as marcas do seu portfólio seguindo estes passos:

1. No VTEX Ads, acesse **Catálogo de produtos** no menu lateral.
2. Abra a seção **Marcas**.
3. Crie uma nova marca.
4. Informe o nome da marca, por exemplo `Allegra`.

Repita o processo para cada marca do seu portfólio. O NCM é calculado por marca, então cada marca que você quer acompanhar separadamente precisa ser criada na seção **Marcas**.

<!-- TODO (imagem): captura da seção Marcas, com a listagem de marcas criadas. Bloqueada pelo mesmo motivo acima. -->

## Vincular produtos a uma marca

Com a marca criada, vincule a ela os produtos correspondentes seguindo estes passos:

1. Em **Marcas**, selecione a marca à qual você quer vincular produtos.
2. Busque produtos no catálogo pelo nome ou pelo EAN.
3. Selecione os produtos que pertencem à marca.
4. Vincule os produtos selecionados à marca.

<!-- TODO (imagem): captura da tela de vínculo de produtos a uma marca, mostrando a busca por nome ou EAN. Bloqueada pelo mesmo motivo acima. -->

<!-- TODO (conteúdo): a especificação não informa se um mesmo SKU pode ser vinculado a mais de uma marca, nem como o vínculo se comporta quando o mesmo produto é vendido por vários publishers. Confirmar com o time de produto antes da publicação. -->

### Revisar as sugestões da plataforma

Além da busca manual, a plataforma sugere produtos para cada marca. Você pode aplicar uma sugestão, o que vincula o produto à marca, ou ignorá-la e seguir com o mapeamento manual.

<!-- TODO (imagem): captura da lista de sugestões de produtos por marca, com as ações de aplicar e ignorar. Bloqueada pelo mesmo motivo acima. -->

<!-- TODO (conteúdo): os critérios usados pelo sistema para sugerir produtos não constam em nenhuma fonte disponível. Confirmar com o time de produto antes da publicação. -->

## Importar um arquivo CSV

Como alternativa ao mapeamento manual, é possível importar um arquivo CSV com a relação entre SKU e marca já definida.

<!-- TODO (imagem): captura da tela de importação de CSV. Bloqueada pelo mesmo motivo acima. -->

<!-- TODO (conteúdo): o caminho de acesso à importação e o layout exato do arquivo CSV (nomes e ordem das colunas, separador, codificação, limite de linhas e tratamento de erros) não constam em nenhuma fonte disponível. Confirmar com o time de produto antes da publicação e substituir este parágrafo por um passo a passo com modelo de arquivo. -->

## O que acontece depois

Produtos mapeados só geram métricas de NCM enquanto estiverem em campanhas ativas.

Atendida essa condição, as métricas não aparecem em tempo real: os dados são atualizados diariamente (D+1), então o seu catálogo passa a ser considerado no NCM a partir do dia seguinte.

Para entender o que cada métrica mede, como funciona a janela de lookback e por que o NCM pode ser maior que as **Conversões**, consulte [Métricas de Novos Compradores da Marca (NCM) no VTEX Ads](/pt/docs/tutorials/metricas-de-novos-compradores-da-marca-no-vtex-ads).

## Saiba mais

- [Métricas de Novos Compradores da Marca (NCM) no VTEX Ads](/pt/docs/tutorials/metricas-de-novos-compradores-da-marca-no-vtex-ads)
- [Métricas e atribuição do VTEX Ads](/pt/docs/tutorials/metricas-e-atribuicao-do-vtex-ads)
- [Glossário de Retail Media](/pt/docs/tracks/glossario-de-retail-media)
