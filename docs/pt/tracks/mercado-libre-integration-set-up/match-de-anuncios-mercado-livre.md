---
title: 'Match de anúncios Mercado Livre'
id: 43uD4LPU5PLUWe11IaWwyR
status: CHANGED
createdAt: 2024-09-09T15:11:51.966Z
updatedAt: 2024-09-26T13:45:03.913Z
publishedAt: 2024-09-26T13:38:29.627Z
firstPublishedAt: 2024-09-09T15:16:41.777Z
contentType: trackArticle
productTeam: Channels
slugEN: match-offers-mercado-livre
locale: pt
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugPT: configurar-integracao-do-mercado-livre
---

Antes de iniciar a leitura do artigo, é importante a leitura da tabela abaixo para compreendimento de alguns termos de uso específico da funcionalidade **Match de anúncios Mercado Livre.**

| **Termo**|**Significado** |
|:-----:|:-----:|
|**Anúncios**| Um anúncio é um [SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) de um seller que foi enviado para um marketplace e teve seu preço e estoque configurados.|
| **Catálogo Mercado Livre** | Oferta pré-existente no Mercado Livre, onde o seller tem espaço para vincular seu produto e melhorar a visibilidade de seus produtos.|
|**Oportunidades**| Oportunidade é quando um produto do seller pode ser associado a um produto do catálogo Mercado Livre. O objetivo da oportunidade é fornecer ao seller uma ferramenta que possa fazer essa associação entre os produtos.|

Ao realizar a integração com o Mercado Livre, o seller envia para o marketplace os anúncios que deseja vender na plataforma. Com os anúncios enviados, o Mercado Livre oferece ao seller oportunidades de match com anúncios do tipo **catálogo,** que é quando um anúncio pode estar em um espaço de destaque no marketplace.

Nesse artigo você pode explorar os seguintes tópicos:

- [**Estrutura da página**](#estrutura-da-pagina)  
- [**Tipos de oportunidades**](#tipos-de-oportunidades)  
- [**Analisar oportunidade**](#analisar-oportunidade)  

![overview-match-meli-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/mercado-libre-integration-set-up/match-de-anuncios-mercado-livre_1.png)

## Estrutura da página
A página **Match de anúncios Mercado Livre** é composta por duas abas, [Oportunidades](#aba-oportunidades) e [catálogos ativos](#aba-anuncios-vinculados). Veja a seguir quais as informações e dados disponíveis em cada uma.

### Aba Oportunidades

Nessa aba, o seller visualiza uma lista dos anúncios elegíveis para o catálogo Mercado Livre, filtra as oportunidades por tipo e por canal de venda, caso utilize a integração **Mercado Livre Classic** e **Mercado Livre Premium,** também é possível buscar as oportunidades digitando o nome do produto ou o **SKU ID** na barra de busca.

Cada linha da lista, representa um anúncio e cada linha é composta pelas seguintes informações dispostas em coluna:

- **Caixa de seleção:** caixa utilizada para selecionar os anúncios desejados e realizar a ação de ` Aceitar sugestão`.  
- **Seu anúncio:** produto do catálogo VTEX configurado pelo seller e enviado ao marketplace.  
- **Sugestão de catálogo:** produto do catálogo sugerido pelo Mercado Livre.
- **Oportunidade:** tipo de ação indicada pelo Mercado Livre para o anúncio do seller.  
- **Analisar oportunidade:**  botão que leva o seller à página para [analisar oportunidade](#analisar-oportunidade).

>ℹ️ Os produtos disponíveis na aba **Oportunidades**, aparecerão como **erro** no menu Pedidos, até que o match de produtos seja realizado.  

### Aba Catálogos ativos

Nessa aba, o seller visualiza uma lista dos anúncios já vinculados ao catálogo Mercado Livre, filtra os anúncios pelo status da relevância e pesquisa os anúncios pelo nome do produto ou pelo **SKU ID.**  
Na lista dos catálogos ativos, cada linha representa um anúncio e cada linha é composta pelas seguintes informações dispostas em colunas:

- **Anúncio:** apresenta o nome e especificações do produto.  
- **SKU ID:** SKU ID do produto.  
- **Status:** qual a relevância daquele anúncio no catálogo Mercado Livre.  
- **Melhorar relevância:** seta na última cocluna da tabela.  

No topo da tela é possível acompanhar quantos dos catálogos ativos estão em cada status de relevância.

![relevancia-anuncio-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/mercado-libre-integration-set-up/match-de-anuncios-mercado-livre_2.png)

<div class=”alert alert-info>
 Os anúncios ganham relevância quando eles oferecem os melhores preços e as melhores condições logísticas.  
</div>

A relevância de um anúncio mostra se a oferta do seller aparece como a primeira no anúncio do catálogo no marketplace ou se ele não é a primeira oferta. Os possíveis status para uma oferta são:

- **Ganhando relevância:** quando o anúncio do seller está em primeiro lugar ou empatado em primeiro.  
- **Perdendo relevância:** quando o anúncio do seller não está em primeiro lugar na busca por aquele produto.  
- **Processando relevância:** quando as informações do anúncio estão sendo avaliadas pelo Mercado Livre.  

## Tipos de oportunidades

Quatro tipos de oportunidades podem ser disponibilizadas para os anúncios de um seller, **Aviso prévio, Obrigatório**, **Opcional** e **Restrito.** Em todas as oportunidades listadas pelo Mercado Livre, o seller precisa vincular o produto a um anúncio e caso não tenha correspondência do anúncio do seller com uma oferta de catálogo, é possível publicar o anúncio sem sugestão clicando no botão `Publicar sem sugestão`.

- **Aviso prévio:**  as oportunidades desse tipo são de caráter obrigatório e têm um prazo para serem vinculadas, ou seja, o seller precisa vincular o produto a uma oferta do catálogo Mercado Livre. Caso a vinculação não seja realizada no prazo determinado pelo Mercado Livre, o anúncio do seller será moderado pelo marketplace.  
![oportunidade-avisoprevio-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/mercado-libre-integration-set-up/match-de-anuncios-mercado-livre_3.png)

- **Obrigatória:** as oportunidades desse tipo são de caráter obrigatório, mas não têm um prazo para serem vinculadas, mas caso o anúncio não seja vinculado, o Mercado Livre poderá moderar o anúncio do seller no marketplace.  

![oportunidade-obrigatoria-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/mercado-libre-integration-set-up/match-de-anuncios-mercado-livre_4.png)

- **Opcional:** as oportunidades desse tipo não são de caráter obrigatório. Caso a vinculação não seja realizada, o anúncio do seller não perde relevância e nem é bloqueado pelo marketplace.  

![oportunidade-opcional-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/mercado-libre-integration-set-up/match-de-anuncios-mercado-livre_5.png)  

**Restrito:** as oportunidades desse tipo são obrigatórias. Caso a vinculação não seja realizada, o anúncio do seller não será publicado no Mercado Livre.  

![restrito-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/mercado-libre-integration-set-up/match-de-anuncios-mercado-livre_6.png)  

## Analisar oportunidade

Na aba **Oportunidades** é possível analisar e vincular as oportunidades, independente de seu tipo. As vinculações podem ser realizadas [individualmente](#vinculacao-individual) ou em [massa](#vinculacao-em-massa).

Para analisar uma oportunidade, o seller utiliza a página **Match de anúncios**, que pode ser acessada em **Admin VTEX > Marketplace > Mercado Livre > Match de anúncios,** ou digitar **Match de anúncios** na barra de busca do Admin VTEX.

A tela **Analisar oportunidade,** aparecerá quando o seller clicar no botão **`Analisar oportunidade`** em um dos anúncios disponíveis na aba **Oportunidades.**  
Nessa tela o seller visualizará do lado esquerdo o seu produto cadastrado no catálogo VTEX, do lado direito o produto do catálogo Mercado Livre que foi sugerido para vinculação e no topo direito os botões `Publicar sem sugestão` e `Aceitar sugestão`. 

O botão `Publicar sem sugestão` deve ser utilizado para publicar um produto que não tem correspondência com nenhum produto no Mercado Livre.
O botão `Aceitar sugestão`será utilizado para publicar um produto vinculando-o à sugestão do Mercado Livre.

![analisar-oportunidade-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/mercado-libre-integration-set-up/match-de-anuncios-mercado-livre_7.png) 

### Vinculação individual

Para vincular as oportunidades individualmente, após acessar a página **Match de anúncios** siga os seguintes passos:

1. Na oportunidade desejada clique no botão `Analisar oportunidade`.  
2. Confira se os dados do anúncio sugerido pelo Mercado Livre são compatíveis com os dados do seu produto.  
3. Clique no botão `Aceitar sugestão` para anúncios com correspondência ou `Publicar sem sugestão` para anúncios sem correspondência.  
4. Clique no botão `Confirmar`.  

![aceitar-sugestão-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/mercado-libre-integration-set-up/match-de-anuncios-mercado-livre_8.png) 

Após vincular, o anúncio é publicado no catálogo Mercado Livre e enviado para a **Aba catálogos ativos** sob o status de **Processando relevância.**

Caso os produtos não sejam correspondentes, o seller deve buscar um anúncio no catálogo Mercado Livre que seja correspondente ao seu produto para realizar a vinculação.

Para procurar outros anúncios no catálogo Mercado Livre,  o seller deve digitar o nome de seu produto na barra de busca que está abaixo da foto principal do produto na página **`Analisar oportunidade`.** Veja na imagem abaixo:

![buscar-anuncio-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/mercado-libre-integration-set-up/match-de-anuncios-mercado-livre_9.png) 

### Vinculação em massa

Para vincular as oportunidades massivamente, após acessar a página **Match de anúncios** siga os seguintes passos:

1. Selecione as oportunidades que deseja vincular. Um pop-up aparecerá na parte  inferior da tela.
2. Clique no botão **`Aceitar sugestões`.**
3. Clique no botão **`Confirmar`.**

![aceitar-sugestão-bulk-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/mercado-libre-integration-set-up/match-de-anuncios-mercado-livre_10.png)  

Após vincular, o anúncio é publicado no catálogo Mercado Livre e enviado para a **Aba catálogos ativos** sob o status de **Processando relevância.**

