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

const NomenclaturaContainer = styled.div`
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden; /* Needed for the border radius to work */
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
    transition: background-color 0.3s ease;
  }
`;

const TableHeader = styled.th`
  background-color: #00A367;
  color: white;
  padding: 15px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 15px;
  color: #34495e;
`;

const terms = [
  { prefixSuffix: "-itis", meaning: "Inflamación", examples: "Peritonitis, Pleuritis, Artritis" },
  { prefixSuffix: "-oma", meaning: "Tumor", examples: "Epitelioma, Sarcoma, Hipernefroma" },
  { prefixSuffix: "-ectasia", meaning: "Dilatación", examples: "Gastroectasia, Tifloectasia, Bronquiectasia" },
  { prefixSuffix: "-cele", meaning: "Hernia", examples: "Meningocele, Enterocele" },
  { prefixSuffix: "-ragia", meaning: "Pérdida de sangre", examples: "Hemorragia, Gastrorragia, Enterorragia" },
  { prefixSuffix: "-megalia", meaning: "Aumento de volumen", examples: "Hepatomegalia, Esplenomegalia" },
  { prefixSuffix: "-iasis", meaning: "Formación de cálculos", examples: "Colelitiasis, Nefrolitiasis" },
  { prefixSuffix: "-algia", meaning: "Dolor", examples: "Neuralgia, Mialgia, Odontalgia" },
  { prefixSuffix: "-plasia", meaning: "Formación o desarrollo", examples: "Hiperplasia, Neoplasia, Displasia" },
  { prefixSuffix: "-pnea", meaning: "Respiración", examples: "Apnea, Disnea, Taquipnea" },
  { prefixSuffix: "-lisis", meaning: "Disolución o destrucción", examples: "Hemólisis, Diálisis, Parálisis" },
  { prefixSuffix: "-rragia", meaning: "Flujo excesivo", examples: "Menorragia, Rinorragia, Metrorragia" },
  { prefixSuffix: "hemi-", meaning: "Mitad", examples: "Hemiplejia, Hemicránea" },
  { prefixSuffix: "hiper-", meaning: "Exceso", examples: "Hipertensión, Hipertermia, Hiperlipidemia" },
  { prefixSuffix: "hipo-", meaning: "Deficiencia", examples: "Hipotensión, Hipotermia, Hipoglucemia" },
];

function Nomenclatura() {
  return (
    <NomenclaturaContainer>
      <Title>Nomenclatura Patológica</Title>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Sufijo/Prefijo</TableHeader>
            <TableHeader>Significado</TableHeader>
            <TableHeader>Ejemplo</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {terms.map((term, index) => (
            <TableRow key={index}>
              <TableCell>{term.prefixSuffix}</TableCell>
              <TableCell>{term.meaning}</TableCell>
              <TableCell>{term.examples}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </NomenclaturaContainer>
  );
}

export default Nomenclatura;
