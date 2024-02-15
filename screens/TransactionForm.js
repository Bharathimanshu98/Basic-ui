import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const TransactionForm = ({ onAddTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddTransaction = () => {
    const newTransaction = {
      id: Math.random(),
      title,
      amount: parseFloat(amount),
    };
    onAddTransaction(newTransaction);
    setTitle('');
    setAmount('');
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />
      <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
        keyboardType="numeric"
      />
      <Button title="Add Transaction" onPress={handleAddTransaction} />
    </View>
  );
};

export default TransactionForm;
