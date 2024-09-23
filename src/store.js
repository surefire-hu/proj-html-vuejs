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