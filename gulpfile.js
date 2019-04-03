// gulpのタスクをここに記述します。
var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.watch("css/style.scss",function(){
    console.log("変更されました。")
})

gulp.task("default",function(){
    gulp.watch("css/style.scss",function(){
        console.log("変更されました。")
    gulp.src("css/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("css/"));
    })
});
