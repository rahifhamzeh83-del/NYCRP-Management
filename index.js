require("dotenv").config();

const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.once("ready", () => {
    console.log(`✅ Logged in as ${client.user.tag}`);

    client.user.setPresence({
        activities: [
            {
                name: "NYCRP | /help",
                type: ActivityType.Watching
            }
        ],
        status: "online"
    });
});

client.login(process.env.TOKEN);
