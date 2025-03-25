---
title: 'Módulo Gerenciamento de anúncios'
id: 7MRb9S78aBdZjFGpbuffpE
status: DRAFT
createdAt: 2021-03-17T00:44:49.452Z
updatedAt: 2024-06-20T21:34:27.585Z
publishedAt: 
firstPublishedAt: 2021-03-17T01:05:49.343Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: offer-management
locale: pt
legacySlug: listagem-de-anuncios
subcategoryId: 2zVauFUkYn8vgS0y0MfWeK
---

>ℹ️ Para evoluir sua experiência ao sincronizar e atualizar anúncios, o time da VTEX está desenvolvendo uma nova funcionalidade que irá substituir o atual módulo **Gerenciamento de anúncios**.
> Por este motivo, o Gerenciamento de anúncios não receberá novas atualizações ou manutenção. 
> Para conectores e marketplaces que já se integraram com o módulo, solicitamos que entre em contato com nosso time de desenvolvimento através do email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
> Para os conectores com interesse em iniciar a integração, solicitamos que aguardem o lançamento do novo módulo, assim que disponível avisaremos a todos os clientes através do [Developer portal na página de release notes](https://developers.vtex.com/updates/release-notes) e [VTEX Help Center na página de novidades](https://help.vtex.com/pt/en/announcements).  

O módulo **Gerenciamento de anúncios** permite aos sellers acompanhar o envio e a sincronização de anúncios de integrações com canais de venda. Na VTEX, anúncio é um SKU de um seller que teve seu preço e estoque configurados e foi enviado para um canal de venda.

![Offer Management gif](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Offer%20management/gerenciamento-de-anuncios_1.gif)

O **Gerenciamento de anúncios** permite acompanhar anúncios com o [Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq) (Classic e Premium), [Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm) e marketplaces VTEX. Para conectores que desejam integrar via API, existe o [Guia de integração do Gerenciamento de anúncios](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).

Para acessar o módulo, no Admin VTEX, acesse **Marketplace > Conexões > Gerenciamento de anúncios**. Feito isso, a seguinte interface vai aparecer: 

![gerenciamentodeanúncios front](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Offer%20management/gerenciamento-de-anuncios_2.JPG)

A interface da **Gerenciamento de anúncios** apresenta uma listagem dos seus anúncios, sendo possível clicar sobre o anúncio para acessar [detalhes do anúncio](https://help.vtex.com/pt/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) e conferir [detalhes da interação](https://help.vtex.com/pt/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf). As interações são os registros do anúncio ao longo do processo de sincronização e envio para o canal de venda, e ficam disponíveis para consulta por dez dias.

![diagrama ju meyer sent offers pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Offer%20management/gerenciamento-de-anuncios_3.png)

Na página **Gerenciamento de anúncios**, é possível realizar as seguintes ações:

- [Buscar e filtrar anúncios](#buscar-e-filtrar-anuncios)
- [Visualizar informações dos anúncios](#visualizar-informacoes-dos-anuncios)
- [Exportar lista de anúncios](#exportar-lista-de-anuncios)
- [Consultar anúncios indisponíveis](#consultar-anuncios-indisponiveis)

## Buscar e filtrar anúncios

No topo da página, existe uma barra de busca com um <i class="fas fa-search"></i> ícone lupa. Na barra, você pode buscar um anúncio por:

- Nome do anúncio
- ID do SKU
- Código EAN 

![INSERIR IMAGEM 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Offer%20management/gerenciamento-de-anuncios_4.png)

Além disso, é possível filtrar o resultado da busca pelos seguintes critérios:

- **Canal:** canal de venda para o qual o anúncio foi enviado.
- **Categoria:** [categorias](https://help.vtex.com/pt/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) cadastradas na loja do seller VTEX.
- **Marca:** marcas cadastradas pelo seller VTEX.
- **Status:** situação de envio do anúncio para o canal de venda, que pode ser:
  - `Enviando`: anúncios no processo de envio pela primeira vez para o canal de venda; anúncios que estão migrando para um novo canal ou anúncios sendo reenviados.
  - `Sincronizado`: anúncios recebidos com sucesso no canal de venda. Estes anúncios são atualizados em tempo real tanto pelo marketplace quanto pelo seller.
  - `Erro`: anúncios com algum problema que impediu a sincronização com o canal de venda, e nos quais será necessário realizar uma correção manual.

Para realizar uma busca por **Canal**, clique na <i class="fas fa-angle-down"></i> seta para baixo ao lado do termo, selecione a flag dos canais de venda desejados e, em seguida, clique em **APLICAR**.

Para realizar uma busca por **Categoria**, **Marca** ou **Status**, clique na <i class="fas fa-angle-down"></i> seta para baixo ao lado do filtro desejado e depois clique na <i class="fas fa-angle-down"></i> seta para baixo ao lado em **Todos**. Selecione a opção pela qual deseja filtrar a pesquisa e, em seguida, clique em **APLICAR**.

Você pode utilizar um único filtro ou combinar vários em uma mesma busca. Por padrão, os filtros estarão marcados com a opção **Todos**, de forma que a página inicial apresenta a quantidade total de anúncios existentes.

## Visualizar informações dos anúncios

No topo da página **Gerenciamento de anúncios**, há uma apresentação geral dos anúncios do seller, com as seguintes informações:

- Número total de anúncios criados.
- Porcentagem de anúncios efetivamente sincronizados.

![IMAGEM 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Offer%20management/gerenciamento-de-anuncios_5.png)

Além disso, existe uma barra colorida na qual é possível identificar o número de anúncios em cada um dos três status: 

- `Sincronizado`: cor verde.
- `Enviando`: cor cinza.
- `Com erro`: cor vermelha.

Na lista de anúncios, existem colunas com as seguintes informações:

| **Coluna** | **Descrição** |
| ---------- | ---------- |
| Anúncio | Apresenta a imagem do SKU, o título do anúncio no canal de venda, o ID do SKU na VTEX e o ID do anúncio (código gerado automaticamente que identifica o anúncio na VTEX). |
| Canal | Canal de venda para onde o anúncio foi enviado. |
| Preço | Preço do SKU do anúncio. |
| Estoque | Quantidade de itens em [estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) para o SKU do anúncio. |
| Status| Situação de sincronização do anúncio, que pode ser `Sincronizado`, `Enviando` ou `Erro`. |

É possível clicar sobre os nomes das colunas para ordenar os anúncios de forma crescente ou decrescente. Por exemplo, ao clicar sobre a coluna **Preço**, é possível ordenar a lista pelo menor preço do anúncio ou pelo maior.

## Exportar lista de anúncios

Para exportar a lista de anúncios em formato XLSX, clique sobre o <i class="fas fa-arrow-to-bottom"></i> ícone seta para baixo, localizado no topo da interface. O arquivo será enviado para o email do usuário logado, sendo que o tempo da exportação vai depender do volume de anúncios da listagem exportada e questões de processamento da plataforma VTEX.

>ℹ️ O conteúdo exportado é referente ao total de anúncios da listagem no momento da exportação. Se algum filtro estiver ativo, somente os anúncios selecionados serão exportados.

## Consultar anúncios indisponíveis

Anúncios indisponíveis são SKUs e produtos que estão inativos no seu catálogo ou foram retirados da [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) utilizada no canal de venda. No topo direito da página **Gerenciamento de anúncios**, você pode acessar a página **Anúncios indisponíveis**, clicando sobre `Anúncios indisponíveis`.

A página **Anúncios indisponíveis** contém uma lista de anúncios inativos e apresenta as seguintes informações:

- **Anúncio:** apresenta a imagem do SKU, o título do anúncio e o ID do SKU na VTEX.
- **Canal:** canal de venda para o qual o anúncio foi enviado.
- **Data de cancelamento do envio:** data na qual o SKU se tornou indisponível. Ao clicar no ícone seta, o usuário é redirecionado para a página de [detalhes da interação](https://help.vtex.com/pt/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf).
- **Produto:** link para a página do SKU no [catálogo](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ) da sua loja VTEX, onde é possível [ativar o SKU](https://help.vtex.com/pt/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY) ou incluí-lo na política comercial utilizada na integração com o canal de venda.

Na página **Anúncios Indisponíveis**, você pode pesquisar anúncios pela barra de busca, utilizando nome, ID do SKU ou EAN; e filtrar anúncios por canal, categoria ou marca.

## Saiba mais

- [Gerenciamento de anúncios: detalhes do anúncio](https://help.vtex.com/pt/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P)
- [Gerenciamento de anúncios: detalhes da interação](https://help.vtex.com/pt/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf)
- [Gerenciamento de anúncios: oportunidades de Buybox](https://help.vtex.com/pt/tutorial/anuncios-enviados-oportunidades-de-buybox-beta--1hO9eI1th47EGxQoTzGewC)
