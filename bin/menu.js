const shell = require('shelljs');
const fs = require('fs');
const package = require('../package.json');
const config = JSON.parse(fs.readFileSync('./bin/config/scripts-map.json'));


const list = require('select-shell')(
  /* possible configs */
  {
    pointer: ' ▸ ',
    pointerColor: 'yellow',
    checked: ' ◉  ',
    unchecked: ' ◎  ',
    checkedColor: 'blue',
    msgCancel: 'No selected options!',
    msgCancelColor: 'orange',
    multiSelect: false,
    inverse: true,
    prepend: true,
    disableInput: true,
  }
);

list
  .option(' [development] Full install', 'clone-install')
  .option(' TODO - Docker PRUNE', 'docker-prune')
  .list();

list.on('select', options => {
  const script = config[options[0].value].script || 'default';
  console.log(`=== > script to be executed: ${options[0].value}`);
  shell.cd('./bin/scripts');

  let execPrefix = '';
  const { platform } = process;
  if (platform === 'linux' || platform === 'darwin') {
    execPrefix = './';
  }
  if (script !== 'default') {
    if (script === 'smart-deploy.sh') {
      // text within square brackets
      // const pattern = /\[(.*?)\]/g
      // const selectedEnv = pattern.exec(options[0].text)[1];
      // shell.exec(`${execPrefix}${script} ${selectedEnv} ${package.version} ${ecrRegistry}`);
    } else {
      // shell.exec(`${execPrefix}${script}`);
    }
    shell.exec(`${execPrefix}${script}`);
  }
  process.exit(0);
});

list.on('cancel', function(options) {
  console.log('Cancel list, ' + options.length + ' options selected');
  process.exit(0);
});
