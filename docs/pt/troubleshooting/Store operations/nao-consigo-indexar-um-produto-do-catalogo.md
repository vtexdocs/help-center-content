---
title: 'Não consigo indexar um produto do catálogo'
id: 5ZKLTqnCyGbWEYGPTCBIxI
status: PUBLISHED
createdAt: 2024-09-06T13:35:52.255Z
updatedAt: 2024-12-10T18:06:38.568Z
publishedAt: 2024-12-10T18:06:38.568Z
firstPublishedAt: 2024-09-06T20:54:50.631Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-index-a-product-in-the-catalog
locale: pt
legacySlug: nao-consigo-indexar-um-produto-do-catalogo
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: Catálogo, Indexação, Produto, SKU, Política comercial
---

O processo de indexação permite que dados de um produto, tais como informações de catálogo, preço e estoque, sejam reunidos e organizados para serem exibidos aos clientes na busca e na prateleira da loja.

Sempre que um produto tem mudança de status ou alteração de informações, é iniciado um fluxo de reindexação. Confira a seguir alguns exemplos onde a reindexação ocorre:

- Modificação de dados de cadastro
- Ativação ou desativação de produto
- Criação ou remoção de coleção
- Mudança de preço ou na quantidade de estoque

<div class ="alert alert-info">
  Para mais detalhes sobre a indexação de um produto em lojas <a href="https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj">legado</a>, acesse <a href="https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256">Como funciona a indexação - CMS Portal Legado</a>. Se a sua loja utiliza o <a href="https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG">Intelligent Search</a>, verifique o <a href="https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4flMwTaQL8FRKl1YT58ezH">Histórico da indexação - Intelligent Search</a>.
</div>

Em determinadas situações, a indexação é interrompida durante o processo e as informações mais atualizadas do produto não são exibidas no site da loja. Veja abaixo alguns cenários em que esta interrupção pode acontecer:

- Cadastro incorreto do produto no Catálogo
- Ausência da política comercial associada ao produto no binding da loja
- Tempo limite de indexação (40 segundos) é excedido quando ocorrem um grande - número de requisições de informações ao checkout durante a indexação. O número de requisições pode variar conforme os seguintes fatores associados ao produto:
<br>
<ul>
<br>
    	<li>Quantidade de políticas comerciais</li>
    	<li>Quantidade de SKUS</li>
    	<li>Quantidade de regiões geográficas</li>
    	<li>Quantidade de coleções</li>
    	<li>Quantidade de sellers</li>
</ul>

## Soluções

Para corrigir problemas que estejam impedindo um produto de ser corretamente indexado na loja, considere realizar as seguintes ações:

- [Verificar campos de cadastro do produto](#verificacao-dos-campos-de-cadastro-do-produto)
- [Verificar informações de binding da conta](#verificacao-de-informacoes-de-binding-na-conta)
- [Reduzir políticas comerciais associadas ao produto](#modificacao-das-politicas-comerciais-do-produto)
- [Modificar quantidade de SKUs por produto](#modificacao-de-quantidades-de-skus-do-produto)
- [Remover SKU de coleções](#remocao-do-sku-de-colecoes)
- [Reindexar a base de produtos da loja](#reindexacao-da-base-de-produtos)

### Verificação dos campos de cadastro do produto

Erros no cadastro de um produto podem gerar inconsistências no momento de realizar a indexação de um produto.

<blockquote><ui>1. No Admin VTEX, acesse <b>Catálogo > Todos os produtos</b>.</ui>

<blockquote><div class ="alert alert-warning">
  Lojas que utilizam a página <b>Produtos e SKUS (Beta)</b> devem verificar os campos de cadastro do produto acessando <b>Catálogo > Produtos e SKUS</b> no Admin VTEX. Saiba mais em <a href="https://help.vtex.com/pt/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By">Produtos e SKUS (Beta)</a>.
</div></blockquote>

<blockquote><ui>2. Localize o produto desejado e clique em <b>EDITAR</b>.</ui>

<blockquote><ui>3. Verifique se as informações de todos os <a href="https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke">campos de cadastro</a> estão corretas. Se necessário, atualize as informações e clique em Salvar.</ui>

<blockquote><ui>4. Acesse o relatório de indexação em <b>Catálogo > Relatórios</b> e verifique se o produto está na fila de indexação ou já foi indexado.</ui>

### Verificação de informações de binding na conta

Quando a conta possui [mais de uma loja](/pt/tutorial/gerenciando-uma-multiloja--4S0lFVBPylRS5KpVgdyDhJ), é necessário realizar o processo de [binding](/pt/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W), que consiste em vincular o website e as políticas comerciais aplicáveis a cada uma das lojas. Se um produto estiver relacionado a uma política comercial que não está presente no binding da conta, podem ocorrer erros de indexação.

Para identificar as políticas comerciais associadas a cada uma das lojas de sua conta, acesse [Vincular uma loja a uma estrutura de pastas do CMS (binding)](/pt/tutorial/vincular-um-account-name-a-um-website-binding--PxjfleOw6suCSO2uGWMMs).

### Modificação das políticas comerciais do produto

Quando um produto possui diversas políticas associadas a ele, as diversas iterações de verificação de dados podem ocasionar a saída da fila de indexação por atingir o tempo limite de espera.

Exemplo: se um produto possui 5 SKUs ativos em 5 políticas comerciais diferentes, serão necessárias 25 validações de disponibilidade de estoque, regras de preço e promoções. 

Para evitar este cenário, verifique a possibilidade de utilizar uma mesma política comercial para marketplaces diferentes, como descrito em [Configurar política comercial para marketplace](/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404).  

<div class ="alert alert-warning">
  Caso seja possível reduzir o número de políticas comerciais em sua loja, acesse novamente o cadastro do produto para modificar a política comercial e verificar o relatório de indexação, como descrito na seção <b>Verificação dos campos de cadastro do produto</b>.</div>

### Modificação de quantidades de SKUs do produto 

Da mesma forma que as políticas comerciais, ter muitos SKUs associados a um produto pode levar a exceder o tempo limite de espera para indexação. Para reduzir a probabilidade de ocorrência deste erro, considere a possibilidade de dividir um produto em outros produtos com menor quantidade de SKUs.

Exemplo: se o produto “Camisa” possui seis SKUs (Amarela P, Amarela M, Amarela G, Azul P, Azul M e Azul G), ele pode ser dividido em dois produtos com três SKUs cada: “Camisa Amarela” (P, M e G) e “Camisa Azul” (P, M e G).

Após reorganizar a quantidade de SKUs por produto, verifique o relatório de indexação, como descrito na seção [Verificação dos campos de cadastro do produto](#verificacao-dos-campos-de-cadastro-do-produto).  

### Remoção do SKU de coleções  

<div class ="alert alert-info">
  Existem duas formas de remover o SKU de uma coleção: por meio do <a href="https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj">Portal CMS Legado</a> ou utilizando o módulo <b>Coleções (Beta)</b>. Esta seção demonstra como remover o SKU de uma coleção no <b>Portal CMS Legado</b>. Para mais informações sobre o procedimento no módulo <b>Coleções (Beta)</b>, acesse <a href="https://help.vtex.com/pt/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye#remocao-de-produtos">Remoção de produtos</a>.</div>  

Caso algum dos SKUs do produto faça parte de uma [coleção](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4hN41yU8IPeb8HKmmaXoca), também é possível que ocorra o tempo limite de espera para indexação. Para verificar se o SKU faz parte de uma ou mais coleções, siga os passos abaixo:  

1. No Admin VTEX, acesse __Storefront > Layout__.
2. Clique na pasta __CMS__ e em __Product Cluster (Collections)__.
3. Clique na primeira coleção da lista.
4. Na parte inferior da coluna __Other options__, verifique se o SKU está disponível na lista. Caso esteja presente e não exista nenhum impedimento de removê-lo da coleção, clique sobre o botão de remoção localizado na frente do SKU.
5. Repita o passo 4 para o mesmo SKU em todas as coleções dentro de __Product Cluster (Collections)__.
6. Acesse o relatório de indexação em __Catálogo > Relatórios__ e verifique se o produto está na fila de indexação ou já foi indexado.

### Reindexação da base de produtos  

A reindexação completa da base de produtos pode ser realizada para atualizar as informações de todos os produtos na loja ao mesmo tempo.

Para lojas com menos de 100 mil produtos cadastrados no catálogo, o [usuário titular](/pt/tutorial/o-que-e-o-usuario-master--3oPr7YuIkEYqUGmEqIMSEy) da conta pode utilizar a função __Agendar reindexação completa__ no Admin VTEX.

Contas com 100 mil produtos ou mais cadastrados devem entrar em contato com o [Suporte da VTEX](/pt/faq/como-funciona-o-suporte-da-vtex--3kACEfni4m8Yxa1vnf2ebe) para realizar este tipo de operação.

Saiba mais em [Manutenção de base (full cleanup)](/pt/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802).

![Agendar reindexação completa](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/Store%20operations/nao-consigo-indexar-um-produto-do-catalogo_1.png)