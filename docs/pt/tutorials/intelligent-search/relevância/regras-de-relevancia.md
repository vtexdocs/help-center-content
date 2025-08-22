---
title: 'Regras de relevância'
id: 1o9jtVGjSIiptbqdNXIlNK
status: PUBLISHED
createdAt: 2024-06-27T17:12:27.900Z
updatedAt: 2025-04-17T14:36:26.477Z
publishedAt: 2025-04-17T14:36:26.477Z
firstPublishedAt: 2024-06-27T17:13:52.839Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: relevance-rules
legacySlug: regras-de-relevancia
locale: pt
subcategoryId: 32zXHBMygA2dB6TbCjQJej
---

As **Regras de relevância** definem a ordem em que os produtos são exibidos nos resultados de busca nas páginas de listagem de produtos (PLP). A ordem muda de acordo com os critérios e prioridades configurados.

As Regras de relevância são aplicadas nos resultados de busca apenas quando a ordenação dos resultados é feita por relevância na busca da sua loja. Por exemplo, se um cliente selecionar a ordenação dos resultados por preço, as configurações de relevância não terão efeito na ordem dos resultados.

Existem dois cenários possíveis de configurações de relevância:

- **Critérios prioritários:** é a forma de forçar que um ou mais critérios terão prioridade maior entre os demais. Nessa situação não existem pesos, pois todos os produtos que possuírem essa característica serão apresentados primeiro no resultado de busca.
- **Composição de critérios:** é a forma de distribuir pesos para cada opção, variando de 0 a 10. Aqui, não existe uma ordem entre os critérios, serão os pesos que vão definir a relevância.

![criterios-pt](//images.ctfassets.net/alneenqid6w5/2okH4XcNScAzf6PJIlOKqs/faefb674583084511a114faf0c39cdbd/criterios-pt.png)

As informações aplicadas para compor a relevância são:

- **Desconto:** critério que compara o [Preço de lista](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) e o [Preço base](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#definicao) cadastrados para determinar se o produto será classificado com desconto.
- **Data de lançamento:** esse critério atribui um valor automático decrescente (entre 1 e 0) a partir da [data de lançamento](https://help.vtex.com/pt/tutorial/adicionar-ou-editar-produto--29IkdEu6GofCFlltsZh2H8#frente-de-loja) configurada durante o cadastro do produto, considerando um intervalo de 90 dias. Produtos com a data de lançamento igual a hoje teriam o valor 1 e esse valor vai reduzindo a cada dia, até que, do dia 90 em diante, passa a ser 0. Esse valor é multiplicado pelo peso que você cadastrar para o critério **Data de lançamento** para compor a relevância.
- **Mais vendidos:** números de pedidos do produto nos últimos 90 dias.
- **Mais vendidos por receita:** lucro total adquirido pelo produto nos últimos 90 dias.
- **Popularidade:** número de cliques de um produto nos últimos 90 dias.
- **Promoção:** critério que verifica se há [Audiências de campanhas](https://help.vtex.com/pt/tutorial/overview-2--tutorials_326#audiencia-de-campanhas) ou [Promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N) vinculadas ao item para determinar se o produto será classificado como promoção.
- **Pontuação do catálogo:** critério de desempate de ordenações baseado no valor do campo __Score__ cadastrado no __Catálogo__. Para essa finalidade de compor relevância, quanto maior o score, maior o peso, ou seja, o comportamento é decrescente: produtos com score mais alto são priorizados. Saiba mais sobre o campo e seu comportamento no guia [Como funciona o campo Score?](https://help.vtex.com/pt/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae).
- **Variedade de matriz disponível:** A relevância se dá a partir da porcentagem de SKUs disponíveis por produto. Exemplo: Num cenário em que _Produto A_ tem 3 SKus e 3 deles estão disponíveis, e _Produto B_ tem 5 SKUs 2 dele está disponível, o _Produto A_ se sobressai ao _Produto B_ pois a porcentagem de SKUs é maior.

O conjunto de distribuição de pesos e critérios gera uma pontuação para o produto, o que auxilia no seu posicionamento na ordenação do resultado da pesquisa.

Dessa forma, é possível adequar o comportamento do resultado de busca a uma estratégia específica.

> ⚠️ Se você deseja utilizar critérios prioritários, posicione o mais importante em primeiro lugar, pois a ordenação será sempre aplicada com base nele. O primeiro critério prioritário tem mais peso do que os outros, por isso ele pode neutralizar os demais critérios prioritários e a composição de critérios. Em casos de empate, os demais critérios serão considerados para definir a ordem final dos resultados (primeiro os outros prioritários e depois a composição de critérios).

## Exemplo

Uma loja de moda recebe novas coleções com frequência. O lojista opta por priorizar peças de lançamento a produtos promocionais. Ele configura a ferramenta da seguinte forma:

> **Critérios prioritários:**
> 
> - Vazio
> 
> **Composição de critérios:**
> 
> - Popularidade: 7
> - Data de lançamento: 10
> - Mais vendidos: 6
> - Mais vendidos por receita: 6
> - Promoção: 0
> - Desconto: 0
> - Variedade de matriz disponível: 10
> - Pontuação do catálogo: 0

Caso esse lojista queira que o lançamento seja sempre a prioridade máxima, ele pode fazer as Regras de relevância de duas formas:

> __Forma A:__
> 
> **Critérios prioritários:**
> 
> - Data de lançamento
> 
> **Composição de critérios:**
> 
> - Popularidade: 7
> - Mais vendidos: 6
> - Mais vendidos por receita: 6
> - Promoção: 0
> - Desconto: 0
> - Variedade de matriz disponível: 10
> - Pontuação do catálogo: 0

> __Forma B:__
> 
> **Critérios prioritários:**
> 
> - Vazio
> 
> **Composição de critérios:**
> 
> - Popularidade: 0
> - Data de lançamento: 10
> - Mais vendidos: 0
> - Mais vendidos por receita: 0
> - Promoção: 0
> - Desconto: 0
> - Variedade de matriz disponível: 0
> - Pontuação do catálogo: 0

## Configurar Regra de relevância

Para alterar a configuração de relevância, siga os passos abaixo.

1. No Admin VTEX, clique no módulo de **Storefront** ou digite **Storefront** na barra de busca.
2. Em **Intelligent Search**, clique em **Regras de relevância**.
3. Escolha o critério cujo peso você deseja alterar.
4. Clique nos ícones de seta para baixo <i class="fas fa-chevron-down"></i> ou seta para cima <i class="fas fa-chevron-up"></i> para definir o número desejado.

   Caso você queira mudar a posição de um critério de **Composição de critérios** para **Critérios prioritários**, arraste-o pelo ícone <i class="fas fa-grip-vertical"></i> para a área superior, conforme ilustrado na imagem abaixo. Note que quando o critério se torna prioritário, não é mais possível alterar seu peso. 

    ![criterios-prioritarios-pt](//images.ctfassets.net/alneenqid6w5/c6CNsiZOSl7WnmP7k8Ffa/43155e1e110f6ec8eaff5debf9d8a2df/criterios-prioritarios-pt.gif)
5. Para finalizar, clique em `Salvar`.
