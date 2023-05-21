const RRD_PATH = `${__dirname}/sensors.rrd`;
const RRD_DIMENSIONS = '-D -w 1200 -h 400';
const RRD_CONSTANTS = '-E';
const COLORS = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#fff700',
  '#ef843c',
  '#1f78c1',
  '#a05da0',
  '#a01da0',
];
const STYLE = '--color CANVAS#181B1F --color BACK#111217 --color FONT#CCCCDC';
const CPU_LOAD = `${STYLE} DEF:cpu_load=${RRD_PATH}:cpu_load:AVERAGE LINE1:cpu_load#ff0000:"CPU load"`;
const CPU_TEMP = `${STYLE} DEF:cpu_temp=${RRD_PATH}:cpu_temp:AVERAGE LINE1:cpu_temp#00ff00:"CPU temp"`;
const SSD_TEMP = `${STYLE} DEF:ssd_temp=${RRD_PATH}:ssd_temp:AVERAGE LINE1:ssd_temp#ff0000:"SSD temp"`;
const SSD_READ = `${STYLE} DEF:ssd_read=${RRD_PATH}:ssd_read:AVERAGE LINE1:ssd_read#0000ff:"SSD read"`;
const SSD_WRITE = `${STYLE} DEF:ssd_write=${RRD_PATH}:ssd_write:AVERAGE LINE1:ssd_write#00ffff:"SSD write"`;
const APP1_CPU = `${STYLE} DEF:app1_cpu=${RRD_PATH}:app1_cpu:AVERAGE LINE1:app1_cpu#ff0000:"Nucleus"`;
const APP2_CPU = `${STYLE} DEF:app2_cpu=${RRD_PATH}:app2_cpu:AVERAGE LINE1:app2_cpu#00ff00:"Player"`;
const APP3_CPU = `${STYLE} DEF:app3_cpu=${RRD_PATH}:app3_cpu:AVERAGE LINE1:app3_cpu#0000ff:"AnyDesk"`;
const APP4_CPU = `${STYLE} DEF:app4_cpu=${RRD_PATH}:app4_cpu:AVERAGE LINE1:app4_cpu#ffff00:"TeamViewer"`;
const APP1_MEM = `${STYLE} DEF:app1_mem=${RRD_PATH}:app1_mem:AVERAGE LINE1:app1_mem#ff0000:"Nucleus"`;
const APP2_MEM = `${STYLE} DEF:app2_mem=${RRD_PATH}:app2_mem:AVERAGE LINE1:app2_mem#00ff00:"Player"`;
const APP3_MEM = `${STYLE} DEF:app3_mem=${RRD_PATH}:app3_mem:AVERAGE LINE1:app3_mem#0000ff:"AnyDesk"`;
const APP4_MEM = `${STYLE} DEF:app4_mem=${RRD_PATH}:app4_mem:AVERAGE LINE1:app4_mem#ffff00:"TeamViewer"`;
const NET_CEL = `${STYLE} DEF:net_cel=${RRD_PATH}:net_cel:AVERAGE LINE1:net_cel#ff0000:"Cellular"`;
const NET_WIF = `${STYLE} DEF:net_wif=${RRD_PATH}:net_wif:AVERAGE LINE1:net_wif#00ff00:"Wifi"`;
const NET_ETH = `${STYLE} DEF:net_eth=${RRD_PATH}:net_eth:AVERAGE LINE1:net_eth#0000ff:"Ethernet"`;

const SYSTEM = `--color CANVAS#181B1F --color BACK#111217 --color FONT#CCCCDC \
DEF:cpu_load=${RRD_PATH}:cpu_load:AVERAGE \
VDEF:cpu_load_max=cpu_load,MAXIMUM \
VDEF:cpu_load_avg=cpu_load,AVERAGE  \
CDEF:cpu_load_norm=cpu_load,cpu_load_max,/,100,* \
CDEF:cpu_load_norm_avg=cpu_load,POP,cpu_load_avg,100,*,cpu_load_max,/  \
LINE1:cpu_load_norm${COLORS[0]}:"%CPU\t" \
AREA:cpu_load_norm${COLORS[0]}30 \
DEF:cpu_temp=${RRD_PATH}:cpu_temp:AVERAGE \
VDEF:cpu_temp_max=cpu_temp,MAXIMUM \
VDEF:cpu_temp_avg=cpu_temp,AVERAGE \
CDEF:cpu_temp_norm=cpu_temp,cpu_temp_max,/,100,\* \
CDEF:cpu_temp_norm_avg=cpu_temp,POP,cpu_temp_avg,100,\*,cpu_temp_max,/ \
LINE1:cpu_temp_norm${COLORS[1]}:"%CPU\t" \
LINE0.5:cpu_load_norm_avg${COLORS[0]}:dashes \
LINE0.5:cpu_temp_norm_avg${COLORS[1]}:dashes \
GPRINT:cpu_load_max:"CPUmax %.2lf" \
GPRINT:cpu_temp_max:"CPUTmax %.2lf" \
`;

const Graphs = {
  cpu_load: `${RRD_DIMENSIONS} ${RRD_CONSTANTS} -t "CPU load" ${CPU_LOAD}`,
  temperature: `${RRD_DIMENSIONS} ${RRD_CONSTANTS} -t "Temperature" ${CPU_TEMP} ${SSD_TEMP}`,
  ssd_io: `${RRD_DIMENSIONS} ${RRD_CONSTANTS} -t "SSD IO" ${SSD_READ} ${SSD_WRITE}`,
  app_cpu: `${RRD_DIMENSIONS} ${RRD_CONSTANTS} -t "APP CPU" ${APP1_CPU} ${APP2_CPU} ${APP3_CPU} ${APP4_CPU}`,
  app_mem: `${RRD_DIMENSIONS} ${RRD_CONSTANTS} -t "APP MEM" ${APP1_MEM} ${APP2_MEM} ${APP3_MEM} ${APP4_MEM}`,
  net_cel: `${RRD_DIMENSIONS} ${RRD_CONSTANTS} -t "NET CEL" ${NET_CEL}`,
  net_wif: `${RRD_DIMENSIONS} ${RRD_CONSTANTS} -t "NET WIF" ${NET_WIF}`,
  net_eth: `${RRD_DIMENSIONS} ${RRD_CONSTANTS} -t "NET ETH" ${NET_ETH}`,
  system: `${RRD_DIMENSIONS} ${RRD_CONSTANTS}  -t "SYSTEM" ${SYSTEM}`,
};


const JSON_CPU_LOAD = `DEF:cpu_load=${RRD_PATH}:cpu_load:AVERAGE XPORT:cpu_load#ff0000:"CPU load"`;
const JSON_CPU_TEMP = `DEF:cpu_temp=${RRD_PATH}:cpu_temp:AVERAGE XPORT:cpu_temp#00ff00:"CPU temp"`;
const JSON_SSD_TEMP = `DEF:ssd_temp=${RRD_PATH}:ssd_temp:AVERAGE XPORT:ssd_temp#ff0000:"SSD temp"`;
const JSON_SSD_READ = `DEF:ssd_read=${RRD_PATH}:ssd_read:AVERAGE XPORT:ssd_read#0000ff:"SSD read"`;
const JSON_SSD_WRITE = `DEF:ssd_write=${RRD_PATH}:ssd_write:AVERAGE XPORT:ssd_write#00ffff:"SSD write"`;
const JSON_APP1_CPU = `DEF:app1_cpu=${RRD_PATH}:app1_cpu:AVERAGE XPORT:app1_cpu#ff0000:"Nucleus"`;
const JSON_APP2_CPU = `DEF:app2_cpu=${RRD_PATH}:app2_cpu:AVERAGE XPORT:app2_cpu#00ff00:"Player"`;
const JSON_APP3_CPU = `DEF:app3_cpu=${RRD_PATH}:app3_cpu:AVERAGE XPORT:app3_cpu#0000ff:"AnyDesk"`;
const JSON_APP4_CPU = `DEF:app4_cpu=${RRD_PATH}:app4_cpu:AVERAGE XPORT:app4_cpu#ffff00:"TeamViewer"`;
const JSON_APP1_MEM = `DEF:app1_mem=${RRD_PATH}:app1_mem:AVERAGE XPORT:app1_mem#ff0000:"Nucleus"`;
const JSON_APP2_MEM = `DEF:app2_mem=${RRD_PATH}:app2_mem:AVERAGE XPORT:app2_mem#00ff00:"Player"`;
const JSON_APP3_MEM = `DEF:app3_mem=${RRD_PATH}:app3_mem:AVERAGE XPORT:app3_mem#0000ff:"AnyDesk"`;
const JSON_APP4_MEM = `DEF:app4_mem=${RRD_PATH}:app4_mem:AVERAGE XPORT:app4_mem#ffff00:"TeamViewer"`;
const JSON_NET_CEL = `DEF:net_cel=${RRD_PATH}:net_cel:AVERAGE XPORT:net_cel#ff0000:"Cellular"`;
const JSON_NET_WIF = `DEF:net_wif=${RRD_PATH}:net_wif:AVERAGE XPORT:net_wif#00ff00:"Wifi"`;
const JSON_NET_ETH = `DEF:net_eth=${RRD_PATH}:net_eth:AVERAGE XPORT:net_eth#0000ff:"Ethernet"`;

const JSON_SYSTEM = `\
DEF:cpu_load=${RRD_PATH}:cpu_load:AVERAGE \
VDEF:cpu_load_max=cpu_load,MAXIMUM \
VDEF:cpu_load_avg=cpu_load,AVERAGE  \
CDEF:cpu_load_norm=cpu_load,cpu_load_max,/,100,* \
CDEF:cpu_load_norm_avg=cpu_load,POP,cpu_load_avg,100,*,cpu_load_max,/  \
XPORT:cpu_load_norm${COLORS[0]}:"%CPU\t" \
AREA:cpu_load_norm${COLORS[0]}30 \
DEF:cpu_temp=${RRD_PATH}:cpu_temp:AVERAGE \
VDEF:cpu_temp_max=cpu_temp,MAXIMUM \
VDEF:cpu_temp_avg=cpu_temp,AVERAGE \
CDEF:cpu_temp_norm=cpu_temp,cpu_temp_max,/,100,\* \
CDEF:cpu_temp_norm_avg=cpu_temp,POP,cpu_temp_avg,100,\*,cpu_temp_max,/ \
XPORT:cpu_temp_norm${COLORS[1]}:"%CPU\t" \
XPORT:cpu_load_norm_avg${COLORS[0]}:dashes \
XPORT:cpu_temp_norm_avg${COLORS[1]}:dashes \
GPRINT:cpu_load_max:"CPUmax %.2lf" \
GPRINT:cpu_temp_max:"CPUTmax %.2lf" \
`;

const GraphsJson = {
  cpu_load: `${JSON_CPU_LOAD}`,
  temperature: `${JSON_CPU_TEMP} ${JSON_SSD_TEMP}`,
  ssd_io: `${JSON_SSD_READ} ${JSON_SSD_WRITE}`,
  app_cpu: `${JSON_APP1_CPU} ${JSON_APP2_CPU} ${JSON_APP3_CPU} ${JSON_APP4_CPU}`,
  app_mem: `${JSON_APP1_MEM} ${JSON_APP2_MEM} ${JSON_APP3_MEM} ${JSON_APP4_MEM}`,
  net_cel: `${JSON_NET_CEL}`,
  net_wif: `${JSON_NET_WIF}`,
  net_eth: `${JSON_NET_ETH}`,
  system: `${JSON_SYSTEM}`,
};


// rrdtool -s $from -e $to -a
const rrdCmd = (output, idx, startAt = Date.now() / 1000 - 86400, endAt = Date.now() / 1000) =>
  `rrdtool graph ${output}/${idx}.png ${Graphs[idx]}`;

const rrdCmdJson = (output, idx) => `rrdtool xport --json ${GraphsJson[idx]} > ${output}/${idx}.json`;

module.exports = { Graphs, rrdCmd, GraphsJson, rrdCmdJson };
