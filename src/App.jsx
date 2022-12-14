import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCard: [],
    };
  }

  onInputChange = ({ target: { checked, type, name, value } }) => {
    const result = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: result,
    }, this.validateForm);
  };

  validateForm = () => {
    const { cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const max = 90;
    const sumMax = 210;

    if (
      cardName === ''
      || cardImage === ''
      || cardDescription === ''
      || Number(cardAttr1) < 0 || Number(cardAttr1) > max
      || Number(cardAttr2) < 0 || Number(cardAttr2) > max
      || Number(cardAttr3) < 0 || Number(cardAttr3) > max
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > sumMax
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  onSaveButtonClick = () => {
    const { state } = this;

    const newCard = {
      cardName: state.cardName,
      cardImage: state.cardImage,
      cardDescription: state.cardDescription,
      cardAttr1: state.cardAttr1,
      cardAttr2: state.cardAttr2,
      cardAttr3: state.cardAttr3,
      cardRare: state.cardRare,
      cardTrunfo: state.cardTrunfo,
    };

    this.setState((prev) => ({ saveCard: [...prev.saveCard, newCard] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }, this.validateTrunfo);
  }

  validateTrunfo = () => {
    const { saveCard } = this.state;
    if (saveCard.some((elem) => elem.cardTrunfo === true)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  removeCard = ({ target: { id } }) => {
    const { saveCard } = this.state;
    this.setState(({ saveCard: saveCard.filter((item) => item.cardName !== id) }),
      this.validateTrunfo);
  };

  render() {
    const { state, onSaveButtonClick, onInputChange, removeCard } = this;

    return (
      <div>
        <Form
          cardName={ state.cardName }
          cardDescription={ state.cardDescription }
          cardAttr1={ state.cardAttr1 }
          cardAttr2={ state.cardAttr2 }
          cardAttr3={ state.cardAttr3 }
          cardImage={ state.cardImage }
          cardRare={ state.cardRare }
          cardTrunfo={ state.cardTrunfo }
          hasTrunfo={ state.hasTrunfo }
          isSaveButtonDisabled={ state.isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
          onInputChange={ onInputChange }
        />
        <Card
          cardName={ state.cardName }
          cardDescription={ state.cardDescription }
          cardAttr1={ state.cardAttr1 }
          cardAttr2={ state.cardAttr2 }
          cardAttr3={ state.cardAttr3 }
          cardImage={ state.cardImage }
          cardRare={ state.cardRare }
          cardTrunfo={ state.cardTrunfo }
        />

        {state.saveCard.map((elem) => (
          <section key={ elem.cardName }>
            <Card
              { ...elem }
            />
            <button
              data-testid="delete-button"
              type="button"
              id={ elem.cardName }
              onClick={ removeCard }
            >
              Excluir
            </button>

          </section>
        ))}
      </div>
    );
  }
}

export default App;
