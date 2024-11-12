---
title: 'Opções de envio (Beta)'
id: 7gsdck3519Z3VPqzwFFHJL
status: ARCHIVED
createdAt: 2022-05-27T15:35:44.505Z
updatedAt: 2023-08-14T17:28:57.629Z
publishedAt: 
firstPublishedAt: 2022-05-31T18:53:28.695Z
contentType: tutorial
productTeam: Others
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: shipping-options-beta
locale: pt
legacySlug: delivery-options-beta
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

>ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href= "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.

**Opções de envio** é a funcionalidade que permite ao lojista criar, editar e gerenciar no mesmo local as opções de envio de pedidos, garantindo mais simplicidade e eficiência na gestão da sua operação. O termo envio é a forma geral de se referir a entrega ou retirada de um pedido. Na configuração de cada opção de envio, o lojista determina:

- O nome da opção de envio que aparecerá para o consumidor.
- O tipo de envio, se entrega ou retirada.
- O prazo de envio.
- A região geográfica para a qual a shipping option será aplicável.
- A tarifa de envio a ser cobrada do consumidor.

A interface das **Opções de envio** permite ao lojista definir e controlar todas as opções de envio apresentadas ao consumidor no checkout. Essa funcionalidade permitirá separar o valor cobrado dos consumidores do custo logístico registrado nas [planilhas de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127).

O objetivo com as **Opções de envio**, no entanto, não é substituir [políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) ou planilhas de frete. As planilhas de frete serão utilizadas na escolha da transportadora que vai entregar o pedido, e essa escolha é determinada pelo [Order Allocation Algorithm](https://help.vtex.com/pt/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA).

## Precificação da tarifa de envio

Com as **Opções de envio**, é feita uma separação entre o que é cobrado dos consumidores pelo envio do pedido e o custo do frete para o lojista, pois é possível configurar diferentes regras de precificação para a tarifa de envio. 

>ℹ️ Para que a escolha das transportadoras para envio do pedido seja feita corretamente, é necessário inserir nas planilhas de frete o custo real que as transportadoras cobram para realizar o envio.

As **Opções de envio** permitem ao lojista configurar a tarifa de envio a partir de:

- Valores fixos
- Valores com base no valor total do carrinho
- Valores com base no peso dos itens
- Valores sobre o custo do transporte

Vale ressaltar que na fase Beta as **Opções de envio** funcionam em paralelo às promoções de frete do módulo [Promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N).

## Seleção de sellers

Em **Opções de envio**, a seleção de sellers continua buscando as opções que oferecem menor custo para o lojista. O lojista determina o prazo máximo no qual o seller deve ser capaz de atender o pedido e, na experiência de checkout, o consumidor vê o prazo de envio real, isto é, o tempo de envio das transportadoras.

Em cada opção de envio, o lojista registra um SLA (_Service Level Agreement_), ou seja, um acordo de serviço com condições de envio do pedido. Por exemplo, um lojista cadastra duas opções de envio:

- Uma chamada `Entrega no mesmo dia`, com SLA de envio do pedido no mesmo dia. 
- Uma chamada `Padrão`, com SLA de envio do pedido em até 5 dias úteis. 

O algoritmo da plataforma VTEX, o [Order Allocation Algorithm](https://help.vtex.com/pt/tutorial/order-allocation-algorithm-beta--1zLCAyEdnVe3EsE9Kz88xA), analisa as combinações de lojas e centros de distribuição que atendem cada uma das opções de envio e busca selecionar aquelas que apresentam o menor custo de envio. No exemplo, o resultado é uma combinação de menor custo de envio no mesmo dia, e outra combinação de menor custo de envio em até 5 dias úteis.

>ℹ️ Com as **Opções de envio**, existe a garantia de que uma opção de envio disponível para a localidade sempre será apresentada ao consumidor, o que não ocorria antes. A única exceção é se não houver seller e política de envio que atendam às condições de uma shipping option. Neste caso, nenhuma shipping option aparecerá para o consumidor no checkout.

## Ações e configurações

As ações possíveis com as **Opções de envio** são as seguintes:

- [Adicionar opção de envio](#adicionar-opcao-de-envio)
- [Editar opção de envio](#editar-opcao-de-envio)
- [Visualizar listagem de opções de envio](#visualizar-listagem-de-opcoes-de-envio)

### Adicionar opção de envio

Para criar uma opção de envio, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Estoque e entrega > Opções de envio**.
    > Se sua loja utiliza o [Redesigned VTEX Admin](https://content.vtex.com/join-new-admin-beta-program-pt/), acesse **Configurações da loja** <i class="fas fa-cog" alt="engrenagem azul"></i> **> Envio > Opções de envio**.
2. Clique em `+ Criar opção de envio`.
3. Insira o nome de identificação da opção de envio. Este nome será visível para os consumidores na suas experiências de compra.
4. Selecione o tipo de envio: `Entrega` para entregar o pedido no endereço do consumidor, ou `Ponto de Retirada`, para o consumidor retirar o pedido em um [ponto de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R).
5. Selecione uma ou mais zonas de envio para as quais a opção de envio será válida. Zona de envio é uma delimitação geográfica que estabelece a região para a qual determinadas opções de envio são válidas. É possível utilizar a barra de busca para pesquisar pelo nome da zona de envio.
6. Determine o intervalo de tempo para o prazo de envio. É possível escolher entre as seguintes opções:
    - **Dias úteis:** defina um intervalo de tempo em dias. Por exemplo, de 3 até 5 dias úteis. 
    - **Tempo corrido:** defina o tempo total em dias, horas e/ou minutos.
    - **No mesmo dia:** não há configurações adicionais e a opção será ofertada sempre que houver ao menos uma loja e transportadora que consiga fazer a entrega no mesmo dia, independente do horário.
7. Selecione a regra de precificação da tarifa de envio a ser aplicada, com base em um dos seguintes critérios:
    - **Custo:** a tarifa varia conforme a origem do produto e os custos com a transportadora, sendo que o consumidor paga a tarifa na totalidade.
    - **Pelo valor do pedido:** a tarifa é relativa ao preço do pedido, sendo possível estabelecer uma ou mais faixas de preço. Uma nova faixa será adicionada sempre que o valor máximo do intervalo for diferente de `Ilimitado`.
    - **Por peso:** a tarifa varia conforme o peso do pacote, sendo possível definir uma ou mais faixas de preço por quilogramas (kg). Uma nova faixa será adicionada sempre que o valor máximo do intervalo for diferente de `Ilimitado`.
    - **Markup:** a tarifa é resultado da soma do custo do envio mais um percentual sobre este custo.
    - **Frete grátis:** sem custos para o consumidor, não requer configurações adicionais.
8. Clique no botão `Salvar`.

![opcoes_envio_criacao_pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

### Editar opção de envio

Você pode alterar as configurações de uma opção de envio seguindo os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Estoque e entrega > Opções de envio**.
    > Se sua loja utiliza o [Redesigned VTEX Admin](https://content.vtex.com/join-new-admin-beta-program-pt/), acesse **Configurações da loja** <i class="fas fa-cog" alt="engrenagem azul"></i> **> Envio > Opções de envio**.
2. Identifique a opção de envio desejada. Você pode utilizar a barra de busca para filtrar por nome.
3. Clique no ícone menu <i class="fas fa-ellipsis-v"></i>.
4. Selecione a opção `Editar`.
5. Realize as alterações desejadas no formulário da opção de envio.
6. Clique no botão `Salvar.`

Além de editar uma opção de envio, no ícone menu <i class="fas fa-ellipsis-v"></i> você pode realizar as seguintes ações:

- **Duplicar:** cria uma opção de envio idêntica, o que pode facilitar criar variações.
- **Desativar/Ativar:** a opção de envio adquire o status `inativo` e não aparece mais no checkout. É possível reativar uma opção de envio a qualquer momento.
- **Apagar:** a opção de envio é permanentemente apagada e não é possível recuperá-la.

### Visualizar listagem de opções de envio

Uma vez que você tenha opções de envio configuradas, elas vão aparecer em uma listagem em **Configurações da loja > Envio > Opções de envio**, conforme a imagem a seguir:

![opcoes_envio_listagem_pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

A tabela abaixo contém a descrição das colunas apresentadas:

| **Coluna** | **Descrição** |
| ---------- | ---------- |
| Nome | Nome que identifica a opção de envio e que aparece para o consumidor na sua experiência de compra. |
| Tipo | Tipo de envio, se é entrega ou retirada. |
| Tarifa | Regra de precificação da opção de envio, na qual a tarifa de envio pode ser cobrada com base em:<ul><li><b>Custo:</b> a tarifa varia conforme a origem do produto e os custos com a transportadora.</li><li><b>Por pedido:</b> a tarifa é relativa ao preço do pedido, sendo possível estabelecer uma ou mais faixas de preço.</li><li><b>Por peso:</b> a tarifa varia conforme o peso do pacote, sendo possível definir uma ou mais faixas de preço por quilogramas (kg), determinando uma referência de peso médio e máximo para cada faixa.</li><li><b>Frete grátis:</b> sem custos para o consumidor, não requer configurações adicionais.</li><li><b>Markup:</b> a tarifa é definida pelo acréscimo de um valor percentual sobre o custo de envio.</li></ul>|
| Prazo | Período no qual o envio deve ser realizado, seja no mesmo dia ou após um intervalo de tempo. |
| Zonas | Delimitação geográfica que será atendida pela operação, chamada zona de envio. |
| Status | Pode ser `Ativo`, quando a opção de envio está disponível, ou `Inativo`, se a opção tiver sido temporariamente desabilitada. |

