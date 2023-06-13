---
title: Solicitar exclusão de dados pessoais de clientes conforme leis internacionais sobre privacidade
id: 34Sd4DN6fOk5odkjIAedpE
status: DRAFT
createdAt: 2022-04-11T21:00:56.085Z
updatedAt: 2022-04-27T13:02:50.770Z
publishedAt: 
firstPublishedAt: 2022-04-11T22:24:38.940Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: solicitar-exclusao-de-dados-pessoais-de-clientes-conforme-leis
legacySlug: solicitar-exclusao-de-dados-pessoais-de-clientes-conforme-leis
subcategory: 6uJgdHqWf1Mo0rUfgxseTn
---

Nossa plataforma possui ferramentas que são constantemente atualizadas para tornar mais fácil e transparente a conformidade dos clientes às legislações de proteção de dados pessoais.

Existem leis internacionais sobre proteção de dados, como o [Regulamento Geral sobre a Proteção de Dados (RGPD)](https://www.serpro.gov.br/lgpd/menu/a-lgpd/mapa-da-protecao-de-dados-pessoais), da União Europeia, em vigor desde 2018. No Brasil, há a [Lei Geral de Proteção de Dados Pessoais (LGPD)](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm), em vigor desde 2020.

De modo geral, as legislações de diversos países dão direitos aos titulares sobre seus próprios dados, já que eles são considerados os proprietários desses dados. Um desses direitos é ter seus dados apagados de sistemas como a VTEX.

Existem duas etapas para a exclusão dos dados:

1. [Configurar dados no Master Data](#configurar-dados-no-master-data)
2. [Abrir ticket no Suporte VTEX](#abrir-ticket-no-suporte-vtex)

## Configurar dados no Master Data

A configuração dos dados no Master Data é a primeira etapa para exclusão dos dados confidenciais. O Master Data armazena os dados referentes aos usuários finais como identificação pessoal, informações confidenciais e endereço. 

As leis de privacidade determinam que os dados pessoais dos titulares não devem ser compartilhados ou expostos de forma indevida. Portanto, são necessárias configurações para assegurar proteção a esses dados.

<div class="alert alert-warning" role="alert">
As configurações que forem salvas não poderão ser revertidas.
</div>

Para configurar siga os passos abaixo:

1. Acesse a URL `https://<account>.ds.vtexcrm.com.br/` substituindo `<account>` pelo [nome da sua loja](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC).
2. Selecione a opção em **Data Entity**.
3. Na coluna *Acronyms*, selecione os itens com as siglas **CL (cliente)** e **AD (endereço)** que deseja configurar.
4. Na coluna *Actions*, clique na opção **Edit**.
5. Escolha o dado da aba *Fields* que deseja editar e clique no `ícone da engrenagem` <i class="fas fa-cog"></i>.
6. Em *General Settings*, selecione as opções que você desejar:
   * **Is nullable ?:** Indica que o campo é nulo.
   * **Make readable without credentials:** Permite que qualquer pessoa leia este campo sem autenticação. Sugerimos que não marque esse campo para dados pessoais ou confidenciais.
   * **Allow editing without credentials:** Permite que qualquer pessoa altere o valor do campo sem autenticação.
   * **Allow filter without credentials:** Permite que qualquer pessoa pesquise usuários usando o valor do campo sem autenticação.
7. Clique em `Salvar`.

## Abrir ticket no Suporte VTEX

Depois de configurar os dados no Master Data, você deverá solicitar a extensão da exclusão de dados pessoais de seus clientes também nos sistemas da VTEX via abertura de ticket no nosso [Suporte VTEX](https://help.vtex.com/pt/support).

<div class="alert alert-warning" role="alert">
Solicite a exclusão de dados de apenas uma conta, ou seja, um e-mail do shopper a ser excluído por ticket. Caso você inclua mais de um e-mail, o ticket será retornado. </div>

Para solicitar a exclusão dos dados pessoais dos clientes, siga os seguintes passos:

1. Acesse o [Suporte VTEX](https://help.vtex.com/pt/support).
2. Preencha seu nome completo no campo **Nome** e selecione no campo **Loja** o nome da loja que deseja solicitar o chamado.
3. Clique na opção `Continuar`.
4. Selecione a opção `Técnico`.
5. No campo **Tipos de problema**, selecione a opção `Gostaria de solicitar uma configuração`.
6. No campo **Assunto da solicitação**, você deverá preencher as seguintes informações:
   * Solicitação de Data Subject Request
   * VTEX accounts
   * E-mail vinculado a contas VTEX cujos dados devem ser excluídos.
7. Selecione no campo **Sua experiência com a plataforma** a opção que corresponde à sua experiência como usuário da plataforma VTEX.
8. Preencha o campo **Descreva o que aconteceu detalhadamente** com detalhes da sua solicitação.
9. Clique em `Enviar`.

Sua solicitação será enviada à nossa equipe de suporte. Na conclusão do chamado, será emitido um certificado para o e-mail em que o ticket foi aberto comprovando a veracidade da conclusão da exclusão dos dados.
