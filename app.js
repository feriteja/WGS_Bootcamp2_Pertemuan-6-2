const yargs = require("yargs");
const { writeContactFile } = require("./contact");

yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    name: {
      describe: "Contact name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Contact email",
      demandOption: false,
      type: "string",
    },
    mobile: {
      describe: "Contact mobile phone number",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const contact = {
      name: argv.name,
      email: argv.email,
      mobile: argv.mobile,
    };

    writeContactFile(contact);
  },
});

yargs.parse();
