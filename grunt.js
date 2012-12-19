module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    html2jsvar: {
      test: {
        src: "test/test.html",
        dest: "test.html.js",
        variable: "TEST"
      }
    }

  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task. csslint:all will fail, that's okay until there's unit tests
  grunt.registerTask('default', 'html2jsvar');

};
