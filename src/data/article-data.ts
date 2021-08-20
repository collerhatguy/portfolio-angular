import Article from "./Article"
const articles: Article[] = [
    { 
        header: "Angular vs React", 
        date: "July 29th, 2021",
        paragraphs: [
            "   When I first jumped from React to Angular I thought Angular was just a poor man's React. I thought it was ridiculus how Angular had 4 files for every component. The ngFor loop didn't feel as inuitive as the map method of react and I was unfamiliar with typescript. Now having built this website you are reading this on with Angular and getting to know the framework better over he course of a couple dates, I now know that Angular is far from the bargain bin version of React. Tihs shouldn't have surprised me since when I first started using React I thought it was clunky and counterintuitive relative to vanilla js, and now I use it for almost every project. 'But Jacob' I hear you saying, 'why aren't you using one for every project for the sake of simplicity? Wouldn't that make things easier?'. No dear reader, for neither framework is strictly better than the other at everything and so they both are best used for specific projects. That's why I am going to go over the pros and cons of each so that YOU know which is best for your needs.",
            "   Scalability is important to a truely great developer. An ametuer developer writes one and done code that solves whatever immediate problem the project is facing in the moment and then forgets about it. Then a week later he/she returns to his code and thinks 'God I cant read this' or 'Oh great now I have to copy and paste this chunk of code over and over' or the worst possible outcome 'There is an error going on somewhere in this 30 page chunk of code and I have to debug the whole thing'. Noone wants to be in that situation and frameworks are supposed to be, at least a partialy, a remedy for that. Both React and Angular feature reusable components that make displaying chunks of data to the DOM easier and simpler compared to vanilla js. However Angular makes component creation and management easier in a multiude of ways. First of all the ngIf attribute makes conditional rendering easier in angular as it takes up less space then the curly bracket combined with ternary operator. Rather than wrapping the whole components with ternary operators that have to end with an ugly ': null' we can relegate all of that to an ngIf right at the start.",
            "   Angular also scales its components better in regards to styles as each component gets its own style sheet that can exclusively select elements related to it repective component. That means that you can reuse slectors like '.card' in your components stylesheet and it will exclusively effect that component. That saves you the headache of having to come up with an ultra specific name for a class like '.article-header-container' and just use the h2 tag with no furhter specificity. This can somtimes be frustrating for when you want to use global styles like a css reset, but there is still a global stylsheet that effects all components in the root of the src directory. Reacts closest competition to that would be styled-components which have there own set of strengths: mainly that they handle theme management alot easier. However it inevitebly becomes a headache when it comes time to figure out why that one peculiar div is acting the way it is, and so you have to figure out if there is anything selecting it by accident and then figure out how to resolve the specificity battle waging under the surface."
        ]
    },
    // {
    //     header: "Your first language",
    //     date: "July 31st, 2021",
    //     paragraphs: ["For those "]
    // }
]
export default articles;