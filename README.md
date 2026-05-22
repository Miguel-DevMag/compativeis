# Compatíveis — Landing Page de Conversão Premium

Este repositório contém a página de vendas de alta conversão do **Compatíveis**, um projeto focado em terapia comportamental profunda para casais em crise. O desenvolvimento visual e técnico prioriza a autoridade, a sofisticação e a facilidade de navegação para transmitir estabilidade e confiança ao usuário.

---

## 💡 Motivação do Projeto

A busca por terapia de casal costuma ocorrer em momentos de grande desgaste emocional. A motivação central deste projeto foi criar um ambiente digital que se distancie de páginas de saúde genéricas ou clínicas tradicionais. Buscou-se desenvolver uma interface de **alto padrão (Premium)** que represente a exclusividade e a seriedade da metodologia desenvolvida pelo terapeuta Márcio.

Para atingir esse objetivo:
- Adotamos um esquema de cores sóbrio e elegante baseados em tons escuros (*Vantablack*) e destaques em ouro puro (*True Gold*).
- Empregamos a técnica de *Glassmorphism* (efeito de vidro jateado com desfoque) para dar profundidade e modernidade aos blocos de informação.
- Estruturamos uma experiência responsiva e fluida para que o usuário sinta estabilidade e facilidade de leitura tanto no computador quanto no celular.

---

## 🛠️ Como o Projeto Foi Realizado (Desenvolvimento Técnico)

O site foi construído focando em performance de carregamento, responsividade e interações fluidas. O processo de desenvolvimento e os refinamentos aplicados incluem:

1. **Estrutura de Base (HTML Semântico & Design System)**:
   - Toda a estrutura foi codificada usando HTML5 semântico para garantir acessibilidade e SEO. 
   - Centralizamos todo o design (cores, tipografia, bordas e espaçamentos) em variáveis CSS `:root` para manter o código limpo, modular e de fácil manutenção.

2. **Refatoração do Grid de Dores (Bento Box)**:
   - A seção *"Você se identifica?"* foi organizada em um layout simétrico de Bento Grid de **2x2** em desktops e **1 coluna** em dispositivos móveis.
   - Cada bloco de dor conta com efeito de vidro translúcido, ícone dourado estilizado e animação de elevação sutil com borda dourada ativa no hover.

3. **Carrossel de Relatos Verticais (Testemunhos)**:
   - Integramos a biblioteca **Swiper.js** para gerenciar os relatos em vídeo. 
   - Reduzimos a largura dos slides para `140px` e encurtamos a proporção para `9/13.5` (com a altura passando de 284px para 210px).
   - Aplicamos `object-fit: cover` nas tags `<video>` e imagens de poster, garantindo que os vídeos verticais preencham o cartão de forma limpa e sem barras pretas laterais ou verticais.

4. **Navegação Mobile Premium**:
   - Reconstruímos o menu mobile para abrir em uma gaveta lateral suave com efeito glassmorphic e borda dourada fina.
   - Adicionamos animação de entrada em cascata (*stagger transition*) nos links.
   - O menu agora exibe números sequenciais elegantes (ex: `01. O Caso`, `02. O Márcio`) gerados dinamicamente via seletores de contagem do CSS.
   - O botão hamburger foi redesenhado para ter linhas assimétricas que se expandem no hover e se transformam em um `X` preciso ao clique.

5. **Bloco de Preço e Chamada para Ação (CTA)**:
   - O botão de ação principal *"Garantir Minha Vaga"* recebeu um efeito de aura dourada no hover.
   - O bloco de investimento foi transformado em um cartão flutuante detalhado: o título *"Investimento"* foi encapsulado em um badge dourado e a moeda *"R$"* foi encolhida e sobrescrita para dar um visual limpo e refinado aos números.

6. **Chatbot Inteligente Cliente-Side**:
   - Desenvolvemos um algoritmo em JavaScript puro no arquivo [js/main.js](js/main.js) que responde instantaneamente às dúvidas do usuário sobre o terapeuta, o preço, o método e a garantia. As respostas são acionadas por detecção de palavras-chave, simulando uma conversa em tempo real sem latência de conexões externas.

---

## 📂 Estrutura de Arquivos do Projeto

O projeto utiliza apenas arquivos nativos e estáticos da web para garantir máxima velocidade de carregamento:

- `index.html`: Estrutura do site com metatags de SEO, preloading de fontes/imagens cruciais e links do carrossel/animações.
- `css/style.css`: Toda a estilização do site, variáveis do Design System e regras de responsividade (@media queries).
- `js/main.js`: Lógica do chatbot inteligente, controle de abertura do menu mobile e inicialização dos carrosséis e efeitos.
- `.gitignore`: Configuração para impedir que arquivos grandes de vídeo sejam enviados ao repositório.
- `assets/`: Imagens do terapeuta, capas de vídeo e a pasta `videos/` para mídias locais.
- `README.md`: Este guia detalhado de documentação.

---

## 🎥 Mídias Locais (Ignoradas no Controle de Versão)

Os arquivos de vídeo pesados da pasta `assets/videos/` são ignorados no repositórioGit para manter o código leve. Para que a página funcione corretamente em ambiente local, certifique-se de que os seguintes arquivos estejam inseridos nesta pasta:

### Vídeo Principal do Caso de Estudo:
- `{aliança} Prova social daniela PARTE 1 (com trilha).mp4` (Relato da Daniela & Jean)

### Vídeos Curtos da Galeria (Swiper.js):
- `Depoimento aline.mp4`
- `Depoimento Thiago e rafaela.mp4`
- `Depoimento Marcos rodrigues.mp4`
- `Depoimento thaís coelho.mp4`

### Outros depoimentos configurados no projeto:
- `{aliança} Prova social daniela PARTE-1.mp4`
- `Prova social daniela PARTE 2.mp4`
- `Cópia de DEPOIMENTO LIVE 23 I 11.mp4`
- `depoimento 2.mp4`
- `Depoimento 3.mp4`
- `Depoimento eduardo rosário.mp4`
- `Depoimento vanessa bernardes.mp4`
