module.exports = (grunt) => {
    grunt.initConfig({
      execute: {
        target: {
          src: ['connection_DB.js']
        }
      },
      watch: {
        scripts: {
          files: ['connection_DB.js'],
          tasks: ['execute'],
        },
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');
  };