---
title: 'Como funciona o campo Score?'
id: 1BUZC0mBYEEIUgeQYAKcae
status: PUBLISHED
createdAt: 2018-02-16T16:17:51.610Z
updatedAt: 2024-01-05T20:42:03.525Z
publishedAt: 2024-01-05T20:42:03.525Z
firstPublishedAt: 2018-02-16T18:09:11.291Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-does-the-score-field-work
locale: pt
legacySlug: como-funciona-o-campo-score
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

O campo **Score**, disponível nos formulários de cadastro de **Produto**, **Categoria** e **Marca**, é um valor utilizado para ordenar produtos na loja. Essa pontuação serve como critério de desempate para outras ordenações comuns, como menor preço, melhor desconto, entre outras. Ao preencher o campo **Score**, é possível definir a prioridade de alguns produtos em relação a outros, tanto na vitrine quanto na página de resultado de busca.

O critério para enumerar o campo segue uma ordenação numérica para apresentar a sequência na vitrine da loja ou na página de resultado de busca. Por padrão, produtos sem um score cadastrado se comportam como se tivessem score igual a 0.

O score total de um produto é a soma do seu próprio score, mais os scores definidos para a categoria e para a marca: `score total do produto = score do produto + score da categoria + score da marca`.

Recomendamos definir o score a nível de produto, já que o mais comum é que sua vitrine esteja sempre em constante mudança.

Um exemplo para o uso do score pode ser em eventos pontuais, quando sua loja precisa colocar produtos específicos na frente de outros para que a visualização seja garantida.

## Score na busca VTEX

Se a loja utiliza a [busca VTEX](https://help.vtex.com/pt/tutorial/como-funciona-a-busca-da-vtex--tutorials_542), é possível utilizar os parâmetros abaixo para implementar a ordenação por score:

* **Ordem ascendente** (produtos com score mais baixo aparecem primeiro): `?O=OrderByScoreASC`
* **Ordem descendente** (produtos com score mais alto aparecem primeiro): `?O=OrderByScoreDESC`

## Score no VTEX Intelligent Search

Os parâmetros `OrderByScoreASC` e `OrderByScoreDESC` não são suportados pelo [VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb), apenas pela [busca VTEX](https://help.vtex.com/pt/tutorial/como-funciona-a-busca-da-vtex--tutorials_542).

O [VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb) não permite uma ordenação direta dos produtos pela pontuação definida no campo **Score**. Ao utilizar um desses parâmetros no VTEX Intelligent Search, ocorre a ordenação padrão, que é por [relevância](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

Por outro lado, o score do Catálogo consegue compor a [relevância](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS) do Intelligent Search em meio aos outros critérios, sendo possível atribuir um peso maior a ele ou até torná-lo prioritário. Para essa finalidade de compor relevância, quanto maior o score, maior o peso, ou seja, o comportamento é decrescente: produtos com score mais alto são priorizados.

Ignorando a influência de outros critérios, ou mesmo considerando o uso de ordenação prioritária, no VTEX Intelligent Search, os produtos sem nenhum score cadastrado aparecem após os produtos com score cadastrado nos resultados de busca.

É necessário ponderar se essa prática seria adequada ao seu caso de uso em relação a outros critérios calculados automaticamente pelo sistema, como popularidade e vendas. Tornar um critério prioritário sobrepõe todos os outros, inclusive atingindo o mesmo objetivo do `OrderByScore`, ignorando as demais configurações de relevância.

Para realizar a ordenação manual de itens de forma isolada, recomendamos usar [Regras de merchandising](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0), evitando efeitos indesejáveis e respeitando as configurações de relevância.

## Editar o score de um produto

Para adicionar ou alterar um score relacionado a um produto, siga estes passos:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**.
2. Clique em `Adicionar Produto` para criar um novo produto ou clique em `Alterar` no produto que deseja editar.
3. Insira o valor desejado do score no campo **Score (usado para ordenação de busca)**.

![posicao-Score-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
