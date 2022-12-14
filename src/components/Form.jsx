import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              data-testid="name-input"
              name="cardName"
              id="name"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="textarea">
            Descrição da carta:
            <textarea
              data-testid="description-input"
              name="cardDescription"
              id="textarea"
              cols="30"
              rows="10"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attributes1">
            Atributo 1:
            <input
              data-testid="attr1-input"
              name="cardAttr1"
              id="attributes1"
              type="number"
              max="90"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attributes2">
            Atributo 2:
            <input
              data-testid="attr2-input"
              name="cardAttr2"
              id="attributes2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attributes3">
            Atributo 3:
            <input
              data-testid="attr3-input"
              name="cardAttr3"
              id="attributes3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="imageText">
            Imagem:
            <input
              data-testid="image-input"
              name="cardImage"
              id="imageText"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="select-rare">
            Raridade:
            <select
              data-testid="rare-input"
              name="cardRare"
              id="select-rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          { hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : (
            <label htmlFor="super-trunfo">
              Super Trybe Trunfo:
              <input
                data-testid="trunfo-input"
                name="cardTrunfo"
                id="super-trunfo"
                type="checkbox"
                value={ cardTrunfo }
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )}
          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
