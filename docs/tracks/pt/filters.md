---
title: 'Filtros'
id: 50Dh4mpv0Sax0XpbvsjAtP
status: PUBLISHED
createdAt: 2020-03-05T17:44:58.362Z
updatedAt: 2023-05-05T19:32:35.780Z
publishedAt: 2023-05-05T19:32:35.780Z
firstPublishedAt: 2020-03-05T19:54:44.962Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: filtros
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugPT: vtex-intelligent-search
---

Filtros é a funcionalidade que exibe, de forma agrupada, as especificações dos resultados de uma busca. Ela permite que o cliente explore características relevantes de um produto durante a experiência de busca, além de proporcionar cenários que facilitam a tomada de decisão do usuário.

Quando um cliente seleciona um filtro (preço, cor, tamanho e marca), essa informação é utilizada para restringir tanto os itens apresentados no resultado de busca quanto os demais filtros existentes neste contexto de busca.

O **VTEX Intelligent Search** usa o contexto dos produtos apresentados como resultados de busca para saber exatamente quais filtros devem ser exibidos para o cliente, seguindo as configurações do Catálogo.

<div class="alert alert-info">
  <p>A ordenação dos filtros de marca, departamento, categoria e subcategoria é determinada pela quantidade de produtos cadastrados em cada um dos filtros.</p>
</div>

Exemplo: considere que o filtro *Tamanho* está cadastrado no catálogo de uma loja e somente o produto *tênis* possui a especificação *Tamanho* preenchida. Em uma pesquisa pelo termo *tênis*, *Tamanho* vai aparecer como um filtro. Já em uma pesquisa por qualquer outro termo, como *boné*, essa especificação não vai ser exibida como filtro.

O resultado de busca não vai exibir uma especificação quando só existe ela como filtro ou o cliente a tenha acessado pelo menu da loja. Exemplo: se um cliente seleciona o filtro  Eletrodomésticos diretamente do menu, não será exibido Departamentos como um filtro lateral.

<div class="alert alert-info">
  <p>Caso o resultado da busca retorne mais de 30 mil produtos, alguns valores de filtros serão omitidos, uma vez que somente as especificações de uma parte desses produtos serão consideradas.</p>
</div>

A funcionalidade de Filtros apresenta as seguintes funções:

- Pesquisa que possibilita ao cliente buscar um termo dentro de um filtro.
- Configurar e definir a quantidade máxima de opções em um filtro antes de gerar rolagem.
- Configurar qual o layout em que um filtro será exibido. É possível escolher entre os seguintes formatos:
 - Listagem vertical (formato padrão).
 - Listagem horizontal: utilizada para exibir filtros como Tamanho e Cor.
 - Barra deslizante: normalmente utilizada em filtros numéricos, alternando do valor mínimo para o máximo.
 - Conjunto de intervalados: divisão de produtos em agrupamentos de valores a partir da quantidade de itens.
 - Entrada de valores: permite ao cliente informar o valor “De” e “Até” que será usado para filtragem.

<div class="alert alert-warning">
  <p>Apesar de lojas regionalizadas mostrarem apenas produtos disponíveis em uma determinada região na página de listagem de produtos, os filtros não levam em consideração a regionalização. Por conta dessa limitação, é possível que os clientes da loja selecionem valores de filtros que resultam em produtos indisponíveis em sua região.</p>
</div>
