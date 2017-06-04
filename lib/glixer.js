function runCommand() { run(process.argv.splice(2)); }

function run(args) {
   var f = run[args[0]];

   if (typeof f === 'function') {
      let argv = args.splice(1);
      f(argv);
   } else {
      console.log("Error: Command not found");
      process.exit(0);
   }
}

run.new = function(args) {
   console.log("To be implemented.");
};

run.serve = function(args) {
   console.log("To be implemented.");
};

module.exports.run = runCommand;
