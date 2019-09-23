let obj = {}

obj.pwd = require('./pwd.js')
obj.ls = require('./ls.js')


process.stdout.write('prompt > ');
process.stdin.on('data',(data) => {
    const cmd = data.toString().trim().split(' ')[];
  if(cmd[0] in obj){
      if(cmd[1] !== undefined){
      obj[cmd[0]](cmd[1])
      }
      else{
          obj[cmd[0]]()
      }
  }
    else{   
    process.stdout.write('you typed: ' + cmd)
    }
    process.stdout.write('\nprompt > ')
})

