---
title: 'Como importar pontos de retirada (pickup points) por planilha'
id: 6jqlX7MFOga6cMoWKqiugU
status: ARCHIVED
createdAt: 2018-12-18T12:12:03.208Z
updatedAt: 2020-07-03T20:09:24.814Z
publishedAt: 
firstPublishedAt: 2018-12-27T18:17:55.655Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slugEN: how-to-import-pickup-points-using-spreadsheets
locale: pt
legacySlug: como-importar-pontos-de-retirada-pickup-points-por-planilha
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
---

Os pontos de retirada, também conhecidos como pickup points, são parte importante de qualquer estratégia [omnichannel](/pt/announcement/mude-seu-negocio-com-a-experiencia-omnichannel-vtex).

Você pode [configurar pontos de retirada um a um](/pt/tutorial/configurar-pontos-de-retirada-pickup-points) ou fazer isso através da importação de uma planilha XLS [(como a deste exemplo)](https://assets.ctfassets.net/alneenqid6w5/2QZFVRKdaoOkykE4AUkw6m/bdf62b6d028819b5b8c08ef7a27eadc6/pickups_example.xls). Usando um arquivo XLS, você cadastra todos os pickup points de uma única vez (desde que ele não ultrapasse 10 MB).

>ℹ️ Um arquivo XLS de **10 MB** permite o cadastro de, aproximadamente, **50 mil** pontos de retirada. Para importar um número maior, é necessário dividi-los em mais de uma planilha e fazer um upload de cada vez.


## Como fazer o upload da planilha
1. No menu lateral, clique em __Estoque & entrega__, na seção __Pedidos__.
2. Nas opções que se abrem, clique em __Pontos de retirada__.
3. Clique em __Subir um XLS__, localizado no canto superior direito da página. ![Subir XLS](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/Pickup%20points/como-importar-pontos-de-retirada-pickup-points-por-planilha_1.png)
4. Um modal vai surgir, permitindo que você envie seu arquivo (com extensão `.xls`) ou baixe a [planilha de exemplo](//assets.ctfassets.net/alneenqid6w5/2QZFVRKdaoOkykE4AUkw6m/bdf62b6d028819b5b8c08ef7a27eadc6/pickups_example.xls). Lembre-se de que ela vem com valores de exemplo preenchidos, que devem ser deletados e substituídos pelos dados dos seus próprios pontos de retirada. ![modal (PT)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/Pickup%20points/como-importar-pontos-de-retirada-pickup-points-por-planilha_2.png)
5. Com tudo certo, os novos pontos de retirada vão estar configurados e disponíveis para seus clientes.


## Como preencher a planilha corretamente
Para a planilha cumprir seu papel, é fundamental que você preencha cada coluna da maneira correta. Se os padrões não forem respeitados, o sistema não vai conseguir processar as informações.


### Dados obrigatórios

&bull; As colunas `Name`, `PostalCode`, `Latitude`, `Longitude` e `CountryAcronym` __são de preenchimento obrigatório__. Todos os pontos de retirada precisam ter essas colunas preenchidas corretamente.


### Coluna BusinessHours

&bull; Essa coluna indica o funcionamento do ponto de retirada e precisa ser preenchida no formato `DiaDaSemana,HoraInício,HoraFinal`, sem espaços e usando vírgulas.

&bull; As informações de funcionamento do ponto de retirada devem ser separadas por dia. Ou seja, cada dia deve ter seus dados incluídos na tabela seguindo o modelo `DiaDaSemana,HoraInício,HoraFinal`.

&bull; Os dias da semana devem ser preenchidos de acordo com os códigos:
>  0 = Domingo 
>  
>  1 = Segunda 
>  
>  2 = Terça 
>  
>  3 = Quarta
>  
>  4 = Quinta
>  
>  5 = Sexta
>  
>  6 = Sábado

&bull; As horas devem obedecer ao padrão __24h__ e devem estar no formato `hh:mm`, em que `hh` representam as horas e `mm` os minutos.

&bull; Você deve informar, um a um, os dias da semana e o horário de funcionamento do ponto de retirada, sempre searados por ponto e vírgula e sem espaços.


### Coluna PickupHolidays

&bull; Para adicionar o funcionamento em um feriado, é necessário preencher a coluna `PickupHolidays` informando a data, hora de início e hora de fim do atendimento (sem espaços e usando vírgulas).

&bull; Os feriados devem ser incluídos um a um. Para adicionar mais de um feriado, separe-os usando ponto e vírgula (`;`) e sem espaços.

&bull; A data, ao contrário do que acontece com um dia de semana comum, deve ser preenchida no formato ISO: `yyyy-mm-dd`, em que `yyyy` representa o ano, `mm` o mês e `dd` o dia.

&bull; As horas devem obedecer ao padrão __24h__ e devem estar no formato `hh:mm`, em que `hh` representam as horas e `mm` os minutos.


