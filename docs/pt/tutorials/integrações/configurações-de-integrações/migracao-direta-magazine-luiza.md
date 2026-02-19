---
title: 'Migração Direta Magazine Luiza'
id: 6QRyRfi16YMVdPesThw3AA
status: PUBLISHED
createdAt: 2024-05-31T19:52:31.191Z
updatedAt: 2024-09-27T19:09:09.576Z
publishedAt: 2024-09-27T19:09:09.576Z
firstPublishedAt: 2024-05-31T20:07:32.221Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: direct-migration-magazine-luiza
legacySlug: migracao-direta-magazine-luiza
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

A **Migração Direta Magazine Luiza** foi desenvolvida para facilitar o processo de migração para o seller que utiliza uma integradora terceira para disponibilizar seus produtos no Magazine Luiza marketplace e agora deseja disponibilizar seus produtos e receber os pedidos do marketplace pela plataforma VTEX. 

Utilizando a **Migração Direta,** a conta do seller no marketplace é reaproveitada e neste caso a relevância de vendas do seller é mantida.  

![Fluxo da migração](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/migracao-direta-magazine-luiza_1.png)

## Integrando a loja VTEX com o Magazine Luiza marketplace

A **Migração Direta** é executada nas etapas de [O que o seller precisa fazer](#o-que-o-seller-precisa-fazer) e [Testes](#testes). 

### O que o seller precisa fazer

Veja abaixo quais são os passos a serem seguidos nesta etapa:

1. O seller deve abrir um ticket pelo [Portal do seller do Magazine Luiza](https://id-b2b.magazineluiza.com.br/auth/realms/B2B/protocol/openid-connect/auth?client_id=platform-seller-shell&redirect_uri=https%3A%2F%2Fseller.magalu.com%2F&state=1985744a-615b-428f-8d32-d9d2b03edf30&response_mode=fragment&response_type=code&scope=openid&nonce=5e1f25ae-d3b3-4cdf-85fd-d18183d99334) informando que deseja migrar da integração **A** para a VTEX.  
2. O seller deve abrir um ticket com o time [suporte da VTEX](https://supporticket.vtex.com/support) informando o interesse em realizar a **Migração Direta.**  
3. Realizar o mapeamento dos [produtos e SKUs](/pt/docs/tutorials/qual-a-diferenca-entre-produto-e-sku) no seu catálogo VTEX.  
Para realizar o mapeamento acesse no Admin VTEX **Catálogo > Todos os produtos.**  

> ❗️ O código de referência do SKU na VTEX deve ser igual ao ID do SKU no Magazine Luiza e o código de referência do produto na VTEX também deve ser igual ao ID do produto no Magazine Luiza. Sem esse mapeamento de equivalência, a migração não funcionará.

4. [Criar uma política comercial](/pt/docs/tutorials/criar-uma-politica-comercial) para utilizar na integração com o Magazine Luiza. Essa política não deve ter produtos associados.  
5. Ativar o conector do Magazine Luiza conforme a [documentação de integração](/pt/docs/tracks/configurar-integracao) e autenticar a conta.  
6. No seller center do Magazine Luiza, o seller deve zerar o estoque de todos os produtos.  
7. Ao finalizar os passos anteriores, o seller deve informar nos tickets com a VTEX e com o Magazine Luiza qual a data e horário que deseja realizar a migração.   

> ⚠️ Na data e horário acordado entre o seller e a VTEX, o processo de migração será iniciado e os pedidos que estão pendentes no Portal do seller Magazine Luiza serão segmentados. Todos os pedidos pendentes anteriores à data definida, ficam sob responsabilidade do seller para atualização manual no Portal do seller e os pedidos posteriores à data definida ficam sob responsabilidade da VTEX.

![Data de migração](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/migracao-direta-magazine-luiza_2.png)

Após informar o dia e horário desejado para realizar a integração, o seller deve aguardar o retorno da VTEX confirmando a finalização da migração para seguir aos [testes](#testes).

> ⚠️ Durante o período de migração pedidos podem ser duplicados, chegando na integradora anterior e na VTEX. O seller deve ficar atento à situação para tratar corretamente esses pedidos.

### Testes

Quando o seller receber a confirmação de que a migração foi finalizada, é necessário realizar os testes indicados abaixo:

- **Teste 1**

1. Adicione apenas três produtos na política comercial vinculada à integração.
2. Verifique se os produtos aparecem no marketplace.  

- **Teste 2**

1. Atualize os preços dos produtos adicionados à política comercial.  
2. Verifique se as informações foram alteradas também no marketplace.  

- **Teste 3**

1. [Atualize o estoque](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque) dos produtos adicionados à política comercial.  
2. Verifique se as informações foram alteradas também no marketplace.  

- **Teste 4**

1. Simule um pedido para um dos produtos presentes na política comercial.  
2. Verifique se o pedido foi integrado corretamente ao módulo **Pedidos** na VTEX.  

- **Teste 5**

1. Faça a [Simulação de envio](/pt/docs/tutorials/simulador-de-envio) para os produtos adicionados à política comercial.  

Caso todos os testes sejam executados com sucesso, o seller deve adicionar os demais produtos à política comercial utilizada na integração para finalizar o processo.

