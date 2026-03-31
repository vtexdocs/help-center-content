---
title: 'Como criar um canal SMS - para desenvolvedores (RapidPro)'
id: 3vQxJJOAjRC2eizkGZ4mix
status: PUBLISHED
createdAt: 2025-09-15T14:10:36.156Z
updatedAt: 2025-10-03T14:20:33.769Z
publishedAt: 2025-10-03T14:20:33.769Z
firstPublishedAt: 2025-10-03T14:20:33.769Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-create-an-sms-channel-for-developers-rapidpro
legacySlug: como-criar-um-canal-sms-para-desenvolvedores-rapidpro
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

A plataforma Rapidpro permite que as organizações criem visualmente aplicativos de mensagens interativos escaláveis e é um serviço hospedado para a criação destas configurações de canal SMS.

Para saber mais, visite o site do projeto em <http://rapidpro.github.io/rapidpro>. Dezenas de canais são suportados em colaboração com empresas de SMS e redes sociais que se comunicam de diferentes maneiras dentro da plataforma. A integração do SMS pode ser basicamente **feita de três maneiras:**

- Usando canal Integrado ao Rapidpro
- Usando uma API REST *(External API)*
- Usando conexão SMSC *(Kannel*)

1. **Canal integrado ao Rapidpro**

Essa é a maneira mais rápida de integrar o canal SMS à plataforma, pois possui a funcionalidade interna de enviar e receber mensagens para serviços externos já disponíveis para todos os espaços de trabalho. Existem duas partes dessa integração:

**Mensagens enviadas**

Quando precisamos enviar uma mensagem de saída, ele fará um POST para este URL com os parâmetros 'texto', 'para', 'de', 'canal' e 'id'. Exemplo:

POST [https://google.com.br](https://google.com.br/) Tipo de conteúdo: application/json Body: {""id"": 1241244, ""texto"": ""O amor é paciente. O amor é gentil."", ""Para"": ""\+250788123123"", ""to\_no\_plus"": ""250788123123"", ""from"": ""\+5582999489287"", ""from\_no\_plus"": ""5582999489287"", ""channel"": 346}

**Mensagens recebidas**

Quando uma nova mensagem é recebida pelo seu serviço, ela deve nos notificar com um POST para o seguinte URL, passando os seguintes parâmetros: 'from' e 'test'. Opcionalmente, os chamadores também podem enviar um parâmetro 'date' no formato ISO\-8601 (ex: 2012\-04\-23T18:25:43\.511Z) para especificar a hora em que a mensagem foi recebida. Exemplo:

POST [https://rapidpro.ilhasoft.mobi/c/ex/a86f686f\-9168\-4dd9\-a03e\-77f11b265b56/receive](https://rapidpro.ilhasoft.mobi/c/ex/a86f686f-9168-4dd9-a03e-77f11b265b56/receive) from\=%2B250788123123\&text\=Love\+is\+patient.\+Love\+is\+kind.\&date\=2012\-04\-23T18:25:43\.511Z

1. **API REST (External API)**

A plataforma se conecta facilmente a muitos canais usando uma API HTTP, que estará disponível em todos os espaços de trabalho para adicionar canais do mesmo agregador. O Agregador de SMS precisa fornecer as seguintes informações para integrar:

- Documentação completa sobre sua API Pública, que inclui métodos de autenticação, parâmetros de entrada e formato de saída para nó de extremidade;
- Um número de telefone de teste fornecido pelo agregador;
- Acesso a uma conta de teste no console do agregador para permitir que os desenvolvedores validem a integração durante o desenvolvimento;
- Os contatos da equipe de suporte do SMS Agregator estão disponíveis para solucionar qualquer dúvida sobre integração.

1. **Conexão SMSC (Kannel)**

No caso de uma conexão SMSC, é necessário conectar\-se a uma Rede Privada Virtual (VPN), devido a problemas de segurança, para que a Weni guie o processo para ajudar os clientes a fazer essas conexões com segurança. Existem muitos protocolos que podem ser integrados como SMPP, UCP/EMI e CIMD3, dependendo do que o agregador de SMS fornece para integração de terceiros. A primeira etapa para integrar depende do agregador de SMS, portanto, é necessário fornecer os seguintes itens:

\- Documentação: a documentação necessária para conectar\-se ao agregador VPN, enviar e receber mensagens através de seus serviços;

\- Formulário de Rede Virtual Privada (VPN): normalmente o agregador de SMS possui um formulário que requer informações da empresa que deseja se comunicar com seus serviços por meio de uma conexão VPN.

\- Credenciais SMSC: A Weni precisa de nome de usuário, senha, porta e qualquer outra informação necessária para enviar e receber mensagens para o agregador.

Depois que os itens acima estiverem totalmente preenchidos, a Weni se conecta à VPN e notifica o agregador para rotear as mensagens recebidas para o servidor da Weni e a fase de teste é iniciada. Durantes essas fases, é necessário entrar em contato diretamente com os membros da equipe da Weni, para que os seguintes contatos possam ser usados:

- Email: suporte@weni.ai
