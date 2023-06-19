'use client'
import * as React from 'react';
import axios from 'axios' 
import CardUI2 from "@/src/app/components/product/card";
import { User } from '@prisma/client';
import { useEffect, useState } from 'react';
import CONF from '@/src/app/layout'
import { Modal,Table, useModal, Button, Image,Card, Tooltip, Grid, Row, Text, Input} from "@nextui-org/react";
 
interface GridListProps {
  currentUser?: User | null 
}

const GridList : React.FC<GridListProps> = ({
  currentUser 
}) => {
  const [data, setData] = useState([]);
  const [searchval, setSearchval] = useState("");
  const { setVisible, bindings } = useModal()

  useEffect(() => {
    axios.get('http://localhost:3001/products/')
      .then(response => {
        const jsonData = response.data;
        setData(jsonData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

       
      
      
    return (
<>
<Grid.Container gap={2} justify="center">
      <Grid xs={12}>
      <Input onChange={(ev) => {
  setSearchval(ev.target.value)
}} clearable bordered labelPlaceholder="Search Phones" initialValue="" />
      </Grid>
  <Grid xs={12}>
  <Grid.Container gap={2} justify="flex-start">
      {data.filter((val)=>{
        if(searchval == ""){
          return val;
        } else if (val['os']?.toLowerCase().includes(searchval.toLowerCase())){
          return val;
        } else{}
      }).map((item, index) => 
     
      (
         
        <Grid xs={6} sm={3} key={index}>
       <Tooltip           placement="bottom"
 color="invert" content={"Show more information for " + item['os'] }> 
          <CardUI2  onClick={() => setVisible(true)}   image={item['image']} os={item['os']} screen={item['screen']} price={item['price']} />
        
      </Tooltip> </Grid>
      ))}
    </Grid.Container>
  </Grid>
    </Grid.Container>
 
    <Modal
        scroll 
        animated={true}
        fullScreen={true}
        blur={true}
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
           More information for  
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
          <Grid.Container gap={2} justify="center">
      <Grid xs={2}>
          <Card.Image
        src="http://localhost:3001/phone1.jpg"
        objectFit="scale-down"
                width="100%"
                height={250} 


                alt={''}
              /> 
              </Grid>
              <Grid xs={10}>
           <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Value</Table.Column> 

      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Ipad</Table.Cell>   
        </Table.Row>
       
      </Table.Body>
    </Table>
    </Grid>
    </Grid.Container>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      </>
    /*
    <Grid.Container gap={2} justify="center">
 

      {data.map(item => (
        <Grid key={item['id']}>
        
        <CardUI2 image={item['image']} os={item['os']} screen={item['screen']} />
     </Grid>
      ))}
       
</Grid.Container>
*/)
}


export default GridList