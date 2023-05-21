const { exec } = require('child_process');
const { promisify } = require('util');
const { Graphs, rrdCmd, GraphqJson, rrdCmdJSON, rrdCmdJson } = require('./rrd.cjs');

const execAsync = promisify(exec);

async function go() {
  try {
    // for (const key of Object.keys(Graphs)) {
    //   console.log('cmd', rrdCmd(`${__dirname}/output`, key));
    //   await execAsync(rrdCmd(`${__dirname}/../output`, key));
    // }
    for (const key of Object.keys(Graphs)) {
      console.log('cmdJson', rrdCmdJson(`${__dirname}/../output`, key));
      await execAsync(rrdCmdJson(`${__dirname}/../output`, key));
    }
  } catch (error) {
    console.error('Error generating chart:', error);
  }
}

go().then(() => {
  console.log('done');
});
