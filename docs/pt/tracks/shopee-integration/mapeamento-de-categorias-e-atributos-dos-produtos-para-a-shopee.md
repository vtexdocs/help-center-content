---
title: 'Mapeamento de categorias e atributos dos produtos para a Shopee'
id: 7FgpimfEhkQmYsIMeCeuNH
status: PUBLISHED
createdAt: 2025-03-17T15:12:14.932Z
updatedAt: 2025-07-01T18:35:40.258Z
publishedAt: 2025-07-01T18:35:40.258Z
firstPublishedAt: 2025-03-17T15:36:41.919Z
contentType: trackArticle
productTeam: Channels
slugEN: mapping-product-categories-and-attributes-to-shopee
locale: pt
trackId: 4CaZCzU9ZO1CByH0haZ9hA
trackSlugPT: integracao-shopee
---

Feitas as configurações iniciais da integração, é possível enviar os produtos para o catálogo da Shopee. Para habilitar o processo de catalogação dos produtos na Shopee, permitindo que eles fiquem disponíveis para venda em menos tempo, o seller precisará realizar o mapeamento entre as características dos produtos na sua loja VTEX e as características dos mesmos produtos na Shopee.  

Para enviar os seus produtos para a Shopee, você deve mapear as [categorias](/pt/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) e os [atributos dos produtos](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP).  

<div class="alert alert-info">
Seus produtos precisam ter o <a href="https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb">Estoque</a> e <a href="https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP">Preço</a> configurados antes de enviá-los à Shopee.
</div>  

## Mapear categorias

Para acessar a página de mapeamento, você deverá acessar no Admin VTEX em **Aplicativos > Shopee > Mapear Categorias.**

Você será direcionado a página de mapeamento da Shopee e a página apresentará uma lista com as categorias da sua loja VTEX. O mapeamento das categorias permite que exista uma correspondência entre as categorias da sua loja e as categorias da Shopee. Dessa forma, os produtos enviados serão exibidos na categoria equivalente no marketplace.  

Na página de mapeamento, existe uma barra de busca que permite buscar a categoria por nome. Além disso, a seção **Categorias da loja** exibe lista das categorias da sua loja VTEX.  

<div class="alert alert-info">
A Shopee exige uma especificação para diferenciar um SKU do outro. Caso não haja especificação mapeada em seu produto, a integração utilizará o nome do SKU para criar essa especificação.
</div>  

A lista de categorias da sua loja VTEX inclui o status de seu mapeamento por meio dos ícones:  

| **Ícone** | **Status** | **Descrição** |
| ---------- | ---------- | ---------- | 
| <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/shopee-integration/mapeamento-de-categorias-e-atributos-dos-produtos-para-a-shopee_1.JPG" /> | **Mapeado**| Indica que o mapeamento da categoria foi concluído. | 
| <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/shopee-integration/mapeamento-de-categorias-e-atributos-dos-produtos-para-a-shopee_2.JPG" /> | **Mapeamento incompleto** | A categoria está parcialmente mapeada, necessitando preencher seus atributos obrigatórios, indicados por meio de um asterisco, para mapeá-la. | 
| <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/shopee-integration/mapeamento-de-categorias-e-atributos-dos-produtos-para-a-shopee_3.JPG" /> | **Erro no mapeamento** | O erro no mapeamento ocorre quando o marketplace exclui ou muda a categoria do produto.  Para solucionar esse problema basta refazer o mapeamento da categoria. | 
| <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/shopee-integration/mapeamento-de-categorias-e-atributos-dos-produtos-para-a-shopee_4.JPG" /> | **Não mapeado** | Indica que a categoria não foi mapeada. |  

Ainda na página de mapeamento, existem as seções, **Categoria do marketplace** e **[Mapeamento de atributos](#mapear-atributos)**, ambos com uma opção de menu de seleção, onde ao clicar sobre a seta, aparecem novos campos e informações.

## Mapear atributos

O mapeamento dos atributos permite que exista uma correspondência entre o padrão da sua loja VTEX e o padrão utilizado pela Shopee. Cada categoria possui seus atributos obrigatórios pelo marketplace e é necessário preenchê-los para que o mapeamento seja concluído.  

Os campos não mapeados não impedem que o mapeamento ocorra, porém, quanto mais atributos enviados para a Shopee seu produto tiver, melhor ranqueado ele será no marketplace.  

<div class="alert alert-warning">
A descrição dos produtos precisa ter, no mínimo, 100 caracteres. Além disso, a Shopee não aceita produtos com menos de 100 gramas, assim como não é possível enviar produtos com dimensões inválidas. Exemplo: Altura = 0 cm , Largura = 0,000001 cm. Em caso de dúvida, acesse o artigo <a href="https://seller.shopee.com.br/edu/article/3305/dimensoes-e-pesos-permitidos-para-enviar-pacotes-na-shopee">Dimensões e pesos permitidos para enviar pacotes da Shopee</a>.
</div>

Para realizar o mapeamento de categorias e atributos no Admin VTEX vá em **Aplicativos > Shopee > Mapeamento de categorias** e siga os passos abaixo:  

1. Na seção **Categorias da loja**, escolha a categoria que deseja mapear.  
2. Na seção **Categoria do marketplace,** selecione a categoria correspondente no marketplace do produto que você deseja enviar.  
3. Preencha os campos dos atributos que deseja mapear (o asterisco indica preenchimento obrigatório).  
4. Caso tenha preenchido os atributos **Cor** ou **Tamanho**, na coluna **Valores de Atributo** clique na Cor equivalente ou Tamanho equivalente e selecione a opção de valor correspondente.  
5. Se desejar personalizar um atributo, clique no botão Adicionar valor personalizado e crie um nome para o valor do atributo personalizado.  
6. Clique em `Salvar Alterações`.  

Ao finalizar o mapeamento de categorias e atributos corretamente, o status da categoria mudará para **Mapeado**.

<div class="alert alert-warning">
A Shopee só aceita marcas já registradas no seu catálogo de produtos. Quando não houver uma marca cadastrada no produto ou a marca cadastrada no produto não corresponder aos nomes aceitos pelo marketplace, ele será categorizado na Shopee como `NoBrand`.
</div>

