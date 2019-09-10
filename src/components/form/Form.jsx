import React, { useState, useContext } from 'react';
import Context from '../../Context';

import './Form.css';

const isDisabled = (name, race, age, weapon) => {
  return name === '' || race === '' || age === '' || age <= 0 || weapon === '';
};

const Form = () => {
  const state = useContext(Context);
  const { heroesList, setHeroesList } = state;
  const [newUser, setNewUser] = useState({
    name: '',
    race: '',
    age: undefined,
    weapon: '',
    isKill: false,
    useRing: false
  });

  const handleOnChangeInput = event => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmitHeroe = event => {
    event.preventDefault();
    let newHeroesList = heroesList.slice();
    newHeroesList = newHeroesList.concat(newUser);
    setHeroesList(newHeroesList);
    setNewUser({
      name: '',
      race: '',
      age: 0,
      weapon: '',
      isKill: false,
      useRing: false
    });
  };

  return (
    <form onSubmit={handleSubmitHeroe} className="heroes--form">
      <div className="form-group row align-items-end">
        <div className="col-6 col-sm-4">
          <label htmlFor="name" className="col-form-label">
            Nombre
          </label>
          <input
            onChange={handleOnChangeInput}
            value={newUser.name}
            type="text"
            name="name"
            className="form-control"
            placeholder="Sam"
          />
        </div>
        <div className="col-6 col-sm-2">
          <label htmlFor="race" className="col-form-label">
            Raza
          </label>
          <input
            onChange={handleOnChangeInput}
            value={newUser.race}
            type="text"
            name="race"
            className="form-control"
            placeholder="Hobbit"
          />
        </div>
        <div className="col-6 col-sm-2">
          <label htmlFor="age" className="col-form-label">
            Edad
          </label>
          <input
            onChange={handleOnChangeInput}
            value={newUser.age}
            type="number"
            name="age"
            className="form-control"
            placeholder="30"
          />
        </div>
        <div className="col-6 col-sm-2">
          <label htmlFor="weapon" className="col-form-label">
            Arma
          </label>
          <input
            onChange={handleOnChangeInput}
            value={newUser.weapon}
            type="text"
            name="weapon"
            className="form-control"
            placeholder="Puño"
          />
        </div>
        <div className="col-sm-2">
          <button
            className="btn btn-primary"
            disabled={isDisabled(
              newUser.name,
              newUser.race,
              newUser.age,
              newUser.weapon
            )}
          >
            Agregar
          </button>
        </div>
      </div>
    </form>
  );
};
export default Form;
