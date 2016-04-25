// browser-sync
//
var bs = require("browser-sync").create();


bs.watch("**/*.css").on("change", bs.reload);


// .init starts the server
bs.init({
  server: {
    baseDir: "./public",
    directory: true
  },
  port: 7677
});
