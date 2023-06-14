---
title: Configurar a categoria global
id: tutorials_188
status: PUBLISHED
createdAt: 2017-04-27T22:16:11.527Z
updatedAt: 2023-03-14T17:22:19.456Z
publishedAt: 2023-03-14T17:22:19.456Z
firstPublishedAt: 2017-04-27T23:00:46.100Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: configurando-a-categoria-global
legacySlug: configurando-a-categoria-global
subcategory: 1E7tziZCkY4w8i4EmUuwec
---

A árvore da categoria global é a taxonomia criada pelo Google para o [Merchant Center](https://support.google.com/merchants/answer/6324436?hl=pt-BR), e que no sistema da VTEX fica pré-definida como uma árvore única.

As mesmas categorias globais estão disponíveis para os produtos de todas as lojas.

<div class="alert alert-info">
Para toda categoria da sua loja, é necessário escolher uma categoria global.
</div>

### Por que usar?

Adotamos essa taxonomia porque ela é amplamente aplicável a qualquer contexto, e portanto auxilia na integração da loja com canais de venda externos.

Ela é usada, por exemplo, como referência para a integração de produtos com Amazon, Buscapé e marketplaces.

<div class="alert alert-info">
O comportamento padrão da nossa integração com o Google Shopping é <strong>não enviar</strong> esta informação. Assim, a maioria das lojas conta com a categorização automática da própria Google. Caso prefira a categorização manual, <a href="https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM" target="_blank">abra um chamado de suporte</a>.
</div>

### Quando ela é aplicada?

A categoria global somente é usada em integrações externas, por exemplo com marketplaces ou demais canais de venda.

### Como escolher uma categoria global?

Um bom mapeamento faz com que os produtos da loja sejam encontrados nos parceiros de forma mais eficaz.

Você sempre deve escolher a categoria global que mais se aproxima dos produtos da categoria em sua loja.

Em geral, quanto mais espefícica ela for, melhor. Isto porque assim seus produtos ficarão nos lugares mais adequados nas integrações externas.

__Exemplo__: se sua loja tem uma categoria "Placas-mãe", o ideal é você escolher para ela a categoria global "Placas-mãe", e não a categoria global "Componentes e placas de circuitos" ou "Eletrônicos".

### Como configurar a categoria global?

No [catálogo da VTEX](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ), a categoria global utilizada segue a [lista de todas as categorias de produtos Google](https://support.google.com/merchants/answer/6324436?hl=pt-BR). Adotamos este padrão por ele se aplicar a inúmeros contextos, o que facilita a categorização de produtos de diversos segmentos em uma só estrutura. 

A definição de uma categoria global é obrigatória. **Sua principal aplicação é na integração de uma loja a canais externos de venda.** Atualmente a VTEX utiliza esse tipo de categoria somente para o conector da integração com a Amazon.

Você sempre deve escolher a categoria global que mais se aproxima dos produtos da categoria da sua loja. Um bom mapeamento faz com que os seus produtos sejam encontrados pelos parceiros de forma eficaz. Quanto mais específica for a categoria, melhor.

**Exemplo:** se sua loja tem uma categoria "Placas-mãe", o ideal é escolher a categoria global "Placas-mãe", e não a categoria global "Componentes e placas de circuitos" ou "Eletrônicos".

O ideal é que uma categoria global seja determinada nas configurações de categoria. Isso permite que todos os produtos de uma categoria pertençam à mesma categoria global. 

<div class="alert alert-danger">
Escolher uma categoria global no cadastro do produto é recomendável somente se ele tiver que ser configurado de forma diferente da categoria na qual está inserido.
</div>

A configuração da categoria global é feita no Admin, e o seu preenchimento é obrigatório. Para configurá-la, siga os passos abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite _____ na barra de busca no topo da página.
2. Clique em __Categorias__.
3. Clique na categoria desejada. Para utilizar a barra de busca para selecionar a categoria, escreva o nome da categoria desejada e clique no botão <i class="fas fa-search"></i>.
4. Clique no botão `Ações`.
5. Clique em `Editar`.
6. No campo __Categoria global VTEX__ clique em `Selecionar Categoria Global VTEX`.
7. Escreva o nome da categoria que deseja encontrar e clique no botão <i class="fas fa-search"></i>. Você pode utilizar a barra de busca para encontrar a categoria desejada.
8. Clique na categoria escolhida, para que ela seja selecionada, e em seguida clique no botão `Salvar`.

<div class="alert alert-info">
A categoria global pode também ser <a href="https://help.vtex.com/pt/tutorial/configuring-xml--tutorials_242">configurada por arquivo XML</a>.
</div>
