---
title: 'Delivery Promise (Beta)'
id: p9EJH9GgxL0JceA6dBswd
status: PUBLISHED
createdAt: 2024-08-22T15:58:58.240Z
updatedAt: 2024-09-02T22:29:17.194Z
publishedAt: 2024-09-02T22:29:17.194Z
firstPublishedAt: 2024-08-22T18:57:59.895Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: delivery-promise-beta
locale: pt
legacySlug: delivery-promise-beta
subcategory: 13sVE3TApOK1C8jMVLTJRh
---

<div class="alert alert-info">
Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href= "https://help.vtex.com/pt/support">nosso Suporte</a>.
</div>

**Delivery Promise (Beta)** é a nova solução da VTEX para que o cliente, durante a experiência de compra na sua loja, visualize somente os produtos que pode adquirir, considerando tanto a disponibilidade dos produtos em estoque quanto formas de envio válidas para o endereço de entrega.

Com a **Delivery Promise (Beta)**, sua loja é capaz de fazer uma “promessa de entrega” ao cliente para todos os produtos visualizados, conforme apresentado no vídeo a seguir:

<iframe width="560" height="315" src="https://www.youtube.com/embed/uIV8tuy60m0?si=Z2-bhB92kp4ILpcW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="alert alert-danger">
A fase atual da <b>Delivery Promise (Beta)</b> ainda não permite filtrar a vitrine da loja por um prazo de envio. Para mais informações sobre filtros, veja a seção <a href="#funcionalidades-disponiveis">Funcionalidades disponíveis</a>.
</div>

Este artigo está organizado nas seguintes seções:

* [Funcionalidades disponíveis](#funcionalidades-disponiveis)
* [Benefícios](#beneficios)
* [Requisitos e restrições](#requisitos-e-restricoes)
* [Perguntas frequentes](#perguntas-frequentes)

## Funcionalidades disponíveis

Além de poder comprar todos os produtos visualizados, o cliente pode filtrar os produtos na vitrine para visualizar somente os resultados que atendam a determinados critérios, como será visto adiante. Isso permite ao cliente direcionar a experiência de navegação de acordo com os próprios objetivos:

* Produtos disponíveis para o CEP desejado.
* Prazo limite para recebimento do produto.
* Produtos disponíveis em lojas próximas ao cliente.
* Forma de envio mais rápida para receber o pedido.
* [Ponto de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) de sua escolha para retirar o pedido.

Nesta etapa, a **Delivery Promise (Beta)** permite que os clientes da sua loja filtrem os produtos exibidos na navegação pelos seguintes critérios:

* Localização fornecida pelo cliente.
* Método de envio do tipo entrega ou retirada.
* Ponto de retirada de sua escolha.

<div class = "alert alert-info">
Os filtros mencionados acima são componentes nativos do Intelligent Search. Caso você queira desenvolver componentes customizados para a sua loja, entre em contato com a sua equipe de desenvolvimento ou um <a href="https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#parceiros-de-implementacao">parceiro de implementação</a>.
</div>

## Benefícios

A **Delivery Promise (Beta)** é recomendada para todos os tipos de operação, pois a solução garante diversas vantagens a qualquer modelo de negócio. Conheça as condições de arquitetura de loja para participar da fase atual do beta na seção [Requisitos e restrições](#requisitos-e-restricoes).

Para operações [omnichannel](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv), quanto maior a cobertura da malha logística e o número de sellers e [contas franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) associados à operação, maiores serão os benefícios obtidos. A tabela a seguir apresenta os principais deles:

| **Benefício** | **Detalhes** |
| :---: | :--- |
| Redução do abandono de carrinho | <p>É comum clientes desistirem de compras após informar sua localidade na etapa de carrinho, quando descobrem a impossibilidade de envio para sua localidade ou pelo prazo de envio não atender às expectativas.</p><p>Com a <b>Delivery Promise (Beta)</b>, para todo produto que o cliente visualiza na vitrine, levou-se em conta a existência de estoque e a viabilidade de entrega para a localidade do cliente. Além disso, passamos a apresentar as informações relativas ao envio desde o começo da jornada de compra do cliente.</p> |
| Aumento do sortimento de produtos na vitrine | <p>Por limitações de funcionalidades como a <a href="https://help.vtex.com/pt/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw">regionalização de sellers</a>, <a href="https://help.vtex.com/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI">sellers abrangentes</a> e do <a href="https://help.vtex.com/pt/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa">algoritmo de seleção de sellers</a>, sem a <b>Delivery Promise (Beta)</b> o sortimento de produtos que aparece na vitrine para o cliente não corresponde à totalidade de produtos dos sellers.</p><p>Com a <b>Delivery Promise (Beta)</b>, o cliente é capaz de visualizar o sortimento completo de produtos de todos os sellers, desde que:<ul><li>Corretamente configurados.</li><li>Disponíveis em estoque.</li><li>Tenham forma de envio válida para o endereço fornecido pelo cliente.</li></ul></p> |
| Melhor experiência de compra | <p><b>A Delivery Promise (Beta)</b> promove melhor experiência de compra ao cliente como um todo:<ul><li>Elimina a frustração de descobrir no checkout a impossibilidade de realizar a compra.</li><li>Permite que o cliente visualize um número maior de produtos.</li><li>Permite que o cliente navegue pela vitrine de forma direcionada conforme seus objetivos, que podem ser priorizando o tipo de envio ou a compra em uma loja física.</li></p> |
| Incentivo à venda nas lojas físicas  | <b>A Delivery Promise (Beta)</b> permite ao cliente ter a certeza de encontrar determinados produtos nas lojas físicas, o que estimula a ida do cliente às lojas e aumenta as oportunidades de vendas. |

## Requisitos e restrições

O funcionamento da **Delivery Promise (Beta)** requer conhecer a localização do cliente desde o início da jornada de compra, de modo que a vitrine mostre somente os produtos com forma de envio válida. Para isso, é necessário instalar o [Intelligent Search](https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG), que solicita ao cliente o endereço da localidade. 

Para participar da fase atual da **Delivery Promise (Beta)**, é necessário atender às seguintes condições:

* <i class="far fa-check-circle"></i> **Requisito:** usar [Intelligent Search](https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG).
* <i class="far fa-check-circle"></i> **Requisito:** ter implementação de frontend [Store Framework](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework).
* <i class="fas fa-times"></i> **Restrição:** a loja não pode atuar como marketplace para contas do tipo [Seller Portal](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex) e nem sellers externos.

## Perguntas frequentes

Veja a seguir perguntas comuns relacionadas à **Delivery Promise (Beta)**:

[1. Quais são os requisitos para o produto aparecer na vitrine?](#1-quais-sao-os-requisitos-para-o-produto-aparecer-na-vitrine)

[2. A Delivery Promise (Beta) garante a exibição de todos os meus produtos na vitrine?](#2-a-delivery-promise-beta-garante-a-exibicao-de-todos-os-meus-produtos-na-vitrine)

[3. Com relação ao estoque do produto, como posso garantir que ele vai aparecer na vitrine?](#3-com-relacao-ao-estoque-do-produto-como-posso-garantir-que-ele-vai-aparecer-na-vitrine)

[4. Para utilizar a Delivery Promise (Beta), preciso solicitar a localização do cliente?](#4-para-utilizar-a-delivery-promise-beta-preciso-solicitar-a-localizacao-do-cliente)

[5. No contexto da Delivery Promise (Beta), o que acontece se o cliente se recusa a compartilhar sua localização e a VTEX não consegue inferir seu endereço?](#5-no-contexto-da-delivery-promise-beta-o-que-acontece-se-o-cliente-se-recusa-a-compartilhar-sua-localizacao-e-a-vtex-nao-consegue-inferir-seu-endereco)

[6. Onde devo configurar quais lojas atendem a determinados CEPs?](#6-onde-devo-configurar-quais-lojas-atendem-a-determinados-ceps)

[7. O que acontece com quem usa a funcionalidade Regionalização?](#7-o-que-acontece-com-quem-usa-a-funcionalidade-regionalizacao)

[8. Com a Delivery Promise (Beta) será possível exibir filtros e tags de frete grátis?](#8-com-a-delivery-promise-beta-sera-possivel-exibir-filtros-e-tags-de-frete-gratis)

[9. Posso não utilizar a Delivery Promise (Beta)?](#9-posso-nao-utilizar-a-delivery-promise-beta)

### 1. Quais são os requisitos para o produto aparecer na vitrine?

O lojista precisa garantir a correta configuração dos seguintes aspectos do produto:

* Cadastro a nível de produto e SKU no catálogo.
* Cadastro de preço.
* [Estratégia de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) que viabiliza o envio do pedido para o endereço fornecido pelo cliente.
* Contagem do produto no [inventário](https://help.vtex.com/pt/tutorial/gerenciar-inventario--tutorials_139) disponível para vendas, ou estoque infinito configurado ou opção habilitada para exibir o produto quando esgotado.
* Templates de [CMS](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/6OCY6S9tqBXPD5mgpbBInC) do frontend da loja configurados.

<div class = "alert alert-info">
Para mais informações, veja o artigo <a href="https://help.vtex.com/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382">Por que o produto não aparece no site?</a>.
</div>

### 2. A Delivery Promise (Beta) garante a exibição de todos os meus produtos na vitrine?

Quando as configurações necessárias para a exibição do produto na vitrine são feitas corretamente, a **Delivery Promise (Beta)** exibe na vitrine da loja todo o sortimento dos seus produtos e dos seus sellers. Se a indisponibilidade de um produto for causada por configurações incorretas ou pela falta de estoque desse produto, ele não será exibido na vitrine, mesmo com a nova funcionalidade. Para saber mais, veja o artigo [Por que o produto não aparece no site?](https://help.vtex.com/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382). 

### 3. Com relação ao estoque do produto, como posso garantir que ele vai aparecer na vitrine?

Existem três formas pelas quais isso pode ser feito:

* Manter o [inventário](https://help.vtex.com/pt/tutorial/gerenciar-inventario--tutorials_139) do produto com contagem de estoque para vendas (lembrando que os itens [reservados](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92) não estão disponíveis para venda).
* Habilitar a configuração [estoque infinito](https://help.vtex.com/pt/tutorial/gerenciar-inventario--tutorials_139) para o produto.
* Configurar o produto para aparecer na vitrine mesmo quando estiver esgotado. Para isso, acesse **Catálogo > Todos os produtos** no Admin VTEX e, na página de configuração do produto, na aba Produto, marque a opção **Sim** no campo `Mostrar produto esgotado`.

### 4. Para utilizar a Delivery Promise (Beta), preciso solicitar a localização do cliente?

O funcionamento da **Delivery Promise (Beta)** só é possível quando o cliente informa seu endereço ou quando a VTEX infere sua localidade. Essa inferência pode ser feita das seguintes formas:

* O endereço do cliente é capturado automaticamente quando ele aceita o plugin do navegador para compartilhar sua localização.
* Caso o navegador não tenha o plugin mencionado ou o cliente se recuse a compartilhar sua localização, a inferência do endereço será feita com base no endereço IP do dispositivo do cliente.

Em todas as opções mencionadas, o cliente tem a opção de a qualquer tempo fornecer seu endereço ou um endereço diferente.

### 5. No contexto da Delivery Promise (Beta), o que acontece se o cliente se recusa a compartilhar sua localização e a VTEX não consegue inferir seu endereço?

Neste caso, o lojista pode utilizar uma entre as seguintes estratégias:

* Definir [sellers abrangentes](https://help.vtex.com/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI), o que possibilita que os produtos destes sellers sejam exibidos para os clientes que não fornecem localização.
* Definir um CEP ou [geocordenadas](https://help.vtex.com/pt/tutorial/gerenciar-geolocalizacao--tutorials_138) padrão para clientes que não informam localização.

Sugerimos que seja próximo a um [estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) que armazene uma grande quantidade de produtos ou que seja próximo a região com maior volume de vendas.

### 6. Onde devo configurar quais lojas atendem a determinados CEPs?

Mesmo para quem usa a **Delivery Promise (Beta)**, essa configuração continua sendo feita nas [planilhas de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127) das [políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) dos sellers.

### 7. O que acontece com quem usa a funcionalidade Regionalização? 

A **Delivery Promise (Beta)** substitui todas as funcionalidades existentes no [Region V1](https://help.vtex.com/pt/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw) e V2, além de acrescentar melhorias de performance, experiência de compra e novas funcionalidades. Como a solução ainda está em desenvolvimento, a regionalização de sellers continua sendo usada normalmente pelos clientes que não participam da **Delivery Promise (Beta)**.

### 8. Com a Delivery Promise (Beta) será possível exibir filtros e tags de frete grátis?

Na fase atual do beta, não haverá filtros do tipo frete grátis. Por enquanto, vamos disponibilizar opções de filtros e tags por tipo de envio (retirada ou entrega), e por ponto de retirada. Na vitrine, serão exibidos os produtos dos sellers que estejam disponíveis para vendas.

### 9. Posso não utilizar a Delivery Promise (Beta)?

Usar ou não a **Delivery Promise (Beta)** é sua escolha. Caso você não queira solicitar a localização do comprador, você pode continuar utilizando a solução atual de navegação do cliente sem localização definida, e associar ou não a [sellers abrangentes](https://help.vtex.com/pt/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI). Entretanto, a melhor experiência de compra para o cliente com a vitrine de loja é obtida com a **Delivery Promise (Beta)**, sendo esta portanto a recomendação da VTEX.

