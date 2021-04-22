const testPublicRepo = require('repo_as_dependency');
const testPrivateRepo = require('private_repo_as_dependency');
console.log('repo_01');
testPublicRepo.test();
testPrivateRepo.main();