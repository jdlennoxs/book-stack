export type BooksDataType = {
    user_books: {
        user_book_reads: {
            finished_at: string
            user_book: {
                rating: number | null
            } | null
        }[]
        book: {
            slug: string
            title: string
            cached_contributors: string | null
            cached_image: {
                id: number
                url: string
                color: string
                width: number
                height: number
                color_name: string
            } | null
            id: number
            pages: number | null
        }
    }[]
};

const colors = [
    { color: '#4F46E5', name: 'Indigo' },     // Make your own stack.
    { color: '#312E81', name: 'Navy' },       // Enter a hardcover
    { color: '#1a9196', name: 'Teal' },       // username
    { color: '#094229', name: 'Green' },      // in
    { color: '#F2D379', name: 'Yellow' },     // the box below
    { color: '#E1AD01', name: 'Mustard' },    // and
    { color: '#DD6B20', name: 'Orange' },     // see your own
    { color: '#C05621', name: 'Rust' },       // reading history
    { color: '#F6BDCC', name: 'Pink' },       // as a
    { color: '#B83280', name: 'Magenta' },    // TOWER
    { color: '#702459', name: 'Purple' }      // you can share
];

const tutorialBooks = [
    { title: "Make your own stack.", author: "Vertical Life", pages: 350 },
    { title: "Enter a hardcover", author: "Hardcover.app", pages: 420 },
    { title: "username", author: "You", pages: 280 },
    { title: "in", author: "The Destination", pages: 200 },
    { title: "the box below", author: "Input", pages: 320 },
    { title: "and", author: "Execution", pages: 180 },
    { title: "see your own", author: "Reflection", pages: 400 },
    { title: "reading history", author: "The Past", pages: 460 },
    { title: "as a", author: "Transformation", pages: 220 },
    { title: "TOWER", author: "The Heights", pages: 680 },
    { title: "you can share", author: "The Community", pages: 350 }
];

export const booksData: BooksDataType = {
    "user_books": tutorialBooks.map((info, index) => {
        const colorObj = colors[index % colors.length];
        const date = new Date(2024, 0, tutorialBooks.length - index).toISOString().split('T')[0];
        return {
            "book": {
                "slug": `tutorial-${index}`,
                "title": info.title,
                "cached_contributors": info.author,
                "cached_image": {
                    "id": 5000 + index,
                    "url": "",
                    "color": colorObj.color,
                    "width": 300,
                    "height": 450,
                    "color_name": colorObj.name
                },
                "id": 5000 + index,
                "pages": info.pages
            },
            "user_book_reads": [
                {
                    "finished_at": date,
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        };
    })
};