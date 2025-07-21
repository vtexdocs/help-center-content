---
title: 'Forçar buscas com termos bloqueados a retornarem resultados'
id: 6OcM3za1tmUIuiua8y40I2
status: PUBLISHED
createdAt: 2018-01-23T19:44:20.011Z
updatedAt: 2025-06-12T20:28:40.485Z
publishedAt: 2025-06-12T20:28:40.485Z
firstPublishedAt: 2018-01-23T20:35:50.068Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: forcing-searches-with-blocked-terms-to-return-results
locale: pt
legacySlug: forcar-buscas-com-termos-bloqueados-a-retornarem-resultados
subcategoryId: 383bZO0kymqpnNf7Z4NdEg
---

<div class = "alert alert-warning">
  <strong>Atenção</strong>: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.
</div>

Para tornar as buscas dos clientes mais precisas, o buscador da VTEX ignora alguns termos que são muito comuns. Alguns exemplos são as palavras "com" e "todo", do português, "that" e "with", do inglês, e "hace" e "uno", do espanhol. [Veja aqui a lista completa de termos bloqueados](/pt/tutorial/por-que-o-buscador-da-vtex-ignora-alguns-termos-buscados).

No entanto, isso às vezes gera dificuldades para a loja.

Digamos, por exemplo, que um dos produtos da sua loja é o jogo "Uno".

A palavra "Uno" é bloqueada pela busca. Então, se um usuário digitar apenas "Uno" no campo de busca da loja, ele não verá nenhum resultado, mesmo que o produto esteja disponível.

Para contornar esse cenário, você pode escolher uma das duas seguintes ações.

## Criar uma pasta no CMS com o nome do termo buscado

O buscador da VTEX retorna vários tipos de resultado, seguindo a ordem de prioridade abaixo:
- Landing page (título da pasta do CMS).
- Marca.
- Departamento.
- Palavra-chave.

Quando o cliente busca pelo título de um produto, o caso é o de palavra-chave, que - embora seja o mais comum - é o de menor prioridade.

Seguindo o exemplo acima, caso o usuário busque apenas "Uno", o site não trará nenhum resultado.

Mas se você __criar uma pasta no CMS__ com o título "Uno", quando esse termo for buscado, antes de procurar uma palavra-chave o sistema buscará e encontrará a pasta que você criou. 

Com isso, o usuário será levado para essa pasta. Só o que você precisa fazer então é apontá-la para o produto desejado.

## Redirecionar URLs de busca para a página do produto

Outra alternativa para forçar que buscas com termos bloqueados retornem resultados relevantes na busca é por meio do __redirect__.

Novamente seguindo nosso exemplo, você pode criar um redirect 301 da URL `{AccountName}.com.br/Uno` para a página do produto.

Sempre que alguém fizer uma busca por "Uno", a URL montada será esta acima, e o usuário será automaticamente levado para a página do produto.
