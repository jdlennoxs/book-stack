//   user_books(where: {user: {username: {_eq: "jdlennoxs"}}}, limit: 10) {
//     book {
//       slug
//       title
//       cached_contributors(path: "[\"0\"].author.name")
//       cached_image
//       id
//       pages
//     }
//     user_book_reads(where: {finished_at: {_is_null: false}}) {
//       finished_at
//       user_book {
//         rating
//       }
//     }
//   }


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

export const booksData: any = {
    "user_books": [
        {
            "book": {
                "slug": "the-master-algorithm",
                "title": "The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World",
                "cached_contributors": "Pedro Domingos",
                "cached_image": {
                    "id": 848320,
                    "url": "https://assets.hardcover.app/external_data/59319482/897e29cd2f29e989d63158901895ceaea00153e8.jpeg",
                    "color": "#baad70",
                    "width": 98,
                    "height": 149,
                    "color_name": "Gray"
                },
                "id": 6283,
                "pages": 352
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-07-04",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "things-to-make-and-do-in-the-fourth-dimension",
                "title": "Things to Make and Do in the Fourth Dimension",
                "cached_contributors": "Matt    Parker",
                "cached_image": {
                    "id": 3124372,
                    "url": "https://assets.hardcover.app/edition/30402797/ad3d304675215f735faa3256840e5f0afcb20330.jpeg",
                    "color": "#e4e2d4",
                    "width": 330,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 6372,
                "pages": 453
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-04-09",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "a-visit-from-the-goon-squad",
                "title": "A Visit from the Goon Squad",
                "cached_contributors": "Jennifer Egan",
                "cached_image": {
                    "id": 2861786,
                    "url": "https://assets.hardcover.app/edition/30400488/be5fd0661f044488345da40a2c70a7e4aea41fe8.jpeg",
                    "color": "#1a9196",
                    "width": 336,
                    "height": 500,
                    "color_name": "Blue"
                },
                "id": 10099,
                "pages": 289
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-05-19",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "tuck-everlasting",
                "title": "Tuck Everlasting",
                "cached_contributors": "Natalie Babbitt",
                "cached_image": {
                    "id": 2911735,
                    "url": "https://assets.hardcover.app/edition/30778988/88781ccef4359a049dc7c4b7e7b97a0111eaf3eb.jpeg",
                    "color": "#452911",
                    "width": 333,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 15424,
                "pages": 192
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "upheaval",
                "title": "Upheaval: Turning Points for Nations in Crisis",
                "cached_contributors": "Jared Diamond",
                "cached_image": {
                    "id": 2948202,
                    "url": "https://assets.hardcover.app/edition/30401823/1d2cdb142b434effdccff7be506386ffabced11f.jpeg",
                    "color": "#cdcdb4",
                    "width": 321,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 20933,
                "pages": 502
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "song-of-solomon",
                "title": "Song of Solomon",
                "cached_contributors": "Toni Morrison",
                "cached_image": {
                    "id": 2912706,
                    "url": "https://assets.hardcover.app/edition/15021531/2a1d1731f6b869bfbbe2f938f3114bd467107187.jpeg",
                    "color": "#bcaa92",
                    "width": 375,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 25854,
                "pages": 398
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-03-15",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "municipal-dreams",
                "title": "Municipal Dreams: The Rise and Fall of Council Housing",
                "cached_contributors": "John Boughton",
                "cached_image": {},
                "id": 34201,
                "pages": 337
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-12-23",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-road",
                "title": "The Road",
                "cached_contributors": "Cormac McCarthy",
                "cached_image": {
                    "id": 1702068,
                    "url": "https://assets.hardcover.app/editions/642392/7620614454245640-cormacmcarthytheroad.jpg",
                    "color": "#e4e4e4",
                    "width": 648,
                    "height": 1000,
                    "color_name": "White"
                },
                "id": 36087,
                "pages": 287
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "utopia-for-realists",
                "title": "Utopia for Realists: How We Can Build the Ideal World",
                "cached_contributors": "Rutger Bregman",
                "cached_image": {
                    "id": 2913442,
                    "url": "https://assets.hardcover.app/edition/30404791/f7e7763061920c6c0799965fc397432e4e7c73a7.jpeg",
                    "color": "#d1ceb2",
                    "width": 325,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 37113,
                "pages": 262
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-05-13",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "this-is-going-to-hurt",
                "title": "This is Going to Hurt: Secret Diaries of a Junior Doctor",
                "cached_contributors": "Adam Kay",
                "cached_image": {
                    "id": 930879,
                    "url": "https://assets.hardcover.app/external_data/59648722/c167c45429dfdb889e135e90bb85bc193d4a756b.jpeg",
                    "color": "#236c99",
                    "width": 128,
                    "height": 197,
                    "color_name": "Blue"
                },
                "id": 38572,
                "pages": 189
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-10-12",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "normal-people",
                "title": "Normal People",
                "cached_contributors": "Sally Rooney",
                "cached_image": {
                    "id": 3741898,
                    "url": "https://assets.hardcover.app/editions/30402559/2802629647590855.jpeg",
                    "color": "#2b4e89",
                    "width": 2800,
                    "height": 4230,
                    "color_name": "Purple"
                },
                "id": 61787,
                "pages": 273
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-06-06",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-man-in-the-high-castle",
                "title": "The Man in the High Castle",
                "cached_contributors": "Philip K. Dick",
                "cached_image": {
                    "id": 1903539,
                    "url": "https://assets.hardcover.app/book_mappings/7332681/aa5b4dfefa5a601437734c17811e6547ed2dc5a9.jpeg",
                    "color": "#e6e0d7",
                    "width": 326,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 66330,
                "pages": 392
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-11-05",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "look-whos-back",
                "title": "Look Who's Back",
                "cached_contributors": "Timur Vermes",
                "cached_image": {
                    "id": 1265312,
                    "url": "https://assets.hardcover.app/external_data/59647846/2462ea629ee41fa4dc8bfeed4eb22fdfea505f2d.jpeg",
                    "color": "#fafafa",
                    "width": 128,
                    "height": 197,
                    "color_name": "White"
                },
                "id": 67545,
                "pages": 352
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-04-19",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "dataclysm",
                "title": "Dataclysm: Who We Are",
                "cached_contributors": "Christian Rudder",
                "cached_image": {
                    "id": 879039,
                    "url": "https://assets.hardcover.app/external_data/59326271/ad4bf22aa3c16acd01ab8505789e2dfae6026725.jpeg",
                    "color": "#524e4f",
                    "width": 98,
                    "height": 146,
                    "color_name": "Purple"
                },
                "id": 71936,
                "pages": 304
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-10-29",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "kinder-than-solitude",
                "title": "Kinder Than Solitude",
                "cached_contributors": "Yiyun Li",
                "cached_image": {
                    "id": 5006051,
                    "url": "https://assets.hardcover.app/edition/22427341/28518565a6275f36726b12f8293985099bb123e6.jpeg",
                    "color": "#dcc29c",
                    "width": 338,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 79223,
                "pages": 312
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-06-10",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-song-of-achilles",
                "title": "The Song of Achilles",
                "cached_contributors": "Madeline Miller",
                "cached_image": {
                    "id": 4293536,
                    "url": "https://assets.hardcover.app/editions/8933288/8719175186248367.jpg",
                    "color": "#743e09",
                    "width": 993,
                    "height": 1500,
                    "color_name": "Brown"
                },
                "id": 80378,
                "pages": 384
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-03-15",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "new-york-2140",
                "title": "New York 2140",
                "cached_contributors": "Kim Stanley Robinson",
                "cached_image": {
                    "id": 2722416,
                    "url": "https://assets.hardcover.app/external_data/36291272/d4fdf2c4039ed8815962490ed8d9bc3fd1f894e4.jpeg",
                    "color": "#acb5e2",
                    "width": 321,
                    "height": 500,
                    "color_name": "Pink"
                },
                "id": 89286,
                "pages": 624
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-intuitionist",
                "title": "The Intuitionist",
                "cached_contributors": "Colson Whitehead",
                "cached_image": {
                    "id": 2935474,
                    "url": "https://assets.hardcover.app/edition/5311338/e4304c24abe062788fb8fe1557135cd39523ebd3.jpeg",
                    "color": "#006b2c",
                    "width": 324,
                    "height": 500,
                    "color_name": "Green"
                },
                "id": 93716,
                "pages": 273
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "doctor-zhivago",
                "title": "Doctor Zhivago",
                "cached_contributors": "Boris Pasternak",
                "cached_image": {
                    "id": 2919523,
                    "url": "https://assets.hardcover.app/edition/5667889/9afb062b7e8bfd8dde96949db841c09f0a889747.jpeg",
                    "color": "#d1d6d5",
                    "width": 325,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 103354,
                "pages": 594
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-lottery-and-other-stories",
                "title": "The Lottery and Other Stories",
                "cached_contributors": "Shirley Jackson",
                "cached_image": {
                    "id": 3410951,
                    "url": "https://assets.hardcover.app/edition/31502723/06f397a3f6c5cbbddaa3aa17606cc55384e1511b.jpeg",
                    "color": "#675c49",
                    "width": 326,
                    "height": 500,
                    "color_name": "Gray"
                },
                "id": 104610,
                "pages": 306
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-03-30",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-orphan-masters-son",
                "title": "The Orphan Master's Son",
                "cached_contributors": "Adam Johnson",
                "cached_image": {
                    "id": 2919609,
                    "url": "https://assets.hardcover.app/edition/6217378/2e17525873b7c712b07c57b8d270bdff50a11960.jpeg",
                    "color": "#efeae3",
                    "width": 335,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 105179,
                "pages": 465
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-04-30",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "because-of-winn-dixie",
                "title": "Because of Winn-Dixie",
                "cached_contributors": "Kate DiCamillo",
                "cached_image": {
                    "id": 1805348,
                    "url": "https://assets.hardcover.app/external_data/40659322/734f5fe4dbae19f19f7fc15b4322e5375547ab33.jpeg",
                    "color": "#f5f1ed",
                    "width": 325,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 110336,
                "pages": 192
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "contact",
                "title": "Contact",
                "cached_contributors": "Carl Sagan",
                "cached_image": {
                    "id": 1146373,
                    "url": "https://assets.hardcover.app/external_data/44206388/e130b2c8fa2430a40e80634f3a36100c4a144e01.jpeg",
                    "color": "#e7e4d6",
                    "width": 304,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 111638,
                "pages": 453
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "first-time-parent",
                "title": "First-time Parent",
                "cached_contributors": "Lucy Atkins",
                "cached_image": {
                    "id": 142614,
                    "url": "https://assets.hardcover.app/books/113072/9377842-L.jpg",
                    "color": "#ecede9",
                    "width": 230,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 113072,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-11-26",
                    "user_book": {
                        "rating": null
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "heavy",
                "title": "Heavy",
                "cached_contributors": "Kiese Laymon",
                "cached_image": {
                    "id": 2920730,
                    "url": "https://assets.hardcover.app/edition/30401039/c420a138049e6341e4dcf46bb3ca825e034bf960.jpeg",
                    "color": "#9a1007",
                    "width": 326,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 114141,
                "pages": 256
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-03-03",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "jonathan-livingston-seagull",
                "title": "Jonathan Livingston Seagull",
                "cached_contributors": "Richard Bach",
                "cached_image": {
                    "id": 2809628,
                    "url": "https://assets.hardcover.app/external_data/37164059/5c6fb0ee07c66842d625b7c01158dc1d9ea3b700.jpeg",
                    "color": "#cfd3d9",
                    "width": 382,
                    "height": 500,
                    "color_name": "Pink"
                },
                "id": 114860,
                "pages": 112
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "holes",
                "title": "Holes",
                "cached_contributors": "Louis Sachar",
                "cached_image": {
                    "id": 6345685,
                    "url": "https://assets.hardcover.app/edition/30426345/bbc2f108-0a4c-4394-adad-24773c188f06.jpg",
                    "color": "#965919",
                    "width": 660,
                    "height": 960,
                    "color_name": "Brown"
                },
                "id": 116517,
                "pages": 272
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "a-fine-balance",
                "title": "A Fine Balance",
                "cached_contributors": "Rohinton Mistry",
                "cached_image": {
                    "id": 2921258,
                    "url": "https://assets.hardcover.app/edition/21353274/b16bb0ae6cc178a9a410d23dff9ff692702407a3.jpeg",
                    "color": "#ede59e",
                    "width": 319,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 117461,
                "pages": 818
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-sailor-who-fell-from-grace-with-the-sea",
                "title": "The Sailor Who Fell from Grace With the Sea",
                "cached_contributors": "Yukio Mishima",
                "cached_image": {
                    "id": 2921464,
                    "url": "https://assets.hardcover.app/edition/9223809/135d3a2b7b16871bc2cc4d878beab78d59ccb00e.jpeg",
                    "color": "#a19102",
                    "width": 301,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 119359,
                "pages": 144
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-02-15",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "slaughterhouse-five",
                "title": "Slaughterhouse-Five",
                "cached_contributors": "Kurt Vonnegut",
                "cached_image": {
                    "id": 3270452,
                    "url": "https://assets.hardcover.app/edition/17079379/6cd33f6e07aae9f2a3f5299de4fe48c07571dd66.jpeg",
                    "color": "#cd090f",
                    "width": 305,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 122240,
                "pages": 215
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-04-23",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "under-the-skin",
                "title": "Under the Skin",
                "cached_contributors": "Michel Faber",
                "cached_image": {
                    "id": 2923168,
                    "url": "https://assets.hardcover.app/edition/21998613/b621d5a1bb6980c45a3d2ab5ac36d7d48e09957e.jpeg",
                    "color": "#d4dbe0",
                    "width": 326,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 132237,
                "pages": 304
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-10-10",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "never-let-me-go",
                "title": "Never Let Me Go",
                "cached_contributors": "Kazuo Ishiguro",
                "cached_image": {
                    "id": 1680122,
                    "url": "https://assets.hardcover.app/external_data/46506540/42538243519a7ec280aea12b7dfe11a109fbf6ac.jpeg",
                    "color": "#eee3db",
                    "width": 324,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 132314,
                "pages": 288
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-01-24",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-remains-of-the-day",
                "title": "The Remains of the Day",
                "cached_contributors": "Kazuo Ishiguro",
                "cached_image": {
                    "id": 6435009,
                    "url": "https://assets.hardcover.app/edition/28184720/69b94f6c-9fed-4626-a31e-a61c78d626f6.jpg",
                    "color": "#f3f3f2",
                    "width": 973,
                    "height": 1500,
                    "color_name": "Beige"
                },
                "id": 136692,
                "pages": 245
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-11-18",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "accelerate",
                "title": "Accelerate: Building and Scaling High-Performing Technology Organizations",
                "cached_contributors": "Nicole Forsgren",
                "cached_image": {
                    "id": 2938770,
                    "url": "https://assets.hardcover.app/edition/30404311/44f8340f017ec854ecbfec519c1fc3a33ad0ca09.jpeg",
                    "color": "#c1d6d8",
                    "width": 333,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 144635,
                "pages": 288
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-02-18",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },


        {
            "book": {
                "slug": "to-kill-a-mockingbird",
                "title": "To Kill A Mockingbird",
                "cached_contributors": "Harper Lee",
                "cached_image": {
                    "id": 2902262,
                    "url": "https://assets.hardcover.app/edition/22780788/eef525120e32b6eca1070bbfb2b63a11d324579d.jpeg",
                    "color": "#f1efcb",
                    "width": 309,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 149361,
                "pages": 309
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-memory-police",
                "title": "The Memory Police",
                "cached_contributors": "Yōko Ogawa",
                "cached_image": {
                    "id": 2924726,
                    "url": "https://assets.hardcover.app/external_data/45951583/f8c2899b7d2fbe2fef3ccce33df90c50c2d4c3e3.jpeg",
                    "color": "#c6af92",
                    "width": 329,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 150531,
                "pages": 289
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-07-19",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "a-scanner-darkly",
                "title": "A Scanner Darkly",
                "cached_contributors": "Philip K. Dick",
                "cached_image": {
                    "id": 2924879,
                    "url": "https://assets.hardcover.app/edition/30394702/7993da38a2aae32e2eafb8e00959310ece90b37b.jpeg",
                    "color": "#656566",
                    "width": 326,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 152062,
                "pages": 189
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-06-25",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "creativity-inc",
                "title": "Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration",
                "cached_contributors": "Ed Catmull",
                "cached_image": {
                    "id": 1842046,
                    "url": "https://assets.hardcover.app/book_mappings/7332982/17aafae12bc5ec5cde2e28ffafa4a457ad6c0f63.jpeg",
                    "color": "#9d8986",
                    "width": 329,
                    "height": 500,
                    "color_name": "Gray"
                },
                "id": 155928,
                "pages": 368
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-04-17",
                    "user_book": {
                        "rating": 3.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "meditations",
                "title": "Meditations",
                "cached_contributors": "Marcus Aurelius",
                "cached_image": {
                    "id": 1465723,
                    "url": "https://assets.hardcover.app/external_data/47659608/cee064c51e9acb6a09bb7158794ef45e231dde6e.jpeg",
                    "color": "#3e3528",
                    "width": 325,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 157096,
                "pages": 254
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "washington-black",
                "title": "Washington Black",
                "cached_contributors": "Esi Edugyan",
                "cached_image": {
                    "id": 2268297,
                    "url": "https://assets.hardcover.app/external_data/42083209/022425c5ba572bfe4d919046aa8b0b475e16682a.jpeg",
                    "color": "#bbbbbb",
                    "width": 335,
                    "height": 499,
                    "color_name": "Silver"
                },
                "id": 169268,
                "pages": 334
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-06-08",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "days-without-end",
                "title": "Days Without End",
                "cached_contributors": "Sebastian Barry",
                "cached_image": {
                    "id": 4181650,
                    "url": "https://assets.hardcover.app/external_data/38916745/a6cadea81549475d8e2f4cbe4cbe5ae048e31bc9.jpeg",
                    "color": "#586f6a",
                    "width": 331,
                    "height": 499,
                    "color_name": "Purple"
                },
                "id": 170574,
                "pages": 274
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-managers-path",
                "title": "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change",
                "cached_contributors": "Camille Fournier",
                "cached_image": {
                    "id": 2948741,
                    "url": "https://assets.hardcover.app/edition/30401041/08ec59bb97efa9b2b6fb604fb0d83a7e6614a17d.jpeg",
                    "color": "#003a99",
                    "width": 333,
                    "height": 500,
                    "color_name": "Blue"
                },
                "id": 172198,
                "pages": 244
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-08-01",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "piranesi",
                "title": "Piranesi",
                "cached_contributors": "Susanna Clarke",
                "cached_image": {
                    "id": 5321476,
                    "url": "https://assets.hardcover.app/editions/30480426/ec301cb7-b118-48fd-aa3a-5d336e61c182.jpg",
                    "color": "#908764",
                    "width": 500,
                    "height": 767,
                    "color_name": "Gray"
                },
                "id": 175280,
                "pages": 272
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-10-16",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-housekeeper-and-the-professor",
                "title": "The Housekeeper and the Professor",
                "cached_contributors": "Yōko Ogawa",
                "cached_image": {
                    "id": 2950349,
                    "url": "https://assets.hardcover.app/external_data/31928850/60173966d1b6a3a8a28593e960986a4baf601038.jpeg",
                    "color": "#1f4291",
                    "width": 185,
                    "height": 278,
                    "color_name": "Purple"
                },
                "id": 190337,
                "pages": 192
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "i-robot",
                "title": "I, Robot",
                "cached_contributors": "Isaac Asimov",
                "cached_image": {
                    "id": 4422007,
                    "url": "https://assets.hardcover.app/editions/21887401/9212771970575720.jpg",
                    "color": "#434447",
                    "width": 996,
                    "height": 1500,
                    "color_name": "Purple"
                },
                "id": 192946,
                "pages": 304
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "inkheart-inkworld-1",
                "title": "Inkheart",
                "cached_contributors": "Cornelia Funke",
                "cached_image": {
                    "id": 6369216,
                    "url": "https://assets.hardcover.app/edition/31488702/9bd3946c-ce3e-4825-afa5-5f717c348374.jpg",
                    "color": "#7d200e",
                    "width": 318,
                    "height": 461,
                    "color_name": "Brown"
                },
                "id": 193169,
                "pages": 563
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "coraline",
                "title": "Coraline",
                "cached_contributors": "Neil Gaiman",
                "cached_image": {
                    "id": 1448069,
                    "url": "https://assets.hardcover.app/editions/30432385/1521826581986394-lf.jpeg",
                    "color": "#d05603",
                    "width": 394,
                    "height": 595,
                    "color_name": "Orange"
                },
                "id": 194560,
                "pages": 176
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-subtle-knife",
                "title": "The Subtle Knife",
                "cached_contributors": "Philip Pullman",
                "cached_image": {
                    "id": 3406487,
                    "url": "https://assets.hardcover.app/edition/30395568/071f938642f474a31433c608302931a79be4483e.jpeg",
                    "color": "#4a5e6f",
                    "width": 304,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 198704,
                "pages": 304
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "lud-in-the-mist",
                "title": "Lud-In-the-Mist",
                "cached_contributors": "Hope Mirrlees",
                "cached_image": {
                    "id": 471262,
                    "url": "https://assets.hardcover.app/edition/20105070/871087-L.jpg",
                    "color": "#647b82",
                    "width": 323,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 199066,
                "pages": 288
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "kafka-on-the-shore",
                "title": "Kafka on the Shore",
                "cached_contributors": "Haruki Murakami",
                "cached_image": {
                    "id": 4013856,
                    "url": "https://assets.hardcover.app/editions/31645214/7751038927873328.jpg",
                    "color": "#a74f2c",
                    "width": 308,
                    "height": 475,
                    "color_name": "Brown"
                },
                "id": 207877,
                "pages": 467
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-07-25",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-death-and-life-of-great-american-cities",
                "title": "The Death and Life of Great American Cities",
                "cached_contributors": "Jane Jacobs",
                "cached_image": {
                    "id": 2779210,
                    "url": "https://assets.hardcover.app/external_data/61005985/37d519eea99d28bfafe4ed240823463ffa69b089.jpeg",
                    "color": "#c4b07b",
                    "width": 98,
                    "height": 152,
                    "color_name": "Silver"
                },
                "id": 223701,
                "pages": 458
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "kindred",
                "title": "Kindred",
                "cached_contributors": "Octavia E. Butler",
                "cached_image": {
                    "id": 6312688,
                    "url": "https://assets.hardcover.app/edition/16413369/dbcdcc21-3f5d-4b6c-96b3-2899bc57b00b.jpg",
                    "color": "#961817",
                    "width": 1008,
                    "height": 1500,
                    "color_name": "Brown"
                },
                "id": 230671,
                "pages": 288
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "drive-the-surprising-truth-about-what-motivates-us",
                "title": "Drive: The Surprising Truth About What Motivates Us",
                "cached_contributors": "Daniel H. Pink",
                "cached_image": {
                    "id": 1904139,
                    "url": "https://assets.hardcover.app/book_mappings/7333034/142b3ef9986d14f044d54b7d2fc5890c02a6c305.jpeg",
                    "color": "#f5f4f5",
                    "width": 333,
                    "height": 500,
                    "color_name": "Pink"
                },
                "id": 235391,
                "pages": 256
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "things-we-lost-in-the-fire",
                "title": "Things We Lost in the Fire",
                "cached_contributors": "Megan McDowell",
                "cached_image": {
                    "id": 4549317,
                    "url": "https://assets.hardcover.app/edition/30403194/381f8c2c697bad6e0279476fd9af1db641c869a3.jpeg",
                    "color": "#f0eacd",
                    "width": 331,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 238887,
                "pages": 210
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-12-05",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "thinking-fast-and-slow",
                "title": "Thinking, Fast and Slow",
                "cached_contributors": "Daniel Kahneman",
                "cached_image": {
                    "id": 1707960,
                    "url": "https://assets.hardcover.app/external_data/32475567/ddc6d0b45faff3b36560a5663e4ff2d2efb63740.jpeg",
                    "color": "#edecdd",
                    "width": 337,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 242841,
                "pages": 499
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "new-dark-age",
                "title": "New Dark Age: Technology and the End of the Future",
                "cached_contributors": "James Bridle",
                "cached_image": {
                    "id": 887237,
                    "url": "https://assets.hardcover.app/external_data/59859105/665ab6d929d451954048197af4bfa0e6f1881312.jpeg",
                    "color": "#457a2a",
                    "width": 128,
                    "height": 199,
                    "color_name": "Brown"
                },
                "id": 247366,
                "pages": 348
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-05-29",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "gilead",
                "title": "Gilead",
                "cached_contributors": "Marilynne Robinson",
                "cached_image": {
                    "id": 6734980,
                    "url": "https://assets.hardcover.app/edition/2243693/0dc7362972a0fe0212892b981be774b32060c2b7.jpeg",
                    "color": "#d2e3d6",
                    "width": 333,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 247430,
                "pages": 289
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-07-03",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "up-jumps-the-devil",
                "title": "Up Jumps the Devil",
                "cached_contributors": "Michael Poore",
                "cached_image": {
                    "id": 797005,
                    "url": "https://assets.hardcover.app/edition/4683719/9971903-L.jpg",
                    "color": "#716e52",
                    "width": 330,
                    "height": 500,
                    "color_name": "Gray"
                },
                "id": 247561,
                "pages": 360
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-12-30",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "this-is-how-you-lose-the-time-war",
                "title": "This Is How You Lose the Time War",
                "cached_contributors": "Amal El-Mohtar",
                "cached_image": {
                    "id": 5472064,
                    "url": "https://assets.hardcover.app/editions/26220245/ef7105eb-0f93-4580-a0e7-2bf6259c8203.jpg",
                    "color": "#89cbd6",
                    "width": 1400,
                    "height": 2101,
                    "color_name": "Beige"
                },
                "id": 249097,
                "pages": 223
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-09-29",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "i-am-a-strange-loop",
                "title": "I Am A Strange Loop",
                "cached_contributors": "Douglas R. Hofstadter",
                "cached_image": {
                    "id": 494214,
                    "url": "https://assets.hardcover.app/edition/25847491/8312244-L.jpg",
                    "color": "#657169",
                    "width": 327,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 260388,
                "pages": 511
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "klara-and-the-sun",
                "title": "Klara and the Sun",
                "cached_contributors": "Kazuo Ishiguro",
                "cached_image": {
                    "id": 1009437,
                    "url": "https://assets.hardcover.app/external_data/59592031/11d4c25aa782acfbff944edbec1e89a6dbdbaace.jpeg",
                    "color": "#d70909",
                    "width": 128,
                    "height": 197,
                    "color_name": "Red"
                },
                "id": 266607,
                "pages": 320
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-04-10",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "do-androids-dream-of-electric-sheep",
                "title": "Do Androids Dream of Electric Sheep?",
                "cached_contributors": "Philip K. Dick",
                "cached_image": {
                    "id": 1441014,
                    "url": "https://assets.hardcover.app/editions/24366858/2403087114756371-912qCxdgTRL._SL1500_.jpg",
                    "color": "#b2b3bb",
                    "width": 1000,
                    "height": 1500,
                    "color_name": "Pink"
                },
                "id": 268150,
                "pages": 223
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-05-26",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "silence",
                "title": "Silence",
                "cached_contributors": "Shūsaku Endō",
                "cached_image": {
                    "id": 5971766,
                    "url": "https://assets.hardcover.app/edition/30401021/563c81557c0f4aa22ab81859a2aaec1672ea086e.jpeg",
                    "color": "#5d615e",
                    "width": 375,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 283516,
                "pages": 253
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-02-01",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "a-severed-head",
                "title": "A severed head.",
                "cached_contributors": "Iris Murdoch",
                "cached_image": {
                    "id": 3128949,
                    "url": "https://assets.hardcover.app/edition/15490856/2f86c97ddfaf714688d26c44bc18f27dc1080e06.jpeg",
                    "color": "#f7f6f2",
                    "width": 327,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 315392,
                "pages": 204
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-01-09",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-dry",
                "title": "The Dry",
                "cached_contributors": "Jane Harper",
                "cached_image": {
                    "id": 4850596,
                    "url": "https://assets.hardcover.app/external_data/217109/1b368ccb74d4ccfa19926d42aa838994227feec3.jpeg",
                    "color": "#ccbab4",
                    "width": 128,
                    "height": 197,
                    "color_name": "Silver"
                },
                "id": 319023,
                "pages": 291
            },
            "user_book_reads": [
                {
                    "finished_at": "2026-01-10",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "one-flew-over-the-cuckoos-nest",
                "title": "One Flew Over the Cuckoo's Nest",
                "cached_contributors": "Ken Kesey",
                "cached_image": {
                    "id": 1465687,
                    "url": "https://assets.hardcover.app/editions/167435/3143763072967605-91QerkARMLL._SL1500_.jpg",
                    "color": "#9d7e61",
                    "width": 850,
                    "height": 1500,
                    "color_name": "Gray"
                },
                "id": 320781,
                "pages": 336
            },
            "user_book_reads": []
        },

        {
            "book": {
                "slug": "harry-potter-and-the-philosophers-stone",
                "title": "Harry Potter and the Philosopher's Stone",
                "cached_contributors": "J.K. Rowling",
                "cached_image": {
                    "id": 5543241,
                    "url": "https://assets.hardcover.app/edition/2667580/06168492-bf52-4333-9ac6-66ed21907865.jpg",
                    "color": "#925d1a",
                    "width": 490,
                    "height": 735,
                    "color_name": "Brown"
                },
                "id": 328491,
                "pages": 309
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-butcher-boy",
                "title": "The Butcher Boy",
                "cached_contributors": "Patrick McCabe",
                "cached_image": {
                    "id": 5169432,
                    "url": "https://assets.hardcover.app/editions/30860850/cfa88968-3cb6-44ff-89a3-bb1036b0e755.jpg",
                    "color": "#977668",
                    "width": 592,
                    "height": 1000,
                    "color_name": "Gray"
                },
                "id": 329520,
                "pages": 231
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-10-20",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-english-patient",
                "title": "The English Patient",
                "cached_contributors": "Michael Ondaatje",
                "cached_image": {
                    "id": 3151734,
                    "url": "https://assets.hardcover.app/external_data/38052097/2574fe72fa5f4807e1641e79490a9c53590a647b.jpeg",
                    "color": "#5a4f49",
                    "width": 314,
                    "height": 500,
                    "color_name": "Gray"
                },
                "id": 331159,
                "pages": 301
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-10-21",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "goodbye-to-berlin",
                "title": "Goodbye to Berlin",
                "cached_contributors": "Christopher Isherwood",
                "cached_image": {
                    "id": 694192,
                    "url": "https://assets.hardcover.app/edition/30606424/content.jpeg",
                    "color": "#635859",
                    "width": 128,
                    "height": 200,
                    "color_name": "Purple"
                },
                "id": 335593,
                "pages": 262
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-01-06",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-bell-jar",
                "title": "The Bell Jar",
                "cached_contributors": "Sylvia Plath",
                "cached_image": {
                    "id": 1702052,
                    "url": "https://assets.hardcover.app/editions/26012618/337747029847346-thebelljar2.jpg",
                    "color": "#55646a",
                    "width": 426,
                    "height": 600,
                    "color_name": "Purple"
                },
                "id": 342142,
                "pages": 234
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-07-10",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-first-fifteen-lives-of-harry-august",
                "title": "The First Fifteen Lives of Harry August",
                "cached_contributors": "Claire North",
                "cached_image": {
                    "id": 6030454,
                    "url": "https://assets.hardcover.app/edition/30566209/1382656f-d88f-4ebd-bd72-1be12faec58f.jpg",
                    "color": "#797964",
                    "width": 1000,
                    "height": 1500,
                    "color_name": "Gray"
                },
                "id": 345034,
                "pages": 416
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-04-16",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "tokyo-express",
                "title": "Tokyo Express",
                "cached_contributors": "Seichō Matsumoto",
                "cached_image": {
                    "id": 5098183,
                    "url": "https://assets.hardcover.app/edition/30767224/ebe3428838ad83e1edbff0df95024a402639377a.jpeg",
                    "color": "#685f12",
                    "width": 326,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 354321,
                "pages": 160
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-07-24",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-golden-compass",
                "title": "The Golden Compass",
                "cached_contributors": "Philip Pullman",
                "cached_image": {
                    "id": 1382742,
                    "url": "https://assets.hardcover.app/editions/19151716/902688047208777-119322.jpg",
                    "color": "#254654",
                    "width": 320,
                    "height": 475,
                    "color_name": "Purple"
                },
                "id": 355708,
                "pages": 399
            },
            "user_book_reads": []
        },

        {
            "book": {
                "slug": "manhattan-beach",
                "title": "Manhattan Beach",
                "cached_contributors": "Jennifer Egan",
                "cached_image": {
                    "id": 454533,
                    "url": "https://assets.hardcover.app/edition/21008142/10166746-L.jpg",
                    "color": "#565349",
                    "width": 332,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 356988,
                "pages": 15
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "convenience-store-woman",
                "title": "Convenience Store Woman",
                "cached_contributors": "Sayaka Murata",
                "cached_image": {
                    "id": 1903679,
                    "url": "https://assets.hardcover.app/book_mappings/7332801/79413895c84f95590a866ccb013520358d8fd673.jpeg",
                    "color": "#007dc6",
                    "width": 369,
                    "height": 500,
                    "color_name": "Blue"
                },
                "id": 357003,
                "pages": 163
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-08-10",
                    "user_book": {
                        "rating": 2
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "aurorarama",
                "title": "Aurorarama",
                "cached_contributors": "Jean-Christophe Valtat",
                "cached_image": {
                    "id": 581701,
                    "url": "https://assets.hardcover.app/edition/7405145/10245744-L.jpg",
                    "color": "#675742",
                    "width": 325,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 358047,
                "pages": 434
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-grass-is-singing",
                "title": "The Grass Is Singing",
                "cached_contributors": "Doris Lessing",
                "cached_image": {
                    "id": 3863545,
                    "url": "https://assets.hardcover.app/edition/15523151/b3a1d8a696ba86a4823eb5d393a122134172caf4.jpeg",
                    "color": "#566a63",
                    "width": 308,
                    "height": 500,
                    "color_name": "Green"
                },
                "id": 358921,
                "pages": 217
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-01-12",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "gravitys-rainbow",
                "title": "Gravity's Rainbow",
                "cached_contributors": "Thomas Pynchon",
                "cached_image": {
                    "id": 1702065,
                    "url": "https://assets.hardcover.app/editions/4647782/8271945363577893-gravitysrainbow.jpg",
                    "color": "#b90707",
                    "width": 1200,
                    "height": 1737,
                    "color_name": "Red"
                },
                "id": 360347,
                "pages": 760
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "i-am-radar",
                "title": "I Am Radar",
                "cached_contributors": "Reif Larsen",
                "cached_image": {
                    "id": 583115,
                    "url": "https://assets.hardcover.app/edition/18523042/10411286-L.jpg",
                    "color": "#414340",
                    "width": 323,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 367241,
                "pages": 656
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "into-the-wild",
                "title": "Into the Wild",
                "cached_contributors": "Jon Krakauer",
                "cached_image": {
                    "id": 4885035,
                    "url": "https://assets.hardcover.app/edition/22348762/5e762a03aee646b40ddc2756408901b2d471bfec.jpeg",
                    "color": "#aaa8a9",
                    "width": 320,
                    "height": 500,
                    "color_name": "Pink"
                },
                "id": 368611,
                "pages": 228
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-05-21",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-island-at-the-center-of-the-world",
                "title": "The Island at the Center of the World",
                "cached_contributors": "Russell Shorto",
                "cached_image": {
                    "id": 583369,
                    "url": "https://assets.hardcover.app/edition/9688494/1472215-L.jpg",
                    "color": "#efe1aa",
                    "width": 375,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 369074,
                "pages": 384
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-12-13",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "wizard-of-the-crow",
                "title": "Wizard of the Crow",
                "cached_contributors": "Ngũgĩ wa Thiong'o",
                "cached_image": {
                    "id": 3219812,
                    "url": "https://assets.hardcover.app/external_data/38456212/f8ab20b567b31e2c3d8ab0b9c86e13b859fbb050.jpeg",
                    "color": "#6d7261",
                    "width": 332,
                    "height": 500,
                    "color_name": "Gray"
                },
                "id": 370772,
                "pages": 786
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-da-vinci-code",
                "title": "The Da Vinci Code",
                "cached_contributors": "Dan Brown",
                "cached_image": {
                    "id": 3997660,
                    "url": "https://assets.hardcover.app/editions/30400169/2520023766251547.jpeg",
                    "color": "#845211",
                    "width": 1240,
                    "height": 1926,
                    "color_name": "Brown"
                },
                "id": 373163,
                "pages": 489
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-help",
                "title": "The Help",
                "cached_contributors": "Kathryn Stockett",
                "cached_image": {
                    "id": 6530767,
                    "url": "https://assets.hardcover.app/edition/18985282/596c746e-35ef-455c-8caa-e2e49dd9b4ba.jpg",
                    "color": "#ebe5d0",
                    "width": 928,
                    "height": 1500,
                    "color_name": "Beige"
                },
                "id": 373226,
                "pages": 466
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-signal-and-the-noise",
                "title": "The Signal and the Noise: The Art and Science of Prediction",
                "cached_contributors": "Nate Silver",
                "cached_image": {
                    "id": 730975,
                    "url": "https://assets.hardcover.app/edition/30399532/a6647e0f47dc301be0f986c12a42f0760c9fa343.jpeg",
                    "color": "#eddb01",
                    "width": 331,
                    "height": 500,
                    "color_name": "Gold"
                },
                "id": 374233,
                "pages": 534
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-09-02",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "brave-new-world",
                "title": "Brave New World",
                "cached_contributors": "Aldous Huxley",
                "cached_image": {
                    "id": 3995162,
                    "url": "https://assets.hardcover.app/edition/3299811/3e542fb1d6aed92c0f4e9cd0ac9b2f6892ca97a3.jpeg",
                    "color": "#f3f3f3",
                    "width": 334,
                    "height": 500,
                    "color_name": "White"
                },
                "id": 374328,
                "pages": 332
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-07-08",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "lord-of-the-flies",
                "title": "Lord of the Flies",
                "cached_contributors": "William Golding",
                "cached_image": {
                    "id": 1465954,
                    "url": "https://assets.hardcover.app/editions/5311461/6685526815468095-8016155.jpg",
                    "color": "#e8eee1",
                    "width": 600,
                    "height": 1021,
                    "color_name": "Beige"
                },
                "id": 374481,
                "pages": 208
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-01-05",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "rosemarys-baby",
                "title": "Rosemary's Baby",
                "cached_contributors": "Ira Levin",
                "cached_image": {
                    "id": 6803051,
                    "url": "https://assets.hardcover.app/external_data/2609759/a243846f57a9242f04d3890ec6207816c3e6025f.jpeg",
                    "color": "#a30000",
                    "width": 128,
                    "height": 205,
                    "color_name": "Brown"
                },
                "id": 375205,
                "pages": 238
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-09-07",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-brief-wondrous-life-of-oscar-wao",
                "title": "The Brief Wondrous Life of Oscar Wao",
                "cached_contributors": "Junot Díaz",
                "cached_image": {
                    "id": 3376115,
                    "url": "https://assets.hardcover.app/edition/30402348/28cf993080cf5d0e4ab0a120bbe3050168565da6.jpeg",
                    "color": "#faf7f6",
                    "width": 331,
                    "height": 500,
                    "color_name": "White"
                },
                "id": 375620,
                "pages": 360
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "hot-milk",
                "title": "Hot Milk",
                "cached_contributors": "Deborah Levy",
                "cached_image": {
                    "id": 585283,
                    "url": "https://assets.hardcover.app/edition/24083388/9080159-L.jpg",
                    "color": "#482c1b",
                    "width": 333,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 375712,
                "pages": 253
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-08-25",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "harry-potter-and-the-prisoner-of-azkaban",
                "title": "Harry Potter and the Prisoner of Azkaban",
                "cached_contributors": "J.K. Rowling",
                "cached_image": {
                    "id": 6005776,
                    "url": "https://assets.hardcover.app/edition/28780168/0012cc5a-9e3a-48d4-95b6-d91f484de17a.jpg",
                    "color": "#752928",
                    "width": 313,
                    "height": 475,
                    "color_name": "Brown"
                },
                "id": 376219,
                "pages": 448
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "smart-cities",
                "title": "Smart Cities",
                "cached_contributors": "Anthony M. Townsend",
                "cached_image": {
                    "id": 804162,
                    "url": "https://assets.hardcover.app/edition/19821325/7445045-L.jpg",
                    "color": "#e1dfdb",
                    "width": 266,
                    "height": 400,
                    "color_name": "Beige"
                },
                "id": 376757,
                "pages": 416
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-01-28",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "the-great-gatsby",
                "title": "The Great Gatsby",
                "cached_contributors": "F. Scott Fitzgerald",
                "cached_image": {
                    "id": 1415652,
                    "url": "https://assets.hardcover.app/external_data/27597898/6cb93bdc8f29bc483f692644c829ab97a7f17716.jpeg",
                    "color": "#998209",
                    "width": 299,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 377193,
                "pages": 180
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-02-28",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-handmaid-s-tale-1985",
                "title": "The Handmaid’s Tale",
                "cached_contributors": "Margaret Atwood",
                "cached_image": {
                    "id": 2904685,
                    "url": "https://assets.hardcover.app/edition/20879993/7be97c9457dd0572c4cf915cddc844a91a24dc24.jpeg",
                    "color": "#ba0502",
                    "width": 324,
                    "height": 500,
                    "color_name": "Red"
                },
                "id": 377799,
                "pages": 324
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-06-24",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-left-hand-of-darkness",
                "title": "The Left Hand of Darkness",
                "cached_contributors": "Ursula K. Le Guin",
                "cached_image": {
                    "id": 3303085,
                    "url": "https://assets.hardcover.app/external_data/24542917/d68669a2fa471f20f2bec91f8c35c8b855470387.jpeg",
                    "color": "#1f4e59",
                    "width": 200,
                    "height": 321,
                    "color_name": "Purple"
                },
                "id": 377842,
                "pages": 267
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "range",
                "title": "Range: Why Generalists Triumph in a Specialized World",
                "cached_contributors": "David   Epstein",
                "cached_image": {
                    "id": 1903531,
                    "url": "https://assets.hardcover.app/book_mappings/7332669/2a1692b5b17014dbcc67867536300250b6931e65.jpeg",
                    "color": "#47ca99",
                    "width": 335,
                    "height": 500,
                    "color_name": "Green"
                },
                "id": 378776,
                "pages": 352
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-04-12",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "of-mice-and-men",
                "title": "Of Mice and Men",
                "cached_contributors": "John Steinbeck",
                "cached_image": {
                    "id": 1692046,
                    "url": "https://assets.hardcover.app/editions/30399637/208697025088793-Of_Mice_and_Men_(1937_1st_ed_dust_jacket).jpg",
                    "color": "#c8d69c",
                    "width": 1844,
                    "height": 2883,
                    "color_name": "Beige"
                },
                "id": 378949,
                "pages": 162
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "1984",
                "title": "1984",
                "cached_contributors": "George Orwell",
                "cached_image": {
                    "id": 6820527,
                    "url": "https://assets.hardcover.app/edition/29258002/fb69559e-7c34-40cb-8518-3ef4898b830c.jpg",
                    "color": "#9f0204",
                    "width": 291,
                    "height": 475,
                    "color_name": "Purple"
                },
                "id": 379760,
                "pages": 336
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-09-30",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "the-sense-of-an-ending",
                "title": "The Sense of an Ending",
                "cached_contributors": "Julian Barnes",
                "cached_image": {
                    "id": 5372287,
                    "url": "https://assets.hardcover.app/edition/30400983/9db61921f360983ec3b12cc03dca2bf850df795c.jpeg",
                    "color": "#dcdab5",
                    "width": 322,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 381584,
                "pages": 164
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-09-30",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "little-fires-everywhere",
                "title": "Little Fires Everywhere",
                "cached_contributors": "Celeste Ng",
                "cached_image": {
                    "id": 1163410,
                    "url": "https://assets.hardcover.app/editions/30399704/4364405759474168-34273236.jpeg",
                    "color": "#024d61",
                    "width": 462,
                    "height": 700,
                    "color_name": "Purple"
                },
                "id": 382278,
                "pages": 370
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-curious-incident-of-the-dog-in-the-night-time",
                "title": "The Curious Incident of the Dog in the Night-Time",
                "cached_contributors": "Mark Haddon",
                "cached_image": {
                    "id": 3253669,
                    "url": "https://assets.hardcover.app/external_data/60344932/5d3d325dbfd7eda00bc7f63495d4a03519bb1e8f.jpeg",
                    "color": "#c40d03",
                    "width": 324,
                    "height": 500,
                    "color_name": "Red"
                },
                "id": 382641,
                "pages": 226
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "circe",
                "title": "Circe",
                "cached_contributors": "Madeline Miller",
                "cached_image": {
                    "id": 2906025,
                    "url": "https://assets.hardcover.app/edition/21722354/f4718cc102afba9d0c11453d7a1a7047888ee2ba.jpeg",
                    "color": "#bc3005",
                    "width": 333,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 383598,
                "pages": 400
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-09-26",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "what-i-talk-about-when-i-talk-about-running-2006",
                "title": "What I Talk About When I Talk About Running",
                "cached_contributors": "Haruki Murakami",
                "cached_image": {
                    "id": 4755073,
                    "url": "https://assets.hardcover.app/editions/30591313/4c7a96fe-0260-4c6d-a9b3-9192325f0612.jpg",
                    "color": "#76959d",
                    "width": 522,
                    "height": 800,
                    "color_name": "Purple"
                },
                "id": 383895,
                "pages": 190
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-11-02",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "norse-mythology",
                "title": "Norse Mythology",
                "cached_contributors": "Neil Gaiman",
                "cached_image": {
                    "id": 3984686,
                    "url": "https://assets.hardcover.app/editions/30400951/5286491007216958.jpg",
                    "color": "#4e6363",
                    "width": 346,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 385427,
                "pages": 301
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-08-19",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "get-in-trouble",
                "title": "Get in Trouble",
                "cached_contributors": "Kelly Link",
                "cached_image": {
                    "id": 3266829,
                    "url": "https://assets.hardcover.app/external_data/43301523/cec649279514994ddc241daa0ca67581b678ed4f.jpeg",
                    "color": "#cda956",
                    "width": 333,
                    "height": 500,
                    "color_name": "Orange"
                },
                "id": 385587,
                "pages": 280
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-10-12",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "cats-cradle",
                "title": "Cat's Cradle",
                "cached_contributors": "Kurt Vonnegut",
                "cached_image": {
                    "id": 6527451,
                    "url": "https://assets.hardcover.app/external_data/2232430/3228ec27f3605d160fed96e79fc0e3e0b5313e55.jpeg",
                    "color": "#8b4d0c",
                    "width": 324,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 427315,
                "pages": 198
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-10-19",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "the-invisible-life-of-addie-larue",
                "title": "The Invisible Life of Addie LaRue",
                "cached_contributors": "V.E. Schwab",
                "cached_image": {
                    "id": 2905180,
                    "url": "https://assets.hardcover.app/edition/9887800/25a0234922dc176711a9f418e70af29bc5a6153c.jpeg",
                    "color": "#271f0e",
                    "width": 331,
                    "height": 500,
                    "color_name": "Black"
                },
                "id": 427524,
                "pages": 448
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "prisoners-of-geography",
                "title": "Prisoners of Geography: Ten Maps That Explain Everything About the World",
                "cached_contributors": "Tim  Marshall",
                "cached_image": {
                    "id": 3386108,
                    "url": "https://assets.hardcover.app/external_data/38959652/5f6703fb37f83c3b5e092d5df93da839c039e368.jpeg",
                    "color": "#1967bc",
                    "width": 334,
                    "height": 500,
                    "color_name": "Blue"
                },
                "id": 427619,
                "pages": 320
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-07-22",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "horrorstor",
                "title": "Horrorstör",
                "cached_contributors": "Grady Hendrix",
                "cached_image": {
                    "id": 4635604,
                    "url": "https://assets.hardcover.app/edition/12128837/dcaf74aaa42954857ee709d9de1766074ab22691.jpeg",
                    "color": "#dcdbde",
                    "width": 422,
                    "height": 500,
                    "color_name": "Pink"
                },
                "id": 427630,
                "pages": 248
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-11-29",
                    "user_book": {
                        "rating": 1
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "how-to-avoid-a-climate-disaster",
                "title": "How to Avoid a Climate Disaster: The Solutions We Have and the Breakthroughs We Need",
                "cached_contributors": "Bill Gates",
                "cached_image": {
                    "id": 4628888,
                    "url": "https://assets.hardcover.app/edition/30401113/1d227b416f5346ff16b2db793408a9ce688ad210.jpeg",
                    "color": "#f5f5f5",
                    "width": 329,
                    "height": 500,
                    "color_name": "White"
                },
                "id": 427658,
                "pages": 288
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "uncanny-valley",
                "title": "Uncanny Valley",
                "cached_contributors": "Anna Wiener",
                "cached_image": {
                    "id": 2420049,
                    "url": "https://assets.hardcover.app/external_data/59375164/507d7c2cfd3621218ce517f31efaccf85784cf9e.jpeg",
                    "color": "#bfc6cb",
                    "width": 98,
                    "height": 98,
                    "color_name": "Pink"
                },
                "id": 427674,
                "pages": null
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "1q84",
                "title": "1Q84",
                "cached_contributors": "Haruki Murakami",
                "cached_image": {
                    "id": 1709665,
                    "url": "https://assets.hardcover.app/editions/28550547/2665591638920066.jpg",
                    "color": "#d9cac4",
                    "width": 779,
                    "height": 1200,
                    "color_name": "Silver"
                },
                "id": 427687,
                "pages": 1184
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-04-25",
                    "user_book": {
                        "rating": 3.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-hitchhikers-guide-to-the-galaxy",
                "title": "The Hitchhiker's Guide to the Galaxy",
                "cached_contributors": "Douglas Adams",
                "cached_image": {
                    "id": 6859776,
                    "url": "https://assets.hardcover.app/edition/4904798/cf0aede4-f8e0-4eeb-859c-affeda2b921c.jpg",
                    "color": "#032c3c",
                    "width": 3032,
                    "height": 4642,
                    "color_name": "Purple"
                },
                "id": 427798,
                "pages": 215
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-05-15",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "thinking-in-bets",
                "title": "Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts",
                "cached_contributors": "Annie Duke",
                "cached_image": {
                    "id": 4594795,
                    "url": "https://assets.hardcover.app/external_data/41199449/e3ac1c64d5e596e0d726c458f8cad962363c63c4.jpeg",
                    "color": "#d61002",
                    "width": 333,
                    "height": 500,
                    "color_name": "Red"
                },
                "id": 428014,
                "pages": 290
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-09-26",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-midnight-library",
                "title": "The Midnight Library",
                "cached_contributors": "Matt Haig",
                "cached_image": {
                    "id": 2722993,
                    "url": "https://assets.hardcover.app/external_data/30206313/f95c74793bcdd7925758f16a6f6f5f423a2ec81d.jpeg",
                    "color": "#e5e8dc",
                    "width": 358,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 428018,
                "pages": 304
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-05-14",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "blood-sweat-and-pixels",
                "title": "Blood, Sweat, and Pixels: The Triumphant, Turbulent Stories Behind How Video Games Are Made",
                "cached_contributors": "Jason Schreier",
                "cached_image": {
                    "id": 5657055,
                    "url": "https://assets.hardcover.app/external_data/1189430/759da1b3cbb3167e02f17003f46cacc83d343f12.jpeg",
                    "color": "#023d71",
                    "width": 331,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 428020,
                "pages": 304
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-04-28",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "crying-in-h-mart",
                "title": "Crying in H Mart",
                "cached_contributors": "Michelle Zauner",
                "cached_image": {
                    "id": 2796428,
                    "url": "https://assets.hardcover.app/external_data/61021603/028b0c4c33c68afc861abba8daa1fdc2463bec98.jpeg",
                    "color": "#9e0a08",
                    "width": 98,
                    "height": 151,
                    "color_name": "Brown"
                },
                "id": 428211,
                "pages": 356
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-07-11",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "where-the-crawdads-sing",
                "title": "Where the Crawdads Sing",
                "cached_contributors": "Delia Owens",
                "cached_image": {
                    "id": 3365150,
                    "url": "https://assets.hardcover.app/editions/22309128/6102116956447505.jpg",
                    "color": "#ef6e42",
                    "width": 997,
                    "height": 1501,
                    "color_name": "Orange"
                },
                "id": 428261,
                "pages": 384
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "doughnut-economics-seven-ways-to-think-like-a-21st-century-economist",
                "title": "Doughnut Economics: Seven Ways to Think Like a 21st-Century Economist",
                "cached_contributors": "Kate Raworth",
                "cached_image": {
                    "id": 2753869,
                    "url": "https://assets.hardcover.app/external_data/32846490/ac0c910223ddda57139ba0791bb4064fa4d6514f.jpeg",
                    "color": "#d6dbdd",
                    "width": 325,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 428284,
                "pages": 384
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-09-18",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "hamnet",
                "title": "Hamnet",
                "cached_contributors": "Maggie O'Farrell",
                "cached_image": {
                    "id": 1205229,
                    "url": "https://assets.hardcover.app/book_mappings/7332877/83142cb3982272f35dc23b0c491e0cb39c5165ec.jpeg",
                    "color": "#624e1f",
                    "width": 325,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 428411,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-04-11",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-table-of-less-valued-knights",
                "title": "The Table of Less Valued Knights",
                "cached_contributors": "Marie Phillips",
                "cached_image": {
                    "id": 735549,
                    "url": "https://assets.hardcover.app/edition/30399598/21532109._SX98_.jpg",
                    "color": "#62684d",
                    "width": 98,
                    "height": 149,
                    "color_name": "Brown"
                },
                "id": 428482,
                "pages": 273
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-07-26",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "south-of-the-border-west-of-the-sun",
                "title": "South of the Border, West of the Sun",
                "cached_contributors": "Haruki Murakami",
                "cached_image": {
                    "id": 3741038,
                    "url": "https://assets.hardcover.app/editions/26722323/8544636274292159.jpeg",
                    "color": "#aa6223",
                    "width": 610,
                    "height": 950,
                    "color_name": "Brown"
                },
                "id": 428610,
                "pages": 213
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-08-06",
                    "user_book": {
                        "rating": 3.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "sputnik-sweetheart",
                "title": "Sputnik Sweetheart",
                "cached_contributors": "Haruki Murakami",
                "cached_image": {
                    "id": 4991366,
                    "url": "https://assets.hardcover.app/editions/8692702/36f4ca85-e36b-4266-aaa5-385bd53a5a8f.jpg",
                    "color": "#ad8763",
                    "width": 973,
                    "height": 1536,
                    "color_name": "Gray"
                },
                "id": 428614,
                "pages": 210
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-12-21",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-city-we-became",
                "title": "The City We Became",
                "cached_contributors": "N. K. Jemisin",
                "cached_image": {
                    "id": 6398468,
                    "url": "https://assets.hardcover.app/book/428719/f5d395c7-89ca-4f49-b953-3f7686111e46.jpg",
                    "color": "#4a4a4f",
                    "width": 962,
                    "height": 1500,
                    "color_name": "Purple"
                },
                "id": 428719,
                "pages": 481
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-white-tiger",
                "title": "The White Tiger",
                "cached_contributors": "Aravind Adiga",
                "cached_image": {
                    "id": 460280,
                    "url": "https://assets.hardcover.app/edition/8660306/2787359-L.jpg",
                    "color": "#eee8eb",
                    "width": 327,
                    "height": 500,
                    "color_name": "Pink"
                },
                "id": 429555,
                "pages": 292
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "in-cold-blood",
                "title": "In Cold Blood",
                "cached_contributors": "Truman Capote",
                "cached_image": {
                    "id": 3994592,
                    "url": "https://assets.hardcover.app/edition/29139931/b227320dd378685b36172c6f2888b53e2247e170.jpeg",
                    "color": "#c9c0a5",
                    "width": 324,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 429559,
                "pages": 370
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "odds-against-tomorrow",
                "title": "Odds Against Tomorrow",
                "cached_contributors": "Nathaniel Rich",
                "cached_image": {
                    "id": 797278,
                    "url": "https://assets.hardcover.app/edition/5268366/15759484._SX98_.jpg",
                    "color": "#ddd6bf",
                    "width": 98,
                    "height": 147,
                    "color_name": "Beige"
                },
                "id": 430191,
                "pages": 304
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "artemis-fowl",
                "title": "Artemis Fowl",
                "cached_contributors": "Eoin Colfer",
                "cached_image": {
                    "id": 6771607,
                    "url": "https://assets.hardcover.app/edition/6806645/a9dd78dd-cc25-480c-9161-e8a556259c95.jpg",
                    "color": "#706d8a",
                    "width": 1000,
                    "height": 1438,
                    "color_name": "Purple"
                },
                "id": 430949,
                "pages": 280
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "if-on-a-winters-night-a-traveler",
                "title": "If on a Winter's Night a Traveler",
                "cached_contributors": "Italo Calvino",
                "cached_image": {
                    "id": 1653511,
                    "url": "https://assets.hardcover.app/external_data/28442196/dcaa1fdb6320477cbcf916791394256e6b63f2ec.jpeg",
                    "color": "#79604f",
                    "width": 312,
                    "height": 500,
                    "color_name": "Gray"
                },
                "id": 431145,
                "pages": 272
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-05-17",
                    "user_book": {
                        "rating": 2
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "21-lessons-for-the-21st-century",
                "title": "21 Lessons for the 21st Century",
                "cached_contributors": "Yuval Noah Harari",
                "cached_image": {
                    "id": 6480066,
                    "url": "https://assets.hardcover.app/edition/30402213/94129fcb-4279-4978-8adf-ea3835b8aa9d.jpg",
                    "color": "#fdf8c9",
                    "width": 1864,
                    "height": 2850,
                    "color_name": "Beige"
                },
                "id": 431229,
                "pages": 352
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "american-revolutions",
                "title": "American Revolutions",
                "cached_contributors": "Alan Taylor",
                "cached_image": {
                    "id": 735808,
                    "url": "https://assets.hardcover.app/edition/4919940/28757817._SX98_.jpg",
                    "color": "#d9a865",
                    "width": 98,
                    "height": 149,
                    "color_name": "Orange"
                },
                "id": 431230,
                "pages": 736
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "golden-hill",
                "title": "Golden Hill",
                "cached_contributors": "Francis Spufford",
                "cached_image": {
                    "id": 482798,
                    "url": "https://assets.hardcover.app/edition/22669621/10302334-L.jpg",
                    "color": "#e8e9e4",
                    "width": 325,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 431231,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-03-22",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "home-fire",
                "title": "Home Fire",
                "cached_contributors": "Kamila Shamsie",
                "cached_image": {
                    "id": 683486,
                    "url": "https://assets.hardcover.app/edition/10947060/content.jpeg",
                    "color": "#d15b54",
                    "width": 128,
                    "height": 193,
                    "color_name": "Orange"
                },
                "id": 431256,
                "pages": 290
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-06-07",
                    "user_book": {
                        "rating": 3.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "autonomous",
                "title": "Autonomous",
                "cached_contributors": "Annalee Newitz",
                "cached_image": {
                    "id": 5466998,
                    "url": "https://assets.hardcover.app/external_data/964999/229c375d3dfd50782add9bcf87f27c4e234386e7.jpeg",
                    "color": "#106173",
                    "width": 326,
                    "height": 500,
                    "color_name": "Blue"
                },
                "id": 431267,
                "pages": 319
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "a-little-history-of-philosophy",
                "title": "A Little History of Philosophy",
                "cached_contributors": "Nigel Warburton",
                "cached_image": {
                    "id": 5294426,
                    "url": "https://assets.hardcover.app/editions/8932587/38818da4-31ba-4225-a30b-2e0df0e1b9ca.jpg",
                    "color": "#f5f2e7",
                    "width": 659,
                    "height": 1000,
                    "color_name": "Beige"
                },
                "id": 431343,
                "pages": 252
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-11-29",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-invention-of-nature",
                "title": "The Invention of Nature: Alexander von Humboldt's New World",
                "cached_contributors": "Andrea Wulf",
                "cached_image": {
                    "id": 3383814,
                    "url": "https://assets.hardcover.app/external_data/28473321/21d3e60528d99c1c1a918d76d4c949c8c5e04754.jpeg",
                    "color": "#886806",
                    "width": 335,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 431372,
                "pages": 506
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-08-26",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "mordew",
                "title": "Mordew",
                "cached_contributors": "Alex Pheby",
                "cached_image": {
                    "id": 1053421,
                    "url": "https://assets.hardcover.app/external_data/59380703/d7c4608d4642e2b9c4926094e0f2f23b5e993ad0.jpeg",
                    "color": "#dfd7bc",
                    "width": 98,
                    "height": 151,
                    "color_name": "Beige"
                },
                "id": 431421,
                "pages": 624
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "howls-moving-castle",
                "title": "Howl's Moving Castle",
                "cached_contributors": "Diana Wynne Jones",
                "cached_image": {
                    "id": 1258773,
                    "url": "https://assets.hardcover.app/external_data/39788101/463194df8c826bdb85ccb460019cc7797e175116.jpeg",
                    "color": "#19ba68",
                    "width": 333,
                    "height": 500,
                    "color_name": "Green"
                },
                "id": 431441,
                "pages": 429
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-09-24",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "my-sister-the-serial-killer",
                "title": "My Sister, the Serial Killer",
                "cached_contributors": "Oyinkan Braithwaite",
                "cached_image": {
                    "id": 1264966,
                    "url": "https://assets.hardcover.app/book_mappings/7332769/1c71c351c88eba37e5a91297edc51c80357c7aa5.jpeg",
                    "color": "#02d402",
                    "width": 311,
                    "height": 500,
                    "color_name": "Green"
                },
                "id": 431844,
                "pages": 226
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-04-17",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-hard-thing-about-hard-things",
                "title": "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers",
                "cached_contributors": "Ben Horowitz",
                "cached_image": {
                    "id": 4492207,
                    "url": "https://assets.hardcover.app/edition/29262771/a444d69963297cbb1fce2786dcad9619cbae2802.jpeg",
                    "color": "#da2404",
                    "width": 342,
                    "height": 500,
                    "color_name": "Red"
                },
                "id": 431954,
                "pages": 304
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-uninhabitable-earth",
                "title": "The Uninhabitable Earth: Life After Warming",
                "cached_contributors": "David Wallace-Wells",
                "cached_image": {
                    "id": 3285324,
                    "url": "https://assets.hardcover.app/external_data/48545266/52bf1099c6bf713f0211a76a83974935bcaa9c7a.jpeg",
                    "color": "#d1cbbd",
                    "width": 296,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 432329,
                "pages": null
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "black-leopard-red-wolf",
                "title": "Black Leopard, Red Wolf",
                "cached_contributors": "Marlon James",
                "cached_image": {
                    "id": 1903746,
                    "url": "https://assets.hardcover.app/book_mappings/7332873/48dd119d91d4e7404784512425a69a73fd5e0268.jpeg",
                    "color": "#e1dede",
                    "width": 329,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 432346,
                "pages": 620
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "long-the-short-of-it",
                "title": "Long & the Short of It",
                "cached_contributors": "John Kay",
                "cached_image": {},
                "id": 432501,
                "pages": 241
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-12-31",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "killing-commendatore",
                "title": "Killing Commendatore",
                "cached_contributors": "Haruki Murakami",
                "cached_image": {
                    "id": 4728908,
                    "url": "https://assets.hardcover.app/editions/27165623/9717419202776382.jpg",
                    "color": "#084746",
                    "width": 260,
                    "height": 400,
                    "color_name": "Purple"
                },
                "id": 432528,
                "pages": 738
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-03-03",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "skin-in-the-game-the-hidden-asymmetries-in-daily-life",
                "title": "Skin in the Game: The Hidden Asymmetries in Daily Life",
                "cached_contributors": "Nassim Nicholas Taleb",
                "cached_image": {
                    "id": 3385546,
                    "url": "https://assets.hardcover.app/external_data/50323282/d320e554cc39831e6b19cca794de242a009120f2.jpeg",
                    "color": "#881a04",
                    "width": 338,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 432553,
                "pages": 272
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "himmlers-hersens-heten-heidrich",
                "title": "Himmlers hersens heten Heidrich",
                "cached_contributors": "Laurent Binet",
                "cached_image": {
                    "id": 688202,
                    "url": "https://assets.hardcover.app/edition/30552609/content.jpeg",
                    "color": "#d0cabb",
                    "width": 128,
                    "height": 202,
                    "color_name": "Silver"
                },
                "id": 432584,
                "pages": 346
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-08-17",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "happy-city",
                "title": "Happy City",
                "cached_contributors": "Charles Montgomery",
                "cached_image": {
                    "id": 499514,
                    "url": "https://assets.hardcover.app/edition/4694346/10435080-L.jpg",
                    "color": "#aed4ca",
                    "width": 331,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 433196,
                "pages": 368
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-03-09",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "warlight",
                "title": "Warlight",
                "cached_contributors": "Michael Ondaatje",
                "cached_image": {
                    "id": 3286303,
                    "url": "https://assets.hardcover.app/external_data/37180810/7af655ce8a9ac0b9473b54ef634d288a7b254100.jpeg",
                    "color": "#a66a51",
                    "width": 310,
                    "height": 500,
                    "color_name": "Gray"
                },
                "id": 433275,
                "pages": 304
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-10-02",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "10-minutes-38-seconds-in-this-strange-world",
                "title": "10 Minutes 38 Seconds in This Strange World",
                "cached_contributors": "Elif Shafak",
                "cached_image": {
                    "id": 3294898,
                    "url": "https://assets.hardcover.app/edition/30403252/e502ce906f9f8f95856d44d0419625022bbd707c.jpeg",
                    "color": "#dee3e2",
                    "width": 324,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 433911,
                "pages": 320
            },
            "user_book_reads": [
                {
                    "finished_at": "2026-02-20",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "a-madman-dreams-of-turing-machines",
                "title": "A Madman Dreams of Turing Machines",
                "cached_contributors": "Janna Levin",
                "cached_image": {
                    "id": 499693,
                    "url": "https://assets.hardcover.app/edition/9549373/745168-L.jpg",
                    "color": "#f0f4e7",
                    "width": 333,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 434123,
                "pages": 230
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "elmet",
                "title": "Elmet",
                "cached_contributors": "Fiona Mozley",
                "cached_image": {
                    "id": 484195,
                    "url": "https://assets.hardcover.app/edition/5055629/10863343-L.jpg",
                    "color": "#f7f5ea",
                    "width": 315,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 434765,
                "pages": 311
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-09-16",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "young-jane-young",
                "title": "Young Jane Young",
                "cached_contributors": "Gabrielle Zevin",
                "cached_image": {
                    "id": 3642531,
                    "url": "https://assets.hardcover.app/edition/14024751/473179edede77a4417e0cc02b6cb38a40e85cc11.jpeg",
                    "color": "#4b6bb0",
                    "width": 318,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 434796,
                "pages": 304
            },
            "user_book_reads": [
                {
                    "finished_at": "2026-01-21",
                    "user_book": {
                        "rating": 3.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-north-water",
                "title": "The North Water",
                "cached_contributors": "Ian McGuire",
                "cached_image": {
                    "id": 462518,
                    "url": "https://assets.hardcover.app/edition/14498641/12368687-L.jpg",
                    "color": "#d4d3bf",
                    "width": 333,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 434799,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-01-25",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "golden-child",
                "title": "Golden Child",
                "cached_contributors": "Claire Adam",
                "cached_image": {
                    "id": 736324,
                    "url": "https://assets.hardcover.app/edition/26098484/40127349._SX98_.jpg",
                    "color": "#cf8305",
                    "width": 98,
                    "height": 148,
                    "color_name": "Orange"
                },
                "id": 434874,
                "pages": 306
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "lanny",
                "title": "Lanny",
                "cached_contributors": "Max Porter",
                "cached_image": {
                    "id": 973485,
                    "url": "https://assets.hardcover.app/external_data/59384929/c60ba6c397a20516310301b91ed07a45ed2b9942.jpeg",
                    "color": "#d3ccb2",
                    "width": 98,
                    "height": 152,
                    "color_name": "Beige"
                },
                "id": 434883,
                "pages": 210
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-05-24",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "kim-jiyoung-born-1982",
                "title": "Kim Jiyoung, Born 1982",
                "cached_contributors": "Cho Nam-Joo",
                "cached_image": {
                    "id": 4819562,
                    "url": "https://assets.hardcover.app/edition/22076074/8fac3a9eb368fba2d29bb0546fbe7567f8167592.jpeg",
                    "color": "#a6cfd1",
                    "width": 339,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 434950,
                "pages": 168
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-07-27",
                    "user_book": {
                        "rating": 3.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "no-longer-human",
                "title": "No Longer Human",
                "cached_contributors": "Osamu Dazai",
                "cached_image": {
                    "id": 4450071,
                    "url": "https://assets.hardcover.app/editions/15248233/9349133283420308.jpg",
                    "color": "#ab0b2b",
                    "width": 318,
                    "height": 445,
                    "color_name": "Purple"
                },
                "id": 435455,
                "pages": 177
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "play-it-as-it-lays",
                "title": "Play it as it lays",
                "cached_contributors": "Joan Didion",
                "cached_image": {
                    "id": 3265432,
                    "url": "https://assets.hardcover.app/external_data/38927957/bc5e9353dba4808091089029f95530b34b8acb30.jpeg",
                    "color": "#dcceaf",
                    "width": 220,
                    "height": 336,
                    "color_name": "Silver"
                },
                "id": 435613,
                "pages": 214
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-04-09",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-little-stranger",
                "title": "The Little Stranger",
                "cached_contributors": "Sarah Waters",
                "cached_image": {
                    "id": 4465461,
                    "url": "https://assets.hardcover.app/edition/30633191/ac61793cf2eb4f68fb7713ba7536f6d72aba6533.jpeg",
                    "color": "#d4d4d3",
                    "width": 324,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 435687,
                "pages": 480
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-08-13",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "life-30",
                "title": "Life 3.0: Being Human in the Age of Artificial Intelligence",
                "cached_contributors": "Max Tegmark",
                "cached_image": {
                    "id": 3301650,
                    "url": "https://assets.hardcover.app/external_data/38929008/7515c151e2f21730f50dd881a9d3038de0789469.jpeg",
                    "color": "#566f95",
                    "width": 331,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 435940,
                "pages": 385
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "before-the-coffee-gets-cold",
                "title": "Before the Coffee Gets Cold",
                "cached_contributors": "Toshikazu Kawaguchi",
                "cached_image": {
                    "id": 1669531,
                    "url": "https://assets.hardcover.app/editions/24086923/8822767016251445-81GoE0na35L._AC_UF1000,1000_QL80_.jpg",
                    "color": "#f5ece6",
                    "width": 660,
                    "height": 1000,
                    "color_name": "White"
                },
                "id": 436167,
                "pages": 224
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-12-05",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "history-of-wolves",
                "title": "History of Wolves",
                "cached_contributors": "Emily Fridlund",
                "cached_image": {
                    "id": 683506,
                    "url": "https://assets.hardcover.app/edition/30588302/content.jpeg",
                    "color": "#acc8d6",
                    "width": 128,
                    "height": 213,
                    "color_name": "Beige"
                },
                "id": 436480,
                "pages": 192
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-02-21",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "in-the-dream-house",
                "title": "In the Dream House",
                "cached_contributors": "Carmen Maria Machado",
                "cached_image": {
                    "id": 6132530,
                    "url": "https://assets.hardcover.app/external_data/1743361/1615dc1fdb862b2fb885bdb3b74223f86e65fc33.jpeg",
                    "color": "#d82f07",
                    "width": 98,
                    "height": 157,
                    "color_name": "Red"
                },
                "id": 436612,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-04-16",
                    "user_book": {
                        "rating": 4.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-picture-of-dorian-gray",
                "title": "The Picture of Dorian Gray",
                "cached_contributors": "Oscar Wilde",
                "cached_image": {
                    "id": 1249489,
                    "url": "https://assets.hardcover.app/external_data/59387927/b157de9132c5f657606f923066a4ada42c6dea51.jpeg",
                    "color": "#ece2cd",
                    "width": 98,
                    "height": 158,
                    "color_name": "Beige"
                },
                "id": 436692,
                "pages": 186
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-02-07",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "men-without-women",
                "title": "Men Without Women",
                "cached_contributors": "Haruki Murakami",
                "cached_image": {
                    "id": 3741049,
                    "url": "https://assets.hardcover.app/external_data/45159330/b8b166ca10938b57471089c1060accd4431e4409.jpeg",
                    "color": "#f0d3cf",
                    "width": 324,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 436916,
                "pages": 241
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-08-08",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-double-2002",
                "title": "The Double",
                "cached_contributors": "José Saramago",
                "cached_image": {
                    "id": 6244112,
                    "url": "https://assets.hardcover.app/edition/11171074/83706f7224825431d5d40890e9fa99e2a5a1ac1b.jpeg",
                    "color": "#0257b7",
                    "width": 325,
                    "height": 500,
                    "color_name": "Blue"
                },
                "id": 438073,
                "pages": 44
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "who-owns-the-future",
                "title": "Who Owns the Future?",
                "cached_contributors": "Jaron Lanier",
                "cached_image": {
                    "id": 1672804,
                    "url": "https://assets.hardcover.app/external_data/59390989/d95a74b6f06347121dd794f01962cb7660e926c1.jpeg",
                    "color": "#c52215",
                    "width": 98,
                    "height": 148,
                    "color_name": "Red"
                },
                "id": 439784,
                "pages": 367
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "high-rise-1975",
                "title": "High-Rise",
                "cached_contributors": "J. G. Ballard",
                "cached_image": {
                    "id": 2727760,
                    "url": "https://assets.hardcover.app/external_data/60958723/01dcc490341ee1e1aa4c05a756bd4ace5c927cb8.jpeg",
                    "color": "#7f5505",
                    "width": 98,
                    "height": 153,
                    "color_name": "Brown"
                },
                "id": 440088,
                "pages": 253
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-03-26",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "matrix",
                "title": "Matrix",
                "cached_contributors": "Lauren Groff",
                "cached_image": {
                    "id": 463299,
                    "url": "https://assets.hardcover.app/edition/7657250/10831681-L.jpg",
                    "color": "#706e45",
                    "width": 500,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 440172,
                "pages": 260
            },
            "user_book_reads": []
        },

        {
            "book": {
                "slug": "a-master-of-djinn",
                "title": "A Master of Djinn",
                "cached_contributors": "P. Djèlí Clark",
                "cached_image": {
                    "id": 3339067,
                    "url": "https://assets.hardcover.app/editions/30405763/5335274566339030.jpg",
                    "color": "#969491",
                    "width": 290,
                    "height": 445,
                    "color_name": "Gray"
                },
                "id": 440947,
                "pages": 464
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-09-22",
                    "user_book": {
                        "rating": 2
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "homo-deus",
                "title": "Homo Deus: A Brief History of Tomorrow",
                "cached_contributors": "Yuval Noah Harari",
                "cached_image": {
                    "id": 5372203,
                    "url": "https://assets.hardcover.app/edition/30425557/3b67f74a7a1f38cdd9ce2941e2cc608229ff3492.jpeg",
                    "color": "#d50305",
                    "width": 333,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 441336,
                "pages": 449
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-01-28",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "hello-world",
                "title": "Hello World: Being Human in the Age of Algorithms",
                "cached_contributors": "Hannah Fry",
                "cached_image": {
                    "id": 1098383,
                    "url": "https://assets.hardcover.app/external_data/59393952/e7d8d8e5629b122464661c775f91070662699f96.jpeg",
                    "color": "#f6f6dd",
                    "width": 98,
                    "height": 149,
                    "color_name": "Beige"
                },
                "id": 441353,
                "pages": 246
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-04-15",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "an-elegant-puzzle",
                "title": "An Elegant Puzzle: Systems of Engineering Management",
                "cached_contributors": "Will Larson",
                "cached_image": {
                    "id": 1030293,
                    "url": "https://assets.hardcover.app/external_data/59930330/d66911803a64a92caf73f9954ec8f2ba40dc8470.jpeg",
                    "color": "#d4d4d4",
                    "width": 128,
                    "height": 189,
                    "color_name": "Silver"
                },
                "id": 441373,
                "pages": 281
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "flauberts-parrot",
                "title": "Flaubert's Parrot",
                "cached_contributors": "Julian Barnes",
                "cached_image": {
                    "id": 6817287,
                    "url": "https://assets.hardcover.app/edition/8634956/d3f76cc85779c3206a9800dc4b6ffbef10f0043a.jpeg",
                    "color": "#eedcc9",
                    "width": 313,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 441817,
                "pages": 229
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-01-02",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-mezzanine",
                "title": "The Mezzanine",
                "cached_contributors": "Nicholson Baker",
                "cached_image": {
                    "id": 5098440,
                    "url": "https://assets.hardcover.app/editions/5483593/f17c9347-f410-401d-b89d-255101fd6a6e.jpg",
                    "color": "#525051",
                    "width": 1488,
                    "height": 2381,
                    "color_name": "Purple"
                },
                "id": 441850,
                "pages": 135
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-07-10",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "woman-on-the-edge-of-time",
                "title": "Woman on the Edge of Time",
                "cached_contributors": "Marge Piercy",
                "cached_image": {
                    "id": 5235227,
                    "url": "https://assets.hardcover.app/edition/30252768/4afaff198805e9833f4870c7bea89ded2f08cf5d.jpeg",
                    "color": "#af5719",
                    "width": 325,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 442115,
                "pages": 434
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-midwich-cuckoos",
                "title": "The Midwich Cuckoos",
                "cached_contributors": "John Wyndham",
                "cached_image": {
                    "id": 4178604,
                    "url": "https://assets.hardcover.app/external_data/49954275/5903d4be9a23a8b83ed181c1797e260fb9b78e47.jpeg",
                    "color": "#a71c07",
                    "width": 314,
                    "height": 475,
                    "color_name": "Brown"
                },
                "id": 442955,
                "pages": 52
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "connectography",
                "title": "Connectography: Mapping the Future of Global Civilization",
                "cached_contributors": "Parag Khanna",
                "cached_image": {
                    "id": 1913598,
                    "url": "https://assets.hardcover.app/book_mappings/7339010/71174fef154d6182484713b37ea820aa63b19785.jpeg",
                    "color": "#61170b",
                    "width": 329,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 443076,
                "pages": 530
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "french-exit",
                "title": "French Exit",
                "cached_contributors": "Patrick deWitt",
                "cached_image": {
                    "id": 3353707,
                    "url": "https://assets.hardcover.app/external_data/24971106/bdd72a264c3048774f850bb588c843030b4ab9b1.jpeg",
                    "color": "#e7e0be",
                    "width": 330,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 443307,
                "pages": 256
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-07-29",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-animals-in-that-country",
                "title": "The Animals in That Country",
                "cached_contributors": "Laura Jean McKay",
                "cached_image": {
                    "id": 6606744,
                    "url": "https://assets.hardcover.app/edition/26221547/e50cf4c47685af63b946393520f9c24d50ede7a6.jpeg",
                    "color": "#5a5953",
                    "width": 311,
                    "height": 500,
                    "color_name": "Gray"
                },
                "id": 443475,
                "pages": 288
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "a-new-world-begins",
                "title": "A New World Begins",
                "cached_contributors": "Jeremy D. Popkin",
                "cached_image": {
                    "id": 737441,
                    "url": "https://assets.hardcover.app/edition/8824298/45031867._SX98_.jpg",
                    "color": "#536845",
                    "width": 98,
                    "height": 152,
                    "color_name": "Brown"
                },
                "id": 443540,
                "pages": 640
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "berlin-alexanderplatz-the-story-of-franz-biberkopf",
                "title": "Berlin Alexanderplatz: The Story of Franz Biberkopf",
                "cached_contributors": "Alfred Döblin",
                "cached_image": {
                    "id": 610672,
                    "url": "https://assets.hardcover.app/edition/4013052/577140-L.jpg",
                    "color": "#807774",
                    "width": 312,
                    "height": 475,
                    "color_name": "Gray"
                },
                "id": 444573,
                "pages": 635
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-02-06",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-houseguest-and-other-stories",
                "title": "The Houseguest and Other Stories",
                "cached_contributors": "Amparo Dávila",
                "cached_image": {
                    "id": 487303,
                    "url": "https://assets.hardcover.app/edition/15799415/12645178-L.jpg",
                    "color": "#116616",
                    "width": 324,
                    "height": 500,
                    "color_name": "Green"
                },
                "id": 444924,
                "pages": 144
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "when-we-cease-to-understand-the-world",
                "title": "When We Cease to Understand the World",
                "cached_contributors": "Benjamín Labatut",
                "cached_image": {
                    "id": 1940280,
                    "url": "https://assets.hardcover.app/external_data/59508430/ada95f71e07752b30ae3ffc5c41025355ae56d90.jpeg",
                    "color": "#e0d9c1",
                    "width": 128,
                    "height": 196,
                    "color_name": "Beige"
                },
                "id": 445032,
                "pages": 192
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-07-01",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "intimacies",
                "title": "Intimacies",
                "cached_contributors": "Katie Kitamura",
                "cached_image": {
                    "id": 973418,
                    "url": "https://assets.hardcover.app/external_data/25819693/20539ac2bea1829cc57a0895a791c3bd39f60291.jpeg",
                    "color": "#b30556",
                    "width": 333,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 445227,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-07-17",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "burnt-sugar",
                "title": "Burnt Sugar",
                "cached_contributors": "Avni Doshi",
                "cached_image": {
                    "id": 487450,
                    "url": "https://assets.hardcover.app/edition/11190615/10693498-L.jpg",
                    "color": "#9678ac",
                    "width": 333,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 445539,
                "pages": 264
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-05-02",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "inherent-vice",
                "title": "Inherent Vice",
                "cached_contributors": "Thomas Pynchon",
                "cached_image": {
                    "id": 6203830,
                    "url": "https://assets.hardcover.app/edition/30504635/ebfb7944805a70b6787ee9c36c6f093512719c41.jpeg",
                    "color": "#19480a",
                    "width": 322,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 447217,
                "pages": 387
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-12-29",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-devotion-of-suspect-x",
                "title": "The Devotion of Suspect X",
                "cached_contributors": "Keigo Higashino",
                "cached_image": {
                    "id": 4206529,
                    "url": "https://assets.hardcover.app/editions/14607280/4725071390161129.jpg",
                    "color": "#5d8798",
                    "width": 313,
                    "height": 475,
                    "color_name": "Purple"
                },
                "id": 447293,
                "pages": 304
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "you-too-can-have-a-body-like-mine",
                "title": "You Too Can Have a Body Like Mine",
                "cached_contributors": "Alexandra Kleeman",
                "cached_image": {
                    "id": 1155146,
                    "url": "https://assets.hardcover.app/book_mappings/7332588/8dc86480e71ba4bd56257918a895e3042f85ad7d.jpeg",
                    "color": "#b21f08",
                    "width": 330,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 448001,
                "pages": 304
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-wall",
                "title": "The Wall",
                "cached_contributors": "John Lanchester",
                "cached_image": {
                    "id": 2306380,
                    "url": "https://assets.hardcover.app/external_data/24941799/f093c3b4a82ec2a581c11f2f20d831b6f0335d60.jpeg",
                    "color": "#f0f5f5",
                    "width": 329,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 449067,
                "pages": 254
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "water-shall-refuse-them",
                "title": "Water Shall Refuse Them",
                "cached_contributors": "Lucie McKnight Hardy",
                "cached_image": {
                    "id": 616463,
                    "url": "https://assets.hardcover.app/edition/28812973/10857678-L.jpg",
                    "color": "#beb7a1",
                    "width": 328,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 450519,
                "pages": 257
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-01-06",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-discomfort-of-evening-2018",
                "title": "The Discomfort of Evening",
                "cached_contributors": "Marieke Lucas Rijneveld",
                "cached_image": {
                    "id": 1856466,
                    "url": "https://assets.hardcover.app/external_data/59407666/3324817bb9a0755eca2ac11c51588948d70cf0cc.jpeg",
                    "color": "#725d53",
                    "width": 200,
                    "height": 266,
                    "color_name": "Gray"
                },
                "id": 451335,
                "pages": 282
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-10-14",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "latitudes-of-longing",
                "title": "Latitudes of Longing",
                "cached_contributors": "Shubhangi Swarup",
                "cached_image": {
                    "id": 877362,
                    "url": "https://assets.hardcover.app/external_data/38929443/9645ceba7c74533826fd681b933e9879f3542810.jpeg",
                    "color": "#6c2110",
                    "width": 333,
                    "height": 499,
                    "color_name": "Brown"
                },
                "id": 451355,
                "pages": 320
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-swallowed-man",
                "title": "The Swallowed Man",
                "cached_contributors": "Edward Carey",
                "cached_image": {
                    "id": 617131,
                    "url": "https://assets.hardcover.app/edition/21840467/10125314-L.jpg",
                    "color": "#3a7c6d",
                    "width": 313,
                    "height": 500,
                    "color_name": "Green"
                },
                "id": 451365,
                "pages": 176
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-12-14",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-history-of-bees",
                "title": "The History of Bees",
                "cached_contributors": "Maja Lunde",
                "cached_image": {
                    "id": 5086871,
                    "url": "https://assets.hardcover.app/edition/11301941/e352d0c607cf3ebee181a4c67f5408ef26928a5a.jpeg",
                    "color": "#234e49",
                    "width": 331,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 452095,
                "pages": 352
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-09-25",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-perfect-nine",
                "title": "The Perfect Nine",
                "cached_contributors": "Ngũgĩ wa Thiong'o",
                "cached_image": {
                    "id": 617853,
                    "url": "https://assets.hardcover.app/edition/18644611/10472708-L.jpg",
                    "color": "#793c0a",
                    "width": 312,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 452697,
                "pages": 231
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-11-18",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "will-and-testament",
                "title": "Will and Testament",
                "cached_contributors": "Vigdis Hjorth",
                "cached_image": {
                    "id": 3639805,
                    "url": "https://assets.hardcover.app/external_data/61333327/4c4b3013327b100788e4d47b142a016ad7c1209b.jpeg",
                    "color": "#69838a",
                    "width": 128,
                    "height": 196,
                    "color_name": "Purple"
                },
                "id": 453172,
                "pages": 337
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-08-02",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "little-weirds",
                "title": "Little Weirds",
                "cached_contributors": "Jenny Slate",
                "cached_image": {
                    "id": 2437815,
                    "url": "https://assets.hardcover.app/external_data/59409971/6ea3706d39d976e0fc8b0f12a08f0efc6a7d365b.jpeg",
                    "color": "#eee1ce",
                    "width": 98,
                    "height": 147,
                    "color_name": "Beige"
                },
                "id": 453658,
                "pages": 304
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "transparent-city",
                "title": "Transparent City",
                "cached_contributors": "Ondjaki",
                "cached_image": {},
                "id": 453879,
                "pages": 320
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-11-13",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "sea-of-tranquility",
                "title": "Sea of Tranquility",
                "cached_contributors": "Emily St. John Mandel",
                "cached_image": {
                    "id": 6762613,
                    "url": "https://assets.hardcover.app/edition/30448568/a60b345e-e484-44a3-a66e-444dd7f949c7.jpg",
                    "color": "#5a7e8c",
                    "width": 1556,
                    "height": 2400,
                    "color_name": "Purple"
                },
                "id": 454688,
                "pages": 272
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-01-18",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-fortune-men",
                "title": "The Fortune Men",
                "cached_contributors": "Nadifa Mohamed",
                "cached_image": {
                    "id": 734932,
                    "url": "https://assets.hardcover.app/edition/30409507/11964814-L.jpg",
                    "color": "#006266",
                    "width": 310,
                    "height": 500,
                    "color_name": "Blue"
                },
                "id": 455009,
                "pages": 352
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-03-08",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-candy-house",
                "title": "The Candy House",
                "cached_contributors": "Jennifer Egan",
                "cached_image": {
                    "id": 5627700,
                    "url": "https://assets.hardcover.app/edition/30409572/766ee5ae44e69243b1488ae177b751aa246aa0f7.jpeg",
                    "color": "#886266",
                    "width": 329,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 455073,
                "pages": 352
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-07-01",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "feral",
                "title": "Feral",
                "cached_contributors": "George Monbiot",
                "cached_image": {
                    "id": 632454,
                    "url": "https://assets.hardcover.app/edition/30477302/content.jpeg",
                    "color": "#d9d9d9",
                    "width": 128,
                    "height": 192,
                    "color_name": "Silver"
                },
                "id": 456808,
                "pages": 319
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-language-of-cities",
                "title": "The Language of Cities",
                "cached_contributors": "Deyan Sudjic",
                "cached_image": {
                    "id": 1612992,
                    "url": "https://assets.hardcover.app/external_data/59752690/9cff21a667e8d8a898ed0a62c6c3f1a39bf01ed3.jpeg",
                    "color": "#464748",
                    "width": 98,
                    "height": 151,
                    "color_name": "Purple"
                },
                "id": 461685,
                "pages": 240
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-05-08",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-first-bad-man",
                "title": "The First Bad Man",
                "cached_contributors": "Miranda July",
                "cached_image": {
                    "id": 4896754,
                    "url": "https://assets.hardcover.app/external_data/273597/9bc662c4f373dde5019d0b8266a74ec6d07845af.jpeg",
                    "color": "#d9d9d9",
                    "width": 325,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 464065,
                "pages": 288
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-12-01",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-book-you-wish-your-parents-had-read",
                "title": "The Book You Wish Your Parents Had Read",
                "cached_contributors": "Philippa Perry",
                "cached_image": {
                    "id": 4206492,
                    "url": "https://assets.hardcover.app/edition/30382592/ad06fd89f958d70ee3b3d65201803772c47adab4.jpeg",
                    "color": "#d32608",
                    "width": 324,
                    "height": 500,
                    "color_name": "Red"
                },
                "id": 464919,
                "pages": 256
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-07-31",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-golden-notebook",
                "title": "The Golden Notebook",
                "cached_contributors": "Doris Lessing",
                "cached_image": {
                    "id": 4661896,
                    "url": "https://assets.hardcover.app/edition/30385600/f3b471631a2cb3347255b35718b55b8a6ba092b9.jpeg",
                    "color": "#f0eae5",
                    "width": 328,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 467764,
                "pages": 676
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-amazing-adventures-of-kavalier-clay",
                "title": "The Amazing Adventures of Kavalier & Clay",
                "cached_contributors": "Michael Chabon",
                "cached_image": {
                    "id": 4525858,
                    "url": "https://assets.hardcover.app/edition/30385746/96cdd59ef83ad016f0a468bf76f0049bc36ec5da.jpeg",
                    "color": "#b30406",
                    "width": 333,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 467910,
                "pages": 706
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-05-31",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "infinite-detail",
                "title": "Infinite Detail",
                "cached_contributors": "Tim Maughan",
                "cached_image": {
                    "id": 654014,
                    "url": "https://assets.hardcover.app/edition/30385965/content.jpeg",
                    "color": "#f9f9fa",
                    "width": 128,
                    "height": 192,
                    "color_name": "Pink"
                },
                "id": 468130,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-10-10",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-wind-up-bird-chronicle",
                "title": "The Wind-Up Bird Chronicle",
                "cached_contributors": "Haruki Murakami",
                "cached_image": {
                    "id": 4799819,
                    "url": "https://assets.hardcover.app/editions/30387653/7f3a72c2-328a-494c-bfea-0c884f8fcf47.jpg",
                    "color": "#698fba",
                    "width": 372,
                    "height": 558,
                    "color_name": "Purple"
                },
                "id": 469816,
                "pages": 607
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-05-11",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "shape-up-stop-running-in-circles-and-ship-work-that-matters",
                "title": "Shape Up: Stop Running in Circles and Ship Work that Matters",
                "cached_contributors": "Ryan Singer",
                "cached_image": {
                    "id": 1258724,
                    "url": "https://assets.hardcover.app/editions/30391295/8262366400839920-book-shape-up.jpg",
                    "color": "#514f50",
                    "width": 1013,
                    "height": 1580,
                    "color_name": "Purple"
                },
                "id": 470464,
                "pages": 133
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-05-01",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "radical-technologies-the-design-of-everyday-life",
                "title": "Radical Technologies",
                "cached_contributors": "Adam  Greenfield",
                "cached_image": {
                    "id": 744671,
                    "url": "https://assets.hardcover.app/edition/30391616/518d55f36fbafdf6abb778115b398c24e02fbd8f.jpeg",
                    "color": "#fcfcfc",
                    "width": 227,
                    "height": 352,
                    "color_name": "White"
                },
                "id": 470758,
                "pages": 368
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-07-02",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "blockchain-revolution",
                "title": "Blockchain Revolution: How the Technology Behind Bitcoin Is Changing Money, Business, and the World",
                "cached_contributors": "Don Tapscott",
                "cached_image": {
                    "id": 731805,
                    "url": "https://assets.hardcover.app/edition/30391619/b249f1b0ba9ab70cc3544e4935becc3c13ea2830.jpeg",
                    "color": "#f1f3f2",
                    "width": 329,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 470761,
                "pages": 348
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-11-07",
                    "user_book": {
                        "rating": 2
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "99-bottles-of-oop",
                "title": "99 Bottles of OOP",
                "cached_contributors": "Sandi Metz",
                "cached_image": {
                    "id": 811749,
                    "url": "https://assets.hardcover.app/edition/30394686/31183020._SX98_.jpg",
                    "color": "#f20e07",
                    "width": 98,
                    "height": 127,
                    "color_name": "Red"
                },
                "id": 473644,
                "pages": 225
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-03-26",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-anomaly",
                "title": "The Anomaly",
                "cached_contributors": "Hervé Le Tellier",
                "cached_image": {
                    "id": 6849341,
                    "url": "https://assets.hardcover.app/edition/30394805/b1ad65007dd8ed99482cc748d959ec30c24afd88.jpeg",
                    "color": "#cbced8",
                    "width": 328,
                    "height": 500,
                    "color_name": "Pink"
                },
                "id": 473754,
                "pages": 401
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-12-14",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-amber-spyglass",
                "title": "The Amber Spyglass",
                "cached_contributors": "Philip Pullman",
                "cached_image": {
                    "id": 4310843,
                    "url": "https://assets.hardcover.app/edition/30370285/0b85cdf0ba6a66502011f8201cac4f9dc954a9e0.jpeg",
                    "color": "#712912",
                    "width": 304,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 477834,
                "pages": 465
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "all-the-light-we-cannot-see",
                "title": "All the Light We Cannot See",
                "cached_contributors": "Anthony Doerr",
                "cached_image": {
                    "id": 6801788,
                    "url": "https://assets.hardcover.app/edition/30418491/27a21721-9c43-46a4-a769-76e621ab0ed2.jpeg",
                    "color": "#4c778e",
                    "width": 1500,
                    "height": 2301,
                    "color_name": "Purple"
                },
                "id": 478556,
                "pages": 560
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "long-live-the-post-horn",
                "title": "Long Live the Post Horn!",
                "cached_contributors": "Vigdis Hjorth",
                "cached_image": {
                    "id": 1153796,
                    "url": "https://assets.hardcover.app/external_data/59500792/377c14c25f13c422fa02abd024e7511fb266182f.jpeg",
                    "color": "#7c8b8d",
                    "width": 98,
                    "height": 150,
                    "color_name": "Purple"
                },
                "id": 478683,
                "pages": 240
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-10-05",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "tomorrow-and-tomorrow-and-tomorrow",
                "title": "Tomorrow, and Tomorrow, and Tomorrow",
                "cached_contributors": "Gabrielle Zevin",
                "cached_image": {
                    "id": 2814088,
                    "url": "https://assets.hardcover.app/edition/30535150/2efdfd508a803c89913fd6e987f69048a17c89c6.jpeg",
                    "color": "#dfdcbc",
                    "width": 329,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 479910,
                "pages": 496
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-10-31",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "flowers-for-algernon",
                "title": "Flowers for Algernon",
                "cached_contributors": "Daniel Keyes",
                "cached_image": {
                    "id": 6147833,
                    "url": "https://assets.hardcover.app/edition/116801/3d46aa36-501a-4609-a744-1500713078f9.jpg",
                    "color": "#eaeef1",
                    "width": 300,
                    "height": 466,
                    "color_name": "Beige"
                },
                "id": 480139,
                "pages": 311
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-09-13",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "venomous-lumpsucker",
                "title": "Venomous Lumpsucker",
                "cached_contributors": "Ned Beauman",
                "cached_image": {
                    "id": 5165216,
                    "url": "https://assets.hardcover.app/edition/30420237/97a3d6c3a3624db15f30e6e1077c8a7d9252434a.jpeg",
                    "color": "#f40029",
                    "width": 331,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 480263,
                "pages": 294
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-02-21",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "tales-from-the-cafe-2017",
                "title": "Tales from the Cafe",
                "cached_contributors": "Toshikazu Kawaguchi",
                "cached_image": {
                    "id": 5539490,
                    "url": "https://assets.hardcover.app/edition/30420605/a3086747726e85ad04e448b87c601d51cd48fbf4.jpeg",
                    "color": "#f7efe8",
                    "width": 330,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 480625,
                "pages": 224
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-03-31",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "when-i-sing-mountains-dance",
                "title": "When I Sing, Mountains Dance",
                "cached_contributors": "Irene Solà",
                "cached_image": {
                    "id": 4996310,
                    "url": "https://assets.hardcover.app/edition/30420651/d7587af87c52d23dd31bcc3b03ed9fee9b94e5d3.jpeg",
                    "color": "#b72215",
                    "width": 333,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 480670,
                "pages": 216
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-10-31",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-shortest-history-of-germany",
                "title": "The Shortest History of Germany",
                "cached_contributors": "James Hawes",
                "cached_image": {
                    "id": 748420,
                    "url": "https://assets.hardcover.app/edition/30421429/10451541-L.jpg",
                    "color": "#f9f4d0",
                    "width": 324,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 481442,
                "pages": 215
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-07-23",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-montessori-baby",
                "title": "The Montessori Baby",
                "cached_contributors": "Simone Davies",
                "cached_image": {
                    "id": 748778,
                    "url": "https://assets.hardcover.app/edition/30422557/54110546._SX98_.jpg",
                    "color": "#f0f1e8",
                    "width": 98,
                    "height": 137,
                    "color_name": "Beige"
                },
                "id": 482530,
                "pages": 283
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-03-24",
                    "user_book": {
                        "rating": null
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-man-who-spoke-snakish",
                "title": "The Man Who Spoke Snakish",
                "cached_contributors": "Andrus Kivirähk",
                "cached_image": {
                    "id": 6091707,
                    "url": "https://assets.hardcover.app/edition/30423226/e7720a1644d62406d345d5c332fa4cca2385cabb.jpeg",
                    "color": "#192a05",
                    "width": 333,
                    "height": 500,
                    "color_name": "Black"
                },
                "id": 482923,
                "pages": 442
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-08-22",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-ice-shirt",
                "title": "The Ice-Shirt",
                "cached_contributors": "William T. Vollmann",
                "cached_image": {
                    "id": 732334,
                    "url": "https://assets.hardcover.app/edition/30423840/a99627028ee5970e3478465942ac49dab088a195.jpeg",
                    "color": "#616247",
                    "width": 321,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 483450,
                "pages": 415
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "china-dream",
                "title": "China Dream",
                "cached_contributors": "Ma Jian",
                "cached_image": {
                    "id": 732411,
                    "url": "https://assets.hardcover.app/edition/30425443/8a8fee861d88873ffbe42cb85ba0fab440b54157.jpeg",
                    "color": "#c26106",
                    "width": 311,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 484769,
                "pages": 192
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "naive-super",
                "title": "Naïve. Super",
                "cached_contributors": "Erlend Loe",
                "cached_image": {
                    "id": 5734375,
                    "url": "https://assets.hardcover.app/edition/30434062/037a980f0905aa1283548a982dc2e302a891609a.jpeg",
                    "color": "#f9b074",
                    "width": 310,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 487282,
                "pages": 208
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-09-04",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-story-of-my-teeth",
                "title": "The Story of My Teeth",
                "cached_contributors": "Valeria Luiselli",
                "cached_image": {
                    "id": 1088672,
                    "url": "https://assets.hardcover.app/book_mappings/7334764/a61b8868ca0018382a465096affbb43950c96c0b.jpeg",
                    "color": "#c0ba9f",
                    "width": 333,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 487456,
                "pages": 192
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-dreamers",
                "title": "The Dreamers",
                "cached_contributors": "Karen Thompson Walker",
                "cached_image": {
                    "id": 884639,
                    "url": "https://assets.hardcover.app/external_data/59527726/ad505e41b99f26c7ca765f7e0c688de905b078ae.jpeg",
                    "color": "#94640d",
                    "width": 128,
                    "height": 197,
                    "color_name": "Brown"
                },
                "id": 487577,
                "pages": 336
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-02-19",
                    "user_book": {
                        "rating": 1
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "ordinary-wolves",
                "title": "Ordinary Wolves",
                "cached_contributors": "Seth Kantner",
                "cached_image": {
                    "id": 751003,
                    "url": "https://assets.hardcover.app/edition/30434703/819770-L.jpg",
                    "color": "#e4e7f6",
                    "width": 323,
                    "height": 500,
                    "color_name": "Pink"
                },
                "id": 487868,
                "pages": 342
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-12-02",
                    "user_book": {
                        "rating": 4.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "if-an-egyptian-cannot-speak-english",
                "title": "If an Egyptian Cannot Speak English",
                "cached_contributors": "Noor Naga",
                "cached_image": {
                    "id": 1823038,
                    "url": "https://assets.hardcover.app/external_data/59505935/43686d99386ba3511881fa473de2ce30d9c29683.jpeg",
                    "color": "#a27e15",
                    "width": 98,
                    "height": 147,
                    "color_name": "Brown"
                },
                "id": 488302,
                "pages": 186
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-01-28",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "become-an-effective-software-engineering-manager",
                "title": "Become an Effective Software Engineering Manager",
                "cached_contributors": "James Stanier",
                "cached_image": {
                    "id": 3635811,
                    "url": "https://assets.hardcover.app/edition/30439430/eacce19fe9ddfc269f38e34e7512d8aa127413d2.jpeg",
                    "color": "#e0edf4",
                    "width": 417,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 491808,
                "pages": 398
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-06-03",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "babel",
                "title": "Babel, or The Necessity of Violence: An Arcane History of the Oxford Translators' Revolution",
                "cached_contributors": "R.F. Kuang",
                "cached_image": {
                    "id": 885783,
                    "url": "https://assets.hardcover.app/book_mappings/7332611/bbb44be9ff044379e6934ceae26be2405e3efdd6.jpeg",
                    "color": "#35373b",
                    "width": 329,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 496492,
                "pages": 560
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "lapvona",
                "title": "Lapvona",
                "cached_contributors": "Ottessa Moshfegh",
                "cached_image": {
                    "id": 1462323,
                    "url": "https://assets.hardcover.app/external_data/60160119/9b991d267fa8842b713c200259bda10a8c89ad53.jpeg",
                    "color": "#6a5e4a",
                    "width": 128,
                    "height": 201,
                    "color_name": "Gray"
                },
                "id": 498093,
                "pages": 320
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-06-26",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "13-things-that-dont-make-sense-the-most-baffling-scientific-mysteries-of-our-time",
                "title": "13 Things That Don't Make Sense",
                "cached_contributors": "Michael  Brooks",
                "cached_image": {
                    "id": 753924,
                    "url": "https://assets.hardcover.app/edition/30455179/11077241-L.jpg",
                    "color": "#fdfcfc",
                    "width": 331,
                    "height": 500,
                    "color_name": "White"
                },
                "id": 504776,
                "pages": 256
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-last-day-2020",
                "title": "The Last Day",
                "cached_contributors": "Andrew Hunter Murray",
                "cached_image": {
                    "id": 649589,
                    "url": "https://assets.hardcover.app/edition/30458512/content.jpeg",
                    "color": "#012e5b",
                    "width": 128,
                    "height": 193,
                    "color_name": "Purple"
                },
                "id": 507276,
                "pages": 386
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-07-05",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-immortal-king-rao-2022",
                "title": "The Immortal King Rao",
                "cached_contributors": "Vauhini Vara",
                "cached_image": {
                    "id": 1953495,
                    "url": "https://assets.hardcover.app/external_data/59532325/c08944eb247720a830ed11edc93af753f19df859.jpeg",
                    "color": "#c8c7ba",
                    "width": 128,
                    "height": 194,
                    "color_name": "Beige"
                },
                "id": 507593,
                "pages": 384
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "civilisations",
                "title": "Civilisations",
                "cached_contributors": "Laurent Binet",
                "cached_image": {
                    "id": 1191507,
                    "url": "https://assets.hardcover.app/external_data/59762512/fb4126c197544495e11e0d7bcb458ffb73c3268d.jpeg",
                    "color": "#e2dfc4",
                    "width": 326,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 512115,
                "pages": 352
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "nightcrawling",
                "title": "Nightcrawling",
                "cached_contributors": "Leila Mottley",
                "cached_image": {
                    "id": 4884837,
                    "url": "https://assets.hardcover.app/edition/30466192/f9891fb8285e62e9795c17e9fda89e165ec1e42c.jpeg",
                    "color": "#e22104",
                    "width": 333,
                    "height": 500,
                    "color_name": "Red"
                },
                "id": 513769,
                "pages": 288
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-04-18",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "sight-2018",
                "title": "Sight",
                "cached_contributors": "Jessie Greengrass",
                "cached_image": {
                    "id": 757283,
                    "url": "https://assets.hardcover.app/edition/30467415/10719441-L.jpg",
                    "color": "#c0baab",
                    "width": 323,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 514880,
                "pages": 199
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-dry-heart",
                "title": "The Dry Heart",
                "cached_contributors": "Natalia Ginzburg",
                "cached_image": {
                    "id": 1006590,
                    "url": "https://assets.hardcover.app/external_data/59541549/bdd4a87fba5214a60c2a6e838e81ba942c09b209.jpeg",
                    "color": "#719a95",
                    "width": 98,
                    "height": 151,
                    "color_name": "Purple"
                },
                "id": 516272,
                "pages": 88
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-08-02",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "astral-season-beastly-season",
                "title": "Astral Season, Beastly Season",
                "cached_contributors": "Tahi Saihate",
                "cached_image": {
                    "id": 867722,
                    "url": "https://assets.hardcover.app/external_data/59543054/5587234ec2dd011171306253af1b28b67d9e655d.jpeg",
                    "color": "#eae8e4",
                    "width": 98,
                    "height": 150,
                    "color_name": "Beige"
                },
                "id": 518006,
                "pages": 126
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-03-28",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "travellers-in-the-third-reich",
                "title": "Travellers in the Third Reich",
                "cached_contributors": "Julia Boyd",
                "cached_image": {
                    "id": 3667660,
                    "url": "https://assets.hardcover.app/external_data/40151467/18107d3a944d39ad37d2c4e515b7be903c529d01.jpeg",
                    "color": "#98a381",
                    "width": 337,
                    "height": 500,
                    "color_name": "Gray"
                },
                "id": 518660,
                "pages": 464
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "two-serious-ladies",
                "title": "Two Serious Ladies",
                "cached_contributors": "Jane Bowles",
                "cached_image": {
                    "id": 4741928,
                    "url": "https://assets.hardcover.app/editions/31936973/966665798168485.jpg",
                    "color": "#d8d1c4",
                    "width": 1668,
                    "height": 2560,
                    "color_name": "Beige"
                },
                "id": 521656,
                "pages": 174
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-01-19",
                    "user_book": {
                        "rating": 2
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "inglorious-empire",
                "title": "Inglorious Empire",
                "cached_contributors": "Shashi Tharoor",
                "cached_image": {
                    "id": 733206,
                    "url": "https://assets.hardcover.app/edition/30477871/d284b1d56ac168fddc9a215bd6b0dd8832d428a3.jpeg",
                    "color": "#d8d0aa",
                    "width": 266,
                    "height": 400,
                    "color_name": "Beige"
                },
                "id": 524147,
                "pages": 288
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-lion-and-the-tiger",
                "title": "The Lion and the Tiger",
                "cached_contributors": "Denis Judd",
                "cached_image": {
                    "id": 633636,
                    "url": "https://assets.hardcover.app/edition/30479171/content.jpeg",
                    "color": "#d2d4da",
                    "width": 128,
                    "height": 188,
                    "color_name": "Pink"
                },
                "id": 525235,
                "pages": 234
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-island-of-missing-trees",
                "title": "The Island of Missing Trees",
                "cached_contributors": "Elif Shafak",
                "cached_image": {
                    "id": 6766401,
                    "url": "https://assets.hardcover.app/edition/30483867/c74b6971-cd38-459a-bcec-5c72d4fecc51.jpg",
                    "color": "#d85d00",
                    "width": 1524,
                    "height": 2339,
                    "color_name": "Orange"
                },
                "id": 529112,
                "pages": 320
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-03-30",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "ablutions",
                "title": "Ablutions",
                "cached_contributors": "Patrick deWitt",
                "cached_image": {
                    "id": 5594637,
                    "url": "https://assets.hardcover.app/edition/30531735/7338bd9aa99fb3fe8119f0a82c34c657cd4a123a.jpeg",
                    "color": "#c2c1c1",
                    "width": 333,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 569512,
                "pages": 224
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-03-22",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "future-histories",
                "title": "Future Histories",
                "cached_contributors": "Lizzie O'Shea",
                "cached_image": {
                    "id": 770386,
                    "url": "https://assets.hardcover.app/edition/30533762/45758397._SX98_.jpg",
                    "color": "#3b3731",
                    "width": 98,
                    "height": 148,
                    "color_name": "Brown"
                },
                "id": 571209,
                "pages": 336
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-01-20",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-noise-of-time-2016",
                "title": "The Noise of Time",
                "cached_contributors": "Julian Barnes",
                "cached_image": {
                    "id": 4007571,
                    "url": "https://assets.hardcover.app/edition/30552012/923a14e21bb54166e89a99c4a917088794743751.jpeg",
                    "color": "#dad9b8",
                    "width": 347,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 586030,
                "pages": 201
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-04-06",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "through-the-arc-of-the-rain-forest",
                "title": "Through the Arc of the Rain Forest",
                "cached_contributors": "Karen Tei Yamashita",
                "cached_image": {
                    "id": 5911315,
                    "url": "https://assets.hardcover.app/edition/32331783/f4f5930d1263ff2b5de21c5efe8718d0cf78de51.jpeg",
                    "color": "#fcfbfb",
                    "width": 375,
                    "height": 500,
                    "color_name": "White"
                },
                "id": 597060,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-02-12",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "cursed-bread",
                "title": "Cursed Bread",
                "cached_contributors": "Sophie Mackintosh",
                "cached_image": {
                    "id": 1108089,
                    "url": "https://assets.hardcover.app/external_data/59641724/ff47434d0a5a3e6a49430c007f0f1dc67a3930a4.jpeg",
                    "color": "#a98f66",
                    "width": 98,
                    "height": 147,
                    "color_name": "Gray"
                },
                "id": 603193,
                "pages": 157
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-09-09",
                    "user_book": {
                        "rating": 2.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-shortest-history-of-england",
                "title": "The Shortest History of England",
                "cached_contributors": "James Hawes",
                "cached_image": {
                    "id": 2626237,
                    "url": "https://assets.hardcover.app/external_data/60868924/5e096bc15ec1adb3b783886d15ff1184ce131029.jpeg",
                    "color": "#f9ecd3",
                    "width": 98,
                    "height": 152,
                    "color_name": "Beige"
                },
                "id": 615172,
                "pages": 270
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-08-06",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-ruin-of-all-witches",
                "title": "The Ruin of All Witches: Life and Death in the New World",
                "cached_contributors": "Malcolm Gaskill",
                "cached_image": {
                    "id": 875537,
                    "url": "https://assets.hardcover.app/external_data/59658567/5353e8b092547c15e87f4f04881e20292d6639d2.jpeg",
                    "color": "#e60429",
                    "width": 98,
                    "height": 150,
                    "color_name": "Purple"
                },
                "id": 616331,
                "pages": 336
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-11-22",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "days-in-the-caucasus",
                "title": "Days in the Caucasus",
                "cached_contributors": "Banine",
                "cached_image": {
                    "id": 787413,
                    "url": "https://assets.hardcover.app/edition/30634252/10863786-L.jpg",
                    "color": "#cc130c",
                    "width": 312,
                    "height": 500,
                    "color_name": "Red"
                },
                "id": 653235,
                "pages": 288
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "a-cruel-bird-came-to-the-nest-and-looked-in",
                "title": "A Cruel Bird Came to the Nest and Looked In",
                "cached_contributors": "Magnus Mills",
                "cached_image": {
                    "id": 787774,
                    "url": "https://assets.hardcover.app/edition/30636055/15943711._SX98_.jpg",
                    "color": "#ededd6",
                    "width": 98,
                    "height": 149,
                    "color_name": "Beige"
                },
                "id": 654638,
                "pages": 290
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-05-22",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-raptures",
                "title": "The Raptures",
                "cached_contributors": "Jan Carson",
                "cached_image": {
                    "id": 2179644,
                    "url": "https://assets.hardcover.app/external_data/59805211/5c6405f9d6a188faa9dd3c67bad6f75c5b6bf3f0.jpeg",
                    "color": "#eceae0",
                    "width": 128,
                    "height": 200,
                    "color_name": "Beige"
                },
                "id": 660621,
                "pages": 286
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-03-16",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "beautiful-star",
                "title": "Beautiful Star",
                "cached_contributors": "Yukio Mishima",
                "cached_image": {
                    "id": 792298,
                    "url": "https://assets.hardcover.app/edition/30652906/57951419._SX98_.jpg",
                    "color": "#717a6a",
                    "width": 98,
                    "height": 157,
                    "color_name": "Gray"
                },
                "id": 668111,
                "pages": 242
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-strange-death-of-europe-immigration-identity-islam",
                "title": "The Strange Death of Europe: Immigration, Identity, Islam",
                "cached_contributors": "Douglas Murray",
                "cached_image": {
                    "id": 6320794,
                    "url": "https://assets.hardcover.app/edition/30658046/fe414bce2ffc8c458b23d74789279566ca1937ff.jpeg",
                    "color": "#eaeae9",
                    "width": 329,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 672198,
                "pages": 353
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-03-06",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-maniac",
                "title": "The Maniac",
                "cached_contributors": "Benjamín Labatut",
                "cached_image": {
                    "id": 3819655,
                    "url": "https://assets.hardcover.app/external_data/61460765/7c95659db3cdcc393048d2ec3cc1549bc7b0c701.jpeg",
                    "color": "#cfc4a2",
                    "width": 331,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 677530,
                "pages": 298
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-12-29",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-new-dads-survival-guide-2014",
                "title": "The New Dad's Survival Guide",
                "cached_contributors": "Rob Kemp",
                "cached_image": {
                    "id": 827343,
                    "url": "https://assets.hardcover.app/edition/30685024/content.jpeg",
                    "color": "#f2f1ed",
                    "width": 128,
                    "height": 205,
                    "color_name": "Beige"
                },
                "id": 696332,
                "pages": 272
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-12-29",
                    "user_book": {
                        "rating": null
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "termush",
                "title": "Termush",
                "cached_contributors": "Sven Holm",
                "cached_image": {
                    "id": 3509065,
                    "url": "https://assets.hardcover.app/edition/30706632/902cb59943172691a8d1c5685c85ca8fd3b2ae0c.jpeg",
                    "color": "#d19567",
                    "width": 326,
                    "height": 500,
                    "color_name": "Gray"
                },
                "id": 714620,
                "pages": 119
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-06-16",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "how-to-be-right-in-a-world-gone-wrong-2018",
                "title": "How To Be Right in a World Gone Wrong",
                "cached_contributors": "James O'Brien",
                "cached_image": {
                    "id": 6482002,
                    "url": "https://assets.hardcover.app/edition/30732423/bd19fd958fc2b9178961d57b37d3f36bd8ba6728.jpeg",
                    "color": "#f2ede3",
                    "width": 319,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 736243,
                "pages": 232
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-09-09",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "miracle-on-cherry-hill",
                "title": "Miracle on Cherry Hill",
                "cached_contributors": "Sun-mi Hwang",
                "cached_image": {
                    "id": 4681974,
                    "url": "https://assets.hardcover.app/edition/30764674/9484fafae644891ea5e7265bf9c9324179da19bd.jpeg",
                    "color": "#f5f4e0",
                    "width": 319,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 764041,
                "pages": null
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "soldier-sailor",
                "title": "Soldier Sailor",
                "cached_contributors": "Claire Kilroy",
                "cached_image": {
                    "id": 3227753,
                    "url": "https://assets.hardcover.app/edition/30767885/813134bf6d8b6f4271d35c57327aa0f91ffe89a7.jpeg",
                    "color": "#6f1006",
                    "width": 310,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 766712,
                "pages": 214
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-01-25",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "orbital-2023",
                "title": "Orbital",
                "cached_contributors": "Samantha Harvey",
                "cached_image": {
                    "id": 3084326,
                    "url": "https://assets.hardcover.app/edition/30778685/6a4034584ba9f0e359119f7503f42ee66c270772.jpeg",
                    "color": "#7d190e",
                    "width": 340,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 775856,
                "pages": 207
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-12-08",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "norwegian-wood",
                "title": "Norwegian Wood",
                "cached_contributors": "Haruki Murakami",
                "cached_image": {
                    "id": 3730054,
                    "url": "https://assets.hardcover.app/edition/12721462/13f19c67b1f83ab4aadfcb3676a999e1f171754c.jpeg",
                    "color": "#d1a862",
                    "width": 304,
                    "height": 500,
                    "color_name": "Orange"
                },
                "id": 776952,
                "pages": 389
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-03-19",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "free-how-todays-smartest-businesses-profit-by-giving-something-for-nothing",
                "title": "Free: How Today's Smartest Businesses Profit by Giving Something for Nothing",
                "cached_contributors": "Chris Anderson",
                "cached_image": {},
                "id": 781938,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-09-19",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "liza-of-lambeth",
                "title": "Liza of Lambeth",
                "cached_contributors": "W. Somerset Maugham",
                "cached_image": {
                    "id": 5258270,
                    "url": "https://assets.hardcover.app/editions/30832053/8a4d019e-6c89-4c7c-b3e2-396069de45d0.jpg",
                    "color": "#61481c",
                    "width": 980,
                    "height": 1500,
                    "color_name": "Brown"
                },
                "id": 821082,
                "pages": 128
            },
            "user_book_reads": [
                {
                    "finished_at": "2026-03-07",
                    "user_book": {
                        "rating": 2.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "black-box-thinking-the-surprising-truth-about-success",
                "title": "Black Box Thinking: The Surprising Truth About Success",
                "cached_contributors": "Matthew Syed",
                "cached_image": {
                    "id": 4906179,
                    "url": "https://assets.hardcover.app/editions/30834225/a546eaeb-a276-4c38-bb37-f1b6e029e13e.jpg",
                    "color": "#e2e7ef",
                    "width": 181,
                    "height": 278,
                    "color_name": "Pink"
                },
                "id": 822926,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-09-16",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-theory-of-everything-else",
                "title": "The Theory of Everything Else: A Voyage into the World of the Weird",
                "cached_contributors": "Dan Schreiber",
                "cached_image": {
                    "id": 1182902,
                    "url": "https://assets.hardcover.app/external_data/59999125/e6c17077fefb9dd2dc7e6a005390c119d13e0a2b.jpeg",
                    "color": "#d0190b",
                    "width": 128,
                    "height": 197,
                    "color_name": "Red"
                },
                "id": 846191,
                "pages": 275
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-12-30",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "an-account-of-the-decline-of-the-great-auk-according-to-one-who-saw-it",
                "title": "An Account of the Decline of the Great Auk, According to One Who Saw It",
                "cached_contributors": "Jessie Greengrass",
                "cached_image": {},
                "id": 858482,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-05-31",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "2-a-m-in-little-america",
                "title": "2 A. M. in Little America",
                "cached_contributors": "Ken Kalfus",
                "cached_image": {
                    "id": 5132614,
                    "url": "https://assets.hardcover.app/edition/30875897/d0f57d6dbf5a0a9f50efad5429782e5e86dd322e.jpeg",
                    "color": "#77b292",
                    "width": 324,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 859684,
                "pages": 256
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-toaster-project-or-a-heroic-attempt-to-build-a-simple-electric-appliance-from-scratch",
                "title": "The Toaster Project: Or A Heroic Attempt to Build a Simple Electric Appliance from Scratch",
                "cached_contributors": "Thomas Thwaites",
                "cached_image": {
                    "id": 3804343,
                    "url": "https://assets.hardcover.app/external_data/61445984/b0a47142c3de205b1d8f354bb5e6665012d0c3a1.jpeg",
                    "color": "#6b6c72",
                    "width": 128,
                    "height": 192,
                    "color_name": "Purple"
                },
                "id": 860305,
                "pages": 192
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-02-22",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-little-shadows",
                "title": "The Little Shadows",
                "cached_contributors": "Marina Endicott",
                "cached_image": {
                    "id": 5469327,
                    "url": "https://assets.hardcover.app/editions/30883019/2f5d30ba-d999-40a9-a89a-bda8b411f741.jpg",
                    "color": "#e6cd93",
                    "width": 318,
                    "height": 470,
                    "color_name": "Silver"
                },
                "id": 866205,
                "pages": 544
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "senor-vivo-and-the-coca-lord",
                "title": "Señor Vivo and the Coca Lord",
                "cached_contributors": "Louis de Bernières",
                "cached_image": {},
                "id": 867202,
                "pages": null
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "doggerland",
                "title": "Doggerland",
                "cached_contributors": "Ben   Smith",
                "cached_image": {
                    "id": 1294885,
                    "url": "https://assets.hardcover.app/external_data/60062076/9b4012b0f8c6ee023c42cb01a3ccb25b2fa87154.jpeg",
                    "color": "#e8e1d3",
                    "width": 98,
                    "height": 150,
                    "color_name": "Beige"
                },
                "id": 911137,
                "pages": 248
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "cahokia-jazz",
                "title": "Cahokia Jazz",
                "cached_contributors": "Francis Spufford",
                "cached_image": {
                    "id": 1713628,
                    "url": "https://assets.hardcover.app/editions/31035455/4247708425198500.jpg",
                    "color": "#d7d2bc",
                    "width": 1400,
                    "height": 2113,
                    "color_name": "Beige"
                },
                "id": 1010828,
                "pages": 464
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-10-26",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "ways-of-being-animals-plants-machines-the-search-for-a-planetary-intelligence",
                "title": "Ways of Being: Animals, Plants, Machines: The Search for a Planetary Intelligence",
                "cached_contributors": "James Bridle",
                "cached_image": {
                    "id": 1504236,
                    "url": "https://assets.hardcover.app/editions/31043288/3785520817489632-9780141994260-jacket-large.jpg",
                    "color": "#dad8c9",
                    "width": 326,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 1018739,
                "pages": 413
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "close-to-the-knives",
                "title": "Close to the Knives: A Memoir of Disintegration",
                "cached_contributors": "David Wojnarowicz",
                "cached_image": {
                    "id": 6627201,
                    "url": "https://assets.hardcover.app/edition/31052760/271d1f57-3574-42be-9268-0243fc2adf8e.jpg",
                    "color": "#4b4b4b",
                    "width": 307,
                    "height": 475,
                    "color_name": "Gray"
                },
                "id": 1028303,
                "pages": 279
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-03-05",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "a-leopard-skin-hat",
                "title": "A Leopard-Skin Hat",
                "cached_contributors": "Anne Serre",
                "cached_image": {
                    "id": 4856130,
                    "url": "https://assets.hardcover.app/books/1043652/7f6494b9-2685-422f-894b-3123871120ef.jpg",
                    "color": "#ebe5e1",
                    "width": 283,
                    "height": 425,
                    "color_name": "Beige"
                },
                "id": 1043652,
                "pages": 112
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-01-09",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "butter-a-novel-of-food-and-murder",
                "title": "Butter: A Novel of Food and Murder",
                "cached_contributors": "Asako Yuzuki",
                "cached_image": {
                    "id": 5473807,
                    "url": "https://assets.hardcover.app/edition/31107949/04ab6f1e69dbf05db53eb8dd4fb958dfd02a3956.jpeg",
                    "color": "#fad200",
                    "width": 328,
                    "height": 500,
                    "color_name": "Gold"
                },
                "id": 1083913,
                "pages": 464
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-07-02",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "science-and-the-city-the-mechanics-behind-the-metropolis",
                "title": "Science and the City: The Mechanics Behind the Metropolis",
                "cached_contributors": "Laurie Winkless",
                "cached_image": {
                    "id": 1645220,
                    "url": "https://assets.hardcover.app/external_data/60281067/cc7763e91042e06aa6ca945f6bcaaeffe298d6aa.jpeg",
                    "color": "#f5f5f0",
                    "width": 98,
                    "height": 155,
                    "color_name": "Beige"
                },
                "id": 1110418,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-08-10",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-field-of-the-cloth-of-gold",
                "title": "The Field of the Cloth of Gold",
                "cached_contributors": "Magnus Mills",
                "cached_image": {
                    "id": 4802882,
                    "url": "https://assets.hardcover.app/external_data/156149/d687074bb1db8d25cafac8252d09f7e8d86527d1.jpeg",
                    "color": "#024f0a",
                    "width": 327,
                    "height": 500,
                    "color_name": "Green"
                },
                "id": 1144628,
                "pages": 225
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-06-10",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "river-east-river-west",
                "title": "River East, River West",
                "cached_contributors": "Aube Rey Lescure",
                "cached_image": {
                    "id": 1695865,
                    "url": "https://assets.hardcover.app/external_data/60327780/d6af9da9730eff72f9f4f881c4be0df2198e52fa.jpeg",
                    "color": "#a4abc8",
                    "width": 98,
                    "height": 145,
                    "color_name": "Pink"
                },
                "id": 1167071,
                "pages": 347
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-10-29",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "co-intelligence",
                "title": "Co-Intelligence",
                "cached_contributors": "Ethan Mollick",
                "cached_image": {
                    "id": 2810495,
                    "url": "https://assets.hardcover.app/edition/31441332/7e777e537ffef2feb4d07d9d8f17228ee6400f9f.jpeg",
                    "color": "#dbd5c1",
                    "width": 331,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 1176304,
                "pages": 256
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-06-18",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-twittering-machine",
                "title": "The Twittering Machine",
                "cached_contributors": "Richard Seymour",
                "cached_image": {
                    "id": 1726120,
                    "url": "https://assets.hardcover.app/external_data/60348754/0c2a6b1100c0373aaaaf2905e59f0dc89780e8ac.jpeg",
                    "color": "#9f978b",
                    "width": 200,
                    "height": 190,
                    "color_name": "Gray"
                },
                "id": 1187338,
                "pages": 250
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-09-10",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-city-and-its-uncertain-walls",
                "title": "The City and Its Uncertain Walls",
                "cached_contributors": "Haruki Murakami",
                "cached_image": {
                    "id": 3396366,
                    "url": "https://assets.hardcover.app/edition/31214891/dbd0e52c215b3e088f9e6c6e6bf4b493f101de48.jpeg",
                    "color": "#b9bac4",
                    "width": 328,
                    "height": 500,
                    "color_name": "Pink"
                },
                "id": 1190100,
                "pages": 448
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-12-31",
                    "user_book": {
                        "rating": 2.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "mystery-lights",
                "title": "Mystery Lights",
                "cached_contributors": "Lena Valencia",
                "cached_image": {
                    "id": 2751883,
                    "url": "https://assets.hardcover.app/external_data/60981634/a461327a3dd90cc482c6fddb6fea57ec45df5854.jpeg",
                    "color": "#6d614d",
                    "width": 98,
                    "height": 152,
                    "color_name": "Gray"
                },
                "id": 1199799,
                "pages": 256
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-03-13",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "all-fours",
                "title": "All Fours",
                "cached_contributors": "Miranda July",
                "cached_image": {
                    "id": 4226358,
                    "url": "https://assets.hardcover.app/edition/31242709/bf062459e46e10e5f67665740fc7a5dddc7e115a.jpeg",
                    "color": "#eae8d9",
                    "width": 331,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 1217638,
                "pages": 337
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-05-14",
                    "user_book": {
                        "rating": 3.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-novices-of-lerna",
                "title": "The Novices of Lerna",
                "cached_contributors": "Ángel Bonomini",
                "cached_image": {
                    "id": 6487167,
                    "url": "https://assets.hardcover.app/edition/31260173/f106ddf246e1cd2a6e997abc8820accd2d744a13.jpeg",
                    "color": "#e8daa6",
                    "width": 328,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 1235147,
                "pages": 41
            },
            "user_book_reads": [
                {
                    "finished_at": "2026-01-12",
                    "user_book": {
                        "rating": 3.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-pine-islands",
                "title": "The Pine Islands",
                "cached_contributors": "Marion Poschmann",
                "cached_image": {
                    "id": 1803183,
                    "url": "https://assets.hardcover.app/external_data/60419833/87804db0733f2b1ccee7042a5a6d1585ea25f84e.jpeg",
                    "color": "#c51709",
                    "width": 98,
                    "height": 151,
                    "color_name": "Red"
                },
                "id": 1278568,
                "pages": 180
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "blood-meridian",
                "title": "Blood Meridian: Or the Evening Redness in the West",
                "cached_contributors": "Cormac McCarthy",
                "cached_image": {
                    "id": 6748990,
                    "url": "https://assets.hardcover.app/edition/30459828/51615725-cb20-41dd-aa08-a82c4157f11b.jpg",
                    "color": "#731505",
                    "width": 1556,
                    "height": 2400,
                    "color_name": "Brown"
                },
                "id": 1363747,
                "pages": 365
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "stakeholder-capitalism-a-global-economy-that-works-for-progress-people-and-planet",
                "title": "Stakeholder Capitalism: A Global Economy that Works for Progress, People and Planet",
                "cached_contributors": "Klaus Schwab",
                "cached_image": {},
                "id": 1395089,
                "pages": 291
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "our-spoons-came-from-woolworths-83f17319-038f-4c08-85b4-df35b64c4995",
                "title": "Our Spoons Came From Woolworths",
                "cached_contributors": "Barbara Comyns",
                "cached_image": {
                    "id": 4118959,
                    "url": "https://assets.hardcover.app/edition/31436890/8f08643af5ae88d514eeee49d4b1ef8ad9b8f5b3.jpeg",
                    "color": "#eea868",
                    "width": 325,
                    "height": 500,
                    "color_name": "Orange"
                },
                "id": 1405679,
                "pages": 208
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-11-26",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "short-stories-in-french-new-penguin-parallel-text",
                "title": "Short Stories in French: New Penguin Parallel Text",
                "cached_contributors": "Richard Coward",
                "cached_image": {
                    "id": 3706894,
                    "url": "https://assets.hardcover.app/edition/31532339/5a2a2b7e2922ffb9ffb209b180292753459efc5e.jpeg",
                    "color": "#e20000",
                    "width": 328,
                    "height": 500,
                    "color_name": "Red"
                },
                "id": 1483549,
                "pages": 214
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-underground-railroad",
                "title": "The Underground Railroad",
                "cached_contributors": "Colson Whitehead",
                "cached_image": {
                    "id": 3723199,
                    "url": "https://assets.hardcover.app/edition/29620225/f008ccbc2d8fe0ea58cd84bbbcf294a46f869876.jpeg",
                    "color": "#d01108",
                    "width": 330,
                    "height": 500,
                    "color_name": "Red"
                },
                "id": 1487609,
                "pages": 306
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-02-05",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "why-machines-learn",
                "title": "Why Machines Learn: The Elegant Math Behind Modern AI",
                "cached_contributors": "Anil Ananthaswamy",
                "cached_image": {
                    "id": 4078502,
                    "url": "https://assets.hardcover.app/edition/31673034/e3284d93a5d0ff99dd78fd87bb3b95bdfea51062.jpeg",
                    "color": "#671107",
                    "width": 331,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 1497114,
                "pages": 378
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "dandy-in-the-underworld-an-unauthorized-autobiography",
                "title": "Dandy in the Underworld: An Unauthorized Autobiography",
                "cached_contributors": "Sebastian Horsley",
                "cached_image": {
                    "id": 3809054,
                    "url": "https://assets.hardcover.app/edition/31567177/e4df57257b59ffab4b3bd7cac074e717e7eddd77.jpeg",
                    "color": "#c60304",
                    "width": 328,
                    "height": 500,
                    "color_name": "Purple"
                },
                "id": 1512974,
                "pages": 356
            },
            "user_book_reads": [
                {
                    "finished_at": "2021-10-11",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-specters-of-algeria",
                "title": "The Specters of Algeria",
                "cached_contributors": "Hwang Yeo Jung",
                "cached_image": {
                    "id": 3845914,
                    "url": "https://assets.hardcover.app/edition/31581045/cc3f442da1245585bd0a69faf986f0f2156d3f46.jpeg",
                    "color": "#bf0604",
                    "width": 326,
                    "height": 500,
                    "color_name": "Red"
                },
                "id": 1525078,
                "pages": 168
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-12-18",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-city-of-today-is-a-dying-thing",
                "title": "The City of Today is a Dying Thing",
                "cached_contributors": "Des Fitzgerald",
                "cached_image": {
                    "id": 4127267,
                    "url": "https://assets.hardcover.app/edition/31691177/7f1f310ff1fe0cecc12a9fca0063f31868328414.jpeg",
                    "color": "#e9e9e8",
                    "width": 311,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 1615300,
                "pages": null
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-responsible-globalist",
                "title": "The Responsible Globalist: What Citizens of the World Can Learn from Nationalism",
                "cached_contributors": "Hassan Damluji",
                "cached_image": {
                    "id": 4539298,
                    "url": "https://assets.hardcover.app/edition/31855021/f39c4ca1590f6876dfc3250a3e607d352ab006af.jpeg",
                    "color": "#dcd5d3",
                    "width": 326,
                    "height": 500,
                    "color_name": "Silver"
                },
                "id": 1750922,
                "pages": 176
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "moby-dick",
                "title": "Moby Dick",
                "cached_contributors": "Herman Melville",
                "cached_image": {
                    "id": 6635610,
                    "url": "https://assets.hardcover.app/edition/32295172/c9f8766e-8705-4057-884b-8331ebe1bd3b.jpg",
                    "color": "#5b6e56",
                    "width": 940,
                    "height": 1500,
                    "color_name": "Brown"
                },
                "id": 1788666,
                "pages": 731
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "aerth",
                "title": "Aerth",
                "cached_contributors": "Deborah Tomkins",
                "cached_image": {
                    "id": 4772891,
                    "url": "https://assets.hardcover.app/edition/31947831/1a4247f4f273d931fffe7bb25012de587ad4f34a.jpeg",
                    "color": "#ab8c32",
                    "width": 326,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 1822827,
                "pages": 180
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-04-25",
                    "user_book": {
                        "rating": 4.5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "mastering-modular-javascript",
                "title": "Mastering Modular JavaScript",
                "cached_contributors": "Nicolas Bevacqua",
                "cached_image": {
                    "id": 4792888,
                    "url": "https://assets.hardcover.app/external_data/143163/25f5a5c59d413911baa9a0f1bc2095d61a0c7896.jpeg",
                    "color": "#f6fafa",
                    "width": 333,
                    "height": 500,
                    "color_name": "Beige"
                },
                "id": 1828575,
                "pages": 164
            },
            "user_book_reads": [
                {
                    "finished_at": "2019-12-09",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-digital-ape",
                "title": "The Digital Ape: How to Live (in Peace) with Smart Machines",
                "cached_contributors": "Nigel Shadbolt",
                "cached_image": {
                    "id": 4802869,
                    "url": "https://assets.hardcover.app/edition/31958903/dfbf1023a5da0680d89280f73a6f6175b50c61bb.jpeg",
                    "color": "#18789a",
                    "width": 329,
                    "height": 500,
                    "color_name": "Blue"
                },
                "id": 1831761,
                "pages": 352
            },
            "user_book_reads": [
                {
                    "finished_at": "2024-11-28",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-walrus-mutterer",
                "title": "The Walrus Mutterer",
                "cached_contributors": "Mandy Haggith",
                "cached_image": {},
                "id": 1831762,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2022-04-15",
                    "user_book": {
                        "rating": 3
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-ai-does-not-hate-you-superintelligence-rationality-and-the-race-to-save-the-world",
                "title": "The AI Does Not Hate You: Superintelligence, Rationality and the Race to Save the World",
                "cached_contributors": "Tom  Chivers",
                "cached_image": {
                    "id": 4802847,
                    "url": "https://assets.hardcover.app/external_data/156113/d00fc6bc0a3ba226a0deb9e4040f68d6e7595ed9.jpeg",
                    "color": "#967990",
                    "width": 98,
                    "height": 98,
                    "color_name": "Purple"
                },
                "id": 1831763,
                "pages": null
            },
            "user_book_reads": [
                {
                    "finished_at": "2023-09-30",
                    "user_book": {
                        "rating": 4
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-french-revolution-and-what-went-wrong",
                "title": "The French Revolution and What Went Wrong",
                "cached_contributors": "Stephen Clarke",
                "cached_image": {
                    "id": 4802851,
                    "url": "https://assets.hardcover.app/external_data/156117/be79a76c16f5ad45d7be5278dd74f7017b4c6985.jpeg",
                    "color": "#eae8da",
                    "width": 128,
                    "height": 197,
                    "color_name": "Beige"
                },
                "id": 1831764,
                "pages": 680
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-human-planet-how-we-created-the-anthropocene-2018",
                "title": "The Human Planet: How We Created the Anthropocene",
                "cached_contributors": "Simon L. Lewis",
                "cached_image": {
                    "id": 5179433,
                    "url": "https://assets.hardcover.app/external_data/615657/691163b88008325963c16afaa3104f6d6a5c0214.jpeg",
                    "color": "#551f0d",
                    "width": 328,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 1831765,
                "pages": 466
            },
            "user_book_reads": [
                {
                    "finished_at": "2018-12-10",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "digital-ape",
                "title": "Digital Ape",
                "cached_contributors": "Nigel Shadbolt",
                "cached_image": {
                    "id": 4802881,
                    "url": "https://assets.hardcover.app/edition/31958912/eb9fa4fb757aadf396144b0f31d5dd42bb03a73e.jpeg",
                    "color": "#059e0b",
                    "width": 325,
                    "height": 500,
                    "color_name": "Green"
                },
                "id": 1831766,
                "pages": 352
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-people-of-providence",
                "title": "The People of Providence: A Housing Estate and Some of Its Inhabitants",
                "cached_contributors": "Tony Parker",
                "cached_image": {
                    "id": 4802877,
                    "url": "https://assets.hardcover.app/external_data/156139/902d7655f1f5a19e9f9c2d2596d4b0f2a00a132d.jpeg",
                    "color": "#ebea7b",
                    "width": 304,
                    "height": 475,
                    "color_name": "Beige"
                },
                "id": 1831767,
                "pages": 373
            },
            "user_book_reads": [
                {
                    "finished_at": "2020-11-21",
                    "user_book": {
                        "rating": 5
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "connectography-exp",
                "title": "Connectography Exp",
                "cached_contributors": "Parag Khanna",
                "cached_image": {
                    "id": 4802879,
                    "url": "https://assets.hardcover.app/external_data/156143/45ceb9a6b1398d9d09402fecdb139b9d3a5f15f6.jpeg",
                    "color": "#5e1c06",
                    "width": 332,
                    "height": 500,
                    "color_name": "Brown"
                },
                "id": 1831769,
                "pages": 496
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "strange-houses",
                "title": "Strange Houses",
                "cached_contributors": "Uketsu",
                "cached_image": {
                    "id": 5084213,
                    "url": "https://assets.hardcover.app/edition/32052367/27f738022df4fdb089ae78db1c51037af3f6b679.jpeg",
                    "color": "#f0e5e7",
                    "width": 324,
                    "height": 500,
                    "color_name": "Pink"
                },
                "id": 1905977,
                "pages": 203
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-07-20",
                    "user_book": {
                        "rating": 2
                    }
                }
            ]
        },
        {
            "book": {
                "slug": "the-shortest-history-of-ancient-rome",
                "title": "The Shortest History of Ancient Rome",
                "cached_contributors": "Ross King",
                "cached_image": {
                    "id": 6687474,
                    "url": "https://assets.hardcover.app/edition/32671798/58590f352eebf9c930474f9ad6b71da22f095acd.jpeg",
                    "color": "#eeeceb",
                    "width": 323,
                    "height": 500,
                    "color_name": "White"
                },
                "id": 1925809,
                "pages": 248
            },
            "user_book_reads": [
                {
                    "finished_at": "2025-08-25",
                    "user_book": {
                        "rating": 3.5
                    }
                }
            ]
        },

        {
            "book": {
                "slug": "the-old-man-and-the-sea",
                "title": "The Old Man and the Sea",
                "cached_contributors": "Ernest Hemingway",
                "cached_image": {
                    "id": 1725996,
                    "url": "https://assets.hardcover.app/editions/13362793/3198953812570853.jpg",
                    "color": "#0069a4",
                    "width": 756,
                    "height": 1096,
                    "color_name": "Blue"
                },
                "id": 2459793,
                "pages": 127
            },
            "user_book_reads": []
        },
        {
            "book": {
                "slug": "the-hobbit",
                "title": "The Hobbit, or There and Back Again",
                "cached_contributors": "J.R.R. Tolkien",
                "cached_image": {
                    "id": 6075752,
                    "url": "https://assets.hardcover.app/edition/17456445/d34448a9-bf3f-441d-93f2-1cd32dd3867c.jpg",
                    "color": "#c58f27",
                    "width": 1600,
                    "height": 2400,
                    "color_name": "Orange"
                },
                "id": 2459845,
                "pages": 297
            },
            "user_book_reads": []
        }
    ]
}