# Sugestões de Melhorias Futuras (Backlog)

Esta é a lista de observações técnicas e visuais feitas no dia 04/05/2026 para serem implementadas posteriormente no site.

## 1. Melhorias Técnicas
- **Responsividade de Imagens:** Mudar de apenas `.webp` para a utilização das tags `<picture>` ou atributo `srcset`. Isso permite que usuários no celular baixem imagens menores e quem estiver no computador baixe imagens em alta resolução, economizando muitos dados móveis.
- **Portfólio no Celular:** Alterar a grade (`grid`) de fotos do portfólio no CSS para exibir **2 colunas** no celular (atualmente é 1 coluna). Isso facilita a visualização em formato de feed (estilo Instagram) e reduz a rolagem infinita.
- **Preload de Fontes:** Adicionar `<link rel="preload">` no topo do HTML para as fontes 'Lato' e 'Playfair Display' para evitar o piscar do texto sem estilo durante os primeiros milissegundos de carregamento.

## 2. Melhorias Visuais e de Design
- **Hero Image (Sombra):** Suavizar ou remover a sombra em "bloco" sólida (`box-shadow: 20px 20px 0 var(--accent-color);`) da imagem principal do site. Para um nicho de noivas e beleza, sombras mais suaves ou bordas arredondadas/arcos combinam mais com a ideia de "delicadeza" e "elegância".
- **Hierarquia Visual nos Serviços:** Adicionar um selo de "Mais Escolhido" ou "Recomendado" ao serviço central ("Make Beauty") para direcionar melhor os olhos dos clientes.
- **Imagem da Mentoria:** Trocar a imagem atual (com efeito de desfoque/arrasto) por uma foto de estúdio nítida, com postura de autoridade olhando para a câmera ou maquiando uma modelo. Isso transmitirá mais confiança para quem deseja contratar a mentoria.
