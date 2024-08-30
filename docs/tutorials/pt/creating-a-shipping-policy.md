---
title: 'Criar uma política de envio'
id: 66rJO4LKBdyMJOH6Z3dsaT
status: PUBLISHED
createdAt: 2024-01-30T21:08:12.106Z
updatedAt: 2024-06-11T19:05:19.723Z
publishedAt: 2024-06-11T19:05:19.723Z
firstPublishedAt: 2024-01-31T01:09:33.011Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: criar-uma-politica-de-envio
locale: pt
legacySlug: criar-uma-politica-de-envio
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

[Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) é um conjunto de regras e configurações que definem quais opções e condições de envio serão apresentadas aos clientes no checkout. A relação entre **política de envio**, [estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) e [doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) é o que compõe sua [estratégia de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) na VTEX.

Este artigo apresenta como você cria uma política de envio pelo Admin VTEX. Se você deseja acompanhar e gerenciar suas políticas, veja o artigo [Gerenciar políticas de envio](https://help.vtex.com/pt/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE).

Para criar uma nova política de envio, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio > Políticas de Envio** ou digite **Estratégia de Envio** na barra de busca no topo da página.
2. Clique no botão `Criar política de envio`.
3. Preencha os campos da tela descritos abaixo e, em seguida, clique em `Salvar alterações`.

*   **Ativa**: ativa ou desativa a política de envio.
*   **Nome:** nome interno da política de envio.
*   **ID:** identificador interno e para integradores. Deve ser preenchido apenas com letras e números, e não deve conter espaços. Caso não seja preenchido, será criado um ID automaticamente. 
*   **[Método de Envio](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126):** nome do tipo de entrega. Serve para separar os diferentes serviços de entrega. É o nome que será exibido na finalização de compra para o cliente. Ex. expresso vs. normal. 
*   **[Upload de tarifas de envio](https://help.vtex.com/pt/tutorial/como-montar-a-planilha-de-frete--tutorials_127)**: é a tabela com os valores e prazos de frete assumidos pela política de envio. 
*   **[Dimensões do Pacote](https://help.vtex.com/pt/tutorial/como-funciona-o-empilhamento--tutorials_124):**
    *   **Soma das dimensões:** limite de dimensão do pacote que leva em conta a soma da medida de todas as arestas do pacote. Ao atingir esse valor, ou a entrega é dividida em pacotes ou não é feita. Estes dados são passados pela transportadora no momento de fechamento do contrato com a mesma. 
    *   **Maior aresta:** limite de tamanho da maior aresta do pacote. Ao atingir esse valor, ou a entrega é dividida em pacotes ou não é feita.
    *   **[Fator de peso cúbico](https://help.vtex.com/pt/tutorial/como-o-peso-cubado-e-calculado--tutorials_128):** fator que será utilizado para cálculo do peso cubado. Soma das medidas, dividida pelo fator cúbico. 
    *   **Fator de peso mínimo:** use o peso cúbico apenas se este passar deste valor. Limite de peso onde, a partir dele, será considerado o cálculo do peso cubado para o frete.
*   **Fins de semana e feriados:** os dias da semana para entregas. Marque as flags, para ativar a entrega nos seguintes cenários: `Entrega nos sábados`, `Entrega nos domingos`, `Entrega nos feriados`.
*   **[Modais ativos](https://help.vtex.com/pt/tutorial/como-funciona-o-modal--tutorials_125):** especificações de produtos que necessitam de uma entrega especial. São as limitações de envio do produto que a política de envio permite. Marque as flags para ativar a entrega nos seguintes cenários: `químicos`, `eletrônicos`, `móveis`, `vidro`, `líquidos`, `colchões`, `refrigerados`, `pneus`, `linha branca` e `armas de fogo`.
*   **Itens do pacote:** descrição de valor e número de itens do pacote:
    *   **Valor mínimo:** valor mínimo aceito pela política de envio, para realizar o frete.
    *   **Mínimo de itens:**  múltiplo mínimo da quantidade de itens aceita pela transportadora. Por exemplo, se for preenchido com o valor **3**, significa que a transportadora só realiza  entregas que têm quantidades de itens múltiplos de  três (3, 6, 9, 21…).
    *   **Valor máximo:** máximo valor aceito pela política de envio, para realizar o frete.
*   **Relacionar pontos de retirada:** marque esta flag, para abrir a opção de Pontos de retirada. Clique no dropdown e selecione entre `Tags dos pontos de retirada`, `Nomes dos pontos de retirada` e `Importar ponto de retirada de sellers` previamente cadastrados.
*   **[Horário de funcionamento:](https://help.vtex.com/pt/tutorial/configurar-horario-de-funcionamento-para-transportadoras--2oGpbInIgdxSWUi3TZjdCS)** os horários em que a transportadora faz coletas e as janelas de tempo em que ela envia os itens para os clientes. Estas configurações influenciam o cálculo do tempo de entrega:
    *   **Janela de envio:** é onde você cadastra os períodos de funcionamento da transportadora, ou seja, os horários em que ela aceita o recebimento do pedido. Para configurar selecione a janela `Janela de envio`:
        *   `Aceitar compras fora do horário de funcionamento`: ativa ou inativa o recebimento de compras fora do horário de funcionamento. Quando ativo, o intervalo de tempo do momento do pedido até o início horário, será somado ao tempo total da entrega.
        *   Selecione o `Dia da semana`, e preencha `Horário de início` e `Horário de término`.
        *   Para adicionar mais dias da semana, clique em `Adicionar janela de envio`.
    *   **Horário de coleta:** é onde você cadastra os horários em que a transportador coleta pacotes em seu estoque ou centro de distribuição, para em seguida enviá-los aos clientes finais. Caso o pedido seja feito antes do início do horário de coleta, nenhum tempo será adicionado ao tempo total da entrega. No entanto, se ele for feito após o horário de coleta, o intervalo de tempo do momento do pedido até o início horário, será somado ao tempo total da entrega.
        *   Selecione o `Dia da semana` e preencha o `Horário da coleta`. 
        *   Para adicionar mais dias da semana, clique em `Adicionar horário de coleta`.

>⚠️ A **Janela de envio** e **Horário de coleta** são opções excludentes, pois um mesmo período não pode ser simultaneamente destinado a ações diferentes.

*   **[Entrega agendada:](https://help.vtex.com/pt/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)** essa funcionalidade pode ser habilitada caso a política de envio ofereça o serviço de entrega agendada. É aqui que você deverá adicionar as janelas de entrega que ficarão disponíveis para o cliente ao final da compra. Para utilizar, habilite `entrega agendada` e preencha:
    *   **Tempo máximo de entrega:** define o tempo máximo de entrega, deve ser preenchido com o tempo em dias.
    *   **Período de entrega:** define as janelas de entrega que a política de entrega realiza. Você deve adicionar os dias da semana, horários de `Início` e `Fim` da janela de entrega, e valor adicional. Clique em `Adicionar novo período de entrega` para adicionar mais janelas de entrega. 
    *   **Capacidade de entrega:** permite limitar quantos itens/pedidos podem ser entregues para cada janela de entrega. Essa funcionalidade pode ser habilitada, ou não. O uso ou não dessa funcionalidade não interfere no funcionamento da plataforma. Para saber mais sobre esses recursos consulte a [Entrega agendada](https://help.vtex.com/pt/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi) e [Gerenciar capacidade de entrega](https://help.vtex.com/pt/tutorial/gerenciar-capacidade-de-entrega--2y217FQZCjD0I1n62yxVcz). Caso seja habilitada você deve:
        *   Escolher a unidade da capacidade de entrega entre `itens` e `pedidos`.
        *   Conferir as janelas de entrega.
        *   Definir o número da capacidade de entrega. Recomendamos cuidado especial ao escolher a unidade e a quantidade da capacidade de entrega, pois o sistema não calcula a disponibilidade da `capacidade de entrega` levando em conta a quantidade de itens sendo comprada. Então, se a janela de entregas ainda tiver capacidade para 2 itens e seu cliente estiver comprando 4 itens, ele ainda terá a opção de selecionar a janela de entrega disponível.

            É importante lembrar que as janelas de entrega deixam de ficar disponíveis aos clientes caso já tenham atingido o limite da `capacidade de entrega`. Para que uma janela fique novamente disponível aos clientes, é preciso aumentar a quantidade de itens/pedidos da capacidade de entrega da janela. 

### Saiba mais

* [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)
* [Gerenciar políticas de envio](https://help.vtex.com/pt/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE)
* [Estratégia de Envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)

