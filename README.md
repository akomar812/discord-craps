# Description
Discord bot for playing multiplayer [craps](https://github.com/akomar812/craps)

# Usage
1. Setup your [Discord application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

2. [Add your newly created bot](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links) to the desired discord server

3. (optional) Want your bot to have a little zazz? Add a `.zazz.json` file to 
the root of this directory to catch regex patterns and apply responses which will
be selected randomly. An example zazz file looks like:

```
{
  "cool": [
    ":sunglasses:"
  ],
  "[bB]ot": [
    ":robot_face:",
    "beep boop",
    "I am not a :computer:",
    "/gif never gonna give you up"
  ]
}
```

This causes the bot to send a message with the sunglasses emoji whenever a command
contains "cool", and one of several possible responses when the command contains
"bot" or "Bot"

To use `/gif` create a [tenor gif api key](https://tenor.com/developer/dashboard) and
make sure to define it in your `.discord.json` as described in the next step

4. Create a file called `.discord.json` in the root of this directory and place the
application secret and any optional configuration tokens in the following format:

```
{
  "token": "<discord api secret>",
  "gif": "<tenor api token (optional if using zazz with /gif)>",
  "channels": ["<channel_name_1", ... ,"<channel_name_n">]
}
```

5. In your `.discord.json` file, define the channels you want your bot to respond on.
Only one public channel is recommended, as a bot in multiple channels will manage the same game.
It can be useful to have the bot watching a private channel also in case you want to do any
debugging.

6. Start the bot server

```
npm run start
```

7. Verify the bot is running by sending `!help` in discord channel, you should see:

```
craps game
* Start game or join current game by running: !join
* There must be at least one bet on the table before the shooter can roll
* If a player or shooter is inactive for 1 minute they will be booted

!exit                     leave the table
!help                     show this
!dice                     show possible dice rolls with expected outputs
!status                   show the current game state
!join                     join as a new player starting with $100
!bet [name] [amount]      make a wager on the craps table
!roll                     roll the dice
!reset cash               for when the tables turn against you
```

# Controls
See text interface for complete documentation: https://github.com/akomar812/craps#text-interface

# Issues
Currently the craps dependency isn't published as an installable node module so if you want to use this
make sure to [clone this repo](https://github.com/akomar812/craps) and manually reference the import in this
repo's `~/index.js` file
