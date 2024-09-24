---
title: 'Mapeamento de categorias e marcas para marketplace VTEX (Beta)'
id: 6NU8LwR6i0tTb8nk30bnbE
status: PUBLISHED
createdAt: 2022-05-11T13:35:34.836Z
updatedAt: 2022-10-20T01:27:06.463Z
publishedAt: 2022-10-20T01:27:06.463Z
firstPublishedAt: 2022-05-11T15:08:00.893Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: mapping-categories-and-brands-for-the-marketplace-beta
locale: pt
legacySlug: mapeamento-de-categorias-e-marcas-para-marketplace-vtex-beta
subcategoryId: 24EN0qRBg4yK0uusGUGosu
---

>ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

A arquitetura de uma loja VTEX possibilita [anunciar e vender produtos](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) em outras lojas, sejam elas VTEX ou não. Ao vender produtos de outros sellers em seu ambiente, a loja VTEX se torna um [marketplace VTEX](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb). 

Para que um seller possa vender em um marketplace VTEX, é necessário que seja feita uma correspondência entre o [catálogo](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7kz4uWVq6NoaOdUpiJv4PR) do seller e o catálogo do marketplace VTEX, de forma que os produtos do seller tenham informações equivalentes ao catálogo do marketplace. 

O marketplace VTEX realiza a correspondência de valores dos catálogos por meio do mapeamento de [categorias](https://help.vtex.com/pt/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf), [marcas](https://help.vtex.com/pt/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh) e [especificações](https://help.vtex.com/pt/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP). O mapeamento é necessário quando o seller:

- Envia produtos pela primeira vez para o marketplace VTEX.
- Envia novas informações de categorias, marcas ou especificações, ainda não mapeadas no marketplace VTEX.

>ℹ️ O envio de um item para mapear novas informações não modifica os valores já mapeados no marketplace VTEX.

Para facilitar a conexão entre sellers e marketplaces VTEX, existe a página **Categorias e marcas Beta**, que permite ao marketplace VTEX fazer a correspondência entre suas categorias e marcas e as categorias e marcas do seller. As ações que o marketplace VTEX precisa realizar para o mapeamento são:

1. [Mapear novo seller](#mapear-novo-seller).
2. [Mapear categorias do seller](#mapear-categorias-do-seller).
3. [Mapear marcas do seller](#mapear-marcas-do-seller).

## Mapear novo seller

Uma vez que o marketplace VTEX esteja [conectado ao seller](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392), é preciso realizar o mapeamento do seller. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **MARKETPLACE > Sellers**.
2. Clique em `Categorias e marcas Beta`.
3. Clique no botão `Mapear novo seller`.
4. Na caixa de busca, pesquise o ID do seller desejado.
5. Clique em `Adicionar seller`.

## Mapear categorias do seller

Após mapear o seller, é necessário fazer a correspondência entre as categorias do seller e as categorias do marketplace VTEX. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **MARKETPLACE > Sellers**.
2. Clique em `Categorias e marcas Beta`.
3. Na página **Mapeamento de categorias e marcas**, clique sobre o <i class="fas fa-ellipsis-v"></i> menu três pontos do seller desejado. Você pode pesquisar o seller com a caixa de busca, utilizando o ID do seller.
4. Clique em `Mapeamento de categorias`.
5. Clique sobre o nome da categoria do seller que deseja mapear. Você pode pesquisar o nome da categoria utilizando a caixa de busca.
6. Em **Categoria do marketplace**, clique em `Selecione uma categoria do marketplace` ou na <i class="fas fa-angle-down"></i> seta para baixo.
7. Entre as opções que aparecem na seção, selecione a categoria desejada. Uma categoria pode ter subcategorias, sendo necessário selecionar o nível mais profundo de subcategoria que existir.
8. Clique em `Salvar Alterações`.

O status do mapeamento de categorias no marketplace VTEX é indicado por ícones na coluna **Situação**, e vai corresponder a um dos seguintes casos:

| **Ícone** | **Status** |
| ---------- | ---------- |
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/6Ry65cPvgGmChmE3RipFio/deec73c3e429f63dfa8971ae8c848221/mapeado_mapper.JPG" /> | **Mapeado:** o mapeamento da categoria foi concluído. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/lsN6TxCm1e6frHvIQ8xjt/491ad1e6d99ab858e2a76d0ea31e1a39/erromapeamento_mapper.JPG" /> | **Erro no mapeamento:** houve um problema e o mapeamento não foi realizado. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/3nVJUJHetaqPHThGGpoG8T/d7f667b269105a5c65aa7b16b1aace21/incompleto_mapper.JPG" /> | **Não mapeado:** a categoria ainda não foi mapeada. |

>ℹ️ Não é possível excluir um mapeamento de categoria, mas você pode alterar as configurações a qualquer momento, seguindo os mesmos passos do primeiro mapeamento realizado.

## Mapear marcas do seller

Além de mapear as categorias, é necessário realizar o mapeamento das marcas cadastradas no ambiente do seller, que é similar ao mapeamento de categorias. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **MARKETPLACE > Sellers**.
2. Clique em `Categorias e marcas Beta`.
3. Na página **Mapeamento de categorias e marcas**, clique sobre o <i class="fas fa-ellipsis-v"></i> menu três pontos do seller desejado. Você pode pesquisar o seller com a caixa de busca, utilizando o ID do seller.
4. Clique em `Mapeamento de marcas`.
5. Clique sobre o nome da marca do seller que deseja mapear. Você pode pesquisar na caixa de busca pelo nome da marca.
6. Em **Marca do marketplace**, clique em `Selecione uma marca do marketplace` ou na <i class="fas fa-angle-down"></i> seta para baixo.
7. Entre as opções que aparecem na seção, selecione a marca desejada.
8. Clique em `Salvar Alterações`.

O status do mapeamento de marcas no marketplace VTEX é indicado por ícones na coluna **Situação**, e vai corresponder a um dos seguintes casos:

| **Ícone** | **Status** |
| ---------- | ---------- |
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/6Ry65cPvgGmChmE3RipFio/deec73c3e429f63dfa8971ae8c848221/mapeado_mapper.JPG" /> | **Mapeado:** o mapeamento da categoria foi concluído. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/lsN6TxCm1e6frHvIQ8xjt/491ad1e6d99ab858e2a76d0ea31e1a39/erromapeamento_mapper.JPG" /> | **Erro no mapeamento:** houve um problema e o mapeamento não foi realizado. | 
| <img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/3nVJUJHetaqPHThGGpoG8T/d7f667b269105a5c65aa7b16b1aace21/incompleto_mapper.JPG" /> | **Não mapeado:** a categoria ainda não foi mapeada. |

>ℹ️ Não é possível excluir um mapeamento de marca, mas você pode alterar as configurações a qualquer momento, seguindo os mesmos passos do primeiro mapeamento realizado.

## Saiba mais

- [Aprovar anúncios recebidos](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus/)
- [Política comercial para marketplaces](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404)
- [Informações compartilhadas entre marketplace e seller na VTEX](https://help.vtex.com/pt/tutorial/informacoes-compartilhadas-entre-marketplace-e-seller-na-vtex--3o7WGiBtfnKKZ3Ddug26k3)
