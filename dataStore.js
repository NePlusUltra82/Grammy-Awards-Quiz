const STORE = [
    {
        question: `Which artist(s) won the 60th Annual Grammy Award for Best R&B Performance in 2018?`,
        answers: [
            `"Get You" – Daniel Caesar featuring Kali Uchis`,
            `"Distraction" – Kehlani`,
            `"High" – Ledisi`,
            `"That&apos;s What I Like" – Bruno Mars`,
            `"The Weekend" – SZA`
        ],
        //would benefit from refactor -- use indexing
        correctAnswer: `"That's What I Like" – Bruno Mars`,
        artwork: `<img src="images/Bruno_Mars_-_24K_Magic_(Official_Album_Cover).png" class="albumArt">`
    },

    {
        question: `Which artist(s) won the 60th Annual Grammy Award for Best Rap Performance in 2018?`,
        answers: [
            `"Bounce Back" – Big Sean`,
            `"Humble" – Kendrick Lamar`,
            `"Bodak Yellow" – Cardi B`,
            `"4:44" – Jay-Z`,
            `"Bad and Boujee" – Migos featuring Lil Uzi Vert`
        ],
        correctAnswer: `"Humble" – Kendrick Lamar`,
        artwork: `<img src="images/damn_KL.jpg" class="albumArt">`
    },

    {
        question: `Which artist(s) won the 60th Annual Grammy Award for Best Traditional R&B Performance in 2018?`,
        answers: [
            `"Laugh and Move On" – The Baylor Project`,
            `"What I&apos;m Feelin&apos;" – Anthony Hamilton featuring The Hamiltones`,
            `"All the Way" – Ledisi`,
            `"Still" – Mali Music`,
            `"Redbone" – Childish Gambino`
        ],
        correctAnswer: `"Redbone" – Childish Gambino`,
        artwork: `<img src="images/220px-Childish_Gambino_-_Awaken,_My_Love!.png" class="albumArt">`
    },

    {
        question: `Which artist(s) won the 60th Annual Grammy Award for Best Rap/Sung Performance
    in 2018?`,
        answers: [
            `"Prblms" – 6lack`,
            `"Crew" – GoldLink featuring Brent Faiyaz & Shy Glizzy`,
            `"Loyalty" – Kendrick Lamar featuring Rihanna`,
            `"Family Feud" – Jay-Z featuring Beyoncé`,
            `"Love Galore" – SZA featuring Travis Scott`
        ],
        correctAnswer: `"Loyalty" – Kendrick Lamar featuring Rihanna`,
        artwork: `<img src="images/damn_KL.jpg" class="albumArt">`
    },

    {
        question: `Which artist(s) won the 60th Annual Grammy Award for Best R&B Song in 2018?`,
        answers: [
            `"That&apos;s What I Like" - Christopher Brody Brown, James Fauntleroy, Philip Lawrence, Bruno Mars, Ray Charles McCullough II, Jeremy Reeves, Ray Romulus & Jonathan Yip, songwriters (Bruno Mars)`,
            `"First Began" - PJ Morton, songwriter (PJ Morton)`,
            `"Location" - Alfredo Gonzalez, Olatunji Ige, Samuel David Jiminez, Christopher McClenney, Khalid Robinson & Joshua Scruggs, songwriters (Khalid)`,
            `"Redbone" - Donald Glover & Ludwig Goransson, songwriters (Childish Gambino)`,
            `"Supermodel" - Tyran Donaldson, Terrence Henderson, Greg Landfair Jr., Carter Lang & Solana Rowe, songwriters (SZA)`
        ],
        correctAnswer: `"That's What I Like" - Christopher Brody Brown, James Fauntleroy, Philip Lawrence, Bruno Mars, Ray Charles McCullough II, Jeremy Reeves, Ray Romulus & Jonathan Yip, songwriters (Bruno Mars)`,
        artwork: `<img src="images/Bruno_Mars_-_24K_Magic_(Official_Album_Cover).png" class="albumArt">`
    },

    {
        question: `Which artist(s) won the 60th Annual Grammy Award for Best Rap Song in 2018?`,
        answers: [
            `"Bodak Yellow" - Belcalis Almanzar, Dieuson Octave, Klenord Raphael, Shaftizm, Jordan Thorpe & J White, songwriters (Cardi B)`,
            `"Chase Me" - Judah Bauer, Brian Burton, Hector Delgado, Jaime Meline, Antwan Patton, Michael Render, Russell Simins & Jon Spencer, songwriters (Danger Mouse featuring Run The Jewels & Big Boi)`,
            `"Humble" - K. Duckworth, Asheton Hogan & M. Williams II, songwriters (Kendrick Lamar)`,
            `"Sassy" - Marlanna Evans, E. Gabouer, Jason Martin & Wyann Vaughn, songwriters (Rapsody)`,
            `"The Story of O.J." - Shawn Carter & Dion Wilson, songwriters (Jay-Z)`
        ],
        correctAnswer: `"Humble" - K. Duckworth, Asheton Hogan & M. Williams II, songwriters (Kendrick Lamar)`,
        artwork: `<img src="images/damn_KL.jpg" class="albumArt">`
    },

    {
        question: `Which artist(s) won the 60th Annual Grammy Award for Best Urban Contemporary Album in 2018?`,
        answers: [
            `Free 6lack – 6lack`,
            `"Awaken, My Love!" – Childish Gambino`,
            `American Teen – Khalid`,
            `Ctrl – SZA`,
            `Starboy – The Weeknd`
        ],
        correctAnswer: `Starboy – The Weeknd`,
        artwork: `<img src="images/The_Weeknd_-_Starboy.png" class="albumArt">`
    },

    {
        question: `Which artist(s) won the 60th Annual Grammy Award for Best R&B Album in 2018?`,
        answers: [
            `24K Magic – Bruno Mars`,
            `Freudian – Daniel Caesar`,
            `Let Love Rule – Ledisi`,
            `Gumbo – PJ Morton`,
            `Feel the Real – Musiq Soulchild`
        ],
        correctAnswer: `24K Magic – Bruno Mars`,
        artwork: `<img src="images/Bruno_Mars_-_24K_Magic_(Official_Album_Cover).png" class="albumArt">`
    },

    {
        question: `Which artist(s) won the 60th Annual Grammy Award for Best Rap Album in 2018?`,
        answers: [ 
            `4:44 - Jay-Z`,
            `Damn - Kendrick Lamar`,
            `Culture - Migos`,
            `Laila&apos;s Wisdom - Rapsody`,
            `Flower Boy - Tyler, The Creator`
        ],
        correctAnswer: `Damn - Kendrick Lamar`,
        artwork: `<img src="images/damn_KL.jpg" class="albumArt">`
    },

    {
        question: `Which artist(s) has won the most Grammy Awards for Best Rap Album since 1996?`,
        answers: [
            `Jay-Z`,
            `Outkast`,
            `Eminem`,
            `Drake`,
            `Kanye West`
        ],
        correctAnswer: `Eminem`,
        artwork: `<p>He has won the award (6) times total</p><img src="images/eminem_photo_by_dave_j_hogan_getty_images_entertainment_getty_187596325.jpg" class="albumArt">`
    }
];

