import React from 'react';
import HeroeItem from '../heroeItem/HeroeItem';
import Table from '../table/Table';
import Tbody from '../table/Tbody';
import Th from '../table/Th';
import Tr from '../table/Tr';
import './HeroesTable.css';

const HeroesTable = ({
  editHeroe,
  heroes,
  isRingUsed,
  removeHeroe,
  ringHeroe,
  updateHeroe
}) => {
  return (
    <Table isRingUsed={isRingUsed}>
      <thead className="thead-light">
        <Tr>
          <Th>ID</Th>
          <Th>Nombre</Th>
          <Th>Raza</Th>
          <Th>Edad</Th>
          <Th>Arma</Th>
          <Th>acción</Th>
        </Tr>
      </thead>
      <Tbody>
        {heroes.map((heroe, i) => (
          <HeroeItem
            editHeroe={editHeroe}
            heroe={heroe}
            heroeIndex={i}
            isRingUsed={isRingUsed}
            key={i}
            removeHeroe={removeHeroe}
            ringHeroe={ringHeroe}
            updateHeroe={updateHeroe}
          />
        ))}
      </Tbody>
    </Table>
  );
};

export default HeroesTable;
