---
title: 'Regra de Divergência de valores'
id: 6RlFLhD1rIRRshl83KnCjW
status: PUBLISHED
createdAt: 2021-12-25T20:10:25.853Z
updatedAt: 2023-03-29T21:53:14.071Z
publishedAt: 2023-03-29T21:53:14.071Z
firstPublishedAt: 2021-12-25T21:05:20.600Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: regra-de-divergencia-de-valores
locale: pt
legacySlug: regra-de-divergencia-de-valores
subcategory: 1qvm3kIrt6KA6IeGc4EQ6k
---

Quando um seller vende em um marketplace, por vezes há uma diferença entre o preço definido nas configurações da VTEX e aquele oferecido pelo marketplace, resultando em pedidos fechados com valores diferentes da expectativa do seller. Essa situação pode ocorrer em qualquer tipo de marketplace: marketplace VTEX, marketplace externo, [conector certificado (parceiro)](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro), e [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex).

Para otimizar o processamento de pedidos com erro de diferença de preço, existe o fluxo de Autorização de pedidos, no qual o seller pode [configurar uma regra de Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe). No Admin VTEX, acesse **Configurações da loja > Pedidos > Autorização de pedidos**, ou digite **Autorização de pedidos** na barra de busca no topo da página.

<div class="alert alert-warning">
Uma vez que o seller cria a regra de Divergência de valores, ela passa a valer para todos os marketplaces.
</div>

A regra de Divergência de valores é composta de uma ou mais regras de autorização de pedidos. Cada regra de autorização corresponde a um intervalo percentual do preço do pedido, e pode variar de 0% a 100%. É necessário associar uma entre três ações a cada regra de autorização:

- **Autorizar automaticamente:** pedidos com diferença de preço até a porcentagem definida são integrados de forma automática.
- **Negar automaticamente:** pedidos com diferença de preço até a porcentagem definida são automaticamente recusados e não são integrados.
- **Criar uma tarefa no VTEX DO para aprovação:** para diferenças de preço dentro do intervalo configurado, o pedido é integrado, mas fica pendente de [autorização manual](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente) por parte de um usuário habilitado.

![print_1_PT](https://drive.google.com/uc?export=download&id=1GqQINM-uP0UnRrKZ7CxAqrkWEy-1tXkK)

Quando a [configuração de uma regra de Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe) não foi feita, pedidos com erro de divergência de preço são aprovados automaticamente. Isso vale para marketplaces VTEX, marketplaces externos e conectores certificados (parceiros), mas não para [conectores nativos](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex).

<div class="alert alert-warning">
Quando um seller está integrado a um conector nativo, como o Mercado Livre ou a B2W, mas não configurou uma regra de Divergência de valores, pedidos com erro por diferença de preço ficam pendentes até a criação da regra. É possível acompanhá-los no seu Admin VTEX, em <b>Marketplace > Conexões > Pedidos</b>.
</div>

Após a criação da regra de Divergência de valores, pedidos de integrações com conectores nativos que apresentem diferença de preço passam a ser exibidos na página [Todos os pedidos](https://help.vtex.com/pt/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi).

É aconselhável que o seller crie a regra de Divergência de valores antes de configurar a integração com um conector nativo. Descumprir essa recomendação não impede que a integração seja concluída, no entanto, pedidos com divergência de valores ficam represados até que se [configure a regra de Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

## Permissão de usuários

Na VTEX, os [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) garantem segurança na gestão da sua operação, pois restringem o acesso de colaboradores a ações necessárias dentro da plataforma. Confira quais são as [melhores práticas de segurança para gestão de usuários](https://help.vtex.com/pt/faq/metodos-de-seguranca-para-criacao-de-perfis-de-usuarios-em-uma-loja--15YDwC9jGgqWi3rvcDaiGM).

Para criar uma regra de Divergência de valores, o usuário precisa ter o perfil de acesso Admin Super (_Owner_) ou OMS Full. O mesmo vale para os usuários responsáveis pela [autorização manual](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente) de pedidos com diferença de preço.

## Gerenciamento de pedidos com Divergência de valores

Você pode acompanhar pedidos integrados a partir da regra de Divergência de valores no Admin VTEX, em **Pedidos > [Todos os pedidos](https://help.vtex.com/pt/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi)**.

<div class = "alert alert-info">
É importante acompanhar regularmente os pedidos no módulo <b>Pedidos</b> Caso exijam aprovação manual, os pedidos permanecem pendentes até que um usuário habilitado conceda a autorização necessária.
</div>

### Saiba mais

- [Configuração da regra da Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe)
- [Estrutura do Gerenciamento de pedidos](https://help.vtex.com/pt/tutorial/estrutura-da-pagina-do-oms--2dDZmUUFXWeyQ4s2gqiY0A)
- [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
