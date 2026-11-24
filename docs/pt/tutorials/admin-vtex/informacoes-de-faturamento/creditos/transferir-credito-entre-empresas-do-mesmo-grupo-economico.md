---
title: 'Transferir crédito entre empresas do mesmo grupo econômico'
createdAt: '2026-11-18T00:00:00.000Z'
updatedAt: '2026-11-19T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: transferring-credit-between-companies-in-the-same-economic-group
locale: pt
seeAlso:
  - "/pt/docs/tutorials/como-funciona-a-transferencia-de-credito"
  - "/pt/docs/tutorials/carteira-de-credito"
  - "/pt/docs/tutorials/consultar-carteira-de-credito"
---

Você pode transferir parte do saldo da [carteira de crédito](/pt/docs/tutorials/carteira-de-credito) de uma empresa para outra do mesmo grupo econômico pela página **Créditos** do Admin VTEX. Isso é útil quando algumas empresas do grupo têm crédito excedente e outras consomem mais [Master Data](/pt/docs/tutorials/master-data-pt) do que o crédito disponível.

Neste artigo, você aprenderá a transferir crédito entre empresas e a buscar a empresa de destino pelo nome da conta. Para entender as regras da transferência e o prazo para abater a fatura, veja [Como funciona a transferência de crédito entre empresas](/pt/docs/tutorials/como-funciona-a-transferencia-de-credito).

## Antes de começar

Antes de iniciar a transferência, verifique se você atende aos seguintes requisitos:

- **Acesso à página Créditos:** você precisa ter o perfil [Finance](/pt/docs/tutorials/perfis-de-acesso-predefinidos#finance), o perfil [Finance Full Access](/pt/docs/tutorials/perfis-de-acesso-predefinidos#finance-full-access) ou o recurso `View Credits` de [Billing](/pt/docs/tutorials/perfis-de-acesso-predefinidos#billing) vinculado ao seu perfil.
- **Permissão para transferir:** você precisa ter o recurso `Transfer Credit` de Billing vinculado ao seu perfil e habilitado na empresa de origem. Esse requisito vale para usuários (email) e para chaves de API (appKey).

## Instruções

Aqui está uma visão geral das etapas:

- [Transferindo o crédito](#transferindo-o-crédito)
- [Buscando a empresa de destino por nome de conta](#buscando-a-empresa-de-destino-por-nome-de-conta)

### Transferindo o crédito

Para transferir crédito da empresa de origem para outra empresa do grupo econômico, siga as instruções a seguir:

1. No Admin VTEX, clique no seu avatar — identificado pela inicial do seu email — no canto superior direito da tela.
2. Clique em **Informações de faturamento > Créditos**.
3. Clique em `Transferir crédito`.
4. No modal que se abre, preencha os campos:
   - **Origem:** exibe a empresa de origem, com o saldo disponível. Você não pode alterar este campo.
   - **Destino:** selecione a empresa que receberá o crédito. A lista exibe apenas empresas do mesmo grupo econômico, pelo nome cadastrado no Billing. Se houver nomes repetidos, o identificador (ID) da empresa aparece ao lado do nome. Para encontrar a empresa pelo nome de uma de suas contas, veja [Buscando a empresa de destino por nome de conta](#buscando-a-empresa-de-destino-por-nome-de-conta).
   - **Valor:** informe o valor a transferir. Ele deve ser maior que zero e até o saldo disponível da empresa de origem.
5. Revise o resumo da transferência, que mostra a origem, o destino, o valor e o novo saldo da empresa de origem.

   > ⚠️ Você não pode desfazer a transferência após confirmá-la. Antes de confirmar, verifique a empresa de destino e o valor.

6. Clique em `CONFIRMAR` para confirmar a transferência.

O sistema não envia a transferência antes da sua confirmação. Ao concluir a transferência, o modal exibe o identificador da transferência, a empresa de destino e o valor transferido. Ao fechar o modal, o sistema atualiza o extrato e o saldo da empresa de origem.

> ℹ️ O crédito transferido só abate a fatura se chegar à empresa de destino antes de o Billing gerar a fatura, no dia 1 do mês seguinte. Saiba mais em [Prazo para abater a fatura](/pt/docs/tutorials/como-funciona-a-transferencia-de-credito#prazo-para-abater-a-fatura).

### Buscando a empresa de destino por nome de conta

Para encontrar a empresa de destino, digite o nome de uma conta do grupo econômico no campo de busca. A busca mostra a empresa a que a conta pertence.

O destino da transferência é sempre a empresa, nunca a conta. Se a conta pertencer à própria empresa de origem, a tela informa que é a mesma empresa e não permite continuar. Se a busca não encontrar nenhuma conta no grupo econômico, a tela informa que não há resultados.

## Erros comuns

Se o sistema não concluir a transferência, a tela exibe uma mensagem com o motivo. Estes são os casos possíveis:

- **Saldo insuficiente:** o valor é maior que o saldo disponível da empresa de origem. Informe um valor menor.
- **Empresa de destino fora do grupo econômico ou inexistente:** selecione outra empresa na lista do campo **Destino**.
- **Valor inválido:** informe um valor maior que zero.
- **Falta de permissão:** verifique se o seu perfil tem o recurso `Transfer Credit` habilitado na empresa de origem.
- **Transferência duplicada:** a mensagem descreve a transferência já realizada. Consulte o **Extrato de crédito** antes de tentar novamente.

## Saiba mais

- [Como funciona a transferência de crédito entre empresas](/pt/docs/tutorials/como-funciona-a-transferencia-de-credito)
- [Carteira de crédito](/pt/docs/tutorials/carteira-de-credito)
- [Consultar carteira de crédito](/pt/docs/tutorials/consultar-carteira-de-credito)
