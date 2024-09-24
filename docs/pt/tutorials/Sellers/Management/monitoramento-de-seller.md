---
title: 'Monitoramento de seller'
id: 3Gt3Zu7BPFAaTRRehi27ez
status: DRAFT
createdAt: 2023-07-18T19:35:09.684Z
updatedAt: 2023-07-19T13:53:51.474Z
publishedAt: 
firstPublishedAt: 2023-07-18T19:55:46.688Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: seller-monitoring
locale: pt
legacySlug: monitoramento-de-seller
subcategoryId: 2xWRgEIlR2ookieEmm4KQu
---

O **Monitoramento de seller** é uma ferramenta do módulo [Gerenciamento de sellers](https://help.vtex.com/pt/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv) que permite ao marketplace medir o desempenho dos sellers que vendem através de sua loja. Para acessar essa página, em seu Admin VTEX vá em **Marketplace > Sellers > Gerenciamento > clique no botão Configur armétrica**. Na página inicial,você encontrará as seguintes seções

- **Saúde da operação**: Nesta seção,estarão presentes os dados de todos os sellers que vendem em sua loja,incluindo:  

    - Total de sellers ativos
    - Tempo médio de faturamento  

- **Oque está acontecendo**: Aqui você acompanhará os detalhes do resultado da métrica com a visão detalhada da infração que levou o seller ao status de ⚠ **Aceitável** ou ❌ **Insatisfatório**. Épossível filtrar por seller,clicando no botão (colocar o símbolo do botão) e selecionar somente os sellers desejados.

![Monitoramento de seller](//images.ctfassets.net/alneenqid6w5/1a6BgbLPMxQzuSPLFGb7DM/5fa662c273968852081a0ef98f50c95d/monitoramento_de_seller.png)

Ao clicar no botão **Ver pedidos,** abrirá um pop-up com o **ID do pedido**, **Valor** e o botão **Ver.**

|**Campo**|**Descrição**|
| - | - |
|**ID do pedido**|Código gerado automaticamente para cadapedido realizado no marketplace.|
|**Valor**|Tempo que aquele pedido está sem faturamento.|
|**Ver**|Botão de direcionamento. Ao clicar nele o marketplace será direcionado para os detalhes daquele pedido no OMS.|

Se esse for o seu primeiro acesso à ferramenta,será necessária a configuração da métrica de **Tempo de faturamento**, nela você definirá o tempo máximo e o tempo preferível para que os pedidos dos sellers sejam faturados. A seguir, veja como configurar.

## Como configurar as métricas

Para configurar, siga as instruções a seguir.

1. Em seu Admin VTEX vá em **Marketplace > Sellers > Gerenciamento de sellers > Configurar métrica.**
2. Clique em **Tempo de faturamento**, e preencha os campos que serão apresentados.
3. Clique em **+ Adicionar Variação** e preencha os campos solicitados para configurar variações para um segmento ou grupo de sellers.
4. Clique em **Salvar**.

Ao clicar em **`Salvar`**, você receberá notificações no Admin acerca da performance dos sellers em sua operação e você terá visibilidade dos sellers que não estão atingindo os prazos esperados.

|**Campo ( * Obrigatório)**|**Descrição**|
| - | - |
|**Valor limite***|Valor máximo definido para medir se o seller está dentro ou fora dos padrões do seu marketplace.|
|**Segmentação***|Você irá definir quais sellers ou grupo de sellers serão afetados pelo valor definido em **Valor limite.**|
|**Limite preferível**|Valor definido para alertar que o seller está se aproximando do **Valor limite.**|

>ℹ️ Quando há variação configurada em uma métrica, a ordenação define a prioridade. Para casos em que só existe uma segmentação por grupo e outra por exceção, não existe conflito independente da ordenação. 

## Editando a métrica

Após configurada, essa métrica pode ser editada. Para isso você deve seguir os passos a seguir:

1. Clicar no botão **Editar métrica.**
2. Altere os valores nos campos que serão apresentados.
3. Clique no botão **Salvar**.
