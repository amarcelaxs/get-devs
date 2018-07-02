module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass:{
          target:{
            files:[{
                src : ["lib/vendors/sass/style.scss"],
                dest : "dist/css/style.min.css"
              }]
          },
          target2:{
            files:[{
                src : ["lib/vendors/sass/grid.scss"],
                dest : "dist/css/grid.min.css"
              }]
          }
        },
        watch: {
    			css: {
    				files: 'dist/sass/*.scss',
    				tasks: ['sass']
    			}
    		},
        uglify:{
            my_target:{
                files:[{
                  src:'lib/vendors/js/*.js',
                  dest:'dist/js/',
                  expand:true,
                  flatten:true,
                  ext:'.min.js'
                }]
            }
        }
      });
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.registerTask('default',['watch']);
}
