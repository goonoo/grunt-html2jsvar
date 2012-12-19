/*
 * grunt-html2jsvar
 * https://github.com/mctenshi/grunt-html2jsvar
 *
 * Copyright (c) 2012 Jörn Zaefferer
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  grunt.registerMultiTask(
      "html2jsvar",
      "Build JavaScript file of single variable with HTML file's content.",
      function() {

    var variable = this.data.variable || this.file.src;
    var needVar = variable.indexOf('.') === -1;
    var file = grunt.file.read( this.file.src );
    var jsvar = (needVar ? 'var ': '')+ variable + ' = "'+
        file.replace(/\r?(\r|\n)/g, ' ').replace(/"/g, '\\\"') +
        '";';

    grunt.file.write(this.file.dest, jsvar);
    grunt.log.writeln("File '"+ this.file.dest +"' created.");

  });

};
