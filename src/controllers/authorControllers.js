import { Author } from "../models/Author.js";

const get_all_authors = async (req, res) => {
  const authors = await Author.find();
  res.send(authors);
};

const get_one_author = async (req, res) => {
  const author = await Author.findOne({ name: req.params.name });
  if (author) {
    res.send(author);
  } else {
    res.status(404).send("The requested author is not found!");
  }
};

const post_one_author = async (req, res) => {
  const author = {
    name: req.body.name,
    birthDate: req.body.birthDate,
    books: req.body.books,
  };
  try {
    const newAuthor = await Author.create(author);
    res.send(newAuthor);
  } catch (err) {
    console.log("err", err);
  }
};

const update_one_author = async (req, res) => {
  const author = await Author.findOne({ name: req.params.name });
  if (author) {
    const newAuthor = {
      name: req.body.name,
      birthDate: req.body.birthDate,
      books: req.body.books,
    };
    try {
      const upatedAuthor = await Author.updateOne({ name: req.params.name }, newAuthor);

      res.send(upatedAuthor);
    } catch (err) {
      console.log("err", err);
    }
  }
};

const delete_one_author = async (req, res) => {
  const author = await Author.findOne({ name: req.params.name });
  if (author) {
    try {
      await Author.deleteOne({ name: req.params.name });
      res.send(author);
    } catch (err) {
      console.log("err", err);
    }
  }
};

export { get_all_authors, get_one_author, post_one_author, update_one_author, delete_one_author };
