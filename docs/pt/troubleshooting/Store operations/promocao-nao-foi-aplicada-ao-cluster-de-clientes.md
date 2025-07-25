---
title: 'Promoção não foi aplicada ao cluster de clientes'
id: 1fQEKdmWwIAPfDQAbuP3Kr
status: PUBLISHED
createdAt: 2025-02-28T18:00:30.100Z
updatedAt: 2025-02-28T19:31:52.785Z
publishedAt: 2025-02-28T19:31:52.785Z
firstPublishedAt: 2025-02-28T19:31:52.785Z
contentType: tutorial
productTeam: Others
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: the-promotion-wasnt-applied-to-the-customer-cluster
locale: pt
legacySlug: promocao-nao-foi-aplicada-ao-cluster-de-clientes
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: Promoções, Cluster, Perfil de clientes, Master Data
---

Uma [promoção personalizada](/pt/tutorial/criando-promocao-para-um-cluster-de-clientes) pode ser configurada para atender a um grupo específico de usuários em sua loja, ou seja, um [cluster de clientes](/pt/tutorial/como-criar-um-cluster-de-clientes--frequentlyAskedQuestions_1724). No entanto, podem ocorrer situações em que a promoção não é exibida corretamente para este público segmentado. As principais causas são:

- Ausência ou cadastro incorreto do valor do cluster durante a configuração da promoção.
- Inconsistência entre os valores cadastrados na promoção e os valores atribuídos nos perfis dos clientes.

## Solução

Confira a seguir algumas soluções que podem ajudar a garantir a exibição da promoção para o cluster de cliente desejado.

### Verificar valor do cluster configurado na promoção

Para identificar se um cluster de clientes está associado a uma promoção, siga os passos abaixo:

<blockquote><ui>1. No Admin VTEX, acesse <b>Promoções > Promoções</b>, ou digite <b>Promoções</b> na barra de busca no topo da página.</ui>

<blockquote><ui>2. Clique na promoção que deseja verificar.</ui>

<blockquote><ui>3. Na seção <b>“Quais as condições para a promoção ser válida?”</b>, verifique se a opção <b>Cluster de clientes</b> está marcada e se o campo está preenchido com o <a href="https://help.vtex.com/pt/tutorial/criando-promocao-para-um-cluster-de-clientes#como-preencher-o-campo-cluster-de-clientes">valor correto do respectivo cluster</a>.</ui>

![Cluster_pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/Store%20operations/promocao-nao-foi-aplicada-ao-cluster-de-clientes_1.png) 

<blockquote><ui><div class="alert alert-warning">
  O valor cadastrado no campo deve ser exatamente igual ao valor anteriormente atribuído ao cluster de cliente, pois o sistema interpreta diferenças entre letras maiusculas e minúsculas (case sensitive). Por exemplo, se o valor adotado para um determinado identificador do cluster é <code>funcionario=true</code> e na promoção for cadastrado <code>Funcionario=true</code> ou <code>funcionario=True</code>, a promoção não será exibida para os usuários daquele cluster.
</div></blockquote>

<blockquote><ui>4. Caso necessário, adicione ou modifique o valor referente ao cluster desejado.</ui>

<blockquote><ui>5. Clique em <code>Salvar</code>.</ui>

<blockquote><ui><div class="alert alert-info">
  Para garantir que uma mesma promoção seja aplicada simultaneamente a clusters de clientes que possuem valores diferentes cadastrados, é necessário selecionar a condição <b>Pelo menos um dos seguintes</b> e configurar todos os valores dos clusters na promoção.
</div></blockquote>

### Verificar valor atribuído no perfil do cliente

Em um cenário em que a promoção tenha mais de um valor cadastrado no campo disponível em __Cluster de clientes__, e a condição selecionada seja __Todos os seguintes__, é necessário que os clientes do cluster atendam a todos os critérios cadastrados.

Por exemplo, uma promoção configurada com a condição __Todos os seguintes__, preenchida com `Funcionario=true` e `code=platinum`, será aplicada apenas para clientes que tenham o perfil cadastrado como __funcionário__ e o código __platinum__. Clientes que atendam a apenas um dos requisitos não poderão utilizar a promoção.

Para resolver este caso, você poderia realizar uma das seguintes ações:

- Alterar a opção __Cluster de clientes__ para a condição __Pelo menos um dos seguintes__, permitindo que clientes identificados como __funcionário__ ou com código __platinum__ possam acessar a promoção.

- Manter a opção __Cluster de clientes__ com a condição __Todos os seguintes__ e atualizar os cadastros dos clientes desejados por meio do [Master Data](/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) para incluir ambos os critérios: ser __funcionário__ e estar classificado na categoria __platinum__.

- Manter a opção __Cluster de clientes__ com a condição __Todos os seguintes__ e declarar outros valores que estejam atualmente presentes nos clientes aos quais deseja exibir a promoção.