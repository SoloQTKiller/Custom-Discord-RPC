var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details : "Quer migrar ou entrar? Chama DM.",
            state : "Quer comer e pagar barato? Entra ai.",
            assets: {
                large_image: "exa_banner",
                large_text: "discord.gg/exa" 
            },
            buttons: [
                {
                    label: "🐉 E  X  A 🐉",
                    url: "https://discord.gg/exa"
                },
                {
                    label: "🍟 iFood 🍟",
                    url: "https://discord.gg/wCrpHkzyz4"
                }
            ],
            //timestamps: {
            //    start: Date.now()
           //}
        }
    })
})

console.log("RPC inicado com sucesso!")

client.login({ clientId: "ID_CLIENT" }).catch(console.error);