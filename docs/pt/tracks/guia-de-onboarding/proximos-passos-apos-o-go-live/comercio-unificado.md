---
title: 'Comércio unificado'
id: 5Qvw31yH2FPDBl14K5xXHA
status: PUBLISHED
createdAt: 2024-02-20T20:19:58.572Z
updatedAt: 2024-04-03T12:14:19.783Z
publishedAt: 2024-04-03T12:14:19.783Z
firstPublishedAt: 2024-02-22T14:08:56.252Z
contentType: trackArticle
productTeam: Others
slugEN: unified-commerce
locale: pt
trackId: 3J7WFZyvTcoiwkcIVFVhIS
trackSlugEN: proximos-passos-apos-o-go-live
order: 2
---

[Comércio unificado](/pt/tracks/unified-commerce-strategies--3WGDRRhc3vf1MJb9zGncnv) é uma evolução do omnichannel. Além do compartilhamento de dados, nessa estratégia acontece também a unificação do sistema de processamento e gerenciamento dos pedidos. Isso significa que todo pedido realizado em um canal da loja fica não apenas visível por outros canais de venda como o pedido pode ser processado neles. E em um contexto cada vez mais conectado, operar com contas franquia e [sellers white labels](/pt/docs/tutorials/seller-white-label) pode ser muito estratégico para o negócio.

## Contas franquia e seller white label

[Contas franquias](/pt/docs/tutorials/o-que-e-conta-franquia) são contas associadas a uma [conta principal](/pt/tracks/trilha-geral-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl). Para empresas que possuam múltiplas lojas físicas, franqueados ou multimarcas, é possível criar contas-franquia vinculadas à conta principal da marca.

![Conta principal](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/guia-de-onboarding/proximos-passos-apos-o-go-live/comercio-unificado_1.png)

Esse modelo compartilha as informações do Catálogo e [frente de loja](/pt/tracks/trilha-geral-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ), permitindo que o inventário das contas franquia seja disponibilizado para venda na loja principal e que diversas estratégias de comércio unificado possam ser utilizadas, tais como, [Ship from store](#ship-from-store), [lojas físicas como pontos de retirada](#pontos-de-retirada) e [prateleira infinita](/pt/tracks/proximos-passos-apos-o-go-live--3J7WFZyvTcoiwkcIVFVhIS/1t2QBZvrOBSLgvHaAV9fYm).

Outras vantagens em operar com contas franquia estão listadas a seguir:

- Contas exclusivas para cada loja, permitindo melhor gestão do acesso de colaboradores.
- Melhor gerenciamento e escalabilidade de recursos devido ao cadastro de docas e estoques para cada loja.
- Gestão de promoções específicas para cada conta, sem a obrigatoriedade de contratar uma nova [política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial).
- Possibilidade de pagamento no ambiente da conta principal ou da franquia ( [split de pagamento](/pt/docs/tutorials/split-de-pagamento) /pedido).
- [Regionalização de sellers](/pt/docs/tutorials/configurar-a-regionalizacao-de-sellers) (preço e inventário).
- Aumento na performance operacional por meio da utilização de requisições simultâneas no checkout de cada loja. Em uma conta padrão, onde a [estratégia de envio](/pt/tracks/trilha-geral-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#configuracoes-obrigatorias-em-logistica) é cadastrada na conta principal, as requisições são processadas em fila, gerando um possível acúmulo de requisições e aumento de interrupções (timeout). Sempre que a interrupção ocorre, uma mensagem de erro aparece no checkout e o cliente precisa clicar em F5 ou no botão de atualizar para prosseguir com a compra. Este comportamento gera impacto negativo na experiência do cliente e diminui a taxa de conversão da loja.

> ⚠️ As [contas franquias](/pt/docs/tutorials/o-que-e-conta-franquia) atuam como um [seller white label](/pt/docs/tutorials/seller-white-label) da conta principal. Quando um cliente adiciona produtos no carrinho de compras e simula o frete no site da conta principal, o [algoritmo de seleção de sellers white label](/pt/docs/tutorials/selecao-de-sellers-white-label) define automaticamente qual conta franquia será responsável pelo [fulfillment](/pt/docs/tutorials/fulfillment-logistica-vtex) do pedido. Caso ocorra o cenário onde um ou mais produtos do carrinho não estejam disponíveis na conta franquia selecionada, o sistema definirá um outra conta disponível para realizar o envio dos produtos faltantes, permitindo que ocorra mais de uma entrega para o mesmo pedido. Este processo acontece de forma interna na plataforma, sem que o cliente tenha conhecimento dos sellers envolvidos.

## Ship from store

Lojas físicas podem funcionar como mini centros de distribuição, possibilitando o envio de produtos direto do seu estoque para o endereço do cliente. Este tipo de operação reduz custos e tempo de envio, melhorando o planejamento logístico da empresa. Saiba mais em [Ship From Store](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/50GAmxxFsJoLWqcnMysWdl).

## Pontos de retirada

Configurar [pontos de retirada](/pt/docs/tutorials/pontos-de-retirada) física de produtos contribui para operações que aplicam [estratégias de comércio unificado](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3), onde a experiência de compra do cliente é otimizada por meio da venda e gerenciamento de pedidos centralizados e disponibilidade de múltiplas opções de entrega. Na VTEX, os seguintes pontos de retirada podem ser cadastrados:

- Centro de distribuição (CD).
- Loja física própria.
- Loja física franqueada.
- Loja física ou ponto de retirada de terceiro, utilizando um sistema de armazenamento seguro, como por exemplo, um armário (_locker_).
