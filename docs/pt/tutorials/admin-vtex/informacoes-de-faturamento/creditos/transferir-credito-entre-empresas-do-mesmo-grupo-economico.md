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

Você pode transferir parte do saldo da [carteira de crédito](/pt/docs/tutorials/carteira-de-credito) de uma empresa para outra do mesmo grupo econômico pela página **Créditos** do Admin VTEX. Isso é útil quando algumas empresas do grupo têm crédito de sobra e outras consomem mais [Master Data](/pt/docs/tutorials/master-data-pt) do que o crédito disponível.

Neste artigo, veja como transferir crédito. Para entender as regras da transferência e o prazo para abater a fatura, veja [Como funciona a transferência de crédito entre empresas](/pt/docs/tutorials/como-funciona-a-transferencia-de-credito).

> ⚠️ Para transferir crédito, você precisa acessar a página **Créditos** e ter o recurso `Transfer Credit` de [Billing](/pt/docs/tutorials/perfis-de-acesso-predefinidos#billing) vinculado ao seu perfil.
>
> Para acessar a página **Créditos**, você precisa do perfil [Finance](/pt/docs/tutorials/perfis-de-acesso-predefinidos#finance), do perfil [Finance Full Access](/pt/docs/tutorials/perfis-de-acesso-predefinidos#finance-full-access) ou do recurso `View Credits` de Billing.
>
> O recurso `Transfer Credit` precisa estar habilitado na empresa de origem e vale para usuários (email) e para chaves de API (appKey).

## Instruções

Para transferir crédito da empresa de origem para outra empresa do grupo econômico, siga as instruções a seguir:

1. No Admin VTEX, clique no seu avatar — identificado pela inicial do seu email — no canto superior direito da tela.
2. Clique em **Informações de faturamento > Créditos**.
3. Clique em `Transferir crédito`.
4. No modal que se abre, preencha os campos:
   - **Origem:** a empresa de origem, com o saldo disponível. Este campo não pode ser alterado.
   - **Destino:** selecione a empresa que receberá o crédito. A lista exibe apenas empresas do mesmo grupo econômico, pelo nome cadastrado no Billing. Se houver nomes repetidos, o ID da empresa aparece ao lado do nome. Para encontrar a empresa pelo nome de uma de suas contas, veja [Buscar a empresa de destino por nome de conta](#buscar-a-empresa-de-destino-por-nome-de-conta).
   - **Valor:** informe o valor a transferir. Ele deve ser maior que zero e até o saldo disponível da empresa de origem.
5. Revise o resumo da transferência, que mostra a origem, o destino, o valor e o novo saldo da empresa de origem.

  > ⚠️ A transferência não pode ser desfeita. Antes de confirmar, verifique a empresa de destino e o valor.

6. Clique em `CONFIRMAR` para confirme a transferência.

Nada é enviado antes da confirmação. Quando a transferência é concluída, o modal exibe o identificador da transferência, a empresa de destino e o valor transferido. Ao fechar o modal, o extrato e o saldo da empresa de origem são atualizados.

> ℹ️ O crédito transferido só abate a fatura se chegar à empresa de destino antes de a fatura ser gerada, no dia 1 do mês seguinte. Saiba mais em [Prazo para abater a fatura](/pt/docs/tutorials/como-funciona-a-transferencia-de-credito#prazo-para-abater-a-fatura).

### Buscar a empresa de destino por nome de conta

Para encontrar a empresa de destino, digite o nome de uma conta do grupo econômico no campo de busca. A busca mostra a empresa a que a conta pertence.

O destino da transferência é sempre a empresa, nunca a conta. Se a conta pertencer à própria empresa de origem, a tela informa que é a mesma empresa e não permite continuar. Se nenhuma conta for encontrada no grupo econômico, a tela informa que não há resultados.

## Erros comuns

Se a transferência não for concluída, a tela exibe uma mensagem com o motivo. Estes são os casos possíveis:

- **Saldo insuficiente:** o valor é maior que o saldo disponível da empresa de origem. Informe um valor menor.
- **Empresa de destino fora do grupo econômico ou inexistente:** selecione outra empresa na lista do campo **Destino**.
- **Valor inválido:** informe um valor maior que zero.
- **Falta de permissão:** verifique se o recurso `Transfer Credit` está habilitado para o seu perfil na empresa de origem.
- **Transferência duplicada:** a mensagem descreve a transferência já realizada. Consulte o **Extrato de crédito** antes de tentar novamente.
