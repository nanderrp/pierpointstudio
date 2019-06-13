//jshint esversion:6

const express = require("express");

var feed = new Instafeed ({
  get: 'user',
  userId: '7634129121',
  accessToken: "7634129121.1677ed0.4a824195d5fc4bfbba53bb19b57b3bd9",
  sortBy: "most-recent"
  });
  feed.run();
