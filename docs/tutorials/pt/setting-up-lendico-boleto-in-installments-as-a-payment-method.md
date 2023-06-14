---
title: 'Configurar boleto parcelado Provu (Lendico) como meio de pagamento'
id: 1pRpPlkppLDEc1TVXTgrcu
status: PUBLISHED
createdAt: 2020-12-02T10:58:09.076Z
updatedAt: 2023-03-26T21:47:26.770Z
publishedAt: 2023-03-26T21:47:26.770Z
firstPublishedAt: 2020-12-02T12:54:57.731Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-boleto-parcelado-lendico-como-meio-de-pagamento
legacySlug: configurar-boleto-parcelado-lendico-como-meio-de-pagamento
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A Provu (anteriormente Lendico) é uma fintech que oferece serviços financeiros, dentre eles o crédito pessoal e o Boleto Provu Parcelado. 

Este último trata-se de um meio de pagamento que oferece ao consumidor a opção de realizar o pagamento em prestações via boleto bancário, sem a necessidade de possuir ou comprometer o limite de um cartão de crédito.

Neste artigo, explicaremos todas as etapas necessárias para configurar o boleto parcelado da Provu como um meio de pagamento válido no Checkout no seu ecommerce VTEX. 

## Cadastro como parceiro Provu

O primeiro passo é contactar a Provu e demonstrar interesse em tornar-se um parceiro.

Para isso, é preciso preencher um formulário de Fale Conosco específico para varejistas. Você pode conferir este guia [clicando aqui](https://provu.com.br/parcelado/boleto-parcelado-varejista/).

## Configuração na VTEX

Quando a parceria for finalizada, você pode acessar o Admin da sua loja VTEX para realizar as etapas necessárias para a configuração do boleto parcelado.

Mas antes de prosseguirmos, lembre-se que a maioria das instruções a seguir serão realizadas no módulo de Pagamentos da plataforma. 

Caso você não tenha familiaridade com essa parte do Admin, recomendamos a leitura da nossa [track de primeiros passos](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG "track de primeiros passos") desse módulo.

### 1. Criação de chaves de acesso
A Provu precisa ter acesso à sua loja para ter acesso às notas fiscais dos seus pedidos. Mais especificamente, ao módulo de Gerenciamento de Pedidos para, assim, pode realizar os processos legais e de auditoria.   

Essas chaves de acesso são conhecidas como AppKey e AppToken e o  passo a passo para criá-las é descrito no [artigo sobre autenticação do Developer Portal](https://developers.vtex.com/vtex-developer-docs/docs/getting-started-authentication "artigo sobre autenticação no Developer Portal").

Quando tiver as chaves em mãos, entre em contato novamente com a Provu e informe as credenciais. Desse modo, o parceiro poderá fazer as configurações necessárias na sua loja.

Por fim, a Provu lhe informará as suas credenciais - Key e Token -, necessárias para cadastrar finalizar o cadastro da afiliação.

<div class="alert alert-danger">
Guarde as credenciais da Provu em lugar seguro, em que não irá perdê-las. Os valores da Key e do Token são imprescindíveis para o cadastro da afiliação. 
</div>

### 2. Cadastro da afiliação
A partir de agora, todos as etapas serão realizadas no módulo de Pagamentos do Admin. 

Com as credenciais da Provu em mãos, prossiga com as instruções a seguir:
1. 
2. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
3. Clique na aba __Afiliações de Gateway__.
4. Ao lado da barra de busca, clique no __botão verde “+”__.
5. Na seção “Outros”, clique na opção __"Lendico"__.
6. Preencha o campo __Nome da Afiliação__.
7. Logo abaixo, clique no botão __"Live/Produção"__ para ativar a afiliação.
<div class="alert alert-warning">
Confira se a área ao redor do botão mudou a cor para verde. Isso indica que a afiliação será ativada ao final da configuração. 
</div>
11. Do lado direito da tela, preencha os campos __Aplication Key__ e __Aplication Token__ com os respectivos dados fornecidos pela própria Lendico.
12. Finalize clicando no botão azul __"Salvar"__.

Desse modo, a afiliação Lendico estará habilitada para processar os pagamentos realizados com o boleto parcelado.  

### 3. Configuração do Boleto Provu Parcelado

Agora que a afiliação Provu foi devidamente cadastrada no seu ecommerce, você deve configurar o seu respectivo meio de pagamento. 

Confira as instruções:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Certifique-se que você está na aba __Condições de pagamento__.
3. Ao lado da barra de busca, clique no __botão verde “+”__.
4. Na seção “Outro”, clique na opção __"Lendico"__.
5. No topo da página, preencha o campo __Nome da Regra__.
6. Logo abaixo, clique no botão __"Status"__ para ativar a regra.
7. Em Processar com afiliação, selecione a opção __"Lendico"__.
8. Se for necessário, clique na caixa de seleção __“Usar Antifraude”__.

Por fim, o cliente tem ainda a opção de configurar as condições especiais de pagamento. Entretanto, essas regras são opcionais e a sua “não-configuração” não afeta em nada o funcionamento da Provu como meio de pagamento. 

Assim, caso o cliente não queira definir nenhuma condição especial, basta clicar no botão azul “Salvar” para finalizar a configuração.  
