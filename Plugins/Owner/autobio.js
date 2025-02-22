
module.exports = {
  command: ['autobio'],
  operate: async ({ Cypher, m, reply, args, prefix, command, isCreator, mess, db, botNumber }) => {
    if (!isCreator) return reply(mess.owner);
    if (args.length < 1) return reply(`Example: ${prefix + command} on/off`);

    const validOptions = ["on", "off"];
    const option = args[0].toLowerCase();

    if (!validOptions.includes(option)) return reply("Invalid option");

    db.data.settings[botNumber].autobio = option === "on";
    reply(`Auto-bio ${option === "on" ? "enabled" : "disabled"} successfully`);
  }
};