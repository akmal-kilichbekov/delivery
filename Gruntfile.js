module.exports = (grunt) => {
    grunt.initConfig({
      execute: {
        target: {
          src: ['connection.js']
        }
      },
      watch: {
        scripts: {
          files: ['connection.js'],
          tasks: ['execute'],
        },
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');
  };