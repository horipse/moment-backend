/**
 * MomentController
 *
 * @description :: Server-side logic for managing moments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
'use strict'
module.exports = {
  getCurrentStatus: function (req, res) {
    let nowTime = new Date ()
    let nowUnix = nowTime.getTime()
    let startTime = parse("2016-08-20")
    let endTime = parse("2016-09-01")

    let nowStatus = {
      date: {
        year: nowTime.getFullYear(),
        month: nowTime.getMonth() + 1,
        day: nowTime.getDate(),
        weekday: nowTime.getDay()
      },
      time: {
        hour: nowTime.getHours(),
        mintue: nowTime.getMinutes(),
        second: nowTime.getSeconds(),
        timezone: 8
      },
      list: [{
        group: "Core Platform",
        project: "Sign In & Up Backend",
        startTime: startTime,
        endTime: endTime,
        remainingTime: startTime - endTime,
        elapsedTime: nowUnix - startTime,
        appendix: "In Sprint 24"
      },
      {
        group: "Spot Exchange",
        project: "New Spot CNY",
        startTime: startTime,
        endTime: endTime,
        remainingTime: startTime - endTime,
        elapsedTime: nowUnix - startTime,
        appendix: "ASAP"
      }],
      unixTime: nowUnix
    }
    return res.json(nowStatus)
  },
  addProject: function (req, res) {
  
  },
  removeProject: function (req, res) {
  
  },
  getTimeOptions : function (req, res) {
  
  }
};

