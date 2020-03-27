const commentsData = [
    {
        id: 10-1,
        author:'Anariel',
        avatar:'/images/unknown-avatar.png',
        date:'December 3, 2019 at 6:23 pm',
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori. Claritas est etiam processus dynamicus, qui sequitur.",
        replies: []
    },
    {
        id: 10-2,
        author:'Lisbet',
        avatar:'/images/unknown-avatar.png',
        date:'December 21, 2019 at 2:40 pm',
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori. Claritas est etiam processus dynamicus, qui sequitur.",
        replies: [
            {
                id: 10-21,
                author:'Boris',
                avatar:'/images/unknown-avatar.png',
                date:'December 22, 2019 at 3:10 pm',
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori. Claritas est etiam processus dynamicus, qui sequitur.",
                replies: [
                    {
                        id: 10-211,
                        author:'Jack',
                        avatar:'/images/unknown-avatar.png',
                        date:'December 28, 2019 at 1:08 pm',
                        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori. Claritas est etiam processus dynamicus, qui sequitur.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        id: 10-3,
        author:'Alise',
        avatar:'/images/unknown-avatar.png',
        date:'February 8, 2020 at 9:54 pm',
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh classica ed euismod tincidunt ut laoreet dolore magna vertolori. Claritas est etiam processus dynamicus, qui sequitur.",
        replies: []
    },
]

// console.log(commentsData.length)
// console.log(commentsData[1].replies)

// const TrueLength = commentsData.map((post)=>(
//     post.replies.map((post)=>(
//         post.replies.map((post)=>(
//             post.replies
//         ))
//     ))
// ))

// console.log(TrueLength)

export default commentsData