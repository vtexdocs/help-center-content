---
title: 'Consigo gerar um relatório com os produtos mais vendidos na minha loja?'
id: 1kAFHDatvOiwqEGGs2OYwK
status: ARCHIVED
createdAt: 2018-02-27T13:44:34.700Z
updatedAt: 2019-12-31T14:25:07.179Z
publishedAt: 
firstPublishedAt: 2018-02-27T14:56:13.919Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: can-i-generate-a-report-with-the-best-selling-products-in-my-store
locale: pt
legacySlug: 
---

Não é possível gerar exatamente um relatório. A VTEX não tem uma ferramenta nativa preparada para isso, mas provavelmente você consegue essa informação do ERP usado pela sua loja.

No entanto, é possível obter esse resultado fazendo uma análise na planilha de pedidos disponível no módulo OMS.

__Para acessar essa planilha, siga os passos abaixo:__

1. Acesse o módulo __OMS__
2. Clique no ícone de __filtro__
3. Faça uma busca __por período__ (lembrando que o range máximo permitido é de até 6 meses. No caso de querer fazer uma busca por perído de 1 ano, por exemplo, faça a busca 2 vezes) 
4. Ao retornar para a lista já filtrada de pedidos, __clique no ícone de exportação__.![exportacaoOMS](https://images.contentful.com/alneenqid6w5/3pX1xFqvS0uMOEe8OUquci/81e2be7c1948d62a863cfccfc36f18a9/exportacaoOMS.png)
5. Será exibida uma barra de progresso. Então, para finalizar, é preciso clicar em __Exportar xxx pedidos para e-mail__.![ExportarOMS](//images.contentful.com/alneenqid6w5/3Z7h82etgIuQcUI6iGsgyk/11bbadc4b3c2174c82844e9125af8e50/ExportarOMS.png)

Sua solicitação irá para uma fila, que pode ser acompanhada pelo OMS. Quando chegar sua vez, você receberá a planilha de pedidos no seu e-mail.

Para obter a informação dos seus produtos mais vendidos, após baixar a planilha, você deve fazer a conta entre as colunas __AH (Quantity_SKU)__, que diz a quantidade do SKU que foi vendida, e a coluna __AI (ID_SKU)__, que se refere o SKU em questão. 

>❗ As exportações podem ser feitas dentro de uma faixa de tempo de 31 dias.
