
type BooksDataType = {
    user_books: {
        user_book_reads: {
            finished_at: string
            edition: {
                title: string
                pages: number | null
                cached_contributors: {
                    author: {
                        id: number
                        slug: string
                        name: string
                        image: {
                            id?: number
                            url?: string
                            color?: string
                            width?: number
                            height?: number
                            color_name?: string
                        } | null
                    }
                    contribution: string | null
                }[]
                image: {
                    url: string
                    color: string
                    height: number
                    width: number
                } | null
                book: {
                    editions: {
                        pages: number | null
                    }[]
                    cached_image: {
                        id: number
                        url: string
                        color: string
                        width: number
                        height: number
                        color_name: string
                    } | null
                }
            }
        }[]
    }[]
}[];

export const booksData: BooksDataType = [
    {
        "user_books": [
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2014-07-01",
            //             "edition": {
            //                 "title": "A Storm of Swords",
            //                 "pages": 1177,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "id": 78661,
            //                             "slug": "george-r-r-martin",
            //                             "name": "George R.R. Martin",
            //                             "image": {
            //                                 "id": 31903,
            //                                 "url": "https://assets.hardcover.app/authors/78661/6155669-L.jpg",
            //                                 "color": "#ad6e52",
            //                                 "width": 200,
            //                                 "height": 257,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 236,
            //                     "editions": [
            //                         {
            //                             "pages": 612,
            //                             "id": 31723633
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 845107,
            //                         "url": "https://assets.hardcover.app/book_mappings/7332349/5249dbcbc118ae4ea68c37295c8386f96c341c95.jpeg",
            //                         "color": "#203f1c",
            //                         "width": 400,
            //                         "height": 640,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2013-11-01",
            //             "edition": {
            //                 "title": "A Game of Thrones",
            //                 "pages": 835,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "george-r-r-martin",
            //                             "name": "George R.R. Martin",
            //                             "cachedImage": {
            //                                 "id": 31903,
            //                                 "url": "https://assets.hardcover.app/authors/78661/6155669-L.jpg",
            //                                 "color": "#ad6e52",
            //                                 "width": 200,
            //                                 "height": 257,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 644,
            //                     "editions": [
            //                         {
            //                             "pages": 832,
            //                             "id": 31785278
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3972305,
            //                         "url": "https://assets.hardcover.app/editions/914414/6726176539138138.jpg",
            //                         "color": "#dda86f",
            //                         "width": 419,
            //                         "height": 648,
            //                         "color_name": "Silver"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2018-07-04",
            //             "edition": {
            //                 "title": "The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World",
            //                 "pages": 352,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "pedro-domingos",
            //                             "name": "Pedro Domingos",
            //                             "cachedImage": {
            //                                 "id": 99071,
            //                                 "url": "https://assets.hardcover.app/books/68031/840557-L.jpg",
            //                                 "color": "#f6f6ed",
            //                                 "width": 317,
            //                                 "height": 475,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 6283,
            //                     "editions": [
            //                         {
            //                             "pages": 352,
            //                             "id": 30401017
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 848320,
            //                         "url": "https://assets.hardcover.app/external_data/59319482/897e29cd2f29e989d63158901895ceaea00153e8.jpeg",
            //                         "color": "#baad70",
            //                         "width": 98,
            //                         "height": 149,
            //                         "color_name": "Gray"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2019-04-09",
            //             "edition": {
            //                 "title": "Things to Make and Do in the Fourth Dimension",
            //                 "pages": 453,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "matt-parker-c84e0b67-2f86-4183-b4be-5ea38999bf47",
            //                             "name": "Matt    Parker",
            //                             "cachedImage": {
            //                                 "id": 283270,
            //                                 "url": "https://assets.hardcover.app/books/256658/10771647-L.jpg",
            //                                 "color": "#3e301b",
            //                                 "width": 353,
            //                                 "height": 500,
            //                                 "color_name": "Brown"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 6372,
            //                     "editions": [
            //                         {
            //                             "pages": 480,
            //                             "id": 1141147
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3124372,
            //                         "url": "https://assets.hardcover.app/edition/30402797/ad3d304675215f735faa3256840e5f0afcb20330.jpeg",
            //                         "color": "#e4e2d4",
            //                         "width": 330,
            //                         "height": 500,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2024-05-19",
            //             "edition": {
            //                 "title": "A Visit From the Goon Squad",
            //                 "pages": 352,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "jennifer-egan",
            //                             "name": "Jennifer Egan",
            //                             "cachedImage": {
            //                                 "id": 220699,
            //                                 "url": "https://assets.hardcover.app/books/193784/3732449-L.jpg",
            //                                 "color": "#bbdce8",
            //                                 "width": 128,
            //                                 "height": 165,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 10099,
            //                     "editions": [
            //                         {
            //                             "pages": 337,
            //                             "id": 30402358
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2861786,
            //                         "url": "https://assets.hardcover.app/edition/30400488/be5fd0661f044488345da40a2c70a7e4aea41fe8.jpeg",
            //                         "color": "#1a9196",
            //                         "width": 336,
            //                         "height": 500,
            //                         "color_name": "Blue"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2021-03-15",
            //             "edition": {
            //                 "title": "Song of Solomon",
            //                 "pages": 398,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "toni-morrison",
            //                             "name": "Toni Morrison",
            //                             "cachedImage": {
            //                                 "id": 32702,
            //                                 "url": "https://assets.hardcover.app/authors/113000/6388126-L.jpg",
            //                                 "color": "#8b6246",
            //                                 "width": 225,
            //                                 "height": 284,
            //                                 "color_name": "Brown"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 25854,
            //                     "editions": [
            //                         {
            //                             "pages": 368,
            //                             "id": 31612426
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2912706,
            //                         "url": "https://assets.hardcover.app/edition/15021531/2a1d1731f6b869bfbbe2f938f3114bd467107187.jpeg",
            //                         "color": "#bcaa92",
            //                         "width": 375,
            //                         "height": 500,
            //                         "color_name": "Silver"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2016-09-01",
            //             "edition": {
            //                 "title": "The sisters brothers",
            //                 "pages": 328,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "patrick-dewitt",
            //                             "name": "Patrick deWitt",
            //                             "cachedImage": {
            //                                 "id": 219383,
            //                                 "url": "https://assets.hardcover.app/books/192425/8742007-L.jpg",
            //                                 "color": "#e8e1af",
            //                                 "width": 331,
            //                                 "height": 499,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 33745,
            //                     "editions": [
            //                         {
            //                             "pages": 328,
            //                             "id": 31511748
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 1051328,
            //                         "url": "https://assets.hardcover.app/external_data/47653541/92b850ce56cd7272b89241271699cbe047438533.jpeg",
            //                         "color": "#ebe0b0",
            //                         "width": 140,
            //                         "height": 211,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2020-12-23",
            //             "edition": {
            //                 "title": "Municipal Dreams: The Rise and Fall of Council Housing",
            //                 "pages": 337,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "john-boughton",
            //                             "name": "John Boughton",
            //                             "cachedImage": {
            //                                 "id": 94867,
            //                                 "url": "https://assets.hardcover.app/books/63665/9528449-L.jpg",
            //                                 "color": "#c2d275",
            //                                 "width": 407,
            //                                 "height": 500,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 34201,
            //                     "editions": [
            //                         {
            //                             "pages": 330,
            //                             "id": 5754888
            //                         }
            //                     ],
            //                     "cached_image": {}
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2018-05-13",
            //             "edition": {
            //                 "title": "Utopia For Realists",
            //                 "pages": 337,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "bregman-rutger",
            //                             "name": "Bregman  Rutger",
            //                             "cachedImage": {}
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 37113,
            //                     "editions": [
            //                         {
            //                             "pages": 319,
            //                             "id": 8349156
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2913442,
            //                         "url": "https://assets.hardcover.app/edition/30404791/f7e7763061920c6c0799965fc397432e4e7c73a7.jpeg",
            //                         "color": "#d1ceb2",
            //                         "width": 325,
            //                         "height": 500,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2018-10-12",
            //             "edition": {
            //                 "title": "This is Going to Hurt: Secret Diaries of a Junior Doctor",
            //                 "pages": 189,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "adam-kay",
            //                             "name": "Adam Kay",
            //                             "cachedImage": {
            //                                 "id": 169811,
            //                                 "url": "https://assets.hardcover.app/books/141247/8000962-L.jpg",
            //                                 "color": "#f6e5cf",
            //                                 "width": 302,
            //                                 "height": 500,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 38572,
            //                     "editions": [
            //                         {
            //                             "pages": 189,
            //                             "id": 30402848
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 930879,
            //                         "url": "https://assets.hardcover.app/external_data/59648722/c167c45429dfdb889e135e90bb85bc193d4a756b.jpeg",
            //                         "color": "#236c99",
            //                         "width": 128,
            //                         "height": 197,
            //                         "color_name": "Blue"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2020-06-06",
            //             "edition": {
            //                 "title": "Normal People",
            //                 "pages": 268,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "sally-rooney",
            //                             "name": "Sally Rooney",
            //                             "cachedImage": {
            //                                 "id": 7263,
            //                                 "url": "https://assets.hardcover.app/books/229154/8465214-L.jpg",
            //                                 "color": "#666152",
            //                                 "width": 360,
            //                                 "height": 500,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 61787,
            //                     "editions": [
            //                         {
            //                             "pages": 278,
            //                             "id": 31654329
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3741898,
            //                         "url": "https://assets.hardcover.app/editions/30402559/2802629647590855.jpeg",
            //                         "color": "#2b4e89",
            //                         "width": 2800,
            //                         "height": 4230,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2018-11-05",
            //             "edition": {
            //                 "title": "The Man in the High Castle",
            //                 "pages": 259,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "philip-k-dick",
            //                             "name": "Philip K. Dick",
            //                             "cachedImage": {
            //                                 "id": 31753,
            //                                 "url": "https://assets.hardcover.app/authors/71840/6295259-L.jpg",
            //                                 "color": "#a9a9a9",
            //                                 "width": 300,
            //                                 "height": 389,
            //                                 "color_name": "Silver"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 66330,
            //                     "editions": [
            //                         {
            //                             "pages": 247,
            //                             "id": 11578768
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 1612203,
            //                         "url": "https://assets.hardcover.app/external_data/59325352/aeaa2bac6a72ecce42a1edc0c91e1fc1af3f54ec.jpeg",
            //                         "color": "#b50802",
            //                         "width": 98,
            //                         "height": 141,
            //                         "color_name": "Red"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2014-02-01",
            //             "edition": {
            //                 "title": "Catch-22",
            //                 "pages": 466,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "joseph-heller",
            //                             "name": "Joseph Heller",
            //                             "cachedImage": {
            //                                 "id": 168895,
            //                                 "url": "https://assets.hardcover.app/books/140306/5811510-L.jpg",
            //                                 "color": "#fefefe",
            //                                 "width": 286,
            //                                 "height": 500,
            //                                 "color_name": "White"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 70825,
            //                     "editions": [
            //                         {
            //                             "pages": 519,
            //                             "id": 31589748
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 1679052,
            //                         "url": "https://assets.hardcover.app/external_data/42405814/c68d88de91ba5949246d092447d76dd6e030d0d4.jpeg",
            //                         "color": "#5e5c6f",
            //                         "width": 328,
            //                         "height": 500,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2021-10-29",
            //             "edition": {
            //                 "title": "Dataclysm: Who We Are",
            //                 "pages": 304,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "christian-rudder",
            //                             "name": "Christian Rudder",
            //                             "cachedImage": {
            //                                 "id": 223532,
            //                                 "url": "https://assets.hardcover.app/books/196695/825725-L.jpg",
            //                                 "color": "#cbe4ce",
            //                                 "width": 309,
            //                                 "height": 475,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 71936,
            //                     "editions": [
            //                         {
            //                             "pages": 304,
            //                             "id": 6936779
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 879039,
            //                         "url": "https://assets.hardcover.app/external_data/59326271/ad4bf22aa3c16acd01ab8505789e2dfae6026725.jpeg",
            //                         "color": "#524e4f",
            //                         "width": 98,
            //                         "height": 146,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-03-15",
            //             "edition": {
            //                 "title": "The Song of Achilles",
            //                 "pages": 378,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "madeline-miller",
            //                             "name": "Madeline Miller",
            //                             "cachedImage": {
            //                                 "id": 33214,
            //                                 "url": "https://assets.hardcover.app/authors/132679/8283886-L.jpg",
            //                                 "color": "#605a58",
            //                                 "width": 230,
            //                                 "height": 230,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 80378,
            //                     "editions": [
            //                         {
            //                             "pages": 494,
            //                             "id": 31482141
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 4293536,
            //                         "url": "https://assets.hardcover.app/editions/8933288/8719175186248367.jpg",
            //                         "color": "#743e09",
            //                         "width": 993,
            //                         "height": 1500,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2021-03-30",
            //             "edition": {
            //                 "title": "The Lottery and Other Stories",
            //                 "pages": 366,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "shirley-jackson",
            //                             "name": "Shirley Jackson",
            //                             "cachedImage": {
            //                                 "id": 32858,
            //                                 "url": "https://assets.hardcover.app/authors/118867/7280455-L.jpg",
            //                                 "color": "#555555",
            //                                 "width": 358,
            //                                 "height": 463,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 104610,
            //                     "editions": [
            //                         {
            //                             "pages": 306,
            //                             "id": 8059902
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 4550165,
            //                         "url": "https://assets.hardcover.app/edition/25284323/cb7fd0b326addccfcaac35013e97dd31ab868c9b.jpeg",
            //                         "color": "#47433d",
            //                         "width": 333,
            //                         "height": 500,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2018-04-30",
            //             "edition": {
            //                 "title": "The Orphan Master's Son",
            //                 "pages": 465,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "adam-johnson",
            //                             "name": "Adam Johnson",
            //                             "cachedImage": {
            //                                 "id": 35150,
            //                                 "url": "https://assets.hardcover.app/authors/212317/8082409-L.jpg",
            //                                 "color": "#b0b8bb",
            //                                 "width": 333,
            //                                 "height": 500,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 105179,
            //                     "editions": [
            //                         {
            //                             "pages": 685,
            //                             "id": 443536
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2919609,
            //                         "url": "https://assets.hardcover.app/edition/6217378/2e17525873b7c712b07c57b8d270bdff50a11960.jpeg",
            //                         "color": "#efeae3",
            //                         "width": 335,
            //                         "height": 500,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2023-11-26",
            //             "edition": {
            //                 "title": "First-time Parent",
            //                 "pages": null,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "lucy-atkins",
            //                             "name": "Lucy Atkins",
            //                             "cachedImage": {
            //                                 "id": 156423,
            //                                 "url": "https://assets.hardcover.app/books/127393/9277483-L.jpg",
            //                                 "color": "#988f71",
            //                                 "width": 303,
            //                                 "height": 500,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 113072,
            //                     "editions": [],
            //                     "cached_image": {
            //                         "id": 142614,
            //                         "url": "https://assets.hardcover.app/books/113072/9377842-L.jpg",
            //                         "color": "#ecede9",
            //                         "width": 230,
            //                         "height": 500,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2019-03-03",
            //             "edition": {
            //                 "title": "Heavy",
            //                 "pages": 256,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "kiese-laymon",
            //                             "name": "Kiese Laymon",
            //                             "cachedImage": {
            //                                 "id": 108404,
            //                                 "url": "https://assets.hardcover.app/books/77692/10347489-L.jpg",
            //                                 "color": "#5a5857",
            //                                 "width": 500,
            //                                 "height": 444,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 114141,
            //                     "editions": [
            //                         {
            //                             "pages": 257,
            //                             "id": 31535339
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2920730,
            //                         "url": "https://assets.hardcover.app/edition/30401039/c420a138049e6341e4dcf46bb3ca825e034bf960.jpeg",
            //                         "color": "#9a1007",
            //                         "width": 326,
            //                         "height": 500,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2020-02-15",
            //             "edition": {
            //                 "title": "The Sailor Who Fell from Grace with the Sea",
            //                 "pages": 181,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "yukio-mishima-1e9fb18d-cb84-49ba-8626-80f73a088167",
            //                             "name": "Yukio Mishima",
            //                             "cachedImage": {
            //                                 "id": 35513,
            //                                 "url": "https://assets.hardcover.app/authors/229418/6388039-L.jpg",
            //                                 "color": "#dbdbdb",
            //                                 "width": 241,
            //                                 "height": 335,
            //                                 "color_name": "Silver"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "john-nathan",
            //                             "name": "John Nathan",
            //                             "cachedImage": {
            //                                 "id": 118962,
            //                                 "url": "https://assets.hardcover.app/books/88723/8502797-L.jpg",
            //                                 "color": "#a6442b",
            //                                 "width": 161,
            //                                 "height": 171,
            //                                 "color_name": "Brown"
            //                             }
            //                         },
            //                         "contribution": "Translator"
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 119359,
            //                     "editions": [
            //                         {
            //                             "pages": 182,
            //                             "id": 31887702
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2921464,
            //                         "url": "https://assets.hardcover.app/edition/9223809/135d3a2b7b16871bc2cc4d878beab78d59ccb00e.jpeg",
            //                         "color": "#a19102",
            //                         "width": 301,
            //                         "height": 500,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2021-04-23",
            //             "edition": {
            //                 "title": "Slaughterhouse-Five",
            //                 "pages": 285,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "kurt-vonnegut",
            //                             "name": "Kurt Vonnegut",
            //                             "cachedImage": {
            //                                 "id": 33646,
            //                                 "url": "https://assets.hardcover.app/authors/149651/6390595-L.jpg",
            //                                 "color": "#3b3631",
            //                                 "width": 299,
            //                                 "height": 450,
            //                                 "color_name": "Black"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 122240,
            //                     "editions": [
            //                         {
            //                             "pages": 275,
            //                             "id": 31439824
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3270459,
            //                         "url": "https://assets.hardcover.app/edition/22583711/69c7b1e555f26dcc37812c6252fe77b1b7b13adc.jpeg",
            //                         "color": "#f2010f",
            //                         "width": 326,
            //                         "height": 500,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2016-12-01",
            //             "edition": {
            //                 "title": "Bones of the Hills",
            //                 "pages": 518,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "conn-iggulden",
            //                             "name": "Conn Iggulden",
            //                             "cachedImage": {
            //                                 "id": 128887,
            //                                 "url": "https://assets.hardcover.app/books/98909/6705622-L.jpg",
            //                                 "color": "#2c5c40",
            //                                 "width": 331,
            //                                 "height": 500,
            //                                 "color_name": "Green"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 130257,
            //                     "editions": [
            //                         {
            //                             "pages": 28,
            //                             "id": 31636016
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 1316322,
            //                         "url": "https://assets.hardcover.app/external_data/59475999/84e261dd443d63f190affebc381f83175e67334f.jpeg",
            //                         "color": "#a55819",
            //                         "width": 98,
            //                         "height": 150,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2018-10-10",
            //             "edition": {
            //                 "title": "Under the Skin",
            //                 "pages": 304,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "michel-faber",
            //                             "name": "Michel Faber",
            //                             "cachedImage": {
            //                                 "id": 155194,
            //                                 "url": "https://assets.hardcover.app/books/126110/444487-L.jpg",
            //                                 "color": "#de5d00",
            //                                 "width": 499,
            //                                 "height": 475,
            //                                 "color_name": "Orange"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 132237,
            //                     "editions": [
            //                         {
            //                             "pages": 299,
            //                             "id": 31870511
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2923168,
            //                         "url": "https://assets.hardcover.app/edition/21998613/b621d5a1bb6980c45a3d2ab5ac36d7d48e09957e.jpeg",
            //                         "color": "#d4dbe0",
            //                         "width": 326,
            //                         "height": 500,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2019-01-24",
            //             "edition": {
            //                 "title": "Never Let Me Go",
            //                 "pages": 294,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "kazuo-ishiguro",
            //                             "name": "Kazuo Ishiguro",
            //                             "cachedImage": {
            //                                 "id": 34991,
            //                                 "url": "https://assets.hardcover.app/authors/204396/6597550-L.jpg",
            //                                 "color": "#ad0911",
            //                                 "width": 360,
            //                                 "height": 480,
            //                                 "color_name": "Purple"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 132314,
            //                     "editions": [
            //                         {
            //                             "pages": 318,
            //                             "id": 31887748
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2902055,
            //                         "url": "https://assets.hardcover.app/edition/30510372/5dea392164bc8a351c0606033069daba8e53db7c.jpeg",
            //                         "color": "#757a7d",
            //                         "width": 326,
            //                         "height": 500,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2019-11-18",
            //             "edition": {
            //                 "title": "The Remains of the Day",
            //                 "pages": 258,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "kazuo-ishiguro",
            //                             "name": "Kazuo Ishiguro",
            //                             "cachedImage": {
            //                                 "id": 34991,
            //                                 "url": "https://assets.hardcover.app/authors/204396/6597550-L.jpg",
            //                                 "color": "#ad0911",
            //                                 "width": 360,
            //                                 "height": 480,
            //                                 "color_name": "Purple"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 136692,
            //                     "editions": [
            //                         {
            //                             "pages": 301,
            //                             "id": 28305851
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 1665791,
            //                         "url": "https://assets.hardcover.app/editions/30401512/5249964714009887-57934597.jpg",
            //                         "color": "#f1f1ef",
            //                         "width": 548,
            //                         "height": 851,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2023-02-18",
            //             "edition": {
            //                 "title": "Accelerate: Building and Scaling High-Performing Technology Organizations",
            //                 "pages": 288,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "nicole-forsgren",
            //                             "name": "Nicole Forsgren",
            //                             "cachedImage": {
            //                                 "id": 275046,
            //                                 "url": "https://assets.hardcover.app/books/248147/2410978-L.jpg",
            //                                 "color": "#565758",
            //                                 "width": 310,
            //                                 "height": 500,
            //                                 "color_name": "Purple"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "jez-humble",
            //                             "name": "Jez Humble",
            //                             "cachedImage": {
            //                                 "id": 275051,
            //                                 "url": "https://assets.hardcover.app/books/248152/10033898-L.jpg",
            //                                 "color": "#5d5748",
            //                                 "width": 396,
            //                                 "height": 500,
            //                                 "color_name": "Brown"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "gene-kim",
            //                             "name": "Gene Kim",
            //                             "cachedImage": {
            //                                 "id": 259280,
            //                                 "url": "https://assets.hardcover.app/books/232699/6821316-L.jpg",
            //                                 "color": "#29535f",
            //                                 "width": 348,
            //                                 "height": 500,
            //                                 "color_name": "Purple"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 144635,
            //                     "editions": [
            //                         {
            //                             "pages": 288,
            //                             "id": 30404311
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2938770,
            //                         "url": "https://assets.hardcover.app/edition/30404311/44f8340f017ec854ecbfec519c1fc3a33ad0ca09.jpeg",
            //                         "color": "#c1d6d8",
            //                         "width": 333,
            //                         "height": 500,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2015-05-01",
            //             "edition": {
            //                 "title": "A Dance with Dragons",
            //                 "pages": 1154,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "george-r-r-martin",
            //                             "name": "George R.R. Martin",
            //                             "cachedImage": {
            //                                 "id": 31903,
            //                                 "url": "https://assets.hardcover.app/authors/78661/6155669-L.jpg",
            //                                 "color": "#ad6e52",
            //                                 "width": 200,
            //                                 "height": 257,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 144636,
            //                     "editions": [
            //                         {
            //                             "pages": 610,
            //                             "id": 30566521
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3972306,
            //                         "url": "https://assets.hardcover.app/editions/30399219/4515927511342250.jpg",
            //                         "color": "#acafaf",
            //                         "width": 1879,
            //                         "height": 2854,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2014-02-01",
            //             "edition": {
            //                 "title": "World War Z: An Oral History of the Zombie War",
            //                 "pages": 354,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "max-brooks",
            //                             "name": "Max Brooks",
            //                             "cachedImage": {
            //                                 "id": 91485,
            //                                 "url": "https://assets.hardcover.app/books/60160/3775989-L.jpg",
            //                                 "color": "#f9f9f9",
            //                                 "width": 128,
            //                                 "height": 195,
            //                                 "color_name": "White"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 147196,
            //                     "editions": [
            //                         {
            //                             "pages": 342,
            //                             "id": 1486075
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 175569,
            //                         "url": "https://assets.hardcover.app/books/147196/6994617-L.jpg",
            //                         "color": "#631202",
            //                         "width": 319,
            //                         "height": 500,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-07-19",
            //             "edition": {
            //                 "title": "The Memory Police",
            //                 "pages": 289,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "yoko-ogawa-b060fa16-bb6d-4b9c-ac65-63e1d53fbb2d",
            //                             "name": "Yōko Ogawa",
            //                             "cachedImage": {
            //                                 "id": 31761,
            //                                 "url": "https://assets.hardcover.app/authors/71999/8142025-L.jpg",
            //                                 "color": "#c2c4ba",
            //                                 "width": 199,
            //                                 "height": 249,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "stephen-snyder-7776fafe-53e0-4dd1-8e42-52559d2f9a2b",
            //                             "name": "Stephen    Snyder",
            //                             "cachedImage": {
            //                                 "id": 282332,
            //                                 "url": "https://assets.hardcover.app/books/255690/860587-L.jpg",
            //                                 "color": "#d7c09d",
            //                                 "width": 307,
            //                                 "height": 500,
            //                                 "color_name": "Silver"
            //                             }
            //                         },
            //                         "contribution": "Translator"
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "markus-juslin",
            //                             "name": "Markus Juslin",
            //                             "cachedImage": {}
            //                         },
            //                         "contribution": "Translator"
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 150531,
            //                     "editions": [
            //                         {
            //                             "pages": 288,
            //                             "id": 12970283
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2924726,
            //                         "url": "https://assets.hardcover.app/external_data/45951583/f8c2899b7d2fbe2fef3ccce33df90c50c2d4c3e3.jpeg",
            //                         "color": "#c6af92",
            //                         "width": 329,
            //                         "height": 500,
            //                         "color_name": "Silver"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2020-06-25",
            //             "edition": {
            //                 "title": "A Scanner Darkly",
            //                 "pages": 217,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "philip-k-dick",
            //                             "name": "Philip K. Dick",
            //                             "cachedImage": {
            //                                 "id": 31753,
            //                                 "url": "https://assets.hardcover.app/authors/71840/6295259-L.jpg",
            //                                 "color": "#a9a9a9",
            //                                 "width": 300,
            //                                 "height": 389,
            //                                 "color_name": "Silver"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 152062,
            //                     "editions": [
            //                         {
            //                             "pages": 291,
            //                             "id": 11304041
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2924879,
            //                         "url": "https://assets.hardcover.app/edition/30394702/7993da38a2aae32e2eafb8e00959310ece90b37b.jpeg",
            //                         "color": "#656566",
            //                         "width": 326,
            //                         "height": 500,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-06-08",
            //             "edition": {
            //                 "title": "Washington Black",
            //                 "pages": 334,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "esi-edugyan",
            //                             "name": "Esi Edugyan",
            //                             "cachedImage": {
            //                                 "id": 130930,
            //                                 "url": "https://assets.hardcover.app/books/101026/1314652-L.jpg",
            //                                 "color": "#958d03",
            //                                 "width": 325,
            //                                 "height": 475,
            //                                 "color_name": "Brown"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 169268,
            //                     "editions": [
            //                         {
            //                             "pages": 432,
            //                             "id": 31659284
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2268297,
            //                         "url": "https://assets.hardcover.app/external_data/42083209/022425c5ba572bfe4d919046aa8b0b475e16682a.jpeg",
            //                         "color": "#bbbbbb",
            //                         "width": 335,
            //                         "height": 499,
            //                         "color_name": "Silver"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2021-08-01",
            //             "edition": {
            //                 "title": "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change",
            //                 "pages": 244,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "camille-fournier",
            //                             "name": "Camille Fournier",
            //                             "cachedImage": {
            //                                 "id": 212418,
            //                                 "url": "https://assets.hardcover.app/books/185221/8749620-L.jpg",
            //                                 "color": "#c7b09a",
            //                                 "width": 309,
            //                                 "height": 500,
            //                                 "color_name": "Silver"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 172198,
            //                     "editions": [
            //                         {
            //                             "pages": 244,
            //                             "id": 30439429
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2948741,
            //                         "url": "https://assets.hardcover.app/edition/30401041/08ec59bb97efa9b2b6fb604fb0d83a7e6614a17d.jpeg",
            //                         "color": "#003a99",
            //                         "width": 333,
            //                         "height": 500,
            //                         "color_name": "Blue"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-10-16",
            //             "edition": {
            //                 "title": "Piranesi",
            //                 "pages": 273,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "susanna-clarke",
            //                             "name": "Susanna Clarke",
            //                             "cachedImage": {
            //                                 "id": 32054,
            //                                 "url": "https://assets.hardcover.app/authors/86621/7284260-L.jpg",
            //                                 "color": "#bbbbbb",
            //                                 "width": 150,
            //                                 "height": 160,
            //                                 "color_name": "Silver"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 175280,
            //                     "editions": [
            //                         {
            //                             "pages": 349,
            //                             "id": 31197105
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3730240,
            //                         "url": "https://assets.hardcover.app/editions/30480425/2930791690069990.jpg",
            //                         "color": "#906806",
            //                         "width": 1650,
            //                         "height": 2475,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2024-03-05",
            //             "edition": {
            //                 "title": "Close to the Knives: A Memoir of Disintegration",
            //                 "pages": 288,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "david-wojnarowicz",
            //                             "name": "David Wojnarowicz",
            //                             "cachedImage": {
            //                                 "id": 116531,
            //                                 "url": "https://assets.hardcover.app/books/86091/6773436-L.jpg",
            //                                 "color": "#c9e5df",
            //                                 "width": 425,
            //                                 "height": 500,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 201123,
            //                     "editions": [
            //                         {
            //                             "pages": 288,
            //                             "id": 11981615
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 493223,
            //                         "url": "https://assets.hardcover.app/edition/11981615/420100-L.jpg",
            //                         "color": "#b0b7b9",
            //                         "width": 309,
            //                         "height": 475,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2021-07-25",
            //             "edition": {
            //                 "title": "Kafka on the Shore",
            //                 "pages": 467,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "haruki-murakami",
            //                             "name": "Haruki Murakami",
            //                             "cachedImage": {
            //                                 "id": 1709616,
            //                                 "url": "https://assets.hardcover.app/author/209137/3202329615577719.jpg",
            //                                 "color": "#d8d8da",
            //                                 "width": 1704,
            //                                 "height": 1704,
            //                                 "color_name": "Pink"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "philip-gabriel",
            //                             "name": "Philip Gabriel",
            //                             "cachedImage": {
            //                                 "id": 1709621,
            //                                 "url": "https://assets.hardcover.app/author/251501/1250185275283795.jpg",
            //                                 "color": "#67442a",
            //                                 "width": 479,
            //                                 "height": 488,
            //                                 "color_name": "Brown"
            //                             }
            //                         },
            //                         "contribution": "Translator"
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 207877,
            //                     "editions": [
            //                         {
            //                             "pages": 198,
            //                             "id": 31185867
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3676952,
            //                         "url": "https://assets.hardcover.app/editions/31491275/5427275157910645.jpg",
            //                         "color": "#486fa9",
            //                         "width": 648,
            //                         "height": 1000,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2023-12-05",
            //             "edition": {
            //                 "title": "Things We Lost in the Fire",
            //                 "pages": 210,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "megan-mcdowell",
            //                             "name": "Megan McDowell",
            //                             "cachedImage": {
            //                                 "id": 8008,
            //                                 "url": "https://assets.hardcover.app/books/253093/7117232-L.jpg",
            //                                 "color": "#71769b",
            //                                 "width": 329,
            //                                 "height": 500,
            //                                 "color_name": "Purple"
            //                             }
            //                         },
            //                         "contribution": "Translator"
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "mariana-enriquez",
            //                             "name": "Mariana Enriquez",
            //                             "cachedImage": {
            //                                 "id": 269163,
            //                                 "url": "https://assets.hardcover.app/books/242047/10817057-L.jpg",
            //                                 "color": "#4f1409",
            //                                 "width": 312,
            //                                 "height": 500,
            //                                 "color_name": "Black"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 238887,
            //                     "editions": [
            //                         {
            //                             "pages": 210,
            //                             "id": 30403194
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 4549317,
            //                         "url": "https://assets.hardcover.app/edition/30403194/381f8c2c697bad6e0279476fd9af1db641c869a3.jpeg",
            //                         "color": "#f0eacd",
            //                         "width": 331,
            //                         "height": 500,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-05-29",
            //             "edition": {
            //                 "title": "New Dark Age: Technology and the End of the Future",
            //                 "pages": 348,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "james-bridle",
            //                             "name": "James Bridle",
            //                             "cachedImage": {
            //                                 "id": 121379,
            //                                 "url": "https://assets.hardcover.app/books/91120/10364476-L.jpg",
            //                                 "color": "#635216",
            //                                 "width": 394,
            //                                 "height": 500,
            //                                 "color_name": "Brown"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 247366,
            //                     "editions": [
            //                         {
            //                             "pages": 348,
            //                             "id": 30401489
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 887237,
            //                         "url": "https://assets.hardcover.app/external_data/59859105/665ab6d929d451954048197af4bfa0e6f1881312.jpeg",
            //                         "color": "#457a2a",
            //                         "width": 128,
            //                         "height": 199,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-07-03",
            //             "edition": {
            //                 "title": "Gilead",
            //                 "pages": 289,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "marilynne-robinson-e53b381b-a945-4fe7-90c8-a2ae8e0a0cb6",
            //                             "name": "Marilynne Robinson",
            //                             "cachedImage": {
            //                                 "id": 173769,
            //                                 "url": "https://assets.hardcover.app/books/145325/8480652-L.jpg",
            //                                 "color": "#73495d",
            //                                 "width": 333,
            //                                 "height": 500,
            //                                 "color_name": "Purple"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 247430,
            //                     "editions": [
            //                         {
            //                             "pages": 272,
            //                             "id": 3484953
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 918043,
            //                         "url": "https://assets.hardcover.app/external_data/59874213/23b8a204904cfca7abcba49888af0b4badbd1873.jpeg",
            //                         "color": "#274852",
            //                         "width": 98,
            //                         "height": 150,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2018-12-30",
            //             "edition": {
            //                 "title": "Up Jumps the Devil",
            //                 "pages": 360,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "michael-poore",
            //                             "name": "Michael Poore",
            //                             "cachedImage": {
            //                                 "id": 153461,
            //                                 "url": "https://assets.hardcover.app/books/124337/8665540-L.jpg",
            //                                 "color": "#f5f5f5",
            //                                 "width": 386,
            //                                 "height": 500,
            //                                 "color_name": "White"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 247561,
            //                     "editions": [
            //                         {
            //                             "pages": 360,
            //                             "id": 31780142
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 797005,
            //                         "url": "https://assets.hardcover.app/edition/4683719/9971903-L.jpg",
            //                         "color": "#716e52",
            //                         "width": 330,
            //                         "height": 500,
            //                         "color_name": "Gray"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-09-29",
            //             "edition": {
            //                 "title": "This Is How You Lose the Time War",
            //                 "pages": 208,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "amal-el-mohtar",
            //                             "name": "Amal El-Mohtar",
            //                             "cachedImage": {
            //                                 "id": 224179,
            //                                 "url": "https://assets.hardcover.app/books/197365/9348594-L.jpg",
            //                                 "color": "#576728",
            //                                 "width": 319,
            //                                 "height": 500,
            //                                 "color_name": "Brown"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "max-gladstone",
            //                             "name": "Max Gladstone",
            //                             "cachedImage": {
            //                                 "id": 195508,
            //                                 "url": "https://assets.hardcover.app/books/167787/8620122-L.jpg",
            //                                 "color": "#fefefe",
            //                                 "width": 329,
            //                                 "height": 500,
            //                                 "color_name": "White"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 249097,
            //                     "editions": [
            //                         {
            //                             "pages": 198,
            //                             "id": 31544960
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2794144,
            //                         "url": "https://assets.hardcover.app/editions/30404891/9271700825157594.jpg",
            //                         "color": "#89cbd6",
            //                         "width": 1400,
            //                         "height": 2101,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2020-08-22",
            //             "edition": {
            //                 "title": "The Man Who Spoke Snakish",
            //                 "pages": 442,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "christopher-moseley-translator-andrus-kivira-hk",
            //                             "name": "Christopher Moseley (translator) Andrus KivirÃ¤hk",
            //                             "cachedImage": {
            //                                 "id": 251238,
            //                                 "url": "https://assets.hardcover.app/books/224398/8751264-L.jpg",
            //                                 "color": "#8c6e6c",
            //                                 "width": 350,
            //                                 "height": 500,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "andrus-kivirahk",
            //                             "name": "Andrus Kivirähk",
            //                             "cachedImage": {
            //                                 "id": 287910,
            //                                 "url": "https://assets.hardcover.app/books/261473/8357759-L.jpg",
            //                                 "color": "#f3e7ca",
            //                                 "width": 305,
            //                                 "height": 500,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "andrus-kivirahk-1514e8c4-298e-4a09-9fcc-4e009d4f05f5",
            //                             "name": "Andrus Kivirahk",
            //                             "cachedImage": {
            //                                 "id": 295077,
            //                                 "url": "https://assets.hardcover.app/books/268890/6952154-L.jpg",
            //                                 "color": "#f4f4da",
            //                                 "width": 408,
            //                                 "height": 500,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 266385,
            //                     "editions": [
            //                         {
            //                             "pages": 442,
            //                             "id": 19131877
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 568270,
            //                         "url": "https://assets.hardcover.app/edition/895879/8433249-L.jpg",
            //                         "color": "#172704",
            //                         "width": 327,
            //                         "height": 500,
            //                         "color_name": "Black"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-04-10",
            //             "edition": {
            //                 "title": "Klara and the Sun",
            //                 "pages": 303,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "kazuo-ishiguro",
            //                             "name": "Kazuo Ishiguro",
            //                             "cachedImage": {
            //                                 "id": 34991,
            //                                 "url": "https://assets.hardcover.app/authors/204396/6597550-L.jpg",
            //                                 "color": "#ad0911",
            //                                 "width": 360,
            //                                 "height": 480,
            //                                 "color_name": "Purple"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 266607,
            //                     "editions": [
            //                         {
            //                             "pages": 418,
            //                             "id": 30399733
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 1009437,
            //                         "url": "https://assets.hardcover.app/external_data/59592031/11d4c25aa782acfbff944edbec1e89a6dbdbaace.jpeg",
            //                         "color": "#d70909",
            //                         "width": 128,
            //                         "height": 197,
            //                         "color_name": "Red"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2021-05-26",
            //             "edition": {
            //                 "title": "Do Androids Dream of Electric Sheep?",
            //                 "pages": 258,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "philip-k-dick",
            //                             "name": "Philip K. Dick",
            //                             "cachedImage": {
            //                                 "id": 31753,
            //                                 "url": "https://assets.hardcover.app/authors/71840/6295259-L.jpg",
            //                                 "color": "#a9a9a9",
            //                                 "width": 300,
            //                                 "height": 389,
            //                                 "color_name": "Silver"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 268150,
            //                     "editions": [
            //                         {
            //                             "pages": 223,
            //                             "id": 24366858
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 1441014,
            //                         "url": "https://assets.hardcover.app/editions/24366858/2403087114756371-912qCxdgTRL._SL1500_.jpg",
            //                         "color": "#b2b3bb",
            //                         "width": 1000,
            //                         "height": 1500,
            //                         "color_name": "Pink"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-02-01",
            //             "edition": {
            //                 "title": "Silence",
            //                 "pages": 219,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "shusaku-endo",
            //                             "name": "Shūsaku Endō",
            //                             "cachedImage": {
            //                                 "id": 34234,
            //                                 "url": "https://assets.hardcover.app/authors/173577/8139748-L.jpg",
            //                                 "color": "#272727",
            //                                 "width": 183,
            //                                 "height": 281,
            //                                 "color_name": "Black"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "william-johnston",
            //                             "name": "William Johnston",
            //                             "cachedImage": {
            //                                 "id": 207384,
            //                                 "url": "https://assets.hardcover.app/books/180028/2886373-L.jpg",
            //                                 "color": "#b8947f",
            //                                 "width": 313,
            //                                 "height": 500,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": "Translator"
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 283516,
            //                     "editions": [
            //                         {
            //                             "pages": 304,
            //                             "id": 31727805
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 494679,
            //                         "url": "https://assets.hardcover.app/edition/30401021/6601656-L.jpg",
            //                         "color": "#7c704a",
            //                         "width": 317,
            //                         "height": 500,
            //                         "color_name": "Gray"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2015-02-01",
            //             "edition": {
            //                 "title": "The Martian",
            //                 "pages": 384,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "andy-weir",
            //                             "name": "Andy Weir",
            //                             "cachedImage": {
            //                                 "id": 32982,
            //                                 "url": "https://assets.hardcover.app/authors/123645/8137363-L.jpg",
            //                                 "color": "#9c9c9b",
            //                                 "width": 333,
            //                                 "height": 500,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 292354,
            //                     "editions": [
            //                         {
            //                             "pages": 371,
            //                             "id": 31654581
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3645365,
            //                         "url": "https://assets.hardcover.app/editions/21716111/5323176149970177.jpg",
            //                         "color": "#c05011",
            //                         "width": 790,
            //                         "height": 1200,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2015-04-01",
            //             "edition": {
            //                 "title": "Genghis",
            //                 "pages": 528,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "conn-iggulden",
            //                             "name": "Conn Iggulden",
            //                             "cachedImage": {
            //                                 "id": 128887,
            //                                 "url": "https://assets.hardcover.app/books/98909/6705622-L.jpg",
            //                                 "color": "#2c5c40",
            //                                 "width": 331,
            //                                 "height": 500,
            //                                 "color_name": "Green"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 303560,
            //                     "editions": [
            //                         {
            //                             "pages": 405,
            //                             "id": 6533062
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 574010,
            //                         "url": "https://assets.hardcover.app/edition/23895900/240249-L.jpg",
            //                         "color": "#d0ceb7",
            //                         "width": 343,
            //                         "height": 500,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         },
            //         {
            //             "finished_at": "2015-03-01",
            //             "edition": {
            //                 "title": "Genghis",
            //                 "pages": 387,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "conn-iggulden",
            //                             "name": "Conn Iggulden",
            //                             "cachedImage": {
            //                                 "id": 128887,
            //                                 "url": "https://assets.hardcover.app/books/98909/6705622-L.jpg",
            //                                 "color": "#2c5c40",
            //                                 "width": 331,
            //                                 "height": 500,
            //                                 "color_name": "Green"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 303560,
            //                     "editions": [
            //                         {
            //                             "pages": 405,
            //                             "id": 6533062
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 574010,
            //                         "url": "https://assets.hardcover.app/edition/23895900/240249-L.jpg",
            //                         "color": "#d0ceb7",
            //                         "width": 343,
            //                         "height": 500,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2021-01-09",
            //             "edition": {
            //                 "title": "A Severed Head",
            //                 "pages": 224,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "iris-murdoch-7445930e-6daf-4085-853f-0348cb4ecadc",
            //                             "name": "Iris Murdoch",
            //                             "cachedImage": {
            //                                 "id": 33748,
            //                                 "url": "https://assets.hardcover.app/authors/153681/6289698-L.jpg",
            //                                 "color": "#c2c2c2",
            //                                 "width": 450,
            //                                 "height": 447,
            //                                 "color_name": "Silver"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 315392,
            //                     "editions": [
            //                         {
            //                             "pages": 251,
            //                             "id": 27313586
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3128949,
            //                         "url": "https://assets.hardcover.app/edition/15490856/2f86c97ddfaf714688d26c44bc18f27dc1080e06.jpeg",
            //                         "color": "#f7f6f2",
            //                         "width": 327,
            //                         "height": 500,
            //                         "color_name": "Beige"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2015-01-01",
            //             "edition": {
            //                 "title": "The Chrysalids",
            //                 "pages": 238,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "john-wyndham-759231a7-155b-4f39-867e-9d1751cb1430",
            //                             "name": "John Wyndham",
            //                             "cachedImage": {
            //                                 "id": 33516,
            //                                 "url": "https://assets.hardcover.app/authors/143591/9085264-L.jpg",
            //                                 "color": "#bcbbb0",
            //                                 "width": 220,
            //                                 "height": 250,
            //                                 "color_name": "Silver"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 326093,
            //                     "editions": [
            //                         {
            //                             "pages": 217,
            //                             "id": 31517208
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 4178561,
            //                         "url": "https://assets.hardcover.app/edition/21439610/628f97a07af48a4a90ce851f1c15cadee6ba5661.jpeg",
            //                         "color": "#791513",
            //                         "width": 313,
            //                         "height": 500,
            //                         "color_name": "Brown"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2023-10-20",
            //             "edition": {
            //                 "title": "The Butcher Boy",
            //                 "pages": null,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "patrick-mccabe",
            //                             "name": "Patrick McCabe",
            //                             "cachedImage": {
            //                                 "id": 179993,
            //                                 "url": "https://assets.hardcover.app/books/151778/8715833-L.jpg",
            //                                 "color": "#fbfbfb",
            //                                 "width": 386,
            //                                 "height": 500,
            //                                 "color_name": "White"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 329520,
            //                     "editions": [
            //                         {
            //                             "pages": 224,
            //                             "id": 31818174
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2645314,
            //                         "url": "https://assets.hardcover.app/external_data/60883654/ab9da661026b3c4e788c7ae347a9c5e15a54274f.jpeg",
            //                         "color": "#d4b262",
            //                         "width": 98,
            //                         "height": 151,
            //                         "color_name": "Orange"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2021-10-21",
            //             "edition": {
            //                 "title": "The English Patient",
            //                 "pages": 324,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "michael-ondaatje-38d38202-6817-491f-8755-4494fd8c390f",
            //                             "name": "Michael Ondaatje",
            //                             "cachedImage": {
            //                                 "id": 262347,
            //                                 "url": "https://assets.hardcover.app/books/235846/10809897-L.jpg",
            //                                 "color": "#492620",
            //                                 "width": 304,
            //                                 "height": 500,
            //                                 "color_name": "Black"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 331159,
            //                     "editions": [
            //                         {
            //                             "pages": 315,
            //                             "id": 19787820
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 453099,
            //                         "url": "https://assets.hardcover.app/edition/4604261/488233-L.jpg",
            //                         "color": "#343338",
            //                         "width": 164,
            //                         "height": 258,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-01-06",
            //             "edition": {
            //                 "title": "Goodbye to Berlin",
            //                 "pages": 208,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "christopher-isherwood",
            //                             "name": "Christopher Isherwood",
            //                             "cachedImage": {
            //                                 "id": 164801,
            //                                 "url": "https://assets.hardcover.app/books/136076/9313681-L.jpg",
            //                                 "color": "#4f1407",
            //                                 "width": 329,
            //                                 "height": 500,
            //                                 "color_name": "Black"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 335593,
            //                     "editions": [
            //                         {
            //                             "pages": 272,
            //                             "id": 31665182
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 694192,
            //                         "url": "https://assets.hardcover.app/edition/30606424/content.jpeg",
            //                         "color": "#635859",
            //                         "width": 128,
            //                         "height": 200,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2016-06-01",
            //             "edition": {
            //                 "title": "The Revenant",
            //                 "pages": 273,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "michael-punke",
            //                             "name": "Michael Punke",
            //                             "cachedImage": {
            //                                 "id": 163410,
            //                                 "url": "https://assets.hardcover.app/books/134624/9280491-L.jpg",
            //                                 "color": "#6b0d0a",
            //                                 "width": 332,
            //                                 "height": 499,
            //                                 "color_name": "Brown"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 337951,
            //                     "editions": [
            //                         {
            //                             "pages": 308,
            //                             "id": 30591401
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 1109532,
            //                         "url": "https://assets.hardcover.app/external_data/59965872/97fe997b415c0e50f72742f1a2234f135fc7e346.jpeg",
            //                         "color": "#c3a36f",
            //                         "width": 128,
            //                         "height": 193,
            //                         "color_name": "Gray"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2019-07-10",
            //             "edition": {
            //                 "title": "The Bell Jar",
            //                 "pages": 240,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "sylvia-plath",
            //                             "name": "Sylvia Plath",
            //                             "cachedImage": {
            //                                 "id": 35419,
            //                                 "url": "https://assets.hardcover.app/authors/224171/6387971-L.jpg",
            //                                 "color": "#a8a8a8",
            //                                 "width": 200,
            //                                 "height": 250,
            //                                 "color_name": "Silver"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 342142,
            //                     "editions": [
            //                         {
            //                             "pages": 224,
            //                             "id": 31526388
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 1702052,
            //                         "url": "https://assets.hardcover.app/editions/26012618/337747029847346-thebelljar2.jpg",
            //                         "color": "#55646a",
            //                         "width": 426,
            //                         "height": 600,
            //                         "color_name": "Purple"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2020-04-16",
            //             "edition": {
            //                 "title": "The First Fifteen Lives of Harry August",
            //                 "pages": 416,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "claire-north",
            //                             "name": "Claire North",
            //                             "cachedImage": {
            //                                 "id": 149008,
            //                                 "url": "https://assets.hardcover.app/books/119711/7131131-L.jpg",
            //                                 "color": "#df4500",
            //                                 "width": 312,
            //                                 "height": 500,
            //                                 "color_name": "Orange"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 345034,
            //                     "editions": [
            //                         {
            //                             "pages": 405,
            //                             "id": 17811168
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2263932,
            //                         "url": "https://assets.hardcover.app/external_data/35048967/9688fc19a48b133fe8bd4dad8063ad7af5ec0588.jpeg",
            //                         "color": "#80836c",
            //                         "width": 329,
            //                         "height": 500,
            //                         "color_name": "Gray"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2022-07-24",
            //             "edition": {
            //                 "title": "Tokyo Express",
            //                 "pages": 175,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "seicho-matsumoto",
            //                             "name": "Seichō Matsumoto",
            //                             "cachedImage": {
            //                                 "id": 32574,
            //                                 "url": "https://assets.hardcover.app/authors/108190/8141022-L.jpg",
            //                                 "color": "#575b5c",
            //                                 "width": 394,
            //                                 "height": 500,
            //                                 "color_name": "Purple"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "gala-maria-follaco",
            //                             "name": "Gala Maria Follaco",
            //                             "cachedImage": {}
            //                         },
            //                         "contribution": "Translator"
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "pc-blum",
            //                             "name": "P.C. Blum",
            //                             "cachedImage": {}
            //                         },
            //                         "contribution": "Translator"
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 354321,
            //                     "editions": [
            //                         {
            //                             "pages": 129,
            //                             "id": 31538091
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 2619168,
            //                         "url": "https://assets.hardcover.app/external_data/60863176/a0723c5df7106b4c13221574840a1bf63a0543c1.jpeg",
            //                         "color": "#707a6b",
            //                         "width": 98,
            //                         "height": 158,
            //                         "color_name": "Gray"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2016-01-01",
            //             "edition": {
            //                 "title": "Animal Farm",
            //                 "pages": 141,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "george-orwell",
            //                             "name": "George Orwell",
            //                             "cachedImage": {
            //                                 "id": 33249,
            //                                 "url": "https://assets.hardcover.app/authors/133899/9160343-L.jpg",
            //                                 "color": "#739594",
            //                                 "width": 500,
            //                                 "height": 281,
            //                                 "color_name": "Purple"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "russell-baker",
            //                             "name": "Russell Baker",
            //                             "cachedImage": {
            //                                 "id": 266111,
            //                                 "url": "https://assets.hardcover.app/books/238897/8840677-L.jpg",
            //                                 "color": "#f9c01c",
            //                                 "width": 402,
            //                                 "height": 500,
            //                                 "color_name": "Gold"
            //                             }
            //                         },
            //                         "contribution": "Preface"
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "cm-woodhouse",
            //                             "name": "C.M. Woodhouse",
            //                             "cachedImage": {
            //                                 "id": 289828,
            //                                 "url": "https://assets.hardcover.app/books/263451/306218-L.jpg",
            //                                 "color": "#dfebec",
            //                                 "width": 331,
            //                                 "height": 500,
            //                                 "color_name": "Beige"
            //                             }
            //                         },
            //                         "contribution": "Introduction"
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 356467,
            //                     "editions": [
            //                         {
            //                             "pages": 140,
            //                             "id": 29268212
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3044979,
            //                         "url": "https://assets.hardcover.app/edition/8386329/ac5256f9f23884b904f3c1937bdc47cb1f1a0cee.jpeg",
            //                         "color": "#ce0000",
            //                         "width": 340,
            //                         "height": 500,
            //                         "color_name": "Red"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2020-08-10",
            //             "edition": {
            //                 "title": "Convenience Store Woman",
            //                 "pages": 163,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "sayaka-murata",
            //                             "name": "Sayaka Murata",
            //                             "cachedImage": {
            //                                 "id": 104928,
            //                                 "url": "https://assets.hardcover.app/books/74100/8480527-L.jpg",
            //                                 "color": "#e6b966",
            //                                 "width": 333,
            //                                 "height": 500,
            //                                 "color_name": "Gold"
            //                             }
            //                         },
            //                         "contribution": null
            //                     },
            //                     {
            //                         "author": {
            //                             "slug": "ginny-tapley-takemori",
            //                             "name": "Ginny Tapley Takemori",
            //                             "cachedImage": {
            //                                 "id": 282560,
            //                                 "url": "https://assets.hardcover.app/books/255929/6820697-L.jpg",
            //                                 "color": "#48474b",
            //                                 "width": 307,
            //                                 "height": 500,
            //                                 "color_name": "Purple"
            //                             }
            //                         },
            //                         "contribution": "Translator"
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 357003,
            //                     "editions": [
            //                         {
            //                             "pages": 176,
            //                             "id": 7526847
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 454551,
            //                         "url": "https://assets.hardcover.app/edition/19235450/9202388-L.jpg",
            //                         "color": "#e2ca04",
            //                         "width": 315,
            //                         "height": 500,
            //                         "color_name": "Gold"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     "user_book_reads": []
            // },
            // {
            //     "user_book_reads": [
            //         {
            //             "finished_at": "2023-01-12",
            //             "edition": {
            //                 "title": "The Grass Is Singing",
            //                 "pages": null,
            //                 "cached_contributors": [
            //                     {
            //                         "author": {
            //                             "slug": "doris-lessing",
            //                             "name": "Doris Lessing",
            //                             "cachedImage": {
            //                                 "id": 32939,
            //                                 "url": "https://assets.hardcover.app/authors/122107/6665537-L.jpg",
            //                                 "color": "#5a5a5a",
            //                                 "width": 340,
            //                                 "height": 462,
            //                                 "color_name": "Gray"
            //                             }
            //                         },
            //                         "contribution": null
            //                     }
            //                 ],
            //                 "book": {
            //                     "id": 358921,
            //                     "editions": [
            //                         {
            //                             "pages": 218,
            //                             "id": 1570800
            //                         }
            //                     ],
            //                     "cached_image": {
            //                         "id": 3863545,
            //                         "url": "https://assets.hardcover.app/edition/15523151/b3a1d8a696ba86a4823eb5d393a122134172caf4.jpeg",
            //                         "color": "#566a63",
            //                         "width": 308,
            //                         "height": 500,
            //                         "color_name": "Green"
            //                     }
            //                 }
            //             }
            //         }
            //     ]
            // },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-05-21",
                        "edition": {
                            "title": "Into the Wild",
                            "pages": 207,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "jon-krakauer-7a73d0a0-9dd7-4c04-82be-12d7002c0bc3",
                                        "name": "Jon Krakauer",
                                        "cachedImage": {
                                            "id": 32646,
                                            "url": "https://assets.hardcover.app/authors/110747/7323054-L.jpg",
                                            "color": "#535353",
                                            "width": 143,
                                            "height": 200,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 368611,
                                "editions": [
                                    {
                                        "pages": 205,
                                        "id": 5356607
                                    }
                                ],
                                "cached_image": {
                                    "id": 434281,
                                    "url": "https://assets.hardcover.app/edition/22348762/417895-L.jpg",
                                    "color": "#d1ddd9",
                                    "width": 308,
                                    "height": 475,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-12-13",
                        "edition": {
                            "title": "The Island at the Center of the World",
                            "pages": 384,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "russell-shorto",
                                        "name": "Russell Shorto",
                                        "cachedImage": {
                                            "id": 150102,
                                            "url": "https://assets.hardcover.app/books/120846/169992-L.jpg",
                                            "color": "#01494d",
                                            "width": 500,
                                            "height": 407,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 369074,
                                "editions": [
                                    {
                                        "pages": 384,
                                        "id": 23512873
                                    }
                                ],
                                "cached_image": {
                                    "id": 583369,
                                    "url": "https://assets.hardcover.app/edition/9688494/1472215-L.jpg",
                                    "color": "#efe1aa",
                                    "width": 375,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-09-02",
                        "edition": {
                            "title": "The Signal and the Noise",
                            "pages": 544,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "nate-silver",
                                        "name": "Nate Silver",
                                        "cachedImage": {
                                            "id": 157361,
                                            "url": "https://assets.hardcover.app/books/128351/6863348-L.jpg",
                                            "color": "#856843",
                                            "width": 354,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 374233,
                                "editions": [
                                    {
                                        "pages": 545,
                                        "id": 30399532
                                    }
                                ],
                                "cached_image": {
                                    "id": 730975,
                                    "url": "https://assets.hardcover.app/edition/30399532/a6647e0f47dc301be0f986c12a42f0760c9fa343.jpeg",
                                    "color": "#eddb01",
                                    "width": 331,
                                    "height": 500,
                                    "color_name": "Gold"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-07-08",
                        "edition": {
                            "title": "Brave New World",
                            "pages": 290,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "aldous-huxley",
                                        "name": "Aldous Huxley",
                                        "cachedImage": {
                                            "id": 32582,
                                            "url": "https://assets.hardcover.app/authors/108633/6712758-L.jpg",
                                            "color": "#656251",
                                            "width": 200,
                                            "height": 250,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 374328,
                                "editions": [
                                    {
                                        "pages": 332,
                                        "id": 3299811
                                    }
                                ],
                                "cached_image": {
                                    "id": 3995162,
                                    "url": "https://assets.hardcover.app/edition/3299811/3e542fb1d6aed92c0f4e9cd0ac9b2f6892ca97a3.jpeg",
                                    "color": "#f3f3f3",
                                    "width": 334,
                                    "height": 500,
                                    "color_name": "White"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-01-05",
                        "edition": {
                            "title": "Lord of the Flies",
                            "pages": 182,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "william-golding",
                                        "name": "William Golding",
                                        "cachedImage": {
                                            "id": 34501,
                                            "url": "https://assets.hardcover.app/authors/184944/6824897-L.jpg",
                                            "color": "#67645b",
                                            "width": 354,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 374481,
                                "editions": [
                                    {
                                        "pages": 250,
                                        "id": 31654619
                                    }
                                ],
                                "cached_image": {
                                    "id": 1465954,
                                    "url": "https://assets.hardcover.app/editions/5311461/6685526815468095-8016155.jpg",
                                    "color": "#e8eee1",
                                    "width": 600,
                                    "height": 1021,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-09-07",
                        "edition": {
                            "title": "Rosemary's Baby",
                            "pages": 324,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "ira-levin",
                                        "name": "Ira Levin",
                                        "cachedImage": {
                                            "id": 35459,
                                            "url": "https://assets.hardcover.app/authors/226778/9052542-L.jpg",
                                            "color": "#a44529",
                                            "width": 220,
                                            "height": 220,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 375205,
                                "editions": [
                                    {
                                        "pages": 324,
                                        "id": 31524928
                                    }
                                ],
                                "cached_image": {
                                    "id": 1240881,
                                    "url": "https://assets.hardcover.app/external_data/59362246/03d738dbb6063877d73531bebc757e96c450fa9c.jpeg",
                                    "color": "#b14a12",
                                    "width": 98,
                                    "height": 152,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-01-28",
                        "edition": {
                            "title": "Sapiens: A Brief History of Humankind",
                            "pages": 512,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "yuval-noah-harari",
                                        "name": "Yuval Noah Harari",
                                        "cachedImage": {
                                            "id": 34105,
                                            "url": "https://assets.hardcover.app/authors/167616/7914208-L.jpg",
                                            "color": "#574429",
                                            "width": 334,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "prottasha-prachurjo-sayed-fayej-ahmed",
                                        "name": "Prottasha Prachurjo Sayed Fayej Ahmed",
                                        "cachedImage": {
                                            "id": 290147,
                                            "url": "https://assets.hardcover.app/books/263785/10430205-L.jpg",
                                            "color": "#4d2513",
                                            "width": 330,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 375634,
                                "editions": [
                                    {
                                        "pages": 464,
                                        "id": 31678905
                                    }
                                ],
                                "cached_image": {
                                    "id": 2248094,
                                    "url": "https://assets.hardcover.app/external_data/47475626/33e7e46f487646dbf8bcb1a2f7cfa1cc5ac5f07b.jpeg",
                                    "color": "#f4ece1",
                                    "width": 335,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-08-25",
                        "edition": {
                            "title": "Hot milk",
                            "pages": 217,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "deborah-levy",
                                        "name": "Deborah Levy",
                                        "cachedImage": {
                                            "id": 149272,
                                            "url": "https://assets.hardcover.app/books/119990/8691328-L.jpg",
                                            "color": "#232c3a",
                                            "width": 352,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 375712,
                                "editions": [
                                    {
                                        "pages": 218,
                                        "id": 31595137
                                    }
                                ],
                                "cached_image": {
                                    "id": 585283,
                                    "url": "https://assets.hardcover.app/edition/24083388/9080159-L.jpg",
                                    "color": "#482c1b",
                                    "width": 333,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-01-28",
                        "edition": {
                            "title": "Smart Cities",
                            "pages": 416,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "anthony-m-townsend",
                                        "name": "Anthony M. Townsend",
                                        "cachedImage": {
                                            "id": 167843,
                                            "url": "https://assets.hardcover.app/books/139221/3780982-L.jpg",
                                            "color": "#c9e0c2",
                                            "width": 128,
                                            "height": 167,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 376757,
                                "editions": [
                                    {
                                        "pages": 416,
                                        "id": 19821325
                                    }
                                ],
                                "cached_image": {
                                    "id": 804162,
                                    "url": "https://assets.hardcover.app/edition/19821325/7445045-L.jpg",
                                    "color": "#e1dfdb",
                                    "width": 266,
                                    "height": 400,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2014-10-01",
                        "edition": {
                            "title": "A Feast for Crows",
                            "pages": 1106,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "george-r-r-martin",
                                        "name": "George R.R. Martin",
                                        "cachedImage": {
                                            "id": 31903,
                                            "url": "https://assets.hardcover.app/authors/78661/6155669-L.jpg",
                                            "color": "#ad6e52",
                                            "width": 200,
                                            "height": 257,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 377011,
                                "editions": [
                                    {
                                        "pages": 488,
                                        "id": 31662210
                                    }
                                ],
                                "cached_image": {
                                    "id": 1964632,
                                    "url": "https://assets.hardcover.app/edition/31409255/86d3e8c97dfc68a8051629c820ada13d84f42158.jpeg",
                                    "color": "#4b2407",
                                    "width": 326,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-02-28",
                        "edition": {
                            "title": "The Great Gatsby",
                            "pages": 200,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "f-scott-fitzgerald",
                                        "name": "F. Scott Fitzgerald",
                                        "cachedImage": {
                                            "id": 32557,
                                            "url": "https://assets.hardcover.app/authors/107406/6292713-L.jpg",
                                            "color": "#555555",
                                            "width": 366,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 377193,
                                "editions": [
                                    {
                                        "pages": 242,
                                        "id": 30654663
                                    }
                                ],
                                "cached_image": {
                                    "id": 1415652,
                                    "url": "https://assets.hardcover.app/external_data/27597898/6cb93bdc8f29bc483f692644c829ab97a7f17716.jpeg",
                                    "color": "#998209",
                                    "width": 299,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-06-24",
                        "edition": {
                            "title": "The Handmaid's Tale",
                            "pages": 224,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "margaret-atwood",
                                        "name": "Margaret Atwood",
                                        "cachedImage": {
                                            "id": 31915,
                                            "url": "https://assets.hardcover.app/authors/78844/6155654-L.jpg",
                                            "color": "#cfcab9",
                                            "width": 170,
                                            "height": 266,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 377799,
                                "editions": [
                                    {
                                        "pages": 397,
                                        "id": 4490261
                                    }
                                ],
                                "cached_image": {
                                    "id": 2904685,
                                    "url": "https://assets.hardcover.app/edition/20879993/7be97c9457dd0572c4cf915cddc844a91a24dc24.jpeg",
                                    "color": "#ba0502",
                                    "width": 324,
                                    "height": 500,
                                    "color_name": "Red"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-04-12",
                        "edition": {
                            "title": "Range: Why Generalists Triumph in a Specialized World",
                            "pages": 352,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "david-epstein-40dc3dbb-e1dd-4281-b0af-ee5c58f6c07a",
                                        "name": "David   Epstein",
                                        "cachedImage": {
                                            "id": 280398,
                                            "url": "https://assets.hardcover.app/books/253691/10758893-L.jpg",
                                            "color": "#212c34",
                                            "width": 416,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 378776,
                                "editions": [
                                    {
                                        "pages": 352,
                                        "id": 5511880
                                    }
                                ],
                                "cached_image": {
                                    "id": 1903531,
                                    "url": "https://assets.hardcover.app/book_mappings/7332669/2a1692b5b17014dbcc67867536300250b6931e65.jpeg",
                                    "color": "#47ca99",
                                    "width": 335,
                                    "height": 500,
                                    "color_name": "Green"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-09-30",
                        "edition": {
                            "title": "1984",
                            "pages": 304,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "george-orwell",
                                        "name": "George Orwell",
                                        "cachedImage": {
                                            "id": 33249,
                                            "url": "https://assets.hardcover.app/authors/133899/9160343-L.jpg",
                                            "color": "#739594",
                                            "width": 500,
                                            "height": 281,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 379760,
                                "editions": [
                                    {
                                        "pages": 368,
                                        "id": 31508731
                                    }
                                ],
                                "cached_image": {
                                    "id": 1402379,
                                    "url": "https://assets.hardcover.app/editions/4675245/7315391130042195-lf.jpeg",
                                    "color": "#d80304",
                                    "width": 300,
                                    "height": 538,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2014-01-01",
                        "edition": {
                            "title": "The Catcher in the Rye",
                            "pages": 288,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "j-d-salinger",
                                        "name": "J. D. Salinger",
                                        "cachedImage": {
                                            "id": 32813,
                                            "url": "https://assets.hardcover.app/authors/117481/3368221-L.jpg",
                                            "color": "#d7d7d7",
                                            "width": 321,
                                            "height": 393,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 381379,
                                "editions": [
                                    {
                                        "pages": 208,
                                        "id": 30382413
                                    }
                                ],
                                "cached_image": {
                                    "id": 1418492,
                                    "url": "https://assets.hardcover.app/editions/20025793/2524829738512264-91YXaY-I9VS._SL1500_.jpg",
                                    "color": "#ba140a",
                                    "width": 1046,
                                    "height": 1500,
                                    "color_name": "Red"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-09-30",
                        "edition": {
                            "title": "The Sense of an Ending",
                            "pages": 151,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "julian-barnes-4d74f66a-6fee-44f5-9ca0-70db30b1421a",
                                        "name": "Julian Barnes",
                                        "cachedImage": {
                                            "id": 33009,
                                            "url": "https://assets.hardcover.app/authors/124639/7425746-L.jpg",
                                            "color": "#252119",
                                            "width": 184,
                                            "height": 275,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 381584,
                                "editions": [
                                    {
                                        "pages": 160,
                                        "id": 30529754
                                    }
                                ],
                                "cached_image": {
                                    "id": 457471,
                                    "url": "https://assets.hardcover.app/edition/30400983/11711708-L.jpg",
                                    "color": "#423e1d",
                                    "width": 300,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2015-01-01",
                        "edition": {
                            "title": "The Day of the Triffids",
                            "pages": 228,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "john-wyndham-759231a7-155b-4f39-867e-9d1751cb1430",
                                        "name": "John Wyndham",
                                        "cachedImage": {
                                            "id": 33516,
                                            "url": "https://assets.hardcover.app/authors/143591/9085264-L.jpg",
                                            "color": "#bcbbb0",
                                            "width": 220,
                                            "height": 250,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 381999,
                                "editions": [
                                    {
                                        "pages": 280,
                                        "id": 31119309
                                    }
                                ],
                                "cached_image": {
                                    "id": 1026942,
                                    "url": "https://assets.hardcover.app/external_data/59929042/95a573294ba4752d572302699566b321739efd70.jpeg",
                                    "color": "#e8f1e6",
                                    "width": 128,
                                    "height": 171,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-09-26",
                        "edition": {
                            "title": "Circe",
                            "pages": 409,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "madeline-miller",
                                        "name": "Madeline Miller",
                                        "cachedImage": {
                                            "id": 33214,
                                            "url": "https://assets.hardcover.app/authors/132679/8283886-L.jpg",
                                            "color": "#605a58",
                                            "width": 230,
                                            "height": 230,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 383598,
                                "editions": [
                                    {
                                        "pages": 336,
                                        "id": 30438846
                                    }
                                ],
                                "cached_image": {
                                    "id": 1692451,
                                    "url": "https://assets.hardcover.app/editions/187333/9694237244087422-circe.jpg",
                                    "color": "#ba3107",
                                    "width": 967,
                                    "height": 1500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-11-02",
                        "edition": {
                            "title": "What I Talk About When I Talk About Running",
                            "pages": 188,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "haruki-murakami",
                                        "name": "Haruki Murakami",
                                        "cachedImage": {
                                            "id": 1709616,
                                            "url": "https://assets.hardcover.app/author/209137/3202329615577719.jpg",
                                            "color": "#d8d8da",
                                            "width": 1704,
                                            "height": 1704,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "philip-gabriel",
                                        "name": "Philip Gabriel",
                                        "cachedImage": {
                                            "id": 1709621,
                                            "url": "https://assets.hardcover.app/author/251501/1250185275283795.jpg",
                                            "color": "#67442a",
                                            "width": 479,
                                            "height": 488,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 383895,
                                "editions": [
                                    {
                                        "pages": 156,
                                        "id": 30960684
                                    }
                                ],
                                "cached_image": {
                                    "id": 4755073,
                                    "url": "https://assets.hardcover.app/editions/30591313/4c7a96fe-0260-4c6d-a9b3-9192325f0612.jpg",
                                    "color": "#76959d",
                                    "width": 522,
                                    "height": 800,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-08-19",
                        "edition": {
                            "title": "Norse Mythology",
                            "pages": 304,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "neil-gaiman",
                                        "name": "Neil Gaiman",
                                        "cachedImage": {
                                            "id": 32528,
                                            "url": "https://assets.hardcover.app/authors/106235/7277125-L.jpg",
                                            "color": "#373835",
                                            "width": 375,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 385427,
                                "editions": [
                                    {
                                        "pages": 299,
                                        "id": 23725385
                                    }
                                ],
                                "cached_image": {
                                    "id": 3984686,
                                    "url": "https://assets.hardcover.app/editions/30400951/5286491007216958.jpg",
                                    "color": "#4e6363",
                                    "width": 346,
                                    "height": 500,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-02-22",
                        "edition": {
                            "title": "The Master and Margarita",
                            "pages": 424,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "mikhail-bulgakov",
                                        "name": "Mikhail Bulgakov",
                                        "cachedImage": {
                                            "id": 34189,
                                            "url": "https://assets.hardcover.app/authors/171624/8188843-L.jpg",
                                            "color": "#373530",
                                            "width": 376,
                                            "height": 500,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "katherine-tiernan-oconnor",
                                        "name": "Katherine Tiernan O'Connor",
                                        "cachedImage": {
                                            "id": 282405,
                                            "url": "https://assets.hardcover.app/books/255766/243350-L.jpg",
                                            "color": "#279fe8",
                                            "width": 352,
                                            "height": 500,
                                            "color_name": "Blue"
                                        }
                                    },
                                    "contribution": "Translator"
                                },
                                {
                                    "author": {
                                        "slug": "hans-fronius",
                                        "name": "Hans Fronius",
                                        "cachedImage": {
                                            "id": 297601,
                                            "url": "https://assets.hardcover.app/books/271482/581160-L.jpg",
                                            "color": "#844a27",
                                            "width": 320,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": "Illustrator"
                                },
                                {
                                    "author": {
                                        "slug": "diana-lewis-burgin",
                                        "name": "Diana Lewis Burgin",
                                        "cachedImage": {
                                            "id": 257709,
                                            "url": "https://assets.hardcover.app/books/231081/9020759-L.jpg",
                                            "color": "#9ea87d",
                                            "width": 320,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": "Translator"
                                },
                                {
                                    "author": {
                                        "slug": "ellendea-proffer",
                                        "name": "Ellendea Proffer",
                                        "cachedImage": {
                                            "id": 297602,
                                            "url": "https://assets.hardcover.app/books/271483/10351037-L.jpg",
                                            "color": "#655103",
                                            "width": 455,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": "Annotations/Afterword"
                                }
                            ],
                            "book": {
                                "id": 385496,
                                "editions": [
                                    {
                                        "pages": 560,
                                        "id": 31440865
                                    }
                                ],
                                "cached_image": {
                                    "id": 1903424,
                                    "url": "https://assets.hardcover.app/book_mappings/7332529/018071bab6404a9fc905069eda592477a1f8238f.jpeg",
                                    "color": "#7e6e68",
                                    "width": 324,
                                    "height": 500,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-10-12",
                        "edition": {
                            "title": "Get in Trouble",
                            "pages": 352,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "kelly-link",
                                        "name": "Kelly Link",
                                        "cachedImage": {
                                            "id": 250746,
                                            "url": "https://assets.hardcover.app/books/223885/6639701-L.jpg",
                                            "color": "#774702",
                                            "width": 295,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 385587,
                                "editions": [
                                    {
                                        "pages": 370,
                                        "id": 4090314
                                    }
                                ],
                                "cached_image": {
                                    "id": 3266829,
                                    "url": "https://assets.hardcover.app/external_data/43301523/cec649279514994ddc241daa0ca67581b678ed4f.jpeg",
                                    "color": "#cda956",
                                    "width": 333,
                                    "height": 500,
                                    "color_name": "Orange"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-10-19",
                        "edition": {
                            "title": "Cat's Cradle",
                            "pages": 178,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "kurt-vonnegut",
                                        "name": "Kurt Vonnegut",
                                        "cachedImage": {
                                            "id": 33646,
                                            "url": "https://assets.hardcover.app/authors/149651/6390595-L.jpg",
                                            "color": "#3b3631",
                                            "width": 299,
                                            "height": 450,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 427315,
                                "editions": [
                                    {
                                        "pages": 191,
                                        "id": 29187103
                                    }
                                ],
                                "cached_image": {
                                    "id": 4635805,
                                    "url": "https://assets.hardcover.app/edition/30408316/79c772efe570cfb907aafd5f0d544c9e12e59f6e.jpeg",
                                    "color": "#bd6a86",
                                    "width": 307,
                                    "height": 500,
                                    "color_name": "Pink"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2014-03-01",
                        "edition": {
                            "title": "A Clash of Kings",
                            "pages": 770,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "george-r-r-martin",
                                        "name": "George R.R. Martin",
                                        "cachedImage": {
                                            "id": 31903,
                                            "url": "https://assets.hardcover.app/authors/78661/6155669-L.jpg",
                                            "color": "#ad6e52",
                                            "width": 200,
                                            "height": 257,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 427374,
                                "editions": [
                                    {
                                        "pages": 927,
                                        "id": 31509675
                                    }
                                ],
                                "cached_image": {
                                    "id": 3880164,
                                    "url": "https://assets.hardcover.app/edition/7441206/83b941d8f996468d946641f3674e9b26461a3ddc.jpeg",
                                    "color": "#532604",
                                    "width": 332,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-07-22",
                        "edition": {
                            "title": "Prisoners of Geography",
                            "pages": 256,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "tim-marshall-4f7730fb-8b5b-4df0-8fe3-2be4dd2bf2fc",
                                        "name": "Tim  Marshall",
                                        "cachedImage": {
                                            "id": 282941,
                                            "url": "https://assets.hardcover.app/books/256324/8693193-L.jpg",
                                            "color": "#fefefe",
                                            "width": 329,
                                            "height": 500,
                                            "color_name": "White"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 427619,
                                "editions": [
                                    {
                                        "pages": 320,
                                        "id": 9412837
                                    }
                                ],
                                "cached_image": {
                                    "id": 481046,
                                    "url": "https://assets.hardcover.app/edition/29161685/10453054-L.jpg",
                                    "color": "#1867b9",
                                    "width": 334,
                                    "height": 500,
                                    "color_name": "Blue"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-11-29",
                        "edition": {
                            "title": "Horrorstör",
                            "pages": 248,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "grady-hendrix",
                                        "name": "Grady Hendrix",
                                        "cachedImage": {
                                            "id": 4146186,
                                            "url": "https://assets.hardcover.app/author/225689/2909670905242596.jpg",
                                            "color": "#cccdd1",
                                            "width": 300,
                                            "height": 300,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 427630,
                                "editions": [
                                    {
                                        "pages": 240,
                                        "id": 31741191
                                    }
                                ],
                                "cached_image": {
                                    "id": 4635604,
                                    "url": "https://assets.hardcover.app/edition/12128837/dcaf74aaa42954857ee709d9de1766074ab22691.jpeg",
                                    "color": "#dcdbde",
                                    "width": 422,
                                    "height": 500,
                                    "color_name": "Pink"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-04-25",
                        "edition": {
                            "title": "1Q84",
                            "pages": 1184,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "haruki-murakami",
                                        "name": "Haruki Murakami",
                                        "cachedImage": {
                                            "id": 1709616,
                                            "url": "https://assets.hardcover.app/author/209137/3202329615577719.jpg",
                                            "color": "#d8d8da",
                                            "width": 1704,
                                            "height": 1704,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "jay-rubin",
                                        "name": "Jay Rubin",
                                        "cachedImage": {
                                            "id": 1709622,
                                            "url": "https://assets.hardcover.app/author/62160/510124025343579.jpg",
                                            "color": "#74684f",
                                            "width": 400,
                                            "height": 400,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": "Translator"
                                },
                                {
                                    "author": {
                                        "slug": "philip-gabriel",
                                        "name": "Philip Gabriel",
                                        "cachedImage": {
                                            "id": 1709621,
                                            "url": "https://assets.hardcover.app/author/251501/1250185275283795.jpg",
                                            "color": "#67442a",
                                            "width": 479,
                                            "height": 488,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 427687,
                                "editions": [
                                    {
                                        "pages": 451,
                                        "id": 31887730
                                    }
                                ],
                                "cached_image": {
                                    "id": 1709665,
                                    "url": "https://assets.hardcover.app/editions/28550547/2665591638920066.jpg",
                                    "color": "#d9cac4",
                                    "width": 779,
                                    "height": 1200,
                                    "color_name": "Silver"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-05-15",
                        "edition": {
                            "title": "The Hitchhiker's Guide to the Galaxy",
                            "pages": 215,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "douglas-adams",
                                        "name": "Douglas Adams",
                                        "cachedImage": {
                                            "id": 32048,
                                            "url": "https://assets.hardcover.app/authors/86158/6387387-L.jpg",
                                            "color": "#a9936b",
                                            "width": 333,
                                            "height": 386,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 427798,
                                "editions": [
                                    {
                                        "pages": 212,
                                        "id": 31754290
                                    }
                                ],
                                "cached_image": {
                                    "id": 2786519,
                                    "url": "https://assets.hardcover.app/edition/4998878/26e9e386e6b34b5218d85473296c43e4dbef5de5.jpeg",
                                    "color": "#adadad",
                                    "width": 333,
                                    "height": 500,
                                    "color_name": "Silver"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-09-26",
                        "edition": {
                            "title": "Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts",
                            "pages": 290,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "annie-duke",
                                        "name": "Annie Duke",
                                        "cachedImage": {
                                            "id": 259661,
                                            "url": "https://assets.hardcover.app/books/233090/10987695-L.jpg",
                                            "color": "#2a4044",
                                            "width": 321,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 428014,
                                "editions": [
                                    {
                                        "pages": 290,
                                        "id": 17575562
                                    }
                                ],
                                "cached_image": {
                                    "id": 4594795,
                                    "url": "https://assets.hardcover.app/external_data/41199449/e3ac1c64d5e596e0d726c458f8cad962363c63c4.jpeg",
                                    "color": "#d61002",
                                    "width": 333,
                                    "height": 500,
                                    "color_name": "Red"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-05-14",
                        "edition": {
                            "title": "The Midnight Library",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "matt-haig",
                                        "name": "Matt Haig",
                                        "cachedImage": {
                                            "id": 3938302,
                                            "url": "https://assets.hardcover.app/author/89973/3317403653659070.jpg",
                                            "color": "#674527",
                                            "width": 800,
                                            "height": 600,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "carey-mulligan",
                                        "name": "Carey Mulligan",
                                        "cachedImage": {
                                            "id": 282246,
                                            "url": "https://assets.hardcover.app/books/255600/6683505-L.jpg",
                                            "color": "#e8eadf",
                                            "width": 318,
                                            "height": 437,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": "Narrator"
                                }
                            ],
                            "book": {
                                "id": 428018,
                                "editions": [
                                    {
                                        "pages": 414,
                                        "id": 31887582
                                    }
                                ],
                                "cached_image": {
                                    "id": 4184804,
                                    "url": "https://assets.hardcover.app/editions/31581955/5913134396133712.jpg",
                                    "color": "#dbd52a",
                                    "width": 1694,
                                    "height": 2560,
                                    "color_name": "Gold"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-04-28",
                        "edition": {
                            "title": "Blood, Sweat, and Pixels: The Triumphant, Turbulent Stories Behind How Video Games Are Made",
                            "pages": 304,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "jason-schreier",
                                        "name": "Jason Schreier",
                                        "cachedImage": {
                                            "id": 259654,
                                            "url": "https://assets.hardcover.app/books/233082/8465942-L.jpg",
                                            "color": "#174256",
                                            "width": 333,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 428020,
                                "editions": [
                                    {
                                        "pages": 304,
                                        "id": 30400946
                                    }
                                ],
                                "cached_image": {
                                    "id": 970011,
                                    "url": "https://assets.hardcover.app/external_data/59571791/b525be37c711b12ebee7d8d38ccfac192aacbd7d.jpeg",
                                    "color": "#023d6f",
                                    "width": 128,
                                    "height": 193,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-07-11",
                        "edition": {
                            "title": "Crying in H Mart",
                            "pages": 239,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "michelle-zauner",
                                        "name": "Michelle Zauner",
                                        "cachedImage": {
                                            "id": 260177,
                                            "url": "https://assets.hardcover.app/books/233612/1424341-L.jpg",
                                            "color": "#f2eeea",
                                            "width": 458,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 428211,
                                "editions": [
                                    {
                                        "pages": 256,
                                        "id": 30559731
                                    }
                                ],
                                "cached_image": {
                                    "id": 1863130,
                                    "url": "https://assets.hardcover.app/external_data/60487680/a4e87637228ad6a8d44dbb1fa2406fda319d2264.jpeg",
                                    "color": "#bf0405",
                                    "width": 98,
                                    "height": 148,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-04-11",
                        "edition": {
                            "title": "Hamnet",
                            "pages": 352,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "maggie-ofarrell-3ddc1996-e80c-4797-87c3-c3f1ed5e0659",
                                        "name": "Maggie O'Farrell",
                                        "cachedImage": {
                                            "id": 125607,
                                            "url": "https://assets.hardcover.app/books/95505/10573350-L.jpg",
                                            "color": "#073c5d",
                                            "width": 307,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 428411,
                                "editions": [
                                    {
                                        "pages": 360,
                                        "id": 31508025
                                    }
                                ],
                                "cached_image": {
                                    "id": 1205229,
                                    "url": "https://assets.hardcover.app/book_mappings/7332877/83142cb3982272f35dc23b0c491e0cb39c5165ec.jpeg",
                                    "color": "#624e1f",
                                    "width": 325,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-07-26",
                        "edition": {
                            "title": "The Table of Less Valued Knights",
                            "pages": 320,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "marie-phillips",
                                        "name": "Marie Phillips",
                                        "cachedImage": {
                                            "id": 3787,
                                            "url": "https://assets.hardcover.app/books/114130/10437311-L.jpg",
                                            "color": "#1f2d00",
                                            "width": 322,
                                            "height": 500,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 428482,
                                "editions": [
                                    {
                                        "pages": 320,
                                        "id": 30399598
                                    }
                                ],
                                "cached_image": {
                                    "id": 735549,
                                    "url": "https://assets.hardcover.app/edition/30399598/21532109._SX98_.jpg",
                                    "color": "#62684d",
                                    "width": 98,
                                    "height": 149,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-12-21",
                        "edition": {
                            "title": "Sputnik Sweetheart",
                            "pages": 234,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "haruki-murakami",
                                        "name": "Haruki Murakami",
                                        "cachedImage": {
                                            "id": 1709616,
                                            "url": "https://assets.hardcover.app/author/209137/3202329615577719.jpg",
                                            "color": "#d8d8da",
                                            "width": 1704,
                                            "height": 1704,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "philip-gabriel",
                                        "name": "Philip Gabriel",
                                        "cachedImage": {
                                            "id": 1709621,
                                            "url": "https://assets.hardcover.app/author/251501/1250185275283795.jpg",
                                            "color": "#67442a",
                                            "width": 479,
                                            "height": 488,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 428614,
                                "editions": [
                                    {
                                        "pages": 246,
                                        "id": 31944907
                                    }
                                ],
                                "cached_image": {
                                    "id": 1709708,
                                    "url": "https://assets.hardcover.app/editions/8692702/6421193886583576.jpg",
                                    "color": "#363221",
                                    "width": 973,
                                    "height": 1500,
                                    "color_name": "Black"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-05-17",
                        "edition": {
                            "title": "If on a Winter's Night a Traveler",
                            "pages": 260,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "italo-calvino",
                                        "name": "Italo Calvino",
                                        "cachedImage": {
                                            "id": 32909,
                                            "url": "https://assets.hardcover.app/authors/120798/6949739-L.jpg",
                                            "color": "#525252",
                                            "width": 301,
                                            "height": 452,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "william-weaver",
                                        "name": "William Weaver",
                                        "cachedImage": {
                                            "id": 282381,
                                            "url": "https://assets.hardcover.app/books/255741/6297451-L.jpg",
                                            "color": "#f6f2d7",
                                            "width": 339,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 431145,
                                "editions": [
                                    {
                                        "pages": 10,
                                        "id": 31888155
                                    }
                                ],
                                "cached_image": {
                                    "id": 1653508,
                                    "url": "https://assets.hardcover.app/external_data/59661048/60d9844323dbd960c8a37955ba8dee2b43ff2251.jpeg",
                                    "color": "#7b614f",
                                    "width": 128,
                                    "height": 205,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-03-22",
                        "edition": {
                            "title": "Golden Hill",
                            "pages": 344,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "francis-spufford",
                                        "name": "Francis Spufford",
                                        "cachedImage": {
                                            "id": 264939,
                                            "url": "https://assets.hardcover.app/books/237685/10644384-L.jpg",
                                            "color": "#383422",
                                            "width": 332,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 431231,
                                "editions": [
                                    {
                                        "pages": 344,
                                        "id": 22669621
                                    }
                                ],
                                "cached_image": {
                                    "id": 482798,
                                    "url": "https://assets.hardcover.app/edition/22669621/10302334-L.jpg",
                                    "color": "#e8e9e4",
                                    "width": 325,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-11-29",
                        "edition": {
                            "title": "A Little History of Philosophy",
                            "pages": 252,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "nigel-warburton",
                                        "name": "Nigel Warburton",
                                        "cachedImage": {
                                            "id": 220668,
                                            "url": "https://assets.hardcover.app/books/193753/9633289-L.jpg",
                                            "color": "#20638c",
                                            "width": 364,
                                            "height": 500,
                                            "color_name": "Blue"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 431343,
                                "editions": [
                                    {
                                        "pages": 252,
                                        "id": 8932587
                                    }
                                ],
                                "cached_image": {
                                    "id": 1320499,
                                    "url": "https://assets.hardcover.app/external_data/59380619/b894ed9c3f08cec7c126835a5af9f3de820364a1.jpeg",
                                    "color": "#f1f0ec",
                                    "width": 98,
                                    "height": 144,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-08-26",
                        "edition": {
                            "title": "The Invention of Nature",
                            "pages": 473,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "andrea-wulf",
                                        "name": "Andrea Wulf",
                                        "cachedImage": {
                                            "id": 211552,
                                            "url": "https://assets.hardcover.app/books/184324/7311878-L.jpg",
                                            "color": "#d0d3b3",
                                            "width": 328,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 431372,
                                "editions": [
                                    {
                                        "pages": 576,
                                        "id": 18998360
                                    }
                                ],
                                "cached_image": {
                                    "id": 461501,
                                    "url": "https://assets.hardcover.app/edition/25972614/10546491-L.jpg",
                                    "color": "#886806",
                                    "width": 335,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-09-24",
                        "edition": {
                            "title": "Howl's Moving Castle",
                            "pages": 267,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "diana-wynne-jones",
                                        "name": "Diana Wynne Jones",
                                        "cachedImage": {
                                            "id": 32559,
                                            "url": "https://assets.hardcover.app/authors/107450/6752729-L.jpg",
                                            "color": "#575757",
                                            "width": 198,
                                            "height": 295,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "marie-alice-harel",
                                        "name": "Marie-Alice Harel",
                                        "cachedImage": {
                                            "id": 283587,
                                            "url": "https://assets.hardcover.app/books/256983/8502873-L.jpg",
                                            "color": "#73495d",
                                            "width": 333,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": "Illustrator"
                                },
                                {
                                    "author": {
                                        "slug": "marcus-sedgwick",
                                        "name": "Marcus Sedgwick",
                                        "cachedImage": {
                                            "id": 35318,
                                            "url": "https://assets.hardcover.app/authors/220433/10510345-L.jpg",
                                            "color": "#4d2213",
                                            "width": 250,
                                            "height": 377,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": "Introduction"
                                }
                            ],
                            "book": {
                                "id": 431441,
                                "editions": [
                                    {
                                        "pages": 376,
                                        "id": 31455433
                                    }
                                ],
                                "cached_image": {
                                    "id": 1258773,
                                    "url": "https://assets.hardcover.app/external_data/39788101/463194df8c826bdb85ccb460019cc7797e175116.jpeg",
                                    "color": "#19ba68",
                                    "width": 333,
                                    "height": 500,
                                    "color_name": "Green"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-04-17",
                        "edition": {
                            "title": "My Sister, the Serial Killer",
                            "pages": 226,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "oyinkan-braithwaite",
                                        "name": "Oyinkan Braithwaite",
                                        "cachedImage": {
                                            "id": 261696,
                                            "url": "https://assets.hardcover.app/books/235182/8185130-L.jpg",
                                            "color": "#8bc2be",
                                            "width": 381,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "b87fbe6d-e980-47a2-9ef7-3151aa12a5ea",
                                        "name": "محمد عثمان خليفة",
                                        "cachedImage": {
                                            "id": 298477,
                                            "url": "https://assets.hardcover.app/books/272393/9295264-L.jpg",
                                            "color": "#4338CA",
                                            "width": 307,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 431844,
                                "editions": [
                                    {
                                        "pages": 226,
                                        "id": 30404068
                                    }
                                ],
                                "cached_image": {
                                    "id": 1264966,
                                    "url": "https://assets.hardcover.app/book_mappings/7332769/1c71c351c88eba37e5a91297edc51c80357c7aa5.jpeg",
                                    "color": "#02d402",
                                    "width": 311,
                                    "height": 500,
                                    "color_name": "Green"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-12-31",
                        "edition": {
                            "title": "Long & the Short of It",
                            "pages": 241,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "john-kay",
                                        "name": "John Kay",
                                        "cachedImage": {
                                            "id": 7831,
                                            "url": "https://assets.hardcover.app/books/247327/8578726-L.jpg",
                                            "color": "#4a8e73",
                                            "width": 268,
                                            "height": 400,
                                            "color_name": "Green"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 432501,
                                "editions": [
                                    {
                                        "pages": 241,
                                        "id": 5274196
                                    }
                                ],
                                "cached_image": {}
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-03-03",
                        "edition": {
                            "title": "Killing Commendatore",
                            "pages": 704,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "haruki-murakami",
                                        "name": "Haruki Murakami",
                                        "cachedImage": {
                                            "id": 1709616,
                                            "url": "https://assets.hardcover.app/author/209137/3202329615577719.jpg",
                                            "color": "#d8d8da",
                                            "width": 1704,
                                            "height": 1704,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 432528,
                                "editions": [
                                    {
                                        "pages": 608,
                                        "id": 3033040
                                    }
                                ],
                                "cached_image": {
                                    "id": 4728908,
                                    "url": "https://assets.hardcover.app/editions/27165623/9717419202776382.jpg",
                                    "color": "#084746",
                                    "width": 260,
                                    "height": 400,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-10-02",
                        "edition": {
                            "title": "Warlight",
                            "pages": 285,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "michael-ondaatje-38d38202-6817-491f-8755-4494fd8c390f",
                                        "name": "Michael Ondaatje",
                                        "cachedImage": {
                                            "id": 262347,
                                            "url": "https://assets.hardcover.app/books/235846/10809897-L.jpg",
                                            "color": "#492620",
                                            "width": 304,
                                            "height": 500,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 432562,
                                "editions": [
                                    {
                                        "pages": 285,
                                        "id": 30428665
                                    }
                                ],
                                "cached_image": {
                                    "id": 3865451,
                                    "url": "https://assets.hardcover.app/edition/1723637/d3fefc4b639413b770192d156ea5c0e24849cd56.jpeg",
                                    "color": "#5c5f62",
                                    "width": 362,
                                    "height": 500,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-08-17",
                        "edition": {
                            "title": "HHhH",
                            "pages": 442,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "laurent-binet",
                                        "name": "Laurent Binet",
                                        "cachedImage": {
                                            "id": 105557,
                                            "url": "https://assets.hardcover.app/books/74751/3734508-L.jpg",
                                            "color": "#0a4e75",
                                            "width": 128,
                                            "height": 174,
                                            "color_name": "Blue"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "eb86ca86-df78-4700-a389-2b1adfecb48c",
                                        "name": "احمد پرهیزی",
                                        "cachedImage": {}
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 432584,
                                "editions": [
                                    {
                                        "pages": 346,
                                        "id": 30402636
                                    }
                                ],
                                "cached_image": {
                                    "id": 688202,
                                    "url": "https://assets.hardcover.app/edition/30552609/content.jpeg",
                                    "color": "#d0cabb",
                                    "width": 128,
                                    "height": 202,
                                    "color_name": "Silver"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2017-01-01",
                        "edition": {
                            "title": "How Not to Be Wrong: The Hidden Maths of Everyday Life",
                            "pages": 468,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "jordan-ellenberg",
                                        "name": "Jordan Ellenberg",
                                        "cachedImage": {
                                            "id": 34315,
                                            "url": "https://assets.hardcover.app/authors/177350/10679737-L.jpg",
                                            "color": "#a38681",
                                            "width": 333,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 432946,
                                "editions": [
                                    {
                                        "pages": 468,
                                        "id": 13908988
                                    }
                                ],
                                "cached_image": {
                                    "id": 4565675,
                                    "url": "https://assets.hardcover.app/edition/28199175/422d7cec71ec32ef23f13b4c030730058bb76925.jpeg",
                                    "color": "#3b8d91",
                                    "width": 336,
                                    "height": 500,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-03-09",
                        "edition": {
                            "title": "Happy City",
                            "pages": 368,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "charles-montgomery-e6fe9f93-db29-4dc2-8be6-dbcab2666315",
                                        "name": "Charles Montgomery",
                                        "cachedImage": {
                                            "id": 202802,
                                            "url": "https://assets.hardcover.app/books/175300/10310010-L.jpg",
                                            "color": "#4a2902",
                                            "width": 321,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 433196,
                                "editions": [
                                    {
                                        "pages": 368,
                                        "id": 4694346
                                    }
                                ],
                                "cached_image": {
                                    "id": 499514,
                                    "url": "https://assets.hardcover.app/edition/4694346/10435080-L.jpg",
                                    "color": "#aed4ca",
                                    "width": 331,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-09-16",
                        "edition": {
                            "title": "Elmet",
                            "pages": 311,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "fiona-mozley",
                                        "name": "Fiona Mozley",
                                        "cachedImage": {
                                            "id": 263232,
                                            "url": "https://assets.hardcover.app/books/236547/4232846-L.jpg",
                                            "color": "#fdfdfd",
                                            "width": 128,
                                            "height": 193,
                                            "color_name": "White"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 434765,
                                "editions": [
                                    {
                                        "pages": 277,
                                        "id": 31610254
                                    }
                                ],
                                "cached_image": {
                                    "id": 484195,
                                    "url": "https://assets.hardcover.app/edition/5055629/10863343-L.jpg",
                                    "color": "#f7f5ea",
                                    "width": 315,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-01-25",
                        "edition": {
                            "title": "The North Water",
                            "pages": 255,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "ian-mcguire",
                                        "name": "Ian McGuire",
                                        "cachedImage": {
                                            "id": 263258,
                                            "url": "https://assets.hardcover.app/books/236563/1273979-L.jpg",
                                            "color": "#bfbbb2",
                                            "width": 387,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 434799,
                                "editions": [
                                    {
                                        "pages": 352,
                                        "id": 14388019
                                    }
                                ],
                                "cached_image": {
                                    "id": 462518,
                                    "url": "https://assets.hardcover.app/edition/14498641/12368687-L.jpg",
                                    "color": "#d4d3bf",
                                    "width": 333,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-04-09",
                        "edition": {
                            "title": "Play It as It Lays",
                            "pages": 227,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "joan-didion",
                                        "name": "Joan Didion",
                                        "cachedImage": {
                                            "id": 33492,
                                            "url": "https://assets.hardcover.app/authors/142422/7277133-L.jpg",
                                            "color": "#727272",
                                            "width": 200,
                                            "height": 270,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 435613,
                                "editions": [
                                    {
                                        "pages": 234,
                                        "id": 31599710
                                    }
                                ],
                                "cached_image": {
                                    "id": 1108109,
                                    "url": "https://assets.hardcover.app/external_data/59965212/dae13bf916206818573b5b0d5eb3e6068e075a78.jpeg",
                                    "color": "#71431d",
                                    "width": 98,
                                    "height": 150,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-08-13",
                        "edition": {
                            "title": "The Little Stranger",
                            "pages": 480,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "sarah-waters",
                                        "name": "Sarah Waters",
                                        "cachedImage": {
                                            "id": 33898,
                                            "url": "https://assets.hardcover.app/authors/159415/9069562-L.jpg",
                                            "color": "#4f4f46",
                                            "width": 200,
                                            "height": 201,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 435687,
                                "editions": [
                                    {
                                        "pages": 463,
                                        "id": 31618827
                                    }
                                ],
                                "cached_image": {
                                    "id": 1248221,
                                    "url": "https://assets.hardcover.app/external_data/59562364/fca5ef65e584238a99382fe96ee04af3c3397979.jpeg",
                                    "color": "#232215",
                                    "width": 128,
                                    "height": 200,
                                    "color_name": "Black"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-12-05",
                        "edition": {
                            "title": "Before the Coffee Gets Cold",
                            "pages": 213,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "toshikazu-kawaguchi",
                                        "name": "Toshikazu Kawaguchi",
                                        "cachedImage": {
                                            "id": 264081,
                                            "url": "https://assets.hardcover.app/books/237074/671146-L.jpg",
                                            "color": "#789b6e",
                                            "width": 326,
                                            "height": 475,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "geoffrey-trousselot",
                                        "name": "Geoffrey Trousselot",
                                        "cachedImage": {
                                            "id": 282691,
                                            "url": "https://assets.hardcover.app/books/256064/7333584-L.jpg",
                                            "color": "#f5f6f5",
                                            "width": 397,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 436167,
                                "editions": [
                                    {
                                        "pages": 213,
                                        "id": 24086923
                                    }
                                ],
                                "cached_image": {
                                    "id": 1669531,
                                    "url": "https://assets.hardcover.app/editions/24086923/8822767016251445-81GoE0na35L._AC_UF1000,1000_QL80_.jpg",
                                    "color": "#f5ece6",
                                    "width": 660,
                                    "height": 1000,
                                    "color_name": "White"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-02-21",
                        "edition": {
                            "title": "History of Wolves",
                            "pages": 288,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "emily-fridlund",
                                        "name": "Emily Fridlund",
                                        "cachedImage": {}
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 436480,
                                "editions": [
                                    {
                                        "pages": 304,
                                        "id": 10479422
                                    }
                                ],
                                "cached_image": {
                                    "id": 683506,
                                    "url": "https://assets.hardcover.app/edition/30588302/content.jpeg",
                                    "color": "#acc8d6",
                                    "width": 128,
                                    "height": 213,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": null,
                        "edition": {
                            "title": "In the Dream House",
                            "pages": 251,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "carmen-maria-machado",
                                        "name": "Carmen Maria Machado",
                                        "cachedImage": {
                                            "id": 262509,
                                            "url": "https://assets.hardcover.app/books/236015/10192294-L.jpg",
                                            "color": "#a82e00",
                                            "width": 323,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 436612,
                                "editions": [
                                    {
                                        "pages": 288,
                                        "id": 8233780
                                    }
                                ],
                                "cached_image": {
                                    "id": 2427090,
                                    "url": "https://assets.hardcover.app/external_data/59387859/f373cf520e626134d830b6b793fcb45b83274e66.jpeg",
                                    "color": "#d1d4c9",
                                    "width": 98,
                                    "height": 98,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-02-07",
                        "edition": {
                            "title": "The Picture of Dorian Gray",
                            "pages": 252,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "oscar-wilde",
                                        "name": "Oscar Wilde",
                                        "cachedImage": {
                                            "id": 34895,
                                            "url": "https://assets.hardcover.app/authors/201635/3366081-L.jpg",
                                            "color": "#3f2f20",
                                            "width": 315,
                                            "height": 499,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "jeffrey-eugenides-505ff585-81bb-4d96-9ef0-66f17bed000f",
                                        "name": "Jeffrey Eugenides",
                                        "cachedImage": {
                                            "id": 35098,
                                            "url": "https://assets.hardcover.app/authors/210002/6677920-L.jpg",
                                            "color": "#606060",
                                            "width": 420,
                                            "height": 412,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": "Introduction"
                                },
                                {
                                    "author": {
                                        "slug": "ben-barnes",
                                        "name": "Ben Barnes",
                                        "cachedImage": {
                                            "id": 290808,
                                            "url": "https://assets.hardcover.app/books/264472/5815323-L.jpg",
                                            "color": "#fefefe",
                                            "width": 319,
                                            "height": 500,
                                            "color_name": "White"
                                        }
                                    },
                                    "contribution": "Narrator"
                                }
                            ],
                            "book": {
                                "id": 436692,
                                "editions": [
                                    {
                                        "pages": 272,
                                        "id": 30459205
                                    }
                                ],
                                "cached_image": {
                                    "id": 1249489,
                                    "url": "https://assets.hardcover.app/external_data/59387927/b157de9132c5f657606f923066a4ada42c6dea51.jpeg",
                                    "color": "#ece2cd",
                                    "width": 98,
                                    "height": 158,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-08-08",
                        "edition": {
                            "title": "Men Without Women",
                            "pages": 242,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "haruki-murakami",
                                        "name": "Haruki Murakami",
                                        "cachedImage": {
                                            "id": 1709616,
                                            "url": "https://assets.hardcover.app/author/209137/3202329615577719.jpg",
                                            "color": "#d8d8da",
                                            "width": 1704,
                                            "height": 1704,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "phillip-gabriel",
                                        "name": "Phillip Gabriel",
                                        "cachedImage": {
                                            "id": 282701,
                                            "url": "https://assets.hardcover.app/books/256074/7378751-L.jpg",
                                            "color": "#c1c9b8",
                                            "width": 297,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": "Translator"
                                },
                                {
                                    "author": {
                                        "slug": "ted-goossen",
                                        "name": "Ted Goossen",
                                        "cachedImage": {
                                            "id": 282969,
                                            "url": "https://assets.hardcover.app/books/256352/10654422-L.jpg",
                                            "color": "#690e00",
                                            "width": 324,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": "Translator"
                                },
                                {
                                    "author": {
                                        "slug": "chip-kidd",
                                        "name": "Chip Kidd",
                                        "cachedImage": {
                                            "id": 168346,
                                            "url": "https://assets.hardcover.app/books/139735/4527125-L.jpg",
                                            "color": "#003f2d",
                                            "width": 128,
                                            "height": 182,
                                            "color_name": "Green"
                                        }
                                    },
                                    "contribution": "Cover art & design"
                                }
                            ],
                            "book": {
                                "id": 436916,
                                "editions": [
                                    {
                                        "pages": 228,
                                        "id": 30962612
                                    }
                                ],
                                "cached_image": {
                                    "id": 3741049,
                                    "url": "https://assets.hardcover.app/external_data/45159330/b8b166ca10938b57471089c1060accd4431e4409.jpeg",
                                    "color": "#f0d3cf",
                                    "width": 324,
                                    "height": 500,
                                    "color_name": "Silver"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-03-26",
                        "edition": {
                            "title": "High-Rise",
                            "pages": 209,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "id": 237155,
                                        "slug": "j-g-ballard-94eb4e5f-7363-4bad-8ff8-9c0b1149b391",
                                        "name": "J.G. Ballard",
                                        "image": {
                                            "id": 264206,
                                            "url": "https://assets.hardcover.app/books/237155/7166524-L.jpg",
                                            "color": "#1c772f",
                                            "width": 365,
                                            "height": 500,
                                            "color_name": "Green"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 440088,
                                "editions": [
                                    {
                                        "pages": 207,
                                        "id": 16741081
                                    }
                                ],
                                "cached_image": {
                                    "id": 4521726,
                                    "url": "https://assets.hardcover.app/edition/16741081/7c1746cf178eb9fea346eed1631ca86cdefd6094.jpeg",
                                    "color": "#679471",
                                    "width": 333,
                                    "height": 500,
                                    "color_name": "Green"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2017-01-01",
                        "edition": {
                            "title": "Undermajordomo Minor",
                            "pages": 352,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "patrick-dewitt",
                                        "name": "Patrick deWitt",
                                        "cachedImage": {
                                            "id": 219383,
                                            "url": "https://assets.hardcover.app/books/192425/8742007-L.jpg",
                                            "color": "#e8e1af",
                                            "width": 331,
                                            "height": 499,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 440540,
                                "editions": [
                                    {
                                        "pages": 336,
                                        "id": 30650522
                                    }
                                ],
                                "cached_image": {
                                    "id": 502358,
                                    "url": "https://assets.hardcover.app/edition/20778069/11734598-L.jpg",
                                    "color": "#5f5b3e",
                                    "width": 332,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-09-22",
                        "edition": {
                            "title": "A Master of Djinn",
                            "pages": 379,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "p-djeli-clark",
                                        "name": "P. Djèlí Clark",
                                        "cachedImage": {
                                            "id": 264001,
                                            "url": "https://assets.hardcover.app/books/237029/6801741-L.jpg",
                                            "color": "#135b13",
                                            "width": 402,
                                            "height": 500,
                                            "color_name": "Green"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 440947,
                                "editions": [
                                    {
                                        "pages": 370,
                                        "id": 31660239
                                    }
                                ],
                                "cached_image": {
                                    "id": 3339067,
                                    "url": "https://assets.hardcover.app/editions/30405763/5335274566339030.jpg",
                                    "color": "#969491",
                                    "width": 290,
                                    "height": 445,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-04-15",
                        "edition": {
                            "title": "Hello World",
                            "pages": 256,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "hannah-fry",
                                        "name": "Hannah Fry",
                                        "cachedImage": {
                                            "id": 266290,
                                            "url": "https://assets.hardcover.app/books/239079/10738823-L.jpg",
                                            "color": "#50493e",
                                            "width": 310,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 441353,
                                "editions": [
                                    {
                                        "pages": 256,
                                        "id": 5991237
                                    }
                                ],
                                "cached_image": {
                                    "id": 1098383,
                                    "url": "https://assets.hardcover.app/external_data/59393952/e7d8d8e5629b122464661c775f91070662699f96.jpeg",
                                    "color": "#f6f6dd",
                                    "width": 98,
                                    "height": 149,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-01-02",
                        "edition": {
                            "title": "Flaubert's Parrot",
                            "pages": 190,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "julian-barnes-4d74f66a-6fee-44f5-9ca0-70db30b1421a",
                                        "name": "Julian Barnes",
                                        "cachedImage": {
                                            "id": 33009,
                                            "url": "https://assets.hardcover.app/authors/124639/7425746-L.jpg",
                                            "color": "#252119",
                                            "width": 184,
                                            "height": 275,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 441817,
                                "editions": [
                                    {
                                        "pages": 216,
                                        "id": 1838521
                                    }
                                ],
                                "cached_image": {
                                    "id": 502834,
                                    "url": "https://assets.hardcover.app/edition/8634956/2388923-L.jpg",
                                    "color": "#ddddd5",
                                    "width": 298,
                                    "height": 475,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-07-10",
                        "edition": {
                            "title": "The Mezzanine",
                            "pages": 135,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "nicholson-baker",
                                        "name": "Nicholson Baker",
                                        "cachedImage": {
                                            "id": 34279,
                                            "url": "https://assets.hardcover.app/authors/175547/7360967-L.jpg",
                                            "color": "#63635e",
                                            "width": 198,
                                            "height": 255,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 441850,
                                "editions": [
                                    {
                                        "pages": 135,
                                        "id": 5483593
                                    }
                                ],
                                "cached_image": {
                                    "id": 1728683,
                                    "url": "https://assets.hardcover.app/external_data/59394935/d8d69eb23a25d1628dbb8bc22ecba7688b61dcce.jpeg",
                                    "color": "#a26258",
                                    "width": 96,
                                    "height": 160,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-07-29",
                        "edition": {
                            "title": "French Exit",
                            "pages": 219,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "patrick-dewitt",
                                        "name": "Patrick deWitt",
                                        "cachedImage": {
                                            "id": 219383,
                                            "url": "https://assets.hardcover.app/books/192425/8742007-L.jpg",
                                            "color": "#e8e1af",
                                            "width": 331,
                                            "height": 499,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 443307,
                                "editions": [
                                    {
                                        "pages": 257,
                                        "id": 30534622
                                    }
                                ],
                                "cached_image": {
                                    "id": 609497,
                                    "url": "https://assets.hardcover.app/edition/17692743/8280478-L.jpg",
                                    "color": "#e6e1bc",
                                    "width": 330,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-02-06",
                        "edition": {
                            "title": "Berlin Alexanderplatz",
                            "pages": 457,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "alfred-doblin",
                                        "name": "Alfred Döblin",
                                        "cachedImage": {
                                            "id": 32967,
                                            "url": "https://assets.hardcover.app/authors/123234/6677075-L.jpg",
                                            "color": "#aeaeae",
                                            "width": 351,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 444573,
                                "editions": [
                                    {
                                        "pages": 528,
                                        "id": 23766
                                    }
                                ],
                                "cached_image": {
                                    "id": 610672,
                                    "url": "https://assets.hardcover.app/edition/4013052/577140-L.jpg",
                                    "color": "#807774",
                                    "width": 312,
                                    "height": 475,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-07-01",
                        "edition": {
                            "title": "When We Cease to Understand the World",
                            "pages": 192,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "benjamin-labatut",
                                        "name": "Benjamín Labatut",
                                        "cachedImage": {
                                            "id": 267967,
                                            "url": "https://assets.hardcover.app/books/240812/10280544-L.jpg",
                                            "color": "#605f59",
                                            "width": 448,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "adrian-nathan-west",
                                        "name": "Adrian Nathan West",
                                        "cachedImage": {
                                            "id": 279847,
                                            "url": "https://assets.hardcover.app/books/253120/8015044-L.jpg",
                                            "color": "#d2bfa4",
                                            "width": 291,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 445032,
                                "editions": [
                                    {
                                        "pages": 178,
                                        "id": 31640987
                                    }
                                ],
                                "cached_image": {
                                    "id": 1940280,
                                    "url": "https://assets.hardcover.app/external_data/59508430/ada95f71e07752b30ae3ffc5c41025355ae56d90.jpeg",
                                    "color": "#e0d9c1",
                                    "width": 128,
                                    "height": 196,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-07-17",
                        "edition": {
                            "title": "Intimacies",
                            "pages": 240,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "katie-kitamura",
                                        "name": "Katie Kitamura",
                                        "cachedImage": {
                                            "id": 268058,
                                            "url": "https://assets.hardcover.app/books/240905/1506829-L.jpg",
                                            "color": "#b4d7e5",
                                            "width": 365,
                                            "height": 475,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 445227,
                                "editions": [
                                    {
                                        "pages": 240,
                                        "id": 5883500
                                    }
                                ],
                                "cached_image": {
                                    "id": 973405,
                                    "url": "https://assets.hardcover.app/external_data/59806515/f7dd4c257fac8cce1e075f4373df9e978ed24d05.jpeg",
                                    "color": "#b00555",
                                    "width": 128,
                                    "height": 200,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-05-02",
                        "edition": {
                            "title": "Burnt Sugar",
                            "pages": 240,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "avni-doshi",
                                        "name": "Avni Doshi",
                                        "cachedImage": {
                                            "id": 268203,
                                            "url": "https://assets.hardcover.app/books/241054/8238248-L.jpg",
                                            "color": "#291f14",
                                            "width": 353,
                                            "height": 500,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 445539,
                                "editions": [
                                    {
                                        "pages": 228,
                                        "id": 31537550
                                    }
                                ],
                                "cached_image": {
                                    "id": 487450,
                                    "url": "https://assets.hardcover.app/edition/11190615/10693498-L.jpg",
                                    "color": "#9678ac",
                                    "width": 333,
                                    "height": 500,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-12-29",
                        "edition": {
                            "title": "Inherent Vice",
                            "pages": 369,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "thomas-pynchon",
                                        "name": "Thomas Pynchon",
                                        "cachedImage": {
                                            "id": 34296,
                                            "url": "https://assets.hardcover.app/authors/176226/7281702-L.jpg",
                                            "color": "#cfcfcf",
                                            "width": 329,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 447217,
                                "editions": [
                                    {
                                        "pages": 381,
                                        "id": 31709288
                                    }
                                ],
                                "cached_image": {
                                    "id": 973821,
                                    "url": "https://assets.hardcover.app/external_data/23196089/7121ccd47a047204213eb93e11f797e73f262628.jpeg",
                                    "color": "#1b4309",
                                    "width": 330,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-02-19",
                        "edition": {
                            "title": "The Dreamers",
                            "pages": 303,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "karen-thompson-walker",
                                        "name": "Karen Thompson Walker",
                                        "cachedImage": {
                                            "id": 6221,
                                            "url": "https://assets.hardcover.app/books/194604/2422313-L.jpg",
                                            "color": "#62624d",
                                            "width": 331,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 448741,
                                "editions": [
                                    {
                                        "pages": 256,
                                        "id": 30103534
                                    }
                                ],
                                "cached_image": {
                                    "id": 615033,
                                    "url": "https://assets.hardcover.app/edition/16509613/8350402-L.jpg",
                                    "color": "#d6dcd8",
                                    "width": 315,
                                    "height": 475,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-01-06",
                        "edition": {
                            "title": "Water Shall Refuse Them",
                            "pages": 257,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "lucie-mcknight-hardy",
                                        "name": "Lucie McKnight Hardy",
                                        "cachedImage": {
                                            "id": 270165,
                                            "url": "https://assets.hardcover.app/books/243092/2075552-L.jpg",
                                            "color": "#5f1108",
                                            "width": 326,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 450519,
                                "editions": [
                                    {
                                        "pages": 257,
                                        "id": 28812973
                                    }
                                ],
                                "cached_image": {
                                    "id": 616463,
                                    "url": "https://assets.hardcover.app/edition/28812973/10857678-L.jpg",
                                    "color": "#beb7a1",
                                    "width": 328,
                                    "height": 500,
                                    "color_name": "Silver"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-10-14",
                        "edition": {
                            "title": "The Discomfort of Evening",
                            "pages": 282,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "marieke-lucas-rijneveld",
                                        "name": "Marieke Lucas Rijneveld",
                                        "cachedImage": {
                                            "id": 267912,
                                            "url": "https://assets.hardcover.app/books/240756/2408882-L.jpg",
                                            "color": "#f4f5f4",
                                            "width": 316,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "michele-hutchison",
                                        "name": "Michele Hutchison",
                                        "cachedImage": {
                                            "id": 277291,
                                            "url": "https://assets.hardcover.app/books/250478/1209634-L.jpg",
                                            "color": "#172613",
                                            "width": 320,
                                            "height": 475,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 451335,
                                "editions": [
                                    {
                                        "pages": 282,
                                        "id": 31567107
                                    }
                                ],
                                "cached_image": {
                                    "id": 1856466,
                                    "url": "https://assets.hardcover.app/external_data/59407666/3324817bb9a0755eca2ac11c51588948d70cf0cc.jpeg",
                                    "color": "#725d53",
                                    "width": 200,
                                    "height": 266,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-12-14",
                        "edition": {
                            "title": "The Swallowed Man",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "edward-carey",
                                        "name": "Edward Carey",
                                        "cachedImage": {
                                            "id": 94101,
                                            "url": "https://assets.hardcover.app/books/62874/9615864-L.jpg",
                                            "color": "#f4dd7c",
                                            "width": 376,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 451365,
                                "editions": [
                                    {
                                        "pages": 192,
                                        "id": 21840467
                                    }
                                ],
                                "cached_image": {
                                    "id": 617131,
                                    "url": "https://assets.hardcover.app/edition/21840467/10125314-L.jpg",
                                    "color": "#3a7c6d",
                                    "width": 313,
                                    "height": 500,
                                    "color_name": "Green"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-11-18",
                        "edition": {
                            "title": "The Perfect Nine",
                            "pages": 240,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "ngugi-wa-thiongo-877d731a-6847-42d2-aa48-c2d0c3648e43",
                                        "name": "Ngũgĩ wa Thiong'o",
                                        "cachedImage": {
                                            "id": 264666,
                                            "url": "https://assets.hardcover.app/books/237466/10159283-L.jpg",
                                            "color": "#5f5144",
                                            "width": 382,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 452697,
                                "editions": [
                                    {
                                        "pages": 231,
                                        "id": 31821917
                                    }
                                ],
                                "cached_image": {
                                    "id": 617853,
                                    "url": "https://assets.hardcover.app/edition/18644611/10472708-L.jpg",
                                    "color": "#793c0a",
                                    "width": 312,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-08-02",
                        "edition": {
                            "title": "Will and Testament",
                            "pages": 337,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "vigdis-hjorth",
                                        "name": "Vigdis Hjorth",
                                        "cachedImage": {
                                            "id": 271530,
                                            "url": "https://assets.hardcover.app/books/244503/3729931-L.jpg",
                                            "color": "#9ba089",
                                            "width": 128,
                                            "height": 181,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "charlotte-barslund",
                                        "name": "Charlotte Barslund",
                                        "cachedImage": {
                                            "id": 279950,
                                            "url": "https://assets.hardcover.app/books/253226/8185985-L.jpg",
                                            "color": "#d1cacd",
                                            "width": 309,
                                            "height": 500,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 453172,
                                "editions": [
                                    {
                                        "pages": 337,
                                        "id": 11073729
                                    }
                                ],
                                "cached_image": {
                                    "id": 3639805,
                                    "url": "https://assets.hardcover.app/external_data/61333327/4c4b3013327b100788e4d47b142a016ad7c1209b.jpeg",
                                    "color": "#69838a",
                                    "width": 128,
                                    "height": 196,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-11-13",
                        "edition": {
                            "title": "Transparent City",
                            "pages": 320,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "ondjaki-8d9ea30d-e1f8-4ce9-82ff-6550a4fd277b",
                                        "name": "Ondjaki",
                                        "cachedImage": {
                                            "id": 136299,
                                            "url": "https://assets.hardcover.app/books/106593/6980548-L.jpg",
                                            "color": "#5f2004",
                                            "width": 305,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "stephen-henighan",
                                        "name": "Stephen Henighan",
                                        "cachedImage": {
                                            "id": 303520,
                                            "url": "https://assets.hardcover.app/books/277614/6440423-L.jpg",
                                            "color": "#d9d8cf",
                                            "width": 270,
                                            "height": 427,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 453879,
                                "editions": [
                                    {
                                        "pages": 320,
                                        "id": 30408543
                                    }
                                ],
                                "cached_image": {}
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-01-18",
                        "edition": {
                            "title": "Sea of Tranquility",
                            "pages": 259,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "emily-st-john-mandel",
                                        "name": "Emily St. John Mandel",
                                        "cachedImage": {
                                            "id": 259200,
                                            "url": "https://assets.hardcover.app/books/232617/6432850-L.jpg",
                                            "color": "#958567",
                                            "width": 375,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 454688,
                                "editions": [
                                    {
                                        "pages": 258,
                                        "id": 31422831
                                    }
                                ],
                                "cached_image": {
                                    "id": 2302677,
                                    "url": "https://assets.hardcover.app/edition/31422831/d6e1d6447aec39c7ff13600f6c268ef156631dbe.jpeg",
                                    "color": "#d1ced4",
                                    "width": 311,
                                    "height": 500,
                                    "color_name": "Pink"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-03-08",
                        "edition": {
                            "title": "The Fortune Men",
                            "pages": 315,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "nadifa-mohamed",
                                        "name": "Nadifa Mohamed",
                                        "cachedImage": {
                                            "id": 179568,
                                            "url": "https://assets.hardcover.app/books/151335/6868479-L.jpg",
                                            "color": "#45baf6",
                                            "width": 244,
                                            "height": 346,
                                            "color_name": "Blue"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 455009,
                                "editions": [
                                    {
                                        "pages": 315,
                                        "id": 30409507
                                    }
                                ],
                                "cached_image": {
                                    "id": 734932,
                                    "url": "https://assets.hardcover.app/edition/30409507/11964814-L.jpg",
                                    "color": "#006266",
                                    "width": 310,
                                    "height": 500,
                                    "color_name": "Blue"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-05-08",
                        "edition": {
                            "title": "The Language of Cities",
                            "pages": 240,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "deyan-sudjic-eeb92e52-010a-4fc9-9a54-80103ef7a806",
                                        "name": "Deyan Sudjic",
                                        "cachedImage": {
                                            "id": 214096,
                                            "url": "https://assets.hardcover.app/books/186960/3078100-L.jpg",
                                            "color": "#6eac4c",
                                            "width": 339,
                                            "height": 475,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 461685,
                                "editions": [
                                    {
                                        "pages": 230,
                                        "id": 31572918
                                    }
                                ],
                                "cached_image": {
                                    "id": 1612992,
                                    "url": "https://assets.hardcover.app/external_data/59752690/9cff21a667e8d8a898ed0a62c6c3f1a39bf01ed3.jpeg",
                                    "color": "#464748",
                                    "width": 98,
                                    "height": 151,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-12-01",
                        "edition": {
                            "title": "The First Bad Man",
                            "pages": 288,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "miranda-july",
                                        "name": "Miranda July",
                                        "cachedImage": {
                                            "id": 218354,
                                            "url": "https://assets.hardcover.app/books/191361/256045-L.jpg",
                                            "color": "#e16b27",
                                            "width": 332,
                                            "height": 500,
                                            "color_name": "Orange"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 464065,
                                "editions": [
                                    {
                                        "pages": 276,
                                        "id": 31605731
                                    }
                                ],
                                "cached_image": {
                                    "id": 624509,
                                    "url": "https://assets.hardcover.app/edition/30381730/content.jpeg",
                                    "color": "#d7d7d8",
                                    "width": 128,
                                    "height": 197,
                                    "color_name": "Pink"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-07-31",
                        "edition": {
                            "title": "The Book You Wish Your Parents Had Read",
                            "pages": 256,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "philippa-perry",
                                        "name": "Philippa Perry",
                                        "cachedImage": {
                                            "id": 196656,
                                            "url": "https://assets.hardcover.app/books/168968/9507969-L.jpg",
                                            "color": "#224861",
                                            "width": 319,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 464919,
                                "editions": [
                                    {
                                        "pages": 256,
                                        "id": 30382592
                                    }
                                ],
                                "cached_image": {
                                    "id": 4206492,
                                    "url": "https://assets.hardcover.app/edition/30382592/ad06fd89f958d70ee3b3d65201803772c47adab4.jpeg",
                                    "color": "#d32608",
                                    "width": 324,
                                    "height": 500,
                                    "color_name": "Red"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-05-31",
                        "edition": {
                            "title": "The Amazing Adventures of Kavalier & Clay",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "michael-chabon-784e6464-0a80-408f-93bc-2325a98b0b54",
                                        "name": "Michael Chabon",
                                        "cachedImage": {
                                            "id": 2857,
                                            "url": "https://assets.hardcover.app/books/86561/8881753-L.jpg",
                                            "color": "#c16e06",
                                            "width": 333,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 467910,
                                "editions": [
                                    {
                                        "pages": 656,
                                        "id": 25721694
                                    }
                                ],
                                "cached_image": {
                                    "id": 4525858,
                                    "url": "https://assets.hardcover.app/edition/30385746/96cdd59ef83ad016f0a468bf76f0049bc36ec5da.jpeg",
                                    "color": "#b30406",
                                    "width": 333,
                                    "height": 500,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-10-10",
                        "edition": {
                            "title": "Infinite Detail",
                            "pages": 385,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "tim-maughan",
                                        "name": "Tim Maughan",
                                        "cachedImage": {
                                            "id": 277507,
                                            "url": "https://assets.hardcover.app/books/250696/10967949-L.jpg",
                                            "color": "#164602",
                                            "width": 462,
                                            "height": 500,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 468130,
                                "editions": [
                                    {
                                        "pages": 385,
                                        "id": 30385965
                                    }
                                ],
                                "cached_image": {
                                    "id": 654014,
                                    "url": "https://assets.hardcover.app/edition/30385965/content.jpeg",
                                    "color": "#f9f9fa",
                                    "width": 128,
                                    "height": 192,
                                    "color_name": "Pink"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-05-11",
                        "edition": {
                            "title": "The Wind-Up Bird Chronicle",
                            "pages": 607,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "id": 209137,
                                        "slug": "haruki-murakami",
                                        "name": "Haruki Murakami",
                                        "image": {
                                            "id": 1709616,
                                            "url": "https://assets.hardcover.app/author/209137/3202329615577719.jpg",
                                            "color": "#d8d8da",
                                            "width": 1704,
                                            "height": 1704,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "id": 62160,
                                        "slug": "jay-rubin",
                                        "name": "Jay Rubin",
                                        "image": {
                                            "id": 1709622,
                                            "url": "https://assets.hardcover.app/author/62160/510124025343579.jpg",
                                            "color": "#74684f",
                                            "width": 400,
                                            "height": 400,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 469816,
                                "editions": [
                                    {
                                        "pages": 912,
                                        "id": 30838258
                                    }
                                ],
                                "cached_image": {
                                    "id": 4799819,
                                    "url": "https://assets.hardcover.app/editions/30387653/7f3a72c2-328a-494c-bfea-0c884f8fcf47.jpg",
                                    "color": "#698fba",
                                    "width": 372,
                                    "height": 558,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-05-01",
                        "edition": {
                            "title": "Shape Up: Stop Running in Circles and Ship Work that Matters",
                            "pages": 133,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "ryan-singer",
                                        "name": "Ryan Singer",
                                        "cachedImage": {
                                            "id": 278844,
                                            "url": "https://assets.hardcover.app/books/252078/10316134-L.jpg",
                                            "color": "#013d43",
                                            "width": 387,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "jason-fried",
                                        "name": "Jason Fried",
                                        "cachedImage": {
                                            "id": 101343,
                                            "url": "https://assets.hardcover.app/books/70383/9595631-L.jpg",
                                            "color": "#a4a69d",
                                            "width": 325,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": "Foreword"
                                }
                            ],
                            "book": {
                                "id": 470464,
                                "editions": [
                                    {
                                        "pages": 133,
                                        "id": 30391295
                                    }
                                ],
                                "cached_image": {
                                    "id": 1258724,
                                    "url": "https://assets.hardcover.app/editions/30391295/8262366400839920-book-shape-up.jpg",
                                    "color": "#514f50",
                                    "width": 1013,
                                    "height": 1580,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-07-02",
                        "edition": {
                            "title": "Radical Technologies",
                            "pages": 368,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "adam-greenfield-08f2266c-f8da-4606-8e4c-cd35fcb23fb2",
                                        "name": "Adam  Greenfield",
                                        "cachedImage": {
                                            "id": 279006,
                                            "url": "https://assets.hardcover.app/books/252244/10813924-L.jpg",
                                            "color": "#5d5950",
                                            "width": 325,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 470758,
                                "editions": [
                                    {
                                        "pages": 368,
                                        "id": 30391616
                                    }
                                ],
                                "cached_image": {
                                    "id": 744671,
                                    "url": "https://assets.hardcover.app/edition/30391616/518d55f36fbafdf6abb778115b398c24e02fbd8f.jpeg",
                                    "color": "#fcfcfc",
                                    "width": 227,
                                    "height": 352,
                                    "color_name": "White"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-11-07",
                        "edition": {
                            "title": "Blockchain Revolution: How the Technology Behind Bitcoin Is Changing Money, Business, and the World",
                            "pages": 368,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "don-tapscott",
                                        "name": "Don Tapscott",
                                        "cachedImage": {
                                            "id": 241714,
                                            "url": "https://assets.hardcover.app/books/214609/10557839-L.jpg",
                                            "color": "#573803",
                                            "width": 351,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "alex-tapscott",
                                        "name": "Alex Tapscott",
                                        "cachedImage": {
                                            "id": 279007,
                                            "url": "https://assets.hardcover.app/books/252245/10814745-L.jpg",
                                            "color": "#565350",
                                            "width": 360,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 470761,
                                "editions": [
                                    {
                                        "pages": 368,
                                        "id": 31606212
                                    }
                                ],
                                "cached_image": {
                                    "id": 731805,
                                    "url": "https://assets.hardcover.app/edition/30391619/b249f1b0ba9ab70cc3544e4935becc3c13ea2830.jpeg",
                                    "color": "#f1f3f2",
                                    "width": 329,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-03-26",
                        "edition": {
                            "title": "99 Bottles of OOP",
                            "pages": 225,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "sandi-metz",
                                        "name": "Sandi Metz",
                                        "cachedImage": {
                                            "id": 278235,
                                            "url": "https://assets.hardcover.app/books/251454/6432483-L.jpg",
                                            "color": "#e9ecec",
                                            "width": 331,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "katrina-owen",
                                        "name": "Katrina Owen",
                                        "cachedImage": {
                                            "id": 279797,
                                            "url": "https://assets.hardcover.app/books/253067/10011444-L.jpg",
                                            "color": "#d8e3e3",
                                            "width": 352,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 473644,
                                "editions": [
                                    {
                                        "pages": 225,
                                        "id": 30394686
                                    }
                                ],
                                "cached_image": {
                                    "id": 811749,
                                    "url": "https://assets.hardcover.app/edition/30394686/31183020._SX98_.jpg",
                                    "color": "#f20e07",
                                    "width": 98,
                                    "height": 127,
                                    "color_name": "Red"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-12-14",
                        "edition": {
                            "title": "The Anomaly",
                            "pages": 401,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "herve-le-tellier",
                                        "name": "Hervé Le Tellier",
                                        "cachedImage": {
                                            "id": 279855,
                                            "url": "https://assets.hardcover.app/books/253128/7281806-L.jpg",
                                            "color": "#e7e1d3",
                                            "width": 330,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "adriana-hunter",
                                        "name": "Adriana Hunter",
                                        "cachedImage": {
                                            "id": 279149,
                                            "url": "https://assets.hardcover.app/books/252391/6630404-L.jpg",
                                            "color": "#7a6a50",
                                            "width": 297,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 473754,
                                "editions": [
                                    {
                                        "pages": 401,
                                        "id": 30593290
                                    }
                                ],
                                "cached_image": {
                                    "id": 1613265,
                                    "url": "https://assets.hardcover.app/external_data/59704228/54661183e30d04ab2f0b70b70ae1610038affb9c.jpeg",
                                    "color": "#c9ccd7",
                                    "width": 128,
                                    "height": 195,
                                    "color_name": "Pink"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-10-31",
                        "edition": {
                            "title": "Tomorrow, and Tomorrow, and Tomorrow",
                            "pages": 416,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "gabrielle-zevin",
                                        "name": "Gabrielle Zevin",
                                        "cachedImage": {
                                            "id": 31568,
                                            "url": "https://assets.hardcover.app/authors/62843/7321015-L.jpg",
                                            "color": "#b98d74",
                                            "width": 333,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 479910,
                                "editions": [
                                    {
                                        "pages": 536,
                                        "id": 31508112
                                    }
                                ],
                                "cached_image": {
                                    "id": 2814088,
                                    "url": "https://assets.hardcover.app/edition/30535150/2efdfd508a803c89913fd6e987f69048a17c89c6.jpeg",
                                    "color": "#dfdcbc",
                                    "width": 329,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-09-13",
                        "edition": {
                            "title": "Flowers for Algernon",
                            "pages": 311,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "daniel-keyes",
                                        "name": "Daniel Keyes",
                                        "cachedImage": {
                                            "id": 33998,
                                            "url": "https://assets.hardcover.app/authors/163451/8435091-L.jpg",
                                            "color": "#f2e6ea",
                                            "width": 258,
                                            "height": 300,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 480139,
                                "editions": [
                                    {
                                        "pages": 377,
                                        "id": 31561182
                                    }
                                ],
                                "cached_image": {
                                    "id": 3511180,
                                    "url": "https://assets.hardcover.app/edition/116801/17635b05a887e885abf4469ef2ab18f1e54dc298.jpeg",
                                    "color": "#e9ecee",
                                    "width": 323,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-02-21",
                        "edition": {
                            "title": "Venomous Lumpsucker",
                            "pages": 337,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "ned-beauman",
                                        "name": "Ned Beauman",
                                        "cachedImage": {
                                            "id": 228849,
                                            "url": "https://assets.hardcover.app/books/202012/10708317-L.jpg",
                                            "color": "#808d6a",
                                            "width": 372,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 480263,
                                "editions": [
                                    {
                                        "pages": 337,
                                        "id": 30420237
                                    }
                                ],
                                "cached_image": {
                                    "id": 1171966,
                                    "url": "https://assets.hardcover.app/external_data/59799802/9ab51733cfd7e23d3d1fa36cd488b2a10618e63c.jpeg",
                                    "color": "#f00028",
                                    "width": 128,
                                    "height": 193,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-03-31",
                        "edition": {
                            "title": "Tales from the Cafe",
                            "pages": 224,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "toshikazu-kawaguchi",
                                        "name": "Toshikazu Kawaguchi",
                                        "cachedImage": {
                                            "id": 264081,
                                            "url": "https://assets.hardcover.app/books/237074/671146-L.jpg",
                                            "color": "#789b6e",
                                            "width": 326,
                                            "height": 475,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 480625,
                                "editions": [
                                    {
                                        "pages": 224,
                                        "id": 30420605
                                    }
                                ],
                                "cached_image": {
                                    "id": 1621383,
                                    "url": "https://assets.hardcover.app/external_data/59518546/c4342243cade7119e8dc4ac6c4f4cbbe525b3710.jpeg",
                                    "color": "#f5ede5",
                                    "width": 128,
                                    "height": 194,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-10-31",
                        "edition": {
                            "title": "When I Sing, Mountains Dance",
                            "pages": 216,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "irene-sola",
                                        "name": "Irene Solà",
                                        "cachedImage": {
                                            "id": 286555,
                                            "url": "https://assets.hardcover.app/books/260071/1321828-L.jpg",
                                            "color": "#e8e8e7",
                                            "width": 313,
                                            "height": 475,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "mara-faye-lethem",
                                        "name": "Mara Faye Lethem",
                                        "cachedImage": {
                                            "id": 286556,
                                            "url": "https://assets.hardcover.app/books/260072/301222-L.jpg",
                                            "color": "#496652",
                                            "width": 311,
                                            "height": 475,
                                            "color_name": "Green"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 480670,
                                "editions": [
                                    {
                                        "pages": 196,
                                        "id": 31497378
                                    }
                                ],
                                "cached_image": {
                                    "id": 748276,
                                    "url": "https://assets.hardcover.app/edition/30420651/12425778-L.jpg",
                                    "color": "#af2216",
                                    "width": 266,
                                    "height": 400,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-07-23",
                        "edition": {
                            "title": "The Shortest History of Germany",
                            "pages": 226,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "james-hawes",
                                        "name": "James Hawes",
                                        "cachedImage": {
                                            "id": 286898,
                                            "url": "https://assets.hardcover.app/books/260427/8129403-L.jpg",
                                            "color": "#c9b4ac",
                                            "width": 323,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 481442,
                                "editions": [
                                    {
                                        "pages": 226,
                                        "id": 30421429
                                    }
                                ],
                                "cached_image": {
                                    "id": 748420,
                                    "url": "https://assets.hardcover.app/edition/30421429/10451541-L.jpg",
                                    "color": "#f9f4d0",
                                    "width": 324,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-09-09",
                        "edition": {
                            "title": "How To Be Right… in a World Gone Wrong",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "james-obrien",
                                        "name": "James O'Brien",
                                        "cachedImage": {
                                            "id": 287206,
                                            "url": "https://assets.hardcover.app/books/260746/8712349-L.jpg",
                                            "color": "#fefefe",
                                            "width": 329,
                                            "height": 500,
                                            "color_name": "White"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 482042,
                                "editions": [],
                                "cached_image": {
                                    "id": 748576,
                                    "url": "https://assets.hardcover.app/edition/30422053/39078159._SX98_.jpg",
                                    "color": "#e7e2da",
                                    "width": 98,
                                    "height": 153,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-03-24",
                        "edition": {
                            "title": "The Montessori Baby",
                            "pages": 283,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "simone-davies",
                                        "name": "Simone Davies",
                                        "cachedImage": {
                                            "id": 287516,
                                            "url": "https://assets.hardcover.app/books/261061/10815155-L.jpg",
                                            "color": "#4a4640",
                                            "width": 327,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "junnifa-uzodike",
                                        "name": "Junnifa Uzodike",
                                        "cachedImage": {
                                            "id": 287517,
                                            "url": "https://assets.hardcover.app/books/261062/10818376-L.jpg",
                                            "color": "#403e2b",
                                            "width": 315,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "sanny-van-loon",
                                        "name": "Sanny Van Loon",
                                        "cachedImage": {
                                            "id": 287518,
                                            "url": "https://assets.hardcover.app/books/261063/10818390-L.jpg",
                                            "color": "#132701",
                                            "width": 488,
                                            "height": 500,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": "Illustrator"
                                }
                            ],
                            "book": {
                                "id": 482530,
                                "editions": [
                                    {
                                        "pages": 283,
                                        "id": 30422557
                                    }
                                ],
                                "cached_image": {
                                    "id": 748778,
                                    "url": "https://assets.hardcover.app/edition/30422557/54110546._SX98_.jpg",
                                    "color": "#f0f1e8",
                                    "width": 98,
                                    "height": 137,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-04-19",
                        "edition": {
                            "title": "Look Who's Back",
                            "pages": 352,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "timur-vermes",
                                        "name": "Timur Vermes",
                                        "cachedImage": {
                                            "id": 31767,
                                            "url": "https://assets.hardcover.app/authors/72465/7240198-L.jpg",
                                            "color": "#252525",
                                            "width": 215,
                                            "height": 215,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "jamie-bulloch",
                                        "name": "Jamie Bulloch",
                                        "cachedImage": {
                                            "id": 278350,
                                            "url": "https://assets.hardcover.app/books/251570/6861975-L.jpg",
                                            "color": "#a29478",
                                            "width": 249,
                                            "height": 350,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 483033,
                                "editions": [
                                    {
                                        "pages": 352,
                                        "id": 30423349
                                    }
                                ],
                                "cached_image": {
                                    "id": 2469655,
                                    "url": "https://assets.hardcover.app/external_data/59470283/361dfa735d7634b4bfd175842f4f6e9d7c5bee3f.jpeg",
                                    "color": "#fcfcfc",
                                    "width": 98,
                                    "height": 158,
                                    "color_name": "White"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-09-04",
                        "edition": {
                            "title": "Naïve. Super",
                            "pages": 208,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "erlend-loe",
                                        "name": "Erlend Loe",
                                        "cachedImage": {
                                            "id": 119316,
                                            "url": "https://assets.hardcover.app/books/89091/8715193-L.jpg",
                                            "color": "#fefefe",
                                            "width": 384,
                                            "height": 500,
                                            "color_name": "White"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "tor-ketil-solberg",
                                        "name": "Tor Ketil Solberg",
                                        "cachedImage": {
                                            "id": 306133,
                                            "url": "https://assets.hardcover.app/books/280326/10370677-L.jpg",
                                            "color": "#3e433f",
                                            "width": 357,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 487282,
                                "editions": [
                                    {
                                        "pages": 208,
                                        "id": 30434062
                                    }
                                ],
                                "cached_image": {
                                    "id": 2473758,
                                    "url": "https://assets.hardcover.app/external_data/59505329/e19669a1f1f0bdaa3c37ea0f76dbe8702eaca51a.jpeg",
                                    "color": "#f1ac77",
                                    "width": 98,
                                    "height": 160,
                                    "color_name": "Silver"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-01-28",
                        "edition": {
                            "title": "If an Egyptian Cannot Speak English",
                            "pages": 186,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "noor-naga",
                                        "name": "Noor Naga",
                                        "cachedImage": {
                                            "id": 306677,
                                            "url": "https://assets.hardcover.app/books/280897/4749180-L.jpg",
                                            "color": "#c4bec0",
                                            "width": 128,
                                            "height": 171,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 488302,
                                "editions": [
                                    {
                                        "pages": 192,
                                        "id": 30603942
                                    }
                                ],
                                "cached_image": {
                                    "id": 1823038,
                                    "url": "https://assets.hardcover.app/external_data/59505935/43686d99386ba3511881fa473de2ce30d9c29683.jpeg",
                                    "color": "#a27e15",
                                    "width": 98,
                                    "height": 147,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-06-03",
                        "edition": {
                            "title": "Become an Effective Software Engineering Manager",
                            "pages": 398,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "james-stanier",
                                        "name": "James Stanier",
                                        "cachedImage": {
                                            "id": 309333,
                                            "url": "https://assets.hardcover.app/books/283630/7448299-L.jpg",
                                            "color": "#b378a4",
                                            "width": 449,
                                            "height": 500,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 491808,
                                "editions": [
                                    {
                                        "pages": 398,
                                        "id": 30439430
                                    }
                                ],
                                "cached_image": {
                                    "id": 3635811,
                                    "url": "https://assets.hardcover.app/edition/30439430/eacce19fe9ddfc269f38e34e7512d8aa127413d2.jpeg",
                                    "color": "#e0edf4",
                                    "width": 417,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-06-26",
                        "edition": {
                            "title": "Lapvona",
                            "pages": 320,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "ottessa-moshfegh",
                                        "name": "Ottessa Moshfegh",
                                        "cachedImage": {
                                            "id": 6525,
                                            "url": "https://assets.hardcover.app/books/204703/604128-L.jpg",
                                            "color": "#a15720",
                                            "width": 293,
                                            "height": 475,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 498093,
                                "editions": [
                                    {
                                        "pages": 320,
                                        "id": 31511606
                                    }
                                ],
                                "cached_image": {
                                    "id": 620980,
                                    "url": "https://assets.hardcover.app/edition/30446985/content.jpeg",
                                    "color": "#706146",
                                    "width": 128,
                                    "height": 193,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-07-05",
                        "edition": {
                            "title": "The Last Day",
                            "pages": 386,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "andrew-hunter-murray",
                                        "name": "Andrew Hunter Murray",
                                        "cachedImage": {
                                            "id": 320032,
                                            "url": "https://assets.hardcover.app/books/294657/365966-L.jpg",
                                            "color": "#efc273",
                                            "width": 299,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 507276,
                                "editions": [
                                    {
                                        "pages": 416,
                                        "id": 30502149
                                    }
                                ],
                                "cached_image": {
                                    "id": 649589,
                                    "url": "https://assets.hardcover.app/edition/30458512/content.jpeg",
                                    "color": "#012e5b",
                                    "width": 128,
                                    "height": 193,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-04-18",
                        "edition": {
                            "title": "Nightcrawling",
                            "pages": 0,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "leila-mottley",
                                        "name": "Leila Mottley",
                                        "cachedImage": {
                                            "id": 326046,
                                            "url": "https://assets.hardcover.app/books/299319/3730644-L.jpg",
                                            "color": "#dfd167",
                                            "width": 128,
                                            "height": 178,
                                            "color_name": "Gold"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 513769,
                                "editions": [
                                    {
                                        "pages": 289,
                                        "id": 31533149
                                    }
                                ],
                                "cached_image": {
                                    "id": 654428,
                                    "url": "https://assets.hardcover.app/edition/30466192/content.jpeg",
                                    "color": "#de2104",
                                    "width": 128,
                                    "height": 192,
                                    "color_name": "Red"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-08-02",
                        "edition": {
                            "title": "The Dry Heart",
                            "pages": 88,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "natalia-ginzburg",
                                        "name": "Natalia Ginzburg",
                                        "cachedImage": {
                                            "id": 270673,
                                            "url": "https://assets.hardcover.app/books/243614/105389-L.jpg",
                                            "color": "#b4c4cf",
                                            "width": 429,
                                            "height": 475,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "frances-frenaye",
                                        "name": "Frances Frenaye",
                                        "cachedImage": {
                                            "id": 283662,
                                            "url": "https://assets.hardcover.app/books/257062/1569070-L.jpg",
                                            "color": "#d2b370",
                                            "width": 324,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": "Translator"
                                },
                                {
                                    "author": {
                                        "slug": "4b40f5d6-f6c3-4d66-999e-8c21a84c70ce",
                                        "name": "نازنین احسانی‌طباطبایی",
                                        "cachedImage": {
                                            "id": 328285,
                                            "url": "https://assets.hardcover.app/books/301630/10572365-L.jpg",
                                            "color": "#454442",
                                            "width": 290,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 516272,
                                "editions": [
                                    {
                                        "pages": 88,
                                        "id": 30468941
                                    }
                                ],
                                "cached_image": {
                                    "id": 1006590,
                                    "url": "https://assets.hardcover.app/external_data/59541549/bdd4a87fba5214a60c2a6e838e81ba942c09b209.jpeg",
                                    "color": "#719a95",
                                    "width": 98,
                                    "height": 151,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-03-28",
                        "edition": {
                            "title": "Astral Season, Beastly Season",
                            "pages": 126,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "tahi-saihate",
                                        "name": "Tahi Saihate",
                                        "cachedImage": {
                                            "id": 329787,
                                            "url": "https://assets.hardcover.app/books/303178/10796896-L.jpg",
                                            "color": "#5e5a56",
                                            "width": 500,
                                            "height": 444,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "kalau-almony",
                                        "name": "Kalau Almony",
                                        "cachedImage": {
                                            "id": 329788,
                                            "url": "https://assets.hardcover.app/books/303179/10794550-L.jpg",
                                            "color": "#66686b",
                                            "width": 378,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 518006,
                                "editions": [
                                    {
                                        "pages": 126,
                                        "id": 30470874
                                    }
                                ],
                                "cached_image": {
                                    "id": 867722,
                                    "url": "https://assets.hardcover.app/external_data/59543054/5587234ec2dd011171306253af1b28b67d9e655d.jpeg",
                                    "color": "#eae8e4",
                                    "width": 98,
                                    "height": 150,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-01-19",
                        "edition": {
                            "title": "Two Serious Ladies",
                            "pages": 201,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "jane-bowles",
                                        "name": "Jane Bowles",
                                        "cachedImage": {
                                            "id": 298703,
                                            "url": "https://assets.hardcover.app/books/272623/10799469-L.jpg",
                                            "color": "#755f41",
                                            "width": 312,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 521656,
                                "editions": [
                                    {
                                        "pages": 201,
                                        "id": 31917900
                                    }
                                ],
                                "cached_image": {
                                    "id": 4741928,
                                    "url": "https://assets.hardcover.app/editions/31936973/966665798168485.jpg",
                                    "color": "#d8d1c4",
                                    "width": 1668,
                                    "height": 2560,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-03-30",
                        "edition": {
                            "title": "The Island of Missing Trees",
                            "pages": 369,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "elif-shafak",
                                        "name": "Elif Shafak",
                                        "cachedImage": {
                                            "id": 262758,
                                            "url": "https://assets.hardcover.app/books/236223/10809797-L.jpg",
                                            "color": "#164543",
                                            "width": 309,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 529112,
                                "editions": [
                                    {
                                        "pages": 368,
                                        "id": 30409739
                                    }
                                ],
                                "cached_image": {
                                    "id": 2040575,
                                    "url": "https://assets.hardcover.app/external_data/59630616/fffef363be8129a7e2079b9712391e296751b8eb.jpeg",
                                    "color": "#006598",
                                    "width": 128,
                                    "height": 192,
                                    "color_name": "Blue"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2016-07-01",
                        "edition": {
                            "title": "Forces of Nature",
                            "pages": 288,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "andrew-cohen-f72a3af6-7552-4f79-98f7-bd9956722a95",
                                        "name": "Andrew    Cohen",
                                        "cachedImage": {
                                            "id": 342178,
                                            "url": "https://assets.hardcover.app/books/315983/8648586-L.jpg",
                                            "color": "#cda512",
                                            "width": 325,
                                            "height": 500,
                                            "color_name": "Gold"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "brian-cox-daec598e-242e-49b5-8cf3-bd64247bf20c",
                                        "name": "Brian Cox",
                                        "cachedImage": {
                                            "id": 2004,
                                            "url": "https://assets.hardcover.app/books/61187/258957-L.jpg",
                                            "color": "#d15907",
                                            "width": 330,
                                            "height": 500,
                                            "color_name": "Orange"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 564376,
                                "editions": [
                                    {
                                        "pages": 288,
                                        "id": 31512899
                                    }
                                ],
                                "cached_image": {
                                    "id": 768561,
                                    "url": "https://assets.hardcover.app/edition/30525184/7711087-L.jpg",
                                    "color": "#4c4236",
                                    "width": 304,
                                    "height": 400,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-03-22",
                        "edition": {
                            "title": "Ablutions",
                            "pages": 224,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "patrick-dewitt",
                                        "name": "Patrick deWitt",
                                        "cachedImage": {
                                            "id": 219383,
                                            "url": "https://assets.hardcover.app/books/192425/8742007-L.jpg",
                                            "color": "#e8e1af",
                                            "width": 331,
                                            "height": 499,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 569512,
                                "editions": [
                                    {
                                        "pages": 176,
                                        "id": 31618093
                                    }
                                ],
                                "cached_image": {
                                    "id": 1528066,
                                    "url": "https://assets.hardcover.app/external_data/60198748/426781cbd44a7f43178748f77a0d5be52b873503.jpeg",
                                    "color": "#b10004",
                                    "width": 128,
                                    "height": 197,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-01-20",
                        "edition": {
                            "title": "Future Histories",
                            "pages": 336,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "lizzie-oshea",
                                        "name": "Lizzie O'Shea",
                                        "cachedImage": {
                                            "id": 361272,
                                            "url": "https://assets.hardcover.app/books/335700/7353917-L.jpg",
                                            "color": "#68626b",
                                            "width": 97,
                                            "height": 160,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 571209,
                                "editions": [
                                    {
                                        "pages": 336,
                                        "id": 30533762
                                    }
                                ],
                                "cached_image": {
                                    "id": 770386,
                                    "url": "https://assets.hardcover.app/edition/30533762/45758397._SX98_.jpg",
                                    "color": "#3b3731",
                                    "width": 98,
                                    "height": 148,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-04-06",
                        "edition": {
                            "title": "The Noise of Time",
                            "pages": 196,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "julian-barnes-4d74f66a-6fee-44f5-9ca0-70db30b1421a",
                                        "name": "Julian Barnes",
                                        "cachedImage": {
                                            "id": 33009,
                                            "url": "https://assets.hardcover.app/authors/124639/7425746-L.jpg",
                                            "color": "#252119",
                                            "width": 184,
                                            "height": 275,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 586030,
                                "editions": [
                                    {
                                        "pages": 225,
                                        "id": 17694660
                                    }
                                ],
                                "cached_image": {
                                    "id": 4007571,
                                    "url": "https://assets.hardcover.app/edition/30552012/923a14e21bb54166e89a99c4a917088794743751.jpeg",
                                    "color": "#dad9b8",
                                    "width": 347,
                                    "height": 500,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-02-12",
                        "edition": {
                            "title": "Through the Arc of the Rain Forest",
                            "pages": 212,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "karen-tei-yamashita",
                                        "name": "Karen Tei Yamashita",
                                        "cachedImage": {
                                            "id": 269761,
                                            "url": "https://assets.hardcover.app/books/242672/6155972-L.jpg",
                                            "color": "#fefefe",
                                            "width": 320,
                                            "height": 500,
                                            "color_name": "White"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 597060,
                                "editions": [
                                    {
                                        "pages": 212,
                                        "id": 30565992
                                    }
                                ],
                                "cached_image": {
                                    "id": 837200,
                                    "url": "https://assets.hardcover.app/edition/30697753/content.jpeg",
                                    "color": "#efefef",
                                    "width": 128,
                                    "height": 195,
                                    "color_name": "White"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-08-06",
                        "edition": {
                            "title": "The Shortest History of England",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "james-hawes",
                                        "name": "James Hawes",
                                        "cachedImage": {
                                            "id": 286898,
                                            "url": "https://assets.hardcover.app/books/260427/8129403-L.jpg",
                                            "color": "#c9b4ac",
                                            "width": 323,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 615172,
                                "editions": [
                                    {
                                        "pages": 270,
                                        "id": 31487999
                                    }
                                ],
                                "cached_image": {
                                    "id": 2626237,
                                    "url": "https://assets.hardcover.app/external_data/60868924/5e096bc15ec1adb3b783886d15ff1184ce131029.jpeg",
                                    "color": "#f9ecd3",
                                    "width": 98,
                                    "height": 152,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-11-22",
                        "edition": {
                            "title": "The Ruin of All Witches: Life and Death in the New World",
                            "pages": 336,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "malcolm-gaskill",
                                        "name": "Malcolm Gaskill",
                                        "cachedImage": {
                                            "id": 329205,
                                            "url": "https://assets.hardcover.app/books/302580/8210767-L.jpg",
                                            "color": "#b8a98d",
                                            "width": 302,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 616331,
                                "editions": [
                                    {
                                        "pages": 336,
                                        "id": 31703499
                                    }
                                ],
                                "cached_image": {
                                    "id": 875537,
                                    "url": "https://assets.hardcover.app/external_data/59658567/5353e8b092547c15e87f4f04881e20292d6639d2.jpeg",
                                    "color": "#e60429",
                                    "width": 98,
                                    "height": 150,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-05-22",
                        "edition": {
                            "title": "A Cruel Bird Came to the Nest and Looked In",
                            "pages": 290,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "magnus-mills",
                                        "name": "Magnus Mills",
                                        "cachedImage": {
                                            "id": 158339,
                                            "url": "https://assets.hardcover.app/books/129363/1867768-L.jpg",
                                            "color": "#531a1a",
                                            "width": 313,
                                            "height": 500,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 654638,
                                "editions": [
                                    {
                                        "pages": 276,
                                        "id": 30636055
                                    }
                                ],
                                "cached_image": {
                                    "id": 787774,
                                    "url": "https://assets.hardcover.app/edition/30636055/15943711._SX98_.jpg",
                                    "color": "#ededd6",
                                    "width": 98,
                                    "height": 149,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-06-10",
                        "edition": {
                            "title": "Kinder Than Solitude",
                            "pages": 294,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "id": 155744,
                                        "slug": "yiyun-li-05e5871b-e57e-417c-96e4-7fcf484335b5",
                                        "name": "Yiyun Li",
                                        "image": {
                                            "id": 183843,
                                            "url": "https://assets.hardcover.app/books/155744/6442338-L.jpg",
                                            "color": "#235ac9",
                                            "width": 375,
                                            "height": 500,
                                            "color_name": "Blue"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 660058,
                                "editions": [
                                    {
                                        "pages": 354,
                                        "id": 31581080
                                    }
                                ],
                                "cached_image": {
                                    "id": 789411,
                                    "url": "https://assets.hardcover.app/edition/30642901/12400982-L.jpg",
                                    "color": "#a0b7c0",
                                    "width": 258,
                                    "height": 400,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-03-16",
                        "edition": {
                            "title": "The Raptures",
                            "pages": 286,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "jan-carson",
                                        "name": "Jan Carson",
                                        "cachedImage": {
                                            "id": 271486,
                                            "url": "https://assets.hardcover.app/books/244457/8175779-L.jpg",
                                            "color": "#d9c5af",
                                            "width": 297,
                                            "height": 500,
                                            "color_name": "Silver"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 660621,
                                "editions": [
                                    {
                                        "pages": 286,
                                        "id": 30643645
                                    }
                                ],
                                "cached_image": {
                                    "id": 817412,
                                    "url": "https://assets.hardcover.app/edition/30643645/content.jpeg",
                                    "color": "#eceae0",
                                    "width": 128,
                                    "height": 200,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-03-06",
                        "edition": {
                            "title": "The Strange Death of Europe",
                            "pages": 352,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "douglas-murray",
                                        "name": "Douglas Murray",
                                        "cachedImage": {
                                            "id": 114563,
                                            "url": "https://assets.hardcover.app/books/84054/625306-L.jpg",
                                            "color": "#246a0b",
                                            "width": 500,
                                            "height": 449,
                                            "color_name": "Green"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 672198,
                                "editions": [
                                    {
                                        "pages": 352,
                                        "id": 30658046
                                    }
                                ],
                                "cached_image": {
                                    "id": 792802,
                                    "url": "https://assets.hardcover.app/edition/30658046/c07499db04fd3b48e451bb7bdd68a39a8890e277.jpeg",
                                    "color": "#eaeae9",
                                    "width": 263,
                                    "height": 400,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-12-29",
                        "edition": {
                            "title": "The Maniac",
                            "pages": 298,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "benjamin-labatut",
                                        "name": "Benjamín Labatut",
                                        "cachedImage": {
                                            "id": 267967,
                                            "url": "https://assets.hardcover.app/books/240812/10280544-L.jpg",
                                            "color": "#605f59",
                                            "width": 448,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 677530,
                                "editions": [
                                    {
                                        "pages": 298,
                                        "id": 30664805
                                    }
                                ],
                                "cached_image": {
                                    "id": 3819655,
                                    "url": "https://assets.hardcover.app/external_data/61460765/7c95659db3cdcc393048d2ec3cc1549bc7b0c701.jpeg",
                                    "color": "#cfc4a2",
                                    "width": 331,
                                    "height": 500,
                                    "color_name": "Silver"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-12-29",
                        "edition": {
                            "title": "The New Dad's Survival Guide",
                            "pages": 0,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "rob-kemp",
                                        "name": "Rob Kemp",
                                        "cachedImage": {
                                            "id": 217489,
                                            "url": "https://assets.hardcover.app/books/190474/4286793-L.jpg",
                                            "color": "#24467c",
                                            "width": 128,
                                            "height": 156,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 696332,
                                "editions": [
                                    {
                                        "pages": 272,
                                        "id": 30685028
                                    }
                                ],
                                "cached_image": {
                                    "id": 827343,
                                    "url": "https://assets.hardcover.app/edition/30685024/content.jpeg",
                                    "color": "#f2f1ed",
                                    "width": 128,
                                    "height": 205,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-06-16",
                        "edition": {
                            "title": "Termush",
                            "pages": 119,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "sven-holm",
                                        "name": "Sven Holm",
                                        "cachedImage": {}
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 714620,
                                "editions": [
                                    {
                                        "pages": 119,
                                        "id": 30706632
                                    }
                                ],
                                "cached_image": {
                                    "id": 3509065,
                                    "url": "https://assets.hardcover.app/edition/30706632/902cb59943172691a8d1c5685c85ca8fd3b2ae0c.jpeg",
                                    "color": "#d19567",
                                    "width": 326,
                                    "height": 500,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2025-01-25",
                        "edition": {
                            "title": "Soldier Sailor",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "claire-kilroy",
                                        "name": "Claire Kilroy",
                                        "cachedImage": {
                                            "id": 202796,
                                            "url": "https://assets.hardcover.app/books/175294/10303745-L.jpg",
                                            "color": "#5b472e",
                                            "width": 305,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 766712,
                                "editions": [
                                    {
                                        "pages": 214,
                                        "id": 31580983
                                    }
                                ],
                                "cached_image": {
                                    "id": 3227753,
                                    "url": "https://assets.hardcover.app/edition/30767885/813134bf6d8b6f4271d35c57327aa0f91ffe89a7.jpeg",
                                    "color": "#6f1006",
                                    "width": 310,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-12-08",
                        "edition": {
                            "title": "Orbital",
                            "pages": 207,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "samantha-harvey-b694033a-5456-49e3-9704-881bd6be01cc",
                                        "name": "Samantha Harvey",
                                        "cachedImage": {
                                            "id": 4197766,
                                            "url": "https://assets.hardcover.app/author/137811/3385807092612638.jpeg",
                                            "color": "#5b5856",
                                            "width": 880,
                                            "height": 880,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 775856,
                                "editions": [
                                    {
                                        "pages": 207,
                                        "id": 30778685
                                    }
                                ],
                                "cached_image": {
                                    "id": 3084326,
                                    "url": "https://assets.hardcover.app/edition/30778685/6a4034584ba9f0e359119f7503f42ee66c270772.jpeg",
                                    "color": "#7d190e",
                                    "width": 340,
                                    "height": 500,
                                    "color_name": "Brown"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-03-19",
                        "edition": {
                            "title": "Norwegian Wood",
                            "pages": 298,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "haruki-murakami",
                                        "name": "Haruki Murakami",
                                        "cachedImage": {
                                            "id": 1709616,
                                            "url": "https://assets.hardcover.app/author/209137/3202329615577719.jpg",
                                            "color": "#d8d8da",
                                            "width": 1704,
                                            "height": 1704,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "jay-rubin",
                                        "name": "Jay Rubin",
                                        "cachedImage": {
                                            "id": 1709622,
                                            "url": "https://assets.hardcover.app/author/62160/510124025343579.jpg",
                                            "color": "#74684f",
                                            "width": 400,
                                            "height": 400,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 776952,
                                "editions": [
                                    {
                                        "pages": 600,
                                        "id": 31505881
                                    }
                                ],
                                "cached_image": {
                                    "id": 3730054,
                                    "url": "https://assets.hardcover.app/edition/12721462/13f19c67b1f83ab4aadfcb3676a999e1f171754c.jpeg",
                                    "color": "#d1a862",
                                    "width": 304,
                                    "height": 500,
                                    "color_name": "Orange"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-09-19",
                        "edition": {
                            "title": "Free: How Today's Smartest Businesses Profit by Giving Something for Nothing",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "chris-anderson-1fba6094-bfef-4723-af6d-daca0ee79bcb",
                                        "name": "Chris Anderson",
                                        "cachedImage": {
                                            "id": 186851,
                                            "url": "https://assets.hardcover.app/books/158845/8249389-L.jpg",
                                            "color": "#c8c8c2",
                                            "width": 319,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 781938,
                                "editions": [],
                                "cached_image": {}
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-09-16",
                        "edition": {
                            "title": "Black Box Thinking: The Surprising Truth About Success",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "matthew-syed",
                                        "name": "Matthew Syed",
                                        "cachedImage": {
                                            "id": 159938,
                                            "url": "https://assets.hardcover.app/books/131018/6517985-L.jpg",
                                            "color": "#6d795e",
                                            "width": 318,
                                            "height": 500,
                                            "color_name": "Gray"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 822926,
                                "editions": [],
                                "cached_image": {}
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-12-30",
                        "edition": {
                            "title": "The Theory of Everything Else",
                            "pages": 320,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "dan-schreiber",
                                        "name": "Dan Schreiber",
                                        "cachedImage": {}
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 846191,
                                "editions": [
                                    {
                                        "pages": 320,
                                        "id": 31532833
                                    }
                                ],
                                "cached_image": {
                                    "id": 1182902,
                                    "url": "https://assets.hardcover.app/external_data/59999125/e6c17077fefb9dd2dc7e6a005390c119d13e0a2b.jpeg",
                                    "color": "#d0190b",
                                    "width": 128,
                                    "height": 197,
                                    "color_name": "Red"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-05-31",
                        "edition": {
                            "title": "An Account of the Decline of the Great Auk, According to One Who Saw It",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "jessie-greengrass",
                                        "name": "Jessie Greengrass",
                                        "cachedImage": {
                                            "id": 326956,
                                            "url": "https://assets.hardcover.app/books/300260/360869-L.jpg",
                                            "color": "#e84e13",
                                            "width": 371,
                                            "height": 475,
                                            "color_name": "Orange"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 858482,
                                "editions": [],
                                "cached_image": {}
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-02-22",
                        "edition": {
                            "title": "The Toaster Project: Or A Heroic Attempt to Build a Simple Electric Appliance from Scratch",
                            "pages": 192,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "thomas-thwaites",
                                        "name": "Thomas Thwaites",
                                        "cachedImage": {
                                            "id": 265705,
                                            "url": "https://assets.hardcover.app/books/238478/6874149-L.jpg",
                                            "color": "#575950",
                                            "width": 344,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 860305,
                                "editions": [
                                    {
                                        "pages": 192,
                                        "id": 30876564
                                    }
                                ],
                                "cached_image": {
                                    "id": 3804343,
                                    "url": "https://assets.hardcover.app/external_data/61445984/b0a47142c3de205b1d8f354bb5e6665012d0c3a1.jpeg",
                                    "color": "#6b6c72",
                                    "width": 128,
                                    "height": 192,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2025-01-09",
                        "edition": {
                            "title": "A Leopard-Skin Hat",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "anne-serre",
                                        "name": "Anne Serre",
                                        "cachedImage": {
                                            "id": 35983,
                                            "url": "https://assets.hardcover.app/authors/243613/5945194-L.jpg",
                                            "color": "#574920",
                                            "width": 500,
                                            "height": 217,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "mark-hutchinson",
                                        "name": "Mark Hutchinson",
                                        "cachedImage": {
                                            "id": 206784,
                                            "url": "https://assets.hardcover.app/books/179410/4922120-L.jpg",
                                            "color": "#e7af62",
                                            "width": 128,
                                            "height": 148,
                                            "color_name": "Orange"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 1043652,
                                "editions": [
                                    {
                                        "pages": 72,
                                        "id": 31067962
                                    }
                                ],
                                "cached_image": {
                                    "id": 1552804,
                                    "url": "https://assets.hardcover.app/external_data/60213036/0ad7126d1703ed96f505af61fbb1203d9481c95f.jpeg",
                                    "color": "#a98e5a",
                                    "width": 128,
                                    "height": 204,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-07-02",
                        "edition": {
                            "title": "Butter: A Novel of Food and Murder",
                            "pages": 464,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "asako-yuzuki",
                                        "name": "Asako Yuzuki",
                                        "cachedImage": {
                                            "id": 339169,
                                            "url": "https://assets.hardcover.app/books/312881/8049126-L.jpg",
                                            "color": "#e1e4e5",
                                            "width": 331,
                                            "height": 500,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "polly-barton",
                                        "name": "Polly Barton",
                                        "cachedImage": {
                                            "id": 282622,
                                            "url": "https://assets.hardcover.app/books/255994/7969473-L.jpg",
                                            "color": "#a4898e",
                                            "width": 225,
                                            "height": 330,
                                            "color_name": "Pink"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 1083913,
                                "editions": [
                                    {
                                        "pages": 452,
                                        "id": 31491206
                                    }
                                ],
                                "cached_image": {
                                    "id": 1616892,
                                    "url": "https://assets.hardcover.app/external_data/60256332/67974084daa31c415300ca1a999e1db1e0957864.jpeg",
                                    "color": "#ebbc00",
                                    "width": 98,
                                    "height": 148,
                                    "color_name": "Gold"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-08-10",
                        "edition": {
                            "title": "Science and the City: The Mechanics Behind the Metropolis",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "laurie-winkless",
                                        "name": "Laurie Winkless",
                                        "cachedImage": {
                                            "id": 120106,
                                            "url": "https://assets.hardcover.app/books/89810/7881720-L.jpg",
                                            "color": "#4f6664",
                                            "width": 207,
                                            "height": 350,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1110418,
                                "editions": [],
                                "cached_image": {
                                    "id": 1645220,
                                    "url": "https://assets.hardcover.app/external_data/60281067/cc7763e91042e06aa6ca945f6bcaaeffe298d6aa.jpeg",
                                    "color": "#f5f5f0",
                                    "width": 98,
                                    "height": 155,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-06-10",
                        "edition": {
                            "title": "The Field of the Cloth of Gold",
                            "pages": 225,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "id": 129363,
                                        "slug": "magnus-mills",
                                        "name": "Magnus Mills",
                                        "image": {
                                            "id": 158339,
                                            "url": "https://assets.hardcover.app/books/129363/1867768-L.jpg",
                                            "color": "#531a1a",
                                            "width": 313,
                                            "height": 500,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1144628,
                                "editions": [
                                    {
                                        "pages": 225,
                                        "id": 31958906
                                    }
                                ],
                                "cached_image": {
                                    "id": 4802882,
                                    "url": "https://assets.hardcover.app/external_data/156149/d687074bb1db8d25cafac8252d09f7e8d86527d1.jpeg",
                                    "color": "#024f0a",
                                    "width": 327,
                                    "height": 500,
                                    "color_name": "Green"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-10-29",
                        "edition": {
                            "title": "River East, River West",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "aube-rey-lescure",
                                        "name": "Aube Rey Lescure",
                                        "cachedImage": {}
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1167071,
                                "editions": [
                                    {
                                        "pages": 342,
                                        "id": 31740369
                                    }
                                ],
                                "cached_image": {
                                    "id": 1695865,
                                    "url": "https://assets.hardcover.app/external_data/60327780/d6af9da9730eff72f9f4f881c4be0df2198e52fa.jpeg",
                                    "color": "#a4abc8",
                                    "width": 98,
                                    "height": 145,
                                    "color_name": "Pink"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-09-10",
                        "edition": {
                            "title": "The Twittering Machine",
                            "pages": 250,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "richard-seymour",
                                        "name": "Richard Seymour",
                                        "cachedImage": {}
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1187338,
                                "editions": [
                                    {
                                        "pages": 256,
                                        "id": 31565714
                                    }
                                ],
                                "cached_image": {
                                    "id": 1726120,
                                    "url": "https://assets.hardcover.app/external_data/60348754/0c2a6b1100c0373aaaaf2905e59f0dc89780e8ac.jpeg",
                                    "color": "#9f978b",
                                    "width": 200,
                                    "height": 190,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2025-03-13",
                        "edition": {
                            "title": "Mystery Lights",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "lena-valencia",
                                        "name": "Lena Valencia",
                                        "cachedImage": {}
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1199799,
                                "editions": [
                                    {
                                        "pages": 256,
                                        "id": 31909347
                                    }
                                ],
                                "cached_image": {
                                    "id": 2751883,
                                    "url": "https://assets.hardcover.app/external_data/60981634/a461327a3dd90cc482c6fddb6fea57ec45df5854.jpeg",
                                    "color": "#6d614d",
                                    "width": 98,
                                    "height": 152,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-11-26",
                        "edition": {
                            "title": "Our Spoons Came From Woolworths",
                            "pages": 208,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "barbara-comyns-7d1bbca9-fb36-4f94-97d4-963261e437ef",
                                        "name": "Barbara Comyns",
                                        "cachedImage": {
                                            "id": 214545,
                                            "url": "https://assets.hardcover.app/books/187431/214746-L.jpg",
                                            "color": "#edede2",
                                            "width": 306,
                                            "height": 475,
                                            "color_name": "Beige"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "maggie-ofarrell-3ddc1996-e80c-4797-87c3-c3f1ed5e0659",
                                        "name": "Maggie O'Farrell",
                                        "cachedImage": {
                                            "id": 125607,
                                            "url": "https://assets.hardcover.app/books/95505/10573350-L.jpg",
                                            "color": "#073c5d",
                                            "width": 307,
                                            "height": 500,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": "Introduction"
                                }
                            ],
                            "book": {
                                "id": 1405679,
                                "editions": [
                                    {
                                        "pages": 208,
                                        "id": 31436890
                                    }
                                ],
                                "cached_image": {
                                    "id": 4118959,
                                    "url": "https://assets.hardcover.app/edition/31436890/8f08643af5ae88d514eeee49d4b1ef8ad9b8f5b3.jpeg",
                                    "color": "#eea868",
                                    "width": 325,
                                    "height": 500,
                                    "color_name": "Orange"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-02-05",
                        "edition": {
                            "title": "The Underground Railroad",
                            "pages": 306,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "colson-whitehead",
                                        "name": "Colson Whitehead",
                                        "cachedImage": {
                                            "id": 122313,
                                            "url": "https://assets.hardcover.app/books/92079/7075869-L.jpg",
                                            "color": "#b20401",
                                            "width": 336,
                                            "height": 500,
                                            "color_name": "Red"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1487609,
                                "editions": [
                                    {
                                        "pages": 366,
                                        "id": 30845742
                                    }
                                ],
                                "cached_image": {
                                    "id": 3723199,
                                    "url": "https://assets.hardcover.app/edition/29620225/f008ccbc2d8fe0ea58cd84bbbcf294a46f869876.jpeg",
                                    "color": "#d01108",
                                    "width": 330,
                                    "height": 500,
                                    "color_name": "Red"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2021-10-11",
                        "edition": {
                            "title": "Dandy in the Underworld: An Unauthorized Autobiography",
                            "pages": 356,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "sebastian-horsley",
                                        "name": "Sebastian Horsley",
                                        "cachedImage": {}
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1512974,
                                "editions": [
                                    {
                                        "pages": 356,
                                        "id": 31567177
                                    }
                                ],
                                "cached_image": {
                                    "id": 3809054,
                                    "url": "https://assets.hardcover.app/edition/31567177/e4df57257b59ffab4b3bd7cac074e717e7eddd77.jpeg",
                                    "color": "#c60304",
                                    "width": 328,
                                    "height": 500,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-12-18",
                        "edition": {
                            "title": "The Specters of Algeria",
                            "pages": 168,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "slug": "hwang-yeo-jung",
                                        "name": "Hwang Yeo Jung",
                                        "cachedImage": {}
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "slug": "yewon-jung",
                                        "name": "Yewon Jung",
                                        "cachedImage": {
                                            "id": 260489,
                                            "url": "https://assets.hardcover.app/books/233942/10049774-L.jpg",
                                            "color": "#284158",
                                            "width": 500,
                                            "height": 450,
                                            "color_name": "Purple"
                                        }
                                    },
                                    "contribution": "Translator"
                                }
                            ],
                            "book": {
                                "id": 1525078,
                                "editions": [
                                    {
                                        "pages": 168,
                                        "id": 31581045
                                    }
                                ],
                                "cached_image": {
                                    "id": 3845914,
                                    "url": "https://assets.hardcover.app/edition/31581045/cc3f442da1245585bd0a69faf986f0f2156d3f46.jpeg",
                                    "color": "#bf0604",
                                    "width": 326,
                                    "height": 500,
                                    "color_name": "Red"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2019-12-09",
                        "edition": {
                            "title": "Mastering Modular JavaScript",
                            "pages": 164,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "id": 680699,
                                        "slug": "nicolas-bevacqua",
                                        "name": "Nicolas Bevacqua",
                                        "image": {}
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1828575,
                                "editions": [
                                    {
                                        "pages": 164,
                                        "id": 31955090
                                    }
                                ],
                                "cached_image": {
                                    "id": 3380849,
                                    "url": "https://assets.hardcover.app/external_data/33722845/3ccccc331c9bbdb8cc08c4f733a062962cf6b03f.jpeg",
                                    "color": "#9e8864",
                                    "width": 333,
                                    "height": 500,
                                    "color_name": "Gray"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2024-11-28",
                        "edition": {
                            "title": "The Digital Ape: How to Live (in Peace) with Smart Machines",
                            "pages": 352,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "id": 348773,
                                        "slug": "nigel-shadbolt",
                                        "name": "Nigel Shadbolt",
                                        "image": {
                                            "id": 373930,
                                            "url": "https://assets.hardcover.app/books/348773/9987396-L.jpg",
                                            "color": "#1d2318",
                                            "width": 500,
                                            "height": 393,
                                            "color_name": "Black"
                                        }
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "id": 1091259,
                                        "slug": "roger-hampson",
                                        "name": "Roger Hampson",
                                        "image": {}
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1831761,
                                "editions": [
                                    {
                                        "pages": 352,
                                        "id": 31958903
                                    }
                                ],
                                "cached_image": {
                                    "id": 4802869,
                                    "url": "https://assets.hardcover.app/edition/31958903/dfbf1023a5da0680d89280f73a6f6175b50c61bb.jpeg",
                                    "color": "#18789a",
                                    "width": 329,
                                    "height": 500,
                                    "color_name": "Blue"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2022-04-15",
                        "edition": {
                            "title": "The Walrus Mutterer",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "id": 225452,
                                        "slug": "mandy-haggith",
                                        "name": "Mandy Haggith",
                                        "image": {
                                            "id": 252256,
                                            "url": "https://assets.hardcover.app/books/225452/6996538-L.jpg",
                                            "color": "#4f4826",
                                            "width": 359,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1831762,
                                "editions": [],
                                "cached_image": {}
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2023-09-30",
                        "edition": {
                            "title": "The AI Does Not Hate You: Superintelligence, Rationality and the Race to Save the World",
                            "pages": null,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "id": 293038,
                                        "slug": "tom-chivers",
                                        "name": "Tom  Chivers",
                                        "image": {
                                            "id": 318466,
                                            "url": "https://assets.hardcover.app/books/293038/3870440-L.jpg",
                                            "color": "#fefefe",
                                            "width": 128,
                                            "height": 195,
                                            "color_name": "White"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1831763,
                                "editions": [],
                                "cached_image": {
                                    "id": 4802847,
                                    "url": "https://assets.hardcover.app/external_data/156113/d00fc6bc0a3ba226a0deb9e4040f68d6e7595ed9.jpeg",
                                    "color": "#967990",
                                    "width": 98,
                                    "height": 98,
                                    "color_name": "Purple"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2018-12-10",
                        "edition": {
                            "title": "The Human Planet: How We Created the Anthropocene",
                            "pages": 466,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "id": 1091260,
                                        "slug": "simon-l-lewis",
                                        "name": "Simon L. Lewis",
                                        "image": {}
                                    },
                                    "contribution": null
                                },
                                {
                                    "author": {
                                        "id": 94086,
                                        "slug": "mark-maslin",
                                        "name": "Mark Maslin",
                                        "image": {
                                            "id": 124237,
                                            "url": "https://assets.hardcover.app/books/94086/10746414-L.jpg",
                                            "color": "#691b04",
                                            "width": 307,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1831765,
                                "editions": [
                                    {
                                        "pages": 466,
                                        "id": 31958910
                                    }
                                ],
                                "cached_image": {
                                    "id": 4802885,
                                    "url": "https://assets.hardcover.app/edition/31958910/b7d4adb3881680ef32b2508696636d51171de210.jpeg",
                                    "color": "#278288",
                                    "width": 307,
                                    "height": 500,
                                    "color_name": "Blue"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": [
                    {
                        "finished_at": "2020-11-21",
                        "edition": {
                            "title": "The People of Providence: A Housing Estate and Some of Its Inhabitants",
                            "pages": 373,
                            "cached_contributors": [
                                {
                                    "author": {
                                        "id": 126896,
                                        "slug": "tony-parker",
                                        "name": "Tony Parker",
                                        "image": {
                                            "id": 155954,
                                            "url": "https://assets.hardcover.app/books/126896/10369155-L.jpg",
                                            "color": "#595847",
                                            "width": 366,
                                            "height": 500,
                                            "color_name": "Brown"
                                        }
                                    },
                                    "contribution": null
                                }
                            ],
                            "book": {
                                "id": 1831767,
                                "editions": [
                                    {
                                        "pages": 373,
                                        "id": 31958911
                                    }
                                ],
                                "cached_image": {
                                    "id": 4802877,
                                    "url": "https://assets.hardcover.app/external_data/156139/902d7655f1f5a19e9f9c2d2596d4b0f2a00a132d.jpeg",
                                    "color": "#ebea7b",
                                    "width": 304,
                                    "height": 475,
                                    "color_name": "Beige"
                                }
                            }
                        }
                    }
                ]
            },
            {
                "user_book_reads": []
            },
            {
                "user_book_reads": []
            }
        ]
    }
];