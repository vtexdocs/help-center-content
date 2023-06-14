---
title: Como encontrar eventos no Audit
id: 5RXf9WJ5YLFBcS8q8KcxTA
status: PUBLISHED
createdAt: 2021-10-21T16:51:06.108Z
updatedAt: 2022-11-01T12:53:46.283Z
publishedAt: 2022-11-01T12:53:46.283Z
firstPublishedAt: 2021-10-21T21:55:42.939Z
contentType: tutorial
productTeam: Others
author: 4SqDPmUJIIz2KMMKgiyqKl
slug: como-encontrar-eventos-no-audit
legacySlug: como-encontrar-eventos-no-audit
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---


Para aumentar a transparência e a confiança entre os usuários administrativos da sua loja, diversas operações e os horários que estas ocorreram são registradas no Audit, que é um módulo utilizado para pesquisar e investigar este histórico com o auxílio de filtros. 

![Screenshot for Audit UI for announcement](//images.ctfassets.net/alneenqid6w5/1CwFsrYwjxCIhyqcc6ei86/a7e351d449a8ff53422f9a9b914dbdc2/Audit_PT.png)

Para acessar a página do Audit, clique em *Configurações da loja* > *Audit*. Nessa página é possível realizar buscas usando filtros, verificar quais foram as últimas ações realizadas e são apresentados alguns exemplos de filtros que podem ser utilizados como modelo.

## Realizando a busca de eventos no Audit

Para iniciar uma busca no Audit, selecione a guia **Eventos de auditoria**. No menu _dropdown_ **_Application_**, escolha a aplicação associada à busca.

Usando o botão **Data selecionada** é possível escolher uma data pré-definida para a busca. Para selecionar o exato período onde a busca deve ocorrer, clique no botão **Usar datas personalizadas.**

<div class="alert alert-warning">
Apenas registros dos últimos 3 meses são armazenados.
</div>

É possível adicionar mais filtros para realizar a busca de eventos com mais precisão. Para isso, clique no botão **Adicionar Filtro**. No painel que aparece, selecione o parâmetro de filtragem (_Ação_, _Detalhes do Evento_ ou _Autor_) e a qual valor este tópico deve ser comparado. 

<div class="alert alert-info">
Os resultados da busca correspondem exatamente ao conteúdo escrito no tópico do filtro. Para evitar resultados inesperados, certifique-se de que não foram digitados espaços desnecessários nos termos da busca.
</div>

Note que é possível adicionar mais de um filtro,  inclusive com o mesmo tópico. Neste caso, serão buscados eventos que se igualem a qualquer um dos valores inseridos. 

Por exemplo, a busca correspondente à figura abaixo encontra resultados cujas ações são _Payment Notification_ ou _Change Status_ e cujo autor é _[email@email.com](mailto:email@email.com)_.

![Filtros no Audit](//images.ctfassets.net/alneenqid6w5/2Bl1FZuuaa3ZeHT52FEcMD/e998483688ff78ba0bfd122a353c5b97/Audit_filters_PT.png)

Após selecionada a aplicação, a data e os demais filtros da busca, clique no botão **Buscar** para obter os eventos que foram encontrados. 

Note que toda busca realizada é salva na aba **Últimas Buscas**. Para refazer uma busca, clique nesse aba, e clique no botão <img src="//images.ctfassets.net/alneenqid6w5/4gWsOnbLMOUeWh0r5YRDz/9b7148d995c03ca84b39473f266b46a9/refresh.png" width="15"> correspondente à busca que deseja ser refeita.

<div class="alert alert-warning">
Apenas 50 buscas ficam gravadas neste painel. Se quiser salvar uma busca indefinidamente, realize a mesma e adicione aos favoritos do seu browser.
</div>

<div class = "alert alert-info">
Confira a <a href="https://help.vtex.com/pt/tutorial/events-available-in-audit--6r1Mzcu5NmkmmDLJlz9CCZ">lista de eventos disponíveis no Audit</a>.
</div>

## Exemplos de filtros de busca 

* Para buscar se um produto foi ativado no Catálogo em determinada data: 

1. Selecione a data desejada.
2. No dropdown **_Application_**, selecione _Catálogo (Admin)_.
3. Adicione um filtro cuja **Ação** deve igualar a _Product Activation_.
4. Adicione um filtro cujo **Detalhes do Evento** deve igualar a `product id "X" activated` onde `X` deve ser substituído pelo ID do produto buscado.

* Para buscar se o preço de um SKU foi alterado em determinada data:
1. Selecione a data desejada.
2. No dropdown **_Application_**, selecione _Preços_.
3. Adicione um filtro cuja **Ação** deve igualar a _Put Price_.
4. Adicione um filtro cujo **Detalhes do Evento** deve igualar ao ID do SKU do item procurado.
* Para buscar se um estoque foi deletado em determinada data:
1. Selecione a data desejada.
2. No dropdown **_Application_**, selecione _Estoque & Entrega_.
3. Adicione um filtro cuja **Ação** deve igualar a _Warehouse Delete_.
4. Adicione um filtro cujo **Detalhes do Evento** deve igualar ao ID do item procurado.
* Para buscar se uma transportadora foi deletada em determinada data:
1. Selecione a data desejada.
2. No dropdown **_Application_**, selecione _Estoque & Entrega_.
3. Adicione um filtro cuja **Ação** deve igualar a _Carrier Delete_. 
4. Adicione um filtro cujo **Detalhes do Evento** deve igualar ao ID da transportadora buscada.

Para ver mais alguns exemplos de filtros que podem ser utilizados, clique na aba **Guia**. 

<div class = "alert alert-info">
No aplicativo Audit, <a href="https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3">recursos do License Manager</a> são identificados pelas respectivas chaves.
</div>
