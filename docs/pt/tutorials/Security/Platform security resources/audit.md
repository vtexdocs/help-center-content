---
title: 'Audit'
id: 5RXf9WJ5YLFBcS8q8KcxTA
status: PUBLISHED
createdAt: 2021-10-21T16:51:06.108Z
updatedAt: 2024-04-18T14:03:48.943Z
publishedAt: 2024-04-18T14:03:48.943Z
firstPublishedAt: 2021-10-21T21:55:42.939Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slug: audit
locale: pt
legacySlug: como-encontrar-eventos-no-audit
subcategoryId: 2TNXiKzLZOPxjMTyGiEeJu
---

Para aumentar a transparência e a confiança entre os usuários administrativos da sua loja, a VTEX registra diversas operações, seus autores e os horários em que elas ocorreram no **Audit**, um módulo utilizado para pesquisar e investigar este histórico com o auxílio de filtros.

Para acessar a página do Audit no Admin VTEX, acesse **Apps > Apps instalados > Audit**, ou digite **Audit** na barra de busca. Nessa página, é possível realizar as seguintes ações:

* [Buscar eventos no Audit](#buscar-eventos-no-audit)
* [Verificar últimas buscas realizadas no Audit](#verificar-ultimas-buscas-realizadas-no-audit)

>ℹ️ Para visualizar os eventos do Audit, é necessário ter um [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) associado ao [recurso](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) *Insights Metrics*.

![audit-ui-pt 1](https://images.ctfassets.net/alneenqid6w5/5IFUH95vspIgJVYg9CrWMW/42032a1aa1700f58ffaf92b1e00ecfd2/audit-ui-pt_1.png)

## Buscar eventos no Audit

O Audit possibilita realizar buscas por eventos a partir de filtros relacionados às informações a seguir: aplicação, data, ação, autor e detalhes do evento. A seguir, explicamos como utilizar os [filtros](#filtros) do Audit e como os [resultados](#resultados) são apresentados. Também demonstramos o uso de filtros com [exemplos](#exemplos-de-buscas) práticos.

### Filtros

Confira o passo a passo para buscar por um evento utilizando os filtros disponíveis no Audit:

1. No Admin VTEX, acesse **Apps > Apps instalados > Audit**, ou digite _Audit_ na barra de busca. Você será conduzido(a) para a aba **Eventos de auditoria** do Audit.
2. Em **Filtros**, no menu **Aplicação**, selecione a aplicação relacionada à busca.
3. No menu **Data**, escolha uma data pré-definida para a busca. Se preferir definir o exato intervalo de datas para a busca, ative a opção **Personalizada** e determine as datas de **Início** e **Fim** para a busca.

   >ℹ️ Apenas registros dos últimos três meses são armazenados.

4. Se desejar, inclua um filtro por Ação. Para isso, no campo ao lado de `Ação deve ser`, digite o nome da ação e tecle `Enter`. Você pode inserir mais de um valor teclando `Enter` após cada seleção. Confira o nome de cada ação em [Eventos disponíveis no Audit](https://help.vtex.com/pt/tutorial/events-available-in-audit--6r1Mzcu5NmkmmDLJlz9CCZ).
5. Se necessário, você pode adicionar filtros mais específicos para realizar a busca por eventos com mais precisão. Para isso, clique no botão `Adicionar Filtro`.
6. Selecione o parâmetro de filtragem (_Autor_ ou _Detalhe do evento_) e informe a qual valor o parâmetro deve ser comparado. Você pode inserir mais de um valor teclando `Enter` após cada seleção.

    Ao adicionar filtros com o mesmo parâmetro (exemplo: um filtro definindo que a ação deve ser `Change Promotion Configuration` ou `Change Coupon Configuration`), os resultados incluem eventos que se igualam a qualquer um dos valores inseridos. Ao adicionar filtros com parâmetros distintos (exemplo: `Ação = Change Coupon Configuration `e `Autor = email@email.com`), os critérios são somados. É possível repetir os passos 4 e 5 para adicionar mais filtros.

    Por exemplo, a busca correspondente à figura abaixo encontra resultados cujas ações são _Change Promotion Configuration_ ou _Change Coupon Configuration_ e cujo autor é `email@email.com`.

    ![filtros-pt](https://images.ctfassets.net/alneenqid6w5/LQkBnce7aFlx8T1zjXYdm/3f1ad9727d1f0eb54168e9e68895533b/filtros-pt.png)

7. Clique no botão `Aplicar` para obter os eventos que foram encontrados.

    Confira [Resultados](#resultados) para entender como os eventos são apresentados.

>⚠️ Os resultados da busca correspondem exatamente ao conteúdo escrito no tópico do filtro. Para evitar resultados inesperados, certifique-se de que você não digitou espaços desnecessários nos termos da busca.

Se desejar, você pode compartilhar uma busca com outro usuário. Para isso, clique em `Compartilhar busca`, no canto superior direito da página. O link para a busca no Audit será copiado para a sua área de transferência.

### Resultados

A seção **Resultados** lista cada evento encontrado na busca e exibe as informações de cada evento, apresentadas na tabela a seguir.

| Coluna | Descrição |
|---|---|
| __Copiar__ | Botão para copiar as informações do evento exibidas na tabela para a área de transferência. |
| __Hora do evento__ | Data e horário em que o evento ocorreu, no fuso horário do navegador ou do sistema operacional. |
| __Ação__ | Ação realizada na aplicação selecionada para a busca. Confira as ações possíveis na [lista de eventos disponíveis no Audit](https://help.vtex.com/pt/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ). |
| __Detalhe do evento__ | Informações complementares sobre o evento. Confira os detalhes exibidos para cada evento na [lista de eventos disponíveis no Audit](https://help.vtex.com/pt/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ). |
| __Autor__ | Email, ID ou token do usuário que realizou o evento. |
| __Mais detalhes__ | Botão que abre um modal com mais informações sobre o evento, quando aplicável. Os detalhes exibidos podem incluir: <ul><li class="t-body mb5 lh-copy"><strong>Nome da entidade:</strong> ID da entidade modificada.</li><li class="t-body mb5 lh-copy"><strong>Entidade antes da ação:</strong> dados da entidade antes do evento, em formato <a href="http://www.json.org/" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word" rel="noopener noreferrer" target="_blank">JSON</a>.</li><li class="t-body mb5 lh-copy"><strong>Entidade após a ação:</strong> dados da entidade após o evento, em formato <a href="http://www.json.org/" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word" rel="noopener noreferrer" target="_blank">JSON</a>.</li></ul>A depender do evento, nem todas as informações citadas acima são exibidas. Por exemplo, um evento de exclusão de uma informação mostra apenas a entidade antes da ação. Por outro lado, um evento de criação de uma informação apresenta apenas a entidade após a ação. <br /><br /> Alguns eventos não apresentam nenhuma informação complementar. Nesses casos, o modal aparece vazio. |

### Exemplos de buscas

A seguir, listamos alguns cenários de busca comuns para ilustrar como os filtros devem ser compostos dependendo do que se deseja buscar.

#### Ativação de produto

Para buscar se um produto foi ativado no Catálogo em determinada data:

1. Selecione a data desejada.
2. No menu **Aplicação**, selecione _Catálogo (Admin)_.
3. Adicione um filtro cuja **Ação** deve ser `Product Activation`.
4. Adicione um filtro cujo **Detalhe do evento **deve ser `product id "X" activated`, onde `X` precisa ser substituído pelo ID do produto buscado.

#### Alteração de preço

Para buscar se o preço de um SKU foi alterado em determinada data:

1. Selecione a data desejada.
2. No menu **Aplicação**, selecione _Preços_.
3. Adicione um filtro cuja **Ação** deve ser `Put Price`.
4. Adicione um filtro cujo **Detalhe do evento **deve ser o ID do SKU do item procurado.

#### Exclusão de estoque

Para buscar se um estoque foi deletado em determinada data:

1. Selecione a data desejada.
2. No menu **Aplicação**, selecione _Estoque & Entrega_.
3. Adicione um filtro cuja **Ação** deve ser `Warehouse Delete`.
4. Adicione um filtro cujo **Detalhe do evento **deve ser o ID do item procurado.

#### Exclusão de transportadora

Para buscar se uma transportadora foi deletada em determinada data:

5. Selecione a data desejada.
6. No menu **Aplicação**, selecione _Estoque & Entrega_.
7. Adicione um filtro cuja **Ação** deve ser `Carrier Delete`.
8. Adicione um filtro cujo **Detalhe do evento** deve ser o ID da transportadora buscada.

## Verificar últimas buscas realizadas no Audit

Toda busca realizada no Audit é salva na aba **Últimas buscas**. Para refazer uma busca nessa aba, clique no botão <img src="//images.ctfassets.net/alneenqid6w5/4gWsOnbLMOUeWh0r5YRDz/9b7148d995c03ca84b39473f266b46a9/refresh.png" width="15"> correspondente à busca que você deseja refazer.

Confira a seguir as informações disponíveis nesta aba:

| Coluna | Descrição |
|---|---|
| Buscado em | Data e horário em que a busca foi realizada no Audit. |
| Aplicação | Aplicação da VTEX em que os eventos foram buscados. |
| Termos buscados | Filtros utilizados na busca. |
| Período buscado | Data de início e fim do período selecionado para a busca. |
| Refazer busca | Botão que permite repetir a busca. |

>⚠️ Apenas 50 buscas ficam gravadas na aba **Últimas buscas**. Se quiser salvar uma busca além desse limite, adicione-a aos favoritos do seu browser.
