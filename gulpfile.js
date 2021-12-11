"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

const outputDirName = "dist";
const inputDirName = "src";

const path = {
  style: {
    input: `./${inputDirName}/scss/styles.scss`,
    output: `./${outputDirName}/css`,
  },
  html: {
    input: `./${inputDirName}/index.html`,
    output: `./${outputDirName}`,
  },
  assets: {
    input: `./${inputDirName}/assets/**/*`,
    output: `./${outputDirName}/assets`,
  },
  js: {
    input: `./${inputDirName}/**/*.js`,
    output: `./${outputDirName}/js`,
  },
};

function css() {
  return gulp
    .src(path.style.input)
    .pipe(rename({ basename: "styles", suffix: ".min" }))
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(path.style.output));
}

function html() {
  return gulp
    .src(path.html.input)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest(path.html.output));
}

function assets() {
  return gulp
    .src(path.assets.input)
    .pipe(imagemin())
    .pipe(gulp.dest(path.assets.output));
}

function js() {
  return gulp
    .src(path.js.input)
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(path.js.output));
}

function watch() {
  gulp.watch(path.style.input, css);
  gulp.watch(path.html.input, html);
  gulp.watch(path.assets.input, assets);
  gulp.watch(path.js.input, js);
}

gulp.task("default", watch);

gulp.task("build", gulp.parallel(css, html, assets, js));
