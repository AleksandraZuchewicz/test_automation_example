exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["spec4.js"],
  // if you dont provide any browser capabilities, it asumed that you will use chrome 
  capabilities: {
    'browserName': 'firefox'
  }
};
