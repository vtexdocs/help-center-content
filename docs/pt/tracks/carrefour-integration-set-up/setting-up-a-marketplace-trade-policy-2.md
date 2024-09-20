---
title: 'Configurar política comercial para marketplace (2)'
id: A7rBLZtfWg2hfOmeB9XAu
status: DRAFT
createdAt: 2021-02-23T20:07:12.548Z
updatedAt: 2021-02-23T20:07:12.548Z
publishedAt: 
firstPublishedAt: 
contentType: trackArticle
productTeam: Channels
slug: configurar-politica-comercial-para-marketplace-2
locale: pt
trackId: 2wYlj07cNuA8k8mmwY86K2
trackSlugPT: configurar-integracao-do-carrefour
---

O primeiro passo de qualquer integração é definir a política comercial que será usada no marketplace.

Uma das funções da política comercial é fazer uma diferenciação de __catálogo__ e/ou __logística__ entre os diferentes canais de venda da loja. Ou seja, uma nova política comercial só é necessária quando um desses fatores for diferente entre os canais de venda.

![marketplace-v2](//images.ctfassets.net/alneenqid6w5/6wy87Eq81O6ksOoq4EsAyG/29f6801d23163b8bef6d6fa30a68b4f1/marketplace-v2.png)

Uma única política comercial pode ser compartilhada por mais de um marketplace ou entre loja principal e marketplace. Para isso, basta que se use o mesmo ID de política comercial nas [configurações](/pt/tutorial/integrando-com-marketplace). Fazendo isso, o mesmo catálogo e a mesma logística vão ser usados para as lojas ou canais que estão configurados com a mesma política comercial.

![marketplace-politica-compartilhada](//images.ctfassets.net/alneenqid6w5/6ur6jWd8hG4wew4GO4YWS6/60624ed33a2b4765c4f8de3d064526f3/marketplace-politica-compartilhada.png)

A partir desse entendimento, avalie se é necessário configurar uma nova política comercial na sua loja. Se a resposta for sim, siga as orientações [deste artigo](https://help.vtex.com/pt/faq/como-contratar-nova-politica-comercial--frequentlyAskedQuestions_700) antes de passar para a próxima etapa de configuração. Caso sua política comercial já atenda às condições que precisa para a integração com o marketplace, siga as próximas instruções.

## Definindo catálogo de produtos

Para definir o catálogo de produtos que vai ser enviado ao marketplace, o lojista deve marcar a flag __Políticas Comerciais__ no cadastro do produto, selecionando as políticas comerciais desejadas. Caso nenhuma política comercial seja selecionada, o produto vai ser considerado para todas elas.

1. Acesse a seção __Catálogo__.
2. Acesse a aba __Produtos e SKUs__.
3. Escolha um produto e clique no botão __Alterar__.
4. Marque a flag __Políticas Comerciais__ para as políticas comerciais escolhidas.
5. Clique em __Salvar__.

>❗ A VTEX não recomenda realizar a gestão de catálogo de produtos para marketplace através de coleções. Esse mecanismo gera muitas complexidades na organização, sendo recomendada a gestão através da flag Políticas Comerciais.

## Definindo a logística

A simulação de frete e atualização de estoques depende de uma prévia configuração da logística que vai atender à política comercial associada ao marketplace. As configurações necessárias são as padrão para a logística da loja. Porém, é na doca que você deve associar a política comercial vinculada ao marketplace.

1. [Crie ou edite uma doca](/pt/tutorial/como-cadastrar-doca) associando à política comercial.
2. Associe uma [transportadora](/pt/tutorial/gerenciar-transportadora) a essa doca.
3. Verifique se existe algum [estoque](/pt/tutorial/gerenciar-estoque) que se associe a essa doca.
