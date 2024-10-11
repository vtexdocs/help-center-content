---
title: 'As estratégias de envio'
id: 4IPeNztIXsZI4oA5TyES9N
status: PUBLISHED
createdAt: 2022-03-07T17:45:18.081Z
updatedAt: 2022-03-10T16:12:39.772Z
publishedAt: 2022-03-10T16:12:39.772Z
firstPublishedAt: 2022-03-07T18:16:31.599Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: shipping-strategies
locale: pt
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

As opções de envio que ficam disponíveis para o cliente no checkout da sua loja são calculadas pelo **Estoque & entrega**. Estas opções dependem da localização do cliente e da [estratégia de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) da sua loja. 

A estratégia de envio define como os estoques, as docas e as políticas de envio interagem para atender às necessidades dos seus clientes e do seu negócio. 

![Estrategia Envio](https://images.ctfassets.net/alneenqid6w5/a0tXw0SPa0zFg5o0byFeS/3b4eb756f2c833f5b3fa7726c3cbdce7/Estrategia_Envio.png)

A estratégia de envio é definida por três entidades logísticas:

* [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140): regras acordadas entre lojas e [transportadoras](https://help.vtex.com/pt/tutorial/o-que-e-uma-transportadora--7u9duMD5UQa2QQwukAWMcE). É na política de envio que a loja deve cadastrar as condições de entrega que a transportadora oferece. Com essas informações, a plataforma filtra e calcula quais transportadoras satisfazem as condições do pedido e apresenta ao cliente. A política de envio também é utilizada para selecionar o envio por [pontos de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R).
* [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb): identificação do local de armazenamento dos itens. A política de envio não é a única variável para a escolha da entrega; é preciso considerar, também, em qual estoque estão os produtos do pedido.
* [Doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj): ponto de retirada do estoque. É pela doca que a loja define a retirada dos pacotes. As transportadoras retiram os pacotes para envio pela doca.

>ℹ️ Há outros cenários possíveis para o uso de docas. Consulte o artigo [Doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) e confira os casos de uso. Para saber mais sobre o fluxo das entregas, consulte o artigo [Como funciona o fluxo de entregas](https://help.vtex.com/pt/tutorial/como-funciona-o-fluxo-de-entregas--4ku3QKWfxmUO8UgA0yqgUq).

Note que:

* Pacote é o embrulho que contém itens do pedido.
* Estoque é a identificação dos locais onde as mercadorias estão armazenadas.
* Doca é o ponto intermediário entre o envio e o armazenamento dos pacotes.
* O controle dos itens do estoque é feito pelo [Inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139).
* Envios são todos os despachos de pedidos da loja (entrega ou retirada).
* Entrega é um tipo de envio em que o cliente recebe os itens comprados no ecommerce no seu endereço.

### Como configurar

A ordem sugerida de configuração para o funcionamento esperado das [estratégias de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)  é:

1. [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)
2. [Planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127)
3. [Doca](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
4. [Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137)

## Ponto de retirada

Para os casos em que a loja oferece [pontos de retirada](https://help.vtex.com/pt/tutorial/como-funcionam-pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) (onde o cliente retira o pedido), a loja deve cadastrar o ponto de retirada e, depois, realizar as configurações da estratégia de envio para esse tipo de entrega. Isso ocorre porque a plataforma também calcula os pontos de retirada disponíveis a partir da localização do cliente, conferindo o estoque, a doca e o transporte para que o produto fique disponível para retirada. 

O ponto de retirada fica disponível no checkout como uma opção de envio, e o cliente escolhe entre **Entrega** (transportadora) e **Retirada** (ponto de retirada).

>ℹ️ As configurações da Estratégia de envio também podem ser feitas via API. Confira as APIs disponíveis:
> <body>
>
> *[API de docas](https://developers.vtex.com/vtex-rest-api/reference/docks)
>
> *[API de estoques](https://developers.vtex.com/vtex-rest-api/reference/createupdatewarehouse)
>
> *[API de políticas de envio](https://developers.vtex.com/vtex-rest-api/reference/get_logistics-pvt-shipping-policies-id)
>
> *[API de pontos de retirada](https://developers.vtex.com/vtex-rest-api/reference/listallpickupppoints)
>
> </body>

### Como configurar

Para [estratégias de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) que utilizam pontos de retirada, a ordem de cadastro sugerida é:

1. [Cadastro dos pontos de retirada](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E) 
2. [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)
3. [Planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127)
4. [Doca](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
5. [Estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137)
6. [Cadastro de geolocalização](https://help.vtex.com/pt/tutorial/registering-geolocation--tutorials_138)
7. Configuração dos pontos de retirada disponíveis no checkout

>⚠️ Confira os passos detalhados no artigo [Como configurar um ponto de retirada.](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#como-configurar)

## Tempo de envio e feriados

Quando o cliente tem itens no checkout e adiciona os dados de localização, a plataforma estima o tempo de envio do pedido. Essa estimativa (também chamada SLA) é calculada considerando os seguintes critérios:

* Horários [configurados nos estoques](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137#campos-de-cadastro).
* Horários [configurados na doca](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW#campos-de-cadastro).
* Horários [configurados na política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio): configurados nos campos **Horário de coleta** e **Horário de funcionamento**. 
* Feriados cadastrados.

Para saber mais detalhes sobre o cálculo de SLA, consulte o artigo [Como é calculado o prazo de entrega do pedido](https://help.vtex.com/pt/tutorial/como-e-calculado-o-prazo-de-entrega-do-pedido--1TOuKCIjGQmqOqQkEqCg82).

### Feriados

Os feriados são importantes na determinação do prazo de envio, pois estão diretamente relacionados com o prazo de entrega dos pedidos da sua loja. A VTEX considera como feriados os dias em que a loja não funciona.

Para cadastrar feriados na plataforma, você pode:

* Utilizar a seção [Feriados](https://help.vtex.com/pt/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk) no Admin VTEX.
* Utilizar a [API de Feriados](https://developers.vtex.com/vtex-rest-api/reference/holidays).

>⚠️ É recomendado que o cadastro de feriados seja feito depois de configurar as [Estratégias de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3).

É possível cadastrar horários de entrega para envios agendados de transportadoras e pontos de retirada. A funcionalidade **[Entrega agendada](https://help.vtex.com/pt/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)** permite que a loja ofereça janelas de entrega para seus clientes.

>ℹ️ O envio depende também do [custo de envio](https://help.vtex.com/pt/tutorial/custo-final-do-envio--5bwhIO108VA5Y2YOpef9lV) que a sua loja oferece aos clientes. Esse assunto será abordado nos artigos seguintes. Para mais informações sobre como é feita a escolha das transportadoras para realizar uma entrega, consulte o artigo [Como funciona o cálculo do frete.](https://help.vtex.com/pt/tutorial/como-funciona-o-calculo-de-frete--tutorials_116)

