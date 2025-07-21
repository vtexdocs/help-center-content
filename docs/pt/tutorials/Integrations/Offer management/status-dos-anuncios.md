---
title: 'Status dos anúncios'
id: 2OE87wU26F7lApl99OdwvJ
status: PUBLISHED
createdAt: 2023-09-29T19:16:05.771Z
updatedAt: 2024-11-27T00:05:01.148Z
publishedAt: 2024-11-27T00:05:01.148Z
firstPublishedAt: 2023-09-29T20:07:16.003Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: offer-status
locale: pt
legacySlug: status-de-anuncios-beta
subcategoryId: 2zVauFUkYn8vgS0y0MfWeK
---

O módulo **Status dos anúncios** permite aos sellers acompanhar o envio e a sincronização de anúncios de integrações com canais de venda. Na VTEX, um anúncio é um SKU ativo de um seller que teve seu preço e estoque configurados e foi enviado para um canal de venda.  

O **Status dos anúncios** permite acompanhar anúncios enviados somente a marketplaces VTEX. Para encontrar o módulo no Admin VTEX, acesse **Marketplace > Conexões > Status dos anúncios,** ou digite **Status dos anúncios** na barra de busca. Feito isso, a seguinte página aparecerá:  

![Tela Offer Status](https://downloads.ctfassets.net/alneenqid6w5/5elFaSW31IgANpXseTApPo/e007c56b38b37f10eb1765dcef3d4945/-PT-_Offer_Status_-_GIF.gif)

A página **Status dos anúncios** é composta por três abas, a [**aba Publicados**](#aba-publicados), a [**aba Problemas**](#aba-problemas) e a [**aba Aguardando conclusão**](#aba-aguardando-conclusao), todas apresentam uma listagem de seus anúncios conforme o status que ele se encontra. Em cada anúncio é possível acessar e conferir seus detalhes, que mostram o status, o estoque, preço, data de atualização e motivos de rejeição no marketplace.  

![Fluxo offer status](https://images.ctfassets.net/alneenqid6w5/mC78m1ROUDWruOE5V5XEk/bfc7e29ba2f46edfb6c795f5329ce349/Aspose.Words.978c189a-0715-46de-a85d-4a215e29140f.002.png)  

## Aba Publicados

Na aba **Publicados**, o seller pode acompanhar os anúncios enviados que já foram aprovados pelo marketplace. Nesta aba, é possível realizar as seguintes ações:

- [Buscar e filtrar anúncios](#buscar-e-filtrar-anuncios)
- [Visualizar informações dos anúncios](#visualizar-informacoes-dos-anuncios)
- [Editar informações de anúncios](#editar-informacoes-de-anuncios)  
- [Exportar lista de anúncios publicados](#exportar-lista-de-anuncios-publicados)

### Buscar e filtrar anúncios

No topo direito da página, existe uma barra de busca com o ícone lupa <i class="fas fa-search"></i>. Na barra, você pode buscar um anúncio por **ID do SKU** e **nome do anúncio.**

Além disso, é possível filtrar o resultado da busca pelos seguintes critérios:

- **Marketplace:** canal de venda para o qual o anúncio foi enviado.
- **Estoque:** quantidade de estoque de um produto, que pode ser:  
  - `Mínimo:` número mínimo de itens em estoque de um produto.  
  - `Máximo:` número máximo de itens em estoque de um produto.  
- **Atualização:** status de atualização de preço e estoque dos anúncios já publicados.  

Para filtrar os anúncios por **Marketplace**, clique na seta para baixo ao lado do termo, selecione a flag dos marketplaces desejados e, em seguida, clique em **APLICAR**.  

Para filtrar os anúncios por **Estoque**, clique na seta para baixo ao lado do filtro, depois digite o número de estoque mínimo, estoque máximo, ou ambos, e clique em **APLICAR**.  

![Filtro estoque offer status](https://images.ctfassets.net/alneenqid6w5/p6cXcm4zP1pYWyTGbQcoE/483a898afda9f9ec5121f7ff566de49e/Aspose.Words.978c189a-0715-46de-a85d-4a215e29140f.003.png)

Para filtrar os anúncios por **Atualização**, clique na seta para baixo ao lado do filtro, selecione uma das opções e clique em **APLICAR.**  

Veja abaixo as opções disponíveis para esse filtro:  

- **Atualizado**: são anúncios que tiveram seu preço e/ou estoque atualizados pelo seller e obtiveram sucesso no processamento.  
- **Erro ao atualizar:** são anúncios processados após atualização e, tendo sido encontrada alguma inconsistência, ele apresenta erro para atualizar.  

![Filtro atualizado offer status](https://images.ctfassets.net/alneenqid6w5/VBAg96YrCwBHB358eJS7r/715b713a9e23057cd281e869f5d33959/Aspose.Words.978c189a-0715-46de-a85d-4a215e29140f.004.png)

Você pode utilizar um único filtro ou combiná-los em uma mesma busca. Por padrão, os filtros não estarão selecionados, de forma que a página inicial apresenta a quantidade total de anúncios existentes.  

### Visualizar informações dos anúncios

Na parte superior da página **Status dos anúncios**, há uma apresentação dos anúncios do seller com as seguintes informações:  

- Número de anúncios publicados em relação aos anúncios enviados.  
- Número de anúncios com status **Atualizado.**  
- Número de anúncios com status **Erro ao atualizar.**  

Na lista de anúncios, existem colunas com as seguintes informações:  

| **Coluna** | **Descrição** |
|---|---|
| **Nome** | Apresenta a imagem do SKU, o título do anúncio no canal de venda e o ID do SKU na VTEX. |
| **Marketplace** | Canal de venda para onde o anúncio foi enviado. |
| **Preço** | Preço do SKU do anúncio. |
| **Estoque** | Quantidade de itens em [estoque](/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) para o SKU do anúncio. |
| **Atualização** | Situação de processamento da atualização, que pode ser Atualizado <i class="far fa-check-circle"></i> ou Erro ao atualizar <div class="error-icon"></div>. |  

É possível clicar sobre os nomes das colunas para ordenar os anúncios de forma crescente ou decrescente. Por exemplo, ao clicar sobre a coluna **Preço**, é possível ordenar a lista pelo menor preço do anúncio ou pelo maior.  

### Editar informações de anúncios

Ao clicar em um anúncio, se abrirá uma janela contendo barras informativas com os seguintes dados do anúncio:  

- **Preço:** qual o preço atual do anúncio, quando ocorreu a última atualização e se a atualização foi bem sucedida ou não.  
- **Estoque:** qual o estoque atual do item anunciado, quando ocorreu a última atualização e se a atualização foi bem sucedida ou não.  
- **Conteúdo:** quando ocorreu a última atualização do conteúdo e se a atualização foi bem sucedida ou não.  

Para atualizar qualquer informação de um anúncio já publicado, o seller deverá realizar os seguintes passos:  

1. Na aba **Publicados,** clique no anúncio desejado.  
1. Clique no ícone <i class="fas fa-ellipsis-v"></i>de ação no canto superior direito.  
1. Clique em uma das opções:  
- **Editar preço**
- **Editar estoque**
- **Editar conteúdo**

Você será redirecionado à página correspondente para realizar as alterações necessárias.  

![Ações offer status](https://images.ctfassets.net/alneenqid6w5/3SzA8sqcAKJx2L4GrdLcQ2/7dc3f62846ca6a28768fe9bc6faddc9d/Aspose.Words.978c189a-0715-46de-a85d-4a215e29140f.006.jpeg)

### Exportar lista de anúncios publicados

Para exportar a lista de anúncios publicados em formato XLSX, clique sobre o  ícone seta para baixo <i class="fas fa-download"></i>, localizado no topo da interface. O arquivo será enviado para o email do usuário logado, sendo que o tempo da exportação dependerá do volume de anúncios da listagem exportada e questões de processamento da plataforma VTEX.

<div class="alert alert-info">
O conteúdo exportado é referente ao total de anúncios da listagem no momento da exportação. Se algum filtro estiver ativo, somente os anúncios selecionados serão exportados.
</div>

## Aba Problemas

Na aba **Problemas**, o seller pode acompanhar os anúncios enviados que foram reprovados pelo marketplace. Nesta aba, também é possível realizar as seguintes ações:  

- [Buscar e filtrar anúncios](#buscar-e-filtrar-anuncios)
- [Visualizar detalhes do problema](#visualizar-detalhes-do-problema)
- [Editar informações de anúncios](#editar-informacoes-de-anuncios)
- [Exportar anúncios com problemas](#exportar-anuncios-com-problemas)

### Buscar e filtrar anúncios com problemas

No topo direito da página, existe uma barra de busca com o ícone lupa <i class="fas fa-search"></i>, na qual você pode buscar um anúncio por nome do anúncio e ID do SKU.

Além disso, é possível filtrar o resultado da busca pelos seguintes critérios:

- **Marketplace:** canal de venda para o qual o anúncio foi enviado.  
- **Envio:** períodos pré-definidos de *hoje***,** *últimos 7 dias* e *último mês* em que o anúncio foi enviado ao marketplace.  
- **Estoque:** quantidade de estoque de um produto:  
- `Mínimo:` número mínimo de itens em estoque de um produto.  
- `Máximo:` número máximo de itens em estoque de um produto.  

Para filtrar os anúncios por **Marketplace**, clique na seta para baixo ao lado do termo, selecione a flag dos marketplaces desejados e, em seguida, clique em **APLICAR**.  

Para filtrar os anúncios por **Envio**, clique na seta para baixo ao lado do filtro, selecione uma das opções e clique em **APLICAR.**  

Para filtrar os anúncios por **Estoque**, clique na seta para baixo ao lado do filtro, depois digite o número de estoque mínimo ou estoque máximo, ou, ambos e clique em **APLICAR**.  

![Filtro estoque offer status](https://images.ctfassets.net/alneenqid6w5/p6cXcm4zP1pYWyTGbQcoE/483a898afda9f9ec5121f7ff566de49e/Aspose.Words.978c189a-0715-46de-a85d-4a215e29140f.003.png)

Você pode utilizar um único filtro ou combiná-los em uma mesma busca. Por padrão, os filtros não estarão selecionados, de forma que a página inicial apresenta a quantidade total de anúncios existentes.  

### Visualizar detalhes do problema

Na aba **Problemas**, a lista de anúncios é apresentada com as seguintes informações em colunas:

| **Coluna** | **Descrição** |
|---|---|
| **Nome** | Apresenta a imagem do SKU, o título do anúncio no canal de venda e o ID do SKU na VTEX. |
| **Marketplace** | Canal de venda para onde o anúncio foi enviado. |
| **Preço** | Preço do SKU do anúncio. |
| **Estoque** | Quantidade de itens em [estoque](/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) para o SKU do anúncio. |
| **Problemas** | Número de problemas identificados no anúncio. |
| **Envio** | Data que o anúncio foi enviado ao marketplace. |

### Editar informações de anúncios 

Ao clicar em um anúncio, se abrirá uma janela contendo uma barra informativa dos erros encontrados no anúncio, listados abaixo:  

- **Possíveis erros**  
  - **Anúncio negado pelo marketplace:** quando o marketplace não aceita o anúncio por não atender os requisitos estabelecidos pelo marketplace.  
  - **Atualização de estoque:** quando o SKU do anúncio não tem estoque configurado.  
  - **Atualização de preço:** quando o preço de um anúncio não foi configurado.  

Para atualizar qualquer informação de um anúncio com problemas, o seller deverá realizar os passos listados abaixo:  

1. Na aba de anúncios com **Problemas**, clique no anúncio desejado.  
2. Clique no ícone <i class="fas fa-ellipsis-v"></i> de ação no canto superior direito.  
3. Clique em uma das opções:   
- **Editar preço**  
- **Editar inventário**  
- **Editar conteúdo**  

Você será redirecionado à página correspondente para realizar as alterações necessárias.

### Exportar lista de anúncios com problemas 

Para exportar a lista de anúncios com problemas em formato XLSX, clique sobre o  ícone seta para baixo <i class="fas fa-download"></i>, localizado no topo da interface. O arquivo será enviado para o email do usuário logado, sendo que o tempo da exportação dependerá do volume de anúncios da listagem exportada e questões de processamento da plataforma VTEX. 

<div class="alert alert-info">
  O conteúdo exportado é referente ao total de anúncios da listagem no momento da exportação. Se algum filtro estiver ativo, somente os anúncios selecionados serão exportados.
  </div>

## Aba Aguardando Conclusão

Na aba **Aguardando conclusão**, o seller pode acompanhar os anúncios que estão aguardando análise do marketplace. Nesta aba, também é possível realizar as seguintes ações:  

- [Buscar e filtrar anúncios em análise](#buscar-e-filtrar-anuncios-em-analise)  
- [Editar informações de anúncios](#editar-informacoes-de-anuncios)
- [Exportar lista de anúncios aguardando conclusão](#exportar-lista-de-anuncios-aguardando-conclusao)  

### Buscar e filtrar anúncios em análise

Na parte superior direita da página, existe uma barra de busca com o ícone lupa <i class="fas fa-search"></i>. Na barra, você pode buscar um anúncio por nome do anúncio e ID do SKU.  

Além disso, é possível filtrar o resultado da busca pelos seguintes critérios:  

- **Marketplace:** canal de venda para o qual o anúncio foi enviado.  
- **Envio:** períodos pré-definidos de, **hoje, últimos 7 dias** e **último mês,** em que o anúncio foi enviado ao marketplace.  

Para filtrar os anúncios por **Marketplace**, clique na seta para baixo ao lado do termo, selecione a flag dos marketplaces desejados e, em seguida, clique em **APLICAR**.  

Para filtrar os anúncios por **Envio**, clique na seta para baixo ao lado do filtro, selecione uma das opções e clique em **APLICAR.**  

Você pode utilizar um único filtro ou combiná-los em uma mesma busca. Por padrão, os filtros não estarão selecionados, de forma que a página inicial apresenta a quantidade total de anúncios existentes.  

### Editar informações de anúncios

Na aba **Aguardando conclusão,** a lista de anúncios é apresentada com as seguintes informações em colunas:  

| **Coluna** | **Descrição** |
|---|---|
| **Nome** | Apresenta a imagem do SKU, o título do anúncio no canal de venda e o ID do SKU na VTEX. |
| **Marketplace** | Canal de venda para onde o anúncio foi enviado. |
| **Envio** | Data que o anúncio foi enviado ao marketplace. |

É possível clicar sobre os nomes das colunas para ordenar os anúncios de forma crescente ou decrescente.  

Para atualizar qualquer informação de um anúncio em análise, o seller deverá realizar os seguintes passos:  

1. Na aba **Aguardando conclusão**, clique no anúncio desejado.  
2. Clique no ícone <i class="fas fa-ellipsis-v"></i>de ação no canto superior direito.  
3. Clique em uma das opções:  
- **Editar preço**  
- **Editar inventário**  
- **Editar conteúdo**  

Você será redirecionado à página correspondente para realizar as alterações necessárias. 

### Exportar lista de anúncios aguardando conclusão

Para exportar a lista de anúncios aguardando conclusão em formato XLSX, clique sobre o ícone seta para baixo <i class="fas fa-download"></i>, localizado no topo da interface. O arquivo será enviado para o email do usuário logado, sendo que o tempo da exportação dependerá do volume de anúncios da listagem exportada e questões de processamento da plataforma VTEX.

<div class="alert alert-info">
O conteúdo exportado é referente ao total de anúncios da listagem no momento da exportação. Se algum filtro estiver ativo, somente os anúncios selecionados serão exportados.
</div>
