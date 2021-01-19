const {
    Post
} = require("../models");

const postdata = [{
        id: 1,
        title: "These wireless headphones double as hearing aids – Future Blink",
        post_text: "Rather than releasing any new cameras for CES 2021, Canon is doing something different: Letting you take pictures from space.",
        user_id: 1
    },
    {
        id: 2,
        title: "Presenting the Best of CES 2021 winners!",
        post_text: "As Wednesday draws to a close, so does a grand social experiment: the first-ever online-only CES.",
        user_id: 2
    },
    {
        id: 3,
        title: "Galaxy Buds Pro review: Samsung's best earbuds yet",
        post_text: "When the rumors began to swirl about Samsung’s Galaxy Buds Live, the promise of active noise cancellation (ANC) led me to believe the company was finally addressing a key omission from its lineup.",
        user_id: 3,
    },
    {
        id: 4,
        title: "Apple is reportedly working on a major redesign for the iMac",
        post_text: "It turns the MacBook Pro may not be the only computer in Apple’s lineup to get some much-needed attention from the company’s design team.",
        user_id: 4,
    },
    {
        id: 5,
        title: "Audi and BMW shut down car subscription programs",
        post_text: "More car subscription services are running into trouble.",
        user_id: 5,
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;