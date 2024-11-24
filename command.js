const { readEnv } = require('./lib/database'); // Import necessary functions
const { cmd } = require('./lib/msg'); // You may need to adjust this depending on your message-handling logic

// Command structure: { pattern, desc, category, filename }
const commands = [
  // Example of a simple menu command
  {
    pattern: "menu", // Command name or pattern
    desc: "Get Menu list", // Description of the command
    category: "main", // Command category
    filename: "menu.js", // File where the command is implemented
  },
  
  // Example of a simple alive command
  {
    pattern: "alive",
    desc: "Check if the bot is alive",
    category: "main",
    filename: "alive.js",
  },
  
  // Example of a restart command
  {
    pattern: "restart",
    desc: "Restart the bot",
    category: "owner",
    filename: "restart.js",
  },
  
  // Add more commands as needed
  {
    pattern: "ai",
    desc: "AI-based functionality",
    category: "main",
    filename: "ai.js",
  },
  
  {
    pattern: "download",
    desc: "Download video or song",
    category: "download",
    filename: "video_and_song.js",
  },
  
  // More categories and commands can be added as you need
];

// Function to register commands dynamically
const registerCommands = (conn) => {
  commands.forEach(command => {
    require(`./plugin/${command.filename}`)(conn); // Dynamically require and run the command handler from the plugin folder
  });
};

// Function to get command details by pattern
const getCommandByPattern = (pattern) => {
  return commands.find(command => command.pattern === pattern);
};

// Basic helper function to register commands via message handler
const cmd = (commandConfig, handler) => {
  const { pattern, desc, category, filename } = commandConfig;

  // Here you can add the logic to map a command pattern to a handler function
  console.log(`Registered command: ${pattern} - ${desc} under category ${category}`);
  
  // Assigning the command function to the respective handler based on filename
  if (handler) {
    require(`./plugin/${filename}`)(handler); // Dynamically call the plugin handler
  }
};

// Export the commands array and helper functions
module.exports = {
  commands,
  registerCommands,
  cmd,
  getCommandByPattern,
};
