import { createSlice } from '@reduxjs/toolkit';

const initialBooks = [
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publication_year": 1960,
    "genre": [
      "Fiction",
      "Classic"
    ],
    "description": "A classic novel depicting racial injustice in the American South.",
    "cover_image": "https://fakeimg.pl/250x100/ff0000/"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "publication_year": 1949,
    "genre": [
      "Dystopian",
      "Science Fiction"
    ],
    "description": "A dystopian novel portraying a totalitarian society.",
    "cover_image": "https://fakeimg.pl/250x100/ff0000/"
  },
  {
    "id": 3,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "publication_year": 1813,
    "genre": [
      "Classic",
      "Romance"
    ],
    "description": "A classic novel exploring themes of love, marriage, and social norms.",
    "cover_image": "https://fakeimg.pl/250x100/ff0000/"
  },
  {
    "id": 4,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publication_year": 1925,
    "genre": [
      "Fiction",
      "Classic"
    ],
    "description": "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
    "cover_image": "https://fakeimg.pl/250x100/ff0000/"
  },
  {
    "id": 5,
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "publication_year": 1851,
    "genre": [
      "Fiction",
      "Adventure"
    ],
    "description": "The epic tale of Captain Ahab's obsession with the white whale.",
    "cover_image": "https://fakeimg.pl/250x100/ff0000/"
  },
  {
    "id": 6,
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "publication_year": 1954,
    "genre": [
      "Fantasy",
      "Adventure"
    ],
    "description": "An epic fantasy saga about the quest to destroy the One Ring.",
    "cover_image": "https://fakeimg.pl/250x100/ff0000/"
  },
  {
    "id": 7,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "publication_year": 1951,
    "genre": [
      "Fiction",
      "Coming-of-age"
    ],
    "description": "A classic coming-of-age novel following Holden Caulfield's journey.",
    "cover_image": "https://fakeimg.pl/250x100/ff0000/"
  },
  {
    "id": 8,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "publication_year": 1937,
    "genre": [
      "Fantasy",
      "Adventure"
    ],
    "description": "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
    "cover_image": "https://fakeimg.pl/250x100/ff0000/"
  },
  {
    "id": 9,
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel Garcia Marquez",
    "publication_year": 1967,
    "genre": [
      "Magical Realism",
      "Literary Fiction"
    ],
    "description": "A multi-generational saga of the Buendía family in the fictional town of Macondo.",
    "cover_image": "https://fakeimg.pl/250x100/ff0000/"
  },
  {
    "id": 10,
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "publication_year": 1869,
    "genre": [
      "Historical Fiction",
      "Epic"
    ],
    "description": "A monumental work depicting the events of Russian society during the Napoleonic era.",
    "cover_image": "https://fakeimg.pl/250x100/ff0000/"
  },
]

const initialCategories = Array.from(new Set(initialBooks.flatMap(book => book.genre)));

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    bookDetails: initialBooks,
    categories: initialCategories
  },
  reducers: {
    setbookDetail: (state, action) => {
      state.bookDetails = action.payload;
    },
    addbookDetail: (state, action) => {
      state.bookDetails.push(action.payload);
      // Update categories dynamically when a new book is added
      state.categories = Array.from(new Set([...state.categories, ...action.payload.genre]));
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setbookDetail, addbookDetail, setCategories } = booksSlice.actions;
export default booksSlice.reducer;