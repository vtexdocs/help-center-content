---
title: 'Novo fluxo de Autorização de pedidos para conectores nativos'
id: 3Y6aNbbRJRQxn7kykYPfU6
status: PUBLISHED
createdAt: 2021-12-28T20:44:32.579Z
updatedAt: 2022-01-03T15:38:03.027Z
publishedAt: 2022-01-03T15:38:03.027Z
contentType: updates
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2021-12-28-new-orders-authorization-flow-for-native-connectors
locale: pt
legacySlug: novo-fluxo-de-autorizacao-de-pedidos-para-conectores-nativos
announcementImageID: ''
announcementSynopsisPT: 'Pedidos com erro de divergência de valores de conectores nativos agora são processados pelo Gerenciamento de pedidos.'
---

Quando o preço definido por um seller é diferente do preço oferecido pelo marketplace, pedidos realizados em marketplaces podem não ser processados corretamente. Na VTEX, o fluxo de Autorização de pedidos permite o controle e a aprovação automática desses pedidos, a partir da configuração que o seller faz de uma [regra de Divergência de valores](/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW).

Essa funcionalidade tinha alcance global para marketplaces VTEX, marketplaces externos e [conectores certificados (parceiros)](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro), mas estava em fase Beta para [conectores nativos](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex). Agora, ela vale para todas as integrações com conectores nativos, com exceção do [Zoom](/pt/tutorial/integrando-com-zoom--2OoQjigCVOIEWWkgOqwCK6).

Com a melhoria, o seller [configura a regra de Divergência de valores](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe) e pedidos com erros de diferença de preço de conectores nativos passam a ser processados pelo fluxo de Autorização de pedidos. Isso permite criar regras de aprovação automática e regras que dependem de aprovação manual. Outro benefício é uma facilidade maior para gerenciar pedidos com erro de divergência de valores, pois esse processo agora é feito no **Gerenciamento de pedidos**.

## O que mudou?

A [regra de Divergência de valores](/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) valia para marketplaces VTEX, marketplaces externos e conectores certificados (parceiros). Agora ela também vale para integrações com [conectores nativos](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex).

A tabela a seguir compara o fluxo de processamento de pedidos no caso de conectores nativos _antes_ e _agora_:

| **ANTES** | **AGORA** |
| ---------- | ---------- |
| A configuração de uma regra de processamento de pedidos com erro era feita na etapa de configuração da integração, com o preenchimento de um campo obrigatório no cadastro do conector. | O processamento de pedidos com erro é feito a partir da [configuração da regra de Divergência de valores](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe), pelo fluxo de Autorização de pedidos. |
| Pedidos com erro de divergência de preço não eram criados automaticamente, só após o reprocessamento manual. | Pedidos com erro de divergência de preço são criados automaticamente. A [autorização manual](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente) de um pedido é necessária somente quando se configura uma regra de autorização que exija essa ação. |
| A reserva de estoque do pedido não era realizada. | A reserva de estoque do pedido é realizada automaticamente. |
| A configuração permitia apenas definir um intervalo percentual do preço do pedido para autorizar e outro intervalo para negar a integração de um pedido com divergência de preço. | A [configuração da regra de Divergência de valores](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe) permite a criação de diferentes regras automáticas para vários intervalos percentuais do preço do pedido. É possível criar regras que exigem a autorização manual de um usuário habilitado. |
| Qualquer usuário com permissão de acesso ao Admin VTEX podia reprocessar manualmente pedidos com erro de divergência de preço, em **MARKETPLACE > Integrações > Pedidos**. | Somente usuários habilitados podem [autorizar manualmente](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente) pedidos com erro de divergência de preço. |
| O gerenciamento de pedidos era realizado no Admin VTEX, em **MARKETPLACE > Integrações > Pedidos**. | O gerenciamento de pedidos é realizado no Admin VTEX, em **PEDIDOS > Gerenciamento de pedidos > Todos os pedidos**. |

Os campos obrigatórios de configuração do processamento de pedidos com erro de divergência de preço tinham nomes diferentes nos conectores nativos:

- **Via, B2W e Carrefour:** Taxa de Divergência de Preço.
- **Netshoes e Magazine Luiza**: Percentual de tolerância na divergência do valor do pedido.
- **Mercado Livre Classic e Premium:** Percentual de divergência de preço aceitável.
- **Amazon e Dafiti:** Percentual tolerado na Taxa de Divergência de Preço.
- **Centauro:** Taxa de divergência de preço (Percentual).

Esses campos foram retirados dos cadastros dos conectores e a seguinte mensagem foi adicionada:

> Atenção: pedidos com diferença de preço entre o marketplace e a VTEX só serão integrados mediante a [configuração de uma regra de Divergência de valores](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

<div class = "alert alert-info">
Ao integrar pela primeira vez com um conector nativo, é aconselhável que o seller crie a regra de Divergência de valores antes de configurar a integração. Descumprir a recomendação não impede que a integração seja concluída.
</div>

Para o seller que integrar pela primeira vez com um conector nativo e não criar a regra de Divergência de valores, pedidos com erro de divergência de preço ficarão pendentes no Admin VTEX, em **MARKETPLACE > Integrações > Pedidos**. A mensagem do erro na interface é a seguinte:

> O preço do pedido no marketplace é diferente do seu valor determinado na VTEX. Para integrar automaticamente pedidos com divergência de valores no OMS, acesse _Pedidos > Gerenciamento de pedidos > Autorização de pedidos_, e [configure uma regra de Divergência de valores](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

Para o seller que já estiver integrado a conectores nativos, a configuração prévia no cadastro do conector da integração continua valendo. Para aderir ao novo fluxo, é necessário [configurar uma regra de Divergência de valores](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

## Por que realizamos esta mudança?

Pedidos com erro de divergência de preço podem ser frequentes em integrações com conectores nativos. Como no antigo fluxo não era feita reserva de estoque para esses pedidos, o resultado era maior dificuldade na gestão do estoque e diminuição da taxa de conversão.

Os principais benefícios do novo fluxo são:

- Opções versáteis de configuração de regras automáticas de processamento, por meio da [configuração da regra de Divergência de valores](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe). É possível definir diferentes regras de autorização para intervalos percentuais do preço do pedido e criar regras que exigem autorização manual de um usuário habilitado.
- Maior controle sobre qual percentual do preço do pedido deve depender de autorização manual e quais podem ser aprovados ou negados automaticamente.
- Mais segurança na sua operação, com o controle de usuários com permissão para [autorizar manualmente pedidos](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente).
- Garantia de que pedidos com erro de divergência de preço são criados automaticamente. O que pode ficar pendente é a autorização manual do pedido, quando uma regra de autorização é configurada para isso.
- Reserva de estoque do pedido assegurada, pois a criação do pedido não fica mais pendente.
- Maior facilidade no gerenciamento de pedidos com erro de divergência de preços, que agora é feito em **Gerenciamento de pedidos**.

## O que precisa ser feito?

Para aderir ao fluxo de Autorização de pedidos para conectores nativos, você precisa [configurar uma regra de Divergência de valores](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe). Somente usuários com [perfil de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (_Owner_) ou OMS Full podem fazer isso.

Uma vez que você configure a regra de Divergência de valores, ela passa a valer para todos os marketplaces nos quais você seja um seller.

Para marketplaces VTEX, marketplaces externos e conectores certificados (parceiros), enquanto a regra de Divergência de valores não for criada, pedidos com erro de divergência de preço são aprovados automaticamente.

<div class="alert alert-warning">
Para <a href= "https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex">conectores nativos</a>, enquanto o seller não <a href= "https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe">configura a regra de Divergência de valores</a>, pedidos com divergência de preço ficam retidos. É possível acompanhá-los no Admin VTEX, em <b>MARKETPLACE > Integrações > Pedidos</b>.
</div>

Se você não quiser que conectores nativos obedeçam à Regra de Divergência de valores, é possível manter o fluxo anterior. Neste caso, [entre em contato com o time de suporte da VTEX](https://support.vtex.com/hc/pt-br/requests).
