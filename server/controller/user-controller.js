import { Article } from "../models/Article.js";



import express from 'express';




export const editUser = async (req, res) => {
  const postInfoid = req.params.id;
  const {  title, description } = req.body;

  try {
    const postInfo = await Article.findByIdAndUpdate(postInfoid, {
      title,
      description,
    });

    if (!postInfo) {
      res.status(404).json("Music not found");
      return;
    }

    res.status(200).json("Music updated successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteUser = async (req, res) => {
  const postInfo = req.params.id;

  try {
    const postInfo = await Article.findByIdAndDelete(postInfo);

    if (!postInfo) {
      res.status(404).json("Music not found");
      return;
    }

    res.status(200).json("Music deleted successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};







