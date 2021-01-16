// Include plugins ===================================================
var gulp = require("gulp");

// Dev
var browserSync = require("browser-sync");
var pump = require("pump");
var rename = require("gulp-rename");

// HTML
var slim = require("gulp-slim");
var htmlmin = require("gulp-htmlmin");

// CSS
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cssmin = require("gulp-cssmin");

// JS
const terser = require("gulp-terser");

// Browser Sync ======================================================
gulp.task("sync", function () {
	return browserSync({
		server: "",
	});
});

// Refresh ===========================================================
gulp.task("refresh", function () {
	return gulp.src("*").pipe(
		browserSync.reload({
			stream: true,
		})
	);
});

// Compile HTML ======================================================
gulp.task("html", function () {
	return gulp
		.src("src/*.slim")
		.pipe(
			slim({
				pretty: true,
			})
		)
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				removeComments: true,
				minifyCSS: true,
				minifyJS: true,
			})
		)
		.pipe(gulp.dest(""))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

// Compile CSS =======================================================
gulp.task("css", function () {
	return gulp
		.src("src/css/*.scss")
		.pipe(sass())
		.on("error", sass.logError)
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions"],
				cascade: false,
			})
		)
		.pipe(cssmin())
		.pipe(
			rename(function (path) {
				path.basename += ".min";
				path.extname = ".css";
			})
		)
		.pipe(gulp.dest("css"))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

// JS ================================================================
gulp.task("js", function () {
	return gulp
		.src("src/js/*.js")
		.pipe(terser())
		.pipe(
			rename(function (path) {
				path.basename.replace(".min", "");
				path.basename += ".min";
				path.extname = ".js";
			})
		)
		.pipe(gulp.dest("js"))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

// JSON ================================================================
gulp.task("json", function () {
	return gulp
		.src("src/js/*.json")
		.pipe(gulp.dest("js"))
		.pipe(
			browserSync.reload({
				stream: true,
			})
		);
});

// Watch Files For Changes ===========================================
gulp.task("watch", ["sync"], function () {
	gulp.watch("src/*.slim", ["html"]);
	gulp.watch("src/js/*.js", ["js"]);
	gulp.watch("src/js/*.json", ["json"]);
	gulp.watch("src/css/*.scss", ["css"]);
});

// Default Task ======================================================
gulp.task("default", ["watch"]);
