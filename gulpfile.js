let gulp         = require('gulp'), // Подключаем Gulp
    rename       = require('gulp-rename'), // Переименнование фйлов
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    gulpCommonJS = require('gulp-commonjs');

gulp.task('markup', function() {
    return gulp.src('app/**/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('app/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
        //.pipe(browserSync.stream())  //Добавила кусок, чтобы SASS сохранял только CSS
});

gulp.task('scripts', function() {
    gulp.src('app/js/**/*.js')
        .pipe(gulpCommonJS())
        .pipe(rename('build.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.html', gulp.parallel('markup')); // Наблюдение за sass файлами
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('app/js/**/*.js', gulp.parallel('scripts')); // Наблюдение за sass файлами
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'browser-sync', 'watch'));