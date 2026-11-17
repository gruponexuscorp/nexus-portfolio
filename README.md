# Portfólio Nexus Tech

Sou Lucas Salgado, desenvolvedor back-end na Nexus Tech. Trabalho com APIs, banco de dados e integração entre aplicativos e painéis de gestão.

**Stack técnica** · TypeScript, JavaScript, SQL, PostgreSQL, Supabase, Dart, Flutter e React Native

## Projetos

### Nexus Ponto

Desenvolvo o back-end de um sistema de registro eletrônico de ponto no modelo REP-P. O aplicativo coleta marcações mesmo sem internet e, ao reconectar, sincroniza os registros com proteção contra duplicidade. O RH consulta o histórico de marcações e ajustes. O software tem registro no INPI sob o número BR512026010193-0.

### Nexus Patrol

Desenvolvo o back-end usado por equipes de segurança para registrar rondas, abrir ocorrências e anexar fotos de campo. A supervisão consulta os registros em relatórios diários e revê o percurso da jornada em um mapa montado a partir dos pontos de GPS.

### Nexus Auto Center

Trabalho na API em TypeScript que integra o aplicativo de vistoria de uma oficina ao painel de gestão. A equipe registra fotos e avarias na entrada e acompanha o veículo até a entrega.

### Nexus Frota

Integro o aplicativo de retirada e devolução ao painel da equipe administrativa. Durante uma viagem, o painel acompanha a localização do veículo em tempo real e permite consultar quilometragem, avarias e despesas.

## Demonstrações

- [Sincronização de ponto em JavaScript](sincronizacao-de-ponto.mjs). Exemplo em memória que reaproveita o mesmo identificador quando um envio precisa ser repetido. Executando `node sincronizacao-de-ponto.mjs` na raiz do projeto, é possível conferir um registro novo, uma repetição e um conflito de dados.
- [Mapa de uma rota fictícia](rota-ficticia.geojson). Um percurso em GeoJSON com início, checkpoint e fim. Todos os pontos são de demonstração.
