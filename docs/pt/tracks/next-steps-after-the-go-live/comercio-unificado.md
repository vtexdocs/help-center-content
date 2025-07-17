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
trackSlugPT: proximos-passos-apos-o-go-live
---

[Comércio unificado](/pt/tracks/unified-commerce-strategies--3WGDRRhc3vf1MJb9zGncnv) é uma evolução do omnichannel. Além do compartilhamento de dados, nessa estratégia acontece também a unificação do sistema de processamento e gerenciamento dos pedidos. Isso significa que todo pedido realizado em um canal da loja fica não apenas visível por outros canais de venda como o pedido pode ser processado neles. E em um contexto cada vez mais conectado, operar com contas franquia e [sellers white labels](/pt/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa) pode ser muito estratégico para o negócio.

## Contas franquia e seller white label

[Contas franquias](/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) são contas associadas a uma [conta principal](/tracks/trilha-geral-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl). Para empresas que possuam múltiplas lojas físicas, franqueados ou multimarcas, é possível criar contas-franquia vinculadas à conta principal da marca.

![Conta principal](https://images.ctfassets.net/alneenqid6w5/5LB8M0ZLnlb9dIQuZEQh3A/f6dc3d52f41b4acbf54704f177df49f4/next_steps_image1_PT.png)

Esse modelo compartilha as informações do Catálogo e [frente de loja](/pt/tracks/trilha-geral-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ), permitindo que o inventário das contas franquia seja disponibilizado para venda na loja principal e que diversas estratégias de comércio unificado possam ser utilizadas, tais como, [Ship from store](#ship-from-store), [lojas físicas como pontos de retirada](#pontos-de-retirada) e [prateleira infinita](/en/tracks/proximos-passos-apos-o-go-live--3J7WFZyvTcoiwkcIVFVhIS/1t2QBZvrOBSLgvHaAV9fYm).

Outras vantagens em operar com contas franquia estão listadas a seguir:

- Contas exclusivas para cada loja, permitindo melhor gestão do acesso de colaboradores.
- Melhor gerenciamento e escalabilidade de recursos devido ao cadastro de docas e estoques para cada loja.
- Gestão de promoções específicas para cada conta, sem a obrigatoriedade de contratar uma nova [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV).
- Possibilidade de pagamento no ambiente da conta principal ou da franquia ([split de pagamento](/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx)/pedido).
- [Regionalização de sellers](/pt/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw) (preço e inventário).
- Aumento na performance operacional por meio da utilização de requisições simultâneas no checkout de cada loja. Em uma conta padrão, onde a [estratégia de envio](/pt/tracks/trilha-geral-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#configuracoes-obrigatorias-em-logistica) é cadastrada na conta principal, as requisições são processadas em fila, gerando um possível acúmulo de requisições e aumento de interrupções (timeout). Sempre que a interrupção ocorre, uma mensagem de erro aparece no checkout e o cliente precisa clicar em F5 ou no botão de atualizar para prosseguir com a compra. Este comportamento gera impacto negativo na experiência do cliente e diminui a taxa de conversão da loja.

<div class="alert alert-warning">
  <p>As <a href="https://help.vtex.com/pt/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl">contas franquias</a> atuam como um <a href="https://help.vtex.com/pt/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa">seller white label</a> da conta principal. Quando um cliente adiciona produtos no carrinho de compras e simula o frete no site da conta principal, o <a href="https://help.vtex.com/pt/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa">algoritmo de seleção de sellers white label</a> define automaticamente qual conta franquia será responsável pelo <a href="https://help.vtex.com/pt/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP">fulfillment</a> do pedido. Caso ocorra o cenário onde um ou mais produtos do carrinho não estejam disponíveis na conta franquia selecionada, o sistema definirá um outra conta disponível para realizar o envio dos produtos faltantes, permitindo que ocorra mais de uma entrega para o mesmo pedido. Este processo acontece de forma interna na plataforma, sem que o cliente tenha conhecimento dos sellers envolvidos.</p>
</div>

## Ship from store

Lojas físicas podem funcionar como mini centros de distribuição, possibilitando o envio de produtos direto do seu estoque para o endereço do cliente. Este tipo de operação reduz custos e tempo de envio, melhorando o planejamento logístico da empresa. Saiba mais em [Ship From Store](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/50GAmxxFsJoLWqcnMysWdl).

## Pontos de retirada

Configurar [pontos de retirada](/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) física de produtos contribui para operações que aplicam [estratégias de comércio unificado](/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3), onde a experiência de compra do cliente é otimizada por meio da venda e gerenciamento de pedidos centralizados e disponibilidade de múltiplas opções de entrega. Na VTEX, os seguintes pontos de retirada podem ser cadastrados:

- Centro de distribuição (CD).
- Loja física própria.
- Loja física franqueada.
- Loja física ou ponto de retirada de terceiro, utilizando um sistema de armazenamento seguro, como por exemplo, um armário (_locker_).
