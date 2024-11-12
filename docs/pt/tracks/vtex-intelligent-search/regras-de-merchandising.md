---
title: 'Regras de merchandising'
id: 5tBSYXb9EIdePa0MWTnFd0
status: ARCHIVED
createdAt: 2020-03-05T18:53:37.305Z
updatedAt: 2024-09-06T20:09:38.815Z
publishedAt: 
firstPublishedAt: 2020-03-05T19:58:55.021Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: merchandising-rules
locale: pt
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugPT: vtex-intelligent-search
---

Regras de merchandising é a funcionalidade que manipula resultados dentro da busca. Ela permite oferecer produtos mais relevantes para o cliente e possibilita incluir e excluir produtos pré-selecionados pelo Motor de Busca.

As Regras de merchandising são uma configuração prioritária. Portanto, se você criar uma regra para promover um produto específico, dada uma determinada busca (por exemplo: promover uma camisa específica quando o cliente pesquisar por "camisa"), esse produto aparecerá no topo dos resultados, independentemente das demais [configurações de Relevância](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

É possível determinar regras de merchandising para:

* **Marcas:** é possível configurar que produtos de uma marca apresentam maior relevância que as demais. Quando o cliente pesquisar por “smartphone”, por exemplo, os produtos da marca vão aparecer no início da listagem e os produtos de outras marcas abaixo deles.
* **Produtos:** Outra possibilidade é promover um produto específico. Por exemplo: definir que quando pesquisar “camiseta de corrida”, o produto “Camiseta Running” seja o primeiro resultado apresentado na listagem.

O que define em quais casos aplicar uma regra de merchandising são as Regras de ativação, definidas durante a criação da regra de merchandising. Elas permitem criar condições para identificar os cenários em que o efeito será ativado.

No Admin VTEX, a página **Storefront** > **Intelligent Search** > **Regras de merchandising** permite que você realize as seguintes ações: 

* [Criar regra de merchandising](#criar-regras-de-merchandising)
* [Buscar regra de merchandising](#buscar-regras-de-merchandising)
* [Editar regra de merchandising](#editar-regras-de-merchandising)
* [Excluir regra de merchandising](#excluir-regras-de-merchandising)

![regras-merch-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.PNG)

| Coluna | Descrição |
| - | - |
| __Nome__ | Nome que identifica a regra de merchandising, definido na etapa [Criar regras de merchandising](#criar-regras-de-merchandising). |
| __Data de início__ | Data que define o início da disponibilidade da regra de merchandising. |
| __Data de término__ | Data que define o término da disponibilidade da regra de merchandising. |
| __Tipo__ | Indica o [tipo de edição](#tipos-de-edicao) utilizado na regra de merchandising. |
| __Ativo__ | Opção que ativa ou desativa uma regra de merchandising. |
| __Ações__  <i class="fas fa-ellipsis-v"></i> | Menu com ações de `Editar` ou `Excluir` uma regra de merchandising. |

### Criar regras de merchandising

Para configurar uma regra de merchandising, clique em `+ Adicionar`. Saiba mais sobre todas as informações necessárias para criar uma regra de merchandising nas seções a seguir.

#### Tipos de edição

Existem dois tipos de edição para criar Regras de merchandising: o [Editor manual](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/2FpbarYzsnbg7aZZn3TGF8) e o [Editor visual](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/2ejly01m1w28RsZlCKowEr).

Veja a seguir as funcionalidades de cada editor:

| Funcionalidade | Descrição | Editor manual | Editor visual |
|---|---|---|---|
| Regras de ativação  | Definir condições para a Regra de merchandising ser ativada. | Sim | Sim |
| Regras de customização | Controlar os resultados de busca a partir de condições específicas. | Sim | Não |
| Pré-visualização | Visualizar uma prévia de como os resultados de busca aparecerão para os clientes durante a navegação na loja. | Não | Sim |
| Reordenar resultados de busca | Alterar a ordem dos itens listados como resultados de busca. | Não | Sim |
| Fixar produto nas primeiras posições | Definir que o produto sempre aparecerá nas primeiras posições dos resultados de busca. | Não | Sim |

### Buscar regra de merchandising

Para pesquisar uma regra de merchandising, digite o nome da regra de merchandising na barra de busca.

### Editar regra de merchandising

Você pode editar as informações uma regra de merchandising seguindo os passos abaixo.

1. Clique no menu <i class="fas fa-ellipsis-v"></i> na linha da regra de merchandising e, em seguida, no botão <i class="fas fa-pencil-alt"></i> `Editar`.
2. Altere a informação desejada da regra de merchandising.
3. Clique em `Salvar`.

### Excluir regra de merchandising

Você pode deletar uma regra de merchandising clicando no menu <i class="fas fa-ellipsis-v"></i> na linha da regra der merchandising e, em seguida, no botão <i class="fas fa-trash"></i> `Excluir`.

