const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');


// Tarefa para comprimir os arquivos JS

function comprimeJS(){
    return gulp.src('./source/scripts/*js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

exports.js = comprimeJS;

//Tarefa para compilar mudanças no SASS

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.sass = compilaSass;

// Tarefa para o watch no projeto

exports.watch = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}


// Primeira Tarefa
function aprendendo(callback){
    setTimeout(function(){
        console.log('Estou feliz demais com meu aprendizado!');
        callback();
    }, 2000);
}

exports.aprendendo = aprendendo;

//Segunda tarefa
function olaMundo(callback){
    setTimeout(function(){
        console.log('Ola, mundo!');
        tchauMundo();
        callback();
    }, 1500);
}

exports.olaMundo = olaMundo;

// Tarefa privada = olaMundo
function tchauMundo(){
    console.log('Tchau, mundo!');
}

//Fazendo funcionar em série as tarefas criadas
