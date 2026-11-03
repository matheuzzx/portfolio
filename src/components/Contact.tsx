import { Button, CopyButton, Text, Title } from '@mantine/core';

function Contact() {
  const email = 'promatheusmedeiros@gmail.com';

  return (
    <section id="contato" className="contact">
      <div>
        <Title order={2}>Vamos conversar?</Title>
        <Text>
          Aberto a estágio e vagas júnior em backend Java, presencial ou remoto.
        </Text>
      </div>

      <div className="mail">
        <code>{email}</code>

        <CopyButton value={email} timeout={1600}>
          {({ copied, copy }) => (
            <Button onClick={copy} size="md" color={copied ? 'teal' : undefined}>
              {copied ? 'Copiado' : 'Copiar e-mail'}
            </Button>
          )}
        </CopyButton>
      </div>
    </section>
  );
}

export default Contact;
