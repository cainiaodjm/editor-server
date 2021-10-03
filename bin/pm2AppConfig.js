const os = require('os')
const cpuCoreLength = os.cpus().length

module.exports={
    name:"biz-editor-server",
    script:"bin/www",
    instances:1,
    ignore_watch:['node_modules','__test__','logs'],
    error_file:'./logs/err.log',
    out_file:'./logs/out.log',
    log_date_format:'YYYY-MM-DD HH:mm Z',
    combine_logs:true,
    max_memory_restart:'300M'
}