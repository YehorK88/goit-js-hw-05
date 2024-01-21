'use strict';

let profile = {
  username: 'Jacob',
  playtime: 300,

  changeUsername: function (newName) {
    this.username = newName;
  },

  updatePlayTime: function (hours) {
    this.playtime += hours;
  },

  getInfo: function () {
    return this.username + ' has ' + this.playtime + ' active hours!';
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
