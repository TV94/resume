// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ===============================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ottawa,200 Coventry Road K1K 4S3',
}

var footer = {
  social: {
    email: {
          text: 'ivanov@mail.com',
          href: 'mailto:dmytro@mail.com',
        },
        phone: {
          text: '+380670000123',
          href: 'tel:+380670000123',
        },
        linkedin: {
          text: 'Linkedin',
          href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/index', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
                    work on a new project I learn the domain and try to understand the idea of the project. Good team
                    player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
                    tournament position, goals etc), analyzing by simple mathematics models and preparing probability
                    for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | skills',
    },

    header,

    main: {
      skills: [
        {
          name: "HTML",
          point: 10,
        },
         {
          name: "Handlebars",
           point: 10,
          isTop: true,
        },
        {
          name: "VS Code",
          point: 8,
        },
        {
          name: "Git",
          point: 8,
        },
        {
          name: "Terminal",
          point: 5,
        },
        {
          name: "NPM",
          point: 7,
        },
        {
          name: "React.js",
          point: 0,
        },
        {
          name: "PHP",
          point: null,
        },
      
      ],

      hobbies: [
        {
          name: "travel",
          isMain: true,
        },
        {
          name: "fishing",
          isMain: true,
        },
        {
          name: "sport",
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | education',
    },

    header,

    main: {
      education: [
        {
          name: 'МАУП',
          isEnd: true,
        },
         {
          name: 'КНУКіМ',
          isEnd: false,
        },
        {
          name: 'МНТУ',
          isEnd: true,
        },
        {
          name: 'IT STEP UNIVERSITY',
          isEnd: false,
        },
      ],

      sertificates: [
        {
          name: 'googl sert',
          id: 7234572,
        },
        {
          name: 'Becom sert IT',
          id: 72387,
        },
        {
          name: 'Network +',
          id: 7234869,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
  layout:'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works:[{
      position: 'Junior Fullstack Developer',
      company: {
        name: 'IT Brains',
        url:'https://it-brains.com.ua/',
      },
      duration: {
        from: '10.10.2010',
        to: null,
          },
          
          projectAmount: 3,

          projects: [{
            name: 'Resume',
            url: 'https://intelig.com.ua/',
            about: 'jskv  fdg f fgiugfaohf fgurask weriu',
            stacks: [
              {
                name: 'React.js',
              },
              {
                name: 'HTML / CSS',
              },
              {
                name: 'Node.js',
              },
            ],
            awards: [
              {
                name: 'ilvaousoiikhivfisdosdoisoigorhgdj ioi',
              },
              {
                name: 'ilvaousoii osdoisoigorhgdj ioi',
              },
            ],
            stackAmount: 7,
            awardAmount: 4,
          },
          ],
        },
      ],
    },

    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
