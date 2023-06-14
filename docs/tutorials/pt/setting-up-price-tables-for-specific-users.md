---
title: 'Configurar tabelas de preços para usuários específicos'
id: 5S9oDOMHNmY4K0kAewAiWY
status: PUBLISHED
createdAt: 2018-08-21T13:30:27.663Z
updatedAt: 2023-03-30T15:54:24.193Z
publishedAt: 2023-03-30T15:54:24.193Z
firstPublishedAt: 2018-08-21T16:04:20.758Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: configurar-price-tables-especificas
locale: pt
legacySlug: configurar-price-tables-especificas-com-o-session
subcategory: 4id9W3RDyw02CasOm2C2iy
---

Uma tabela de preços é um conjunto de preços de SKUs que pode ser aplicado a um determinado contexto. Essas tabelas guardam as informações dos preços que são exibidos em uma loja.

Diferentemente das políticas comerciais, que também podem ser usadas para segmentar preços, não há um limite para o número de tabelas de preços que podem ser criadas. **A única limitação que existe é um máximo de 100 preços fixos para um mesmo SKU**. 

Por exemplo, digamos que você queira que os clientes de Minas Gerais vejam um preço diferente do que veem os clientes do Rio de Janeiro. Neste caso, você pode criar duas tabelas de preço diferentes, e associar a primeira aos clientes de Minas Gerais, e a segunda aos do Rio de Janeiro.

<div class="alert alert-info">
<p>Preços fixos ou regras de preço podem ser definidos para modificar o preço de um SKU em uma tabela de preço.</p>
</div>

Isto permite ao lojista mais liberdade para lidar com informações contextuais de seus clientes.

## Como configurar tabelas de preços

Para configurar tabelas de preços, você precisa:

1. [Configurar o campo `priceTables` no Master Data](#configurar-o-campo-pricetables-no-master-data)
2. [Definir os preços no módulo de Preços](#definir-os-precos-no-modulo-de-precos)

Veja o passo a passo detalhado abaixo.

### Configurar o campo `priceTables` no Master Data

Para usar as tabelas de preços, você precisa habilitar o campo `priceTables` na entidade de __Clientes__ do __Master Data__. Ou seja, cada cliente da sua loja passará a ter um atributo que indica se ele está associado a alguma tabela de preço específica.

Para isso, siga os passos abaixo.

1. No Admin VTEX, acesse *Configurações da loja > Storefront > Master Data*, ou digite *Master Data* na barra de busca no topo da página.
2. Clique no __botão de engrenagem do Profile System__.
3. Na linha de __Clientes__, clique no __botão de lápis__ para editar.
4. Marque a flag do campo de listagem `priceTables`.
5. Clique na aba __Schemas de Layout__ e arraste o campo `priceTables` da caixa __Campos disponíveis__ para onde desejar - por exemplo, para a caixa __Campos da coluna 1__.
6. Clique em __Salvar__.

Agora vamos configurar o novo campo da sua entidade de __Clientes__.

1. Na página inicial do __Master Data__, clique no botão __Área avançada__.
2. Clique em __Estrutura de dados__.
3. Clique na aba __Entidade de dados__.
4. Na linha da entidade CL (Cliente), clique no __botão de lápis__ para editar.
5. Na linha do campo `priceTables`, clique no __botão de engrenagem__.
6. Marque a opção __É filtro__.
7. No campo __Domínio__, dentro da caixa __Configurações específicas deste tipo de campo__, você pode inserir um nome de domínio para cada tabela de preço diferente. A cada nome inserido, aperte __Enter__ para exibir um campo adicional. No exemplo da imagem abaixo, inserimos dois domínios: `Gold` e `Silver`.
Outra maneira de usar tabelas de preço é declarando-as diretamente no formulário dos clientes. Se um novo valor de tabela de preço for inserido para um cliente, essa tabela de preço passa a existir automaticamente, sem a necessidade de ter sido declarada anteriormente em Domínios. Para criar várias, separe-as por vírgulas. Por exemplo: `gold, silver`.
9. Quando terminar, clique em __Salvar__.
10. Na linha da entidade alterada, clique no ícone disquete para publicar.
11. Então, na mesma linha da entidade editada, clique no ícone setas para reindexá-la.

<div class="alert alert-info">
<p>Cada cliente pode ter no máximo 5 tabelas de preço atreladas a ele.
Quando o cliente tiver mais de uma tabela de preço atrelada, o sistema irá seguir a ordem das tabelas de preço cadastradas para determinar o preço de cada SKU. Se o SKU não possui preço configurado na primeira tabela de preço, o sistema vai buscar na segunda em diante. Caso não haja preço configurado em nenhuma tabela atrelada ao cliente, o preço aplicado será o preço base.</p>
</div>

Agora sua entidade de __Clientes__ tem um atributo `priceTables`, que pode ser populado diretamente na UI do Master Data ou por API.

### Definir os preços no módulo de Preços

Após criar tabelas de preços, você pode ver o preço de cada produto da loja separado por tabela de preços, da mesma maneira que acontece com as políticas comerciais.

No menu principal do Admin, acesse __Preços__ e escolha a opção __Lista de preços__.

No filtro da busca, insira os nomes das tabelas criadas no __Master Data__.

![Filters](https://images.ctfassets.net/alneenqid6w5/4l7cEOha360ceaegCA4Ws6/17ea17f13d6dd9e399f07c4cefe1888a/Filters.png)

As tabelas de preço são mostradas como colunas da lista de preços, assim como as políticas comerciais.

![Prices](https://images.ctfassets.net/alneenqid6w5/31kElv6oD6KksC8wyUoCgU/815d607e3cdcd2d7c15239d202a81ad0/Prices.png)

Para atualizar o preço fixo em uma tabela específica, clique na coluna dessa tabela e depois em __Definir preços fixos__. 

Para inserir e atualizar os preços de uma tabela específica por API, confira a [documentação da API de Pricing](https://developers.vtex.com/reference/prices-and-fixed-prices#createeditfixedpricesonapricetableortradepolicy).

<div class="alert alert-info">
<p>A tabela de preços tem prioridade sobre o preço da Política Comercial. Isso significa que, se determinada tabela de preços se aplicar ao contexto de um usuário, o preço definido nela será utilizado, mesmo que esse cliente esteja também no contexto de uma política comercial que defina um preço diferente.</p>
</div>

## Como exibir preços diferentes para usuários diferentes

Quando um usuário da sua loja não está logado, os preços mostrados a ele são os valores padrão definidos pela política comercial.

Mas se o usuário estiver logado, ele verá os preços correspondentes à tabela de preços à qual o email dele estiver associado.

Por exemplo, estes dois clientes estão atrelados a tabelas de preços diferentes:
![Clients](https://images.ctfassets.net/alneenqid6w5/4YanVck2GswcKKEEamO6gs/d1a2bc5603716c485dd000239a49fb41/Clients.png)

Quando o cliente Daniel, que está na tabela Silver, estiver logado na loja, ele verá os preços definidos nessa tabela. A mochila do exemplo acima aparecerá com o valor de R$ 50,00.
Já o cliente Breno, que está na tabela Gold, verá os preços definidos nessa outra tabela. Para ele a mochila custará R$ 60,50.

<div class="alert alert-warning">
<p>Lembre-se de que os preços variam de acordo com a sessão. Ou seja, o cliente <strong>precisa</strong> estar autenticado para que haja alteração (seja através de token, senha, Google ou Facebook). Sem a autenticação do usuário, o preço sempre será o padrão. E atenção: o fato de ele inserir o email no processo de checkout não é suficiente, já que nesse processo ele realiza sua identificação, mas não a autenticação.</p>
</div>
