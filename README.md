# VideoAI | Análise de Vídeos para Instagram

## 🤖 Projeto Desenvolvido com Inteligência Artificial (IA)

Este protótipo funcional foi desenvolvido com auxílio de Inteligência Artificial na plataforma Lovable, utilizando Engenharia de Prompts e desenvolvimento assistido para construir a interface de envio de vídeos e implementar o painel de análise de potencial viral e de vendas.

O VideoAI ajuda criadores e lojistas a avaliar vídeos do Instagram antes de publicar. A pessoa envia um arquivo de vídeo, a interface percorre uma etapa de processamento e apresenta quatro indicadores (potencial viral, potencial de vendas, qualidade visual e clareza do áudio), além de uma leitura dos elementos visuais e sonoros detectados e uma lista de recomendações para melhorar o conteúdo. O objetivo é organizar essas informações de forma clara e imediata, com caráter exclusivamente orientativo.

## 🌟 Principais Destaques do Projeto

### 1. Envio do Vídeo

- Área de envio com ícone, título e instruções, em card flutuante com efeito de vidro (glassmorphism).
- Clique para abrir o seletor de arquivos do sistema e escolher o vídeo.
- Filtro de tipo de arquivo: apenas arquivos de vídeo são aceitos pelo seletor.
- Aviso de formatos suportados (MP4, MOV, AVI) e limite de tamanho exibido na interface (100MB).
- Botão "Analisar Novo Vídeo" para voltar à tela inicial e enviar outro arquivo.

### 2. Etapa de Análise

- Tela de processamento com indicador giratório e três etapas listadas: análise dos elementos visuais, processamento do áudio e cálculo do potencial viral.
- Duração fixa de aproximadamente 3 segundos antes de exibir o resultado.
- O vídeo não é enviado a nenhum servidor: a leitura é gerada no próprio navegador.

### 3. Indicadores de Potencial

- Quatro cards lado a lado: Potencial Viral, Potencial de Vendas, Qualidade Visual e Clareza do Áudio.
- Cada card traz o valor em porcentagem, uma classificação textual e uma barra de progresso colorida.
- Classificações por faixa: Excelente (90+), Muito Bom (80+), Bom (70+), Regular (60+) e Precisa Melhorar (abaixo de 60).
- Cores de leitura rápida: verde para 80+, amarelo entre 60 e 79, vermelho abaixo de 60.

### 4. Painel de Análise

- **Análise Visual:** etiquetas de objetos detectados, etiquetas de emoções identificadas e contagem de rostos.
- **Análise de Áudio:** sentimento classificado com cor, presença de música de fundo (Sim/Não) e prévia da transcrição.
- **Recomendações para Melhorar:** lista de sugestões práticas em grade, como close-ups do produto, hashtags em alta, call-to-action mais clara, legendas e horário de postagem.
- Organização em grade responsiva: duas colunas no desktop e uma coluna em telas menores.

### 5. Interface & Experiência de Uso

- Fluxo em duas telas: envio do vídeo e resultado da análise.
- Identidade visual com gradiente roxo/azul, cards translúcidos, brilho pulsante e animação de flutuação.
- Cabeçalho com marca, ícone de cérebro e atalhos visuais de Instagram e Analytics.
- Layout adaptável a diferentes tamanhos de tela, sem cadastro de usuário.

## 🤖 Desenvolvimento com Inteligência Artificial

O projeto demonstra a aplicação de IA no desenvolvimento de um protótipo de análise de conteúdo:

- **Prototipação de MVP:** construção do fluxo completo, do envio do vídeo à tela de resultados.
- **Interface & UX:** composição visual do painel de indicadores e do painel de análise para facilitar a leitura.
- **Modelo de dados:** definição da estrutura de análise (potenciais, leitura visual, leitura de áudio e recomendações) compartilhada entre os componentes.
- **Lógica de demonstração:** geração dos indicadores e das listas de exemplo diretamente no navegador.
- **Evolução assistida:** continuidade do desenvolvimento no Lovable, com possibilidade de sincronização do código com o GitHub.

## 🛠️ Tecnologias Utilizadas

- **React 18 e TypeScript:** interface e tipagem do projeto.
- **Vite 5:** servidor de desenvolvimento e geração da versão de produção.
- **Tailwind CSS 3:** estilização, com gradientes, efeitos de vidro e animações definidos em `src/index.css`.
- **shadcn/ui e Radix UI:** componentes de interface (cards, botões, notificações).
- **React Router DOM:** navegação entre páginas.
- **TanStack Query:** gerenciamento de estado de dados (base do projeto).
- **Lucide React:** ícones dos indicadores e das seções de análise.
- **Hooks do React:** estado do arquivo enviado, da etapa de análise e do resultado.

## ⚠️ Premissas & Limitações

- **Análise simulada.** Os indicadores são gerados de forma aleatória no navegador (potencial viral entre 60% e 100%, potencial de vendas entre 70% e 100%, qualidade visual entre 80% e 100%, clareza do áudio entre 85% e 100%). Não há modelo de visão computacional nem de processamento de áudio analisando o arquivo.

- **Conteúdo de exemplo fixo.** As listas de objetos detectados, emoções, recomendações e a prévia da transcrição são textos de demonstração já cadastrados no código, e não uma leitura real do vídeo enviado.

- **Sem backend.** Nenhum arquivo é enviado a um servidor, e não há integração com APIs de IA, com a API do Instagram ou com qualquer serviço externo de análise.

- **Sem persistência.** Não há histórico de análises, comparação entre vídeos, favoritos nem cadastro de usuário.

- **Arrastar e soltar não está ativo.** O texto "Arraste e solte" é ilustrativo: a seleção do arquivo acontece apenas pelo clique no card.

- **Limite de tamanho não validado.** O aviso de 100MB aparece na interface, mas o tamanho do arquivo não é verificado antes da análise.

- **Recomendação orientativa.** Os resultados são estimativas de demonstração e não constituem análise de mercado, previsão de alcance ou garantia de desempenho no Instagram.

## 🚀 Como Executar o Projeto Localmente

Tenha o Node.js instalado e abra um terminal na pasta do projeto.

```sh
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev

# Gerar a versão de produção
npm run build

# Visualizar a versão de produção
npm run preview

# Executar a análise de código
npm run lint
```

Acesse o endereço exibido no terminal após iniciar o servidor. A porta pode variar conforme o ambiente.

## 🔗 Desenvolvimento no Lovable

- Continue desenvolvendo no editor do projeto: https://lovable.dev/projects/85f14185-1940-4321-808e-fe9239065ad2
- Para publicar, abra o projeto no Lovable e clique em **Share -> Publish**.
- Para conectar um domínio próprio, vá em **Project > Settings > Domains** e clique em **Connect Domain**.
- Quando a sincronização Git estiver conectada, alterações feitas no Lovable são enviadas ao repositório vinculado, e alterações enviadas à branch sincronizada no GitHub retornam ao projeto.

---

Desenvolvido com auxílio de IA na plataforma Lovable · Protótipo orientativo de análise de vídeos para Instagram.
