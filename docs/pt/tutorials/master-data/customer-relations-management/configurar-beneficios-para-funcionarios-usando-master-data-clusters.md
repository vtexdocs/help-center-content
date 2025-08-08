---
title: 'Configurar benefícios para funcionários usando Master Data clusters'
id: 58SNGrUE08Ya2GWTqKUi5m
status: PUBLISHED
createdAt: 2020-08-25T20:16:20.744Z
updatedAt: 2023-03-28T23:14:03.969Z
publishedAt: 2023-03-28T23:14:03.969Z
firstPublishedAt: 2020-08-28T15:15:56.627Z
contentType: tutorial
productTeam: Master Data
author: 4ubliktPJIsvyl1hq91RdK
slugEN: configure-employee-benefits-using-master-data-clusters
legacySlug: configurar-beneficios-para-funcionarios-usando-master-data-clusters
locale: pt
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

Na VTEX, uma promoção ou desconto pode ser aplicado a um grupo de clientes. Este grupo pode ser definido pelas propriedades que os clientes têm em comum.

<div class="alert alert-warning">
Este artigo diz respeito ao funcionamento do Master Data v1. É importante avaliar qual versão do Master Data atende as necessidades ou está em uso na sua operação. Saiba mais:
<ul>
<li>
<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
Características das versões do Master Data
</a>
</li>
<li>
<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
Master Data v2
</a>
</li>
</ul>
</div>

Este artigo mostra como configurar uma promoção para colaboradores. Considera-se que os colaboradores são um grupo de clientes, portanto são identificados usando clusters do Master Data.

Como os dados do cliente são armazenados como documentos da entidade de dados CL (Client ou Cliente) no Master Data, o conteúdo dos campos decidirá se o cliente pertence a esse grupo. 

## O que é um cluster?
No Master Data, um cluster é um campo com um valor determinado para uma entidade de dados. Um ou mais clusters definem esse grupo de clientes com propriedades comuns na entidade de dados CL.

Aqui, a propriedade comum dos clientes é que eles também são funcionários da loja. Mais informações sobre clusters de clientes podem ser encontradas no artigo [Criar um cluster de clientes](https://help.vtex.com/pt/tutorial/como-criar-um-cluster-de-clientes--frequentlyAskedQuestions_1724).

Este artigo assume que os colaboradores estão devidamente registrados com um campo booleano `é funcionário` definido como verdadeiro em seus respectivos documentos para a entidade de dados CL, como demonstrado na figura abaixo. 

Caso contrário, verifique o artigo [Criando um campo no Master Data](https://help.vtex.com/pt/tutorial/como-crio-um-campo-no-master-data--frequentlyAskedQuestions_1829) para criar um campo que identifique os funcionários e configure-o adequadamente para cada documento correspondente aos funcionários.
![Campo do colaborador](//images.ctfassets.net/alneenqid6w5/58zHOX5joCiSGRfGH1QcVS/550d4899318a5728eb0d73f04a32b710/Employee_field.png)

<div class="alert-info" role="alert">São muitos os detalhes para configurar uma promoção. Se você precisar de informações adicionais sobre este assunto, consulte o artigo <a href="https://help.vtex.com/pt/tutorial/como-criar-promocoes--tutorials_320">Criar promoções</a>.</div>

Com o campo configurado, a promoção pode ser criada seguindo os passos abaixo:

1. No painel esquerdo do Admin, acesse **Promoções** > **Promoções**.
2. Com o menu **Promoções** aberto, clique no botão **Nova promoção** no canto superior direito.
3. Escolha o tipo de promoção desejado a partir das opções disponíveis
4. Preencha os campos necessários para estabelecer a promoção. Há muitos campos (por exemplo: Nome, data de vencimento, tipo e valor do desconto, etc.) e alguns deles são específicos para o tipo de promoção selecionado. Mais informações sobre a configuração das promoções podem ser encontradas no artigo [Criar promoções](https://help.vtex.com/pt/tutorial/como-criar-promocoes--tutorials_320).
5. Para aplicar a promoção somente aos funcionários, dentro da seção 3 (Quais são as **condições** para a promoção ser válida?), selecione a opção **Cluster de clientes**.
6. No campo vazio abaixo da opção **Cluster de clientes**, escreva o cluster que identifica os clientes que são empregados (um par `{campo}={valor}`). Neste caso, é utilizado `isEmployee=true`.
7. No final da página, clique no botão **Salvar***.

Depois disso, a promoção já funcionará conforme configurada. O desconto é mostrado apenas no carrinho de compras. A imagem abaixo mostra um exemplo com 99% de desconto.
![carrinho de compras com desconto](//images.ctfassets.net/alneenqid6w5/475MwMGUzp7GzqF0xYFVUq/599d65a4eb894d02d8cfb0a6c1a55463/Carrinho_com_desconto.png)
