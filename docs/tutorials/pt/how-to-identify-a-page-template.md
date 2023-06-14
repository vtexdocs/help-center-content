---
title: 'Identificar o template de uma página'
id: 78Qm35VpIIeS0iQ0ik0Og4
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.453Z
updatedAt: 2023-03-29T18:10:51.105Z
publishedAt: 2023-03-29T18:10:51.105Z
firstPublishedAt: 2019-01-24T22:08:36.556Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_35
slug: como-identificar-o-template-de-uma-pagina
locale: pt
legacySlug: como-identificar-o-template-de-uma-pagina
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Essa dúvida é muito comum entre os lojistas VTEX. Como o CMS é um módulo antigo (que está sendo todo refeito) ele foi desenhado em uma época que o conteúdo não era fácil de ser manipulado. A nova plataforma dará mais liberdade e será intuitiva mas enquanto isso vamos desenhar aqui o passo-a-passo para você identificar o template de uma página específica.

Antes é preciso explicar rapidamente a estrutura do **CMS Layout**, que fica no seguinte endereço: `{AccountName}.myvtex.com/admin/a`.

A principal função do CMS Layout é permitir o gerenciamento do layout da sua loja. Nele que serão criados os Diretórios e Templates que darão vida ao seu e-commerce.

Tradicionalmente no mundo da tecnologia organizamos páginas e arquivos dentro de pastas, assim como no seu computador.

A VTEX usa o mesmo princípio. O diretório (pasta) é onde deve ser guardada toda informação pertinente aquela seção específica do seu site.

Podemos criar inúmeros templates mas devemos especificar no diretório qual template será exibido. Usando a página de __Produto__ como exemplo:

![cms-template-pagina PT](https://images.ctfassets.net/alneenqid6w5/5f0VY6nFAAecUce6SQq02m/266795c901433c282669bbb1af7ccb7e/Produto_CMS.png)

Storefront > Layout > Pasta CMS > Sites and channels > Nome da Loja > Pasta raíz (/) > Produto (por exemplo) > Clicar no link que estiver com a setinha vermelha de "ok"

No caso acima, vemos que o Template *"Product"* é o template ativo da página de produto. Seguindo o exemplo, para editar esse arquivo é necessário localiza-lo na lista de Templates:

Storefront > Layout > Pasta CMS > HTML templates > Product

Para dar flexibilidade é possível ainda incluir subtemplates e inúmeros outros recursos dentro de um template, como os controles nativos, ou mesmo um customizado por você. O *"Header"* e *"Footer"*, por exemplo, são subtemplates default que estão identificados dentro do Template da Homepage. Assim ficando mais fácil editar cada arquivo e também podendo utilizar o mesmo código em múltiplos templates.

Agora um exemplo real. Quero identificar qual página é essa que estou navegando:

![Captura-de-Tela-2017-03-01-às-2.49.14-PM-768x445](//images.contentful.com/alneenqid6w5/56TdUPaA48yyoKIUA08uuE/0a1b652077800bd371e41e68c7739f45/Captura-de-Tela-2017-03-01-a__s-2.49.14-PM-768x445.png)

O próprio domínio muitas vezes já me ajuda a identificar, mas algumas lojas podem customizar isso o que pode dificultar esse trabalho. No caso estou na dúvida se é uma pagina de __Departamento__ ou __Categoria__, talvez possa inclusive ser uma customização de prateleira.

O melhor caminho é conferindo no Código Fonte da página (Ctrl + U). Lojas VTEX vão possuir um indicativo de qual diretório pertence a página.

![Captura-de-Tela-2017-03-01-às-2.51.06-PM-768x89](//images.contentful.com/alneenqid6w5/uIxNOdyuY02GqegWMGGcC/2171322309535c4b93ff9b36132d8be3/Captura-de-Tela-2017-03-01-a__s-2.51.06-PM-768x89.png)

No exemplo acima: `<!-- CommerceContext.Current.VirtualFolder.Name: @categoria@ -->`
Agora que sabemos que é uma página de categoria, precisamos identificar qual template está ativo para Categoria. Para isso basta repetir o processo aplicado no exemplo anterior.
