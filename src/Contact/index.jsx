import React, { useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormTextaria,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "./ContactElements";

const Contact = ({ title = "Let’s connect." }) => {
  const [textValue, setTextValue] = useState("");
  const handleChange = (event) => {
    setTextValue({ value: event.target.value });
  };
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Francon Capital</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>{title}</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput htmlFor="name" required />
              <FormLabel htmlFor="for" type="email">
                Email
              </FormLabel>
              <FormInput htmlFor="email" required />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormTextaria
                htmlFor="message"
                required
                value={textValue.value}
                onChange={handleChange}
              />
              <FormButton type="submit">Send</FormButton>
              <Text>
                Send applications for financing promising projects to:
                projects@franconcapital.com
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
