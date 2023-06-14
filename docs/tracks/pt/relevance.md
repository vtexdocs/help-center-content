---
title: Relevância
id: 1qlObWIib6KqgrfX1FCOXS
status: PUBLISHED
createdAt: 2020-04-14T13:35:28.989Z
updatedAt: 2023-01-23T13:48:19.938Z
publishedAt: 2023-01-23T13:48:19.938Z
firstPublishedAt: 2020-04-14T23:58:35.468Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: relevancia
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugPT: vtex-intelligent-search
---

As Regras de Relevância são aplicadas nos resultados de busca apenas quando a ordenação dos resultados é feita por relevância na busca da sua loja. Por exemplo, se um cliente selecionar a ordenação dos resultados por preço, as configurações de relevância não terão efeito na ordem dos resultados.

Existem dois cenários possíveis de configurações de relevância:

- **Critérios prioritários:** é a forma de forçar que um ou mais critérios terão prioridade maior entre os demais. Nessa situação não existem pesos, pois todos os produtos que possuírem essa característica serão apresentados primeiro no resultado de busca.
- **Composição de critérios:** é a forma de distribuir pesos para cada opção, variando de 0 a 10. Aqui, não existe uma ordem entre os critérios, serão os pesos que vão definir a relevância.

![regras-relevancia-1-PT](https://images.ctfassets.net/alneenqid6w5/pWaOZBllEtnkrAxc2kEdJ/f6c856ddd8d6f49ed08bdaa921f214ae/Captura_de_Tela_2022-03-25_a__s_15.14.17.png)

As informações aplicadas para compôr a relevância são:

- **Desconto (de / por):** critério que compara o [Preço de lista](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) e o [Preço base](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#definicao) cadastrados para determinar se o produto será classificado com desconto.
- **Lançamento:** esse critério atribui um valor automático decrescente (entre 1 e 0) a partir da data de cadastro do produto na loja, considerando um intervalo de 90 dias. Produtos cadastrados hoje teriam o valor 1 e esse valor vai reduzindo a cada dia, até que, do dia 90 em diante, passa a ser 0. Esse valor é multiplicado pelo peso que você cadastrar para o critério **Lançamento** para compor a relevância.
- **Mais vendidos:** números de pedidos do produto nos últimos 90 dias.
- **Mais vendidos por receita:** lucro total adquirido pelo produto nos últimos 90 dias.
- **Popularidade:** número de cliques de um produto nos últimos 90 dias.
- **Promoção:** critério que verifica se há [Audiências de campanhas](https://help.vtex.com/pt/tutorial/overview-2--tutorials_326#audiencia-de-campanhas) ou [Promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N) vinculadas ao item para determinar se o produto será classificado como promoção.
- **Score do Catálogo:** critério de desempate de ordenações baseado no valor cadastrado no produto. Leia mais sobre o campo no artigo [Como funciona o campo Score?](https://help.vtex.com/pt/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae).
- **Variedade de grade disponível:** A relevância se dá a partir da porcentagem de SKUs disponíveis por produto. Exemplo: Num cenário em que _Produto A_ tem 3 SKus e 3 deles estão disponíveis, e _Produto B_ tem 5 SKUs 2 dele está disponível, o _Produto A_ se sobressai ao _Produto B_ pois a porcentagem de SKUs é maior.

O conjunto de distribuição de pesos e critérios gera uma pontuação para o produto, o que auxilia no seu posicionamento na ordenação do resultado da pesquisa.

<div class="alert alert-warning">
  <p>Caso deseje utilizar critérios prioritários, recomendamos adicionar apenas um critério neste campo. Adicionar mais critérios compromete a ordenação do resultado de busca, visto que apenas o primeiro critério será considerado.</p>
</div>

Dessa forma, é possível adequar o comportamento do resultado de busca a uma estratégia específica. Por exemplo: uma loja de moda recebe novas coleções com frequência. O lojista opta por priorizar peças de lançamento a produtos promocionais. Ele configura a ferramenta da seguinte forma:

**Critérios prioritários:**

- Vazio

**Composição de critérios:**

- Popularidade: 7
- Lançamento: 10
- Mais vendidos: 6
- Mais vendidos por receita: 6
- Promoção: 0
- Desconto (de / por): 0
- Variedade de grade disponível: 10
- Score do Catálogo: 0

Caso esse lojista queira que o lançamento seja sempre a prioridade máxima, ele pode fazer a Regras de Relevância de duas formas:

**Critérios prioritários:**

- Lançamento

**Composição de critérios:**

- Popularidade: 7
- Mais vendidos: 6
- Mais vendidos por receita: 6
- Promoção: 0
- Desconto (de / por): 0
- Variedade de grade disponível: 10
- Score do Catálogo: 0

**Critérios prioritários:**

- Vazio

**Composição de critérios:**

- Popularidade: 0
- Lançamento: 10
- Mais vendidos: 0
- Mais vendidos por receita: 0
- Promoção: 0
- Desconto (de / por): 0
- Variedade de grade disponível: 0
- Score do Catálogo: 0

## Configurar Regra de Relevância

Para alterar a configuração de Relevância, siga os passos abaixo.

1. No Admin, clique no módulo de **Storefront**.
2. Em **Intelligent Search**, clique em **Regras de Relevância**.
3. Escolha o critério cujo peso você deseja alterar.
4. Clique nos ícones <i class="fas fa-minus"></i> ou <i class="fas fa-plus"></i> para definir o número desejado. Caso você queira mudar a posição de um critério de **Composição de critérios** para **Critérios prioritários**, basta arrastá-lo pelo ícone <i class="fas fa-grip-vertical"></i> para a área superior, conforme demonstrado abaixo. Note que quando o critério se torna prioritário, não é mais possível alterar seu peso. 
![regras-relevancia-PT](https://images.ctfassets.net/alneenqid6w5/iZze1vchSYf9lLFJnfwiT/8a533cf40db35b72852fc2c3e1f2b5ec/regras-relevancia-PT.gif)
5. Para finalizar, clique em `Salvar`.

