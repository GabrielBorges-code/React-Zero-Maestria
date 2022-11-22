const TemplateExpressions = () => {
  const name = "Gabriel";
  const data = {
    age: 24,
    job: "Developer Front-end",
  };

  return (
    <div>
      <p>Olá {name}, tudo bem?</p>
      <p>Você tem {data.age} anos de idade</p>
      <p>E trabalha como {data.job}</p>
      <p>{console.log("teste")}</p>
    </div>
  );
};

export default TemplateExpressions;
