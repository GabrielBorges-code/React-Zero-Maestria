const Challenge = () => {
  const num1 = 123;
  const num2 = 8203;

  const handleSoma = () => {
    console.log(num1 + num2);
  };

  return (
    <div>
      <p>
        {num1} + {num2} = {num1 + num2}
      </p>
      <button onClick={handleSoma}>somar</button>
    </div>
  );
};

export default Challenge;
