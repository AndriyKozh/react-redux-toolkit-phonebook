import Form from './Form/Form';
import Filter from './Filter/Filter';
import { AppBlock } from './App.style';
import Phonebook from './Phonebook/Phonebook';
import PhoneStyle from './PhoneStyle/PhoneStyle';
import Clock from './Clock/Clock';

export const App = () => {
  return (
    <AppBlock className="App">
      <div className="content">
        <div className="emblem">
          <Form />
          <Filter />
          <Phonebook />
        </div>
        <PhoneStyle />
      </div>
      <Clock />
    </AppBlock>
  );
};
