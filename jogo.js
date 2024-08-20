// Corre, Musa, CORRE!!

// Variáveis Globais
let vida = 100; // Valor inicial de vida
let inventario = []; // Inventário como um array

// Função de Exploração
function explorar(localizacao) {
    console.log(`Você está explorando ${localizacao}...`);
    // Lógica para encontrar itens, NPCs, ou desafios
}

// Função de Interação com NPCs
function interagirComNPC(npc) {
    console.log(`Você encontrou ${npc.nome}.`);
    // Lógica para decidir o impacto da interação
}

// Função de Adicionar ao Inventário
function adicionarAoInventario(item) {
    inventario.push(item);
    console.log(`${item} foi adicionado ao seu inventário.`);
}

// Função de Checkpoint
function salvarCheckpoint() {
    const checkpoint = {
        vida: vida,
        inventario: [...inventario], // Clona o array para salvar o estado atual
    };
    console.log("Progresso salvo!");
    return checkpoint;
}

// Função de Decisões
function tomarDecisao(opcao) {
    console.log(`Você escolheu: ${opcao}`);
    // Lógica para impacto na vida/inventário
}

// Sistema de Checkpoints
let checkpointAtual;

while (vida > 0) {
    // Jogo em andamento
    
    // Simulação de uma decisão
    tomarDecisao("opção1");

    // Simulação de interação com NPC
    interagirComNPC({nome: "NPC Exemplo"});
    
    // Simulação de exploração
    explorar("Localização Exemplo");
    
    // Simulação de adicionar item ao inventário
    adicionarAoInventario("Empatia");
    
    // Salvar checkpoint após uma série de ações importantes
    checkpointAtual = salvarCheckpoint();
    
    // Se a vida chegar a 0, o jogador pode recomeçar do último checkpoint
    if (vida <= 0) {
        console.log("Você perdeu! Retomando do último checkpoint...");
        vida = checkpointAtual.vida;
        inventario = [...checkpointAtual.inventario];
    }

    // Aqui você pode adicionar mais lógica para continuar o jogo
}

// Fim do Jogo
console.log("Fim do jogo. Obrigado por jogar 'Corre, Musa, CORRE!'");