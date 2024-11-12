---
title: 'Configurar política comercial para marketplace'
id: 6mokL50ny8gYK2S4ImOy2w
status: PUBLISHED
createdAt: 2018-08-13T12:08:39.183Z
updatedAt: 2021-02-24T15:53:02.071Z
publishedAt: 2021-02-24T15:53:02.071Z
firstPublishedAt: 2018-08-13T14:29:58.221Z
contentType: trackArticle
productTeam: Channels
slugEN: setting-up-a-marketplace-trade-policy
locale: pt
trackId: 5Yx5IrNa7Y48c6aSC8wu2Y
trackSlugPT: configurar-integracao-da-netshoes
---

O primeiro passo de qualquer integração é definir a política comercial que será usada no marketplace.

Uma das funções da política comercial é fazer uma diferenciação de __catálogo__ e/ou __logística__ entre os diferentes canais de venda da loja. Ou seja, uma nova política comercial só é necessária quando um desses fatores for diferente entre os canais de venda.

![marketplace-v2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Uma única política comercial pode ser compartilhada por mais de um marketplace ou entre loja principal e marketplace. Para isso, basta que se use o mesmo ID de política comercial nas [configurações](/pt/tutorial/integrando-com-marketplace). Fazendo isso, o mesmo catálogo e a mesma logística vão ser usados para as lojas ou canais que estão configurados com a mesma política comercial.

![marketplace-politica-compartilhada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

Em outras palavras, se não houver necessidade de definir um catálogo ou um tipo de logística específicos para canais de venda diferentes, você também não vai precisar usar políticas comerciais separadas. Basta associar à sua integração com o marketplace o ID da política comercial que já existe. 

![marketplace-politica-comercial-principal-e-compartilhada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

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
