const bookData = [

    { id: 1, title: 'Great Circle', author: 'Maggie Shipstead', description: 'An unforgettable story of a daredevil female aviator determined to chart her own course in life, at any cost--Great Circle spans Prohibition-era Montana, the Pacific Northwest, Alaska, New Zealand, wartime London, and modern-day Los Angeles.', readmore: 'https://bookshop.org/books/great-circle-9780593459416/9780525656975?listref=bookshop-org-best-sellers-of-the-week', img: 'https://images-production.bookshop.org/spree/images/attachments/13091160/original/9780525656975.jpg?1616107336', video: 'width="560" height="315" src="https://www.youtube.com/embed/g0NB2smKB6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen' },
    { id: 2, title: 'The Premonition: A Pandemic Story', author: 'Michael Lewis', description: 'Fortunately, we are still a nation of skeptics. Fortunately, there are those among us who study pandemics and are willing to look unflinchingly at worst-case scenarios. Michael Lewis\'s taut and brilliant nonfiction thriller pits a band of medical visionaries against the wall of ignorance that was the official response of the Trump administration to the outbreak of COVID-19.', readmore: 'https://bookshop.org/books/the-premonition-a-pandemic-story/9780393881554?listref=bookshop-org-best-sellers-of-the-week', img: 'https://images-production.bookshop.org/spree/images/attachments/13830158/original/9780393881554.jpg?1619542620', video: 'width="560" height="315" src="https://www.youtube.com/embed/XcHc9oGWLBc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen' },
    { id: 3, title: 'The Bench', author: 'Meghan the Duchess of Sussex and Christian Robinson', description: 'Meghan, The Duchess of Sussex\'s first children\'s book, The Bench, beautifully captures the special relationship between father and son, as seen through a mother\'s eyes. The book\'s storytelling and illustration give us snapshots of shared moments that evoke a deep sense of warmth, connection, and compassion.', readmore: 'https://bookshop.org/books/the-bench-9780593434512/9780593434512?listref=bookshop-org-best-sellers-of-the-week', img: 'https://images-production.bookshop.org/spree/images/attachments/14334745/original/9780593434512.jpg?1620660158', video: 'width="560" height="315" src="https://www.youtube.com/embed/P7SiHew2BIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen' },
    { id: 4, title: 'Finding the Mother Tree', author: 'Suzanne Simard', description: 'From the world\'s leading forest ecologist who forever changed how people view trees and their connections to one another and to other living things in the forest--a moving, deeply personal journey of discovery', readmore: 'https://bookshop.org/books/finding-the-mother-tree-discovering-the-wisdom-of-the-forest-9780593459423/9780525656098?listref=bookshop-org-best-sellers-of-the-week', img: 'https://images-production.bookshop.org/spree/images/attachments/13540448/original/9780525656098.jpg?1615363848', video: 'width="560" height="315" src="https://www.youtube.com/embed/3PvbU6fV8pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen' },

]



const list = () => {
    return [...bookData]
};

const find = (id) => {
    const book = bookData.find(book => book.id === id * 1);
    return {...book };
}

module.exports = { list: list, find: find };