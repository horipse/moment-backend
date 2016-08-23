/**
 * MomentController
 *
 * @description :: Server-side logic for managing moments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
'use strict'
module.exports = {
  getCurrentTime: function (req, res) {
    let nowTime = new Date ()
    let nowTimeJson = {
      year: nowTime.getFullYear(),
      month: nowTime.getMonth() + 1,
      day: nowTime.getDate(),
      hour: nowTime.getHours(),
      mintue: nowTime.getMinutes(),
      second: nowTime.getSeconds(),
      weekday: nowTime.getDay(),
      unix: nowTime.getTime(),
      timezone: 8
    }
    return res.json(nowTimeJson)
  },
  addProject: function (req, res) {
  
  },
  removeProject: function (req, res) {
  
  },
  getTimeOptions : function (req, res) {
  
  }
};

