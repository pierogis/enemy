# enemy

a discord bot with adversarial integration

### flow

discord client listens for commands like `$attack`

this is matched and dispatched to the correct command

the matching command makes calls to an api

this returns the relevant users, items, realms, whatever and calls the proper subsystems that
perform logic such as calculating damage done by "x person wielding y items attacking z enemy"

the idea is that subsystems (combat for example) may be used by multiple commands

a new "state" is calculated, which should be sent to the api to persist changed data, message
back, emote, whatever

in addition, the client may have events that occur on other triggers like time or stock news
