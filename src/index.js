import express from 'express';
import { exec } from 'child_process';
import { promisify } from 'util';
import { rrdCmd } from './rrd.cjs';

const execAsync = promisify(exec);

const app = express();
app.get('/api/chart', async (req, res) => {
  try {
    // 使用 rrdtool 生成圖表數據
    // const { stdout } = await execAsync(`./src/graph_rrd.sh`);
    const { stdout } = await execAsync(rrdCmd);
    console.log('stdout:', stdout);
    // const base64Data = Buffer.from(stdout, 'binary').toString('base64');
    // const imageSrc = `data:image/png;base64,${base64Data}`;
    //
    // res.json({ imageSrc });
  } catch (error) {
    console.error('Error generating chart:', error);
    res.status(500).json({ error: 'Error generating chart' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
