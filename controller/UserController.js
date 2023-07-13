import { db, ObjectId } from "../config/config.js";
const userCollection = db.collection("user");

const userAdd = async (req, res) => {
  const body = req.body;

  try {
    const data = await userCollection.insertOne(body);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const result = await userCollection.find().limit(10).toArray();
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
    const params = req.params.id;
    try {
      const result = await userCollection.findOne({_id: new ObjectId(params)});
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const updateUser = async (req, res) => {
  const params = req.params.id;
  const { name } = req.body;
  try {
    const result = await userCollection.updateOne(
      { _id: new ObjectId(params) },
      { $set: { name: name } }
    );
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req,res) => {
  const params = req.params.id;
  try {
    const result = await userCollection.deleteOne({
      _id: new ObjectId(params),
    });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { userAdd, getAllUser, updateUser, deleteUser , getUser};
