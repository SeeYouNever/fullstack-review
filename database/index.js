const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  reponame: String,
  username: String,
  forkCount: Number,
  url: { type: String, unique: true },
  img: String

  // TODO: your schema here!
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (obj) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let gyro = new Repo ({
    reponame: obj.name,
    username: obj.owner.login,
    forkCount: obj.forks_count,
    url: obj.html_url,
    img: obj.owner.avatar_url});

  gyro.save (err => {
    if(err) {
      return console.log('Unable to save data')
    }
  });
}
let fetch = (callback) => {
  let cb = (err, repos) => { callback(repos) };
  Repo.find(cb).sort('-forkCount').limit(25);
}

module.exports.save = save;
module.exports.fetch = fetch;
