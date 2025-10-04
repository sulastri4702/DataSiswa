// import { response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getSiswa = async (req, res) => {
  try {
    const response = await prisma.datasiswa.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSiswaById = async (req, res) => {
  try {
    const response = await prisma.datasiswa.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createSiswa = async (req, res) => {
  const { nama, umur } = req.body;
  try {
    const response = await prisma.datasiswa.create({
      data: {
        nama: nama,
        umur: umur,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSiswa = async (req, res) => {
  const { nama, umur } = req.body;
  try {
    const response = await prisma.datasiswa.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        nama,
        umur,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSiswa = async (req, res) => {
  try {
    const response = await prisma.datasiswa.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error("Delete error:", error); // log error ke console
    res.status(400).json({ message: error.message });
  }
};
