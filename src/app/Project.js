// pages/repository.js

import { useEffect, useState } from 'react';
//import axios from 'axios';

const Project = () => {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    async function fetchRepoData() {
      try {
        const response = await axios.get('https://api.github.com/repos/utui-sempai/repositorio');
        if (response.status === 200) {
          setRepoData(response.data);
        } else {
          throw new Error('Erro ao buscar dados do repositório');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchRepoData();
  }, []);

  return (
    <div>
      <h1 className='text-4xl text-center mt-20 font-bold'> Projecto Construidos</h1>
      {repoData ? (
        <div>

          <h2>{repoData.full_name}</h2>
          <p>Description: {repoData.description}</p>
          <p>URL: <a href={repoData.html_url} target="_blank" rel="noopener noreferrer">{repoData.html_url}</a></p>
          <p>Stars: {repoData.stargazers_count}</p>
          <p>Watchers: {repoData.watchers_count}</p>
          {/* Adicione outros dados do repositório que deseja exibir */}
        </div>
      ) : (
        <p className='text-center mt-8'>Carregando dados do repositório...</p>
      )}
    </div>
  );
};

export default Project;