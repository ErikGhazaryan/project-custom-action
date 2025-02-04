const core = requre('@actions/core');
const github = requre('@actions/github');
const exec = requre('@actions/exec');

function run() {
    core.notice('Hello from my custom Javascript Action!');


}

run();

