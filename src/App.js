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
      isSaveButtonDisabled: true,
      saveCard: [],
    };
  }

  changeState = ({ target: { checked, type, name, value } }) => {
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
    });
  }

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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <Form
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.changeState }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
