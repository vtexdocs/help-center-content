---
title: 'Vínculos de SKU'
id: 1SmrVgNwjJX17hdqwLa0TX
status: PUBLISHED
createdAt: 2022-05-27T17:27:26.963Z
updatedAt: 2024-01-23T15:50:13.022Z
publishedAt: 2024-01-23T15:50:13.022Z
firstPublishedAt: 2022-05-31T17:14:23.589Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: sku-bindings
locale: pt
legacySlug: vinculos-de-sku
subcategoryId: FTLNAWyLmuaIiAq4CQKS6
---

Como parte do [comércio colaborativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) promovido pela VTEX, a arquitetura de uma loja VTEX possibilita a ela tanto atuar como [seller](https://help.vtex.com/pt/tutorial/configurar-seller-para-vender-em-marketplace-vtex--6g045OkRSjNpqhkExbQRlP) quanto como [marketplace](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb). 

Quando o seller envia seus produtos para o marketplace VTEX, o marketplace [cataloga os SKUs recebidos](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396), criando um vínculo entre os SKUs do seller e os SKUs do marketplace. Ou seja, passa a existir uma correspondência entre o catálogo do seller e o catálogo do marketplace. 

Após a catalogação, que o marketplace pode realizar pela página **SKUs Recebidos** ou utilizando o [VTEX Matcher](https://help.vtex.com/pt/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424), os vínculos entre os SKUs do seller e os SKUs do marketplace aparecem na página **Vínculos de SKU**. De forma automática, os vínculos possuem o status _Vinculado_.

>ℹ️ Por padrão, para [sellers white label](https://help.vtex.com/pt/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa) não existe essa relação de vínculo entre os seus SKUs e os SKUs do marketplace.

A página **Vínculos de SKU** permite ao marketplace acompanhar e gerenciar a relação de vínculo entre os SKUs do seller e do marketplace. Para acessar a página, no Admin VTEX vá em **Marketplace > Sellers > Vínculos de SKU**. A seguinte interface vai aparecer:

![sku-bindings-pt](//images.ctfassets.net/alneenqid6w5/3TrV8m2JLKuPjhKTtkY2Yl/f226cc707a595197ffa86fcb68db212b/sku-bindings-pt.png)

A tabela a seguir apresenta a descrição das colunas da listagem de vínculos de SKUs:

| **Coluna** | **Descrição** |
| ---------- | ---------- |
| SKU | Código numérico que identifica o [SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ) do catálogo do marketplace. |
| Seller | Nome e ID do [seller cadastrado](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392) no marketplace. |
| SKU de seller | Código alfanumérico que identifica o SKU do catálogo do seller com o qual o SKU do marketplace tem um vínculo. |
| Status | Situação do vínculo entre o SKU do seller e o SKU do marketplace, podendo ser de dois tipos: <ul><li><b>Vinculado:</b> existe uma correspondência entre o SKU do seller e o SKU do marketplace.</li><li><b>Desvinculado:</b> não existe uma correspondência entre o SKU do seller e o SKU do marketplace.</li></ul> Se um vínculo de SKU é alterado de <b>Vinculado</b> para <b>Desvinculado</b>, o SKU do seller se torna indisponível no catálogo do marketplace. |

A página **Vínculos de SKU** permite ao marketplace VTEX executar as seguintes ações:

- [Pesquisar](#pesquisar)
- [Desvincular SKU](#desvincular-sku)
- [Associar a outro SKU](#associar-a-outro-sku)
- [Remover](#remover)
- [Exportar](#exportar)

## Pesquisar

No topo da página, existem caixas de busca com o ícone lupa <i class="fas fa-search"></i>, pelas quais é possível buscar vínculos de SKU utilizando os seguintes critérios:

- ID de SKU do marketplace
- ID do seller
- ID de SKU do seller

Ao digitar um caractere na caixa de busca, a pesquisa é imediatamente realizada. Para limpar a busca, clique no ícone <i class="far fa-times-circle"></i>. 

Também é possível pesquisar na listagem filtrando por status de vinculação. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Marketplace > Sellers > Vínculos de SKU**.
2. No botão `Status de vinculação` clique na seta para baixo <i class="fas fa-angle-down"></i>.
3. Selecione o status desejado, entre _Vinculado_ ou _Desvinculado_.
4. Clique no botão `Aplicar`.

Para retornar à listagem com todos os status de vínculo, clique no botão `Limpar todos`. Este botão só cancela o filtro de status, e não termos pesquisados nas caixas de busca.

>ℹ️ Caso não haja um resultado para a pesquisa, verifique a ortografia utilizada na busca ou a combinação de filtros utilizada. 

## Desvincular SKU

Para desfazer o vínculo entre SKUs, clique sobre o _switch_ <i class="fas fa-toggle-on"></i> e confirme a opção `Desfazer o vínculo do SKU`.

>ℹ️ Ao desvincular o SKU do seller, o SKU deixa de receber atualizações de preço e estoque e se torna indisponível no catálogo do marketplace. O SKU pode ser revinculado a qualquer momento, não sendo para isso necessário catalogar o SKU do seller novamente.

Se desejar restabelecer o vínculo entre o SKU do seller e o SKU do marketplace, ative o _switch_ <i class="fas fa-toggle-on"></i> novamente, clicando sobre ele.

## Associar a outro SKU

Para associar o SKU do seller a um novo SKU do marketplace, realize os seguintes passos:

1. No Admin VTEX, acesse **Marketplace > Sellers > Vínculos de SKU**.
2. Na linha do item desejado, clique sobre o ícone menu <i class="fas fa-ellipsis-v"></i>.
3. Clique em <i class="fas fa-link"></i> `Associar a outro SKU`.
4. Preencha a caixa de diálogo com um ID do SKU do marketplace, sendo que o valor não pode estar vinculado a outro SKU do seller em questão.
5. Clique no botão <i class="fas fa-link"></i> `Associar a um novo SKU`.

## Remover

Para remover o vínculo entre o SKU do seller e o SKU do marketplace, realize os seguintes passos:

1. No Admin VTEX, acesse **Marketplace > Sellers > Vínculos de SKU**.
2. Na linha do item desejado, clique sobre o ícone menu <i class="fas fa-ellipsis-v"></i>.
3. Clique em <i class="far fa-trash-alt"></i> `Remover`.

>⚠️ Remover um vínculo faz com que o SKU do seller deixe de fazer parte do catálogo do Marketplace, desaparecendo da listagem da página **Vínculos de SKU**. Não é possível recuperar um vínculo removido, mas o seller pode reenviar o SKU para o marketplace, que [cataloga](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396) o SKU novamente e torna-o disponível.

## Exportar

Para exportar a lista de vínculos de SKUs em formato XLSX, realize os seguintes passos:

1. No Admin VTEX, acesse **Marketplace > Sellers > Vínculos de SKU**.
2. Se desejável, [pesquise](#pesquisar) utilizando a busca ou filtro dos vínculos que deseja exportar.
3. No topo da página, clique sobre o botão <i class="fas fa-arrow-to-top"></i> `Exportar`.

A planilha gerada será enviada para o email do usuário logado. O tempo da exportação vai depender de questões de processamento da plataforma VTEX e o volume do arquivo.

>ℹ️ O conteúdo exportado é referente à listagem de vínculos de SKUs no momento da exportação. Se uma busca ou filtro estiver ativo, somente os vínculos selecionados serão exportados.

## Saiba mais

- [Configurar marketplace VTEX](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)
- [Configurar seller para vender em marketplace VTEX](https://help.vtex.com/pt/tutorial/configurar-seller-para-vender-em-marketplace-vtex--6g045OkRSjNpqhkExbQRlP)
- [Catalogação de SKUs recebidos](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396)
- [Como funciona a pontuação do VTEX Matcher](https://help.vtex.com/pt/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424)
