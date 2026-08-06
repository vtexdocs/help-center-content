---
title: 'Intelligent Search: detecção de sinônimos conflitantes'
createdAt: 2026-08-05T12:00:00.000Z
updatedAt: 2026-08-05T12:00:00.000Z
publishedAt: 2026-08-05T12:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: 2026-08-05-intelligent-search-synonym-conflict-detection
locale: pt
announcementSynopsisPT: 'O Intelligent Search agora indica quando um termo já é coberto por outro sinônimo, ajudando a evitar duplicidade e conflitos de relevância.'
tags:
  - Nova funcionalidade
  - Intelligent Search
---

A VTEX lançou uma camada de detecção de conflitos no fluxo de criação e edição de [sinônimos](https://help.vtex.com/pt/docs/tutorials/sinonimos) do Intelligent Search, alertando o lojista sempre que um termo já estiver coberto por uma regra existente.

A novidade atende a uma demanda recorrente de lojas com bases extensas de sinônimos, algumas com mais de 10.000 regras cadastradas. Nessas lojas, era comum recriar regras já existentes sem perceber. Isso acabava poluindo a listagem com entradas duplicadas e dificultando a gestão da configuração ao longo do tempo.

## O que mudou?

- Ao criar ou editar um sinônimo, o Intelligent Search passa a validar os termos informados em relação a toda a base de sinônimos já cadastrada na loja.
- Se um termo já for coberto por outra regra, um aviso sinaliza a sobreposição e direciona para a página de **Sinônimos conflitantes**, onde é possível revisar, editar ou excluir cada sinônimo conflitante individualmente.
- Ao clicar em `Salvar`, uma janela de confirmação identifica o conflito e solicita que o lojista confirme o cadastro ou a edição antes de prosseguir.

## O que precisa ser feito?

Nenhuma ação é necessária. A detecção de conflitos está disponível para todas as lojas que utilizam o Intelligent Search. Para saber mais, consulte o artigo [Criar sinônimos](https://help.vtex.com/pt/docs/tutorials/criar-sinonimos#deteccao-de-sinonimos-conflitantes).
