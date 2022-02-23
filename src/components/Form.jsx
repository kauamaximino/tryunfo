import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <input data-testid="name-input" name="name" type="text" />
          <textarea data-testid="description-input" name="textarea" cols="30" rows="10" />
          <input data-testid="attr1-input" name="attributes" type="number" />
          <input data-testid="attr2-input" name="attributes2" type="number" />
          <input data-testid="attr3-input" name="attributes3" type="number" />
          <input data-testid="image-input" name="imageText" type="text" />
          <select data-testid="rare-input" name="" id="">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <input
            data-testid="trunfo-input"
            name="super-trunfo"
            type="checkbox"
          />
          <button data-testid="save-button" type="button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
