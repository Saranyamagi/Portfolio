const stack = [
  "Python - Pandas, NumPy, Matplotlib, Seaborn, TensorFlow, Keras, Langchain, ChromaDB, HuggingFace Transformers",
  "SQL – PostgreSQL, MongoDB",
  "Power BI",
  "Tableau",
  "HTML",
  "CSS",
  "Data Science",
  "Data Analytics",
  "ETL Process",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
];

export const Stack = () => {
  return (
    <section>
      <h3 className="title-font white-text ">Here are a few tools & technologies I’ve been working with:</h3>
      <ol className="stack-list">
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  );
};
