import React from 'react';
import { Avatar, Button, Typography } from 'antd';
import { useWeb3React } from '@web3-react/core';
import useWizeMoonContract from '../../hooks/useContract';
import { Pokemon } from '../../types/pokemon';
import { StyledPokemonCard } from './styled';

const PokemonCard: React.FC<{
  pokemon: Pokemon;
}> = ({ pokemon }) => {
  const { active } = useWeb3React();
  const id = pokemon.id;
  const { sendToken } = useWizeMoonContract();

  const handleBuyItem = async () => {
    const amount = pokemon.initialPrice || '0';
    await sendToken(amount);
  };

  return (
    <StyledPokemonCard title={pokemon.name} style={{ width: 256 }}>
      <Avatar
        shape="square"
        size={64}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <Typography>
        Price: <strong>{pokemon.initialPrice} WIZEMOON</strong>
      </Typography>
      <Button
        disabled={!active}
        onClick={handleBuyItem}
        title={active ? 'Click to Buy' : 'Connect wallet first'}
      >
        BUY
      </Button>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
