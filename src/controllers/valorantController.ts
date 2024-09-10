import { Request, Response } from 'express';
import axios from 'axios';

const BASE_URL = 'https://valorant-api.com/v1';

// Função para obter dados dos agentes
export const getAgents = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://valorant-api.com/v1/agents');
    const agents = response.data.data;

    res.render('agents', { agents });
  } catch (error) {
    res.status(500).send('Erro ao buscar os agentes.');
  }
};

// Função para obter dados das armas
export const getWeapons = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://valorant-api.com/v1/weapons');
    const weapons = response.data.data;

    res.render('weapons', { weapons });
  } catch (error) {
    res.status(500).send('Erro ao buscar as armas.');
  }
};

// Função para obter dados dos mapas
export const getMaps = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://valorant-api.com/v1/maps');
    const maps = response.data.data;

    res.render('maps', { maps });
  } catch (error) {
    res.status(500).send('Erro ao buscar os mapas.');
  }
};

// Função para obter dados das skins
export const getSkins = async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://valorant-api.com/v1/weapons/skins');
    const skins = response.data.data;

    res.render('skins', { skins });
  } catch (error) {
    res.status(500).send('Erro ao buscar as skins.');
  }
};

export const showHomePage = (req: Request, res: Response) => {
  const categories = [
    { name: 'Agentes', url: '/valorant/agents' },
    { name: 'Armas', url: '/valorant/weapons' },
    { name: 'Mapas', url: '/valorant/maps' },
    { name: 'Skins', url: '/valorant/skins' },
  ];

  res.render('home', { categories });
};