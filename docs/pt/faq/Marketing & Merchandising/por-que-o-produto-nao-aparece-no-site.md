---
title: 'Por que o produto não aparece no site?'
id: frequentlyAskedQuestions_382
status: PUBLISHED
createdAt: 2017-04-27T22:36:11.456Z
updatedAt: 2024-11-04T21:03:12.522Z
publishedAt: 2024-11-04T21:03:12.522Z
firstPublishedAt: 2017-04-27T23:01:46.278Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: why-is-the-product-not-visible-on-the-website
locale: pt
legacySlug: por-que-o-produto-nao-aparece-no-site
---

Para que um produto apareça na vitrine da loja, ele precisa estar disponível para vendas, o que ocorre quando as seguintes configurações são feitas corretamente:

* O [produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1ROhz3Y7mfSMmCO1I1GxEL) e seus [SKUs](/pt/tutorial/o-que-e-um-sku--1K75s4RXAQyOuGUYKMM68u) estão cadastrados no Catálogo.
* O produto tem [preço](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu).
* As configurações de [logística](#logistica) possibilitam o envio do produto para o cliente. Estas configurações incluem [estoque](/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb), [doca](/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj), [política de envio](/pt/tutorial/politica-de-envio--tutorials_140), entre outras.
* Com relação ao [inventário](/pt/tutorial/gerenciar-inventario--tutorials_139), o produto se enquadra em uma das seguintes situações:
    * Existe contagem do produto disponível para vendas (itens [reservados](/pt/tutorial/como-a-reserva-funciona--tutorials_92) não contam como disponíveis).
    * O estoque infinito está configurado para o produto.
    * A opção para exibir o produto quando esgotado está habilitada.
* Os templates de *[Content Management System (CMS)](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC)* da loja estão configurados.

Quando um produto não aparece na vitrine, é necessário ajustar uma ou mais destas configurações. 

O artigo atual explica como investigar erros de indisponibilidade do produto na vitrine e como resolvê-los. As seções foram divididas da seguinte forma:

* [Catálogo](#catalogo)
* [Preços](#precos)
* [Logística](#logistica)
* [CMS](#cms)

<div class="alert alert-warning">
Após ajustar as informações de produto e SKU, ou alterar configurações de logística, é necessário aguardar a indexação do produto. Você pode acompanhar o status por meio da <a href="https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao">fila de indexação</a> do Admin VTEX, em <b>Catálogo > Relatórios > Produtos indexados</b>. Após a conclusão da indexação, recomendamos acessar a página do produto no site da loja usando uma aba anônima do navegador, para visualizar a versão atualizada e sem cache.
</div>

Existem situações nas quais o produto aparece na vitrine, mas se torna indisponível quando adicionado ao carrinho. Diversas configurações da sua logística podem estar envolvidas, saiba mais no artigo [Quais configurações logísticas impactam na disponibilidade do produto no carrinho?](/pt/tutorial/quais-configuracoes-logisticas-impactam-na-disponibilidade-do-produto-no-carrinho--NAyBFToRdvlDyOzeeAeNw).

## Catálogo

Recomendamos iniciar a investigação pelo **Catálogo**. Para verificar as configurações do **Catálogo**, siga as instruções abaixo.

1. Acesse o Admin VTEX e navegue até **Produtos > Catálogo > Produtos e SKUs** para verificar os produtos cadastrados na sua loja.
2. Encontre na listagem o produto que você pretende exibir, conforme ilustrado a seguir.

    ![01-produto-pt](https://images.ctfassets.net/alneenqid6w5/75SkVRup4MW0URypUVayEh/89bf951c58bd80765de8bfb480fd73df/01-produto-pt.png)

3. Siga as instruções descritas nas próximas seções para verificar as seguintes informações:
   - [Produto](#produto)
   - [SKUs](#skus)
   - [Indexed Info](#indexed-info)

### Produto

Para verificar as configurações do produto, é importante seguir os passos abaixo.

1. Em **Produtos > Catálogo > Produtos e SKUs**, clique em `Alterar` ao lado do produto que você deseja verificar.
2. No formulário, verifique as informações descritas abaixo:

   * **Marca:** confira o nome da marca associada ao produto e observe se ela está ativa.
   * **Categoria:** confira o nome da categoria associada ao produto e observe se ela está ativa.

   <div class="alert alert-warning">
      <p>Ao criar um novo produto, é preciso associá-lo a uma marca e uma categoria que estejam ativas para que ele seja ativado pela primeira vez. Porém, uma vez que um produto já existe e já está ativo, desativar a categoria e a marca não vai desativá-lo por completo.</p>
<p>O produto com categoria e marca inativas se torna invisível na loja, ou seja, não aparece na busca e não tem página própria. Para torná-lo indisponível para compra, também é necessário zerar a sua quantidade em estoque.</p>
   </div>
   * **Políticas Comerciais:** veja se o produto está associado a uma [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV). Caso não esteja, use a caixa de seleção para marcar a política comercial em que deseja incluí-lo.
   * **Data de lançamento no mercado:** confira se a data de lançamento no mercado está correta. Se for uma data futura, o produto só será exibido no site na data indicada.
   * **Exibir no site:** verifique se a opção **Sim** está marcada. Caso contrário, o produto não será exibido.
   * **Produto ativo:** verifique se a opção **Sim** está marcada. Caso contrário, o produto não será exibido.
   * **Mostrar produto esgotado:** verifique se a opção **Sim** está marcada – nesse caso, o comportamento esperado é que produtos sem estoque apareçam na loja com o botão [Avise-me](/pt/tutorial/configurar-o-avise-me--2VqVifQuf6Co2KG048Yu6e). Se a opção não estiver marcada, pode ser que o produto não esteja aparecendo na loja por estar indisponível em estoque.
   * Caso o produto contenha especificações, navegue até a aba **Especificações** e verifique se elas estão preenchidas.
3. Após qualquer alteração, clique em `Salvar`.

<figure>
  <img
    class="db center mv9 shadow-4 pointer"
    src="https://images.ctfassets.net/alneenqid6w5/nGAGYNdVtTFdAPjW1mi5f/0651c6f05455a3318423364b9129b8b4/02-campos-produto-pt.png"
    alt="02-campos-produto-pt"
    style={{ marginBottom: '20px' }}
  />
  <figcaption style={{ textAlign: 'center' }}>
    <em>Campos que devem ser verificados na página de informações do produto</em>
  </figcaption>
</figure>

<figure>
  <img
    className="db center mv9 shadow-4 pointer"
    src="https://images.ctfassets.net/alneenqid6w5/6UXDapFf9bvtnCSoHQBwZC/d8a3043e74dfea536e1f47c02a634359/03-aba-especificacoes-pt.png"
    alt="03-aba-especificacoes-pt"
    style={{ marginBottom: '20px' }}
  />
  <figcaption style={{ textAlign: 'center' }}>
    <em>Aba <strong>Especificações</strong></em>
  </figcaption>
</figure>

### SKUs

Na página de SKUs, em **Produtos > Catálogo > Produtos e SKUs**, siga as instruções abaixo para investigar que campo pode estar gerando problemas:

1. Em **Produtos > Catálogo > Produtos e SKUs**, encontre o SKU que você deseja investigar na lista.

    Observe que, nesta página, ao lado de cada SKU, existem atalhos que podem apoiar a investigação:

    |Botão | Descrição |
    |-|-|
    | ![04-botao-precos](https://images.ctfassets.net/alneenqid6w5/7f0NyYsrdO9dRgW2OQb0ND/1343af5f40a6f0a64cdd8378385977c0/04-botao-precos.png) | Permite acessar a **Lista de preços** para verificar se existe um preço válido para a política comercial desejada associado aos SKUs do produto. Confira a seção de [Preços](#precos) para mais informações.|
    | ![05-botao-logistica](https://images.ctfassets.net/alneenqid6w5/4Y2GdsvjxHYkVSBfElhVr9/17742a7ce2632fa9d800d942bb016283/05-botao-logistica.png) | Permite acessar a página **Gerenciar inventário** para verificar se o SKU está disponível em estoque. Confira a seção de [Logística](#logistica) para mais informações. |
    | ![06-botao-indexed-info](https://images.ctfassets.net/alneenqid6w5/5G3dZgdVZDiPqADnodmHc7/e31e69a2333d82a74ca980303e93b690/06-botao-indexed-info.png) | Permite visualizar cada **Seller **que comercializa o SKU, a política comercial (**Policy**), o preço (**Value**) e a quantidade do SKU em estoque (**Quantity**). |

2. Na linha do produto que corresponde ao SKU a ser verificado, clique na seta para baixo <i class="fas fa-caret-down"></i>, ao lado do botão `Alterar`.
3. Clique na opção **Sku** para acessar a lista detalhada de SKUs.
4. Na coluna **Status**, verifique se a situação indicada é `Ativa`. Se os SKUs estiverem ativos, prossiga para o passo 7.
5. Caso algum SKU esteja com situação `Inativa`, clique em `Alterar` para visualizar as informações detalhadas do SKU.

    ![07-catalogo-skus-pt](https://images.ctfassets.net/alneenqid6w5/6hs2pWjN8Mze7A274XRAm3/a1f33a9ce222d960b565f61d47dc1230/07-catalogo-skus-pt.png)

6. Na página de informações do SKU, prossiga para a verificação dos itens listados a seguir:
    * **Ativar o SKU se possível:** verifique se esta opção está marcada. Caso contrário, o SKU não será exibido. Ativar esta opção significa determinar que o SKU será ativado se cumprir os requisitos necessários:
      * Ter marca e categoria associadas e ativas.
      * Ter pelo menos uma imagem associada ao SKU.
      * Ter especificações preenchidas (caso tenha especificações cadastradas).
      * Caso o SKU seja um kit: ter um componente ativo associado.
    * **SKU Ativo?:** verifique se esta opção está marcada. Caso contrário, o SKU não será exibido.
7. Clique na aba **Imagens**.
8. Verifique se o SKU contém pelo menos uma imagem. Se não tiver, o SKU não será ativado – siga o próximo passo para corrigir esse problema.
9. Clique em `Inserir` para fazer upload de uma nova imagem. Se preferir, clique em `Associar a imagens existentes` para incluir uma imagem já utilizada em outro SKU.

<figure>
  <img
    className="db center mv9 shadow-4 pointer"
    src="https://images.ctfassets.net/alneenqid6w5/3StXGBCMW8ZExshcEhfF9m/71839095433fdf925be4cbe97710fb7c/08-aba-imagens-pt.png"
    alt="08-aba-imagens-pt"
    style={{ marginBottom: '20px' }}
  />
  <figcaption style={{ textAlign: 'center' }}>
    <em>Aba <strong>Imagens</strong></em>
  </figcaption>
</figure>

![09-sku-imagens-pt](https://images.ctfassets.net/alneenqid6w5/1JJflflW0ACgVn05sRv29x/ef6a125c561d518d683a942b15b3bf58/09-sku-imagens-pt.png)

### Indexed Info

Para um produto aparecer no site, ele precisa estar [indexado](/pt/tutorial/entendendo-o-funcionamento-da-indexacao/). O indexador do **Catálogo** permite visualizar informações detalhadas sobre a indexação de cada produto e SKU, seguindo os passos abaixo:

1. Em **Produtos > Catálogo > Produtos e SKUs**, encontre o produto que você deseja investigar na lista.
2. Na linha do produto a ser verificado, clique na seta para baixo <i class="fa-solid fa-sort-down"></i> ao lado do botão `Alterar`.
3. Clique na opção **Indexed info** para conferir informações sobre a indexação do produto.

O registro de indexação apresenta o status de cada SKU do produto. Caso exista algum problema, ele indica `Sku is UNAVAILABLE` (o SKU está indisponível) e aponta o motivo do erro.

No exemplo abaixo, é possível concluir que o SKU está indisponível por causa da ausência de itens em estoque:

![10-indexed-info-code](https://images.ctfassets.net/alneenqid6w5/3J8ZK4CikAYOwYh8GAzbWa/6c4b52fbcf0abaf0f53e3b49ca224e15/Group_1__7_.png)

A partir disso, é possível tomar ações para corrigir o problema. No caso do exemplo, seria necessário ajustar a quantidade de itens em estoque no sistema de [Logística](#logistica).

Um SKU ativo e sem erros terá o registro no indexador similar ao ilustrado a seguir:

![11-indexed-info-code-active](https://images.ctfassets.net/alneenqid6w5/3Sd3Ta5gzKo0LY9dMHmCqp/a5c498ba9733244ba7d9c85cd02d801c/11-indexed-info-code-active.png)

<div class="alert alert-info">
<p>Se as informações de indexação não apontarem nenhum motivo para a indisponibilidade dos produtos e se você não tiver encontrado nenhum erro no cadastro dos produtos e dos SKUs, é possível que reindexar o produto resolva o problema.</p>
<p>Para isso, altere algum campo dentro do cadastro do produto ou de um dos seus SKUs e salve suas alterações. Isso forçará a reindexação.</p>
</div>

## Preços

No módulo de **Preços**, é importante verificar se os SKUs do seu produto contêm [preços base](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx) cadastrados:

1. Acesse **Produtos > Preços > Lista de preços**.
2. Verifique a linha de cada SKU e a coluna correspondente ao preço na política comercial desejada.
    * Se houver um preço informado, o problema não está no módulo de **Preços** e você pode pular os próximos passos desta seção.
    * Por outro lado, se a informação exibida for _Preço não cadastrado_, isso significa que você precisa [criar um preço base](#criar-preco-base).

No exemplo ilustrado a seguir, há três SKUs sem preço base cadastrado. Por isso, não há preço computado na coluna da política comercial – aparece apenas a informação _Preço não cadastrado_.

![12-precos-pt](https://images.ctfassets.net/alneenqid6w5/3XrEvLWMmU3LlsxF75v9NN/13794723132a95851a9810320575adcf/12-precos-pt.png)

### Criar preço base

Para criar um preço base no Admin VTEX, siga os passos abaixo:

1. Em **Produtos > Preços > Lista de preços**, clique na linha do SKU desejado, na primeira coluna. Uma barra lateral será exibida.
2. No campo **Preço de custo**, preencha com o custo do SKU.
3. No campo **Markup inicial**, preencha com o percentual de lucro a ser obtido com a venda do SKU.

    O Preço base será calculado automaticamente em função dos dados fornecidos nos passos anteriores.

4. Clique em `X` ou na área fora da barra lateral para salvar o preço.

Também é possível criar preços base por planilha ou pela Pricing API. Para mais informações, confira os passos descritos no artigo [Cadastrar preço base](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29).

## Logística

Diferentes aspectos da [logística](/pt/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) podem estar envolvidos na indisponibilidade do produto na vitrine. O produto pode estar indisponível porque a [estratégia de envio](/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) da loja não permite a entrega para a localidade do cliente, ou porque não existe quantidade suficiente do produto para vendas no [inventário](/pt/tutorial/gerenciar-inventario--tutorials_139).

<div class = "alert alert-info">
Caso o produto apareça como disponível na vitrine, mas se torne indisponível ao ser adicionado no carrinho, veja o artigo <a href="https://help.vtex.com/pt/tutorial/quais-configuracoes-logisticas-impactam-na-disponibilidade-do-produto-no-carrinho--NAyBFToRdvlDyOzeeAeNw">Quais configurações logísticas impactam na disponibilidade do produto no carrinho?</a>.
</div>

### Simulador de envio

Uma forma de testar a existência de uma rota de entrega viável, validar configurações logísticas da loja e conferir o inventário é usando o **Simulador de envio**. 

Para realizar a simulação do envio de um item para uma localidade, acesse o Admin VTEX em **Envio > Simulador de envio**. Você encontra o passo a passo completo no artigo [Simulador de envio](/pt/tutorial/simulador-de-envio--tutorials_144).

<div class="alert alert-warning">
Ao investigar a disponibilidade de um item pelo <b>Simulador de envio</b>, recomendamos que o endereço utilizado seja atendido por todas as suas <a href="https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140">políticas de envio</a>. Se o item não estiver disponível para esta localidade, então não estará para nenhuma outra.
</div>

Quando as configurações de logística relacionadas à [política de envio](/pt/tutorial/politica-de-envio--tutorials_140), [estoque](/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) e [doca](/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) foram feitas corretamente e a política de envio atende a localidade do cliente, o item pode não aparecer na vitrine devido ao seu inventário, como será visto a seguir.

### Inventário

Ao adotar qualquer uma das estratégias a seguir, você mantém a disponibilidade do produto na vitrine com relação ao inventário:

* Garantir a contagem suficiente de itens para vendas (itens [reservados](/pt/tutorial/como-a-reserva-funciona--tutorials_92) não são considerados disponíveis).
    * No Admin VTEX, acesse **Catálogo > Inventário > Gerenciamento de inventário**, altere o valor na coluna *Atualizar contagem* na linha referente ao produto e clique em `Salvar`.
* Habilitar a configuração [estoque infinito](/pt/tutorial/gerenciar-inventario--tutorials_139) para o produto. 
    * No Admin VTEX, acesse **Catálogo > Inventário > Gerenciamento de inventário**, habilite o toggle da coluna *Estoque infinito* na linha referente ao produto e clique em `Salvar`. 
* Configurar o produto para aparecer na vitrine quando esgotado. 
    * No Admin VTEX, acesse **Catálogo > Todos os produtos** e na página de configuração do produto, aba *Produto*, marque a opção `Sim` do campo `Mostrar produto esgotado`.

Se o [estoque futuro](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-/supplyLots/-supplyLotId-) estiver configurado para o SKU, o abastecimento desse item pode levar um tempo a mais que o previsto e, nesse período, a indisponibilidade do produto na vitrine poderia ser devido ao inventário.

<div class="alert alert-warning">
Caso a sua loja tenha <a href="https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex">contas franquia</a>, para que o inventário dessas contas esteja disponível para vendas, os produtos precisam estar vinculados à mesma <a href="https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV">política comercial</a> usada na sua vitrine.
</div>

## CMS

Se o seu produto não aparecer no site mesmo após verificar todas as configurações de **Catálogo**, **Preços **e **Logística**, é importante conferir o [CMS](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC) da sua loja. A seguir, veja como investigar se o [binding](/pt/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W) da sua loja está correto e verifique as configurações específicas para [CMS - Portal Legado](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) e [VTEX IO](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2).

<div class="alert alert-warning">
<p>Para realizar a investigação no CMS descrita a seguir, é necessário solicitar apoio da equipe de desenvolvedores responsável pela sua loja.</p>
</div>

### Binding

Independentemente de qual CMS a sua loja utiliza, seja Portal Legado ou VTEX IO, é necessário confirmar se o [binding](/pt/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W) está configurado, ou seja, se o seu website e sua estrutura de pastas estão associados corretamente à sua conta VTEX. Para isso, siga as instruções a seguir:

1. No Admin VTEX, acesse **CMS > Layout**.
2. Clique na pasta **CMS**.
3. Clique na pasta **Sites and channels**.
4. Confira a cor em que o ícone <i class="fas fa-globe-americas"></i> ao lado do nome do seu website está sendo exibido.

    Se o ícone estiver azul, significa que o binding está correto, nada precisa ser feito.

    Se o ícone estiver amarelo, há um erro no binding. Nesse caso, é necessário seguir os passos do artigo [Website com erro: como ajustar?](/pt/faq/website-com-erro-como-ajustar) para corrigir o erro.

### CMS - Portal Legado

Caso a sua loja utilize o [CMS - Portal Legado](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), é recomendado que os desenvolvedores da sua loja verifiquem se o [controle](/pt/tutorial/lista-de-controles-para-templates--tutorials_563#controles-para-paginas-de-departamento-categoria-e-busca) de resultado da busca de produtos (`<vtex.cmc:searchResult/>`) está sendo utilizado nos [templates](/pt/tutorial/como-criar-um-template-de-pagina--frequentlyAskedQuestions_1850) das páginas de Departamento, Categoria e Busca em **CMS > Layout**, pois a sua ausência faz com que os produtos não sejam exibidos. 

### CMS - VTEX IO

Se a sua loja for desenvolvida no [VTEX IO](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), os desenvolvedores da sua loja precisam verificar as configurações de **Páginas** e os blocos declarados nos templates da loja.

#### Páginas

Em **CMS > Páginas > Páginas**, é importante conferir se a página está utilizando um template personalizado, pois essa seção permite utilizar um template declarado no código com outra URL e nome.

Siga os passos abaixo para verificar o template que a sua página está utilizando:

1. Em **CMS > Páginas > Páginas**, clique no ícone de lápis <i class="fas fa-pencil"></i> na linha da página que você deseja conferir.
2. Desça até a seção **Templates**.
3. Observe o nome do template informado no campo **Padrão** e no campo **Condicional**, se houver.

    No exemplo abaixo, o template padrão utilizado é `vtex.curbside-pickup@0.x:store.curbside-pickup` e não há template condicional.

    ![16-templates-cms-pt](https://images.ctfassets.net/alneenqid6w5/5EMFVK2j0O7l6im1ZJIQQI/eb5a2372a8a1dd70d98b8d32676fd710/16-templates-cms-pt.png)

4. Em seguida, é necessário conferir os blocos declarados no template utilizado, conforme descrito em [Templates](#templates).

#### Templates

Nos arquivos do [tema da sua loja](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-6-buildingyourownstoretheme) desenvolvida em VTEX IO, é necessário verificar os itens a seguir:

* Conferir se a página de produto (`product.jsonc`) está declarada com todos os blocos necessários para o seu funcionamento correto – [`product-images`](https://developers.vtex.com/docs/vtex-store-components-productimages?_ga=2.124137738.1894771692.1651492195-816806259.1637870241), [`product-price`](https://developers.vtex.com/docs/vtex-product-price#product-price), [`product-name`](https://developers.vtex.com/docs/vtex-store-components-productname) e [`buy-button`](https://developers.vtex.com/docs/vtex-store-components-buybutton) – conforme descrito em [Página de produto](https://learn.vtex.com/docs/course-basic-blocks-step04pdp-lang-pt). 
* Conferir se o app de [Search Result](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-result) e seu bloco `search-result-layout` estão devidamente declarados no código do template, conforme a documentação do Search Result indica.

## Saiba mais

* [Por que o produto não aparece no site? Como analisar: passo a passo e indexed info - VTEX Community](https://community.vtex.com/t/por-que-o-produto-nao-aparece-no-site-como-analisar-passo-a-passo-e-indexed-info/26610)
* [Quais configurações logísticas impactam na disponibilidade do produto no carrinho?](/pt/tutorial/quais-configuracoes-logisticas-impactam-na-disponibilidade-do-produto-no-carrinho--NAyBFToRdvlDyOzeeAeNw)
* [Catálogo - Definição de conceito](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ)
* [Como funciona a indexação](/pt/tutorial/entendendo-o-funcionamento-da-indexacao)
* [Módulo de Preços - Visão Geral](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP)
* [Gerenciar inventário](/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139)
* [Simulador de envio](/pt/tutorial/simulador-de-envio--tutorials_144)
* [CMS - Visão geral](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC)
