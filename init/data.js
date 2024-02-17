// This is folder is used to initialize the database

const sampleBooks = [
    {
        bid: 11021100,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "Set in the racially charged atmosphere of the American South during the 1930s, the novel explores themes of morality, justice, and compassion through the eyes of a young girl named Scout Finch.",
        image: {
            url: "https://m.media-amazon.com/images/I/41j-s9fHJcL.jpghttps://m.media-amazon.com/images/I/41j-s9fHJcL.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1960,
        category: "Classic"
    },    
    
    {
        bid: 11021101,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel depicting a totalitarian society where the government, led by the enigmatic figure Big Brother, exercises complete control over its citizens. A cautionary tale about the dangers of unchecked power.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg",
            filename: "file1image",
        },
        noc: 100,
        yop: 1949,
        category: "Dystopian"
    },
    
    {
        bid: 11021102,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A classic romance novel following the tumultuous relationship between the spirited Elizabeth Bennet and the proud Mr. Darcy. Austen skillfully explores themes of love, class, and societal expectations.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/330px-PrideAndPrejudiceTitlePage.jpg",
            filename: "file1image",
        },
        noc: 100,
        yop: 1813,
        category: "Classic"
    },

    {
        bid: 11021103,
        title: "One Hundred Years of Solitude",
        author: "Gabriel Garcia Marquez",
        description: "A multi-generational saga set in the fictional town of Macondo, blending magical realism with historical events. The Buendía family experiences love, war, and destiny in this iconic masterpiece.",
        image: {
            url: "https://m.media-amazon.com/images/I/71IWwBoDNsL._AC_UF1000,1000_QL80_.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1967,
        category: "Magical Realism"
    },

    {
        bid: 11021104,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        description: "In a dystopian future, Katniss Everdeen must participate in the annual Hunger Games, a televised fight to the death. Collins explores themes of survival, rebellion, and the consequences of power.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2008,
        category: "Dystopian"
    },

    {
        bid: 11021105,
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        description: "Rachel, an alcoholic commuter, becomes entangled in a missing person investigation. Hawkins weaves a psychological thriller exploring deception, memory, and the consequences of obsession.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/5/50/The_Girl_On_The_Train_%28US_cover_2015%29.png",
            filename: "file",
        },
        noc: 100,
        yop: 2015,
        category: "Mystery"
    },

    {
        bid: 11021106,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        description: "Harari provides a sweeping overview of human history, from the emergence of Homo sapiens to the present day. A thought-provoking exploration of culture, society, and our shared narrative.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/0/06/%E1%B8%B2itsur_toldot_ha-enoshut.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2014,
        category: "Non-Fiction"
    },

    {
        bid: 11021107,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        description: "Harvard symbologist Robert Langdon unravels a complex web of secrets, codes, and conspiracies. Brown's fast-paced thriller explores the intersection of art, religion, and history.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2003,
        category: "Mystery"
    },

    {
        bid: 11021108,
        title: "Brave New World",
        author: "Aldous Huxley",
        description: "Set in a dystopian future, Huxley's novel explores a world where technology, conditioning, and pleasure are prioritized over individuality. A thought-provoking critique of society.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1932,
        category: "Dystopian"
    },

    {
        bid: 11021109,
        title: "The Road Not Taken",
        author: "Robert Frost",
        description: "A collection of timeless poems by Robert Frost, capturing the beauty of nature and the complexities of human decisions. Frost's words resonate with contemplation, exploration, and the paths we choose in life.",
        image: {
            url: "https://m.media-amazon.com/images/I/A12cqDU59TL._AC_UF1000,1000_QL80_.jpg",
            filename: "file1image",
        },
        noc: 100,
        yop: 1916,
        category: "Poetry"
    },

    {
        bid: 11021110,
        title: "The Sun Also Rises",
        author: "Ernest Hemingway",
        description: "Set in post-World War I Europe, Hemingway's novel follows a group of expatriates as they navigate love, loss, and the search for meaning. A classic exploration of the 'Lost Generation.'",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/The_Sun_Also_Rises_%281st_ed._cover%29.jpg/330px-The_Sun_Also_Rises_%281st_ed._cover%29.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1926,
        category: "Modernist Literature"
    },

    {
        bid: 11021111,
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        description: "The first book in the 'A Song of Ice and Fire' series, introducing the epic world of Westeros with political intrigue, battles, and complex characters. Martin weaves a gripping tale of power and honor.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1996,
        category: "Fantasy"
    },

    {
        bid: 11021112,
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        description: "A profound exploration of the author's experiences in Nazi concentration camps and the philosophy of finding purpose and meaning in life. Frankl's work is a testament to human resilience.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/c/cf/Trotzdem_Ja_zum_Leben_sagen_%28Viktor_Frankl_novel%29_cover.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1946,
        category: "Psychology"
    },

    {
        bid: 11021113,
        title: "The Road",
        author: "Cormac McCarthy",
        description: "In a post-apocalyptic world, a father and his young son embark on a perilous journey through a desolate landscape. McCarthy's stark prose explores themes of survival, hope, and the human condition.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/The-road.jpg/330px-The-road.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2006,
        category: "Dystopian"
    },

    {
        bid: 11021114,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        description: "Kvothe, a gifted musician and magician, recounts his life story. Rothfuss weaves a rich and immersive fantasy world filled with music, magic, and the pursuit of knowledge.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2007,
        category: "Fantasy"
    },

    {
        bid: 11021115,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        description: "Investigative journalist Mikael Blomkvist and hacker Lisbeth Salander team up to solve a decades-old mystery. Larsson's gripping thriller delves into crime, corruption, and personal vendettas.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/b/bc/Thegirlwiththedragontattoo.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2005,
        category: "Mystery"
    },

    {
        bid: 11021116,
        title: "The Maze Runner",
        author: "James Dashner",
        description: "A group of young people wakes up in a mysterious maze with no memory of how they got there. Dashner's dystopian novel unfolds a gripping tale of survival, friendship, and secrets.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Maze_Runner_cover.png",
            filename: "file",
        },
        noc: 100,
        yop: 2009,
        category: "Young Adult"
    },

    {
        bid: 11021117,
        title: "The Fault in Our Stars",
        author: "John Green",
        description: "Hazel Grace Lancaster, a cancer patient, forms a deep connection with Augustus Waters. Green's emotionally resonant novel explores love, loss, and the impact of illness on young lives.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2012,
        category: "Young Adult"
    },

    {
        bid: 11021118,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        description: "A psychological thriller where a woman shoots her husband and then stops speaking. The mystery unfolds as a psychotherapist tries to uncover the truth behind her silence.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/d/df/The_Silent_Patient_early_2019_UK_edition.png",
            filename: "file",
        },
        noc: 100,
        yop: 2019,
        category: "Psychological Thriller"
    },

    {
        bid: 11021119,
        title: "The Night Circus",
        author: "Erin Morgenstern",
        description: "A magical tale of two illusionists, Celia and Marco, pitted against each other in a mysterious competition. Morgenstern weaves a fantastical narrative of love, rivalry, and enchantment.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/c/c5/TheNightCircus.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2011,
        category: "Fantasy"
    },

    {
        bid: 11021120,
        title: "The Giver",
        author: "Lois Lowry",
        description: "In a utopian society devoid of pain and emotion, young Jonas discovers the truth about the cost of such conformity. Lowry's novel explores the complexities of free will and individuality.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/7/7b/The_Giver_first_edition_1993.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1993,
        category: "Dystopian"
    },

    {
        bid: 11021121,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        description: "A self-help guide offering principles for personal and professional effectiveness. Covey's holistic approach emphasizes proactive habits, personal development, and achieving long-term success.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/a/a2/The_7_Habits_of_Highly_Effective_People.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1989,
        category: "Self-Help"
    },

    {
        bid: 11021122,
        title: "The Three-Body Problem",
        author: "Liu Cixin",
        description: "A science fiction novel that explores the consequences of humanity's contact with an extraterrestrial civilization. Liu's work combines hard science with philosophical questions about the universe.",
        image: {
            url: "https://m.media-amazon.com/images/I/919XM42JQlL._AC_UF1000,1000_QL80_.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2008,
        category: "Science Fiction"
    },

    {
        bid: 11021123,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        description: "Dostoevsky's masterpiece explores the complexities of faith, morality, and familial relationships through the turbulent lives of the Karamazov brothers. A profound examination of human nature.",
        image: {
            url: "https://cdn.kobo.com/book-images/1208ebc8-3b5d-40ef-ba2d-b5121520d7e2/1200/1200/False/the-brothers-karamazov-135.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1880,
        category: "Classic"
    },
    
    {
        bid: 11021124,
        title: "The Wind-Up Bird Chronicle",
        author: "Haruki Murakami",
        description: "A surreal journey through the life of Toru Okada, who embarks on a quest to find his missing wife. Murakami's novel blends reality and fantasy in an exploration of identity and love.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/9/9f/Wind-up_Bird_Chronicle.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1994,
        category: "Magical Realism"
    },

    {
        bid: 11021125,
        title: "The Pillars of the Earth",
        author: "Ken Follett",
        description: "Set in 12th-century England, Follett's historical epic follows the construction of a cathedral and the lives of those connected to it. A tale of love, ambition, and societal change.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/b/b3/PillarsOfTheEarth.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1989,
        category: "Historical Fiction"
    },

    {
        bid: 11021126,
        title: "The Fifth Season",
        author: "N.K. Jemisin",
        description: "The first book in the Broken Earth trilogy, Jemisin's fantasy novel explores a world plagued by seismic activity and a society of orogenes with the power to control the earth.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/0/01/The_Fifth_Season_%28novel%29.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2015,
        category: "Fantasy"
    },

    {
        bid: 11021127,
        title: "The Remains of the Day",
        author: "Kazuo Ishiguro",
        description: "Stevens, an English butler, reflects on his life and service to Lord Darlington. Ishiguro's novel delves into themes of duty, regret, and the passage of time.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/c/c7/KazuoIshiguro_TheRemainsOfTheDay.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1989,
        category: "Literary Fiction"
    },

    {
        bid: 11021128,
        title: "The Art of War",
        author: "Sun Tzu",
        description: "An ancient Chinese treatise on military strategy and tactics. Sun Tzu's insights into warfare have transcended time and are widely applied in leadership and business.",
        image: {
            url: "https://cdn.kobo.com/book-images/5f188679-eb93-4e67-b37c-9376477ed40c/1200/1200/False/the-art-of-war-74.jpg",
            filename: "file",
        },
        noc: 100,
        yop: -500, 
        category: "Philosophy"
    },

    {
        bid: 11021129,
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        description: "Edmond Dantès seeks revenge against those who wronged him in this classic tale of betrayal and redemption. Dumas' novel is a sweeping adventure of justice and forgiveness.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg/330px-Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1844,
        category: "Adventure"
    },

    {
        bid: 11021130,
        title: "The Joy Luck Club",
        author: "Amy Tan",
        description: "A novel that explores the lives of Chinese-American immigrant families in San Francisco. Tan's work delves into the generational and cultural gaps between mothers and daughters.",
        image: {
            url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1304978653i/7763.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1989,
        category: "Contemporary Fiction"
    },

    {
        bid: 11021131,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        description: "A spiritual guide that emphasizes living in the present moment to achieve a state of heightened awareness and peace. Tolle's teachings offer insights into mindfulness and consciousness.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/6/66/TPON_Cover_LG.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1997,
        category: "Spirituality"
    },

    {
        bid: 11021132,
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
        description: "Sherlock Holmes investigates the mysterious death of Sir Charles Baskerville in the eerie moors of Devonshire. Doyle's classic mystery novel is a masterpiece of detective fiction.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Cover_%28Hound_of_Baskervilles%2C_1902%29.jpg/330px-Cover_%28Hound_of_Baskervilles%2C_1902%29.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1902,
        category: "Mystery"
    },

    {
        bid: 11021133,
        title: "The Road to Wigan Pier",
        author: "George Orwell",
        description: "Orwell's exploration of the harsh living conditions of the working class in northern England during the 1930s. A social commentary on poverty, inequality, and societal structures.",
        image: {
            url: "https://cdn.kobo.com/book-images/50c5d2bc-a377-4413-90f3-4466d01eb5f4/353/569/90/False/the-road-to-wigan-pier-collins-classics.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1937,
        category: "Non-Fiction"
    },

    {
        bid: 11021134,
        title: "The Inferno",
        author: "Dante Alighieri",
        description: "The first part of Dante's epic poem, The Divine Comedy, where the author journeys through the nine circles of Hell. A classic work of Italian literature and allegorical storytelling.",
        image: {
            url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61oBvLiKCXL._AC_UF1000,1000_QL80_.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1320,
        category: "Epic Poetry"
    },

    {
        bid: 11021135,
        title: "The Martian Chronicles",
        author: "Ray Bradbury",
        description: "A collection of interconnected short stories depicting the colonization of Mars. Bradbury's work explores themes of human nature, colonization, and the consequences of exploration.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/4/45/The-Martian-Chronicles.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1950,
        category: "Science Fiction"
    },

    {
        bid: 11021136,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        description: "A classic children's novel that follows the transformative journey of Mary Lennox as she discovers a hidden, magical garden. Burnett's tale explores the power of nature and healing.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Houghton_AC85_B9345_911s_-_Secret_Garden%2C_1911_-_cover.jpg/330px-Houghton_AC85_B9345_911s_-_Secret_Garden%2C_1911_-_cover.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1911,
        category: "Children's Literature"
    },

    {
        bid: 11021137,
        title: "The Sound and the Fury",
        author: "William Faulkner",
        description: "A novel known for its complex narrative structure and exploration of the Compson family's decline. Faulkner's work delves into the themes of time, memory, and Southern identity.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_Sound_and_the_Fury_%281929_1st_ed_dust_jacket%29.jpg/330px-The_Sound_and_the_Fury_%281929_1st_ed_dust_jacket%29.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1929,
        category: "Modernist Literature"
    },

    {
        bid: 11021138,
        title: "The Road Less Traveled",
        author: "M. Scott Peck",
        description: "A self-help classic that explores the journey of personal and spiritual growth. Peck combines psychology and spirituality to provide insights into love, discipline, and life's complexities.",
        image: {
            url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1322673263i/347852.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1978,
        category: "Self-Help"
    },

    {
        bid: 11021139,
        title: "The Stranger",
        author: "Albert Camus",
        description: "Meursault, an emotionally detached French Algerian, experiences a series of events that lead to a senseless act. Camus' novel is an exploration of existentialism and the absurdity of life.",
        image: {
            url: "https://m.media-amazon.com/images/I/61O9O5OsETL._AC_UF1000,1000_QL80_.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1942,
        category: "Existentialism"
    },

    {
        bid: 11021140,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        description: "Wilde's classic novel explores the consequences of a man's Faustian bargain. Dorian Gray remains youthful while a portrait of him ages, capturing the moral decay hidden behind his external beauty.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lippincott_doriangray.jpg/330px-Lippincott_doriangray.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1890,
        category: "Classic"
    },

    {
        bid: 11021141,
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        description: "A science fiction novel set on the planet Gethen, exploring themes of gender and identity. Le Guin's work is a pioneering example of feminist speculative fiction.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/8/88/TheLeftHandOfDarkness1stEd.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1969,
        category: "Science Fiction"
    },

    {
        bid: 11021142,
        title: "The Scarlet Letter",
        author: "Nathaniel Hawthorne",
        description: "Set in 17th-century Puritan Massachusetts, the novel explores the consequences of adultery for Hester Prynne. Hawthorne's work delves into sin, guilt, and societal judgment.",
        image: {
            url: "https://m.media-amazon.com/images/I/61pLRWYTbXL._AC_UF1000,1000_QL80_.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1850,
        category: "Classic"
    },

    {
        bid: 11021143,
        title: "The God of Small Things",
        author: "Arundhati Roy",
        description: "Roy's debut novel is a multi-generational family saga set in post-colonial India. The narrative weaves together themes of forbidden love, social norms, and the impact of historical 110211",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/1/1e/Thegodofsmallthings.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1997,
        category: "Contemporary Fiction"
    },  

    {
        bid: 11021144,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Set in the Roaring Twenties, the novel explores the American Dream through the lens of Jay Gatsby's extravagant lifestyle. Fitzgerald's work is a critique of wealth, love, and social values.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/c/c2/TheGreatGatsby2013Poster.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1925,
        category: "Classic"
    },

    {
        bid: 11021145,
        title: "The Stand",
        author: "Stephen King",
        description: "In a post-apocalyptic world, survivors face a battle between good and evil. King's epic novel explores themes of survival, morality, and the consequences of a deadly pandemic.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/The_Stand_%281978%29_front_cover%2C_first_edition.png/330px-The_Stand_%281978%29_front_cover%2C_first_edition.png",
            filename: "file",
        },
        noc: 100,
        yop: 1978,
        category: "Horror"
    },

    {
        bid: 11021146,
        title: "The Wind in the Willows",
        author: "Kenneth Grahame",
        description: "A charming children's novel that follows the adventures of anthropomorphic animals, including Mole, Ratty, and Toad. Grahame's work is a timeless tale of friendship and camaraderie.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/The_Wind_in_the_Willows_cover.jpg/330px-The_Wind_in_the_Willows_cover.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1908,
        category: "Children's Literature"
    },

    {
        bid: 11021147,
        title: "The Alchemist",
        author: "Paulo Coelho",
        description: "Santiago, a shepherd, embarks on a journey to discover his personal legend. Coelho's allegorical novel explores destiny, dreams, and the pursuit of one's true purpose.",
        image: {
            url: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1988,
        category: "Philosophical Fiction"
    },

    {
        bid: 11021148,
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        description: "A satirical novel that blends fantasy, satire, and allegory. Bulgakov's work explores the Devil's visit to Moscow and the chaos that ensues. A masterpiece of Russian literature.",
        image: {
            url: "https://m.media-amazon.com/images/I/61z04S7MaeL._AC_UF1000,1000_QL80_.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1967,
        category: "Satirical Fiction"
    },

    {
        bid: 11021149,
        title: "The Poisonwood Bible",
        author: "Barbara Kingsolver",
        description: "Set in postcolonial Congo, the novel follows the Price family as they grapple with cultural clashes, guilt, and the consequences of missionary work. Kingsolver's work is a reflection on imperialism.",
        image: {
            url: "https://m.media-amazon.com/images/I/71G0+L-aZ7L._AC_UF1000,1000_QL80_.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1998,
        category: "Historical Fiction"
    },

    {
        bid: 11021150,
        title: "The Silence of the Girls",
        author: "Pat Barker",
        description: "A retelling of the Iliad from the perspective of Briseis, a captured queen. Barker's novel explores the silenced voices of women in Greek mythology and the impact of war.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/8/8d/The_Silence_of_the_Girls.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2018,
        category: "Mythological Fiction"
    },

    {
        bid: 11021151,
        title: "The Death of Ivan Ilyich",
        author: "Leo Tolstoy",
        description: "Tolstoy's novella examines the life and death of Ivan Ilyich Golovin, a high-ranking judge. A philosophical exploration of existential questions and the pursuit of a meaningful life.",
        image: {
            url: "https://m.media-amazon.com/images/I/71E4TIko5HL._AC_UF1000,1000_QL80_.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1886,
        category: "Philosophical Fiction"
    }, 

    {
        bid: 11021152,
        title: "The Book Thief",
        author: "Markus Zusak",
        description: "Set in Nazi Germany, the novel follows Liesel Meminger, a young girl who steals books and shares them with others. Zusak's poignant narrative explores the power of words in dark times.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2005,
        category: "Historical Fiction"
    },
    
    {
        bid: 11021153,
        title: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafón",
        description: "Set in post-World War II Barcelona, young Daniel discovers a mysterious book by an obscure author. Zafón's novel intertwines love, mystery, and the power of literature in a dark and enchanting tale.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/8/84/TheShadowOfTheWind.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2001,
        category: "Mystery"
    },

    {
        bid: 11021154,
        title: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot",
        description: "A non-fiction work exploring the life of Henrietta Lacks, whose cells were unknowingly used for scientific research. Skloot delves into ethics, medical advancements, and the impact on Lacks' family.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Immortal_Life_Henrietta_Lacks_%28cover%29.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2010,
        category: "Science"
    },

    {
        bid: 11021155,
        title: "The Goldfinch",
        author: "Donna Tartt",
        description: "After surviving a tragic event, Theo Decker clings to a painting that becomes both his burden and his salvation. Tartt's novel explores loss, art, and the complexities of the human experience.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/e/eb/The_goldfinch_by_donna_tart.png",
            filename: "file",
        },
        noc: 100,
        yop: 2013,
        category: "Literary Fiction"
    },

    {
        bid: 11021156,
        title: "Educated",
        author: "Tara Westover",
        description: "A memoir detailing Westover's journey from growing up in a strict and abusive household in rural Idaho to earning a PhD from Cambridge University. An inspiring tale of self-discovery and education.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/1/1f/Educated_%28Tara_Westover%29.png",
            filename: "file",
        },
        noc: 100,
        yop: 2018,
        category: "Memoir"
    },

    {
        bid: 11021157,
        title: "The Color Purple",
        author: "Alice Walker",
        description: "Celie, an African-American woman in the early 20th century, overcomes oppression and abuse to find her voice and identity. Walker's novel explores themes of race, gender, and resilience.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/6/60/ColorPurple.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1982,
        category: "Historical Fiction"
    },

    {
        bid: 11021158,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        description: "Amir, haunted by a childhood betrayal, seeks redemption in war-torn Afghanistan. Hosseini's powerful narrative weaves together themes of friendship, guilt, and the impact of historical events.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/6/62/Kite_runner.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2003,
        category: "Contemporary Fiction"
    },

    {
        bid: 11021159,
        title: "The Outsiders",
        author: "S.E. Hinton",
        description: "A poignant coming-of-age novel that explores the rivalry between two groups of teenagers, the Greasers and the Socs, in 1960s Oklahoma. Hinton delves into themes of identity, friendship, and social class.",
        image: {
            url: "https://m.media-amazon.com/images/I/71Bg39CmhoL._AC_UF1000,1000_QL80_.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1967,
        category: "Young Adult"
    },

    {
        bid: 11021160,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        description: "A comedic science fiction series that follows Arthur Dent's intergalactic adventures after Earth's destruction. Adams' work is known for its wit, satire, and philosophical humor.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/b/bd/H2G2_UK_front_cover.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1979,
        category: "Science Fiction"
    },

    {
        bid: 11021161,
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        description: "Set during the Great Depression, Steinbeck's novel follows the Joad family as they migrate to California in search of a better life. A powerful portrayal of social injustice and human endurance.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/The_Grapes_of_Wrath_%281939_1st_ed_cover%29.jpg/330px-The_Grapes_of_Wrath_%281939_1st_ed_cover%29.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1939,
        category: "Historical Fiction"
    },

    {
        bid: 11021162,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "Holden Caulfield, a disenchanted teenager, recounts his experiences in New York City. The novel delves into themes of teenage angst, alienation, and the search for authenticity in a phony world.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/330px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1951,
        category: "Coming of Age"
    },

    {
        bid: 11021163,
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        description: "An aging Cuban fisherman, Santiago, engages in an epic battle with a giant marlin. Hemingway's novella explores themes of resilience, solitude, and the nature of the human spirit.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1952,
        category: "Classic"
    },

    {
        bid: 11021164,
        title: "The Odyssey",
        author: "Homer",
        description: "An epic poem that follows Odysseus's journey home after the Trojan War. Homer's timeless work explores heroism, adventure, and the challenges of the human experience.",
        image: {
            url: "https://cdn.kobo.com/book-images/1c003baf-c48d-45be-9fd3-bc9c2bc6a685/1200/1200/False/the-odyssey-172.jpg",
            filename: "file",
        },
        noc: 100,
        yop: -800,
        category: "Epic Poetry"
    },

    {
        bid: 11021165,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "Bilbo Baggins, a hobbit, embarks on a grand adventure to reclaim treasure guarded by the dragon Smaug. Tolkien's classic fantasy novel introduces readers to the world of Middle-earth.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1937,
        category: "Fantasy"
    },

    {
        bid: 11021166,
        title: "The Shining",
        author: "Stephen King",
        description: "Jack Torrance, an aspiring writer, becomes the winter caretaker of the haunted Overlook Hotel. King's psychological horror novel explores the descent into madness and supernatural terror.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_Shining_%281977%29_front_cover%2C_first_edition.jpg/330px-The_Shining_%281977%29_front_cover%2C_first_edition.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 1977,
        category: "Horror"
    },

    {
        bid: 11021167,
        title: "The Martian",
        author: "Andy Weir",
        description: "A gripping tale of survival as astronaut Mark Watney is stranded on Mars. Weir's novel combines humor, science, and suspense in a realistic portrayal of space exploration.",
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/The_Martian_%28Weir_novel%29.jpg/330px-The_Martian_%28Weir_novel%29.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2011,
        category: "Science Fiction"
    },

    {
        bid: 11021168,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        description: "Set in a future where books are banned, firemen burn any that are found. Bradbury's novel is a warning about the dangers of censorship and the importance of preserving knowledge.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1953,
        category: "Science Fiction"
    },

    {
        bid: 11021169,
        title: "Lord of the Flies",
        author: "William Golding",
        description: "A group of boys stranded on a deserted island struggle for survival, leading to a descent into chaos and savagery. Golding's novel explores the dark aspects of human nature.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1954,
        category: "Psychological Fiction"
    },

    {
        bid: 11021170,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        description: "Raskolnikov, a young intellectual, commits a murder to prove his theories about morality. Dostoevsky's psychological novel delves into guilt, redemption, and the human psyche.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/4/4b/Crimeandpunishmentcover.png",
                filename: "file",
        },
        noc: 100,
        yop: 1866,
        category: "Classic"
    },

    {
        bid: 11021171,
        title: "The Road to Character",
        author: "David Brooks",
        description: "Brooks explores the concept of character and its development through the lives of individuals who exemplify moral virtues. A reflective and philosophical exploration of personal ethics.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/5/59/The_Road_to_Character-cover.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 2015,
        category: "Philosophy"
    },

    {
        bid: 11021172,
        title: "The Sound of Waves",
        author: "Yukio Mishima",
        description: "A love story set on a small Japanese island, where a young fisherman falls for a village girl. Mishima's novel explores tradition, societal expectations, and the power of nature.",
        image: {
                url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/7124N-ZNG9L._AC_UF1000,1000_QL80_.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1954,
        category: "Japanese Literature"
    },

    {
        bid: 11021173,
        title: "The Underground Railroad",
        author: "Colson Whitehead",
        description: "Cora, a slave on a Georgia plantation, escapes via a hidden network of underground tracks. Whitehead's novel is a powerful exploration of the brutality of slavery and the quest for freedom.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/8/80/The_Underground_Railroad_%28Whitehead_novel%29.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 2016,
        category: "Historical Fiction"
    },

    {
        bid: 11021174,
        title: "The Secret History",
        author: "Donna Tartt",
        description: "A group of elite students at an exclusive college becomes entangled in murder and deception. Tartt's novel explores the dark side of intellectual obsession and its consequences.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/a/a5/The_Secret_History%2C_front_cover.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1992,
        category: "Mystery"
    },

    {
        bid: 11021175,
        title: "The Nightingale",
        author: "Kristin Hannah",
        description: "Set in World War II, the novel follows two sisters in Nazi-occupied France who take different paths to resist the German occupation. Hannah's work explores courage, sacrifice, and sisterhood.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Nightingale_%282015_novel%29.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 2015,
        category: "Historical Fiction"
    },

    {
        bid: 11021176,
        title: "The Fountainhead",
        author: "Ayn Rand",
        description: "Howard Roark, an individualistic architect, faces societal and professional challenges as he strives to maintain his artistic integrity. Rand's novel is a philosophical exploration of individualism and objectivism.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/The_Fountain_Head_%281943_1st_ed%29_-_Ayn_Rand.jpg/330px-The_Fountain_Head_%281943_1st_ed%29_-_Ayn_Rand.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1943,
        category: "Philosophical Fiction"
    },

    {
        bid: 11021177,
        title: "The Three Musketeers",
        author: "Alexandre Dumas",
        description: "D'Artagnan, a young and ambitious swordsman, joins the Musketeers to protect the French king. Dumas' historical adventure novel is a tale of friendship, loyalty, and intrigue.",
        image: {
                url: "https://m.media-amazon.com/images/I/81-AtCehAGL._AC_UF1000,1000_QL80_.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1844,
        category: "Adventure"
    },

    {
        bid: 11021178,
        title: "The Glass Castle",
        author: "Jeannette Walls",
        description: "A memoir recounting Walls' unconventional and nomadic childhood. Walls reflects on her family's struggles with poverty, dysfunction, and the pursuit of personal aspirations.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/0/09/The_Glass_Castle_Jeannette_Walls_hardcover_first_edition_2005.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 2005,
        category: "Memoir"
    },

    {
        bid: 11021179,
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        description: "Anne Frank's poignant diary details her experiences hiding from the Nazis during World War II. The diary reflects Anne's hopes, fears, and the impact of the Holocaust on humanity.",
        image: {
                url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560816565l/48855.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1947,
        category: "Memoir"
    },    

    {
        bid: 11021180,
        title: "The Day of the Triffids",
        author: "John Wyndham",
        description: "After a meteor shower blinds most of humanity, deadly plants known as Triffids pose a threat to the survivors. Wyndham's science fiction novel explores the consequences of bioengineering gone wrong.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/6/62/JohnWyndham_TheDayOfTheTriffids.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1951,
        category: "Science Fiction"
    },

    {
        bid: 11021181,
        title: "The House of Mirth",
        author: "Edith Wharton",
        description: "Lily Bart navigates the social complexities of New York's high society in the early 20th century. Wharton's novel is a critique of wealth, ambition, and societal expectations.",
        image: {
                url: "https://cdn.kobo.com/book-images/9825ac94-d1ef-49c7-8c14-f13cd8a905fa/1200/1200/False/the-house-of-mirth-with-18-illustrations-and-a-free-audio-link.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1905,
        category: "Classic"
    },

    {
        bid: 11021182,
        title: "The Joy of Cooking",
        author: "Irma S. Rombauer",
        description: "A comprehensive cookbook that has been a staple in kitchens for generations. Rombauer's work provides a wide range of recipes, cooking tips, and culinary guidance.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/9/97/TheJoyOfCookingCover.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1931,
        category: "Cookbook"
    },

    {
        bid: 11021183,
        title: "The Metamorphosis",
        author: "Franz Kafka",
        description: "Gregor Samsa wakes up one day transformed into a giant insect. Kafka's novella explores themes of alienation, absurdity, and the human condition.",
        image: {
                url: "https://m.media-amazon.com/images/I/41GWXwbGuGL.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1915,
        category: "Existentialism"
    },

    {
        bid: 11021184,
        title: "The Gruffalo",
        author: "Julia Donaldson",
        description: "A beloved children's book that tells the story of a clever mouse's encounter with various predators, including the mythical Gruffalo. Donaldson's work is known for its rhymes and illustrations.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/3/34/Fairuse_Gruffalo.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1999,
        category: "Children's Literature"
    },

    {
        bid: 11021185,
        title: "The Green Mile",
        author: "Stephen King",
        description: "A serialized novel that tells the story of death row supervisor Paul Edgecombe and his encounter with a mysterious inmate with supernatural abilities. King's work explores themes of justice and compassion.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/f/f7/Greenmilepart1.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1996,
        category: "Horror"
    },

    {
        bid: 11021186,
        title: "The Help",
        author: "Kathryn Stockett",
        description: "Set in 1960s Mississippi, the novel explores the relationships between African-American maids and the white families they work for. Stockett's work is a poignant portrayal of racial injustice.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/e/ef/Thehelpbookcover.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 2009,
        category: "Historical Fiction"
    },

    {
        bid: 11021187,
        title: "The Hunchback of Notre-Dame",
        author: "Victor Hugo",
        description: "Set in medieval Paris, the novel follows the tragic fate of Quasimodo, a deformed bell-ringer. Hugo's work explores themes of love, justice, and societal injustice.",
        image: {
                url: "https://m.media-amazon.com/images/I/71kal085yFL._AC_UF1000,1000_QL80_.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1831,
        category: "Classic"
    },

    {
        bid: 11021188,
        title: "The Road to Serfdom",
        author: "Friedrich Hayek",
        description: "A classic work in political philosophy that warns against the dangers of collectivism and centralized planning. Hayek's book argues for the importance of individual liberty and free markets.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/The-Road-to-Serfdom-First-Edition1.jpg/330px-The-Road-to-Serfdom-First-Edition1.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1944,
        category: "Political Philosophy"
    },

    {
        bid: 11021189,
        title: "The Talented Mr. Ripley",
        author: "Patricia Highsmith",
        description: "Tom Ripley, a talented imposter, becomes entangled in a web of deception, crime, and murder. Highsmith's psychological thriller is a chilling exploration of obsession and amorality.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Talented_Mr._Ripley_Cover.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1955,
        category: "Thriller"
    },

    {
        bid: 11021190,
        title: "The Book of Lost Things",
        author: "John Connolly",
        description: "A dark fantasy novel that follows a young boy's journey into a fantastical realm where fairy tales come to life. Connolly's work explores themes of loss, courage, and the power of stories.",
        image: {
                url: "https://m.media-amazon.com/images/I/71ND7vuFmYL._AC_UF1000,1000_QL80_.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 2006,
        category: "Fantasy"
    },

    {
        bid: 11021191,
        title: "The Immigrant",
        author: "Manju Kapur",
        description: "Set in post-partition India, the novel follows a young woman's journey as she navigates love, family, and societal expectations. Kapur's work explores themes of identity and cultural change.",
        image: {
                url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81mIQCYOloL._AC_UF1000,1000_QL80_.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 2008,
        category: "Historical Fiction"
    },

    {
        bid: 11021192,
        title: "The Joy of Sex",
        author: "Alex Comfort",
        description: "A comprehensive guide to human sexuality, covering various aspects of intimacy, relationships, and sexual health. Comfort's book is known for its inclusive and educational approach.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Joy_of_Sex%2C_first_edition.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1972,
        category: "Sexuality"
    },

    {
        bid: 11021193,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        description: "A non-fiction book that explores the science of habit formation and its impact on individual and societal behavior. Duhigg's work delves into the psychology of habits and change.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/7/7f/The_Power_of_Habit.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 2012,
        category: "Psychology"
    },

    {
        bid: 11021194,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        description: "A self-help book that challenges conventional positivity, encouraging readers to embrace life's challenges. Manson's work explores values, resilience, and the pursuit of meaningful goals.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/b/bd/The_Subtle_Art_of_Not_Giving_a_F%2Ack_by_Mark_Manson_-_Book_Cover.png",
                filename: "file",
        },
        noc: 100,
        yop: 2016,
        category: "Self-Help"
    },

    {
        bid: 11021195,
        title: "The Secret Life of Bees",
        author: "Sue Monk Kidd",
        description: "Set in the 1960s, the novel follows a young girl's journey to uncover the truth about her mother. Kidd's work explores family, race, and the power of female relationships.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/1/1f/The_Secret_Life_of_Bees.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 2001,
        category: "Historical Fiction"
    },

    {
        bid: 11021196,
        title: "The Great Alone",
        author: "Kristin Hannah",
        description: "Set in the Alaskan wilderness, the novel follows the Allbright family as they face the challenges of isolation and survival. Hannah's work explores themes of love, resilience, and the impact of nature.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Great_Alone.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 2018,
        category: "Contemporary Fiction"
    },

    {
        bid: 11021197,
        title: "The Seven Habits of Highly Effective People",
        author: "Stephen R. Covey",
        description: "A self-help book that outlines principles for personal and professional effectiveness. Covey's work explores habits for success, leadership, and personal development.",
        image: {
                url: "https://upload.wikimedia.org/wikipedia/en/a/a2/The_7_Habits_of_Highly_Effective_People.jpg",
                filename: "file",
        },
        noc: 100,
        yop: 1989,
        category: "Self-Help"
    },

    {
        bid: 11021198,
        title: "The Enigmatic Echo",
        author: "Melissa A. Smith",
        description: "In a world ruled by echoes of forgotten magic, young sorcerer Alaric discovers an ancient prophecy. As he embarks on a perilous journey to save his realm, he unravels mysteries that challenge the very fabric of reality.",
        image: {
            url: "https://cdn5.vectorstock.com/i/1000x1000/10/04/a-book-vector-20321004.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2019,
        category: "Fantasy"
    },

    {
        bid: 11021199,
        title: "Whispers of the Cosmos",
        author: "Liam K. Turner",
        description: "A gripping space odyssey where Captain Elara and her diverse crew navigate cosmic anomalies. As they delve into the unknown, they encounter extraterrestrial civilizations and must unite to face a looming intergalactic threat.",
        image: {
            url: "https://cdn5.vectorstock.com/i/1000x1000/10/04/a-book-vector-20321004.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2021,
        category: "Science Fiction"
    },
    
    {
        bid: 11021200,
        title: "Echoes of Eternity",
        author: "Isabel M. Rodriguez",
        description: "In a quaint town haunted by spectral echoes, a young medium, Emma, must confront her own past to unravel the town's secrets. As she unlocks the mysteries, she discovers the interconnectedness of life and death.",
        image: {
            url: "https://cdn5.vectorstock.com/i/1000x1000/10/04/a-book-vector-20321004.jpg",
            filename: "file",
        },
        noc: 100,
        yop: 2020,
        category: "Mystery"
    },
    
]
module.exports = { data: sampleBooks };