---
title: 'Mercado Livre: FAQ'
id: 3w4IgSgKZOocGee8cgSWW0
status: PUBLISHED
createdAt: 2019-01-24T20:45:46.512Z
updatedAt: 2023-03-22T20:46:37.753Z
publishedAt: 2023-03-22T20:46:37.753Z
firstPublishedAt: 2019-01-24T22:00:23.608Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: mercado-livre-faq
locale: pt
legacySlug: mercado-livre-faq
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

Este guia tem como objetivo responder as perguntas mais frequentes sobre o Integração com o Mercado Livre. 

- [Anúncios/Produtos](#anunciosprodutos)
  * [Por que não consigo enviar a descrição do meu produto em HTML para o Mercado Livre?](#por-que-nao-consigo-enviar-a-descricao-do-meu-produto-em-html-para-o-mercado-livre)
  * [Por que meu anúncio foi pausado no Mercado Livre?](#por-que-meu-anuncio-foi-pausado-no-mercado-livre)
  * [O que significa esse erro "The attributes [BRAND, MODEL] are required for category MLBXXXX"?](#o-que-significa-esse-erro-the-attributes-brand-model-are-required-for-category-mlbxxxx)
  * [Por que meu anúncio está desativado no Mercado Livre?](#por-que-meu-anuncio-esta-desativado-no-mercado-livre)
  * [Como alterar a imagem de um produto no Mercado Livre?](#como-alterar-a-imagem-de-um-produto-no-mercado-livre)
  * [Por que o título do meu anúncio aparece cortado no Mercado Livre?](#por-que-o-titulo-do-meu-anuncio-aparece-cortado-no-mercado-livre)
  * [Como faço para reenviar informações dos produtos para o Mercado Livre?](#como-faco-para-reenviar-informacoes-dos-produtos-para-o-mercado-livre)
  * [Por que meu produto foi categorizado de forma errada no Mercado Livre?](#por-que-meu-produto-foi-categorizado-de-forma-errada-no-mercado-livre)
  * [Por que o Mercado Livre retorna erros de atributo após o mapeamento?](#por-que-o-mercado-livre-retorna-erros-de-atributo-apos-o-mapeamento)
  * [Como identificar o atributo que está faltando ou que é inválido ?](#como-identificar-o-atributo-que-esta-faltando-ou-que-e-invalido-)
  * [Por que os meus anúncios no Mercado Livre não têm os SKUs agrupados?](#por-que-os-meus-anuncios-no-mercado-livre-nao-tem-os-skus-agrupados)
  * [Por que as especificações/atributos dos meus SKUs não são enviadas para o Mercado Livre?](#por-que-as-especificacoesatributos-dos-meus-skus-nao-sao-enviadas-para-o-mercado-livre)
  * [Como apagar um anúncio no Mercado Livre?](#como-apagar-um-anuncio-no-mercado-livre)
  * [Como reenviar um anúncio para o Mercado Livre?](#como-reenviar-um-anuncio-para-o-mercado-livre)
  * [Por que não consigo atualizar as informações do meu produto no Mercado Livre?](#por-que-nao-consigo-atualizar-as-informacoes-do-meu-produto-no-mercado-livre)
  * [Entendendo os erros do Bridge](#entendendo-os-erros-do-bridge)
- [Logística](#logistica)
  * [Por que meu pedido com "Entrega a combinar" não foi integrado no Bridge?](#por-que-meu-pedido-com-entrega-a-combinar-nao-foi-integrado-no-bridge)
  * [Por que meu pedidos estão caindo na tabela de contingência em vez do frete VTEX?](#por-que-meu-pedidos-estao-caindo-na-tabela-de-contingencia-em-vez-do-frete-vtex)
- [Configurações](#configuracoes)
  * [Por que meus pedidos não integram com o Mercado Livre?](#por-que-meus-pedidos-nao-integram-com-o-mercado-livre)

## Anúncios/Produtos

### Por que não consigo enviar a descrição do meu produto em HTML para o Mercado Livre?

Existem três formas de enviar a descrição do seu produto para o Mercado Livre, são elas:

- Preencher o campo **Descrição do produto**
- Criar uma especificação de produto
- Criar template na Central de Mensagens (opcional)

>ℹ️ Leia o artigo do Mercado Livre [“Como descrever os seus produtos”](https://www.mercadolivre.com.br/ajuda/completar_informacao_dos_seus_produtos_3147) para dicas de como descrever seus produtos.

#### Preencher o campo Descrição do produto

Acesse no Admin VTEX *PRODUTOS > Catálogo > Produtos e SKUs* e clique no botão `Alterar`. Depois, preencha o campo **Descrição do produto** com a descrição que desejar para o seu produto.

Ou você pode utilizar a rota [PUT Update Product](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-product) e preencher o campo **Description** com a descrição que desejar para o seu produto.

#### Criar uma especificação de produto

[Crie uma especificação de produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) chamada `plaintext_description_meli` e preencha com a descrição que desejar que desejar para o seu produto.

Ou você pode utilizar a rota [POST Create Specification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-post-specification) e preencher o campo **Name** com `plaintext_description_meli` e o campo **Description** com a descrição que desejar para o seu produto.

#### Criar template na Central de Mensagens (opcional)

A [Central de Mensagens](https://help.vtex.com/pt/tutorial/conhecendo-o-message-center--tutorials_84) é um módulo responsável por configurar e enviar e-mails na VTEX através de um template de mensagens. A vantagem de criar um template para descrição dos seus produtos, é que se sua loja anunciar muitos produtos no Mercado Livre, eles terão uma descrição padrão e personalizada para todos eles.

Antes de criar o template, é necessário [preencher o campo Descrição do anúncio](#preencher-o-campo-descrição-do-produto). Ele será importante para criar uma descrição exclusiva para o seu produto. Depois de preencher o campo, acesse o Admin VTEX em *CLIENTE > Central de mensagens > Templates* e busque pelo card **Bridge - Integração Mercado Livre**.

Ao abrir o template, você deverá preencher o **campo HTML** utilizando a linguagem HTML com para definir o formato da descrição que deseja. Uma vez que você cria um template de descrição, todos os seus produtos anunciados no Mercado Livre terão o mesmo formato de descrição.

Não é necessário preencher os campos relacionados ao e-mail, somente o **campo HTML**. Recomendamos que você crie uma descrição padrão para seus produtos. A descrição preenchida no campo `Descrição do produto` será utilizada dentro do **campo HTML**.

Veja um exemplo de template para a descrição de seus produtos. Os valores entre `[ ]` devem ser substituídos pela descrição que você escolher.

```
[Loja do Gustavo] < br> 
[Entrega em todo o Brasil] 
[Direto da fábrica]
{{TÍTULO}} < br>
{{DESCRIÇÃO}}

< br> [DÚVIDAS FREQUENTES]< br>
< br> [O PRODUTO É NOVO?] < br>
< br> [Sim, todos os nossos produtos são novos.] < br>
```

Os campos `{{TÍTULO}}` e `{{DESCRIÇÃO}}` utilizarão as informações do produto preenchidas nos campos **Nome** e **Descrição** do  produto em Admin VTEX *PRODUTOS > Catálogo > Produtos e SKUs*.

A descrição personalizada do seu anúncio no Mercado Livre será exibida no seguinte formato:

`Loja do Gustavo

Entrega em todo o Brasil

Direto da fábrica

{{TÍTULO}}

{{DESCRIÇÃO}}

DÚVIDAS FREQUENTES

O PRODUTO É NOVO ?
Sim, todos os nossos produtos são novos.`

### Por que meu anúncio foi pausado no Mercado Livre?

A pausa no anúncio do Mercado Livre pode ter ocorrido por dois motivos:

#### 1. Quando o produto é removido da política comercial vinculada ao Mercado Livre ou inativado, o anúncio será pausado.

Para realizar a integração com o Mercado Livre é definir uma política comercial, ou seja, estabelecer uma diferenciação de catálogo e/ou logística entre os diferentes canais de venda de uma loja. [Leia mais](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/15NZiQstCET8zyQUIa7nhw)

#### 2. Quando o produto atinge o estoque mínimo cadastrado, o anúncio será pausado. O valor desse estoque mínimo é definido no painel de configuração do Mercado Livre no Bridge da VTEX.

Ao cadastrar um produto, é necessário estabelecer uma quantidade mínima para o estoque daquele item. Quando o número de produtos atinge o teto estabelecido, o anúncio é pausado do Mercado Livre. O valor desse estoque mínimo é definido no painel de configuração do Mercado Livre da VTEX.

### O que significa esse erro "The attributes [BRAND, MODEL] are required for category MLBXXXX"?

A categoria em questão exige o mapeamento de marca e modelo. Essas informações devem estar presentes na planilha de mapeamento. Formato de exemplo:

![mercadolivre faq erro](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integrations overview/mercado-livre-faq_1.JPG)

### Por que meu anúncio está desativado no Mercado Livre?

A VTEX não desativa anúncios no Mercado Livre, somente os pausamos. 

### Como alterar a imagem de um produto no Mercado Livre?

O envio das imagens de um produto ocorre apenas uma vez, quando o anúncio é criado no Mercado Livre. Portanto, se o produto tiver sua imagem alterada na VTEX após ter sido integrado com Mercado Livre, esta informação não será atualizada.

Um possível workaround é excluir o anúncio no Mercado Livre e enviar as informações do produto novamente para o Mercado Livre, reindexando o produto na VTEX. No entanto, ao realizar esta ação, você deve saber que todo o histórico deste anúncio será excluído no Mercado Livre. Será criado um novo anúncio, sem nenhuma relação com as informações do anúncio anterior.

### Por que o título do meu anúncio aparece cortado no Mercado Livre?

O Mercado Livre possui uma limitação de 60 caracteres no nome do anúncio. Portanto, quando escolher o formato do Título do anúncio no painel de configuração do Mercado Livre no Bridge da VTEX, fique atento a esta restrição.

### Como faço para reenviar informações dos produtos para o Mercado Livre?

Pela regra do Mercado Livre, não é possível reenviar informações dos produtos depois que eles foram anunciados e vendidos. Será necessário excluir o anúncio do produto e alterar as informações desejadas.

Caso o produto não tenha sido vendido ainda, será possível fazer alterações. Se a alteração for no valor da variação/atributo, essa mudança deve ser realizada na [página de mapeamento](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA). Se a alteração for no valor da especificação do produto, leia nosso artigo [Cadastrar especificações de produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin).

>⚠️ Após excluir um produto, não é possível recuperar a relevância do seu anúncio.

### Por que meu produto foi categorizado de forma errada no Mercado Livre?

Erro de categorização está relacionado ao nome e o preço do produto. Para a categorização correta dos seus seus produtos é necessário fazer [upload da planilha de mapeamento](https://assets.ctfassets.net/alneenqid6w5/qyDp7OSL5YAGaGKagWiK0/07900f41a952a460185e18f9db190eb1/Planilha_de_Mapeamento_do_Mercado_Livre.xlsx). Essa planilha será utilizada nas etapas de categorização, variação e atributos do seu produto. Para saber mais consulte este [artigo](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA#categorizacao).

### Por que o Mercado Livre retorna erros de atributo após o mapeamento?

Cada categoria de produto no Mercado Livre exige atributos diferentes. Por exemplo, para um calçado de adulto, pode ser necessário indicar na planilha de mapeamento os códigos dos atributos **Cor principal** e **Tamanho de calçado para adulto**.

Por outro lado, para cada uma dessas categorias de produto, alguns atributos não são aceitos. Para o mesmo calçado de adulto, por exemplo, não pode ser atribuído um código referente a **Tamanho de cinto**.

A VTEX não consegue indicar exatamente quais atributos têm que ser preenchidos para cada categoria, uma vez que esse é um critério interno ao Mercado Livre.

No entanto, esses atributos são bastante claros (Cor principal, Cor secundária, Tamanho de calçado para adulto, Tamanho de cinto, Tamanho de roupa para bebês etc.) Devem ser escolhidos os atributos pertinentes a cada produto.

Se algum desses atributos for preenchido incorretamente (por exemplo, se você atribuiu um código referente a Tamanho de cinto para um calçado), o Integrações vai retornar um erro com o seguinte formato:

![mercadolivre faq erro2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integrations overview/mercado-livre-faq_2.JPG)

Neste caso, temos dois exemplos de erros na mesma mensagem.

O primeiro deles indica que o atributo cujo código se inicia com o número `113000` é necessário para a categoria escolhida e não foi inserido na planilha de mapeamento. Veja a planilha abaixo:

![mercadolivre faq erro3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integrations overview/mercado-livre-faq_3.JPG)

O segundo erro indica que o atributo cujo código se inicia com o número `63000`, inserido na última coluna da planilha acima, é inválido para a categoria escolhida.

### Como identificar o atributo que está faltando ou que é inválido ?

Os códigos de cada variação de atributo se iniciam com o mesmo número. Por exemplo, todos os códigos referentes a **Cor principal** começam com 33000 e correspondem ao seguinte formato: 33000_Amarelo_52007. Já os códigos referentes a **Cor secundária** se iniciam com 43000. Exemplos: `43000_Azul claro_52093` e `43000_Rosa_52058`.

Para identificar o atributo indicado na mensagem de erro, consulte o número inicial dos códigos determinados pelo Mercado Livre. Clique no nome do seu país para fazer o download da planilha de referência:

1. [Brasil](https://assets.contentful.com/alneenqid6w5/22NlNdUIBK8qWic8cYw2sg/11c88bb0b439c7c7f8ce5909923af3d6/Brasil.zip)
2. [Argentina](https://assets.contentful.com/alneenqid6w5/3c61gJrH7GWOywMCGMECg4/dc7a2ce73a99d41345dde2092eb1fec6/Argentina.rar)
3. [Colômbia](https://assets.contentful.com/alneenqid6w5/5RePTJoKrYi4qA66WCCYKw/33910300057806b554d566210aa2310a/Colombia.rar)
4. [México](https://assets.contentful.com/alneenqid6w5/3Z3xgpPyvuYEAIO2me4GSG/e4f4198463d8a3ba05124a30031302fa/Mexico.rar)

### Por que os meus anúncios no Mercado Livre não têm os SKUs agrupados?

Com exceção dos produtos de roupa, calçados e bolsas, a integração cria somente um anúncio por SKU. Com isso, os SKUs não ficam agrupados em apenas um anúncio no Mercado Livre.

### Por que as especificações/atributos dos meus SKUs não são enviadas para o Mercado Livre?

Com exceção dos SKUs de roupa, para enviar as variações e atributos dos SKUs de qualquer categoria é necessário montar a planilha de mapeamento. Para mais informações, leia o artigo [Mapeamento de categorias, variações e atributos do Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA).

### Como apagar um anúncio no Mercado Livre?

A finalização de anúncio deve ser realizada diretamente no Mercado Livre. Caso você não deseje que um produto seja enviado novamente para o Mercado Livre, lembre-se de retirá-lo da política comercial vinculada ao Mercado Livre.

### Como reenviar um anúncio para o Mercado Livre?

Caso um anúncio tenha sido finalizado e você deseje reenviá-lo ao Mercado Livre, basta reindexar o produto desejado na VTEX para que as informações sejam reenviadas para o Mercado Livre.

### Por que não consigo atualizar as informações do meu produto no Mercado Livre?

Neste cenário, é possível que estes produtos que não tenham suas informações atualizadas tenham sido criados diretamente no painel do Mercado Livre. Não recomendamos a criação de produtos diretamente no painel do Mercado Livre. Os produtos criados diretamente no Mercado Livre não terão suas informações atualizadas pela VTEX.

### Entendendo os erros do Bridge

`Items in category ML…. cannot exceeds XX pictures.`

Explicação:
O comportamento da integração é o seguinte:
Existe o elemento principal do anúncio e ele contém as variações (que são os skus na VTEX). Sempre que um produto possui variações, todas as suas imagens são adicionadas nesse elemento principal.

Acontece que cada categoria tem sua especificação de quantidade de imagens que podem ser adicionadas, para o caso da categoria MLA3697 são somente 12 imagens permitidas para esse elemento principal. Veja [aqui](https://api.mercadolibre.com/categories/MLA3697) as condições dessa categoria. 

![mercadolivre faq erro4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integrations overview/mercado-livre-faq_4.JPG)

`Sku não integrado pois o mesmo não possui descrição`

Explicação:

Para os skus novos, ao enviarmos para o Meli a sua descrição o fluxo é:

1. Procurar se ele possui uma especificação de produto chamada `plaintext_description_meli`, se possuir enviamos ela como descrição.
2. Procurar se ele possui um template de Mercado Livre, se possuir enviamos ele como descrição (para garantir que o template está funcional, verificar se ele aparece no preview).
3. Procurar se ele possui uma descrição no catálogo, se possuir enviamos ela como descrição.
4. Caso não possua nenhum dos passos anteriores, logamos o erro no Bridge de "SKU não integrado pois o mesmo não possui descrição."

## Logística 

### Por que meu pedido com "Entrega a combinar" não foi integrado no Bridge?

Não recomendamos a utilização do tipo de entrega Entrega a combinar. Em pedidos fechados com este tipo de entrega, como não temos a informação do endereço de entrega, o pedido não será integrado com a VTEX.

Para que um pedido seja integrado corretamente, é necessário que o pedido tenha as informações de entrega. Assim, recomendamos sempre a utilização do Mercado Envios para os pedidos realizados no Mercado Livre.

### Por que meu pedidos estão caindo na tabela de contingência em vez do frete VTEX?

Ao calcular o frete de um pedido a integração faz uma simulação de fulfillment. Esse retorno demora, geralmente, 200ms. O Mercado Livre possui um limite de tempo de espera de 400ms e se o retorno da simulação ultrapassar esse tempo o frete será através da tabela de contingência. Geralmente, esse tempo é longo quando a operação logística da account é complexa (ex: muitas transportadoras cadastradas).

## Configurações

### Por que meus pedidos não integram com o Mercado Livre?

No caso do Mercado Livre, quando o token de integração é desativado - seja qual for o motivo - os pedidos realizados no marketplace não são enviados para a plataforma da VTEX. Para resolver esse erro será preciso refazer o processo de integração.

Dito isso, o primeiro passo é acessar o cadastro dessa integração:

1. Acesse o módulo __Marketplace__
2. Clique em __Integrações__
3. Procure o __painel__ do Mercado Livre
4. Clique na __engrenagem__ <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/C:/Users/Plugify/Desktop/Workspace/help-center-content/docs/pt/tutorials/Integrations/Integrations overview/mercado-livre-faq_5.png" />
5. Clique em __Editar configuração__

A partir daí, é preciso refazer o processo de integração.

6. Clique no botão __Desativada__ 
7. Clique em __Salvar configuração__

Aguarde cerca de 15 minutos. Em seguida, prossiga:

8. Acesse novamente o __cadastro da integração__. Basta repetir os primeiro cinco passos do tutorial
9. Clique no botão __Ativada__ 
10. Clique em __Salvar configuração__

Feito isso, aguarde mais 15 minutos. Agora começa a etapa mais importante do processo.

11. Acesse o __painel__ do Mercado Livre
12. Faça o __login__ com a conta que deseja integrar
13. Refaça o __[processo de autorizaçao](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4leBEAd22Icm46kGeiGgak "processo de autorização")__
15. __Salve__ as configurações.

Pronto! Desse modo, sua integração voltará a funcionar normalmente dentro de alguns minutos.
