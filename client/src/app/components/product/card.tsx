'use client'
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import * as React from 'react'; 
import { User } from '@prisma/client'
interface card_details {
    os?: String | null,
    screen?: String | null,
    ram?: String | null,
    image?: String| null,
    category?: String | null,
    price?: String | null,
    currentUser?: User | null
}

const cardUI2 : React.FC<card_details> = ({
    os,
    screen,
    ram,
    image,
    price,
    category,
    currentUser
}) => {

  return(
    <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
        src={'http://localhost:3001/'+ image}
        objectFit="cover"
                width="100%"
                height={140}
                alt={''+os}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{os}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  $ {price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
  /*<Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
      {os}
        </Text>
        <Text h3 color="black">
           Name: {os}, Ram: {ram}, Screen: {screen}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={'http://localhost:3001/'+ image}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            {category}
          </Text>
          <Text color="#000" size={12}>
            View more
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Notify Me
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  */);

}


export default cardUI2
