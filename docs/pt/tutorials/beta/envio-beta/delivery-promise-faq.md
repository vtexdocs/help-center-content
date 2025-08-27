---
title: 'Delivery Promise: FAQ'
id: 2frHHK5uPsQrLK5XbYHALN
status: PUBLISHED
createdAt: 2025-08-07T14:54:46.418Z
updatedAt: 2025-08-07T15:03:08.816Z
publishedAt: 2025-08-07T15:03:08.816Z
firstPublishedAt: 2025-08-07T15:03:08.816Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: delivery-promise-faq
legacySlug: delivery-promise-faq
locale: pt
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

Veja a seguir perguntas comuns relacionadas à **[Delivery Promise (Beta)](https://help.vtex.com/pt/tutorial/delivery-promise-beta--p9EJH9GgxL0JceA6dBswd)**:

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

> ℹ️ Para mais informações, veja o artigo [Por que o produto não aparece no site?](https://help.vtex.com/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).

### 2. A Delivery Promise (Beta) garante a exibição de todos os meus produtos na vitrine?

Quando as configurações necessárias para a exibição do produto na vitrine são feitas corretamente, a **Delivery Promise (Beta)** exibe na vitrine da loja todo o sortimento dos seus produtos e dos seus sellers. Se a indisponibilidade de um produto for causada por configurações incorretas ou pela falta de estoque desse produto, ele não será exibido na vitrine, mesmo com a nova funcionalidade. Para saber mais, veja o artigo [Por que o produto não aparece no site?](https://help.vtex.com/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382). 

### 3. Com relação ao estoque do produto, como posso garantir que ele vai aparecer na vitrine?

Existem três formas pelas quais isso pode ser feito:

* Manter o [inventário](https://help.vtex.com/pt/tutorial/gerenciar-inventario--tutorials_139) do produto com contagem de estoque para vendas (lembrando que os itens [reservados](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92) não estão disponíveis para venda).
* Habilitar a configuração [estoque infinito](https://help.vtex.com/pt/tutorial/gerenciar-inventario--tutorials_139) para o produto.
* Configurar o produto para aparecer na vitrine mesmo quando estiver esgotado. Para isso, acesse **Catálogo > Todos os produtos** no Admin VTEX e, na página de configuração do produto, na aba Produto, marque a opção **Sim** no campo `Mostrar quando estiver fora de estoque`.

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
