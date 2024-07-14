import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Image1 from '../assets/image1.jpeg'; 
import Image2 from '../assets/image2.jpeg'; 
import Image3 from '../assets/image3.jpeg'; 
import ProfileImage from '../assets/profile-image.jpg'; 

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px;
  animation: fadeIn 2s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const IntroSection = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px 20px;
  background: #f5f5f5;
  color: #333;
  border-radius: 18px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
  width: 80%;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 160px;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 27px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ProfileImageStyled = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 4px solid #fff;
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 1.5rem;

  &:hover {
    color: #777;
  }
`;

const IntroContent = styled.div`
  max-width: 600px;
`;

const IntroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const IntroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
`;

const IntroParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ContentSection = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #00A367;
  text-align: left;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 15px;
  color: #555;
  text-align: justify;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  background: #00A367;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s;

  &:hover {
    background: #45a049;
  }
`;

const TestimonialsSection = styled.div`
  width: 80%;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Testimonial = styled.div`
  background: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 10px;
  color: #555;
`;

const TestimonialAuthor = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const GallerySection = styled.div`
  width: 80%;
  margin: 40px auto;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const TeamSection = styled.div`
  width: 80%;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const TeamMemberName = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const TeamMemberRole = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const PublicationsSection = styled.div`
  width: 80%;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Publication = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const PublicationTitle = styled.h3`
  font-size: 1.5rem;
  color: #00A367;
`;

const PublicationDetails = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const ContactSection = styled.div`
  width: 80%;
  margin: 40px auto;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: left;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <IntroSection>
        <ProfileImageWrapper>
          <ProfileImageStyled src={ProfileImage} alt="Ángela María Sánchez Herrera" />
          <SocialLinks>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialLink>
          </SocialLinks>
        </ProfileImageWrapper>
        <IntroContent>
          <IntroTitle>Ángela María Sánchez Herrera</IntroTitle>
          <IntroSubtitle>Docente de Propedéutica Clínica</IntroSubtitle>
          <IntroParagraph>
            Con más de 10 años de experiencia en la enseñanza y la práctica médica, me dedico a formar a la próxima generación de profesionales de la salud con un enfoque en la propedéutica clínica y la semiología médica.
          </IntroParagraph>
        </IntroContent>
      </IntroSection>
      <ContentSection>
        <SectionTitle>Introducción a la Propedéutica Clínica</SectionTitle>
        <Paragraph>
          La Propedéutica Clínica es la enseñanza preparatoria para el estudio de la Medicina Clínica. Este campo se centra en el proceso salud-enfermedad en el individuo y es esencial para entender y diagnosticar de manera efectiva. Los estudiantes aprenden a identificar y evaluar los síntomas y signos clínicos que presentan los pacientes.
        </Paragraph>
        <Paragraph>
          La formación incluye técnicas fundamentales en la exploración física, como la observación, la palpación, la percusión y la auscultación. Además, se instruye a los estudiantes en la correcta realización de una historia clínica completa, que es la herramienta principal para la evaluación inicial de un paciente.
        </Paragraph>
        <Paragraph>
          La historia clínica debe incluir los antecedentes personales y familiares, la descripción detallada de los síntomas actuales y la revisión por sistemas. Este proceso es crucial para la evaluación y el diagnóstico adecuado del paciente.
        </Paragraph>
        <Paragraph>
          La Propedéutica Clínica también prepara a los futuros médicos en el arte de la semiología, que es el estudio de los signos y síntomas de las enfermedades. Este conocimiento es esencial para realizar diagnósticos precisos y establecer planes de tratamiento adecuados.
        </Paragraph>
        <Paragraph>
          A través de esta disciplina, los estudiantes desarrollan habilidades clínicas fundamentales, incluyendo la comunicación efectiva con los pacientes, el análisis crítico de los síntomas y la toma de decisiones basada en la evidencia. Estas habilidades son esenciales para la práctica médica competente y ética.
        </Paragraph>
        <Paragraph>
          La Propedéutica Clínica se integra con otras disciplinas médicas como la farmacología, la radiología y la patología, proporcionando una base sólida para el diagnóstico y tratamiento integral del paciente. De este modo, los estudiantes están mejor preparados para abordar los desafíos de la práctica médica moderna.
        </Paragraph>
      </ContentSection>
      <ContentSection>
        <SectionTitle>Importancia de la Semiología Médica</SectionTitle>
        <Grid>
          <GridItem>
            <Paragraph>
              La Semiología Médica estudia los síntomas, signos y síndromes que competen a la Propedéutica Clínica, y aquellos signos que provienen de los exámenes complementarios (imagenológicos, de laboratorio, bioeléctricos, entre otros).
            </Paragraph>
            <Image src={Image2} alt="Semiología Médica" />
          </GridItem>
          <GridItem>
            <Paragraph>
              El estudio de los síntomas debe ser realizado siguiendo, siempre que sea posible, la sistemática que detallamos: concepto o definición, semiogénesis, semiotecnia, semiografía, semiodiagnóstico y cronopatograma.
            </Paragraph>
            <Image src={Image3} alt="Semiología Médica" />
          </GridItem>
        </Grid>
      </ContentSection>

      <TestimonialsSection>
        <SectionTitle>Testimonios</SectionTitle>
        <Testimonial>
          <TestimonialText>
            "La Propedéutica Clínica me ha permitido entender de manera profunda el proceso salud-enfermedad. Es una herramienta invaluable para cualquier estudiante de medicina."
          </TestimonialText>
          <TestimonialAuthor>Dr. Juan Pérez</TestimonialAuthor>
        </Testimonial>
        <Testimonial>
          <TestimonialText>
            "Gracias a la semiología médica, he podido desarrollar habilidades críticas para diagnosticar y tratar a mis pacientes con mayor precisión."
          </TestimonialText>
          <TestimonialAuthor>Dra. María García</TestimonialAuthor>
        </Testimonial>
        <Testimonial>
          <TestimonialText>
            "La enseñanza de la Propedéutica Clínica ha sido fundamental en mi formación como médico. La atención al detalle y el enfoque práctico han sido invaluables."
          </TestimonialText>
          <TestimonialAuthor>Dr. Pedro López</TestimonialAuthor>
        </Testimonial>
      </TestimonialsSection>



      <PublicationsSection>
        <SectionTitle>Publicaciones Recientes</SectionTitle>
        <Publication>
          <PublicationTitle>Impacto de la Propedéutica Clínica en la Formación Médica</PublicationTitle>
          <PublicationDetails>
            Autor: Dr. Juan Pérez | Publicado en: Revista de Medicina Clínica | Fecha: Junio 2024
          </PublicationDetails>
        </Publication>
        <Publication>
          <PublicationTitle>Avances en la Semiología Médica</PublicationTitle>
          <PublicationDetails>
            Autor: Dra. María García | Publicado en: Journal of Clinical Medicine | Fecha: Mayo 2024
          </PublicationDetails>
        </Publication>
      </PublicationsSection>
      <GallerySection>
        <SectionTitle>Galería</SectionTitle>
        <GalleryGrid>
          <GalleryImage src={Image1} alt="Galería 1" />
          <GalleryImage src={Image2} alt="Galería 2" />
          <GalleryImage src={Image3} alt="Galería 3" />
        </GalleryGrid>
      </GallerySection>
      <ContactSection>
        <SectionTitle>Contacto</SectionTitle>
        <ContactForm>
          <FormLabel>Nombre</FormLabel>
          <FormInput type="text" name="name" required />
          <FormLabel>Email</FormLabel>
          <FormInput type="email" name="email" required />
          <FormLabel>Mensaje</FormLabel>
          <FormTextarea name="message" rows="5" required />
          <Button type="submit">Enviar</Button>
        </ContactForm>
      </ContactSection>

      <ContentSection>
        <SectionTitle>Más Información</SectionTitle>
        <Paragraph>
          Puedes aprender más sobre estos temas explorando nuestras secciones de Glosario, Nomenclatura y Enfermedades. Cada sección ofrece información detallada y recursos adicionales para ayudarte en tu estudio.
        </Paragraph>
        <Button onClick={() => window.scrollTo(0, 0)}>Volver al inicio</Button>
      </ContentSection>
    </HomeContainer>
  );
};

export default Home;
