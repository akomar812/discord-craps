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

5. In your `.discord.json` file, define the channels you want your bot to respond on (see above).
Only one public channel is recommended, as a bot in multiple channels will manage the same game.
It can also be useful to have the bot in a private channel in case you need to do any debugging.

6. Run the process

The process can be run locally if you have node (12.0.0 at the time of this writing) and sqlite
installed on your local box or it can be run in a container with the provided Dockerfile.

## Running locally
```
npm start
```

## Running in Docker

### Build the docker image

```
docker build -t craps-bot .
```

### Start the container

```
docker run -d craps-bot
```

## Verify setup
Verify the bot is running by sending `!help` in discord channel, you should see:

```
craps game
* Start game or join current game by running: !join
* There must be at least one bet on the table before the shooter can roll
* If a player or shooter is inactive for 1 minute they will be booted

!exit                     leave the table
!help                     show this
...
```

# Controls
The full text interface is documented here: https://github.com/akomar812/craps#text-interface

