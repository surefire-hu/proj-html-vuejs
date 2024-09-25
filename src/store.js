export const jumbos = [
    {
        position:'absolute inset-0 flex flex-col items-center justify-center text-white text-center ',
        button:'bg-reds text-white font-bold py-4 px-8 rounded mt-4 animate__animated animate__fadeInUpBig animate__delay-5s',
        date:'text-lg font-bold mb-10 animate__animated animate__zoomIn animate__delay-4s',
        social:'text-6xl font-extrabold mb-10 animate__animated animate__zoomIn animate__delay-2s',
        meet:'text-4xl mb-10 animate__animated animate__fadeInDown animate__delay-1s',
        src: '/slider-1-bg.jpg',
        alt: 'Image 1',
        title: 'CONFERENCE ON',
        subtitle: 'SOCIAL NETWORKS',
        details: '23 - 26 MAY 2019 / SAN FRANCISCO / 8 SPEAKERS',
        buttonText: 'REGISTER ONLINE',
        buttonLink: '#',
        hr:'1',
    },
    {
        position:'absolute inset-0 flex flex-col items-center justify-center text-white text-center ml-96',
        button:'bg-buttonB text-white font-bold py-3 px-6 rounded mt-4 animate__animated animate__fadeInUp animate__delay-4s',
        date:'mt-4 text-lg animate__animated animate__fadeIn animate__delay-3s',
        social:'text-6xl font-bold animate__animated animate__fadeIn animate__delay-2s',
        meet:'text-8xl font-extrabold text-reds mb-4 animate__animated animate__flip animate__delay-1s',
        src: '/2-item-1.jpg',
        alt: 'Image 2',
        title: 'MEET',
        subtitle: '8 FAMOUS SPEAKERS',
        details: 'With quality of knowledge',
        buttonText: 'MEET SPEAKERS',
        buttonLink: '#',
    },
    {
        position:'absolute inset-0 flex flex-col items-center justify-center text-white text-center ',
        meet:'text-6xl font-bold animate__animated animate__fadeIn animate__delay-2s',
        src: '/coutdown-bg1.jpg',
        alt: 'Image 3',
        title: 'SUPPORT VIDEO BACKGROUND',
        subtitle: '',
        details: '',
        buttonText: '',
        buttonLink: '',
    },
];

export const links = [
    {
        text: 'HOME',
        url: '#',
        class: 'text-reds border-b-2 border-reds',
    },
    {
        text: 'PAGES',
        url: '#',
        class: '',
    },
    {
        text: 'PROGRAM',
        url: '#',
        class: '',
    },
    {
        text: 'TICKETS',
        url: '#',
        class: '',
    },
    {
        text: 'SPEAKERS',
        url: '#',
        class: '',
    },
    {
        text: 'PAPERS',
        url: '#',
        class: '',
    },
    {
        text: 'BLOG',
        url: '#',
        class: '',
    },
    {
        text: 'SHORTCODES',
        url: '#',
        class: '',
    }
];

export const questions = [
    {
        title:'Who we are',
        overview:'Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.',
        link:'Learn More',
        class:'fa-solid fa-trophy'
    },
    {
        title:'What we do',
        overview:'Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.',
        link:'Learn More',
        class: 'fa-solid fa-bolt'
    },
    {
        title:'Why us?',
        overview:'Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.',
        link:'Learn More',
        class:'fa-solid fa-question'
    }
];

export const speakers = [
    {
        name:'LAURENCE',
        surname:'FRANCIS',
        overview:"Googles UI Designer",
        image:'/speaker-8.jpg',
    },
    {
        name:'JOHN',
        surname:'SUPER DOE',
        overview:"Yahoo's HR",
        image:'/speaker-7.jpg',
    },
    {
        name:'PATRICK',
        surname:'SPENCER',
        overview:"S&P Analyzer",
        image:'/speaker-6.jpg',
    },
    {
        name:'JANET',
        surname:'JONES',
        overview:"Newyork Post's GM",
        image:'/speaker-5.jpg',
    },
    {
        name:'MICHEAL',
        surname:'DOVER',
        overview:"Starbuck's CEO",
        image:'/speaker-4.jpg',
    },
    {
        name:'ANGELINA',
        surname:'HOLY',
        overview:"Maxii's Manager",
        image:'/speaker-3.jpg',
    },
    {
        name:'MATTHEW',
        surname:'WHITE',
        overview:"Facebook's Co-Founder",
        image:'/speaker-2.jpg',
    },
    {
        name:'JONATHAN',
        surname:'ELVES',
        overview:"Twitter's Co-Founder",
        image:'/speaker-1.jpg',
    }
];
export const programs = [
    {
        day: 'DAY 1',
        date: '23 May 2016',
        sessions: [
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                description: 'Welcoming and Introduction',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                time: '09:00 - 10:30',
                room: 'ROOM A',
                speakers: [
                    {
                        name: 'LAURENCE FRANCIS',
                        image: '/speaker-8-150x150.jpg',
                    },
                ],
            }
        ],
    },
    {
        day: 'DAY 2',
        date: '23 May 2030',
        sessions: [
            {
                class: 'fa-regular fa-clock',
                aclass:'fa-solid fa-location-arrow',
                oclass:'text-gray-600',
                description: 'Gathering demand information',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                time: '10:30 - 12:00',
                room: 'ROOM ALEXANDER X',
                speakers: [
                    {
                        name: 'Patrick Spencer',
                        image: '/speaker-6-150x150.jpg',
                    },
                    {
                        name: 'Jonathan Elves',
                        image: '/speaker-1-150x150.jpg',
                    },
                ],
            },
            {
                
                opclass: 'fa-regular fa-clock text-reds',
                iclass:'text-gray-600 font-bold',
                description: ' 12:00 - 13:00',
                overview: "INTERMISSION & LUNCH BREAK",
                oclass:'font-bold text-2xl',
                time: '',
                room: '',
                speakers: [
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '13:00 - 14:30',
                room: 'ROOM C',
                description: 'Setting up your business plan',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'Janet Jones',
                        image: '/speaker-5-150x150.jpg',
                    },
                    {
                        name: 'Angelina Holy',
                        image: '/speaker-3-150x150.jpg',
                    },
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '14:30 - 16:00',
                room: 'ROOM C',
                description: 'Finding Supplier',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'Matthew White',
                        image: '/speaker-2-150x150.jpg',
                    },
                ],
            },
        ],
    },
    {
        day: 'DAY 3',
        date: '24 May 2030',
        sessions: [
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                description: 'Dealing With Supplier',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                time: '9:00 - 10:30',
                room: 'ROOM A',
                speakers: [
                    {
                        name: 'Janet Jones',
                        image: '/speaker-5-150x150.jpg',
                    },
                    {
                        name: 'Michael Dover',
                        image: '/speaker-4-150x150.jpg',
                    },
                    {
                        name: 'Angelina Holy',
                        image: '/speaker-3-150x150.jpg',
                    },
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '9:00 - 10:30',
                room: 'ROOM D',
                description: 'Marketing Theory',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'John Super Doe',
                        image: '/speaker-7-150x150.jpg',
                    },
                    {
                        name: 'Patrick Spencer',
                        image: '/speaker-6-150x150.jpg',
                    },
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '10:30 - 12:00',
                room: 'ROOM B',
                description: 'What to do before start creating product',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'John Super Doe',
                        image: '/speaker-7-150x150.jpg',
                    },
                    {
                        name: 'Jonathan Elves',
                        image: '/speaker-1-150x150.jpg',
                    },
                ],
            },
            
            {
                
                opclass: 'fa-regular fa-clock text-reds',
                iclass:'text-gray-600 font-bold',
                description: ' 12:00 - 13:00',
                overview: "INTERMISSION & LUNCH BREAK",
                oclass:'font-bold text-2xl',
                time: '',
                room: '',
                speakers: [
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '13:00 - 14:30',
                room: 'ROOM C',
                description: 'Creating Productivity 1',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'Laurence Francis',
                        image: '/speaker-8-150x150.jpg',
                    },
                    {
                        name: 'Angelina Holy',
                        image: '/speaker-3-150x150.jpg',
                    },
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '14:30 - 16:00',
                room: 'ROOM C',
                description: 'Creating Productivity 1',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'Jonathan Elves',
                        image: '/speaker-1-150x150.jpg',
                    },
                    {
                        name: 'Angelina Holy',
                        image: '/speaker-3-150x150.jpg',
                    },
                ],
            },
        ],
    },
    {
        day: 'DAY 4',
        date: '25 May 2030',
        sessions: [
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                description: 'Product Lines',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                time: '10:00 - 12:00',
                room: 'ROOM A',
                speakers: [
                    {
                        name: 'Patrick Spencer',
                        image: '/speaker-6-150x150.jpg',
                    },
                    {
                        name: 'Micheal Dover',
                        image: '/speaker-4-150x150.jpg',
                    },
                ],
            },
            {
                
                opclass: 'fa-regular fa-clock text-reds',
                iclass:'text-gray-600 font-bold',
                description: ' 12:00 - 13:00',
                overview: "INTERMISSION & LUNCH BREAK",
                oclass:'font-bold text-2xl',
                time: '',
                room: '',
                speakers: [
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '13:00 - 14:30',
                room: 'ROOM D',
                description: 'Quality Control',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'Angelina Holy',
                        image: '/speaker-3-150x150.jpg',
                    },
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '14:30 - 16:00',
                room: 'ROOM D',
                description: 'Furnishing Process',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'John Super Doe',
                        image: '/speaker-7-150x150.jpg',
                    },
                ],
            },
        ],
    },
    {
        day: 'DAY 5',
        date: '26 May 2030',
        sessions: [
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                description: 'Product presentation',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                time: '09:00 - 10:30',
                room: 'ROOM B',
                speakers: [
                    {
                        name: 'Laurence Francis',
                        image: '/speaker-8-150x150.jpg',
                    },
                    {
                        name: 'Janet Jones',
                        image: '/speaker-5-150x150.jpg',
                    },
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '10:30 - 12:00',
                room: 'ROOM C',
                description: 'Marketing your product',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'Micheal Dover',
                        image: '/speaker-4-150x150.jpg',
                    },
                ],
            },
            {
                
                opclass: 'fa-regular fa-clock text-reds',
                iclass:'text-gray-600 font-bold',
                description: ' 12:00 - 13:00',
                overview: "INTERMISSION & LUNCH BREAK",
                oclass:'font-bold text-2xl',
                time: '',
                room: '',
                speakers: [
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '13:00 - 14:30',
                room: 'ROOM C',
                description: 'Social media can help',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'John Super Doe',
                        image: '/speaker-7-150x150.jpg',
                    },
                    {
                        name: 'Patrick Spencer',
                        image: '/speaker-6-150x150.jpg',
                    },
                ],
            },
            {
                class: 'fa-regular fa-clock',
                oclass:'text-gray-600',
                aclass:'fa-solid fa-location-arrow',
                time: '14:30 - 16:00',
                room: 'ROOM A',
                description: 'Ending session',
                overview: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur....",
                speakers: [
                    {
                        name: 'Matthew White',
                        image: '/speaker-2-150x150.jpg',
                    },
                ],
            },
        ],
    },
    {

    },
];

export const recents= [
    {
        image:'photodune-7770665-two-white-coffee-mug-with-diy-decoration-o.jpg',
        sticky:'absolute bottom-0 right-0 p-2 bg-gray-800 text-white text-sm',
        stuckyPhone:'fa-solid fa-bullhorn',
        stickyText:' STICKY POST',
        date:'03 Dec 2013  /  0 Comments',
        title:'SEDIAL EIUSMOD TEMPOR',
        overview:'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere....',
    },
    {
        image:'photodune-8797753-multiethnic-people-with-startup-business-t.jpg',
        date:'03 Dec 2013  /  2 Comments',
        title:'DONEC LUCTUS IMPERDIET',
        overview:'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere....',
    },
    {
        image:'photodune-8522811-speaker-at-business-conference-and-present.jpg',
        date:'03 Dec 2013  /  2 Comments',
        title:'MAGNA PARS STUDIORUM',
        overview:'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere....',
    },
];

export const tickets= [
    {
        title:'ONE DAY PASS',
        price:'FREE',
        book:'BOOK NOW',
        contents: [
            {
                access:'One Day Access',
            },
            {
                access:'Coffee Break',
            },
            {
                access:'Lunch(International Buffet)',
            },
            {
                access:'Document Sheets',
            },
            {
                access:'50USD Voucher For Next Event',
            },
        ],
    },
    {
        title:'FOUR DAY PASSES',
        price:'750.00 USD',
        featured:'Freatured!',
        class:'px-10 py-1',
        book:'BOOK NOW',
        contents: [
            {
                access:'Four Day Access',
            },
            {
                access:'Coffee Break',
            },
            {
                access:'Lunch(International Buffet)',
            },
            {
                access:'Document Sheets',
            },
            {
                access:'100USD Voucher For Next Event',
            },
        ],
    },
    {
        title:'TWO DAY PASSES',
        price:'580.00 USD',
        book:'BOOK NOW',
        contents: [
            {
                access:'Two Day Access',
            },
            {
                access:'Coffee Break',
            },
            {
                access:'Lunch(International Buffet)',
            },
            {
                access:'Document Sheets',
            },
            {
                access:'700USD Voucher For Next Event',
            },
        ],
    },
]

export const accordions= [
    { 
        title: 'Question 1', 
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' 
    },
    { 
        title: 'Question 2', 
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' 
    },
    { 
        title: 'Question 3', 
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' 
    },
    { 
        title: 'Question 4', 
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' 
    },
]

export const sponsors= [
    { 
        image: 'banner-1.jpg', 
        content: 'drofer' 
    },
    { 
        image: 'banner-2.jpg', 
        content: 'link sys' 
    },
    { 
        image: 'banner-3.jpg', 
        content: 'pointer co' 
    },
    { 
        image: 'banner-4.jpg', 
        content: 'max star' 
    },
    { 
        image: 'banner-5.jpg', 
        content: 'globe care' 
    },
    { 
        image: 'banner-6.jpg', 
        content: 'the shield' 
    },
]

export const footer= [
    { 
        image: 'photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (1).jpg', 
    },
    { 
        image: 'photodune-8523683-speaker-at-business-convention-and-present.jpg', 
    },
    { 
        image: 'photodune-6745579-modern-creative-man-relaxing-on-workspace-.jpg',  
    },
    { 
        image: 'photodune-8522811-speaker-at-business-conference-and-present (1).jpg', 
    },
    { 
        image: 'photodune-8797753-multiethnic-people-with-startup-business-t (1).jpg', 
    },
    { 
        image: 'card04-150x150.jpg',  
    },
    { 
        image: 'photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg',  
    },
    { 
        image: 'photodune-6745585-modern-creative-workspace-m-150x150.jpg',  
    },
    { 
        image: '6426608875_186070f8ca_o-150x150.jpg',  
    },
    { 
        image: 'card01-150x150.jpg',  
    },
    { 
        image: '13349065283_64d09b067c_o-150x150.jpg',  
    },
    { 
        image: 'photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg',  
    },
]