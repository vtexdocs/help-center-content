---
title: 'Pontos de retirada'
id: 2fljn6wLjn8M4lJHA6HP3R
status: PUBLISHED
createdAt: 2020-07-01T19:16:21.675Z
updatedAt: 2023-07-25T16:53:09.640Z
publishedAt: 2023-07-25T16:53:09.640Z
firstPublishedAt: 2020-07-01T19:25:40.136Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: pontos-de-retirada
locale: pt
legacySlug: como-funciona-o-ponto-de-retirada
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
---

Pontos de retirada são locais onde clientes retiram seus pedidos. Uma loja disponibiliza os pontos de retirada para que seus clientes tenham a opção de escolher receber seu pedido no seu endereço (entrega) ou retirá-lo em um local determinado (retirada).

Há diferentes possibilidades para o uso de pontos de retirada dependendo da organização e estratégia de negócio da loja, como por exemplo:

* Pontos de retirada que coincidem com o estoque.
* Lojas físicas que também são pontos de retirada.
* Locais exclusivos para retirada de pedidos.

Em todos os casos é preciso atentar-se à necessidade (ou não) de transporte entre o [estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) e o ponto de retirada. Nesse caso, [configure](#como-configurar) os pontos de retirada com transportadoras que realizam o transporte dos pacotes até o ponto de retirada.

## Como funcionam pontos de retirada

Atualmente a plataforma limita a seleção aos 300 pontos de retirada mais próximos do endereço do cliente, independentemente de os pontos de retirada estarem configurados como ativos ou inativos. Por isso, é possível que pontos de retirada sejam desconsiderados mesmo que satisfaçam o requisito da localização.

É possível [configurar a quantidade](#como-configurar-pontos-de-retirada) de pontos de retirada que serão exibidos no checkout para o cliente, sendo que o limite configurado é aplicado por [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), conforme os exemplos a seguir:

> Exemplo 1: a loja configura o limite de cinco pontos de retirada mostrados no checkout. A política de envio está associada a três pontos de retirada, portanto, somente três opções são mostradas no checkout. 

> Exemplo 2: a loja configura o limite de cinco pontos de retirada mostrados no checkout. Existem duas políticas de envio e cada uma está associada a três diferentes pontos de retirada, portanto, seis opções são apresentadas no checkout. Ou seja, mesmo que o limite seja cinco, a regra é aplicada para cada política de envio.

Vale ressaltar que:

* Os pontos de retirada que ficam disponíveis para o cliente no checkout dependem da disponibilidade de itens e seu transporte até o ponto de retirada.
* A VTEX limita a localização a um raio de 50km entre o ponto de retirada e o endereço do cliente.
* Nos casos em que há transporte entre o [estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) e o ponto de retirada, a VTEX também leva em consideração a existência dessa rota para a escolha do ponto de retirada.

>ℹ️ Com pontos de retirada, a VTEX também possibilita que o lojista:
> <body>
> <ul>
> <li>Configure **pontos de retirada de contingência:** pontos de retirada que podem fornecer inventário a outros pontos quando for necessário, possibilitando a escolha mais conveniente ao comprador. Para saber mais, acesse [Ponto de retirada de contingência.</li>](https://help.vtex.com/pt/tutorial/criar-ponto-de-retirada-de-contingencia-para-garanti-lo-como-opcao-no--3mowqWEfjyM2g6WoWgE0Ao)
> <li>Configure um **seller white label como ponto de retirada.** Saiba mais em [Configurar Seller White Label como Ponto de Retirada (Pickup Point).</li>](https://help.vtex.com/pt/tutorial/configurar-seller-white-label-ponto-de-retirada-pickup-point--6fSUE2O0taaoKieAaiuc4e)
> <ul>
> </body>

É importante verificar se as configurações da quantidade de pontos de retirada estão dentro dos limites aceitos e de acordo com a estratégia de vendas da loja. Isso permite que a [simulação de envio](https://help.vtex.com/pt/tutorial/simulador-de-envio--tutorials_144) considere os dados corretamente e garante, por exemplo, que a configuração do número de pontos de retirada não limita a operação da loja.

## Como configurar pontos de retirada

A VTEX considera que o ponto de retirada é uma forma de envio e, por isso, as configurações na plataforma obedecem aos critérios de uma política de envio. Assim, para que os pontos de retirada fiquem disponíveis para o cliente é preciso:

1. [Cadastrar o ponto de retirada](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E), o que pode ser feito das seguintes formas:
    - **Via Admin:** cadastrando cada ponto de retirada individualmente.
    - **Via planilha Admin:** cadastrando vários pontos simultaneamente.
    - **Via API:** com a requisição [Create/Update Pickup Point](https://developers.vtex.com/vtex-rest-api/reference/pickup-points-1#createupdate).
2. Configurar a [estratégia de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) do ponto de retirada:
    - Criar pelo menos uma [doca](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) que atenda o ponto de retirada.
    - Criar pelo menos um [estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137) que atenda o ponto de retirada.
    - Criar pelo menos [uma política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)  para o ponto de retirada, o que inclui adicionar a [planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127) com a localização do ponto de retirada.

3. Associar o ponto de retirada à política de envio:
    - a. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.  
    - b. Na aba **Política de envio**, selecione a política de envio criada para o ponto de retirada.
    - c. Na coluna **Ações**, clique no ícone <i class="fas fa-pen"></i> para edição.
    - d. Ative o <i class="fas fa-toggle-on"></i> do campo **Relacionar pontos de retirada**.
    - e. Selecione o ponto de retirada pelos campos disponíveis.![relacionarpontosretiradaPT](https://images.ctfassets.net/alneenqid6w5/6BvdDCekjMPgqE0ULZmNaV/666ecbf11f8f19e5b8b1ca8b381abbf8/relacionarpontosretiradaPT.png)>ℹ️ Para lojas que possuem mais de 50 pontos de retirada, recomendamos utilizar o campo Tags dos pontos de retirada ao criar um ponto de retirada. Utilizar tags facilita a busca dos pontos de [retirada na hora de relacioná-los com a política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio).Lembre-se também que a política de envio que está associada a um ponto de retirada não fica disponível para outro tipo de envio. Recomendamos criar uma política de envio exclusiva do ponto de retirada.

4. [Cadastrar a geolocalização](https://help.vtex.com/pt/tutorial/gerenciar-geolocalizacao--tutorials_138): para maior precisão da localização dos pontos de retirada no checkout.>ℹ️ A visualização dos pontos de retirada com mapa e horário no checkout está disponível apenas para o Checkout V6.

5. Habilitar a solicitação de endereço no checkout. Dessa forma, o cliente precisa adicionar o seu endereço para ser usado na nota fiscal:
    - a. No Admin VTEX, acesse **Configurações da loja > Storefront > Checkout**, ou digite *Checkout* na barra de busca no topo da página. 
    - b. Seleciona a configuração utilizada na loja e clique no ícone <i class="fas fa-cog"></i>.
    - c. Clique na aba **Checkout** na barra superior.
    - d. Selecione o <i class="fas fa-toggle-on"></i> do campo **Endereço na nota fiscal para retirada em loja**.![NFpontoretiradaPT](https://images.ctfassets.net/alneenqid6w5/7yOdSylqbRcHEfT9c9OfwX/491e27746972c957683057e5c944bb84/NFpontoretiradaPT.png)>⚠️ A opção de **Endereço na nota fiscal para retirada em loja** deve estar habilitada em todas as lojas do Brasil, pois é num requisito que a Nota Fiscal emitida contenha a informação do endereço do cliente, mesmo que a opção de entrega do pedido seja no ponto de retirada. O endereço preenchido pelo cliente será registrado no campo `invoiceData`do [orderForm](https://developers.vtex.com/vtex-rest-api/reference/orderform-fields#invoicedata).

6. Configurar a quantidade de pontos de retirada que são exibidos no checkout:
    - a. No Admin VTEX, acesse **Configurações da loja > Envio > Configurações**, ou digite *Envio* na barra de busca no topo da página e selecione *Configurações da loja / Envio*. 
    - b. Altere o campo **Configurações de pontos de retirada:** utilize os botões <i class="far fa-caret-square-up"></i> e <i class="far fa-caret-square-down"></i> e selecione a quantidade dos primeiros pontos de retirada que ficarão disponíveis na lista de busca exibida no checkout para o cliente.
