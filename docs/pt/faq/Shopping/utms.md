---
title: "UTM's"
id: 7hNEeOMbO6wTQV45W6a1IY
status: PUBLISHED
createdAt: 2022-08-29T19:42:13.409Z
updatedAt: 2022-09-30T19:45:10.986Z
publishedAt: 2022-09-30T19:45:10.986Z
firstPublishedAt: 2022-08-29T19:54:21.386Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: utms
locale: pt
legacySlug: utms
---

Integre o link do formulário de captura com a **UTM**, e depois inclua o link da **VTEX Assisted Sales (SuiteShare) + a UTM** em cada campanha para identificar como os leads chegaram até você.

A configuração de **UTM** pode ser feita manualmente, digitando as configurações ao lado do link ou, você também pode utilizar o **[URL Builder](https://ga-dev-tools.appspot.com/campaign-url-builder/)**, uma ferramenta do Google que oferece a opção de você apenas inserir o link e o conteúdo de cada UTM e a própria ferramenta **cria o link final**. 

Para que as **UTMS** configuradas funcionem corretamente, é necessário que **3 opções**, pelo menos, estejam configuradas no link: 

1 - utm\_source.  
2 - utm\_medium.  
3 - utm\_campaign.

![UTMs1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Abaixo um exemplo de como o link deve ficar e como aparecerá no **RD Station**: 

**[https://whts.co/marcelows](\"https://whts.co/marcelows\")**utm\_source=**facebook**&utm\_medium=cpc&utm\_campaign=nomecampanhaexemplo&utm\_term=palavrachaveYou

![UTMs2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

Após estar com o link configurado, as origens de leads convertidos nesse link respeitarão as configurações inseridas por você.
