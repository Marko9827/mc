import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { User } from "@prisma/client";
interface Card_data {
    currentUser?: User | null
}

const CardUI : React.FC<Card_data> = ({
    currentUser
}) => {


return(<Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </Text>
        <Text h3 color="black">
          Acme camera
        </Text>
      </Col>
    </Card.Header>
    </Card>)

}

export default CardUI;