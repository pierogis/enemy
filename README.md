# squire

discord bot with adversarial integration

### flow

discord client listens for commands like `$attack`

this is matched and dispatched to the correct command (see dict in `commands.__init__.py`)

the matching command calls a method with unqiue logic (`commands.attack.process`)

this gathers the relevant users, items, realms, whatever and calls the proper subsystems that
perform logic such as calculating damage done by "x person wielding y items attacking z enemy"

the idea is that subsystems (combat for example) may be used by multiple commands

a new "state" is returned to the command, which should use it to persist changed data, message
back, emote, whatever

in addition, the client may have events that occur on other triggers like time or stock news

### infrastructure

client should continuously listen (no serverless)

containing game data in a db is silly -> there should be a set of txt files that provide items,
events, dialogue, etc. in repo

restarting the bot's server will have it reregister these data from repo

save data (user health, items equipped, enemy's pissed-offness etc.) persistence is trickier

there's an idea to create an api sitting on a db that can be queried for information by any
"client" (whether discord or a website)
