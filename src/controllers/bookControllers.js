import { Book } from "../models/Book.js";

const get_all_books = async (req, res) => {
  const books = await Book.find();
  res.send(books);
};

const get_one_book = async (req, res) => {
  const book = await Book.findOne({ title: req.params.title });
  if (book) {
    res.send(book);
  } else {
    res.status(404).send("The requested book is not found!");
  }
};

const post_one_book = async (req, res) => {
  const book = {
    author: req.body.author,
    language: req.body.language,
    pages: req.body.pages,
    title: req.body.title,
    year: req.body.year,
    link: req.body.link,
    price: req.body.price,
  };
  try {
    const newBook = await Book.create(book);
    res.send(newBook);
  } catch (err) {
    console.log("err", err);
  }
};

const update_one_book = async (req, res) => {
  const book = await Book.findOne({ title: req.params.title });
  if (book) {
    const newBook = {
      author: req.body.author,
      language: req.body.language,
      pages: req.body.pages,
      title: req.body.title,
      year: req.body.year,
      link: req.body.link,
      price: req.body.price,
    };
    try {
      const updatedBook = await Book.updateOne({ title: req.params.title }, newBook);
      res.send(updatedBook);
    } catch (err) {
      console.log("err", err);
    }
  }
};

const delete_one_book = async (req, res) => {
  const book = await Book.findOne({ title: req.params.title });
  if (book) {
    console.log("dfsdgfhgfgf");
    try {
      await Book.deleteOne({ title: req.params.title });
      res.send(book);
    } catch (err) {
      console.log("err", err);
    }
  }
};

export { get_all_books, get_one_book, post_one_book, update_one_book, delete_one_book };
