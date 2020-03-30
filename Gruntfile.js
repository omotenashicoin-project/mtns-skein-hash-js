module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['browserify', 'uglify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: [],
                dest: 'dist/skein-hash.js',
                options: {
                    require: [
                        './index.js:skeinhash'
                    ]
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/skein-hash.min.js': ['dist/skein-hash.js']
                }
            }
        }
    });
}