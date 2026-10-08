---
title: 'Publicação de produtos Mercado Livre'
id: 43uD4LPU5PLUWe11IaWwyR
status: PUBLISHED
createdAt: 2024-09-09T15:11:51.966Z
updatedAt: 2026-10-08T19:18:00.000Z
publishedAt: 2024-09-26T13:38:29.627Z
firstPublishedAt: 2024-09-09T15:16:41.777Z
contentType: trackArticle
productTeam: Channels
slugEN: match-offers-mercado-livre
locale: pt
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugEN: configurar-integracao-do-mercado-livre
order: 10
---

Antes de iniciar a leitura deste artigo, confira a tabela abaixo para compreender os termos específicos da funcionalidade **Publicação de produtos Mercado Livre**.

| Termo | Significado |
|-----|-----|
| **Produto** | Um [SKU](/pt/docs/tracks/sku-definicao-de-conceito) de um seller que foi enviado para um marketplace e teve seu preço e estoque configurados. |
| **Sugestão de vínculo do marketplace** | Produto preexistente no catálogo do Mercado Livre, sugerido pelo marketplace, ao qual o seller pode vincular o próprio produto para melhorar a visibilidade. |
| **Vincular oportunidade** | Ação de associar um produto do seller a uma sugestão de vínculo do marketplace. |
| **Método de vínculo** | Indica como a associação entre o produto do seller e a sugestão de vínculo foi criada: **Manual**, quando o próprio seller faz a vinculação, ou **Automático**, quando o Mercado Livre identifica e associa o produto automaticamente. |

Ao realizar a [integração com o Mercado Livre](/pt/docs/tutorials/como-funciona-a-integracao-do-mercado-livre), o seller envia para o marketplace os anúncios que deseja vender na plataforma. Com os anúncios enviados, o Mercado Livre oferece oportunidades de vínculo com produtos do catálogo do marketplace.

Nesse artigo você pode explorar os seguintes tópicos:

- [**Estrutura da página**](#estrutura-da-pagina)
- [**Tipos de oportunidades**](#tipos-de-oportunidades)
- [**Detalhes da oportunidade**](#detalhes-da-oportunidade)
- [**Oportunidade inválida**](#oportunidade-invalida)

Para acessar a página, no Admin VTEX, clique em **Marketplace > Mercado Livre > Publicação de produtos**, ou digite **Publicação de produtos** na barra de busca no topo da página.

## Estrutura da página

A página **Publicação de produtos** é composta por duas abas: [Vincular oportunidades](#vincular-oportunidades) e [Produtos ativos](#produtos-ativos). Veja a seguir quais informações e dados estão disponíveis em cada uma.

### Vincular oportunidades

Nessa aba, o seller visualiza a lista dos anúncios elegíveis para o catálogo do Mercado Livre. É possível filtrar as oportunidades por **Canal** (caso utilize a integração **Mercado Livre Classic** e **Mercado Livre Premium**) e por **Tipo**, além de buscar pelo nome do produto ou pelo **SKU ID** no campo **Buscar SKU ou produto**.

O contador ao lado do nome da aba mostra a quantidade de oportunidades aguardando vínculo.

![Aba Vincular oportunidades](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/canais-de-venda/marketplace/configurar-integracao-do-mercado-livre/match-de-anuncios-mercado-livre_1.png)

Cada linha da lista representa um produto e é composta pelas seguintes informações dispostas em colunas:

- **Caixa de seleção:** caixa utilizada para selecionar os anúncios desejados e realizar a [vinculação em massa](#vinculacao-em-massa).
- **SKU VTEX:** produto do catálogo VTEX configurado pelo seller e enviado ao marketplace.
- **Sugestão de vínculo do marketplace:** produto do catálogo sugerido pelo Mercado Livre.
- **Canal:** integração à qual aquela oportunidade pertence (**Mercado Livre Classic** ou **Mercado Livre Premium**).
- **Tipo:** tipo de ação indicada pelo Mercado Livre para o anúncio do seller. Saiba mais em [Tipos de oportunidades](#tipos-de-oportunidades).

> ℹ️ Os produtos disponíveis na aba **Vincular oportunidades** podem aparecer com erro no menu Pedidos até que o vínculo seja realizado.

### Aba Produtos ativos

Nessa aba, o seller visualiza a lista dos produtos já vinculados ao catálogo do Mercado Livre, filtra os anúncios por **Canal** e pelo **Status** da relevância, e pesquisa os anúncios pelo nome do produto ou pelo **SKU ID**.

Na lista de produtos ativos, cada linha representa um anúncio e é composta pelas seguintes informações dispostas em colunas:

- **Produtos:** apresenta a imagem, o nome e o SKU ID do produto.
- **Método de vínculo:** indica se a associação foi feita de forma **Manual** ou **Automática** pelo Mercado Livre. Ao passar o cursor sobre cada valor, uma tooltip explica a origem do vínculo:
  - **Manual:** vínculo criado manualmente pelo seller, associando a publicação a um produto do catálogo.
  - **Automático:** o vínculo foi criado automaticamente pelo Mercado Livre após identificar que o produto é elegível e corresponde a um produto de catálogo.
- **Canal:** integração à qual aquele produto pertence (**Mercado Livre Classic** ou **Mercado Livre Premium**).
- **Status:** relevância daquele anúncio no catálogo do Mercado Livre.

No topo da tela é possível acompanhar quantos dos produtos ativos estão em cada status de relevância. Os mesmos valores também estão disponíveis no filtro **Status**, que pode ser combinado com o filtro de **Canal**.

A relevância de um anúncio mostra se a oferta do seller aparece como a primeira no anúncio do catálogo no marketplace. Os possíveis status para uma oferta são:

- **Ganhando relevância:** quando o anúncio do seller está em primeiro lugar ou empatado em primeiro.
- **Perdendo relevância:** quando o anúncio do seller não está em primeiro lugar na busca por aquele produto.
- **Processando relevância:** quando as informações do anúncio estão sendo avaliadas pelo Mercado Livre.

> ℹ️ Os anúncios ganham relevância quando oferecem os melhores preços e as melhores condições logísticas.

Ao clicar em um produto da lista, o seller acessa o painel lateral **Status do produto**, que reúne o status de relevância atual do anúncio, com os motivos que impactam esse status, quando aplicável; os detalhes da publicação e o botão `Ver produto no Mercado Livre`, que leva diretamente ao anúncio no marketplace.

## Tipos de oportunidades

Em todas as oportunidades listadas pelo Mercado Livre, o seller precisa vincular o produto a um anúncio. Caso não haja correspondência entre o anúncio do seller e uma oferta de catálogo, é possível publicar o anúncio sem vincular clicando no botão `Publicar sem vincular`. Quatro tipos de oportunidades podem ser disponibilizados para os anúncios de um seller, veja abaixo quais são e o seus significados:

- **Tem prazo:** as oportunidades desse tipo são obrigatórias e têm um prazo para serem vinculadas. O seller precisa vincular o produto a uma oferta do catálogo do Mercado Livre. Caso a vinculação não seja realizada no prazo determinado pelo marketplace, o anúncio poderá ficar sujeito a moderação. O prazo é exibido em um alerta no topo da tela de [detalhes da oportunidade](#detalhes-da-oportunidade).
- **Obrigatório:** as oportunidades desse tipo são obrigatórias, mas não têm um prazo para serem vinculadas. Caso o anúncio não seja vinculado, o Mercado Livre poderá moderar o anúncio do seller no marketplace.
- **Opcional:** as oportunidades desse tipo não são obrigatórias. Caso a vinculação não seja realizada, o anúncio do seller não perde relevância nem é bloqueado pelo marketplace.
- **Restrito:** as oportunidades desse tipo são obrigatórias e o produto só pode ser vendido através do catálogo do Mercado Livre. Caso a vinculação não seja realizada, o anúncio do seller não será publicado no Mercado Livre. Um alerta no topo da tela de detalhes informa essa restrição.

Quando a oportunidade é do tipo **Tem prazo** ou **Restrito**, um alerta é exibido no topo da tela, informando o prazo ou a restrição de publicação, com o link **Saiba mais** para mais informações.

## Detalhes da oportunidade

Na aba **Vincular oportunidades** é possível analisar e vincular as oportunidades, independentemente do tipo. As vinculações podem ser realizadas [individualmente](#vinculacao-individual) ou em [massa](#vinculacao-em-massa).

A tela **Detalhes da oportunidade** aparece quando o seller clica em um dos anúncios disponíveis na aba **Vincular oportunidades**. Nessa tela, o seller visualiza:

- À esquerda, o card **SKU VTEX**, com o produto cadastrado no catálogo VTEX e o botão `Ver SKU`, que leva à página do produto no catálogo.
- No centro, o card **Produto para vincular**, com o produto sugerido pelo Mercado Livre e o atalho para visualizar o anúncio no marketplace.
- À direita, o painel **Produto sugerido pelo Mercado Livre**, com o campo **Buscar outro produto para vincular**, caso a sugestão não corresponda ao SKU do seller.
- No topo direito, os botões `Publicar sem vincular` e `Confirmar e publicar`.

Os atributos do produto, como marca, linha, modelo, cor, voltagem, potência de refrigeração, entre outros são exibidos lado a lado, já preenchidos com os dados de ambos os produtos, para facilitar a conferência da compatibilidade.

### Vinculação individual

Para vincular as oportunidades individualmente, após acessar a página **Publicação de produtos**, siga os seguintes passos:

1. No Admin VTEX, clique em **Marketplace > Mercado Livre > Publicação de produtos**, ou digite **Publicação de produtos** na barra de busca no topo da página.
2. Na oportunidade desejada, clique sobre a linha do anúncio para abrir a tela **Detalhes da oportunidade**.
3. Confira se os dados do anúncio sugerido pelo Mercado Livre são compatíveis com os dados do seu produto.
4. Clique no botão `Confirmar e publicar` para anúncios com correspondência, ou `Publicar sem vincular` para anúncios sem correspondência.
5. Confirme a ação no pop-up exibido clicando no botão `Confirmar`.

Após vincular, o anúncio é publicado no catálogo do Mercado Livre e enviado para a aba **Produtos ativos** com o status **Processando**.

Caso os produtos não sejam correspondentes, o seller deve buscar no catálogo do Mercado Livre um anúncio correspondente ao seu produto para realizar a vinculação. Para isso, digite o nome do produto ou o EAN no campo **Buscar outro produto para vincular**, à direita da tela. Os resultados da busca são paginados.

### Vinculação em massa

Para vincular as oportunidades em massa, após acessar a página **Publicação de produtos**, siga os seguintes passos:

1. No Admin VTEX, clique em **Marketplace > Mercado Livre > Publicação de produtos**, ou digite **Publicação de produtos** na barra de busca no topo da página.
2. Selecione as checkbox <a class="far fa-check-square" aria-hidden="true"></a> das oportunidades que deseja vincular. Uma barra fixa aparece na parte inferior da tela, indicando quantos itens foram selecionados.
3. Clique no botão `Publicar`.
4. Confirme a ação no pop-up exibido clicando no botão `Confirmar`.

Após vincular, os anúncios são publicados no catálogo do Mercado Livre e enviados para a aba **Produtos ativos** com o status **Processando**.

## Oportunidade inválida

Ao acessar a tela de detalhes de uma oportunidade que não está mais disponível, por exemplo, porque já foi publicada por outro caminho ou deixou de ser válida, o seller visualiza o estado **Oportunidade inválida**, com um disclaimer e o botão `Voltar` para retornar à listagem.
