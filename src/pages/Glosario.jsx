import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GlosarioContainer = styled.div`
  padding: 20px;
  max-width: 90%;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color:  #00A367;
  text-align: center;
  border-bottom: 2px solid #00A367;
  padding-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #ecf0f1;
    transform: scale(1.02);
  }
`;

const Term = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #00A367;
  transition: color 0.3s ease;
  &:hover {
    color: #1abc9c;
  }
`;

const Definition = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #34495e;
  text-align: justify;
  transition: color 0.3s ease;
  ${Section}:hover & {
    color: #2c3e50;
  }
`;

const Example = styled.div`
  font-size: 16px;
  color: #7f8c8d;
  margin-top: 10px;
  border-left: 3px solid #00A367;
  padding-left: 10px;
  transition: color 0.3s ease;
  ${Section}:hover & {
    color: #2c3e50;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 10px;
`;

const Video = styled.iframe`
  width: 100%;
  height: 200px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
`;

const Reference = styled.a`
  display: block;
  font-size: 16px;
  color: #00A367;
  margin-top: 5px;
  transition: color 0.3s ease;
  &:hover {
    color: #1abc9c;
  }
`;

const terms = [
    {
      term: "Clínica",
      definition: "Del griego kliné (cama), su significado ha variado con el tiempo, actualmente se refiere a la atención contextualizada de los individuos.",
      example: "Por ejemplo, un paciente con síntomas de gripe será examinado en una clínica para determinar la causa y el tratamiento adecuado.",
    },
    {
      term: "Propedéutica",
      definition: "Es la enseñanza preparatoria para el estudio de una disciplina.",
      video: "https://www.youtube.com/embed/BC5BuUEleAU?si=QZdOu7jaaPVPgBmo"
    },
    {
      term: "Semiología",
      definition: "O más propiamente semeyología, significa el estudio de los signos.",
      references: [
        { title: "Libro de Semiología Médica", link: "https://www.elsevier.com/books/semiologia-medica/davidson/978-84-458-1482-8" },
        { title: "Artículo en PubMed", link: "https://pubmed.ncbi.nlm.nih.gov/25800167/" }
      ]
    },
    {
      term: "Propedéutica Clínica",
      definition: "Enseñanza preparatoria para el estudio de la Medicina Clínica, que tiene por objeto de estudio el proceso salud-enfermedad en el individuo."
    },
    {
      term: "Semiología Médica",
      definition: "Estudia los síntomas, signos y síndromes que competen a la Propedéutica Clínica, y aquellos signos que provienen de los exámenes complementarios (imagenológicos, de laboratorio, bioeléctricos, entre otros)."
    },
    {
      term: "Anamnesis",
      definition: "Recopilación de información sobre la historia médica del paciente obtenida mediante la entrevista clínica.",
      example: "Por ejemplo, un paciente que acude con dolor torácico debe ser interrogado sobre sus antecedentes familiares de enfermedades cardíacas, su historia de tabaquismo, etc."
    },
    {
      term: "Diagnóstico",
      definition: "Determinación de la enfermedad o condición que explica los síntomas y signos del paciente.",
      video: "https://www.youtube.com/embed/g8dAPpSWLn4?si=2485a8Y3Zu_xHKCt"
    },
    {
      term: "Pronóstico",
      definition: "Predicción del curso probable y el resultado de una enfermedad.",
      references: [
        { title: "Libro sobre Pronósticos Médicos", link: "https://www.amazon.com/Medical-Prognosis/dp/0198799993" },
        { title: "Artículo en PubMed", link: "https://pubmed.ncbi.nlm.nih.gov/31995196/" }
      ]
    },
    {
      term: "Tratamiento",
      definition: "Conjunto de medios utilizados para curar o aliviar una enfermedad.",
      example: "El tratamiento para la diabetes incluye cambios en la dieta, ejercicio regular y medicación.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Diabetes_Treatment.jpg"
    },
    {
      term: "Signos Vitales",
      definition: "Indicadores que reflejan el estado fisiológico del cuerpo, incluyendo la temperatura, frecuencia cardíaca, frecuencia respiratoria y presión arterial.",
      video: "https://www.youtube.com/embed/99rk1m3eRBw?si=JZERe1eVna4Fm6-4"
    },
    {
      term: "Exploración Física",
      definition: "Examen clínico del paciente mediante la observación, palpación, percusión y auscultación para obtener datos diagnósticos.",
      references: [
        { title: "Libro de Exploración Física", link: "https://www.amazon.com/Physical-Examination-Health-Assessment/dp/0323761832" },
        { title: "Artículo en PubMed", link: "https://pubmed.ncbi.nlm.nih.gov/29387689/" }
      ]
    },
    {
      term: "Historia Clínica",
      definition: "Registro detallado de la información médica, quirúrgica, familiar y social de un paciente.",
      example: "La historia clínica de un paciente con hipertensión incluirá información sobre su presión arterial, medicamentos actuales, y antecedentes familiares de enfermedades cardíacas.",

    }
  ];
  

function Glosario() {
  return (
    <GlosarioContainer>
      <Title>Glosario de Propedéutica Clínica</Title>
      {terms.map((item, index) => (
        <Section key={index}>
          <Term>{item.term}</Term>
          <Definition>{item.definition}</Definition>
          {item.example && <Example>Ejemplo: {item.example}</Example>}
          {item.image && <Image src={item.image} alt={item.term} />}
          {item.video && <Video src={item.video} title={item.term} />}
          {item.references && item.references.map((ref, refIndex) => (
            <Reference key={refIndex} href={ref.link} target="_blank">{ref.title}</Reference>
          ))}
        </Section>
      ))}
    </GlosarioContainer>
  );
}

export default Glosario;
