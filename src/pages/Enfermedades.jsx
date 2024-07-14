import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animación suave para el componente
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const EnfermedadesContainer = styled.div`
  padding: 20px;
  animation: ${fadeIn} 1s ease-in-out;
  background: #f0f4f8; /* Fondo suave */
  border-radius:18px;
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
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h3`
  font-size: 26px;
  color: #00A367;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px; /* Espacio entre las tarjetas */
  padding:60px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px; /* Ancho fijo para las tarjetas */
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h4`
  font-size: 22px;
  color: #00A367;
  margin-bottom: 10px;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  text-align: left;
`;

const ImportantText = styled.strong`
  color: #333;
`;

function Enfermedades() {
  return (
    <EnfermedadesContainer>
      <Title>Estudio de las Enfermedades</Title>

      <Section>
        <Subtitle>Propedéutica</Subtitle>
        <Description>
          La propedéutica médica se refiere al conjunto de conocimientos y técnicas previas al estudio clínico de las enfermedades. Incluye la enseñanza de métodos de examen y diagnóstico, esenciales para la formación médica.
        </Description>
        <ul>
          <li><ImportantText>Historia Clínica:</ImportantText> Recopilación detallada de antecedentes médicos del paciente.</li>
          <li><ImportantText>Exploración Física:</ImportantText> Técnicas para evaluar el estado físico del paciente mediante la observación, palpación, percusión y auscultación.</li>
          <li><ImportantText>Pruebas Diagnósticas:</ImportantText> Uso de exámenes complementarios como análisis de laboratorio e imágenes médicas.</li>
        </ul>
      </Section>

      <Section>
        <Subtitle>Clínica</Subtitle>
        <Description>
          La clínica es la aplicación práctica de los conocimientos médicos para el diagnóstico y tratamiento de las enfermedades. Se centra en la atención directa al paciente y la interpretación de los síntomas y signos clínicos.
        </Description>
        <ul>
          <li><ImportantText>Diagnóstico Clínico:</ImportantText> Identificación de enfermedades a través del análisis de la historia clínica y los hallazgos físicos.</li>
          <li><ImportantText>Tratamiento:</ImportantText> Planificación y aplicación de terapias adecuadas basadas en el diagnóstico.</li>
          <li><ImportantText>Seguimiento:</ImportantText> Monitoreo continuo de la evolución del paciente y ajuste del tratamiento según sea necesario.</li>
        </ul>
      </Section>

      <Section>
        <Subtitle>Enfermedades Ejemplares</Subtitle>
        <CardContainer>
          <Card>
            <CardTitle>Gripe</CardTitle>
            <CardDescription>
              <ImportantText>Síntomas:</ImportantText> Fiebre, tos, dolor de garganta, dolores musculares.<br />
              <ImportantText>Diagnóstico:</ImportantText> Basado en la historia clínica y pruebas rápidas de influenza.<br />
              <ImportantText>Tratamiento:</ImportantText> Antivirales y medidas de soporte.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Diabetes</CardTitle>
            <CardDescription>
              <ImportantText>Síntomas:</ImportantText> Sed excesiva, aumento de la frecuencia urinaria, pérdida de peso inexplicada.<br />
              <ImportantText>Diagnóstico:</ImportantText> Medición de glucosa en sangre y hemoglobina A1c.<br />
              <ImportantText>Tratamiento:</ImportantText> Insulina, medicamentos orales, dieta y ejercicio.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Hipertensión</CardTitle>
            <CardDescription>
              <ImportantText>Síntomas:</ImportantText> Puede ser asintomática; en casos graves, dolor de cabeza y visión borrosa.<br />
              <ImportantText>Diagnóstico:</ImportantText> Monitoreo de la presión arterial.<br />
              <ImportantText>Tratamiento:</ImportantText> Medicamentos antihipertensivos, cambios en el estilo de vida.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Asma</CardTitle>
            <CardDescription>
              <ImportantText>Síntomas:</ImportantText> Sibilancias, dificultad para respirar, opresión en el pecho.<br />
              <ImportantText>Diagnóstico:</ImportantText> Pruebas de función pulmonar y evaluación clínica.<br />
              <ImportantText>Tratamiento:</ImportantText> Inhaladores broncodilatadores y esteroides.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Artritis Reumatoide</CardTitle>
            <CardDescription>
              <ImportantText>Síntomas:</ImportantText> Dolor articular, hinchazón, rigidez matutina.<br />
              <ImportantText>Diagnóstico:</ImportantText> Pruebas de sangre y evaluación de síntomas.<br />
              <ImportantText>Tratamiento:</ImportantText> Medicamentos antiinflamatorios y modificadores de la enfermedad.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Enfermedad de Alzheimer</CardTitle>
            <CardDescription>
              <ImportantText>Síntomas:</ImportantText> Pérdida de memoria, confusión, cambios en el comportamiento.<br />
              <ImportantText>Diagnóstico:</ImportantText> Evaluación cognitiva y estudios de imagen cerebral.<br />
              <ImportantText>Tratamiento:</ImportantText> Medicamentos para mejorar los síntomas y apoyo a largo plazo.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Parkinson</CardTitle>
            <CardDescription>
              <ImportantText>Síntomas:</ImportantText> Temblor, rigidez, lentitud de movimientos.<br />
              <ImportantText>Diagnóstico:</ImportantText> Evaluación neurológica y pruebas de imagen.<br />
              <ImportantText>Tratamiento:</ImportantText> Medicamentos dopaminérgicos y terapia física.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>COVID-19</CardTitle>
            <CardDescription>
              <ImportantText>Síntomas:</ImportantText> Fiebre, tos, dificultad para respirar, pérdida del olfato.<br />
              <ImportantText>Diagnóstico:</ImportantText> Pruebas PCR y de antígenos.<br />
              <ImportantText>Tratamiento:</ImportantText> Medidas de soporte, antivirales y vacunas.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Cáncer de Mama</CardTitle>
            <CardDescription>
              <ImportantText>Síntomas:</ImportantText> Bulto en el seno, cambios en la forma del seno, secreción del pezón.<br />
              <ImportantText>Diagnóstico:</ImportantText> Mamografía, biopsia y estudios de imagen.<br />
              <ImportantText>Tratamiento:</ImportantText> Cirugía, radioterapia, quimioterapia.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Enfermedad Celíaca</CardTitle>
            <CardDescription>
              <ImportantText>Síntomas:</ImportantText> Dolor abdominal, diarrea, pérdida de peso.<br />
              <ImportantText>Diagnóstico:</ImportantText> Pruebas serológicas y biopsia intestinal.<br />
              <ImportantText>Tratamiento:</ImportantText> Dieta estricta sin gluten.
            </CardDescription>
          </Card>
        </CardContainer>
      </Section>
    </EnfermedadesContainer>
  );
}

export default Enfermedades;
