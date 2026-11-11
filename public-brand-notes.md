# Encantos Árabes da Joice

A área de catálogo está no componente `client/src/pages/Home.tsx` e os dados dos perfumes estão em `client/src/data/perfumes.ts`.

Cada card mantém esta ordem de informação:

1. Foto da fragrância
2. Marca e categoria
3. Nome do perfume
4. Perfil curto da fragrância com as notas principais
5. Volume e concentração
6. Preço sob consulta
7. Botão “Tenho interesse” com mensagem personalizada no WhatsApp

O catálogo atual reúne os 39 perfumes do PDF atualizado. Os quatro novos itens são Watani, Ameerat Al Arab Privé Rose, Sabah Al Ward Delilah e Afeef. As imagens pesquisadas foram baixadas para `client/public/products/catalog/`. As fontes, notas e pendências de confirmação estão registradas em `research/perfumes-research.md` e `research/perfumes-research.json`.

Cards com ficha parcial ou divergente recebem o aviso visual “informação a confirmar”. Antes de publicar anúncios, conferir especialmente os itens marcados como parciais no relatório de pesquisa.

Paleta oficial no `client/src/index.css`:

- Creme quente: `#FAF1EA`
- Marrom da marca: `#5E2C09`
- Marrom profundo: `#472C16`
- Dourado suave: `#A78464`
- Creme areia: `#EEE4DD`
- Areia dourada: `#D8C2B1`
