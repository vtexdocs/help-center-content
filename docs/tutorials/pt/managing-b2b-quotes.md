---
title: 'Gerenciamento de cotações no B2B'
id: 34EDJHyBVsewtRu0NnPMCq
status: PUBLISHED
createdAt: 2024-08-08T11:03:45.696Z
updatedAt: 2024-08-30T11:11:24.892Z
publishedAt: 2024-08-30T11:11:24.892Z
firstPublishedAt: 2024-08-08T17:16:35.983Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slug: gerenciamento-de-cotacoes-no-b2b
locale: pt
legacySlug: gerenciamento-de-cotacoes-no-b2b
subcategory: 74CLq9axeDw1YPzAtCpktn
---

O aplicativo **Cotações B2B** permite que clientes que utilizam o aplicativo [Organizações B2B](https://help.vtex.com/pt/tutorial/gerenciamento-de-organizacoes-b2b--1UwNCWhML3BsV6anpoUvVZ) solicitem cotações para seus carrinhos de compras e os salvem para uso futuro, incluindo itens, quantidades e preços. Isso facilita as negociações de preços com os representantes de vendas da loja e os fluxos de aprovação de pedidos dentro da organização.

Confira neste artigo como gerenciar cotações:

- [Permissões de acesso](#permissões-de-acesso)
- [Minhas cotações](#minhas-cotações)
- [Criando uma cotação ou salvando um carrinho](#criando-uma-cotação-ou-salvando-um-carrinho)
- [Detalhes da cotação](#detalhes-da-cotação)
- [Editando uma cotação](#editando-uma-cotação)

## Permissões de acesso
É necessário a configuração de algumas permissões de acesso ao **Cotações B2B**. As permissões para utilizar as funcionalidades de cotações e carrinhos salvos podem variar de acordo com o perfil de acesso definido para o usuário.

| Permissão                                                 | Perfil de acesso                                                                                                                         |
|-----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Criar Cotações e Carrinhos                                | Store Admin<br>Sales Admin<br>Sales Manager<br>Sales Representative<br>Organization Admin<br>Organization Approver<br>Organization Buyer |
| Acessar as Cotações e Carrinhos dos Meus Centros de Custo | Sales Representative<br>Organization Approver<br>Organization Buyer                                                                      |
| Acessar as Cotações e Carrinhos das Minhas Organizações   | Sales Manager<br>Organization Admin                                                                                                      |
| Acessar todas as Cotações e Carrinhos                     | Store Admin<br>Sales Admin<br>Store Admin<br>Sales Admin<br>Store Admin<br>Sales Admin                                                   |
| Criar pedidos das Cotações e Carrinhos                    | Store Admin<br>Sales Admin<br>Sales Manager<br>Sales Representative<br>Organization Admin<br>Organization Approver                       |
| Declinar Cotações e Carrinhos                             | Store Admin<br>Sales Admin<br>Sales Manager<br>Sales Representative<br>Organization Admin<br>Organization Approver                       |
| Editar as Cotações e Carrinhos dos Meus Centros de Custo  | Sales Representative                                                                                                                     |
| Editar as Cotações e Carrinhos das Minhas Organizações    | Sales Manager                                                                                                                            |

## Minhas cotações
O aplicativo **Cotações B2B** habilita a página **Minhas Cotações**, uma interface para gerenciar cotações e carrinhos salvos na loja virtual. Para acessar essa página, você deve estar logado e ter as [permissões necessárias](https://docs.google.com/document/d/1xe4KsIlFUE2sXgNQcT483VdZnh7MC94JTjQLKtscDKk/edit#permissões de acesso).

Para acessar Minhas Cotações, siga as instruções abaixo:

1. Acesse a loja virtual e faça login.
2. Clique em **Olá, {nome do usuário}**.
3. Clique em Minha Conta.
4. Clique em **Cotações e carrinhos salvos** na barra lateral. 

Nesta página, é possível usar os seguintes recursos:

- **Barra de pesquisa:** permite buscar cotações ou carrinhos salvos específicos pelo nome.
- **Filtros:** permitem filtrar as cotações ou carrinhos salvos exibidos por **Status**, **Organização** ou **Centro de Custo**. As duas últimas opções estão disponíveis em **Mais**.
- **Nova cotação:** permite criar uma cotação ou carrinho salvo clicando no botão `Nova Cotação`. Veja mais detalhes sobre isso na seção [Criar uma cotação ou carrinho salvo](#criar-uma-cotação-ou-carrinho-salvo).

A lista de cotações e carrinhos salvos exibe as seguintes informações:

- **Nome. ref:** nome de referência da cotação ou carrinho salvo.
- **Subtotal:** subtotal do carrinho de compras associado à cotação ou ao carrinho salvo.
- **Criada por:** email do usuário que criou a cotação ou carrinho salvo.
- **Criada em:** data em que a cotação ou carrinho salvo foi criado, no formato `MM/DD/AAAA`.
- **Expiração:** data de expiração da cotação ou carrinho salvo, no formato `MM/DD/AAAA`.
- **Status:** estado atual da cotação ou carrinho salvo, incluindo as seguintes opções:
    -  **Pronta:** a cotação ou carrinho salvo está pronto para ser usado para fazer um pedido.
    -  **Pendente:** a cotação está aguardando revisão e ajuste por um usuário de vendas.
    -  **Revisada:** a cotação está aguardando revisão e ajuste adicionais por um usuário de vendas.
    -  **Recusada:** a cotação ou carrinho salvo foi recusado e não pode ser usado para fazer um pedido.
    -  **Expirada:** a cotação ou carrinho salvo atingiu a data de expiração e não pode ser usado para fazer um pedido.
    -  **Efetuada:** a cotação ou carrinho salvo foi usado para fazer um pedido e não pode ser usado novamente.
- **Última Atualização:** data da última atualização da cotação ou carrinho salvo, no formato `MM/DD/AAAA`.
- **Organização:** nome da organização com que a cotação ou carrinho salvo está associado.
- **Centro de Custo:** nome do centro de custo com que a cotação ou carrinho salvo está associado.

Os usuários podem clicar em qualquer linha ou nos <i class="fas fa-ellipsis-v" aria-hidden="true"></i> e, em seguida, clique em Detalhes para visualizar e editar os informações de uma cotação, conforme suas permissões.

![Minhas cotações - PT](//images.ctfassets.net/alneenqid6w5/53BQDZh9EBc8OrFTxfO1eD/edc53f41d4d3bb19b3d85a44d9914fa0/Minhas_cota__es.png)

## Criar uma cotação ou salvando um carrinho
Para criar uma cotação ou carrinho salvo, você precisa ter a [permissão](#permissoes-de-acesso) de [Criar Cotações e Carrinhos](#criar-cotações-e-carrinhos). Após adicionar produtos ao carrinho na loja, use o conteúdo do carrinho para criar um carrinho salvo ou solicitar uma cotação. Siga as instruções abaixo:

<ol>
   <li>
      Adicione os produtos no carrinho de compras.
      <ul>
         <li>Clique em <strong>Criar uma Cotação</strong> dentro do carrinho de compras.</li>
      </ul>
   </li>
   <li>
      Acesse a vitrine da loja, clique em <strong>Olá, {nome do usuário}</strong>. Clique em <strong>Minha Conta</strong>.
      <ul>
         <li>Clique em cotações e carrinhos salvos na barra lateral.</li>
      </ul>
   </li>
   <li>Clique em <strong>Nova Cotação</strong>.</li>
   <li>Acesse a rota <code>/b2b-quotes/create</code>.</li>
   <li>Preencha o nome da cotação ou do carrinho salvo.</li>
   <li>
      Certifique-se de que todas as informações na página Criar Cotação estão corretas:
      <ul>
         <li><strong>Subtotal Original:</strong> subtotal do carrinho de compras antes de quaisquer descontos.</li>
         <li><strong>Desconto Percentual:</strong> percentual do desconto oferecido por um representante de vendas.</li>
         <li><strong>Subtotal cotado:</strong> subtotal da cotação, incluindo quaisquer descontos oferecidos por representantes de vendas.</li>
         <li><strong>Imagem:</strong> imagem do produto selecionado.</li>
         <li><strong>Código de Ref.:</strong> código de referência do produto selecionado.</li>
         <li><strong>Nome:</strong> nome do produto.</li>
         <li><strong>Preço original:</strong> preço original do produto.</li>
         <li><strong>Preço cotado:</strong> preço do produto incluindo quaisquer descontos oferecidos por representantes de vendas.</li>
         <li><strong>Quantidade:</strong> quantidade de itens.</li>
         <li><strong>Total:</strong> valor total considerando o preço cotado e a quantidade de itens.</li>
      </ul>
   </li>
   <li>Escreva uma nota no campo <strong>Adicionar Observação</strong>, se necessário.</li>
</ol>
<div class = "alert alert-info">
   Notas adicionadas aqui serão visíveis como parte do Histórico de Atualizações da cotação ou carrinho salvo e podem ser vistas por vendedores ou outros membros da sua organização e centro de custo. Por exemplo, se um usuário desejar solicitar um desconto específico ao vendedor da loja B2B, ele pode incluir esse pedido como uma nota.
</div>
<ol start="8">
   <li>
      Clique em uma das seguintes opções:
      <ul>
         <li>
            <strong>Salvar para depois:</strong> criação de um carrinho salvo. O status do carrinho salvo recém-criado será definido como <strong>Pronta</strong>, o que significa que ele pode ser usado imediatamente para fazer um pedido por qualquer usuário dentro dessa organização ou centro de custo que tenha a <a href="#permissão-de-acesso">permissão</a> de fazer Pedidos de Cotações e Carrinhos.
         </li>
         <li>
            <strong>Salvar cotação:</strong> criação de uma cotação. O status da cotação recém-criada será definido como <strong>Pendente</strong>, o que significa que ela precisará ser revisada e ajustada por um vendedor antes que quaisquer descontos especiais possam ser aplicados.
         </li>
      </ul>
   </li>
</ol>

Uma cotação é essencialmente um carrinho salvo, com as quantidades e preços originais dos itens do carrinho de compras do usuário.

![Crie uma cotação - PT](//images.ctfassets.net/alneenqid6w5/sIVQqxw1NtZLbqtI3K4we/ed751df8db50d8cdfdf2a398800a4821/Crie_uma_cota__o.png)

## Detalhes da cotação
A página de Detalhes da Cotação exibe todas as informações sobre uma cotação ou carrinho salvo, além das ações disponíveis conforme o status e as [permissões do usuário](#permissoes-de-acesso). Para acessar esta página, vá em Minha Conta > Cotações e Carrinhos Salvos.

Nesta página, você verá as seguintes informações:

- **Nome:** nome de referência da cotação ou do carrinho salvo.
- **Subtotal original:** subtotal do carrinho de compras antes de quaisquer descontos.
- **Desconto percentual:** percentual do desconto oferecido por um representante de vendas.
- **Subtotal cotado:** subtotal da cotação, incluindo quaisquer descontos oferecidos por representantes de vendas.
- **Expiração:** data de expiração da cotação ou carrinho salvo, no formato `MM/DD/AAAA`.
- **Status:** estado atual da cotação ou carrinho salvo, conforme na página **Minhas Cotações**.
- **Imagem:** imagem do produto selecionado.
- **Código de Ref.:** código de referência do produto selecionado.
- **Nome:** nome do produto.
- **Preço original:** preço original do produto.
- **Preço cotado:** preço do produto incluindo quaisquer descontos oferecidos por representantes de vendas.
- **Quantidade:** quantidade de itens.
- **Total:** valor total considerando o preço cotado e a quantidade de itens.
- **Histórico de Atualizações:** inclui um histórico de todos os eventos relacionados à cotação, como sua criação e descontos oferecidos, incluindo notas, se houver.
- **Adicionar observação:** campo opcional para escrever comentários ou notas. Notas adicionadas aqui serão visíveis como parte do Histórico de Atualizações da cotação ou carrinho salvo. Por exemplo, se um usuário desejar solicitar um desconto específico ao seu vendedor, ele pode incluir esse pedido como uma nota.

![Detalhes da cotação - PT](//images.ctfassets.net/alneenqid6w5/5XLea07XtuCRfGJyvX819I/8285290b14999ec2d42790e54088319d/Detalhes_da_cota__o.png)

## Editar uma cotação
Usuários com [permissões](#permissoes-de-acesso) de edição, geralmente associados a papéis de Vendas ou Administrador da Loja, podem editar cotações na página de Detalhes da Cotação da seguinte forma:

- **Alterar o preço ou quantidade de cada SKU:** edite diretamente nas colunas **Preço cotado** e **Quantidade** da lista de produtos dentro da cotação.
- **Aplicar desconto percentual:** aplique um desconto percentual a toda a cotação arrastando a barra de desconto até o percentual desejado. Isso substituirá quaisquer alterações feitas nos preços individuais dos produtos.
- **Alterar data de expiração:** altere a data de expiração da cotação.
- **Adicionar observação:** escreva um comentário opcional.

Após editar a página de detalhes da cotação, salve a cotação clicando em `Salvar Cotação`. Isso definirá o status da cotação como **Pronta** e notificará por email todos os usuários que interagiram previamente com a cotação sobre a mudança.

## Solicitar ajustes adicionais a uma cotação
Usuários que não possuem permissões de edição, mas com [permissões de acesso](#permissoes-de-acesso), podem adicionar notas adicionais a uma cotação ou carrinho salvo se o status atual for Pronta, Pendente ou Revisado.

Quando um vendedor ajusta e salva uma cotação, o status altera para **Pronta**. Em seguida, um membro da organização pode adicionar notas e clicar em Enviar ao Representante de Vendas, alterando o status para Revisado. Assim, o membro da organização pode solicitar ajustes adicionais nos preços ou quantidades.

## Recusar uma cotação ou carrinho salvo
Usuários com a [permissão](#permissoes-de-acesso) de **Recusar** Cotações e Carrinhos podem recusar uma cotação ou carrinho salvo se o status atual for **Pronta**, **Pendente** ou **Revisado**, clicando em `Recusar` na página de detalhes da cotação. Uma cotação ou carrinho salvo recusado não pode mais ser editado ou usado para fazer um pedido.

## Usar uma cotação ou carrinho salvo para fazer um pedido
Usuários com [permissão](#permissoes-de-acesso) para fazer **Pedidos** a partir de Cotações e Carrinhos podem utilizar uma cotação ou carrinho salvo para fazer um pedido, caso o status atual seja **Pronta**, **Pendente** ou **Revisado**.

Para usar a cotação, clique em `Usar Cotação` na página de detalhes da cotação. Você será redirecionado para a finalização da compra, com o conteúdo da cotação ou do carrinho salvo adicionado ao seu carrinho atual. Qualquer item que estivesse anteriormente no seu carrinho será removido.

<div class="alert alert-warning">
Se o aplicativo de Configurações de <a href="https://help.vtex.com/pt/tutorial/configuracoes-de-checkout-no-b2b--u7wG1SjmeCqXCSF2UsVok">Checkout B2B</a> estiver instalado, o checkout ficará bloqueado até que você realize o pedido. Isso significa que você não poderá alterar as quantidades dos produtos nem adicionar ou remover novos produtos. Caso não haja itens suficientes em estoque para atender à quantidade especificada na cotação ou no carrinho salvo, o sistema ajustará automaticamente a quantidade. Se um produto não estiver disponível, o checkout permitirá que você o remova do carrinho.
</div>

Após realizar o pedido, o status da cotação ou do carrinho salvo mudará automaticamente para **Realizado**, impedindo seu uso posterior.

