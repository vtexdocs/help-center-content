---
title: 'Como trabalhar com diferentes layouts para uma mesma página'
id: tutorials_546
status: PUBLISHED
createdAt: 2017-04-27T22:01:32.948Z
updatedAt: 2023-03-29T17:59:18.274Z
publishedAt: 2023-03-29T17:59:18.274Z
firstPublishedAt: 2017-04-27T23:03:37.766Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: como-trabalhar-com-diferentes-layouts-para-uma-mesma-pagina
locale: pt
legacySlug: como-trabalhar-com-diferentes-layouts-para-uma-mesma-pagina
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-warning">
  <p><b>Atenção:</b> existem duas formas de configurar coleções, por meio do CMS ou utilizando o módulo de Coleções Beta. Este artigo, refere-se à <a href = "https://help.vtex.com/pt/tutorial/cadastro-de-colecoes-cms--2YBy6P6X0NFRpkD2ZBxF6L">configuração de coleções por meio do CMS</a>.</p>
</div>

Na página __Storefront__ > __Layout__, um layout padrão é aplicado para todas as páginas de mesmo tipo existentes dentro de cada pasta de um website, como por exemplo _Produto_.

Existe a possibilidade, entretanto, de aplicar diferentes layouts para uma mesma página por meio de determinadas condições (grupo de produtos, categorias, marcas). Por exemplo, é possível configurar dois produtos com layouts diferentes ou uma categoria específica com um layout especial.

Para isso, primeiramente é necessário inserir no módulo de CMS um novo template, seja [de página](https://help.vtex.com/pt/faq/como-criar-um-template-de-pagina) ou de [prateleira](https://help.vtex.com/pt/faq/como-criar-um-template-de-prateleira). Após a criação do template, você deve acessar a pasta que deseja aplicar o novo layout conforme os passos abaixo:

1. Em __Storefront__, acesse __Layout__;
2. Clique na pasta __CMS__;
3. Clique em __Sites and channels__;
4. Acesse o website desejado para as mudanças;
5. Clique na pasta __/__ e selecione a pasta desejada para a aplicação do novo layout;
6. Clique em __New Layout__.

Após preencher os campos __Layout Name__ e __Body Class__, selecione o template desejado em __Template__ e desmarque a opção __Default Page__.
Após isso, uma nova seção será disponibilizada e você poderá definir através de seus campos as condições sob as quais o novo layout será mostrado na sua loja. 

É possível limitar a disponibilização do template para um período de tempo pré determinado nos campos __From__ e __To__ assim como definir em quais categorias, produtos, marcas e coleções o template será aplicado. 

![template-condicionado-cms](https://images.ctfassets.net/alneenqid6w5/5oheUsdoc0aKS4ysOwQ6ig/66a11beac0c32d7fde34d43b94fb45bb/template-condicionado-cms.png)

Após preencher todos os campos, não se esqueça de salvar as mudanças feitas clicando em __Save Layout__.

Note que esses critérios se baseiam no ["contexto de busca"](https://help.vtex.com/pt/tutorial/como-funciona-o-contexto-de-busca) da página em que o usuário se encontra, que estão diretamente ligados aos [parâmetros de busca](https://help.vtex.com/pt/tutorial/parametros-de-busca), mas que não necessariamente são definidos manualmente pelo administrador da loja - toda página se enquadra em um contexto de conteúdo automaticamente.

Ocorre que as condições ofertadas não estarão presentes em qualquer página:

- páginas de produto nunca terão contexto de coleção;
- páginas de busca (aonde se enquadram também as de departamento, categoria, marca, coleção e landing pages) nunca terão contexto de produto.

Sendo assim, não é possível, por exemplo, condicionar produtos específicos a layouts diferentes através de uma coleção. Nesse cenário é necessário cadastrá-los com a condição de produto.

>ℹ️ De acordo com as condições configuradas, existe uma ordem de prioridade estabelecida para a aplicabilidade do template. A ordenação é, caso exista, template de produto, de categoria e, por último, de marca. Dessa forma, um template condicionado para determinado produto se sobrepõe aquele condicionado à categoria na qual este produto está contido e assim sucessivamente.

Em caso de dúvidas nessa configuração, recomendamos que use o "lid": [Teste de Layout](/pt/faq/como-validar-um-layout-antes-de-ir-para-producao)
