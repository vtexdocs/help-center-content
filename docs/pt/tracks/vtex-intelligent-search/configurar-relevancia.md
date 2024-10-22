---
title: 'Configurar Relevância'
id: 3nVgV8UuUJYXwV0o2tgZ9g
status: ARCHIVED
createdAt: 2020-04-14T13:41:42.485Z
updatedAt: 2023-03-24T14:44:48.404Z
publishedAt: 
firstPublishedAt: 2020-04-15T00:09:42.774Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: configuring-the-relevance-feature
locale: pt
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugPT: vtex-intelligent-search
---

A Relevância pode ser alterada na página __Configuração de relevância__, no módulo de __Busca__ no Admin VTEX.

Há duas áreas de configuração dessa funcionalidade: __Critérios prioritários__ e __Composição de critérios__. Por padrão, inicialmente, todos os critérios estarão em __Composição de critérios__, com os pesos distribuídos da seguinte forma:

<b>Critérios prioritários:</b>
<ul>
  <li>Vazio</li>
</ul>
<b>Composição de critérios:</b>
<ul>
  <li><b>Desconto (de /por):</b> 5</li>
  <li><b>Disponibilidade de grade:</b> 0</li>
  <li><b>Lançamento:</b> 5</li>
  <li><b>Mais vendidos:</b> 7</li>
  <li><b>Mais vendidos por receita:</b> 0</li>
  <li><b>Popularidade:</b> 9</li>
  <li><b>Promoção:</b> 5</li>
  <li><b>Score do Catálogo:</b> 3</li>
</ul>

![default priority criteria PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/vtex-intelligent-search/configurar-relevancia_1.png)

Para alterar a configuração de Relevância, siga os passos abaixo.

1. No Admin, clique no módulo de __Busca__, em __Configurações da Loja__.
2. Clique em __Configuração de relevância__.
3. Escolha o critério cujo peso você deseja alterar.
4. Arraste o indicador para o número desejado, utilizando o cursor, conforme demonstrado na imagem abaixo.
  ![composicao-criterios-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/vtex-intelligent-search/configurar-relevancia_2.gif)
  Caso você queira mudar a posição de um critério de __Composição de critérios__ para __Critérios prioritários__, basta arrastá-lo pelo ícone <i class="fas fa-bars"></i> para a área superior, conforme demonstrado abaixo. Note que quando o critério se torna prioritário, não é mais possível alterar seu peso.
  ![criterios-prioritarios-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/vtex-intelligent-search/configurar-relevancia_3.gif)
5. Para finalizar, clique em __Salvar__.
