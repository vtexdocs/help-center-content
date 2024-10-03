---
title: 'Política de envio (Beta)'
id: QJqfPfjGvoXJeuDsHxvUb
status: DRAFT
createdAt: 2021-04-22T17:19:04.531Z
updatedAt: 2023-03-17T14:32:24.441Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: shipping-policy-beta
locale: pt
legacySlug: politica-de-envio-beta
subcategoryId: unknown-subcategory
---

Política de envio é um conjunto de regras que definem as opções e condições de frete que serão apresentadas ao consumidor no momento da finalização da compra. As condições de frete incluem configurações de horário de funcionamento da transportadora, prazos de entrega, valores adicionais de frete, tipos de produtos passíveis de entrega (modais) e janelas de entrega.

Todas essas configurações são baseadas principalmente no contrato que a sua loja tem com uma [transportadora](https://help.vtex.com/pt/tutorial/o-que-e-uma-transportadora--7u9duMD5UQa2QQwukAWMcE), com um prestador de serviço, ou com qualquer outro tipo de contrato de serviço de frete que sua loja ofereça aos consumidores.

>ℹ️ É possível que uma mesma transportadora seja base de múltiplas políticas de envio, cada uma com suas particularidades. Veja abaixo como criar, editar e excluir políticas de envio.

Pela plataforma da VTEX, é possível: 

*   [Cadastrar políticas de envio](#cadastrar-uma-politica-de-envio)
*   [Editar políticas de envio](#editar-uma-politica-de-envio)
*   [Excluir políticas de envio](#excluir-uma-politica-de-envio)

## Cadastrar uma política de envio

1. Acesse o módulo `Estoque & entrega`.
2. Acesse a aba `Estratégia de envio`.
3. Clique no botão `Criar política de envio`.
4. Preencha os campos da tela e clique em `Salvar alterações` ao terminar:
*   **Ativa**: ativa ou desativa a política de envio.
*   **Nome:** nome interno da política de envio.
*   **ID:** identificador interno e para integradores. Deve ser preenchido apenas com letras e números. Caso não seja preenchido, será criado um ID automaticamente.
*   **[Método de Envio](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126):** nome do tipo de entrega. Serve para separar os diferentes serviços de entrega. É o nome que será exibido na finalização de compra para o cliente. Ex. expresso vs. normal. 
*   **[Upload de tarifas de envio](https://help.vtex.com/pt/tutorial/como-montar-a-planilha-de-frete--tutorials_127)**: é a tabela com os valores e prazos de frete assumidos pela política de envio. 
*   **Dimensões do Pacote:**
    *   **Soma das dimensões:** limite de dimensão do pacote que leva em conta a soma da medida de todas as arestas do pacote. Ao atingir esse valor, ou a entrega é dividida em pacotes ou não é feita. Estes dados são passados pela transportadora no momento de fechamento do contrato com a mesma. 
    *   **Maior aresta:** limite de tamanho da maior aresta do pacote. Ao atingir esse valor, ou a entrega é dividida em pacotes ou não é feita.
    *   **[Fator de peso cúbico](https://help.vtex.com/pt/tutorial/como-o-peso-cubado-e-calculado--tutorials_128):** fator que será utilizado para cálculo do peso cubado. Soma das medidas, dividida pelo fator cúbico. 
    *   **Fator de peso mínimo:** use o peso cúbico apenas se este passar deste valor. Limite de peso onde, a partir dele, será considerado o cálculo do peso cubado para o frete.
*   **Fins de semana e feriados:** os dias da semana para entregas. Marque as flags, para ativar a entrega nos seguintes cenários: `Entrega nos sábados`, `Entrega nos domingos`, `Entrega nos feriados`.
*   **[Modais ativos](https://help.vtex.com/pt/tutorial/como-funciona-o-modal--tutorials_125):** especificações de produtos que necessitam de uma entrega especial. São as limitações de envio do produto que a política de envio permite. Marque as flags para ativar a entrega nos seguintes cenários: `químicos`, `eletrônicos`, `móveis`, `vidro`, `líquidos`, `colchões`, `refrigerados`, `pneus`, `linha branca` e `armas de fogo`.
*   **Itens do pacote:** descrição de valor e número de itens do pacote:
    *   **Valor mínimo:** valor mínimo aceito pela política de envio, para realizar o frete.
    *   **Mínimo de itens:** quantidade mínima de itens aceita por frete, pela política de envio.
    *   **Valor máximo:** máximo valor aceito pela política de envio, para realizar o frete.
*   **Relacionar pontos de retirada:** marque esta flag, para abrir a opção de Pontos de retirada. Clique no dropdown e selecione entre `Tags`, `Pontos de retirada` e `Sellers` previamente cadastrados.
*   **[Horário de funcionamento:](https://help.vtex.com/pt/tutorial/configurar-horario-de-funcionamento-para-transportadoras--2oGpbInIgdxSWUi3TZjdCS)** os horários em que a política de envio faz coletas ou as janelas de tempo em que ela envia os itens para os clientes. Estas configurações influenciam o cálculo do tempo de entrega:
    *   **Período de envio:** é onde você cadastra os períodos de funcionamento da política de envio, ou seja, os horários em que ela aceita o recebimento do pedido. Para configurar selecione a janela `Período de envio` :
        *   `Aceitar compras fora do horário de funcionamento`: ativa ou inativa o recebimento de compras fora do horário de funcionamento. Quando ativo, o intervalo de tempo do momento do pedido até o início horário, será somado ao tempo total da entrega.
        *   Selecione o `Dia da semana`, e preencha `Horário de início` e `Horário de fim`.
        *   Para adicionar mais dias da semana, clique em `Adicionar período de envio`.
    *   **Horário de coleta:** é onde você cadastra os horários em que a política de envio coleta pacotes em seu estoque ou centro de distribuição, para em seguida enviá-los aos clientes finais. Caso o pedido seja feito antes do início do horário de coleta, nenhum tempo será adicionado ao tempo total da entrega. No entanto, se ele for feito após o horário de coleta, o intervalo de tempo do momento do pedido até o início horário, será somado ao tempo total da entrega.
        *   Selecione o `Dia da semana` e preencha o `Horário da coleta`. 
        *   Para adicionar mais dias da semana, clique em `Adicionar período de coleta`.
*   **[Entrega agendada](link)**: essa funcionalidade pode ser habilitada caso a política de envio ofereça o serviço de entrega agendada. É aqui que você deverá adicionar as janelas de entrega que ficarão disponíveis para o cliente ao final da compra. Para utilizar, habilite `entrega agendada` e preencha:
    *   **Tempo máximo de entrega:** define o tempo máximo de entrega, deve ser preenchido com o tempo em dias.
    *   **Período de entrega:** define as janelas de entrega que a política de entrega realiza. Você deve adicionar os dias da semana, horários de `Início` e `Fim` da janela de entrega, e valor adicional. Clique em `Adicionar novo período de entrega` para adicionar mais janelas de entrega. 
    *   **Capacidade de entrega:** permite limitar quantos itens/pedidos podem ser entregues para cada janela de entrega. Essa funcionalidade pode ser habilitada, ou não. O uso ou não dessa funcionalidade não interfere no funcionamento da plataforma. Para saber mais sobre esses recursos consulte a [Entrega agendada](link) e [Gerenciar capacidade de entrega](link). Caso seja habilitada você deve: 
        *   Escolher a unidade da capacidade de entrega entre `itens` e `pedidos`.
        *   Conferir as janelas de entrega como em **Período de entrega.**
        *   Definir o número da capacidade de entrega. Recomendamos cuidado especial ao escolher a unidade e a quantidade da capacidade de entrega, pois o sistema não calcula a disponibilidade da `capacidade de entrega` levando em conta a quantidade de itens sendo comprada. Então, se a janela de entregas ainda tiver capacidade para 2 itens e seu cliente estiver comprando 4 itens, ele ainda terá a opção de selecionar a janela de entrega disponível. 
É importante lembrar que as janelas de entrega deixam de ficar disponíveis aos clientes caso já tenham atingido o limite da `capacidade de entrega`. Para que uma janela fique novamente disponível aos clientes, é preciso aumentar a quantidade de itens/pedidos da capacidade de entrega da janela.

## Editar uma política de envio

1. Acesse o módulo `Estoque & entrega`.
2. Acesse a aba `Estratégia de envio`.
3. Clique na `política de envio` que deseja alterar.
4. Altere `os campos de` [Cadastro da política de envio ](#Cadastrar-uma-política de-envio) e salve.

## Excluir uma política de envio

1. Acesse o módulo `Estoque & entrega`.
2. Acesse a aba `Estratégia de envio`.
3. Passe o mouse sobre a política de envio que deseja excluir.
4. Clique no ícone de lixeira.
5. Clique no botão `Deletar`.
