---
title: 'Cadastro dos agrupamentos de produtos da Netshoes'
id: 44wi4Ib06yw3dLcqZVqTv8
status: PUBLISHED
createdAt: 2020-06-05T02:34:01.835Z
updatedAt: 2021-12-23T20:30:27.796Z
publishedAt: 2021-12-23T20:30:27.796Z
firstPublishedAt: 2020-06-05T02:38:16.736Z
contentType: trackArticle
productTeam: Channels
slugEN: product-group-registration-in-netshoes
locale: pt
trackId: 5Ua87lhFg4m0kEcuyqmcCm
trackSlugEN: configurar-integracao-da-netshoes
order: 3
---

Caso a [arquitetura do seu catálogo](/pt/docs/tracks/arquitetura-do-catalogo) separe variações de um mesmo modelo em produtos diferentes na VTEX, você precisará criar agrupamentos de produtos para que elas sejam exibidas corretamente na Netshoes.

<table width="100%">
  <tr>
   <td>
    <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/configurar-integracao-da-netshoes/cadastro-dos-agrupamentos-de-produtos-da-netshoes_1.png" style="display: block; margin-left: auto; margin-right: auto;" alt="Variações de produto na Netshoes" title="Variações de produto na Netshoes">
   </td>
  </tr>
  <tr>
   <td style="text-align: center;">
     <em>
       Exibição correta de produtos, com todas variações na mesma página
     </em>
   </td>
  </tr>
</table>

## Como verificar se agrupamento será necessário

O que faz com que seja preciso agrupar produtos é a criação de produtos diferentes para um mesmo modelo. Normalmente isso é feito para exibir opções de cores variadas nas vitrines e busca da loja, bem como para simplificar o cadastro das combinações cores e tamanhos.

<table width="100%">
  <tr>
   <td width="24px">
    <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/configurar-integracao-da-netshoes/cadastro-dos-agrupamentos-de-produtos-da-netshoes_2.png" alt="Icon - Action required" title="Icon - Action required"/>
   </td>
   <td style="padding-left: 12px;">
     <strong>
       Ação necessária: Id do Produto diferente para o mesmo modelo
     </strong>
   </td>
  </tr>
</table>

*Modelo: Tênis Infantil Asics Buzz 3 Gs*

<table width="100%">
  <tr>
   <td width="50%">
     <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/configurar-integracao-da-netshoes/cadastro-dos-agrupamentos-de-produtos-da-netshoes_3.png" alt="Tênis Infantil Asics Buzz 3 Gs - Cinza e Rosa" title="Tênis Infantil Asics Buzz 3 Gs - Cinza e Rosa" style="display: block; margin-left: auto; margin-right: auto;">
   </td>
   <td width="50%">
     <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/configurar-integracao-da-netshoes/cadastro-dos-agrupamentos-de-produtos-da-netshoes_4.png" alt="Tênis Infantil Asics Buzz 3 Gs - Cinza e Verde" title="Tênis Infantil Asics Buzz 3 Gs - Cinza e Verde" style="display: block; margin-left: auto; margin-right: auto;">
   </td>
  </tr>
  <tr>
   <td style="text-align: center;">
     `Id do Produto = 2566`
   </td>
   <td style="text-align: center;">
     `Id do Produto = 2567`
   </td>
  </tr>
</table>



<table width="100%">
  <tr>
   <td width="24px">
    <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/configurar-integracao-da-netshoes/cadastro-dos-agrupamentos-de-produtos-da-netshoes_5.png" alt="Icon - No action needed" title="Icon - No action needed"/>
   </td>
   <td style="padding-left: 12px;">
     <strong>
       Livre para seguir em frente: Id do Produto igual para o mesmo modelo
     </strong>
   </td>
  </tr>
</table>

*Modelo: Tênis Adidas Vs Advantage Clean Masculino*

<table width="100%">
  <tr>
   <td>
     <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/configurar-integracao-da-netshoes/cadastro-dos-agrupamentos-de-produtos-da-netshoes_6.png" alt="Tênis Adidas Vs Advantage Clean Masculino - Preto" title="Tênis Adidas Vs Advantage Clean Masculino - Preto" style="display: block; margin-left: auto; margin-right: auto;">
   </td>
   <td>
     <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/configurar-integracao-da-netshoes/cadastro-dos-agrupamentos-de-produtos-da-netshoes_7.png" alt="Tênis Adidas Vs Advantage Clean Masculino - Branco" title="Tênis Adidas Vs Advantage Clean Masculino - Branco" style="display: block; margin-left: auto; margin-right: auto;">
   </td>
  </tr>
  <tr>
   <td style="text-align: center;">
     `Id do Produto = 1337`
   </td>
   <td style="text-align: center;">
     `Id do Produto = 1337`
   </td>
  </tr>
</table>



Para verificar como está estruturado seu catálogo, você pode acessar a seção _Produtos > Catálogo > Produtos e SKUs_. A inclusão da cor/tamanho no nome do produto e a separação das de variações de cor e/ou tamanho pela linha horizontal cinza na listagem indica que será necessário fazer o agrupamento.

<table width="100%">
  <tr>
   <td>
    <a href="https://images.ctfassets.net/alneenqid6w5/2m665obeMjCkD6eGbOC5nm/9046ad832d38159fc576c33187778ec3/image9.png" target="_blank">
      <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/configurar-integracao-da-netshoes/cadastro-dos-agrupamentos-de-produtos-da-netshoes_8.png" style="display: block; margin-left: auto; margin-right: auto;" alt="Mesmo modelo apresenta variações de cor separadas em produtos diferentes" title="Mesmo modelo apresenta variações de cor separadas em produtos diferentes">
     </a>
   </td>
  </tr>
  <tr>
   <td style="text-align: center;">
     <em>
       Mesmo modelo apresenta variações de cor separadas em produtos diferentes
     </em>
   </td>
  </tr>
</table>



> ℹ️ Você pode filtrar os resultados para exibir apenas produtos vinculados à política comercial escolhida para a Netshoes na etapa anterior. Para isso, basta clicar em *Filtrar resultados ou fazer uma busca* e selecionar a política comercial no seletor *Loja*.

## Cadastro do agrupamento de produtos

Para que seus produtos sejam agrupados pela integração com a Netshoes, será necessário criar uma especificação de produto para armazenar o campo *ProductGroup* descrito na [documentação para desenvolvedores da Netshoes](https://developers.netshoes.com.br/api-portal/producao#section4). 

Para fazer isso, você deve:

1. [Cadastrar especificação de produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) com nome `NetshoesProductGroup` e tipo _Texto Grande_. Este campo pode ser cadastrado na raiz (*Categorias*) da sua árvore de categorias. 

2. Preencher a especificação `NetshoesProductGroup` com o mesmo valor para todos produtos que devem ser agrupados. O processo de preenchimento desta especificação pode ser feito por [importação de planilha](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin#planilha).
