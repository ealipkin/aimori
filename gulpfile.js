const gulp = require('gulp');
const plumber = require('gulp-plumber');
const log = require('fancy-log');
const minimist = require('minimist');
const pug = require('gulp-pug');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const prettyHtml = require('gulp-pretty-html');
const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const changed = require('gulp-changed');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const inject = require('gulp-inject');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');

const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = composer(uglifyes, console);

const bust = require('gulp-buster');
const argv = minimist(process.argv.slice(2));
const blocksFolder = 'src/blocks';
const tplFolder = 'templates';
const path = require('path');
const fs = require('fs');
const projectName = 'Ai Mori';

const DEFAULT_PAGE_NAME = 'index';

let pageName = DEFAULT_PAGE_NAME;

// images
gulp.task('images-optimize',
  () => gulp.src('src/images/**/*.+(png|jpg|gif|svg)').pipe(imagemin()).pipe(gulp.dest('src/images'))
);
gulp.task('images-copy', () => gulp.src('src/images/**/*.+(png|jpg|gif|svg)').pipe(gulp.dest('dest/images')));

gulp.task('images', gulp.series('images-optimize', 'images-copy'));


// SVG
const buildSvg = () => {
  const target = gulp.src('src/pug/svg.pug');
  const source = gulp
    .src('src/images/svg/*.svg')
    .pipe(svgmin())
    .pipe(svgstore({inlineSvg: true}));

  return target
    .pipe(inject(source, {transform: fileContents}))
    .pipe(gulp.dest('src/pug/'));
};
gulp.task('svg', buildSvg);

gulp.task('svgInclude', () =>
  gulp
    .src('src/images/svg/*.svg')
    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(gulp.dest('dest/svg/')));

gulp.task('svgmin', () => {
  gulp
    .src('src/images/svg/*.svg')
    .pipe(svgmin({
      plugins: [{
        removeTitle: true
      }]
    }))
    .pipe(gulp.dest('src/images/svg/'));

  gulp
    .src('src/images/icons/*.svg')
    .pipe(svgmin({
      plugins: [{
        removeTitle: true
      }]
    }))
    .pipe(gulp.dest('src/images/icons/'));
});

//fonts
gulp.task('fonts', () => gulp.src('src/fonts/*').pipe(gulp.dest('dest/fonts')));

//CSS
gulp.task('sass', () =>
  gulp
    .src([
      'src/css/variables.scss',
      'src/css/vendor/*.scss',
      'src/css/base.scss',
      'src/blocks/base/**/*.scss',
      'src/blocks/composite/**/*.scss',
      'src/css/utils.scss'
    ])
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/compiled'))
);

const buildCss = () =>
  gulp.src('src/css/compiled/main.css')
      .pipe(rename('main.css'))
      .pipe(sourcemaps.init())
      .pipe(postcss([require('autoprefixer')]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dest/css/'))
      .pipe(browserSync.stream({match: "*.css"}));

gulp.task('css', gulp.series('sass', buildCss));

gulp.task('css-minify', () =>
  gulp.src('dest/css/*.css')
      .pipe(sourcemaps.init())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest('dest/css/'))
);
// CSS END


//JS
const buildVendor = () =>
  gulp
    .src([
      // 'src/js/jquery.min.js',
      'src/js/vendor/*.js',
      // 'src/js/core.js'
    ])
    .pipe(concat('_vendor-code.js')).pipe(gulp.dest('src/js/_compiled/'));

gulp.task('js-build:vendor', buildVendor);

const buildProject = () =>
  gulp
    .src([
      'src/js/initial.js',
      'src/blocks/base/**/*.js',
      'src/blocks/composite/**/*.js'
    ])
    .pipe(babel({
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            },
          },
        ],
      ],
    }))
    .pipe(concat('_project-code.js'))
    .pipe(gulp.dest('src/js/_compiled/'));

gulp.task('js-build:project', buildProject);

const buildJs = () => {
  return gulp
    .src([
      'src/js/_compiled/_vendor-code.js',
      'src/js/_compiled/_project-code.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dest/js/'))
    .pipe(gulp.dest('src/'));
};

gulp.task('js', gulp.series('js-build:vendor', 'js-build:project', buildJs));

const uglifyJs = () =>
  gulp
    .src('dest/js/main.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('dest/js/'));

gulp.task('js-uglify', uglifyJs);

//JS END

// UTILS
gulp.task('buster', () =>
  gulp
    .src([
      'dest/js/main.js',
      'dest/css/main.css'
    ])
    .pipe(bust())
    .pipe(gulp.dest('.')));
// UTILS END


// PUG
gulp.task('prettifyHtml', () =>
  gulp.src('dest/*.html')
      .pipe(prettyHtml())
      .pipe(gulp.dest('dest'))
);

gulp.task('pug-concat', () =>
  gulp.src(['src/blocks/*/*/*.pug'])
      .pipe(plumber())
      .pipe(concat('_mixins.pug'))
      .pipe(gulp.dest('src/pug/')));

const buildPug = () =>
  gulp.src('src/pug/views/*.pug')
      .pipe(changed('dest', {extension: '.html'}))
      .pipe(plumber())
      .pipe(pug())
      .pipe(gulp.dest('dest'));

gulp.task('pug', gulp.series('svg', 'pug-concat', buildPug));

const buildPugPage = (done) => {
  gulp.src(`src/pug/views/${pageName}.pug`)
      .pipe(plumber())
      .pipe(pug())
      .pipe(gulp.dest('dest'));
  done();
};

gulp.task('pug-page', gulp.series('pug-concat', buildPugPage));

// PUG END

const completeProd = (done) => {
  log('static build success in production mode');
  done();
};
//Таск работает долго из-за оптимизации изображений, для быстрой сборки использовать static
gulp.task('prod',
  gulp.series(
    'images-copy',
    'fonts',
    'css',
    'css-minify',
    'js',
    'js-uglify',
    'buster',
    'pug',
    'prettifyHtml',
    'svgInclude',
    completeProd)
);
gulp.task('static',
  gulp.series('images-copy', 'fonts', 'css', 'js', 'pug', 'pug-concat', (done) => {
    log('static build success in develop mode');
    done();
  })
);

gulp.task('browser-sync', (done) => {
  browserSync.init({
    server: {
      baseDir: './dest',
      startPath: `/${pageName}.html`,
    },
    notify: false
  });
  // browserSync.watch('dest/').on('change', browserSync.reload);
  done();
});

//watchers and static server
gulp.task('watch', gulp.series('browser-sync', (done) => {
    gulp.watch(['src/**/*.scss'], gulp.series('css'));

    gulp.watch(['src/js/*.js', 'src/js/vendor/*.js', 'src/blocks/**/**/*.js'], gulp.series('js'));

    gulp.watch(['src/blocks/*/*/*.pug', 'src/pug/layouts/*.pug', 'src/pug/views/*.pug'], gulp.series('pug-page'));

    gulp.watch(`dest/${pageName}.html`).on('change', browserSync.reload);
    gulp.watch(`dest/js/main.js`).on('change', browserSync.reload);
    gulp.watch('dest/css/main.css').on('change', () => browserSync.reload('*.css'));
    done();
  }
))
;

const setPageName = (done) => {
  pageName = argv.name ? argv.name.split(',')[0] : DEFAULT_PAGE_NAME;
  done();
};

//reload one page
gulp.task('page', gulp.series(setPageName, 'pug', 'js', 'css', 'watch'));


//create block (use - gulp create --name=%NAME% --type=b --tech=%tech%)
gulp.task('create', (done) => {
  const name = argv.name && argv.name.split(',')[0];
  const tech = argv.tech ? argv.tech.split(',') : ['pug', 'scss', 'js'];
  const blockTypeFolder = argv.type === 'b' ? 'base' : 'composite';

  // создаваемый блок обязан иметь имя
  if (!name.length) {
    return log('Введите имя блока');
  }

  const blockFolder = path.normalize(path.join(blocksFolder, blockTypeFolder, name)); // папка для конкретного блока
  return fs.access(blockFolder, fs.constants.R_OK | fs.constants.W_OK, (err) => {
      if (!err) {
        return log(`Блок с именем «${name}» уже существует`);
      } else {
        if (!fs.existsSync(blockFolder)) {
          fs.mkdirSync(blockFolder);
        }
        createTechFile(name, blockFolder, tech);
      }
      done();
    }
  );
});
const getTemplate = (tech) => fs.readFileSync(path.join(tplFolder, tech + '.txt'), 'utf8');

function createTechFile(blockName, folderPath, tech) {
  let tpl;
  const jsBlockName = blockName
    .split('-')
    .reduce((previousValue, currentItem, index) => {
      if (index > 0) {
        currentItem = currentItem[0].toUpperCase() + currentItem.slice(1)
      }
      return previousValue + currentItem
    });

  for (let j = 0; j < tech.length; j++) {
    const filePath = folderPath + "/" + blockName + "." + tech[j];
    switch (tech[j]) {
      case 'pug':
        tpl = getTemplate('pug').replace(/{{blockname}}/g, blockName);
        break;
      case 'scss':
        tpl = getTemplate('css').replace(/{{blockname}}/g, blockName);
        break;
      //temporary disable generate js files
      case 'js':
        tpl = getTemplate('js').replace(/{{blockname}}/g, jsBlockName).replace(/{{projectname}}/g, projectName);
        break;
      default:
        tpl = '';
    }

    fs.writeFile(filePath, tpl, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Блок ${blockName} успешно создан (${tech[j]})`);
    })
    ;
  }
}

function fileContents(filePath, file) {
  return file.contents.toString();
}
