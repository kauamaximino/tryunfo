import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              data-testid="name-input"
              id="name"
              type="text"
            />
          </label>

          <label htmlFor="textarea">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              id="textarea"
              cols="30"
              rows="10"
            />
          </label>

          <label htmlFor="attributes">
            Atributo 1:
            <input
              data-testid="attr1-input"
              id="attributes"
              type="number"
            />
          </label>

          <label htmlFor="attributes2">
            Atributo 2:
            <input
              data-testid="attr2-input"
              id="attributes2"
              type="number"
            />
          </label>

          <label htmlFor="attributes3">
            Atributo 3:
            <input
              data-testid="attr3-input"
              id="attributes3"
              type="number"
            />
          </label>

          <label htmlFor="imageText">
            Imagem:
            <input
              data-testid="image-input"
              id="imageText"
              type="text"
            />
          </label>

          <label htmlFor="select-rare">
            Raridade:
            <select
              data-testid="rare-input"
              id="select-rare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="super-trunfo">
            Super Trybe Trunfo:
            <input
              data-testid="trunfo-input"
              id="super-trunfo"
              type="checkbox"
            />
          </label>

          <button data-testid="save-button" type="button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
