---
title: 'Alerta de promoções (Beta)'
id: 3vDTjwoNtaxA1PUrkpEQLW
status: PUBLISHED
createdAt: 2022-11-17T21:33:42.383Z
updatedAt: 2023-03-30T17:20:52.671Z
publishedAt: 2023-03-30T17:20:52.671Z
firstPublishedAt: 2022-11-18T17:06:00.781Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: alerta-de-promocoes-beta
locale: pt
legacySlug: alerta-de-promocoes-beta
subcategory: 6iTRZiMeCGXYiO2ckABFZi
---

>ℹ️ Este módulo está em fase Beta, o que significa que estamos trabalhando para aprimorá-lo. Em caso de dúvidas, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

Criar promoções é uma boa estratégia para atrair mais compradores para o ecommerce. Ao configurá-las, é fundamental ter atenção para que os descontos aplicados resultem nos efeitos esperados, pois erros durante o cadastro de promoções podem causar perdas de receita.

Para minimizar efeitos indesejados em promoções, a página **Alerta de promoções** possibilita que você [crie alertas](https://help.vtex.com/pt/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR) com [condições](https://help.vtex.com/pt/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#condicoes) de verificar se os preços e promoções estão corretos e defina [ações preventivas](https://help.vtex.com/pt/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#acoes-preventivas) para evitar vendas com preços inesperados. Entretanto, é necessário que um pedido seja realizado para ativar o primeiro alerta.

Caso as [condições](https://help.vtex.com/pt/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#condicoes) definidas no alerta sejam identificadas, o sistema gera um alerta com informações sobre o produto vendido a preços inesperados e aplica as [ações preventivas](https://help.vtex.com/pt/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#acoes-preventivas) configuradas. Se a ação de [desativar as promoções](https://help.vtex.com/pt/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#acoes-preventivas) for configurada, o cenário indesejado não ocorrerá novamente, pois a promoção terá sido desativada.

Se você configurar apenas a ação de alerta por email, outros pedidos com o desconto indesejado ainda podem ser realizados, até que você desative manualmente a promoção ou altere as configurações da promoção para que ela tenha o efeito desejado.

Para acessar a página no Admin VTEX, acesse *Promoções > Alerta de promoções*. A seguinte interface vai aparecer:

![simuladordepromocoes gerenciar](https://images.ctfassets.net/alneenqid6w5/4E0oZf13zNjKgj5MNRYiuf/94c9af89ae0bad5601b316dfc73a6caf/simuladordepromocoes_gerenciar.gif)

A tabela a seguir apresenta a descrição das colunas da listagem de promoções:

| Coluna | Descrição | 
| ------ |:-------------:|
| Nome | Nome do alerta de promoção. |
| Alerta | Condição determinada para que o alerta seja emitido. |
| Ação preventiva | Ações que serão executadas quando o alerta for disparado. |
| Status | Status da promoção, que podem ser: <p><strong> Ativo:</strong> quando o alerta está ativado. </p> <p> <strong>Inativo:</strong> quando o alerta está desativado. </p> |

A página Alerta de promoções permite realizar as seguintes ações:

- [Criar alerta](#criar-alerta)
- [Pesquisar alerta](#pesquisar-alerta)
- [Editar alerta](#editar-alerta)
- [Desativar alerta](#desativar-alerta)
- [Duplicar alerta](#duplicar-alerta)

## Criar alerta

Para criar um alerta de promoção, clique no botão `Criar Alerta`. Para mais detalhes, leia o artigo [Alertas de promoção: como criar um alerta de promoção](https://help.vtex.com/pt/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR).

## Pesquisar alerta

Para encontrar um alerta, digite o nome da promoção na barra de busca com o ícone de lupa <i class="fas fa-search"></i> , localizada no topo da página.

Ao digitar um caractere na caixa de busca, os resultados são atualizados instantaneamente. Para limpar a busca, clique no ícone menu <i class="far fa-times-circle"></i>.

## Editar alerta

Para editar um alerta de promoção, realize os seguintes passos:

1. No Admin VTEX, acesse *Promoções > Alerta de promoções*, ou digite *Alerta de promoções* na barra de busca no topo da página. 
2. Na linha do alerta selecionado, clique sobre o ícone <i class="fas fa-ellipsis-v"></i> menu.
3. Clique em `Editar` <i class="fal fa-pencil"></i>.
4. Faça as alterações que deseja no alerta.
5. Clique em `Salvar`.

Ao final, as edições no alerta terão sido salvas e aplicadas.

## Desativar alerta 

Para desativar um alerta de promoção, realize os seguintes passos:

1. No Admin VTEX, acesse *Promoções > Alerta de promoções*, ou digite *Alerta de promoções* na barra de busca no topo da página.
2. Na linha do alerta selecionado, clique sobre o ícone <i class="fas fa-ellipsis-v"></i> menu.
3. Clique em `Desativar` <i class="far fa-times"></i>.

Ao final, o alerta será desativado. Você poderá ativá-lo novamente caso deseje, selecionando o alerta e clicando no *switch* <i class="fas fa-toggle-on"></i>.

## Duplicar alerta

Para duplicar um alerta de promoção, realize os seguintes passos:

1. No Admin VTEX, acesse *Promoções > Alerta de promoções*, ou digite *Alerta de promoções* na barra de busca no topo da página.
2. Na linha do alerta selecionado, clique sobre o ícone <i class="fas fa-ellipsis-v"></i> menu.
3. Clique em `Duplicar` <i class="far fa-clone"></i>.
4. Você será direcionado para a página de **Criar alerta**, como se estivesse criando um novo alerta, entretanto, se trata de uma cópia identica do alerta que foi duplicado. O nome do alerta duplicado, por padrão, será `Cópia de` + `nome do alerta duplicado`.
5. Faça as alterações que desejar.
6. Clique em `Salvar`.

Ao final, a duplicação do alerta terá sido concluída com sucesso.

## Saiba mais

- [Alerta de promoção: Como criar um alerta de promoção](https://help.vtex.com/pt/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR)
- [Como funcionam as promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR)
